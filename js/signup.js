// ══════════════════════════════════════════════
// Email Signup — collects emails via Google Forms
// Shows once, then remembers via localStorage
// ══════════════════════════════════════════════

(function() {
  // Skip if already subscribed
  if (localStorage.getItem('tiago_subscribed')) return;

  // Google Form backend (studywithtiago@gmail.com)
  const GOOGLE_FORM_ACTION = 'https://docs.google.com/forms/d/e/1FAIpQLSdNKzXnH7ZK5zgPD-HPtg3bOOKa77iyPBpFYLMOzUYvetn7EQ/formResponse';
  const GOOGLE_FORM_ENTRY  = 'entry.398576954';
  const signupBase = (location.pathname.includes('/exam2/') || location.pathname.includes('/exam3/') || location.pathname.includes('/methods/') || location.pathname.includes('/blog/')) ? '../' : './';

  // Build the banner (sits between hero and cards on index, or top of exam pages)
  const banner = document.createElement('div');
  banner.className = 'signup-banner';
  banner.innerHTML = `
    <div class="signup-inner">
      <div class="signup-text">
        <div class="signup-badge">FREE — ONE QUESTION A WEEK</div>
        <h3 class="signup-title">Get one NCLEX-style practice question every week — with the answer broken down.</h3>
        <p class="signup-sub">Written from what I'm studying, then explained in plain language. No copied test banks, no course screenshots, no fluff. Start with the free <a href="${signupBase}drug-card-checklist.html" style="color:var(--gold);font-weight:700">drug-card checklist</a>.</p>
      </div>
      <form class="signup-form" id="signupForm">
        <div class="signup-input-wrap">
          <input type="email" id="signupEmail" class="signup-input" placeholder="your@email.com" required autocomplete="email">
          <button type="submit" class="signup-btn">Subscribe</button>
        </div>
        <p class="signup-note">Unsubscribe anytime. I only email when there's something real. <a href="${signupBase}privacy.html" style="color:rgba(255,255,255,0.75)">Privacy</a></p>
      </form>
      <div class="signup-success" id="signupSuccess" style="display:none">
        <div style="font-size:1.5em;margin-bottom:6px">You're in.</div>
        <p style="font-size:0.88em;opacity:0.8;margin:0">I'll email you when new study materials are ready. Now go study.</p>
      </div>
      <button class="signup-dismiss" id="signupDismiss" title="Maybe later">&times;</button>
    </div>
  `;

  // Insert: after hero on index page, or at top of page-container on other pages
  const hero = document.querySelector('.hero');
  const pageContainer = document.querySelector('.page-container');
  if (hero && hero.nextElementSibling) {
    hero.parentNode.insertBefore(banner, hero.nextElementSibling);
  } else if (pageContainer) {
    pageContainer.insertBefore(banner, pageContainer.firstChild);
  } else {
    document.body.insertBefore(banner, document.body.firstChild);
  }

  // Handle form submit
  document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const email = document.getElementById('signupEmail').value.trim();
    if (!email) return;

    // Send to Google Forms (hidden iframe to avoid redirect)
    if (GOOGLE_FORM_ACTION && GOOGLE_FORM_ENTRY) {
      const iframe = document.createElement('iframe');
      iframe.name = 'signup_hidden';
      iframe.style.display = 'none';
      document.body.appendChild(iframe);

      const form = document.createElement('form');
      form.method = 'POST';
      form.action = GOOGLE_FORM_ACTION;
      form.target = 'signup_hidden';

      const input = document.createElement('input');
      input.type = 'hidden';
      input.name = GOOGLE_FORM_ENTRY;
      input.value = email;
      form.appendChild(input);

      document.body.appendChild(form);
      form.submit();

      // Cleanup
      setTimeout(() => {
        form.remove();
        iframe.remove();
      }, 3000);
    }

    // Also save locally as backup
    const subs = JSON.parse(localStorage.getItem('tiago_emails') || '[]');
    subs.push({ email, date: new Date().toISOString(), page: location.pathname });
    localStorage.setItem('tiago_emails', JSON.stringify(subs));

    // Mark as subscribed — won't see the form again
    localStorage.setItem('tiago_subscribed', 'true');

    // Show success
    document.getElementById('signupForm').style.display = 'none';
    document.getElementById('signupSuccess').style.display = 'block';
    document.getElementById('signupDismiss').style.display = 'none';

    // Auto-hide banner after 3 seconds
    setTimeout(() => {
      banner.style.transition = 'all 0.4s ease';
      banner.style.opacity = '0';
      banner.style.maxHeight = '0';
      banner.style.padding = '0';
      banner.style.margin = '0';
      banner.style.overflow = 'hidden';
    }, 3000);
  });

  // Dismiss button — hides for this session only (not permanent)
  document.getElementById('signupDismiss').addEventListener('click', function() {
    banner.style.transition = 'all 0.3s ease';
    banner.style.opacity = '0';
    banner.style.maxHeight = '0';
    banner.style.padding = '0';
    banner.style.margin = '0';
    banner.style.overflow = 'hidden';
    // Only hide for this session — they'll see it again next visit
    sessionStorage.setItem('tiago_signup_dismissed', 'true');
  });

  // If dismissed this session, hide immediately
  if (sessionStorage.getItem('tiago_signup_dismissed')) {
    banner.style.display = 'none';
  }
})();
