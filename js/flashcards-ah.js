// ══════════════════════════════════════════════
// Confidence-Based Repetition Flashcards — Adult Health Exam 3
// 1-5 rating system with weighted repetition + mastered state
// ══════════════════════════════════════════════

(function() {
  var data = window.FLASHCARD_DATA_AH;
  if (!data) return;

  var STORAGE_KEY = 'swt_ah_cbr';

  var allCards = data.cards.slice();
  var queue = [];
  var currentIndex = 0;
  var isFlipped = false;
  var cardsStudied = 0;
  var activeSection = 'all';
  var activeMode = 'all'; // 'all', 'unseen', 'weak'

  function loadRatings() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch(e) { return {}; }
  }
  function saveRatings(r) {
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(r)); } catch(e) {}
  }
  function getCardKey(card) { return card.drugName.replace(/\s+/g, '_').toLowerCase(); }

  var ratings = loadRatings();

  // ── Filtered pool based on section + mode ──
  function getPool() {
    var pool = activeSection === 'all' ? allCards : allCards.filter(function(c) { return c.section === activeSection; });
    if (activeMode === 'unseen') {
      pool = pool.filter(function(c) { var r = ratings[getCardKey(c)]; return r === undefined || r === null; });
    } else if (activeMode === 'weak') {
      pool = pool.filter(function(c) { var r = ratings[getCardKey(c)]; return r !== undefined && r !== null && r < 4; });
    }
    return pool;
  }

  // ── Weighted Queue Builder ──
  function buildQueue() {
    var pool = getPool();
    queue = [];
    pool.forEach(function(card) {
      var idx = allCards.indexOf(card);
      var rating = ratings[getCardKey(card)];
      var weight;
      if (rating === undefined || rating === null) weight = 3;
      else if (rating <= 2) weight = 5;
      else if (rating === 3) weight = 3;
      else if (rating === 4) weight = 1;
      else weight = 0; // rating 5 = mastered, excluded from queue
      for (var i = 0; i < weight; i++) queue.push(idx);
    });
    // Shuffle
    for (var i = queue.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var tmp = queue[i]; queue[i] = queue[j]; queue[j] = tmp;
    }
  }

  function showCard() {
    isFlipped = false;
    renderCard();
    // Hide rating bar until flipped
    var ratingBar = document.getElementById('fcRatingBar');
    if (ratingBar) ratingBar.classList.remove('visible');
  }

  function nextCard() {
    if (!queue.length) buildQueue();
    var emptyEl = document.getElementById('fcEmpty');
    var stageEl = document.getElementById('fcCardStage');
    if (!queue.length) {
      // All mastered or empty pool
      if (stageEl) stageEl.style.display = 'none';
      if (!emptyEl) {
        emptyEl = document.createElement('div');
        emptyEl.id = 'fcEmpty';
        emptyEl.style.cssText = 'text-align:center;padding:3em 1em';
        var pool = getPool();
        var allMastered = pool.length === 0 && allCards.some(function(c) { return ratings[getCardKey(c)] >= 5; });
        if (allMastered) {
          emptyEl.innerHTML = '<div style="font-size:3em">🎯</div><h3>All cards mastered!</h3><p>You rated every card a 5. Reset to study again, or switch to a different section.</p>';
        } else {
          emptyEl.innerHTML = '<div style="font-size:3em">🎉</div><p>No cards match this filter.<br>Try "All Cards" or switch sections.</p>';
        }
        stageEl.parentNode.insertBefore(emptyEl, stageEl.nextSibling);
      }
      emptyEl.style.display = 'block';
      return;
    }
    if (stageEl) stageEl.style.display = '';
    if (emptyEl) emptyEl.style.display = 'none';
    currentIndex = queue.shift();
    showCard();
  }

  function prevCard() {
    var pool = getPool();
    var poolIndices = pool.map(function(c) { return allCards.indexOf(c); });
    var pos = poolIndices.indexOf(currentIndex);
    if (pos > 0) {
      currentIndex = poolIndices[pos - 1];
    } else if (poolIndices.length > 0) {
      currentIndex = poolIndices[poolIndices.length - 1];
    }
    showCard();
  }

  // ── Initialize ──
  var deckWrap = document.getElementById('fcDeckWrap');
  if (deckWrap) {
    deckWrap.style.display = 'block';
    deckWrap.style.opacity = '1';
    buildQueue();
    renderStats();
    nextCard();
  }

  // ── Build section filter buttons ──
  var filtersEl = document.getElementById('fcFilters');
  if (filtersEl) {
    var allBtn = document.createElement('button');
    allBtn.className = 'fc-filter active';
    allBtn.dataset.section = 'all';
    allBtn.textContent = 'All (' + allCards.length + ')';
    filtersEl.appendChild(allBtn);

    data.sections.forEach(function(s) {
      var count = allCards.filter(function(c) { return c.section === s.id; }).length;
      var btn = document.createElement('button');
      btn.className = 'fc-filter';
      btn.dataset.section = s.id;
      btn.textContent = s.icon + ' ' + s.label + ' (' + count + ')';
      btn.style.setProperty('--filter-color', s.color);
      filtersEl.appendChild(btn);
    });

    filtersEl.addEventListener('click', function(e) {
      var btn = e.target.closest('.fc-filter');
      if (!btn) return;
      filtersEl.querySelectorAll('.fc-filter').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeSection = btn.dataset.section;
      buildQueue();
      renderStats();
      nextCard();
    });
  }

  // ── Study mode buttons (All / Unseen / Weak) ──
  document.querySelectorAll('.fc-mode-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.fc-mode-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeMode = btn.dataset.mode;
      buildQueue();
      renderStats();
      nextCard();
    });
  });

  // ── Stats ──
  function renderStats() {
    var statsEl = document.getElementById('fcStats');
    if (!statsEl) return;

    var pool = activeSection === 'all' ? allCards : allCards.filter(function(c) { return c.section === activeSection; });
    var total = pool.length;
    if (total === 0) {
      statsEl.innerHTML = '<div style="text-align:center;opacity:0.5;padding:1em">No cards in this section</div>';
      return;
    }
    var got = 0, weak = 0, unseen = 0;
    pool.forEach(function(card) {
      var r = ratings[getCardKey(card)];
      if (r === undefined || r === null) unseen++;
      else if (r >= 4) got++;
      else weak++;
    });

    var gotPct = Math.round((got / total) * 100);
    var weakPct = Math.round((weak / total) * 100);

    statsEl.innerHTML =
      '<div class="fc-stat fc-stat-got"><span class="fc-stat-num">' + got + '</span><span class="fc-stat-label">Got it</span></div>' +
      '<div class="fc-stat-bar-wrap"><div class="fc-stat-bar"><div class="fc-stat-bar-got" style="width:' + gotPct + '%"></div><div class="fc-stat-bar-weak" style="width:' + weakPct + '%"></div></div><div class="fc-stat-bar-labels"><span>' + unseen + ' unseen</span><span>' + total + ' total</span></div></div>' +
      '<div class="fc-stat fc-stat-weak"><span class="fc-stat-num">' + weak + '</span><span class="fc-stat-label">Review</span></div>';

    var counter = document.getElementById('fcCounter');
    if (counter) {
      var poolForCount = getPool();
      var pos = poolForCount.map(function(c) { return allCards.indexOf(c); }).indexOf(currentIndex);
      counter.textContent = 'Card ' + (pos >= 0 ? pos + 1 : 1) + ' / ' + poolForCount.length;
    }

    var progress = document.getElementById('fcProgress');
    if (progress) {
      progress.style.width = gotPct + '%';
    }
  }

  // ── Card Rendering ──
  function renderCard() {
    var card = allCards[currentIndex];
    if (!card) return;
    var cardEl = document.getElementById('fcCard');
    var sectionData = data.sections.find(function(s) { return s.id === card.section; });
    var sectionColor = sectionData ? sectionData.color : '#2A9D8F';
    var key = getCardKey(card);
    var rating = ratings[key];

    // Reset flip
    cardEl.classList.remove('flipped');

    // Front
    document.getElementById('fcFrontIcon').textContent = card.icon || '';

    var drugNameEl = document.getElementById('fcDrugName');
    drugNameEl.textContent = card.drugName;
    var nameLen = card.drugName.length;
    if (nameLen > 30) drugNameEl.style.fontSize = '1em';
    else if (nameLen > 20) drugNameEl.style.fontSize = '1.2em';
    else drugNameEl.style.fontSize = '1.5em';

    document.getElementById('fcBrandName').textContent = card.brandName ? card.brandName : '';
    var pill = document.getElementById('fcClassPill');
    pill.textContent = card.drugClass;
    pill.style.background = sectionColor;
    document.getElementById('fcPurpose').textContent = card.purpose;

    // Mastery badge
    var badge = document.getElementById('fcMasteryBadge');
    if (badge) {
      if (rating >= 5) { badge.textContent = '★ Mastered'; badge.className = 'fc-mastery-badge fc-mastery-got'; badge.style.cssText = ''; }
      else if (rating >= 4) { badge.textContent = '✓ Got It'; badge.className = 'fc-mastery-badge fc-mastery-got'; badge.style.cssText = ''; }
      else if (rating >= 1) { badge.textContent = '↻ Review'; badge.className = 'fc-mastery-badge fc-mastery-weak'; badge.style.cssText = ''; }
      else { badge.textContent = 'NEW'; badge.className = 'fc-mastery-badge'; badge.style.cssText = 'position:absolute;top:0.8em;right:0.8em;padding:0.2em 0.7em;border-radius:2em;font-size:0.7em;font-weight:700;z-index:2;background:rgba(0,0,0,0.06);color:inherit;border:1px solid rgba(0,0,0,0.1);'; }
    }

    // Section label on front
    var sectionLabel = document.getElementById('fcSectionLabel');
    if (sectionLabel) {
      sectionLabel.textContent = sectionData ? sectionData.icon + ' ' + sectionData.label : '';
      sectionLabel.style.color = sectionColor;
    }

    // Back
    document.getElementById('fcBackHeader').textContent = card.drugName;
    var backSection = document.getElementById('fcBackSection');
    if (backSection) {
      backSection.textContent = sectionData ? sectionData.icon + ' ' + sectionData.label : '';
      backSection.style.color = sectionColor;
    }

    var factsEl = document.getElementById('fcFacts');
    factsEl.innerHTML = '';
    card.facts.forEach(function(f) {
      var li = document.createElement('li');
      var escaped = f.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
      li.innerHTML = escaped
        .replace(/(STOP|NEVER|FIRST|ALWAYS|CRITICAL|EMERGENCY|BBW|BLACK BOX|#1)/g, '<strong style="color:#C92A2A">$1</strong>')
        .replace(/(antidote|Antidote)(:?\s)/gi, '<strong style="color:#2B8A3E">$1</strong>$2');
      factsEl.appendChild(li);
    });

    var mnEl = document.getElementById('fcMnemonic');
    mnEl.textContent = card.mnemonic ? '💡 ' + card.mnemonic : '';

    // Card border color
    document.querySelector('.fc-card-front').style.borderTopColor = sectionColor;
    document.querySelector('.fc-card-back').style.borderTopColor = sectionColor;

    // Update rating bar to show current rating
    var ratingBtns = document.querySelectorAll('.fc-rate-btn');
    ratingBtns.forEach(function(btn) {
      btn.classList.remove('current');
      if (rating && parseInt(btn.dataset.rating) === rating) {
        btn.classList.add('current');
      }
    });

    // Entrance animation
    var stage = document.getElementById('fcCardStage');
    stage.classList.remove('fc-slide-in');
    stage.offsetHeight;
    stage.classList.add('fc-slide-in');

    renderStats();
  }

  // ── Flip ──
  var cardStage = document.getElementById('fcCardStage');
  if (cardStage) {
    cardStage.addEventListener('click', function(e) {
      if (e.target.closest('.fc-mastery-btn') || e.target.closest('.fc-nav-btn')) return;
      var cardEl = document.getElementById('fcCard');
      if (!isFlipped) {
        isFlipped = true;
        cardEl.classList.add('flipped');
        // Show rating bar when flipped
        var ratingBar = document.getElementById('fcRatingBar');
        if (ratingBar) ratingBar.classList.add('visible');
      } else {
        isFlipped = false;
        cardEl.classList.remove('flipped');
        var ratingBar = document.getElementById('fcRatingBar');
        if (ratingBar) ratingBar.classList.remove('visible');
      }
    });
  }

  // ── 1-5 Rating System ──
  function rateCard(value) {
    var card = allCards[currentIndex];
    if (!card) return;
    var key = getCardKey(card);
    ratings[key] = value;
    saveRatings(ratings);
    cardsStudied++;
    // Rebuild queue with new weights
    buildQueue();
    setTimeout(function() { nextCard(); renderStats(); }, 250);
  }

  // Wire up 1-5 rating buttons
  document.querySelectorAll('.fc-rate-btn').forEach(function(btn) {
    btn.addEventListener('click', function(e) {
      e.stopPropagation();
      var value = parseInt(btn.dataset.rating);
      if (value >= 1 && value <= 5) rateCard(value);
    });
  });

  // ── Legacy Got It / Study More buttons (fallback) ──
  var gotBtn = document.getElementById('fcGotIt');
  if (gotBtn) gotBtn.addEventListener('click', function(e) { e.stopPropagation(); rateCard(4); });

  var weakBtn = document.getElementById('fcStudyMore');
  if (weakBtn) weakBtn.addEventListener('click', function(e) { e.stopPropagation(); rateCard(2); });

  // ── Navigation ──
  var shuffleBtn = document.getElementById('fcShuffle');
  if (shuffleBtn) shuffleBtn.addEventListener('click', function(e) { e.stopPropagation(); buildQueue(); nextCard(); });

  var prevBtn = document.getElementById('fcPrev');
  if (prevBtn) prevBtn.addEventListener('click', function(e) { e.stopPropagation(); prevCard(); });

  var nextBtn = document.getElementById('fcNext');
  if (nextBtn) nextBtn.addEventListener('click', function(e) { e.stopPropagation(); nextCard(); });

  // ── Keyboard ──
  document.addEventListener('keydown', function(e) {
    var deck = document.getElementById('fcDeckWrap');
    if (!deck || deck.style.display === 'none') return;
    // Don't hijack when a button/input is focused
    if (e.target.tagName === 'BUTTON' || e.target.tagName === 'INPUT' || e.target.tagName === 'SELECT' || e.target.tagName === 'TEXTAREA') return;

    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      var cardEl = document.getElementById('fcCard');
      var ratingBar = document.getElementById('fcRatingBar');
      if (!isFlipped) {
        isFlipped = true;
        cardEl.classList.add('flipped');
        if (ratingBar) ratingBar.classList.add('visible');
      } else {
        isFlipped = false;
        cardEl.classList.remove('flipped');
        if (ratingBar) ratingBar.classList.remove('visible');
      }
    }
    if (e.key === 'ArrowRight') nextCard();
    if (e.key === 'ArrowLeft') prevCard();
    // 1-5 keys for rating
    var num = parseInt(e.key);
    if (num >= 1 && num <= 5) rateCard(num);
    // Legacy g/r shortcuts
    if (e.key === 'g' || e.key === 'G') rateCard(4);
    if (e.key === 'r' || e.key === 'R') rateCard(2);
  });

  // ── Swipe ──
  var touchStartX = 0;
  if (cardStage) {
    cardStage.addEventListener('touchstart', function(e) { touchStartX = e.changedTouches[0].screenX; }, { passive: true });
    cardStage.addEventListener('touchend', function(e) {
      var diff = touchStartX - e.changedTouches[0].screenX;
      if (Math.abs(diff) > 50) {
        if (diff > 0) nextCard();
        else prevCard();
      }
    }, { passive: true });
  }

  // ── Reset ──
  var resetBtn = document.getElementById('fcReset');
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      if (confirm('Reset all confidence ratings? This cannot be undone.')) {
        ratings = {};
        saveRatings(ratings);
        cardsStudied = 0;
        activeMode = 'all';
        document.querySelectorAll('.fc-mode-btn').forEach(function(b) { b.classList.remove('active'); });
        var allModeBtn = document.querySelector('.fc-mode-btn[data-mode="all"]');
        if (allModeBtn) allModeBtn.classList.add('active');
        buildQueue();
        nextCard();
        renderStats();
      }
    });
  }
})();
