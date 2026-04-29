// ══════════════════════════════════════════════
// Unified Flashcard Engine — ALL decks in one page
// Normalizes 5 data sources into one card system
// ══════════════════════════════════════════════

(function() {
  var STORAGE_KEY = 'swt_unified_cbr';
  var IMG_BASE_DRUGS = 'assets/drug-cards/';
  var IMG_BASE_AH = 'assets/study-images/';
  var IMG_BASE_Q3 = 'exam2/';
  var AUDIO_BASE = 'exam3/audio/';

  // ── Deck definitions ──
  var DECKS = [
    { id: 'pharm', label: 'Pharm Exam 2', color: '#0B1D3A', count: 0 },
    { id: 'exam3', label: 'Exam 3', color: '#2B8A3E', count: 0 },
    { id: 'q3cns', label: 'Quiz 3 CNS', color: '#D9480F', count: 0 },
    { id: 'q3gi', label: 'Quiz 3 GI', color: '#862E9C', count: 0 }
  ];

  // ── Normalize all cards into unified format ──
  var allCards = [];
  var allSections = [];
  var sectionMap = {};

  function addSection(id, label, icon, color, deckId) {
    var key = deckId + '_' + id;
    if (!sectionMap[key]) {
      sectionMap[key] = true;
      allSections.push({ id: key, label: label, icon: icon, color: color, deckId: deckId });
    }
    return key;
  }

  // 1. Pharm Exam 2 (FLASHCARD_DATA) — traditional format
  if (window.FLASHCARD_DATA) {
    var d = window.FLASHCARD_DATA;
    (d.sections || []).forEach(function(s) { addSection(s.id, s.label, s.icon, s.color, 'pharm'); });
    (d.cards || []).forEach(function(c) {
      allCards.push({
        type: 'traditional',
        deckId: 'pharm',
        deckLabel: 'PHARM',
        sectionKey: 'pharm_' + c.section,
        drugName: c.drugName,
        brandName: c.brandName || '',
        drugClass: c.drugClass || '',
        purpose: c.purpose || '',
        icon: c.icon || '',
        facts: c.facts || [],
        mnemonic: c.mnemonic || '',
        image: null,
        pillColor: (d.sections.find(function(s) { return s.id === c.section; }) || {}).color || '#2A9D8F'
      });
    });
    DECKS[0].count = (d.cards || []).length;
  }

  // 2. Adult Health (FLASHCARD_DATA_AH) — merged into Exam 3
  if (window.FLASHCARD_DATA_AH) {
    var d2 = window.FLASHCARD_DATA_AH;
    (d2.sections || []).forEach(function(s) { addSection(s.id, s.label, s.icon, s.color, 'exam3'); });
    (d2.cards || []).forEach(function(c) {
      allCards.push({
        type: 'traditional',
        deckId: 'exam3',
        deckLabel: 'AH',
        sectionKey: 'exam3_' + c.section,
        drugName: c.drugName,
        brandName: c.brandName || '',
        drugClass: c.drugClass || '',
        purpose: c.purpose || '',
        icon: c.icon || '',
        facts: c.facts || [],
        mnemonic: c.mnemonic || '',
        image: c.image ? IMG_BASE_AH + c.image : null,
        pillColor: (d2.sections.find(function(s) { return s.id === c.section; }) || {}).color || '#2A9D8F'
      });
    });
  }

  // 3. 84 Drug Cards (FLASHCARD_DATA_DRUGS) — merged into Exam 3
  if (window.FLASHCARD_DATA_DRUGS) {
    var d3 = window.FLASHCARD_DATA_DRUGS;
    (d3.sections || []).forEach(function(s) { addSection(s.id, s.label, s.icon, s.color, 'exam3'); });
    (d3.cards || []).forEach(function(c) {
      allCards.push({
        type: 'drug8cat',
        deckId: 'exam3',
        deckLabel: 'DRUG',
        sectionKey: 'exam3_' + c.section,
        drugName: c.drugName,
        brandName: c.brandName || '',
        drugClass: c.drugClass || '',
        purpose: '',
        icon: '',
        facts: c.facts || [],
        mnemonic: c.mnemonic || '',
        image: c.image ? IMG_BASE_DRUGS + c.image : null,
        groupId: c.groupId || '',
        pillColor: (d3.sections.find(function(s) { return s.id === c.section; }) || {}).color || '#C92A2A'
      });
    });
  }

  // Update Exam 3 deck count (AH + Drugs combined)
  var exam3Deck = DECKS.find(function(d) { return d.id === 'exam3'; });
  if (exam3Deck) {
    exam3Deck.count = allCards.filter(function(c) { return c.deckId === 'exam3'; }).length;
  }

  // 4. Quiz 3 CNS (FLASHCARD_DATA_Q3) — visual format
  if (window.FLASHCARD_DATA_Q3) {
    var d4 = window.FLASHCARD_DATA_Q3;
    (d4.sections || []).forEach(function(s) { addSection(s.id, s.label, s.icon, s.color, 'q3cns'); });
    (d4.cards || []).forEach(function(c) {
      allCards.push({
        type: 'visual',
        deckId: 'q3cns',
        deckLabel: 'CNS',
        sectionKey: 'q3cns_' + c.section,
        drugName: c.front ? c.front.title : '',
        brandName: c.front ? (c.front.subtitle || '') : '',
        drugClass: '',
        purpose: '',
        icon: c.front ? (c.front.icon || '') : '',
        facts: c.notes || [],
        mnemonic: c.mnemonic || '',
        image: c.image ? IMG_BASE_Q3 + c.image : null,
        pillColor: (d4.sections.find(function(s) { return s.id === c.section; }) || {}).color || '#D9480F'
      });
    });
    DECKS[2].count = (d4.cards || []).length;
  }

  // 5. Quiz 3 GI (FLASHCARD_DATA_Q3_GI) — visual format
  if (window.FLASHCARD_DATA_Q3_GI) {
    var d5 = window.FLASHCARD_DATA_Q3_GI;
    (d5.sections || []).forEach(function(s) { addSection(s.id, s.label, s.icon, s.color, 'q3gi'); });
    (d5.cards || []).forEach(function(c) {
      allCards.push({
        type: 'visual',
        deckId: 'q3gi',
        deckLabel: 'GI',
        sectionKey: 'q3gi_' + c.section,
        drugName: c.front ? c.front.title : '',
        brandName: c.front ? (c.front.subtitle || '') : '',
        drugClass: '',
        purpose: '',
        icon: c.front ? (c.front.icon || '') : '',
        facts: c.notes || [],
        mnemonic: c.mnemonic || '',
        image: c.image ? IMG_BASE_Q3 + c.image : null,
        pillColor: (d5.sections.find(function(s) { return s.id === c.section; }) || {}).color || '#862E9C'
      });
    });
    DECKS[3].count = (d5.cards || []).length;
  }

  // ── State ──
  var queue = [];
  var currentIndex = 0;
  var isFlipped = false;
  var activeDeck = 'all';
  var activeSection = 'all';

  // ── Mastery ──
  function loadRatings() { try { return JSON.parse(localStorage.getItem(STORAGE_KEY) || '{}'); } catch(e) { return {}; } }
  function saveRatings(r) { localStorage.setItem(STORAGE_KEY, JSON.stringify(r)); }
  function cardKey(c) { return (c.deckId + '_' + c.drugName).replace(/\s+/g, '_').toLowerCase(); }
  var ratings = loadRatings();

  // ── Audio maps (from exam3/audio inventory) ──
  var podcastMap = {};
  var readMap = {};
  var podcastAliases = {
    'Lispro': 'insulin_lispro_podcast.mp3',
    'Regular Insulin': 'insulin_regular_podcast.mp3',
    'Glargine': 'insulin_glargine_podcast.mp3',
    'Dextrose 50%': 'dextrose50_podcast.mp3',
    'Epoetin Alfa': 'epoetin_podcast.mp3'
  };
  if (window.FLASHCARD_DATA_DRUGS) {
    (window.FLASHCARD_DATA_DRUGS.cards || []).forEach(function(c) {
      var name = c.drugName;
      var slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_|_$/g, '');
      podcastMap[name] = podcastAliases[name] || (slug + '_podcast.mp3');
      readMap[name] = slug + '_readcard.mp3';
    });
  }

  // ── Update total count ──
  var totalEl = document.getElementById('ufcTotalCount');
  if (totalEl) totalEl.textContent = allCards.length;

  // ── Build pool ──
  function getPool() {
    return allCards.filter(function(c) {
      if (activeDeck !== 'all' && c.deckId !== activeDeck) return false;
      if (activeSection !== 'all' && c.sectionKey !== activeSection) return false;
      return true;
    });
  }

  // ── Custom Dropdown Helper ──
  function setupDropdown(btnId, menuId, items, onSelect) {
    var btn = document.getElementById(btnId);
    var menu = document.getElementById(menuId);
    if (!btn || !menu) return;
    menu.innerHTML = '';
    items.forEach(function(item) {
      var el = document.createElement('div');
      el.className = 'ufc-dropdown-item' + (item.active ? ' active' : '');
      el.textContent = item.label;
      el.addEventListener('click', function(e) {
        e.stopPropagation();
        btn.textContent = item.label;
        menu.classList.remove('show');
        btn.classList.remove('open');
        onSelect(item.value);
      });
      menu.appendChild(el);
    });
    btn.onclick = function(e) {
      e.stopPropagation();
      // Close other dropdowns
      document.querySelectorAll('.ufc-dropdown-menu.show').forEach(function(m) { if (m !== menu) m.classList.remove('show'); });
      document.querySelectorAll('.ufc-dropdown-btn.open').forEach(function(b) { if (b !== btn) b.classList.remove('open'); });
      menu.classList.toggle('show');
      btn.classList.toggle('open');
    };
  }
  // Close dropdowns on outside click
  document.addEventListener('click', function() {
    document.querySelectorAll('.ufc-dropdown-menu.show').forEach(function(m) { m.classList.remove('show'); });
    document.querySelectorAll('.ufc-dropdown-btn.open').forEach(function(b) { b.classList.remove('open'); });
  });

  // ── Render deck filters (custom dropdown) ──
  function renderDeckFilters() {
    var items = [{ value: 'all', label: '📚 All Decks (' + allCards.length + ')', active: activeDeck === 'all' }];
    var icons = { pharm: '💊', ah: '🏥', drugs: '💉', q3cns: '🧠', q3gi: '🫁' };
    DECKS.forEach(function(d) {
      if (d.count > 0) {
        items.push({ value: d.id, label: (icons[d.id] || '') + ' ' + d.label + ' (' + d.count + ')', active: activeDeck === d.id });
      }
    });
    var activeItem = items.find(function(i) { return i.active; });
    var btn = document.getElementById('ufcDeckBtn');
    if (btn && activeItem) btn.textContent = activeItem.label;
    setupDropdown('ufcDeckBtn', 'ufcDeckMenu', items, function(val) {
      activeDeck = val;
      activeSection = 'all';
      renderDeckFilters();
      renderSectionFilters();
      resetQueue();
    });
  }

  // ── Render section filters (custom dropdown) ──
  function renderSectionFilters() {
    var sections = allSections.filter(function(s) { return activeDeck === 'all' || s.deckId === activeDeck; });
    var items = [{ value: 'all', label: '🎯 All Topics', active: activeSection === 'all' }];
    sections.forEach(function(s) {
      var count = allCards.filter(function(c) { return c.sectionKey === s.id; }).length;
      items.push({ value: s.id, label: s.icon + ' ' + s.label + ' (' + count + ')', active: activeSection === s.id });
    });
    var activeItem = items.find(function(i) { return i.active; });
    var btn = document.getElementById('ufcSectionBtn');
    if (btn && activeItem) btn.textContent = activeItem.label;
    setupDropdown('ufcSectionBtn', 'ufcSectionMenu', items, function(val) {
      activeSection = val;
      renderSectionFilters();
      resetQueue();
    });
  }

  // ── Render stats ──
  function renderStats() {
    var pool = getPool();
    var total = pool.length;
    var got = 0, weak = 0;
    pool.forEach(function(c) {
      var r = ratings[cardKey(c)];
      if (r === 'got') got++;
      else if (r === 'weak') weak++;
    });
    var unseen = total - got - weak;
    var pGot = total ? Math.round(got / total * 100) : 0;
    var pWeak = total ? Math.round(weak / total * 100) : 0;
    document.getElementById('ufcStats').innerHTML =
      '<div class="ufc-stat ufc-stat-got"><span class="ufc-stat-num">' + got + '</span><span class="ufc-stat-label">Got It</span></div>' +
      '<div class="ufc-stat-bar-wrap"><div class="ufc-stat-bar"><div class="ufc-stat-bar-got" style="width:' + pGot + '%"></div><div class="ufc-stat-bar-weak" style="width:' + pWeak + '%"></div></div></div>' +
      '<div class="ufc-stat ufc-stat-weak"><span class="ufc-stat-num">' + weak + '</span><span class="ufc-stat-label">Review</span></div>';
  }

  // ── Size card — grid layout handles this automatically now ──
  // Both faces are in the same grid cell (grid-area: 1/1), so the
  // grid row grows to fit the tallest face. This is a no-op but kept
  // as a hook in case we need image-load recalc.
  function sizeCard() {
    // Grid handles sizing — nothing to do
  }

  // ── Render card ──
  function renderCard() {
    var pool = getPool();
    var stage = document.getElementById('ufcCardStage');
    var empty = document.getElementById('ufcEmpty');

    if (pool.length === 0) {
      stage.style.display = 'none';
      empty.style.display = 'block';
      document.getElementById('ufcCounter').textContent = '0 / 0';
      document.getElementById('ufcAudioBar').style.display = 'none';
      return;
    }
    stage.style.display = '';
    empty.style.display = 'none';

    if (currentIndex >= pool.length) currentIndex = 0;
    if (currentIndex < 0) currentIndex = pool.length - 1;
    var c = pool[currentIndex];

    // Unflip
    isFlipped = false;
    document.getElementById('ufcCard').classList.remove('flipped');

    // Counter + progress
    document.getElementById('ufcCounter').textContent = 'Card ' + (currentIndex + 1) + ' / ' + pool.length;
    document.getElementById('ufcProgress').style.width = ((currentIndex + 1) / pool.length * 100) + '%';

    // ── Front ──
    var front = document.getElementById('ufcFront');
    var r = ratings[cardKey(c)];
    var masteryHTML = '';
    if (r === 'got') masteryHTML = '<div class="ufc-mastery-badge ufc-mastery-got">✓ Got It</div>';
    else if (r === 'weak') masteryHTML = '<div class="ufc-mastery-badge ufc-mastery-weak">↻ Review</div>';

    var deckBadge = '<div class="ufc-deck-badge" style="background:' + (DECKS.find(function(d) { return d.id === c.deckId; }) || {}).color + '">' + c.deckLabel + '</div>';
    var borderColor = c.pillColor || '#2A9D8F';
    front.style.borderTopColor = borderColor;

    var cardEl = document.getElementById('ufcCard');

    if (c.image) {
      front.innerHTML = deckBadge + masteryHTML +
        '<img class="ufc-front-img" src="' + c.image + '" alt="' + c.drugName + '" loading="eager">' +
        (c.icon ? '<div class="ufc-card-icon" style="display:none">' + c.icon + '</div>' : '') +
        '<div class="ufc-card-title">' + c.drugName + '</div>' +
        (c.brandName ? '<div class="ufc-card-subtitle">' + c.brandName + '</div>' : '') +
        (c.drugClass ? '<div class="ufc-card-pill" style="background:' + borderColor + '">' + c.drugClass + '</div>' : '') +
        (c.purpose ? '<div class="ufc-card-purpose">' + c.purpose + '</div>' : '') +
        '<div class="ufc-card-tap">Tap to flip | Tap image to zoom</div>';
      // Handle image load, error, lightbox click
      var img = front.querySelector('.ufc-front-img');
      if (img) {
        img.addEventListener('load', sizeCard);
        img.addEventListener('error', function() {
          img.style.display = 'none';
          var iconEl = front.querySelector('.ufc-card-icon');
          if (iconEl) iconEl.style.display = '';
          sizeCard();
        });
        img.addEventListener('click', function(e) {
          e.stopPropagation();
          showLightbox(img.src, c.drugName);
        });
      }
    } else {
      front.innerHTML = deckBadge + masteryHTML +
        (c.icon ? '<div class="ufc-card-icon">' + c.icon + '</div>' : '') +
        '<div class="ufc-card-title">' + c.drugName + '</div>' +
        (c.brandName ? '<div class="ufc-card-subtitle">' + c.brandName + '</div>' : '') +
        (c.drugClass ? '<div class="ufc-card-pill" style="background:' + borderColor + '">' + c.drugClass + '</div>' : '') +
        (c.purpose ? '<div class="ufc-card-purpose">' + c.purpose + '</div>' : '') +
        '<div class="ufc-card-tap">Tap to flip</div>';
    }

    // ── Back ──
    var back = document.getElementById('ufcBack');
    back.style.borderTopColor = borderColor;
    var factsHTML = '';
    if (c.type === 'drug8cat') {
      // 8-category framework — apply category colors
      var catMap = {
        'WHAT IS IT': 'fc-cat-what', 'LOOKS LIKE': 'fc-cat-looks', 'GOES WRONG': 'fc-cat-wrong',
        'MONITOR': 'fc-cat-monitor', 'NURSE DOES': 'fc-cat-nurse', 'TEACH': 'fc-cat-teach',
        'PRIORITY': 'fc-cat-priority', "CAN'T MIX": 'fc-cat-cant',
        'SIMILAR': 'fc-cat-similar', 'EMERGENCY': 'fc-cat-emergency',
        'ASSESS FIRST': 'fc-cat-assess', 'CHAIN': 'fc-cat-chain'
      };
      c.facts.forEach(function(f) {
        var text = f.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
        // Style category labels with bold + color
        var styled = false;
        Object.keys(catMap).forEach(function(k) {
          var idx = text.indexOf(k);
          if (idx !== -1 && idx < 10 && !styled) {
            var before = text.substring(0, idx);
            var after = text.substring(idx + k.length);
            text = before + '<strong class="fc-cat ' + catMap[k] + '">' + k + '</strong>' + after;
            styled = true;
          }
        });
        // Highlight critical keywords
        text = text.replace(/(STOP|NEVER|FIRST|ALWAYS|MUST|HOLD|EMERGENCY|LIFELONG|IMMEDIATELY)/g,
          '<strong style="color:#C92A2A">$1</strong>');
        factsHTML += '<li>' + text + '</li>';
      });
    } else {
      c.facts.forEach(function(f) { factsHTML += '<li>' + f + '</li>'; });
    }

    back.innerHTML =
      '<div class="ufc-back-section">' + c.deckLabel + '</div>' +
      '<div class="ufc-back-header">' + c.drugName + (c.brandName ? ' (' + c.brandName + ')' : '') + '</div>' +
      '<ul class="ufc-facts">' + factsHTML + '</ul>' +
      (c.mnemonic ? '<div class="ufc-mnemonic">💡 ' + c.mnemonic + '</div>' : '') +
      '<div class="ufc-card-tap">Tap to flip back</div>';

    // ── Audio bar (drug cards only) ──
    var audioBar = document.getElementById('ufcAudioBar');
    audioBar.style.display = (c.deckId === 'exam3' && c.type === 'drug8cat') ? 'flex' : 'none';

    // Size card to fit content
    sizeCard();

    // Slide animation
    stage.querySelector('.ufc-card').classList.add('ufc-slide-in');
    setTimeout(function() { stage.querySelector('.ufc-card').classList.remove('ufc-slide-in'); }, 300);

    renderStats();
  }

  // ── Lightbox ──
  function showLightbox(src, label) {
    var lb = document.createElement('div');
    lb.className = 'ufc-lightbox';
    lb.innerHTML = '<div style="position:relative;text-align:center"><button type="button" class="ufc-lightbox-close" aria-label="Close image preview">&times;</button><img src="' + src + '" alt="' + label + '"><div style="color:#fff;font-size:0.9em;font-weight:600;margin-top:0.8em;opacity:0.8">' + label + '</div></div>';
    document.body.appendChild(lb);
    lb.addEventListener('click', function() { lb.remove(); });
    lb.querySelector('.ufc-lightbox-close').addEventListener('click', function(e) { e.stopPropagation(); lb.remove(); });
  }

  // ── Audio ──
  var currentAudio = null;
  var activeAudioBtn = null;

  function setAudioStatus(message) {
    var status = document.getElementById('ufcAudioStatus');
    if (status) status.textContent = message || '';
  }

  function stopAudio() {
    if (currentAudio) { currentAudio.pause(); currentAudio.currentTime = 0; currentAudio = null; }
    if (activeAudioBtn) { activeAudioBtn.classList.remove('playing'); activeAudioBtn = null; }
    var pb = document.getElementById('ufcPodcastBtn');
    var rb = document.getElementById('ufcReadBtn');
    if (pb) { pb.classList.remove('playing'); pb.querySelector('.ufc-audio-icon').textContent = '🎙'; }
    if (rb) { rb.classList.remove('playing'); rb.querySelector('.ufc-audio-icon').textContent = '🔊'; }
    setAudioStatus('');
  }

  function playAudio(file, btn, icon, label) {
    stopAudio();
    currentAudio = new Audio(AUDIO_BASE + file);
    activeAudioBtn = btn;
    btn.classList.add('playing');
    btn.querySelector('.ufc-audio-icon').textContent = '⏹';
    setAudioStatus('Playing ' + label + '...');
    currentAudio.play().catch(function() {
      btn.querySelector('.ufc-audio-icon').textContent = '❌';
      setAudioStatus('Audio could not play. Try again after the page finishes loading.');
      setTimeout(function() { btn.querySelector('.ufc-audio-icon').textContent = icon; }, 1500);
    });
    currentAudio.addEventListener('ended', function() { stopAudio(); });
  }

  document.getElementById('ufcPodcastBtn').addEventListener('click', function(e) {
    e.stopPropagation();
    var pb = document.getElementById('ufcPodcastBtn');
    if (currentAudio && activeAudioBtn === pb) { stopAudio(); return; }
    var pool = getPool();
    if (!pool.length) return;
    var c = pool[currentIndex];
    var file = podcastMap[c.drugName];
    if (!file) {
      pb.querySelector('.ufc-audio-icon').textContent = '❌';
      setAudioStatus('Podcast audio is not available for this card yet.');
      setTimeout(function() { pb.querySelector('.ufc-audio-icon').textContent = '🎙'; }, 1500);
      return;
    }
    playAudio(file, pb, '🎙', 'podcast audio');
  });

  document.getElementById('ufcReadBtn').addEventListener('click', function(e) {
    e.stopPropagation();
    var rb = document.getElementById('ufcReadBtn');
    if (currentAudio && activeAudioBtn === rb) { stopAudio(); return; }
    var pool = getPool();
    if (!pool.length) return;
    var c = pool[currentIndex];
    var file = readMap[c.drugName];
    if (!file) {
      rb.querySelector('.ufc-audio-icon').textContent = '❌';
      setAudioStatus('Read-card audio is not available for this card yet.');
      setTimeout(function() { rb.querySelector('.ufc-audio-icon').textContent = '🔊'; }, 1500);
      return;
    }
    playAudio(file, rb, '🔊', 'read-card audio');
  });

  // ── Search ──
  var searchInput = document.getElementById('ufcSearch');
  var searchResults = document.getElementById('ufcSearchResults');

  searchInput.addEventListener('input', function() {
    var q = searchInput.value.trim().toLowerCase();
    if (q.length < 2) { searchResults.style.display = 'none'; return; }
    var matches = allCards.filter(function(c) {
      return c.drugName.toLowerCase().indexOf(q) !== -1 ||
             c.brandName.toLowerCase().indexOf(q) !== -1 ||
             c.drugClass.toLowerCase().indexOf(q) !== -1 ||
             c.facts.some(function(f) { return f.toLowerCase().indexOf(q) !== -1; });
    }).slice(0, 12);
    if (!matches.length) { searchResults.style.display = 'none'; return; }
    searchResults.innerHTML = matches.map(function(c, i) {
      return '<div class="ufc-search-item" data-idx="' + allCards.indexOf(c) + '">' + c.drugName + (c.brandName ? ' (' + c.brandName + ')' : '') + '<span class="ufc-search-deck">' + c.deckLabel + '</span></div>';
    }).join('');
    searchResults.style.display = 'block';
    searchResults.querySelectorAll('.ufc-search-item').forEach(function(item) {
      item.addEventListener('click', function() {
        var globalIdx = parseInt(item.dataset.idx);
        var card = allCards[globalIdx];
        // Reset filters to show this card
        activeDeck = 'all';
        activeSection = 'all';
        document.querySelectorAll('.ufc-deck-btn').forEach(function(b) { b.classList.remove('active'); });
        var allBtn = document.querySelector('.ufc-deck-btn[data-deck="all"]');
        if (allBtn) allBtn.classList.add('active');
        renderSectionFilters();
        var pool = getPool();
        currentIndex = pool.indexOf(card);
        if (currentIndex < 0) currentIndex = 0;
        renderCard();
        searchResults.style.display = 'none';
        searchInput.value = '';
      });
    });
  });

  document.addEventListener('click', function(e) {
    if (!searchResults.contains(e.target) && e.target !== searchInput) searchResults.style.display = 'none';
  });

  // ── Controls ──
  function resetQueue() { currentIndex = 0; stopAudio(); renderCard(); }

  document.getElementById('ufcCardStage').addEventListener('click', function() {
    isFlipped = !isFlipped;
    document.getElementById('ufcCard').classList.toggle('flipped', isFlipped);
  });

  document.getElementById('ufcPrev').addEventListener('click', function() { currentIndex--; stopAudio(); renderCard(); });
  document.getElementById('ufcNext').addEventListener('click', function() { currentIndex++; stopAudio(); renderCard(); });
  document.getElementById('ufcShuffle').addEventListener('click', function() {
    var pool = getPool();
    if (pool.length > 1) { currentIndex = Math.floor(Math.random() * pool.length); }
    stopAudio();
    renderCard();
  });

  document.getElementById('ufcGotIt').addEventListener('click', function() {
    var pool = getPool();
    if (!pool.length) return;
    ratings[cardKey(pool[currentIndex])] = 'got';
    saveRatings(ratings);
    currentIndex++;
    stopAudio();
    renderCard();
  });

  document.getElementById('ufcStudyMore').addEventListener('click', function() {
    var pool = getPool();
    if (!pool.length) return;
    ratings[cardKey(pool[currentIndex])] = 'weak';
    saveRatings(ratings);
    currentIndex++;
    stopAudio();
    renderCard();
  });

  document.getElementById('ufcReset').addEventListener('click', function() {
    if (confirm('Reset mastery progress for ALL cards?')) {
      ratings = {};
      saveRatings(ratings);
      renderCard();
    }
  });

  // ── Keyboard ──
  document.addEventListener('keydown', function(e) {
    if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;
    if (e.key === 'ArrowLeft') { currentIndex--; stopAudio(); renderCard(); }
    else if (e.key === 'ArrowRight') { currentIndex++; stopAudio(); renderCard(); }
    else if (e.key === ' ') { e.preventDefault(); isFlipped = !isFlipped; document.getElementById('ufcCard').classList.toggle('flipped', isFlipped); }
    else if (e.key === 'g' || e.key === 'G') { document.getElementById('ufcGotIt').click(); }
    else if (e.key === 'r' || e.key === 'R') { document.getElementById('ufcStudyMore').click(); }
    else if (e.key === 'Escape') { var lb = document.querySelector('.ufc-lightbox'); if (lb) lb.remove(); }
  });

  // ── Touch swipe ──
  var touchStartX = 0;
  var cardStage = document.getElementById('ufcCardStage');
  cardStage.addEventListener('touchstart', function(e) { touchStartX = e.touches[0].clientX; }, { passive: true });
  cardStage.addEventListener('touchend', function(e) {
    var dx = e.changedTouches[0].clientX - touchStartX;
    if (Math.abs(dx) > 60) {
      if (dx < 0) { currentIndex++; } else { currentIndex--; }
      stopAudio();
      renderCard();
    }
  }, { passive: true });

  // ── Init ──
  renderDeckFilters();
  renderSectionFilters();
  renderCard();

})();
