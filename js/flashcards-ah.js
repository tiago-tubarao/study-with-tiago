// ══════════════════════════════════════════════
// Confidence-Based Repetition Flashcards — Adult Health Exam 3
// Brainscape-style 1-5 rating with weighted card selection
// ══════════════════════════════════════════════

(function() {
  const data = window.FLASHCARD_DATA_AH;
  if (!data) return;

  const STORAGE_KEY = 'swt_ah_cbr';

  let allCards = [...data.cards];
  let queue = [];       // weighted queue of card indices
  let currentIndex = 0; // index into allCards
  let isFlipped = false;
  let cardsStudied = 0;
  let activeSection = 'all';

  // ── Confidence State (1-5 per card, null = unseen) ──
  function loadRatings() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
  }
  function saveRatings(r) { localStorage.setItem(STORAGE_KEY, JSON.stringify(r)); }
  function getCardKey(card) { return card.drugName.replace(/\s+/g, '_').toLowerCase(); }

  let ratings = loadRatings();

  // ── Weighted Queue Builder ──
  // Cards rated 1 appear 5x, rated 2 appear 4x, etc. Unseen appear 3x.
  function buildQueue(section) {
    const pool = section === 'all' ? allCards : allCards.filter(c => c.section === section);
    queue = [];
    pool.forEach(card => {
      const key = getCardKey(card);
      const idx = allCards.indexOf(card);
      const rating = ratings[key];
      let weight;
      if (rating === undefined || rating === null) weight = 3; // unseen
      else if (rating === 1) weight = 5;
      else if (rating === 2) weight = 4;
      else if (rating === 3) weight = 3;
      else if (rating === 4) weight = 2;
      else weight = 1; // rating 5
      for (let i = 0; i < weight; i++) queue.push(idx);
    });
    // Shuffle the queue
    for (let i = queue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [queue[i], queue[j]] = [queue[j], queue[i]];
    }
  }

  function nextCard() {
    if (!queue.length) buildQueue(activeSection);
    if (!queue.length) return;
    currentIndex = queue.shift();
    isFlipped = false;
    renderCard();
  }

  // ── Initialize ──
  const deckWrap = document.getElementById('fcDeckWrap');
  if (deckWrap) {
    deckWrap.style.display = 'block';
    deckWrap.style.opacity = '1';
    buildQueue('all');
    renderStats();
    nextCard();
  }

  // ── Build filter buttons ──
  const filtersEl = document.getElementById('fcFilters');
  if (filtersEl) {
    const allBtn = document.createElement('button');
    allBtn.className = 'fc-filter active';
    allBtn.dataset.section = 'all';
    allBtn.textContent = `All (${allCards.length})`;
    filtersEl.appendChild(allBtn);

    data.sections.forEach(s => {
      const count = allCards.filter(c => c.section === s.id).length;
      const btn = document.createElement('button');
      btn.className = 'fc-filter';
      btn.dataset.section = s.id;
      btn.textContent = `${s.icon} ${s.label} (${count})`;
      btn.style.setProperty('--filter-color', s.color);
      filtersEl.appendChild(btn);
    });

    filtersEl.addEventListener('click', function(e) {
      const btn = e.target.closest('.fc-filter');
      if (!btn) return;
      filtersEl.querySelectorAll('.fc-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeSection = btn.dataset.section;
      buildQueue(activeSection);
      nextCard();
      renderStats();
    });
  }

  // ── Stats ──
  function renderStats() {
    const statsEl = document.getElementById('fcStats');
    if (!statsEl) return;

    const pool = activeSection === 'all' ? allCards : allCards.filter(c => c.section === activeSection);
    const total = pool.length;
    const counts = [0, 0, 0, 0, 0, 0]; // [unseen, 1, 2, 3, 4, 5]
    pool.forEach(card => {
      const r = ratings[getCardKey(card)];
      if (r === undefined || r === null) counts[0]++;
      else counts[r]++;
    });

    const mastered = counts[4] + counts[5];
    const weak = counts[1] + counts[2];
    const learning = counts[3];
    const unseen = counts[0];
    const masteredPct = Math.round((mastered / total) * 100);

    statsEl.innerHTML = `
      <div class="fc-stats-row">
        <div class="fc-stat-block">
          <span class="fc-stat-big">${masteredPct}%</span>
          <span class="fc-stat-sub">Mastered</span>
        </div>
        <div class="fc-stat-block">
          <span class="fc-stat-big">${cardsStudied}</span>
          <span class="fc-stat-sub">Studied</span>
        </div>
      </div>
      <div class="fc-distribution">
        <div class="fc-dist-bar">
          ${counts[1] ? `<div class="fc-dist-seg fc-dist-1" style="flex:${counts[1]}" title="${counts[1]} rated 1"></div>` : ''}
          ${counts[2] ? `<div class="fc-dist-seg fc-dist-2" style="flex:${counts[2]}" title="${counts[2]} rated 2"></div>` : ''}
          ${counts[3] ? `<div class="fc-dist-seg fc-dist-3" style="flex:${counts[3]}" title="${counts[3]} rated 3"></div>` : ''}
          ${counts[4] ? `<div class="fc-dist-seg fc-dist-4" style="flex:${counts[4]}" title="${counts[4]} rated 4"></div>` : ''}
          ${counts[5] ? `<div class="fc-dist-seg fc-dist-5" style="flex:${counts[5]}" title="${counts[5]} rated 5"></div>` : ''}
          ${unseen ? `<div class="fc-dist-seg fc-dist-0" style="flex:${unseen}" title="${unseen} unseen"></div>` : ''}
        </div>
        <div class="fc-dist-legend">
          <span class="fc-leg"><span class="fc-leg-dot fc-dist-1"></span>${counts[1]}</span>
          <span class="fc-leg"><span class="fc-leg-dot fc-dist-2"></span>${counts[2]}</span>
          <span class="fc-leg"><span class="fc-leg-dot fc-dist-3"></span>${counts[3]}</span>
          <span class="fc-leg"><span class="fc-leg-dot fc-dist-4"></span>${counts[4]}</span>
          <span class="fc-leg"><span class="fc-leg-dot fc-dist-5"></span>${counts[5]}</span>
          <span class="fc-leg"><span class="fc-leg-dot fc-dist-0"></span>${unseen} new</span>
        </div>
      </div>
    `;
  }

  // ── Card Rendering ──
  function renderCard() {
    const card = allCards[currentIndex];
    const cardEl = document.getElementById('fcCard');
    const sectionData = data.sections.find(s => s.id === card.section);
    const sectionColor = sectionData ? sectionData.color : '#2A9D8F';
    const key = getCardKey(card);
    const rating = ratings[key];

    // Reset flip
    cardEl.classList.remove('flipped');

    // Hide rating bar until flipped
    const ratingBar = document.getElementById('fcRatingBar');
    if (ratingBar) ratingBar.classList.remove('visible');

    // Front
    document.getElementById('fcFrontIcon').textContent = card.icon || '';

    const drugNameEl = document.getElementById('fcDrugName');
    drugNameEl.textContent = card.drugName;
    const nameLen = card.drugName.length;
    if (nameLen > 30) drugNameEl.style.fontSize = '1em';
    else if (nameLen > 20) drugNameEl.style.fontSize = '1.2em';
    else drugNameEl.style.fontSize = '1.5em';

    document.getElementById('fcBrandName').textContent = card.brandName ? `${card.brandName}` : '';
    const pill = document.getElementById('fcClassPill');
    pill.textContent = card.drugClass;
    pill.style.background = sectionColor;
    document.getElementById('fcPurpose').textContent = card.purpose;

    // Rating badge on front
    const badge = document.getElementById('fcRatingBadge');
    if (badge) {
      if (rating) {
        badge.textContent = rating;
        badge.className = `fc-rating-badge fc-rbadge-${rating}`;
      } else {
        badge.textContent = 'NEW';
        badge.className = 'fc-rating-badge fc-rbadge-new';
      }
    }

    // Section label on front
    const sectionLabel = document.getElementById('fcSectionLabel');
    if (sectionLabel) {
      sectionLabel.textContent = sectionData ? `${sectionData.icon} ${sectionData.label}` : '';
      sectionLabel.style.color = sectionColor;
    }

    // Back
    document.getElementById('fcBackHeader').textContent = card.drugName;
    const backSection = document.getElementById('fcBackSection');
    if (backSection) {
      backSection.textContent = sectionData ? `${sectionData.icon} ${sectionData.label}` : '';
      backSection.style.color = sectionColor;
    }

    const factsEl = document.getElementById('fcFacts');
    factsEl.innerHTML = '';
    card.facts.forEach(f => {
      const li = document.createElement('li');
      const escaped = f.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      li.innerHTML = escaped
        .replace(/(STOP|NEVER|FIRST|ALWAYS|CRITICAL|EMERGENCY|BBW|BLACK BOX|#1)/g, '<strong style="color:#C92A2A">$1</strong>')
        .replace(/(antidote|Antidote)(:?\s)/gi, '<strong style="color:#2B8A3E">$1</strong>$2');
      factsEl.appendChild(li);
    });

    const mnEl = document.getElementById('fcMnemonic');
    mnEl.textContent = card.mnemonic ? `💡 ${card.mnemonic}` : '';

    // Card border color
    document.querySelector('.fc-card-front').style.borderTopColor = sectionColor;
    document.querySelector('.fc-card-back').style.borderTopColor = sectionColor;

    // Update rating button highlights
    document.querySelectorAll('.fc-rate-btn').forEach(btn => {
      btn.classList.toggle('current', parseInt(btn.dataset.rating) === rating);
    });

    // Entrance animation
    const stage = document.getElementById('fcCardStage');
    stage.classList.remove('fc-slide-in');
    stage.offsetHeight;
    stage.classList.add('fc-slide-in');
  }

  // ── Flip ──
  const cardStage = document.getElementById('fcCardStage');
  if (cardStage) {
    cardStage.addEventListener('click', function(e) {
      if (e.target.closest('.fc-rate-btn')) return;
      if (!isFlipped) {
        isFlipped = true;
        document.getElementById('fcCard').classList.add('flipped');
        // Show rating bar
        const ratingBar = document.getElementById('fcRatingBar');
        if (ratingBar) {
          setTimeout(() => ratingBar.classList.add('visible'), 300);
        }
      } else {
        isFlipped = false;
        document.getElementById('fcCard').classList.remove('flipped');
        const ratingBar = document.getElementById('fcRatingBar');
        if (ratingBar) ratingBar.classList.remove('visible');
      }
    });
  }

  // ── Rating Buttons (1-5) ──
  document.querySelectorAll('.fc-rate-btn').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      const r = parseInt(this.dataset.rating);
      const card = allCards[currentIndex];
      const key = getCardKey(card);
      ratings[key] = r;
      saveRatings(ratings);
      cardsStudied++;

      // Brief visual feedback
      this.classList.add('pressed');
      setTimeout(() => this.classList.remove('pressed'), 200);

      // Advance to next card after short delay
      setTimeout(() => {
        nextCard();
        renderStats();
      }, 350);
    });
  });

  // ── Keyboard ──
  document.addEventListener('keydown', function(e) {
    const deck = document.getElementById('fcDeckWrap');
    if (!deck || deck.style.display === 'none') return;

    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      if (!isFlipped) {
        isFlipped = true;
        document.getElementById('fcCard').classList.add('flipped');
        const ratingBar = document.getElementById('fcRatingBar');
        if (ratingBar) setTimeout(() => ratingBar.classList.add('visible'), 300);
      } else {
        isFlipped = false;
        document.getElementById('fcCard').classList.remove('flipped');
        const ratingBar = document.getElementById('fcRatingBar');
        if (ratingBar) ratingBar.classList.remove('visible');
      }
    }

    // Number keys 1-5 to rate (only when flipped)
    if (isFlipped && e.key >= '1' && e.key <= '5') {
      const r = parseInt(e.key);
      const card = allCards[currentIndex];
      ratings[getCardKey(card)] = r;
      saveRatings(ratings);
      cardsStudied++;
      setTimeout(() => { nextCard(); renderStats(); }, 200);
    }
  });

  // ── Swipe ──
  let touchStartX = 0;
  if (cardStage) {
    cardStage.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    cardStage.addEventListener('touchend', function(e) {
      const diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50 && !isFlipped) {
        // Swipe = skip to next card without rating
        nextCard();
      }
    }, { passive: true });
  }

  // ── Reset ──
  const resetBtn = document.getElementById('fcReset');
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      if (confirm('Reset all confidence ratings? This cannot be undone.')) {
        ratings = {};
        saveRatings(ratings);
        cardsStudied = 0;
        buildQueue(activeSection);
        nextCard();
        renderStats();
      }
    });
  }
})();
