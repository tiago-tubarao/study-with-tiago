// ══════════════════════════════════════════════
// 84 Drug Flashcards Engine — Image Front + 12-Point Clinical Framework Back
// Features: mastery tracking, category drill, search, image lightbox
// ══════════════════════════════════════════════

(function() {
  var data = window.FLASHCARD_DATA_DRUGS;
  if (!data) return;

  var STORAGE_KEY = 'swt_exam3_cbr';
  var IMG_BASE_DRUGS = '../assets/drug-cards/';
  var IMG_BASE_AH = '../assets/study-images/';

  // Tag drug cards with their image base
  var allCards = data.cards.slice().map(function(c) {
    c.imgBase = IMG_BASE_DRUGS;
    return c;
  });

  // Merge AH condition cards if available
  var ahData = window.FLASHCARD_DATA_AH;
  if (ahData) {
    ahData.cards.forEach(function(c) {
      c.imgBase = IMG_BASE_AH;
      c.groupId = c.groupId || 'ah_' + c.section;
      allCards.push(c);
    });
    // Merge sections (avoid duplicates)
    var existingIds = data.sections.map(function(s) { return s.id; });
    ahData.sections.forEach(function(s) {
      if (existingIds.indexOf(s.id) === -1) {
        data.sections.push(s);
      }
    });
  }
  var orderedPool = []; // current filtered list in display order
  var poolPos = 0;      // position within orderedPool
  var isFlipped = false;
  var activeSection = 'all';
  var activeMode = 'all';
  var activeCatDrill = null; // null = show all 12 categories

  function loadRatings() {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch(e) { return {}; }
  }
  function saveRatings(r) { localStorage.setItem(STORAGE_KEY, JSON.stringify(r)); }
  function getCardKey(card) { return (card.drugName + '_' + card.groupId).replace(/\s+/g, '_').toLowerCase(); }

  var ratings = loadRatings();

  // Category definitions for drill mode
  var catDefs = [
    { key: 'WHAT IS IT', label: 'What Is It', cls: 'fc-cat-what', icon: '\u{1F9E0}' },
    { key: 'LOOKS LIKE', label: 'Looks Like', cls: 'fc-cat-looks', icon: '\u{1F50D}' },
    { key: 'GOES WRONG', label: 'Goes Wrong', cls: 'fc-cat-wrong', icon: '\u26A0\uFE0F' },
    { key: 'MONITOR', label: 'Monitor', cls: 'fc-cat-monitor', icon: '\u{1F52C}' },
    { key: 'NURSE DOES', label: 'Nurse Does', cls: 'fc-cat-nurse', icon: '\u{1F469}\u200D\u2695\uFE0F' },
    { key: 'TEACH', label: 'Teach', cls: 'fc-cat-teach', icon: '\u{1F4DA}' },
    { key: 'PRIORITY', label: 'Priority', cls: 'fc-cat-priority', icon: '\u{1F6A8}' },
    { key: "CAN'T MIX", label: "Can't Mix", cls: 'fc-cat-cant', icon: '\u26D4' },
    { key: 'SIMILAR', label: 'Similar', cls: 'fc-cat-similar', icon: '\u{1F504}' },
    { key: 'EMERGENCY', label: 'Emergency', cls: 'fc-cat-emergency', icon: '\u{1F198}' },
    { key: 'ASSESS FIRST', label: 'Assess First', cls: 'fc-cat-assess', icon: '\u{1F4CB}' },
    { key: 'CHAIN', label: 'Chain', cls: 'fc-cat-chain', icon: '\u26D3\uFE0F' }
  ];

  function getFilteredCards() {
    var pool = activeSection === 'all' ? allCards : allCards.filter(function(c) { return c.section === activeSection; });
    if (activeMode === 'unseen') {
      pool = pool.filter(function(c) { return ratings[getCardKey(c)] === undefined; });
    } else if (activeMode === 'weak') {
      pool = pool.filter(function(c) { var r = ratings[getCardKey(c)]; return r !== undefined && r < 4; });
    }
    return pool;
  }

  function rebuildPool() {
    orderedPool = getFilteredCards();
    poolPos = 0;
  }

  function shufflePool() {
    orderedPool = getFilteredCards();
    for (var i = orderedPool.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var t = orderedPool[i]; orderedPool[i] = orderedPool[j]; orderedPool[j] = t;
    }
    poolPos = 0;
  }

  function showCurrentCard() {
    var stage = document.getElementById('fcCardStage');
    var empty = document.getElementById('fcEmpty');
    if (!orderedPool.length) {
      if (stage) stage.style.display = 'none';
      if (empty) empty.style.display = 'block';
      return;
    }
    if (stage) stage.style.display = '';
    if (empty) empty.style.display = 'none';
    if (poolPos < 0) poolPos = orderedPool.length - 1;
    if (poolPos >= orderedPool.length) poolPos = 0;
    isFlipped = false;
    renderCard();
  }

  function nextCard() {
    poolPos++;
    if (poolPos >= orderedPool.length) poolPos = 0;
    showCurrentCard();
  }

  function prevCard() {
    poolPos--;
    if (poolPos < 0) poolPos = orderedPool.length - 1;
    showCurrentCard();
  }

  // ── Init ──
  var deckWrap = document.getElementById('fcDeckWrap');
  if (deckWrap) {
    deckWrap.style.display = 'block';
    deckWrap.style.opacity = '1';
    rebuildPool();
    renderStats();
    showCurrentCard();
  }

  // ── Section Filters ──
  var filtersEl = document.getElementById('fcFilters');
  if (filtersEl) {
    var ab = document.createElement('button');
    ab.className = 'fc-filter active';
    ab.dataset.section = 'all';
    ab.textContent = 'All (' + allCards.length + ')';
    filtersEl.appendChild(ab);

    data.sections.forEach(function(s) {
      var c = allCards.filter(function(card) { return card.section === s.id; }).length;
      var b = document.createElement('button');
      b.className = 'fc-filter';
      b.dataset.section = s.id;
      b.textContent = s.icon + ' ' + s.label + ' (' + c + ')';
      b.style.setProperty('--filter-color', s.color);
      filtersEl.appendChild(b);
    });

    filtersEl.addEventListener('click', function(e) {
      var b = e.target.closest('.fc-filter');
      if (!b) return;
      filtersEl.querySelectorAll('.fc-filter').forEach(function(x) { x.classList.remove('active'); });
      b.classList.add('active');
      activeSection = b.dataset.section;
      rebuildPool(); renderStats(); showCurrentCard();
    });
  }

  // ── Study Mode ──
  document.querySelectorAll('.fc-mode-btn').forEach(function(btn) {
    btn.addEventListener('click', function() {
      document.querySelectorAll('.fc-mode-btn').forEach(function(b) { b.classList.remove('active'); });
      btn.classList.add('active');
      activeMode = btn.dataset.mode;
      rebuildPool(); renderStats(); showCurrentCard();
    });
  });

  // ── Category Drill ──
  var drillEl = document.getElementById('fcCatDrill');
  if (drillEl) {
    var allCatBtn = document.createElement('button');
    allCatBtn.className = 'fc-drill-btn active';
    allCatBtn.dataset.cat = 'all';
    allCatBtn.textContent = 'All';
    drillEl.appendChild(allCatBtn);

    catDefs.forEach(function(cat) {
      var b = document.createElement('button');
      b.className = 'fc-drill-btn';
      b.dataset.cat = cat.key;
      b.textContent = cat.icon + ' ' + cat.label;
      drillEl.appendChild(b);
    });

    drillEl.addEventListener('click', function(e) {
      var b = e.target.closest('.fc-drill-btn');
      if (!b) return;
      drillEl.querySelectorAll('.fc-drill-btn').forEach(function(x) { x.classList.remove('active'); });
      b.classList.add('active');
      activeCatDrill = b.dataset.cat === 'all' ? null : b.dataset.cat;
      renderCard();
    });
  }

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
               c.brandName.toLowerCase().indexOf(q) !== -1 ||
               c.drugClass.toLowerCase().indexOf(q) !== -1;
      }).slice(0, 8);

      var container = document.getElementById('fcSearchResults');
      container.innerHTML = '';
      container.style.display = results.length ? 'block' : 'none';
      results.forEach(function(card) {
        var item = document.createElement('div');
        item.className = 'fc-search-item';
        item.textContent = card.drugName + ' (' + card.brandName + ')';
        item.addEventListener('click', function() {
          var idx = orderedPool.indexOf(card);
          if (idx === -1) {
            rebuildPool();
            idx = orderedPool.indexOf(card);
          }
          if (idx !== -1) poolPos = idx;
          isFlipped = false;
          renderCard();
          renderStats();
          searchEl.value = '';
          container.style.display = 'none';
        });
        container.appendChild(item);
      });
    });

    // Close search on outside click
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.fc-search-wrap')) {
        var r = document.getElementById('fcSearchResults');
        if (r) r.style.display = 'none';
      }
    });
  }

  // ── Stats ──
  function renderStats() {
    var statsEl = document.getElementById('fcStats');
    if (!statsEl) return;
    var pool = activeSection === 'all' ? allCards : allCards.filter(function(c) { return c.section === activeSection; });
    var total = pool.length, got = 0, weak = 0, unseen = 0;
    pool.forEach(function(c) {
      var r = ratings[getCardKey(c)];
      if (r === undefined) unseen++;
      else if (r >= 4) got++;
      else weak++;
    });
    var gp = Math.round((got / total) * 100);
    var wp = Math.round((weak / total) * 100);
    statsEl.innerHTML =
      '<div class="fc-stat fc-stat-got"><span class="fc-stat-num">' + got + '</span><span class="fc-stat-label">Got it</span></div>' +
      '<div class="fc-stat-bar-wrap"><div class="fc-stat-bar"><div class="fc-stat-bar-got" style="width:' + gp + '%"></div><div class="fc-stat-bar-weak" style="width:' + wp + '%"></div></div><div class="fc-stat-bar-labels"><span>' + unseen + ' unseen</span><span>' + total + ' total</span></div></div>' +
      '<div class="fc-stat fc-stat-weak"><span class="fc-stat-num">' + weak + '</span><span class="fc-stat-label">Review</span></div>';

    var counter = document.getElementById('fcCounter');
    if (counter) {
      counter.textContent = 'Card ' + (orderedPool.length ? poolPos + 1 : 0) + ' / ' + orderedPool.length;
    }
    var prog = document.getElementById('fcProgress');
    if (prog) prog.style.width = gp + '%';
  }

  // ── Render Card ──
  function renderCard() {
    var card = orderedPool[poolPos];
    if (!card) return;
    var cardEl = document.getElementById('fcCard');
    var sec = data.sections.find(function(s) { return s.id === card.section; });
    var color = sec ? sec.color : '#2A9D8F';
    var key = getCardKey(card);
    var rating = ratings[key];

    cardEl.classList.remove('flipped');

    // ── Front: Image ──
    var frontEl = document.getElementById('fcFront');
    var imgEl = document.getElementById('fcFrontImg');
    var overlayEl = document.getElementById('fcFrontOverlay');

    if (card.image) {
      imgEl.src = (card.imgBase || IMG_BASE_DRUGS) + card.image;
      imgEl.alt = card.drugName;
      imgEl.style.display = 'block';
      frontEl.classList.add('fc-has-image');
    } else {
      imgEl.style.display = 'none';
      frontEl.classList.remove('fc-has-image');
    }

    document.getElementById('fcDrugName').textContent = card.drugName;
    document.getElementById('fcBrandName').textContent = card.brandName || '';
    var pill = document.getElementById('fcClassPill');
    pill.textContent = card.drugClass;
    pill.style.background = color;

    // Mastery badge
    var badge = document.getElementById('fcMasteryBadge');
    if (badge) {
      if (rating >= 4) {
        badge.textContent = '\u2713 Got It';
        badge.className = 'fc-mastery-badge fc-mastery-got';
      } else if (rating >= 1) {
        badge.textContent = '\u21BB Review';
        badge.className = 'fc-mastery-badge fc-mastery-weak';
      } else {
        badge.textContent = 'NEW';
        badge.className = 'fc-mastery-badge fc-mastery-new';
      }
    }

    // ── Back: 12-Point Framework ──
    document.getElementById('fcBackHeader').textContent = card.drugName + ' \u2014 ' + card.brandName;
    var backSec = document.getElementById('fcBackSection');
    if (backSec) {
      backSec.textContent = sec ? sec.icon + ' ' + sec.label + ' \u203A ' + card.drugClass : '';
      backSec.style.color = color;
    }

    var factsEl = document.getElementById('fcFacts');
    factsEl.innerHTML = '';

    var factsToShow = card.facts;
    if (activeCatDrill) {
      factsToShow = card.facts.filter(function(f) {
        return f.indexOf(activeCatDrill) !== -1;
      });
    }

    factsToShow.forEach(function(f) {
      var li = document.createElement('li');
      var text = f.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

      // Style category labels
      catDefs.forEach(function(cat) {
        var idx = text.indexOf(cat.key);
        if (idx !== -1 && idx < 10) {
          var before = text.substring(0, idx);
          var after = text.substring(idx + cat.key.length);
          text = before + '<strong class="fc-cat ' + cat.cls + '">' + cat.key + '</strong>' + after;
        }
      });

      // Critical keywords
      text = text.replace(/(STOP|NEVER|FIRST|ALWAYS|MUST|HOLD|EMERGENCY|LIFELONG|IMMEDIATELY)/g,
        '<strong style="color:#C92A2A">$1</strong>');

      li.innerHTML = text;
      factsEl.appendChild(li);
    });

    var mnEl = document.getElementById('fcMnemonic');
    if (mnEl) mnEl.textContent = card.mnemonic ? '\u{1F4A1} ' + card.mnemonic : '';

    // Border colors
    var front = document.querySelector('.fc-card-front');
    var back = document.querySelector('.fc-card-back');
    if (front) front.style.borderTopColor = color;
    if (back) back.style.borderTopColor = color;

    // Animate
    var stage = document.getElementById('fcCardStage');
    if (stage) {
      stage.classList.remove('fc-slide-in');
      void stage.offsetHeight;
      stage.classList.add('fc-slide-in');
    }

    renderStats();
  }

  // ── Image Lightbox ──
  function openLightbox(src, alt) {
    var old = document.getElementById('fcLightbox');
    if (old) old.remove();
    var ov = document.createElement('div');
    ov.id = 'fcLightbox';
    ov.className = 'fc-lightbox';
    ov.innerHTML = '<div class="fc-lightbox-content"><button class="fc-lightbox-close">&times;</button><img src="' + src + '" alt="' + alt + '"><div class="fc-lightbox-label">' + alt + '</div></div>';
    ov.addEventListener('click', function(e) {
      if (e.target === ov || e.target.classList.contains('fc-lightbox-close')) ov.remove();
    });
    document.body.appendChild(ov);
  }

  // Image click — no lightbox, just flip the card
  // (lightbox was blocking card flip on mobile)

  // ── Flip ──
  var cardStage = document.getElementById('fcCardStage');
  if (cardStage) {
    cardStage.addEventListener('click', function(e) {
      if (e.target.closest('.fc-mastery-btn') || e.target.closest('.fc-nav-btn')) return;
      var el = document.getElementById('fcCard');
      isFlipped = !isFlipped;
      if (isFlipped) el.classList.add('flipped');
      else el.classList.remove('flipped');
    });
  }

  // ── Mastery ──
  function rateCard(gotIt) {
    var card = orderedPool[poolPos];
    if (!card) return;
    ratings[getCardKey(card)] = gotIt ? 4 : 2;
    saveRatings(ratings);
    setTimeout(function() { nextCard(); renderStats(); }, 200);
  }

  var gb = document.getElementById('fcGotIt');
  if (gb) gb.addEventListener('click', function(e) { e.stopPropagation(); rateCard(true); });
  var wb = document.getElementById('fcStudyMore');
  if (wb) wb.addEventListener('click', function(e) { e.stopPropagation(); rateCard(false); });

  // ── Nav ──
  var sb = document.getElementById('fcShuffle');
  if (sb) sb.addEventListener('click', function(e) { e.stopPropagation(); shufflePool(); showCurrentCard(); });
  var pb = document.getElementById('fcPrev');
  if (pb) pb.addEventListener('click', function(e) { e.stopPropagation(); prevCard(); });
  var nb = document.getElementById('fcNext');
  if (nb) nb.addEventListener('click', function(e) { e.stopPropagation(); nextCard(); });

  // ── Keyboard ──
  document.addEventListener('keydown', function(e) {
    if (document.getElementById('fcLightbox')) {
      if (e.key === 'Escape') document.getElementById('fcLightbox').remove();
      return;
    }
    if (e.target.tagName === 'INPUT') return;
    var deck = document.getElementById('fcDeckWrap');
    if (!deck || deck.style.display === 'none') return;

    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      var el = document.getElementById('fcCard');
      isFlipped = !isFlipped;
      if (isFlipped) el.classList.add('flipped');
      else el.classList.remove('flipped');
    }
    if (e.key === 'ArrowRight') nextCard();
    if (e.key === 'ArrowLeft') prevCard();
    if (e.key === 'g' || e.key === 'G') rateCard(true);
    if (e.key === 'r' || e.key === 'R') rateCard(false);
  });

  // ── Swipe ──
  var tx = 0, ty = 0;
  if (cardStage) {
    cardStage.addEventListener('touchstart', function(e) { tx = e.changedTouches[0].screenX; ty = e.changedTouches[0].screenY; }, { passive: true });
    cardStage.addEventListener('touchend', function(e) {
      if (e.target.closest('.fc-nav-btn') || e.target.closest('.fc-mastery-btn') || e.target.closest('.fc-audio-btn')) return;
      var dx = tx - e.changedTouches[0].screenX;
      var dy = ty - e.changedTouches[0].screenY;
      if (Math.abs(dx) > 80 && Math.abs(dx) > Math.abs(dy) * 1.5) { dx > 0 ? nextCard() : prevCard(); }
    }, { passive: true });
  }

  // ── Reset ──
  var rb = document.getElementById('fcReset');
  if (rb) {
    rb.addEventListener('click', function() {
      if (confirm('Reset all confidence ratings? This cannot be undone.')) {
        ratings = {};
        saveRatings(ratings);
        activeMode = 'all';
        document.querySelectorAll('.fc-mode-btn').forEach(function(b) { b.classList.remove('active'); });
        var amBtn = document.querySelector('.fc-mode-btn[data-mode="all"]');
        if (amBtn) amBtn.classList.add('active');
        rebuildPool(); showCurrentCard(); renderStats();
      }
    });
  }
})();
