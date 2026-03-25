// ══════════════════════════════════════════════
// Flashcard Deck — 3D flip cards with email gate
// ══════════════════════════════════════════════

(function() {
  const data = window.FLASHCARD_DATA;
  if (!data) return;

  // Google Form backend (same as signup.js)
  const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSdNKzXnH7ZK5zgPD-HPtg3bOOKa77iyPBpFYLMOzUYvetn7EQ/formResponse';
  const GOOGLE_FORM_ENTRY  = 'entry.398576954';

  let allCards = [...data.cards];
  let filteredCards = [...allCards];
  let currentIndex = 0;
  let isFlipped = false;

  // ── Check if already unlocked ──
  if (localStorage.getItem('tiago_flashcards_unlocked') || localStorage.getItem('tiago_subscribed')) {
    unlockDeck();
  }

  // ── Build filter buttons ──
  const filtersEl = document.getElementById('fcFilters');
  if (filtersEl) {
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

      const section = btn.dataset.section;
      filteredCards = section === 'all' ? [...allCards] : allCards.filter(c => c.section === section);
      currentIndex = 0;
      isFlipped = false;
      renderCard();
    });
  }

  // ── Email Gate ──
  const gateForm = document.getElementById('fcGateForm');
  if (gateForm) {
    gateForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('fcEmail').value.trim();
      if (!email) return;

      // Send to Google Forms
      if (GOOGLE_FORM_ACTION && GOOGLE_FORM_ENTRY) {
        const iframe = document.createElement('iframe');
        iframe.name = 'fc_hidden';
        iframe.style.display = 'none';
        document.body.appendChild(iframe);

        const form = document.createElement('form');
        form.method = 'POST';
        form.action = GOOGLE_FORM_ACTION;
        form.target = 'fc_hidden';

        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = GOOGLE_FORM_ENTRY;
        input.value = email;
        form.appendChild(input);

        document.body.appendChild(form);
        form.submit();
        setTimeout(() => { form.remove(); iframe.remove(); }, 3000);
      }

      // Save locally
      const subs = JSON.parse(localStorage.getItem('tiago_emails') || '[]');
      subs.push({ email, date: new Date().toISOString(), page: 'flashcards', source: 'exam-day-gate' });
      localStorage.setItem('tiago_emails', JSON.stringify(subs));
      localStorage.setItem('tiago_subscribed', 'true');
      localStorage.setItem('tiago_flashcards_unlocked', 'true');

      unlockDeck();
    });
  }

  function unlockDeck() {
    const gate = document.getElementById('fcGate');
    const deck = document.getElementById('fcDeckWrap');
    if (gate) {
      gate.style.transition = 'all 0.5s ease';
      gate.style.opacity = '0';
      gate.style.transform = 'scale(0.95)';
      setTimeout(() => { gate.style.display = 'none'; }, 500);
    }
    if (deck) {
      setTimeout(() => {
        deck.style.display = 'block';
        deck.style.opacity = '0';
        deck.style.transition = 'opacity 0.6s ease';
        // Force reflow
        deck.offsetHeight;
        deck.style.opacity = '1';
        renderCard();
      }, 300);
    }
  }

  // ── Card Rendering ──
  function renderCard() {
    if (!filteredCards.length) return;
    const card = filteredCards[currentIndex];
    const cardEl = document.getElementById('fcCard');
    const sectionData = data.sections.find(s => s.id === card.section);
    const sectionColor = sectionData ? sectionData.color : '#2A9D8F';

    // Reset flip
    isFlipped = false;
    cardEl.classList.remove('flipped');

    // Front
    document.getElementById('fcFrontIcon').textContent = card.icon || '';
    document.getElementById('fcDrugName').textContent = card.drugName;
    document.getElementById('fcBrandName').textContent = card.brandName ? `(${card.brandName})` : '';
    const pill = document.getElementById('fcClassPill');
    pill.textContent = card.drugClass;
    pill.style.background = sectionColor;
    document.getElementById('fcPurpose').textContent = card.purpose;

    // Back
    document.getElementById('fcBackHeader').textContent = card.drugName;
    const factsEl = document.getElementById('fcFacts');
    factsEl.innerHTML = '';
    card.facts.forEach(f => {
      const li = document.createElement('li');
      li.textContent = f;
      factsEl.appendChild(li);
    });
    const mnEl = document.getElementById('fcMnemonic');
    mnEl.textContent = card.mnemonic ? `💡 ${card.mnemonic}` : '';

    // Card border color
    document.querySelector('.fc-card-front').style.borderTopColor = sectionColor;
    document.querySelector('.fc-card-back').style.borderTopColor = sectionColor;

    // Counter
    document.getElementById('fcCounter').textContent = `Card ${currentIndex + 1} / ${filteredCards.length}`;

    // Progress bar
    const pct = ((currentIndex + 1) / filteredCards.length) * 100;
    document.getElementById('fcProgress').style.width = pct + '%';

    // Prev/Next button states
    document.getElementById('fcPrev').disabled = currentIndex === 0;
    document.getElementById('fcNext').disabled = currentIndex === filteredCards.length - 1;

    // Entrance animation
    const stage = document.getElementById('fcCardStage');
    stage.classList.remove('fc-slide-in');
    stage.offsetHeight; // reflow
    stage.classList.add('fc-slide-in');
  }

  // ── Flip ──
  const cardStage = document.getElementById('fcCardStage');
  if (cardStage) {
    cardStage.addEventListener('click', function() {
      isFlipped = !isFlipped;
      document.getElementById('fcCard').classList.toggle('flipped', isFlipped);
    });
  }

  // ── Navigation ──
  const prevBtn = document.getElementById('fcPrev');
  const nextBtn = document.getElementById('fcNext');
  const shuffleBtn = document.getElementById('fcShuffle');

  if (prevBtn) prevBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentIndex > 0) { currentIndex--; renderCard(); }
  });
  if (nextBtn) nextBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentIndex < filteredCards.length - 1) { currentIndex++; renderCard(); }
  });
  if (shuffleBtn) shuffleBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    // Fisher-Yates shuffle
    for (let i = filteredCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [filteredCards[i], filteredCards[j]] = [filteredCards[j], filteredCards[i]];
    }
    currentIndex = 0;
    renderCard();
  });

  // ── Keyboard navigation ──
  document.addEventListener('keydown', function(e) {
    if (document.getElementById('fcDeckWrap').style.display === 'none') return;
    if (e.key === 'ArrowLeft' && currentIndex > 0) { currentIndex--; renderCard(); }
    if (e.key === 'ArrowRight' && currentIndex < filteredCards.length - 1) { currentIndex++; renderCard(); }
    if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      isFlipped = !isFlipped;
      document.getElementById('fcCard').classList.toggle('flipped', isFlipped);
    }
  });

  // ── Swipe support for mobile ──
  let touchStartX = 0;
  let touchEndX = 0;
  if (cardStage) {
    cardStage.addEventListener('touchstart', function(e) {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    cardStage.addEventListener('touchend', function(e) {
      touchEndX = e.changedTouches[0].screenX;
      const diff = touchStartX - touchEndX;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && currentIndex < filteredCards.length - 1) { currentIndex++; renderCard(); }
        if (diff < 0 && currentIndex > 0) { currentIndex--; renderCard(); }
      }
    }, { passive: true });
  }
})();
