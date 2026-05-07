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
        return '💊 160 Adult Health flashcards — 84 drugs + 76 conditions with 12-point clinical backs\n\n'
          + '🎙 Podcast audio for the drug cards\n'
          + '🔊 Read-aloud mode\n'
          + '🔍 Search any drug or condition instantly\n'
          + '📊 Mastery tracking\n\n'
          + '🔗 ' + base + 'exam3/drug-flashcards.html';
      }
      if (p.includes('flashcards')) {
        return '🩺 Adult Health flashcards — hematology, diabetes, endocrine, renal, with visual hooks and mastery tracking\n\n🔗 ' + base + 'exam3/flashcards.html';
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
      return '🩺 Adult Health study hub — hematology, diabetes, endocrine, renal, 592 practice questions, videos, and flashcards\n\n🔗 ' + base + 'exam3/';
    }

    // Unified flashcards page
    if (p.includes('all-flashcards')) {
      var audioMode = new URL(location.href).searchParams.get('audio') === '1';
      return (audioMode
        ? '🎙 84 Adult Health drug flashcards with podcast + read-card audio\n\n'
        : '🃏 323 Nursing Flashcards in ONE page — Pharmacology, Adult Health Final GI, Adult Health, 84 audio-ready drug cards, Quiz 3\n\n')
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
      return '🦠 Every antibiotic on the blueprint — free video + 180+ NCLEX-style questions\n\n🔗 ' + base + 'exam2/antimicrobials.html';
    }
    if (p.includes('hematology')) {
      return '🩸 Anticoagulants, growth factors & blood products — free video + practice questions\n\n🔗 ' + base + 'exam2/hematology.html';
    }
    if (p.includes('exam2')) {
      return '📋 Pharmacology study hub — 600+ questions, 5 video links, confidence tracking\n\n🔗 ' + base + 'exam2/';
    }
    // Main page / default
    return '📚 Study with Tiago: nursing study tools made by a BSN student\n\n'
      + '🎥 Videos for Pharmacology and Adult Health\n'
      + '🃏 323 flashcards for quick review\n'
      + '📝 My Notes, practice questions, and study loops\n'
      + '📦 Optional study bundles when you want the full packet\n\n'
      + '🔗 ' + base;
  }

  btn.addEventListener('click', async function() {
    var text = getShareText();
    var isAH = location.pathname.includes('/exam3/');
    var shareData = {
      title: isAH ? 'Study with Tiago — Adult Health Study Tools' : 'Study with Tiago — Nursing Study Tools',
      text: text,
      url: cleanShareUrl()
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
