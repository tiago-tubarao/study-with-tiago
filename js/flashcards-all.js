// ══════════════════════════════════════════════
// Combined Flashcards — All Decks Mixed
// CBR system with course + topic filters
// ══════════════════════════════════════════════

(function() {
  // Merge Pharm + Adult Health data
  const pharm = window.FLASHCARD_DATA;
  const ah = window.FLASHCARD_DATA_AH;
  if (!pharm && !ah) return;

  // Build combined sections with course prefixes
  const sections = [];
  if (pharm) {
    pharm.sections.forEach(s => {
      sections.push({
        id: 'pharm_' + s.id,
        label: 'Pharm: ' + s.label,
        icon: s.icon,
        color: s.color,
        course: 'pharm'
      });
    });
  }
  if (ah) {
    ah.sections.forEach(s => {
      sections.push({
        id: 'ah_' + s.id,
        label: 'AH: ' + s.label,
        icon: s.icon,
        color: s.color,
        course: 'ah'
      });
    });
  }

  // Build combined cards with prefixed section IDs
  const allCards = [];
  if (pharm) {
    pharm.cards.forEach(c => {
      allCards.push(Object.assign({}, c, { section: 'pharm_' + c.section, course: 'pharm' }));
    });
  }
  if (ah) {
    ah.cards.forEach(c => {
      allCards.push(Object.assign({}, c, { section: 'ah_' + c.section, course: 'ah' }));
    });
  }

  const STORAGE_KEY = 'swt_all_cbr';

  let queue = [];
  let currentIndex = 0;
  let isFlipped = false;
  let cardsStudied = 0;
  let activeFilter = 'all'; // 'all', 'pharm', 'ah', or a section id
  let filteredCards = allCards;

  function loadRatings() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch { return {}; }
  }
  function saveRatings(r) { localStorage.setItem(STORAGE_KEY, JSON.stringify(r)); }
  function getCardKey(card) { return (card.course + '_' + card.drugName).replace(/\s+/g, '_').toLowerCase(); }

  let ratings = loadRatings();

  function getFilteredCards() {
    if (activeFilter === 'all') return allCards;
    if (activeFilter === 'pharm') return allCards.filter(c => c.course === 'pharm');
    if (activeFilter === 'ah') return allCards.filter(c => c.course === 'ah');
    return allCards.filter(c => c.section === activeFilter);
  }

  function buildQueue() {
    filteredCards = getFilteredCards();
    queue = [];
    filteredCards.forEach((card, i) => {
      const key = getCardKey(card);
      const rating = ratings[key];
      let weight;
      if (rating === undefined || rating === null) weight = 3;
      else if (rating === 1) weight = 5;
      else if (rating === 2) weight = 4;
      else if (rating === 3) weight = 3;
      else if (rating === 4) weight = 2;
      else weight = 1;
      for (let w = 0; w < weight; w++) queue.push(i);
    });
    for (let i = queue.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [queue[i], queue[j]] = [queue[j], queue[i]];
    }
  }

  function nextCard() {
    if (!queue.length) buildQueue();
    if (!queue.length) return;
    const idx = queue.shift();
    currentIndex = idx;
    isFlipped = false;
    renderCard();
  }

  // ── Initialize ──
  const deckWrap = document.getElementById('fcDeckWrap');
  if (deckWrap) {
    deckWrap.style.display = 'block';
    deckWrap.style.opacity = '1';

    // Update card count in hero
    const countEl = document.getElementById('fcTotalCount');
    if (countEl) countEl.textContent = allCards.length;

    buildQueue();
    renderStats();
    nextCard();
  }

  // ── Build course + section filters ──
  const filtersEl = document.getElementById('fcFilters');
  if (filtersEl) {
    // All button
    const allBtn = document.createElement('button');
    allBtn.className = 'fc-filter active';
    allBtn.dataset.filter = 'all';
    allBtn.textContent = 'All (' + allCards.length + ')';
    filtersEl.appendChild(allBtn);

    // Course buttons
    if (pharm) {
      const pharmBtn = document.createElement('button');
      pharmBtn.className = 'fc-filter';
      pharmBtn.dataset.filter = 'pharm';
      pharmBtn.textContent = '💊 Pharm (' + allCards.filter(c => c.course === 'pharm').length + ')';
      pharmBtn.style.setProperty('--filter-color', '#2A9D8F');
      filtersEl.appendChild(pharmBtn);
    }
    if (ah) {
      const ahBtn = document.createElement('button');
      ahBtn.className = 'fc-filter';
      ahBtn.dataset.filter = 'ah';
      ahBtn.textContent = '🏥 Adult Health (' + allCards.filter(c => c.course === 'ah').length + ')';
      ahBtn.style.setProperty('--filter-color', '#5F3DC4');
      filtersEl.appendChild(ahBtn);
    }

    // Divider
    const divider = document.createElement('div');
    divider.style.cssText = 'width:100%;height:0;';
    filtersEl.appendChild(divider);

    // Section buttons
    sections.forEach(s => {
      const count = allCards.filter(c => c.section === s.id).length;
      const btn = document.createElement('button');
      btn.className = 'fc-filter';
      btn.dataset.filter = s.id;
      btn.textContent = s.icon + ' ' + s.label + ' (' + count + ')';
      btn.style.setProperty('--filter-color', s.color);
      filtersEl.appendChild(btn);
    });

    filtersEl.addEventListener('click', function(e) {
      const btn = e.target.closest('.fc-filter');
      if (!btn) return;
      filtersEl.querySelectorAll('.fc-filter').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      activeFilter = btn.dataset.filter;
      buildQueue();
      renderStats();
      if (filteredCards.length) nextCard();
      else {
        document.getElementById('fcEmpty').style.display = 'block';
        document.getElementById('fcCardStage').style.display = 'none';
      }
    });
  }

  // ── Stats ──
  function renderStats() {
    const statsEl = document.getElementById('fcStats');
    if (!statsEl) return;

    const pool = filteredCards;
    const total = pool.length;
    if (!total) return;
    let got = 0, weak = 0, unseen = 0;
    pool.forEach(card => {
      const r = ratings[getCardKey(card)];
      if (r === undefined || r === null) unseen++;
      else if (r >= 4) got++;
      else weak++;
    });

    const gotPct = Math.round((got / total) * 100);
    const weakPct = Math.round((weak / total) * 100);

    statsEl.innerHTML =
      '<div class="fc-stat fc-stat-got"><span class="fc-stat-num">' + got + '</span><span class="fc-stat-label">Got it</span></div>' +
      '<div class="fc-stat-bar-wrap"><div class="fc-stat-bar"><div class="fc-stat-bar-got" style="width:' + gotPct + '%"></div><div class="fc-stat-bar-weak" style="width:' + weakPct + '%"></div></div><div class="fc-stat-bar-labels"><span>' + unseen + ' unseen</span><span>' + total + ' total</span></div></div>' +
      '<div class="fc-stat fc-stat-weak"><span class="fc-stat-num">' + weak + '</span><span class="fc-stat-label">Review</span></div>';
  }

  // ── Card Rendering ──
  function renderCard() {
    const card = filteredCards[currentIndex];
    if (!card) return;
    const cardEl = document.getElementById('fcCard');
    const sectionData = sections.find(s => s.id === card.section);
    const sectionColor = sectionData ? sectionData.color : '#2A9D8F';
    const key = getCardKey(card);
    const rating = ratings[key];

    document.getElementById('fcCardStage').style.display = '';
    document.getElementById('fcEmpty').style.display = 'none';

    cardEl.classList.remove('flipped');

    // Front
    document.getElementById('fcFrontIcon').textContent = card.icon || '';

    const drugNameEl = document.getElementById('fcDrugName');
    drugNameEl.textContent = card.drugName;
    const nameLen = card.drugName.length;
    if (nameLen > 30) drugNameEl.style.fontSize = '1em';
    else if (nameLen > 20) drugNameEl.style.fontSize = '1.2em';
    else drugNameEl.style.fontSize = '1.5em';

    document.getElementById('fcBrandName').textContent = card.brandName ? card.brandName : '';
    const pill = document.getElementById('fcClassPill');
    pill.textContent = card.drugClass;
    pill.style.background = sectionColor;
    document.getElementById('fcPurpose').textContent = card.purpose;

    // Course badge
    const courseBadge = document.getElementById('fcCourseBadge');
    if (courseBadge) {
      courseBadge.textContent = card.course === 'pharm' ? '💊 PHARM' : '🏥 ADULT HEALTH';
      courseBadge.style.background = card.course === 'pharm' ? 'rgba(42,157,143,0.15)' : 'rgba(95,61,196,0.15)';
      courseBadge.style.color = card.course === 'pharm' ? '#2A9D8F' : '#5F3DC4';
    }

    // Mastery badge
    const badge = document.getElementById('fcMasteryBadge');
    if (badge) {
      if (rating >= 4) { badge.textContent = '✓ Got It'; badge.className = 'fc-mastery-badge fc-mastery-got'; }
      else if (rating >= 1) { badge.textContent = '↻ Review'; badge.className = 'fc-mastery-badge fc-mastery-weak'; }
      else { badge.textContent = 'NEW'; badge.className = 'fc-mastery-badge'; badge.style.cssText = 'background:rgba(0,0,0,0.06);color:inherit;border:1px solid rgba(0,0,0,0.1);'; }
    }

    // Back
    document.getElementById('fcBackHeader').textContent = card.drugName;
    const backSection = document.getElementById('fcBackSection');
    if (backSection) {
      backSection.textContent = sectionData ? sectionData.icon + ' ' + sectionData.label : '';
      backSection.style.color = sectionColor;
    }

    const factsEl = document.getElementById('fcFacts');
    factsEl.innerHTML = '';
    card.facts.forEach(function(f) {
      const li = document.createElement('li');
      const escaped = f.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      li.innerHTML = escaped
        .replace(/(STOP|NEVER|FIRST|ALWAYS|CRITICAL|EMERGENCY|BBW|BLACK BOX|#1)/g, '<strong style="color:#C92A2A">$1</strong>')
        .replace(/(antidote|Antidote)(:?\s)/gi, '<strong style="color:#2B8A3E">$1</strong>$2');
      factsEl.appendChild(li);
    });

    const mnEl = document.getElementById('fcMnemonic');
    mnEl.textContent = card.mnemonic ? '💡 ' + card.mnemonic : '';

    document.querySelector('.fc-card-front').style.borderTopColor = sectionColor;
    document.querySelector('.fc-card-back').style.borderTopColor = sectionColor;

    // Counter
    const counter = document.getElementById('fcCounter');
    if (counter) counter.textContent = 'Card ' + (currentIndex + 1) + ' / ' + filteredCards.length;

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
      if (e.target.closest('.fc-mastery-btn')) return;
      const cardEl = document.getElementById('fcCard');
      if (!isFlipped) {
        isFlipped = true;
        cardEl.classList.add('flipped');
      } else {
        isFlipped = false;
        cardEl.classList.remove('flipped');
      }
    });
  }

  // ── Got It / Study More ──
  function rateCard(gotIt) {
    const card = filteredCards[currentIndex];
    if (!card) return;
    const key = getCardKey(card);
    ratings[key] = gotIt ? 4 : 2;
    saveRatings(ratings);
    cardsStudied++;
    setTimeout(function() { nextCard(); renderStats(); }, 250);
  }

  var gotBtn = document.getElementById('fcGotIt');
  if (gotBtn) gotBtn.addEventListener('click', function(e) { e.stopPropagation(); rateCard(true); });

  var weakBtn = document.getElementById('fcStudyMore');
  if (weakBtn) weakBtn.addEventListener('click', function(e) { e.stopPropagation(); rateCard(false); });

  // ── Shuffle ──
  var shuffleBtn = document.getElementById('fcShuffle');
  if (shuffleBtn) shuffleBtn.addEventListener('click', function() { buildQueue(); nextCard(); });

  // ── Prev / Next ──
  var prevBtn = document.getElementById('fcPrev');
  if (prevBtn) prevBtn.addEventListener('click', function() {
    if (currentIndex > 0) { currentIndex--; isFlipped = false; renderCard(); }
  });
  var nextBtn = document.getElementById('fcNext');
  if (nextBtn) nextBtn.addEventListener('click', function() { nextCard(); });

  // ── Keyboard ──
  document.addEventListener('keydown', function(e) {
    var deck = document.getElementById('fcDeckWrap');
    if (!deck || deck.style.display === 'none') return;

    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      var cardEl = document.getElementById('fcCard');
      if (!isFlipped) { isFlipped = true; cardEl.classList.add('flipped'); }
      else { isFlipped = false; cardEl.classList.remove('flipped'); }
    }
    if (e.key === 'ArrowRight') nextCard();
    if (e.key === 'ArrowLeft' && currentIndex > 0) { currentIndex--; isFlipped = false; renderCard(); }
    if (e.key === 'g' || e.key === 'G') rateCard(true);
    if (e.key === 'r' || e.key === 'R') rateCard(false);
  });

  // ── Swipe ──
  var touchStartX = 0;
  if (cardStage) {
    cardStage.addEventListener('touchstart', function(e) { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    cardStage.addEventListener('touchend', function(e) {
      var diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextCard();
        else if (currentIndex > 0) { currentIndex--; isFlipped = false; renderCard(); }
      }
    }, { passive: true });
  }

  // ── Reset ──
  var resetBtn = document.getElementById('fcReset');
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      if (confirm('Reset all progress? This cannot be undone.')) {
        ratings = {};
        saveRatings(ratings);
        cardsStudied = 0;
        buildQueue();
        nextCard();
        renderStats();
      }
    });
  }
})();
