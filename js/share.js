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
    return '📚 Pharm exam coming up? This nursing student built a FREE study site with videos, flashcards, 486+ practice questions & a study bundle\n\n'
      + '🃏 Exam Day Flashcards\n'
      + '📝 NCLEX-style questions with rationales\n'
      + '🎥 4 full video lectures\n'
      + '📦 Free PDF study bundle\n\n'
      + '🔗 ' + base;
  }

  btn.addEventListener('click', async function() {
    var text = getShareText();
    var shareData = {
      title: 'Study with Tiago — Free Pharm Exam Prep',
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
