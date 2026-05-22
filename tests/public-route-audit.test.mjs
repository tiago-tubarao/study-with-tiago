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

  assert.match(html, /Study Pharmacology and Med-Surg/);
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

test('public marketing copy avoids unsupported promise-style claims', () => {
  const scanFiles = [
    ...trackedHtml.filter((file) => !['privacy.html', 'terms.html', 'requests.html', 'outcomes.html'].includes(file)),
    'js/share.js',
  ];
  const bannedClaims = [
    /\bhelps nursing students pass\b/i,
    /\bpass pharmacology\b/i,
    /\bpass med-surg\b/i,
    /\btrying to pass\b/i,
    /\b100% free\b/i,
    /\bno spam\b/i,
    /\btriple verification\b/i,
    /\bno guessing\b/i,
    /\bevery testable\b/i,
    /\bstandard curricula\b/i,
    /\bmust-know facts\b/i,
    /\bComplete Exam Review\b/,
    /\bfull rationales for every answer\b/i,
    /"@type"\s*:\s*"Course"/,
    /"@type"\s*:\s*"CourseInstance"/,
    /"instructor"\s*:/,
  ];
  const failures = [];

  for (const file of scanFiles) {
    const content = read(file);
    for (const pattern of bannedClaims) {
      if (pattern.test(content)) {
        failures.push(`${file} contains ${pattern}`);
      }
    }
  }

  assert.deepEqual(failures, []);
});

test('public drill room does not expose internal school or source-route labels', () => {
  const scanFiles = ['adult-health-final-drill.html', 'js/adult-health-final-drill-bank.js'];
  const bannedInternalRouteTerms = [
    /\bTighe\b/i,
    /\bCoursePoint\b/i,
    /\bPrepU\b/i,
    /\bATI\b/i,
    /\bprofessor\b/i,
    /\bNURS327\b/i,
    /\blive class intel\b/i,
    /\bexact live exam\b/i,
  ];
  const failures = [];

  for (const file of scanFiles) {
    const content = read(file);
    for (const pattern of bannedInternalRouteTerms) {
      if (pattern.test(content)) {
        failures.push(`${file} contains ${pattern}`);
      }
    }
  }

  assert.deepEqual(failures, []);
});
