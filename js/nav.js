// ══════════════════════════════════════════════
// Shared Navigation — injected into every page
// ══════════════════════════════════════════════

(function() {
  const path = location.pathname;
  const depth = (path.match(/\//g) || []).length;

  // Figure out relative path to root
  let base = './';
  if (path.includes('/exam2/') || path.includes('/exam3/') || path.includes('/methods/')) base = '../';

  // Phase 1.3 (2026-04-29): keep the main nav focused on public study assets.
  const links = [
    { label: 'Home', href: base + 'index.html', icon: '🏠' },
    { label: 'Pharmacology', href: base + 'exam2/index.html', icon: '💊' },
    { label: 'Adult Health', href: base + 'exam3/index.html', icon: '🩺' },
    { label: 'Flashcards', href: base + 'all-flashcards.html', icon: '🃏' },
    { label: 'Resources', href: base + 'resources.html', icon: '📦' },
    { label: 'About', href: base + 'about.html', icon: '👤' },
    { label: 'YouTube', href: 'https://www.youtube.com/@life-ofstudy', icon: '▶', external: true },
  ];

  // Determine active page
  function isActive(href) {
    if (href.startsWith('http')) return false;
    const resolved = new URL(href, location.href).pathname;
    return resolved === path || (path.endsWith('/') && resolved === path + 'index.html');
  }

  const navHTML = `
    <nav class="site-nav">
      <div class="nav-inner">
        <a href="${base}index.html" class="nav-brand">
          <span class="nav-logo">Study with Tiago</span>
        </a>
        <button class="nav-toggle" aria-label="Menu" aria-expanded="false" aria-controls="navLinks" onclick="var nav=this.closest('.site-nav');nav.classList.toggle('open');this.setAttribute('aria-expanded',nav.classList.contains('open'))">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-links" id="navLinks">
          ${links.map(l => `<a href="${l.href}" class="${isActive(l.href) ? 'active' : ''}" ${l.external ? 'target="_blank" rel="noopener"' : ''}>${l.label}${l.external ? ' ↗' : ''}</a>`).join('')}
        </div>
      </div>
    </nav>
  `;

  // Insert at start of body
  document.body.insertAdjacentHTML('afterbegin', navHTML);
})();
