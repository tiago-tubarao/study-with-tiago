// ══════════════════════════════════════════════
// Quiz Mode — "Which video covers this drug?"
// ══════════════════════════════════════════════

let qItems = [], qIdx = 0, qRight = 0, qTotal = 0, qDone = false;

function _quizData() {
  return (typeof STUDY_DATA !== 'undefined' && STUDY_DATA) ||
         (typeof STUDY_DATA_AH !== 'undefined' && STUDY_DATA_AH) || null;
}

function openQuiz() {
  const data = _quizData();
  if (!data) return;
  qItems = [];
  data.videos.filter(v => !v.notRecorded && v.said && v.said.length > 0).forEach(v => {
    v.said.forEach(s => qItems.push({ name: s.name, deck: v.label, detail: s.detail, ts: s.ts }));
  });
  if (qItems.length === 0) return;
  qItems.sort(() => Math.random() - 0.5);
  qIdx = 0; qRight = 0; qTotal = 0; qDone = false;
  document.getElementById('quizModal').classList.add('show');
  showQ();
}

function closeQuiz() {
  document.getElementById('quizModal').classList.remove('show');
}

function showQ() {
  if (qIdx >= qItems.length) qIdx = 0;
  qDone = false;
  const item = qItems[qIdx];
  document.getElementById('qDrug').textContent = item.name;
  document.getElementById('qReveal').style.display = 'none';
  const data = _quizData();
  const opts = data.videos.filter(v => !v.notRecorded && v.said && v.said.length > 0).map(v => v.label);
  document.getElementById('qOpts').innerHTML = opts.map(o =>
    `<button type="button" class="quiz-opt" onclick="ansQ(this,'${o.replace(/'/g, "\\'")}','${item.deck.replace(/'/g, "\\'")}')">${o}</button>`
  ).join('');
  document.getElementById('qScore').textContent = `${qRight}/${qTotal} correct`;
}

function ansQ(el, picked, correct) {
  if (qDone) return;
  qDone = true; qTotal++;
  const isRight = picked === correct;
  if (isRight) qRight++;
  el.classList.add(isRight ? 'right' : 'wrong');
  document.querySelectorAll('#qOpts .quiz-opt').forEach(o => {
    if (o.textContent === correct) o.classList.add('right');
  });
  const item = qItems[qIdx];
  document.getElementById('qReveal').innerHTML = `
    <div class="quiz-reveal"><strong>${item.deck}</strong><br>${item.detail}${item.ts ? '<br><em>@ ' + item.ts + '</em>' : ''}</div>
    <button class="quiz-next" onclick="qIdx++;showQ()">Next →</button>
  `;
  document.getElementById('qReveal').style.display = 'block';
  document.getElementById('qScore').textContent = `${qRight}/${qTotal} correct`;
}
