// ══════════════════════════════════════════════
// Tracker: localStorage, score rings, checkboxes, confidence dots
// ══════════════════════════════════════════════

const LS = {
  get(k) { return localStorage.getItem('swt_' + k); },
  set(k, v) { localStorage.setItem('swt_' + k, v); },
  clear() {
    Object.keys(localStorage).filter(k => k.startsWith('swt_')).forEach(k => localStorage.removeItem(k));
  }
};

// ── Score Ring SVG ──
function ring(val, total, color, label) {
  const pct = total > 0 ? val / total : 0;
  const r = 28, circ = 2 * Math.PI * r;
  const offset = circ * (1 - pct);
  return `<div class="score-item">
    <div class="score-ring">
      <svg width="70" height="70"><circle cx="35" cy="35" r="${r}" fill="none" stroke="#e9ecef" stroke-width="5"/>
      <circle cx="35" cy="35" r="${r}" fill="none" stroke="${color}" stroke-width="5" stroke-dasharray="${circ}" stroke-dashoffset="${offset}" stroke-linecap="round"/></svg>
      <span class="num" style="color:${color}">${val}</span>
    </div>
    <div class="score-label">${label}</div>
  </div>`;
}

// ── Calculate scores for one or all decks ──
function calcScores(deckId) {
  const videos = deckId
    ? STUDY_DATA.videos.filter(v => v.id === deckId)
    : STUDY_DATA.videos;

  let totalBP = 0, covered = 0, weak = 0, missing = 0, reviewed = 0;

  videos.forEach(v => {
    if (v.notRecorded) {
      (v.slidesHave || []).forEach(() => { totalBP++; weak++; });
    } else {
      v.said.forEach((s, i) => {
        totalBP++;
        if (s.weak) weak++; else covered++;
        if (LS.get(v.id + '_s_' + i) === '1') reviewed++;
      });
    }
    v.gaps.forEach(() => { totalBP++; missing++; });
  });

  return { totalBP, covered, weak, missing, reviewed };
}

// ── Render score bar into container ──
function renderScores(containerId, deckId) {
  const s = calcScores(deckId);
  const el = document.getElementById(containerId);
  if (!el) return;
  el.innerHTML = `
    ${ring(s.covered, s.totalBP, 'var(--green)', 'Covered')}
    ${ring(s.weak, s.totalBP, 'var(--orange)', 'Weak')}
    ${ring(s.missing, s.totalBP, 'var(--red)', 'Missing')}
    ${ring(s.reviewed, s.totalBP, 'var(--teal)', 'Reviewed')}
  `;
}

// ── Toggle checkbox ──
function toggle(id, checked) {
  LS.set(id, checked ? '1' : '0');
  const card = document.getElementById('card_' + id);
  if (card) card.classList.toggle('checked-off', checked);
  // Re-render scores if score bar exists
  const scoreBar = document.getElementById('scoreBar');
  if (scoreBar) renderScores('scoreBar', window._currentDeckId);
}

// ── Set confidence dot ──
function setConf(id, level) {
  const cur = LS.get(id + '_c');

  // If clicking the SAME dot again → close panel, un-toggle
  if (cur === level) {
    LS.set(id + '_c', '');
    const row = document.querySelector(`[data-conf-id="${id}"]`);
    if (row) row.querySelectorAll('.conf-dot').forEach(d => d.className = 'conf-dot');
    const panel = document.getElementById('expand_' + id);
    if (panel) { panel.classList.remove('open'); setTimeout(() => panel.remove(), 300); }
    return;
  }

  // Switching to a DIFFERENT dot → reset that drug's questions, update dot
  LS.set(id + '_c', level);
  const row = document.querySelector(`[data-conf-id="${id}"]`);
  if (row) {
    row.querySelectorAll('.conf-dot').forEach(dot => {
      const dotLevel = dot.getAttribute('data-level');
      dot.className = 'conf-dot' + (dotLevel === level ? ' sel sel-' + dotLevel : '');
    });
  }

  // If panel already exists → remove it and subtract its score, then reopen fresh
  const existingPanel = document.getElementById('expand_' + id);
  if (existingPanel) {
    existingPanel.remove();
    if (_expandScores[id]) {
      _masterScore.right -= _expandScores[id].right;
      _masterScore.total -= _expandScores[id].total;
      if (_expandScores[id].total >= 3) _masterScore.drugsComplete--;
      delete _expandScores[id];
      updateMasterScore();
    }
  }

  // Open fresh panel
  toggleExpandPanel(id, level);
}

