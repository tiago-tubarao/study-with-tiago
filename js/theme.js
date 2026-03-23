// ══════════════════════════════════════════════
// Dark Mode Toggle — localStorage persistence
// ══════════════════════════════════════════════

(function() {
  const STORAGE_KEY = 'swt_theme';

  // Apply saved theme immediately (before paint)
  const saved = localStorage.getItem(STORAGE_KEY);
  if (saved === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else if (saved === 'light') {
    document.documentElement.removeAttribute('data-theme');
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
  }

  // Wait for nav to be injected, then add toggle button
  function addToggle() {
    const navLinks = document.querySelector('.nav-links');
    if (!navLinks) return;

    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';

    const btn = document.createElement('button');
    btn.className = 'theme-toggle';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    btn.textContent = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19';

    btn.addEventListener('click', function() {
      const current = document.documentElement.getAttribute('data-theme');
      if (current === 'dark') {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem(STORAGE_KEY, 'light');
        btn.textContent = '\uD83C\uDF19';
      } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem(STORAGE_KEY, 'dark');
        btn.textContent = '\u2600\uFE0F';
      }
    });

    navLinks.appendChild(btn);
  }

  // nav.js runs immediately too, so toggle should be ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addToggle);
  } else {
    // Small delay to ensure nav.js has injected the nav
    setTimeout(addToggle, 0);
  }
})();
