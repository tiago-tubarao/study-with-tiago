// ══════════════════════════════════════════════
// Feedback Widget + Ko-fi — injected on every page
// ══════════════════════════════════════════════

(function() {
  const base = location.pathname.includes('/exam2/') ? '../' : './';

  // Ko-fi floating button with bubble — persistent, bigger, with pulse
  const kofiWrap = document.createElement('div');
  kofiWrap.className = 'kofi-wrap';
  kofiWrap.innerHTML = `
    <div class="kofi-bubble">Support this project ☕</div>
    <a href="https://ko-fi.com/tiagolifeofstudy" target="_blank" rel="noopener" class="kofi-float" title="Buy me a coffee">☕</a>
  `;
  document.body.appendChild(kofiWrap);

  // Bubble stays visible for 15 seconds, then shows on hover
  // Also re-shows every 60 seconds for 5 seconds as a gentle reminder
  const bubble = kofiWrap.querySelector('.kofi-bubble');
  setTimeout(() => { bubble.classList.add('hide'); }, 15000);
  kofiWrap.addEventListener('mouseenter', () => bubble.classList.remove('hide'));
  kofiWrap.addEventListener('mouseleave', () => { setTimeout(() => bubble.classList.add('hide'), 3000); });

  // Gentle re-show every 60s (only if not hovering)
  setInterval(() => {
    if (!kofiWrap.matches(':hover')) {
      bubble.classList.remove('hide');
      setTimeout(() => { if (!kofiWrap.matches(':hover')) bubble.classList.add('hide'); }, 5000);
    }
  }, 60000);

  // Feedback button
  const fbBtn = document.createElement('button');
  fbBtn.className = 'feedback-float';
  fbBtn.innerHTML = '💬';
  fbBtn.title = 'Send feedback';
  fbBtn.onclick = () => {
    const modal = document.getElementById('feedbackModal');
    if (modal) modal.classList.toggle('show');
  };
  document.body.appendChild(fbBtn);

  // Feedback modal
  const modal = document.createElement('div');
  modal.id = 'feedbackModal';
  modal.className = 'feedback-modal';
  modal.innerHTML = `
    <div class="feedback-box">
      <button class="feedback-close" onclick="document.getElementById('feedbackModal').classList.remove('show')">&times;</button>
      <h3 style="margin:0 0 4px;font-size:1.1em;color:#1A2A42">Quick Feedback</h3>
      <p style="font-size:0.8em;color:#868E96;margin:0 0 16px">Help me make this better for everyone.</p>
      <div id="fbStep1">
        <p style="font-size:0.88em;font-weight:600;margin-bottom:10px">Did these study tools help you?</p>
        <div style="display:flex;gap:8px;justify-content:center;margin-bottom:16px">
          <button class="fb-vote" onclick="fbVote('yes')">👍 Yes</button>
          <button class="fb-vote" onclick="fbVote('somewhat')">🤷 Somewhat</button>
          <button class="fb-vote" onclick="fbVote('no')">👎 Not really</button>
        </div>
      </div>
      <div id="fbStep2" style="display:none">
        <p style="font-size:0.88em;font-weight:600;margin-bottom:10px">What would make it better?</p>
        <textarea id="fbText" rows="3" placeholder="More questions on... / Missing topic... / Confusing part..." style="width:100%;border:2px solid #DEE2E6;border-radius:10px;padding:10px;font-size:0.88em;font-family:inherit;resize:vertical"></textarea>
        <p style="font-size:0.8em;color:#868E96;margin:6px 0">Optional — how did you find this site?</p>
        <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:12px">
          <button class="fb-source" onclick="fbSetSource(this,'Classmate')">Classmate</button>
          <button class="fb-source" onclick="fbSetSource(this,'YouTube')">YouTube</button>
          <button class="fb-source" onclick="fbSetSource(this,'Google')">Google</button>
          <button class="fb-source" onclick="fbSetSource(this,'Other')">Other</button>
        </div>
        <button class="fb-submit" onclick="fbSubmit()">Send Feedback</button>
      </div>
      <div id="fbStep3" style="display:none;text-align:center;padding:20px 0">
        <div style="font-size:2em;margin-bottom:8px">🙏</div>
        <p style="font-weight:700;color:#2B8A3E;margin:0">Thank you!</p>
        <p style="font-size:0.82em;color:#868E96;margin:6px 0 0">Your feedback helps me improve this for everyone.</p>
      </div>
    </div>
  `;
  document.body.appendChild(modal);

  // Feedback logic
  let fbData = { vote: '', source: '', text: '', page: location.pathname, timestamp: '' };

  window.fbVote = function(v) {
    fbData.vote = v;
    document.getElementById('fbStep1').style.display = 'none';
    document.getElementById('fbStep2').style.display = 'block';
  };

  window.fbSetSource = function(btn, src) {
    fbData.source = src;
    document.querySelectorAll('.fb-source').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
  };

  window.fbSubmit = function() {
    fbData.text = document.getElementById('fbText').value;
    fbData.timestamp = new Date().toISOString();
    // Save to localStorage (can be exported later)
    const existing = JSON.parse(localStorage.getItem('tiago_feedback') || '[]');
    existing.push(fbData);
    localStorage.setItem('tiago_feedback', JSON.stringify(existing));
    document.getElementById('fbStep2').style.display = 'none';
    document.getElementById('fbStep3').style.display = 'block';
    setTimeout(() => {
      document.getElementById('feedbackModal').classList.remove('show');
      // Reset for next time
      setTimeout(() => {
        document.getElementById('fbStep1').style.display = 'block';
        document.getElementById('fbStep2').style.display = 'none';
        document.getElementById('fbStep3').style.display = 'none';
        fbData = { vote: '', source: '', text: '', page: location.pathname, timestamp: '' };
        document.querySelectorAll('.fb-source').forEach(b => b.classList.remove('active'));
        document.getElementById('fbText').value = '';
      }, 300);
    }, 2000);
  };
})();