// ── Expandable Detail + Question Panel ──
function toggleExpandPanel(id, level) {
  // Close any other open panels (auto-close when switching drugs)
  document.querySelectorAll('.expand-panel.open').forEach(p => {
    if (p.id !== 'expand_' + id) {
      p.classList.remove('open');
      setTimeout(() => p.remove(), 300);
    }
  });

  if (!level) return;

  // Find the drug name from the card
  const row = document.querySelector(`[data-conf-id="${id}"]`);
  if (!row) return;
  const drugName = row.getAttribute('data-drug-name');
  if (!drugName) return;

  // Look up deep content
  const deep = window.DRUG_DEEP && window.DRUG_DEEP[drugName];

  // Create panel
  const panel = document.createElement('div');
  panel.id = 'expand_' + id;
  panel.className = 'expand-panel';

  if (!deep) {
    panel.innerHTML = `<div class="expand-inner">
      <button class="expand-close" onclick="closeExpandPanel('${id}')" title="Close">&times;</button>
      <div class="expand-confidence">
        <span class="conf-label conf-label-${level}">
          ${level === 'g' ? '🟢 You marked this as confident' : level === 'y' ? '🟡 You marked this as needs review' : '🔴 You marked this as not confident'}
        </span>
        <p class="expand-hint">Detailed questions coming soon for this drug.</p>
      </div>
    </div>`;
  } else {
    panel.innerHTML = `<div class="expand-inner">
      <button class="expand-close" onclick="closeExpandPanel('${id}')" title="Close">&times;</button>
      <div class="expand-confidence">
        <span class="conf-label conf-label-${level}">
          ${level === 'g' ? '🟢 Think you know this? Prove it.' : level === 'y' ? '🟡 Let\'s see where you stand — try these questions.' : '🔴 No worries — try the questions, learn from the answers.'}
        </span>
      </div>

      ${(deep.questions && deep.questions[level]) ? `
        <div class="expand-questions">
          <h4 class="expand-heading">${level === 'g' ? '🟢 Advanced — Trap Questions' : level === 'y' ? '🟡 Intermediate — Application Questions' : '🔴 Foundation — Core Concept Questions'}</h4>
          <p class="expand-hint">Answer first. Explanations appear after each answer.${level !== 'g' ? ' Switch to 🟢 for harder questions.' : ''}</p>
          ${deep.questions[level].map((q, qi) => {
            const qId = id + '_q' + qi;
            return `<div class="scenario-q" id="sq_${qId}">
              <p class="sq-stem"><strong>Q${qi+1}.</strong> ${q.stem}</p>
              <div class="sq-options">
                ${q.options.map((opt, oi) => `
                  <button class="sq-opt" data-qid="${qId}" data-oi="${oi}" data-correct="${q.correct}" onclick="answerScenario(this, ${oi}, ${q.correct}, '${qId}')">
                    <span class="sq-letter">${String.fromCharCode(65+oi)}.</span> ${opt}
                  </button>
                `).join('')}
              </div>
              ${q.hint ? `<button class="hint-btn" onclick="showHint(this, '${qId}')">💡 Need a hint?</button><div class="hint-text" id="hint_${qId}" style="display:none">${q.hint}</div>` : ''}
              <div class="sq-rationale" id="rat_${qId}" style="display:none"></div>
            </div>`;
          }).join('')}
          <div class="expand-score" id="expandScore_${id}"></div>
        </div>
      ` : ''}

      <div class="expand-details" id="deepDive_${id}" style="display:none">
        <h4 class="expand-heading">📖 Clinical Deep Dive — Now That You've Tested Yourself</h4>
        <ul class="expand-list">
          ${deep.details.map(d => `<li>${d}</li>`).join('')}
        </ul>
      </div>
    </div>`;
  }

  // Insert after the row
  row.insertAdjacentElement('afterend', panel);
  requestAnimationFrame(() => {
    panel.style.display = 'block';
    requestAnimationFrame(() => panel.classList.add('open'));
  });
}

// ── Master Score Tracker (across all drugs) ──
let _masterScore = { right: 0, total: 0, drugs: 0, drugsComplete: 0 };

// ── Grade Scale ──
function getGrade(pct) {
  if (pct === 100) return { letter: 'A+', color: 'var(--green)', bg: '#d3f9d8' };
  if (pct >= 95) return { letter: 'A', color: 'var(--green)', bg: '#d3f9d8' };
  if (pct >= 93) return { letter: 'A-', color: 'var(--green)', bg: '#d3f9d8' };
  if (pct >= 91) return { letter: 'B+', color: '#946200', bg: '#fff3bf' };
  if (pct >= 85) return { letter: 'B', color: '#946200', bg: '#fff3bf' };
  if (pct >= 83) return { letter: 'B-', color: '#946200', bg: '#fff3bf' };
  if (pct >= 80) return { letter: 'C+', color: 'var(--orange)', bg: '#ffe8cc' };
  if (pct >= 77) return { letter: 'C', color: 'var(--orange)', bg: '#ffe8cc' };
  if (pct >= 75) return { letter: 'C-', color: 'var(--orange)', bg: '#ffe8cc' };
  if (pct >= 70) return { letter: 'D', color: 'var(--red)', bg: '#ffe0e0' };
  return { letter: 'F', color: 'var(--red)', bg: '#ffe0e0' };
}

