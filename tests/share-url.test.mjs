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

async function runShare(url, options = {}) {
  const elements = [];
  const context = {
    URL,
    console,
    setTimeout() {},
    location: new URL(url),
    navigator: {
      shareCalls: [],
      clipboardWrites: [],
      async share(data) {
        if (!options.disableNativeShare) {
          this.shareCalls.push(data);
        }
      },
      clipboard: {
        async writeText(text) {
          context.navigator.clipboardWrites.push(text);
        },
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
  if (options.disableNativeShare) {
    delete context.navigator.share;
  }
  const button = elements.find((el) => el.className === 'share-float');
  assert.ok(button, 'share button should be added');
  assert.equal(typeof button.listeners.click, 'function', 'share button should register a click handler');

  await button.listeners.click();
  return context;
}

test('share payload converts local preview pages into public bookmarkable URLs', async () => {
  const context = await runShare('http://127.0.0.1:8847/exam2/index.html?v=color-final');
  assert.equal(context.navigator.shareCalls.length, 1, 'Web Share API should receive one share payload');
  const payload = context.navigator.shareCalls[0];

  assert.equal(payload.url, 'https://tiago-tubarao.github.io/study-with-tiago/exam2/index.html');
  assert.doesNotMatch(payload.text, /127\.0\.0\.1|localhost/);
});

test('share payload keeps flashcard deck bookmarks while dropping cache-bust params', async () => {
  const context = await runShare('http://localhost:8847/all-flashcards.html?deck=pharm&section=pharm_diabetes&v=color-final');
  assert.equal(context.navigator.shareCalls.length, 1, 'Web Share API should receive one share payload');
  const payload = context.navigator.shareCalls[0];

  assert.equal(payload.url, 'https://tiago-tubarao.github.io/study-with-tiago/all-flashcards.html?deck=pharm&section=pharm_diabetes');
  assert.doesNotMatch(payload.text, /all-flashcards\.html\?deck=pharm&section=pharm_diabetes/);
  assert.doesNotMatch(payload.text, /127\.0\.0\.1|localhost|v=color-final/);
});

test('native share payload sends only one URL field instead of duplicating the link in text', async () => {
  const context = await runShare('http://localhost:8847/');
  const payload = context.navigator.shareCalls[0];

  assert.equal(payload.url, 'https://tiago-tubarao.github.io/study-with-tiago/');
  assert.match(payload.title, /Nursing Study Tools/);
  assert.match(payload.text, /A nursing student built Study with Tiago|Check this out/);
  assert.match(payload.text, /students coming behind him/);
  assert.doesNotMatch(payload.text, /https:\/\/tiago-tubarao\.github\.io\/study-with-tiago\//);
  assert.doesNotMatch(payload.text, /🔗/);
});

test('share button has a quiet classmate reminder hint', () => {
  assert.match(shareJs, /data-hint', 'Share with a classmate'/);
});

test('clipboard fallback still copies one complete message with one public link', async () => {
  const context = await runShare('http://localhost:8847/all-flashcards.html?deck=pharm&section=pharm_diabetes&v=color-final', {
    disableNativeShare: true,
  });
  const copied = context.navigator.clipboardWrites[0];

  assert.equal(context.navigator.shareCalls.length, 0);
  assert.match(copied, /🔗 https:\/\/tiago-tubarao\.github\.io\/study-with-tiago\/all-flashcards\.html\?deck=pharm&section=pharm_diabetes/);
  assert.equal(copied.match(/https:\/\/tiago-tubarao\.github\.io\/study-with-tiago\//g).length, 1);
  assert.doesNotMatch(copied, /localhost|v=color-final/);
});
