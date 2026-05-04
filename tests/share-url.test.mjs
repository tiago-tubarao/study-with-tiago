import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';

const shareJs = readFileSync(new URL('../js/share.js', import.meta.url), 'utf8');

function createElement(tag) {
  return {
    tagName: tag,
    className: '',
    innerHTML: '',
    textContent: '',
    title: '',
    value: '',
    listeners: {},
    classList: {
      add() {},
      remove() {},
    },
    setAttribute(name, value) {
      this[name] = value;
    },
    addEventListener(type, handler) {
      this.listeners[type] = handler;
    },
    select() {},
  };
}

async function runShare(url) {
  const elements = [];
  const context = {
    URL,
    console,
    setTimeout() {},
    location: new URL(url),
    navigator: {
      shareCalls: [],
      async share(data) {
        this.shareCalls.push(data);
      },
      clipboard: {
        async writeText() {},
      },
    },
    document: {
      body: {
        appendChild(el) {
          elements.push(el);
        },
        removeChild() {},
      },
      createElement(tag) {
        return createElement(tag);
      },
      execCommand() {
        return true;
      },
    },
  };

  runInNewContext(shareJs, context);
  const button = elements.find((el) => el.className === 'share-float');
  assert.ok(button, 'share button should be added');
  assert.equal(typeof button.listeners.click, 'function', 'share button should register a click handler');

  await button.listeners.click();
  assert.equal(context.navigator.shareCalls.length, 1, 'Web Share API should receive one share payload');
  return context.navigator.shareCalls[0];
}

test('share payload converts local preview pages into public bookmarkable URLs', async () => {
  const payload = await runShare('http://127.0.0.1:8847/exam2/index.html?v=color-final');

  assert.equal(payload.url, 'https://tiago-tubarao.github.io/study-with-tiago/exam2/index.html');
  assert.doesNotMatch(payload.text, /127\.0\.0\.1|localhost/);
});

test('share payload keeps flashcard deck bookmarks while dropping cache-bust params', async () => {
  const payload = await runShare('http://localhost:8847/all-flashcards.html?deck=pharm&section=pharm_diabetes&v=color-final');

  assert.equal(payload.url, 'https://tiago-tubarao.github.io/study-with-tiago/all-flashcards.html?deck=pharm&section=pharm_diabetes');
  assert.match(payload.text, /all-flashcards\.html\?deck=pharm&section=pharm_diabetes/);
  assert.doesNotMatch(payload.text, /127\.0\.0\.1|localhost|v=color-final/);
});