function updateMasterScore() {
  const el = document.getElementById('masterScoreBar');
  if (!el) return;
  const s = _masterScore;
  const pct = s.total > 0 ? Math.round((s.right / s.total) * 100) : 0;
  const grade = getGrade(pct);
  const totalDrugs = window.DRUG_DEEP ? Object.keys(window.DRUG_DEEP).length : 0;

  // Find weak drugs (scored < 3/3)
  let weakDrugs = [];
  Object.keys(_expandScores).forEach(id => {
    const ds = _expandScores[id];
    if (ds.total >= 3 && ds.right < 3) {
      const row = document.querySelector(`[data-conf-id="${id}"]`);
      const name = row ? row.getAttribute('data-drug-name') : id;
      weakDrugs.push(`${name} (${ds.right}/3)`);
    }
  });

  el.innerHTML = `
    <div class="master-score-inner">
      <div class="master-stat">
        <span class="master-num">${s.right}/${s.total}</span>
        <span class="master-label">Questions Correct</span>
      </div>
      <div class="master-grade-wrap">
        <div class="master-grade" style="color:${grade.color};background:${grade.bg}">${grade.letter}</div>
      </div>
      <div class="master-progress-wrap">
        <div class="master-progress-bar">
          <div class="master-progress-fill" style="width:${pct}%;background:${grade.color}"></div>
        </div>
        <span class="master-pct">${pct}%</span>
      </div>
      <div class="master-stat">
        <span class="master-num">${s.drugsComplete}/${totalDrugs}</span>
        <span class="master-label">Drugs Tested</span>
      </div>
    </div>
    ${weakDrugs.length > 0 ? `<div class="master-weak">Review: ${weakDrugs.join(' • ')}</div>` : ''}
  `;
  el.style.display = s.total > 0 ? 'block' : 'none';
}

// ── Close an expand panel ──
function closeExpandPanel(id) {
  const panel = document.getElementById('expand_' + id);
  if (panel) {
    panel.classList.remove('open');
    setTimeout(() => { panel.remove(); }, 300);
  }
  // Un-toggle the confidence dot
  LS.set(id + '_c', '');
  const row = document.querySelector(`[data-conf-id="${id}"]`);
  if (row) {
    row.querySelectorAll('.conf-dot').forEach(d => d.className = 'conf-dot');
  }
}

// ── Retry questions for one drug ──
function retryDrug(id) {
  // Remove the panel
  const panel = document.getElementById('expand_' + id);
  if (panel) panel.remove();
  // Subtract this drug's score from master
  if (_expandScores[id]) {
    _masterScore.right -= _expandScores[id].right;
    _masterScore.total -= _expandScores[id].total;
    _masterScore.drugsComplete--;
    delete _expandScores[id];
    updateMasterScore();
  }
  // Re-open with fresh questions
  const level = LS.get(id + '_c') || 'g';
  toggleExpandPanel(id, level);
}

// ── Show hint for a question ──
function showHint(btn, qId) {
  const hint = document.getElementById('hint_' + qId);
  if (hint) {
    hint.style.display = 'block';
    btn.style.display = 'none'; // hide the button after clicking
  }
}

// ── Answer a scenario question ──
let _expandScores = {};

