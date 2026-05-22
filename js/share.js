// ══════════════════════════════════════════════
// Social Share Button — Web Share API + copy fallback
// No third-party scripts, no tracking, no cookies
// ══════════════════════════════════════════════

(function() {
  // Only show on content pages (not privacy/terms)
  const path = location.pathname;
  if (path.includes('privacy') || path.includes('terms')) return;

  const btn = document.createElement('button');
  btn.className = 'share-float';
  btn.innerHTML = '\uD83D\uDD17';
  btn.title = 'Share this page';
  btn.setAttribute('aria-label', 'Share this page');
  btn.setAttribute('data-hint', 'Share with a classmate');

  const toast = document.createElement('div');
  toast.className = 'share-toast';
  toast.textContent = 'Share message copied!';
  document.body.appendChild(toast);

  const PUBLIC_SITE_BASE = 'https://tiago-tubarao.github.io/study-with-tiago/';
  const PUBLIC_SITE_PATH = '/study-with-tiago/';
  const SHARE_QUERY_ALLOWLIST = ['audio', 'deck', 'section'];

  // Build a public, bookmark-safe URL even while testing from localhost/127.0.0.1.
  function cleanShareUrl() {
    var sourceUrl = new URL(location.href);
    var cleanPath = sourceUrl.pathname;

    if (cleanPath.indexOf(PUBLIC_SITE_PATH) === 0) {
      cleanPath = cleanPath.slice(PUBLIC_SITE_PATH.length);
    } else {
      cleanPath = cleanPath.replace(/^\/+/, '');
    }

    var publicUrl = new URL(cleanPath, PUBLIC_SITE_BASE);
    SHARE_QUERY_ALLOWLIST.forEach(function(param) {
      var value = sourceUrl.searchParams.get(param);
      if (!value) return;
      if (param === 'audio' && value !== '1') return;
      publicUrl.searchParams.set(param, value);
    });
    publicUrl.hash = sourceUrl.hash;
    return publicUrl.toString();
  }

  function getShareText() {
    var p = location.pathname;
    var base = 'https://tiago-tubarao.github.io/study-with-tiago/';
    var cleanUrl = cleanShareUrl();
    var isAH = p.includes('/exam3/');

    // Adult Health pages
    if (isAH) {
      if (p.includes('drug-flashcards')) {
        return 'A nursing student built this Adult Health flashcard deck to make Med-Surg review less scattered.\n\n'
          + '💊 160 Adult Health flashcards — 84 drugs + 76 conditions with 12-point clinical backs\n'
          + '🎙 Podcast audio for the drug cards\n'
          + '🔊 Read-aloud mode\n'
          + '🔍 Search any drug or condition instantly\n'
          + '📊 Mastery tracking\n\n'
          + '🔗 ' + base + 'exam3/drug-flashcards.html';
      }
      if (p.includes('flashcards')) {
        return 'A nursing student built these Adult Health flashcards for classmates studying Med-Surg.\n\n🩺 Hematology, diabetes, endocrine, renal, visual hooks, and mastery tracking\n\n🔗 ' + base + 'exam3/flashcards.html';
      }
      if (p.includes('diabetes')) {
        return '💉 Adult Health Diabetes review — DKA, HHS, insulins, oral agents + practice questions\n\n🔗 ' + base + 'exam3/diabetes.html';
      }
      if (p.includes('endocrine')) {
        return '🦋 Adult Health Endocrine review — thyroid, pituitary, adrenal disorders + practice questions\n\n🔗 ' + base + 'exam3/endocrine.html';
      }
      if (p.includes('hematology')) {
        return '🩸 Adult Health Hematology review — anemias, blood disorders, transfusions + practice questions\n\n🔗 ' + base + 'exam3/hematology.html';
      }
      if (p.includes('renal')) {
        return '🫘 Adult Health Renal review — AKI, CKD, dialysis, kidney stones + practice questions\n\n🔗 ' + base + 'exam3/renal.html';
      }
      return 'Check this out: a nursing student built a Med-Surg / Adult Health study hub for students behind him.\n\n🩺 Hematology, diabetes, endocrine, renal, practice questions, videos, and flashcards\n\n🔗 ' + base + 'exam3/';
    }

    // Unified flashcards page
    if (p.includes('all-flashcards')) {
      var audioMode = new URL(location.href).searchParams.get('audio') === '1';
      return 'Check this out: a nursing student built a flashcard shelf to make Pharm and Med-Surg easier to study.\n\n'
        + (audioMode
        ? '🎙 84 Adult Health drug flashcards with podcast + read-card audio\n'
        : '🃏 323 nursing flashcards in one page — Pharmacology, Adult Health Final GI, Adult Health, audio-ready drug cards, Quiz 3\n')
        + '🔍 Search any drug or condition\n'
        + '📊 Mastery tracking across all decks\n'
        + '🎙 Audio for 84 drug cards\n\n'
        + '🔗 ' + cleanUrl;
    }

    // Pharmacology pages
    if (p.includes('flashcards')) {
      return '🃏 66 pharmacology quick-review flashcards — core drugs from the blueprint.\n\n'
        + '✅ Antidotes, mnemonics, key facts\n'
        + '✅ Filter by topic, shuffle, swipe through\n'
        + '✅ Built by a nursing student, for nursing students\n\n'
        + '🔗 ' + base + 'exam2/flashcards.html';
    }
    if (p.includes('diabetes')) {
      return '💉 12 diabetes pharmacology drugs — free video + 150+ practice questions\n\n🔗 ' + base + 'exam2/diabetes.html';
    }
    if (p.includes('endocrine')) {
      return '🦋 Thyroid, pituitary & adrenal drugs — free video + practice questions with rationales\n\n🔗 ' + base + 'exam2/endocrine.html';
    }
    if (p.includes('antimicrobials')) {
      return '🦠 Antimicrobial families and safety traps — free video + practice questions\n\n🔗 ' + base + 'exam2/antimicrobials.html';
    }
    if (p.includes('hematology')) {
      return '🩸 Anticoagulants, growth factors & blood products — free video + practice questions\n\n🔗 ' + base + 'exam2/hematology.html';
    }
    if (p.includes('exam2')) {
      return 'Check this out: a nursing student built a Pharmacology study hub with videos, drug-family cards, and practice questions.\n\n📋 Pharm review without digging through scattered files\n\n🔗 ' + base + 'exam2/';
    }
    // Main page / default
    return 'Check this out: a nursing student built Study with Tiago to help himself study, then turned it into a site for the students coming behind him.\n\n'
      + '🎥 Pharm and Med-Surg videos\n'
      + '🃏 323 searchable flashcards\n'
      + '📝 Notes, practice questions, and topic review loops\n'
      + '📦 Study packs if you want the full packet\n\n'
      + '🔗 ' + base;
  }

  function removeInlineShareUrl(text) {
    return text.split('\n').filter(function(line) {
      return line.trim().indexOf('🔗 ') !== 0;
    }).join('\n').replace(/\n{3,}/g, '\n\n').trim();
  }

  btn.addEventListener('click', async function() {
    var text = getShareText();
    var isAH = location.pathname.includes('/exam3/');
    var shareUrl = cleanShareUrl();
    var shareData = {
      title: isAH ? 'Study with Tiago — Med-Surg Study Tools' : 'Study with Tiago — Nursing Study Tools',
      text: removeInlineShareUrl(text),
      url: shareUrl
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (e) {
        // User cancelled — that's fine
      }
    } else {
      // Desktop fallback: copy the full message + link
      try {
        await navigator.clipboard.writeText(text);
        toast.classList.add('show');
        setTimeout(function() { toast.classList.remove('show'); }, 2000);
      } catch (e) {
        var input = document.createElement('textarea');
        input.value = text;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        toast.classList.add('show');
        setTimeout(function() { toast.classList.remove('show'); }, 2000);
      }
    }
  });

  document.body.appendChild(btn);
})();
