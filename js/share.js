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

  const toast = document.createElement('div');
  toast.className = 'share-toast';
  toast.textContent = 'Share message copied!';
  document.body.appendChild(toast);

  // Build a share message based on which page we're on
  function getShareText() {
    var p = location.pathname;
    var base = 'https://tiago-tubarao.github.io/study-with-tiago/';
    var isAH = p.includes('/exam3/');

    // Adult Health Exam 3 pages
    if (isAH) {
      if (p.includes('drug-flashcards')) {
        return '💊 84 Drug Flashcards with Audio — AI-generated card images + 8-category clinical framework\n\n'
          + '🎙 Podcast audio for every drug\n'
          + '🔊 Read-aloud mode\n'
          + '🔍 Search any drug instantly\n'
          + '📊 Mastery tracking\n\n'
          + '🔗 ' + base + 'exam3/drug-flashcards.html';
      }
      if (p.includes('flashcards')) {
        return '🩺 FREE Adult Health flashcards — hematology, diabetes, endocrine, renal\n\n🔗 ' + base + 'exam3/flashcards.html';
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
      return '🩺 FREE Adult Health Exam 3 study hub — hematology, diabetes, endocrine, renal + practice questions\n\n🔗 ' + base + 'exam3/';
    }

    // Unified flashcards page
    if (p.includes('all-flashcards')) {
      return '🃏 290 Nursing Flashcards in ONE page — Pharmacology, Adult Health, 84 Drug Cards with Audio, Quiz 3\n\n'
        + '🔍 Search any drug or condition\n'
        + '📊 Mastery tracking across all decks\n'
        + '🎙 Audio for 84 drug cards\n\n'
        + '🔗 ' + base + 'all-flashcards.html';
    }

    // Pharmacology Exam 2 pages
    if (p.includes('flashcards')) {
      return '🃏 Exam day? Here are 66 FREE flip flashcards — every drug on the blueprint.\n\n'
        + '✅ Antidotes, mnemonics, key facts\n'
        + '✅ Filter by topic, shuffle, swipe through\n'
        + '✅ Built by a nursing student, for nursing students\n\n'
        + '🔗 ' + base + 'exam2/flashcards.html';
    }
    if (p.includes('diabetes')) {
      return '💉 12 diabetes drugs you NEED to know for your pharm exam — free video + 150+ practice questions\n\n🔗 ' + base + 'exam2/diabetes.html';
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
      return '📋 FREE Pharmacology Exam 2 study hub — 486+ questions, 4 video lectures, confidence tracking\n\n🔗 ' + base + 'exam2/';
    }
    // Main page / default
    return '📚 Nursing exam coming up? This student built a FREE study site with videos, flashcards, 650+ practice questions & study bundles\n\n'
      + '🃏 Exam Day Flashcards\n'
      + '📝 NCLEX-style questions with rationales\n'
      + '🎥 9 full video lectures\n'
      + '📦 Free PDF study bundles\n\n'
      + '🔗 ' + base;
  }

  btn.addEventListener('click', async function() {
    var text = getShareText();
    var isAH = location.pathname.includes('/exam3/');
    var shareData = {
      title: isAH ? 'Study with Tiago — Free Adult Health Exam Prep' : 'Study with Tiago — Free Nursing Exam Prep',
      text: text,
      url: location.href
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