function answerScenario(btn, picked, correct, qId) {
  const container = document.getElementById('sq_' + qId);
  if (!container || container.classList.contains('answered')) return;
  container.classList.add('answered');

  const isRight = picked === correct;

  // Find the question data
  const drugRow = btn.closest('.expand-panel');
  const confId = drugRow ? drugRow.id.replace('expand_', '') : '';
  const row = document.querySelector(`[data-conf-id="${confId}"]`);
  const drugName = row ? row.getAttribute('data-drug-name') : '';
  const deep = window.DRUG_DEEP && window.DRUG_DEEP[drugName];
  const qIndex = parseInt(qId.split('_q').pop());
  const confLevel = LS.get(confId + '_c') || 'g';
  const qData = deep && deep.questions && deep.questions[confLevel] ? deep.questions[confLevel][qIndex] : null;

  // Mark all options
  container.querySelectorAll('.sq-opt').forEach((opt, i) => {
    opt.disabled = true;
    if (i === correct) opt.classList.add('sq-correct');
    if (i === picked && picked !== correct) opt.classList.add('sq-wrong');
  });

  // Build rationale HTML
  const ratEl = document.getElementById('rat_' + qId);
  if (qData) {
    if (isRight) {
      ratEl.innerHTML = `
        <div class="sq-rationale sq-rationale-right">
          <p class="rat-verdict">✅ <strong>Correct!</strong> Here's why:</p>
          <p>${qData.rationale}</p>
        </div>`;
    } else {
      ratEl.innerHTML = `
        <div class="sq-rationale sq-rationale-wrong">
          <p class="rat-verdict">❌ <strong>Not quite.</strong> The correct answer is <strong>${String.fromCharCode(65 + correct)}</strong>. Here's why you got tricked:</p>
          <p>${qData.rationale}</p>
        </div>`;
    }
  }
  ratEl.style.display = 'block';

  // Track score for this expand panel
  if (!_expandScores[confId]) _expandScores[confId] = { right: 0, total: 0 };
  _expandScores[confId].total++;
  if (isRight) _expandScores[confId].right++;

  // Update master score
  _masterScore.total++;
  if (isRight) _masterScore.right++;

  const scoreEl = document.getElementById('expandScore_' + confId);
  if (scoreEl) {
    const s = _expandScores[confId];
    scoreEl.innerHTML = `<div class="expand-score-bar">${s.right}/${s.total} correct</div>`;

    // After all 3 questions answered → reveal the deep dive + retry button
    if (s.total >= 3) {
      _masterScore.drugsComplete++;

      const deepDive = document.getElementById('deepDive_' + confId);
      if (deepDive) {
        deepDive.style.display = 'block';
        deepDive.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
      }
      // Update score message with retry button
      const retryBtn = `<button class="retry-btn" onclick="retryDrug('${confId}')">🔄 Try Again</button>`;
      if (s.right === 3) {
        scoreEl.innerHTML = `<div class="expand-score-bar score-perfect">🎯 ${s.right}/3 — You know this drug! Keep that 🟢 ${retryBtn}</div>`;
      } else if (s.right >= 2) {
        scoreEl.innerHTML = `<div class="expand-score-bar score-good">💪 ${s.right}/3 — Almost there. Review the deep dive below. ${retryBtn}</div>`;
      } else {
        scoreEl.innerHTML = `<div class="expand-score-bar score-review">📖 ${s.right}/3 — Time to review. Read the deep dive below carefully. ${retryBtn}</div>`;
      }
    }

    // Update master score
    updateMasterScore();
  }
}

// ── Render a topic card (said/covered item) ──
function renderSaidCard(v, s, i) {
  const id = v.id + '_s_' + i;
  const checked = LS.get(id) === '1';
  const conf = LS.get(id + '_c') || '';
  const cls = s.weak || s.isWeak ? 'weak' : 'covered';
  const badge = s.weak || s.isWeak ? '<span class="topic-badge badge-w">WEAK</span>' : '';

  return `<div class="topic-card ${cls} ${checked ? 'checked-off' : ''}" id="card_${id}">
    ${badge}
    <label style="display:flex;gap:8px;align-items:flex-start;cursor:pointer">
      <input type="checkbox" ${checked ? 'checked' : ''} onchange="toggle('${id}',this.checked)" style="width:18px;height:18px;margin-top:2px;accent-color:var(--green)">
      <div>
        <div class="topic-name">${s.name}</div>
        <div class="topic-detail">${s.detail}</div>
        ${!v.notRecorded && s.ts && v.youtubeId ? `<div class="topic-timestamp" onclick="event.stopPropagation();jumpTo('${v.youtubeId}','${s.ts}')">@ ${s.ts} — tap to watch</div>` : ''}
        <div class="conf-dots">
          <div class="conf-dot ${conf==='g'?'sel sel-g':''}" onclick="event.stopPropagation();setConf('${id}','g')">&#x1F7E2;</div>
          <div class="conf-dot ${conf==='y'?'sel sel-y':''}" onclick="event.stopPropagation();setConf('${id}','y')">&#x1F7E1;</div>
          <div class="conf-dot ${conf==='r'?'sel sel-r':''}" onclick="event.stopPropagation();setConf('${id}','r')">&#x1F534;</div>
        </div>
      </div>
    </label>
  </div>`;
}

// ── Render gap card ──
function renderGapCard(g) {
  return `<div class="topic-card missing">
    <span class="topic-badge badge-m">MISSING</span>
    <div class="topic-name">${g.name}</div>
    <div class="topic-detail">${g.detail}</div>
  </div>`;
}

// ── Render off-blueprint card ──
function renderOffbpCard(o) {
  return `<div class="topic-card offbp">
    <span class="topic-badge badge-o">NOT TESTED</span>
    <div class="topic-name">${o.name}</div>
    <div class="topic-detail">${o.detail}</div>
  </div>`;
}
