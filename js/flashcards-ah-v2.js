// ══════════════════════════════════════════════
// Confidence-Based Repetition Flashcards — Adult Health Exam 3
// Got It / Study More mastery + Prev/Next/Shuffle navigation
// ══════════════════════════════════════════════

(function() {
  var data = window.FLASHCARD_DATA_AH;
  if (!data) return;

  var IMG_BASE = '../assets/study-images/';
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
  function saveRatings(r) { localStorage.setItem(STORAGE_KEY, JSON.stringify(r)); }
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
      else if (rating < 4) weight = 4;
      else weight = 1;
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
  }

  var isShuffled = false;

  function nextCard() {
    var pool = getPool();
    if (!pool.length) {
      document.getElementById('fcCardStage').style.display = 'none';
      document.getElementById('fcEmpty').style.display = 'block';
      return;
    }
    document.getElementById('fcCardStage').style.display = '';
    document.getElementById('fcEmpty').style.display = 'none';
    if (isShuffled && queue.length) {
      currentIndex = queue.shift();
    } else {
      // Sequential: find current position in pool, go to next
      var poolIndices = pool.map(function(c) { return allCards.indexOf(c); });
      var pos = poolIndices.indexOf(currentIndex);
      if (pos < poolIndices.length - 1) {
        currentIndex = poolIndices[pos + 1];
      } else {
        currentIndex = poolIndices[0]; // wrap to start
      }
    }
    showCard();
  }

  function prevCard() {
    var pool = getPool();
    var poolIndices = pool.map(function(c) { return allCards.indexOf(c); });
    var pos = poolIndices.indexOf(currentIndex);
    if (pos > 0) {
      currentIndex = poolIndices[pos - 1];
    } else if (poolIndices.length > 0) {
      currentIndex = poolIndices[poolIndices.length - 1]; // wrap around
    }
    isShuffled = false;
    showCard();
  }

  // ── Initialize ──
  var deckWrap = document.getElementById('fcDeckWrap');
  if (deckWrap) {
    deckWrap.style.display = 'block';
    deckWrap.style.opacity = '1';
    renderStats();
    // Start at first card sequentially
    var pool = getPool();
    if (pool.length) {
      currentIndex = allCards.indexOf(pool[0]);
      showCard();
    }
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

    // Update counter
    var counter = document.getElementById('fcCounter');
    if (counter) {
      var poolForCount = getPool();
      counter.textContent = 'Card ' + (poolForCount.map(function(c) { return allCards.indexOf(c); }).indexOf(currentIndex) + 1) + ' / ' + poolForCount.length;
    }

    // Update progress bar
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

    // Front — study image
    var imgContainer = document.getElementById('fcStudyImage');
    if (!imgContainer) {
      imgContainer = document.createElement('div');
      imgContainer.id = 'fcStudyImage';
      imgContainer.style.cssText = 'text-align:center;margin:0.5em 0;cursor:pointer;';
      var iconEl = document.getElementById('fcFrontIcon');
      iconEl.parentNode.insertBefore(imgContainer, iconEl.nextSibling);
    }
    if (card.image) {
      imgContainer.innerHTML = '<img src="' + IMG_BASE + card.image + '" alt="' + card.drugName + '" style="max-width:100%;max-height:200px;border-radius:12px;box-shadow:0 2px 8px rgba(0,0,0,0.15);object-fit:contain;pointer-events:none;">';
      imgContainer.style.display = 'block';
      imgContainer.onclick = null;
    } else {
      imgContainer.innerHTML = '';
      imgContainer.style.display = 'none';
    }

    // Front — hide icon when image present
    var iconEl2 = document.getElementById('fcFrontIcon');
    if (card.image) {
      iconEl2.style.display = 'none';
    } else {
      iconEl2.style.display = '';
      iconEl2.textContent = card.icon || '';
    }

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
      if (rating >= 4) { badge.textContent = '✓ Got It'; badge.className = 'fc-mastery-badge fc-mastery-got'; }
      else if (rating >= 1) { badge.textContent = '↻ Review'; badge.className = 'fc-mastery-badge fc-mastery-weak'; }
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
      } else {
        isFlipped = false;
        cardEl.classList.remove('flipped');
      }
    });
  }

  // ── Got It / Study More ──
  function rateCard(gotIt) {
    var card = allCards[currentIndex];
    if (!card) return;
    var key = getCardKey(card);
    ratings[key] = gotIt ? 4 : 2;
    saveRatings(ratings);
    cardsStudied++;
    setTimeout(function() { nextCard(); renderStats(); }, 250);
  }

  var gotBtn = document.getElementById('fcGotIt');
  if (gotBtn) gotBtn.addEventListener('click', function(e) { e.stopPropagation(); rateCard(true); });

  var weakBtn = document.getElementById('fcStudyMore');
  if (weakBtn) weakBtn.addEventListener('click', function(e) { e.stopPropagation(); rateCard(false); });

  // ── Navigation ──
  var shuffleBtn = document.getElementById('fcShuffle');
  if (shuffleBtn) shuffleBtn.addEventListener('click', function(e) { e.stopPropagation(); isShuffled = true; buildQueue(); nextCard(); });

  var prevBtn = document.getElementById('fcPrev');
  if (prevBtn) prevBtn.addEventListener('click', function(e) { e.stopPropagation(); prevCard(); });

  var nextBtn = document.getElementById('fcNext');
  if (nextBtn) nextBtn.addEventListener('click', function(e) { e.stopPropagation(); nextCard(); });

  // ── Search ──
  var searchEl = document.getElementById('fcSearch');
  if (searchEl) {
    searchEl.addEventListener('input', function() {
      var q = searchEl.value.trim().toLowerCase();
      if (!q) {
        document.getElementById('fcSearchResults').style.display = 'none';
        return;
      }
      var results = allCards.filter(function(c) {
        return c.drugName.toLowerCase().indexOf(q) !== -1 ||
               (c.brandName && c.brandName.toLowerCase().indexOf(q) !== -1) ||
               (c.drugClass && c.drugClass.toLowerCase().indexOf(q) !== -1) ||
               (c.purpose && c.purpose.toLowerCase().indexOf(q) !== -1);
      }).slice(0, 10);

      var container = document.getElementById('fcSearchResults');
      container.innerHTML = '';
      container.style.display = results.length ? 'block' : 'none';
      results.forEach(function(card) {
        var item = document.createElement('div');
        item.className = 'fc-search-item';
        var sectionData = data.sections.find(function(s) { return s.id === card.section; });
        item.innerHTML = card.drugName + (card.brandName ? ' <span class="fc-search-section">' + card.brandName + '</span>' : '') +
          (sectionData ? ' <span class="fc-search-section">' + sectionData.icon + ' ' + sectionData.label + '</span>' : '');
        item.addEventListener('click', function() {
          currentIndex = allCards.indexOf(card);
          isShuffled = false;
          isFlipped = false;
          showCard();
          renderStats();
          searchEl.value = '';
          container.style.display = 'none';
        });
        container.appendChild(item);
      });
    });
    // Prevent keyboard nav while typing
    searchEl.addEventListener('keydown', function(e) { e.stopPropagation(); });
    // Close on outside click
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.fc-search-wrap')) {
        var r = document.getElementById('fcSearchResults');
        if (r) r.style.display = 'none';
      }
    });
  }

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
    if (e.key === 'ArrowLeft') prevCard();
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
