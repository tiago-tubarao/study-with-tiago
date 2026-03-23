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
  toast.textContent = 'Link copied!';
  document.body.appendChild(toast);

  btn.addEventListener('click', async function() {
    const shareData = {
      title: document.title,
      text: document.querySelector('meta[name="description"]')?.content || 'Free pharmacology study tools for nursing students',
      url: location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
      } catch (e) {
        // User cancelled — that's fine
      }
    } else {
      // Desktop fallback: copy link to clipboard
      try {
        await navigator.clipboard.writeText(location.href);
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
      } catch (e) {
        // Fallback for older browsers
        const input = document.createElement('input');
        input.value = location.href;
        document.body.appendChild(input);
        input.select();
        document.execCommand('copy');
        document.body.removeChild(input);
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2000);
      }
    }
  });

  document.body.appendChild(btn);
})();
