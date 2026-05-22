import assert from 'node:assert/strict';
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, statSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const trackedHtml = execFileSync('git', ['ls-files', '*.html'], {
  cwd: repoRoot,
  encoding: 'utf8',
})
  .trim()
  .split('\n')
  .filter(Boolean)
  .filter((file) => !file.endsWith('.local.html'));

const read = (file) => readFileSync(path.join(repoRoot, file), 'utf8');

const ignoredSchemes = /^(?:https?:|mailto:|tel:|javascript:|data:)/i;

const stripRuntimeBlocks = (html) =>
  html
    .replace(/<script\b[\s\S]*?<\/script>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '');

const localAttrRefs = (html) => {
  const refs = [];
  const cleaned = stripRuntimeBlocks(html);
  const attrPattern = /\b(?:href|src|poster)\s*=\s*["']([^"']+)["']/gi;
  for (const match of cleaned.matchAll(attrPattern)) {
    const raw = match[1].trim();
    if (!raw || raw.startsWith('#') || ignoredSchemes.test(raw) || raw.includes('${')) continue;
    refs.push(raw);
  }
  return refs;
};

const targetFor = (sourceFile, rawRef) => {
  const [withoutHash, hash = ''] = rawRef.split('#');
  const withoutQuery = withoutHash.split('?')[0];
  const sourceDir = path.dirname(path.join(repoRoot, sourceFile));
  let target = path.resolve(sourceDir, withoutQuery || sourceFile);

  if (withoutQuery.endsWith('/') || (existsSync(target) && statSync(target).isDirectory())) {
    target = path.join(target, 'index.html');
  }

  return { target, hash };
};

const htmlHasAnchor = (targetHtml, hash) => {
  if (!hash) return true;
  const decoded = decodeURIComponent(hash);
  const escaped = decoded.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
  return new RegExp(`\\b(?:id|name)=["']${escaped}["']`).test(targetHtml);
};

test('tracked public HTML pages only point to existing local routes and assets', () => {
  const missing = [];

  for (const file of trackedHtml) {
    const html = read(file);
    for (const ref of localAttrRefs(html)) {
      const { target, hash } = targetFor(file, ref);
      if (!target.startsWith(repoRoot) || !existsSync(target)) {
        missing.push(`${file} -> ${ref}`);
        continue;
      }

      if (hash && target.endsWith('.html') && !htmlHasAnchor(readFileSync(target, 'utf8'), hash)) {
        missing.push(`${file} -> ${ref} (missing #${hash})`);
      }
    }
  }

  assert.deepEqual(missing, []);
});

test('homepage exposes the student-first Pharm and Med-Surg learning paths', () => {
  const html = read('index.html');

  assert.match(html, /Pass Pharmacology and Med-Surg/);
  assert.match(html, /href="videos\.html"/);
  assert.match(html, /href="all-flashcards\.html"/);
  assert.match(html, /href="resources\.html"/);
  assert.match(html, /href="updates\.html#app-roadmap"/);
  assert.match(html, /The app is the next step/);
});

test('updates page and popup signup tell the app/newsletter story', () => {
  const updates = read('updates.html');
  const signup = read('js/signup.js');

  assert.match(updates, /id="app-roadmap"/);
  assert.match(updates, /The website is the public study shelf now/);
  assert.match(updates, /Newsletter \+ App Updates/);
  assert.match(signup, /App \+ study updates/);
  assert.match(signup, /Study with Tiago app is built/);
});
