(() => {
  const root = document.querySelector('[data-final-gi-sections]');
  if (!root) return;

  const toneRules = [
    { tone: 'danger', pattern: /\b(emergency|danger|dangerous|severe|bleed|bleeding|varices|perforation|peritonitis|sepsis|toxic|strangulation|report|escalation|unstable|shock)\b/i },
    { tone: 'action', pattern: /\b(nursing|assess|monitor|position|NPO|fluids|antibiotics|lactulose|pain control|escalate|intervention|care|priority)\b/i },
    { tone: 'teach', pattern: /\b(teach|teaching|diet|discharge|home|avoid|finish|small frequent meals|no alcohol|screening)\b/i },
    { tone: 'monitor', pattern: /\b(labs|diagnostics|blood pressure|tachycardia|fever|distention|stools|scope|markers|ammonia)\b/i },
    { tone: 'exam', pattern: /\b(trap|first|look-alike|vs|compare|differentiate|question|stem)\b/i },
    { tone: 'success', pattern: /\b(relief|improve|improvement|working|controlled|cleared|reduced|stable)\b/i },
  ];

  const semanticRules = [
    { className: 'review-danger', pattern: /\b(emergency|danger|dangerous|severe|bleed|bleeding|varices|perforation|peritonitis|sepsis|toxic|strangulation|unstable|shock)\b/gi },
    { className: 'review-action', pattern: /\b(nursing|assess|monitor|position|NPO|fluids|antibiotics|lactulose|pain control|escalate|intervention|priority)\b/gi },
    { className: 'review-teach', pattern: /\b(teach|teaching|diet|discharge|home|avoid|finish|small frequent meals|no alcohol|screening)\b/gi },
    { className: 'review-monitor', pattern: /\b(labs|diagnostics|blood pressure|tachycardia|fever|distention|stools|scope|markers|ammonia)\b/gi },
    { className: 'review-exam', pattern: /\b(trap|first|look-alike|vs|compare|differentiate|question|stem)\b/gi },
    { className: 'review-success', pattern: /\b(relief|improve|improvement|working|controlled|cleared|reduced|stable)\b/gi },
  ];

  const toneLabels = {
    danger: 'red danger',
    action: 'green action',
    teach: 'orange teach',
    monitor: 'purple monitor',
    exam: 'purple exam trap',
    success: 'green success',
    concept: 'blue clinical lock',
  };

  const getTone = (card) => {
    const haystack = [
      card.drugClass,
      card.purpose,
      card.brandName,
      ...(card.facts || []),
      card.mnemonic,
    ].join(' ');
    return toneRules.find((rule) => rule.pattern.test(haystack))?.tone || 'concept';
  };

  const appendSemanticText = (parent, text) => {
    const source = String(text || '');
    if (!source) return;

    const matches = [];
    semanticRules.forEach((rule) => {
      rule.pattern.lastIndex = 0;
      for (const match of source.matchAll(rule.pattern)) {
        matches.push({
          start: match.index,
          end: match.index + match[0].length,
          text: match[0],
          className: rule.className,
        });
      }
    });

    matches.sort((a, b) => a.start - b.start || b.end - a.end);
    const clean = [];
    let lastEnd = -1;
    matches.forEach((match) => {
      if (match.start >= lastEnd) {
        clean.push(match);
        lastEnd = match.end;
      }
    });

    let cursor = 0;
    clean.forEach((match) => {
      if (match.start > cursor) {
        parent.append(document.createTextNode(source.slice(cursor, match.start)));
      }
      const emphasis = document.createElement('span');
      emphasis.className = `review-emphasis ${match.className}`;
      emphasis.textContent = match.text;
      parent.append(emphasis);
      cursor = match.end;
    });

    if (cursor < source.length) {
      parent.append(document.createTextNode(source.slice(cursor)));
    }
  };

  const data = window.FLASHCARD_DATA_FINAL_GI;
  const requested = root.dataset.finalGiSections
    .split(',')
    .map((section) => section.trim())
    .filter(Boolean);

  if (!data || !Array.isArray(data.cards) || requested.length === 0) {
    root.textContent = 'No cards found for this study room yet.';
    return;
  }

  const sectionMeta = new Map((data.sections || []).map((section) => [section.id, section]));
  const cards = data.cards.filter((card) => requested.includes(card.section));

  root.replaceChildren();

  const header = document.createElement('div');
  header.className = 'inline-flashcard-header';

  const count = document.createElement('p');
  count.className = 'final-card-count';
  count.textContent = cards.length
    ? `${cards.length} cards loaded for this video room. Tap a card to reveal the answer.`
    : 'No cards found for this study room yet.';
  header.append(count);
  root.append(header);

  if (!cards.length) return;

  const grid = document.createElement('div');
  grid.className = 'inline-flashcard-grid';

  cards.forEach((card, index) => {
    const meta = sectionMeta.get(card.section) || {};
    const tone = getTone(card);
    const details = document.createElement('details');
    details.className = `inline-flashcard tone-${tone} section-${card.section}`;

    const summary = document.createElement('summary');
    summary.className = 'inline-flashcard-front';

    const badge = document.createElement('span');
    badge.className = 'inline-flashcard-badge';
    badge.textContent = `${meta.icon || ''} ${meta.label || card.section}`.trim();

    const title = document.createElement('strong');
    title.textContent = `${index + 1}. ${card.drugName}`;

    const toneBadge = document.createElement('span');
    toneBadge.className = `inline-flashcard-tone tone-${tone}`;
    toneBadge.textContent = toneLabels[tone];

    const visualHook = document.createElement('div');
    visualHook.className = 'inline-flashcard-visual-hook';

    const icon = document.createElement('span');
    icon.className = 'inline-flashcard-icon';
    icon.setAttribute('aria-hidden', 'true');
    icon.textContent = card.icon || meta.icon || '✨';

    const hook = document.createElement('span');
    hook.className = 'inline-flashcard-hook';
    hook.textContent = card.quickHook || card.mnemonic || card.brandName || 'Tap for the study lock.';
    visualHook.append(icon, hook);

    const prompt = document.createElement('span');
    prompt.className = 'inline-flashcard-prompt';
    prompt.textContent = card.brandName || card.purpose || 'Tap to reveal the study lock.';

    summary.append(badge, title, toneBadge, visualHook, prompt);
    details.append(summary);

    const back = document.createElement('div');
    back.className = 'inline-flashcard-back';

    const purpose = document.createElement('p');
    purpose.className = 'inline-flashcard-purpose';
    appendSemanticText(purpose, card.purpose || '');
    back.append(purpose);

    const facts = document.createElement('ul');
    (card.facts || []).forEach((fact) => {
      const item = document.createElement('li');
      appendSemanticText(item, fact);
      facts.append(item);
    });
    back.append(facts);

    if (card.mnemonic) {
      const lock = document.createElement('p');
      lock.className = 'inline-flashcard-lock';
      appendSemanticText(lock, card.mnemonic);
      back.append(lock);
    }

    details.append(back);
    grid.append(details);
  });

  root.append(grid);
})();
