import assert from 'node:assert/strict';
import { existsSync, readFileSync, statSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath } from 'node:url';
import { test } from 'node:test';

const root = new URL('../', import.meta.url);
const read = (path) => readFileSync(new URL(path, root), 'utf8');
const exists = (path) => existsSync(new URL(path, root));
const stat = (path) => statSync(new URL(path, root));
const path = (filePath) => fileURLToPath(new URL(filePath, root));

const genericPages = [
  'index.html',
  'exam2/index.html',
  'exam3/index.html',
  'adult-health-final.html',
  'adult-health-final-gi-upper-lower.html',
  'adult-health-final-gi-liver-pancreas.html',
  'all-flashcards.html',
  'flashcards-hub.html',
  'resources.html',
  'videos.html',
  'about.html',
];

test('generic share cards use the Study with Tiago banner social preview', () => {
  genericPages.forEach((page) => {
    const html = read(page);
    assert.match(html, /assets\/og-study-with-tiago-banner\.png\?v=1/, `${page} should use the banner social preview`);
    assert.doesNotMatch(html, /assets\/og-preview\.png\?v=2/, `${page} should not use the stale generic preview`);
  });
});

test('banner social preview is Open Graph sized and under common share-card limits', () => {
  const asset = 'assets/og-study-with-tiago-banner.png';
  assert.ok(exists(asset), `${asset} should exist`);

  const output = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', path(asset)], { encoding: 'utf8' });
  assert.match(output, /pixelWidth:\s+1200/);
  assert.match(output, /pixelHeight:\s+630/);
  assert.ok(stat(asset).size < 2_000_000, 'social image should stay comfortably under 2 MB');
});
