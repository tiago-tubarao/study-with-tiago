// ══════════════════════════════════════════════
// Shared Navigation — injected into every page
// ══════════════════════════════════════════════

(function() {
  const path = location.pathname;
  const depth = (path.match(/\//g) || []).length;

  // Figure out relative path to root
  let base = './';
  if (path.includes('/exam2/') || path.includes('/exam3/')) base = '../';

  const links = [
    { label: 'Home', href: base + 'index.html', icon: '🏠' },
    { label: 'Pharmacology', href: base + 'exam2/index.html', icon: '💊' },
    { label: 'Adult Health', href: base + 'exam3/index.html', icon: '🩺' },
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
        <button class="nav-toggle" onclick="this.closest('.site-nav').classList.toggle('open')" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
        <div class="nav-links">
          ${links.map(l => `<a href="${l.href}" class="${isActive(l.href) ? 'active' : ''}" ${l.external ? 'target="_blank" rel="noopener"' : ''}>${l.label}${l.external ? ' ↗' : ''}</a>`).join('')}
        </div>
      </div>
    </nav>
  `;

  // Insert at start of body
  document.body.insertAdjacentHTML('afterbegin', navHTML);
})();
