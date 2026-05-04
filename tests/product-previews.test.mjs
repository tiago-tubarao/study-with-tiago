import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const exists = (path) => existsSync(new URL(`../${path}`, import.meta.url));

const previewAssets = [
  'assets/product-previews/gi-my-notes-preview-1500x844.png',
  'assets/product-previews/gi-my-notes-page-012.png',
  'assets/product-previews/gi-my-notes-page-024.png',
  'assets/product-previews/gi-my-notes-page-089.png',
  'assets/product-previews/gi-kawaii/gi-kawaii-gerd.jpg',
  'assets/product-previews/gi-kawaii/gi-kawaii-ibd.jpg',
  'assets/product-previews/gi-kawaii/gi-kawaii-obstruction.jpg',
  'assets/product-previews/gi-kawaii/gi-kawaii-cirrhosis.jpg',
  'assets/product-previews/gi-kawaii/gi-kawaii-encephalopathy.jpg',
  'assets/product-previews/gi-kawaii/gi-kawaii-pancreatitis.jpg',
  'assets/product-previews/gi-kawaii/gi-kawaii-gallbladder.jpg',
];

test('GI My Notes preview assets are present in the public website asset tree', () => {
  previewAssets.forEach((asset) => assert.ok(exists(asset), `${asset} should exist`));
});

test('Adult Health Final shelf previews GI My Notes before the Gumroad link', () => {
  const html = read('adult-health-final.html');

  assert.match(html, /id="gi-my-notes-preview"/);
  assert.match(html, /class="review-pack-preview/);
  assert.match(html, /assets\/product-previews\/gi-my-notes-preview-1500x844\.png/);
  assert.match(html, /assets\/product-previews\/gi-my-notes-page-012\.png/);
  assert.doesNotMatch(html, /Preview shows sample format/i);
  assert.doesNotMatch(html, /No actual exam or ATI questions/i);
  assert.doesNotMatch(html, /No score promises/i);
});

test('Resources page gives buyers visual previews for each paid study product', () => {
  const html = read('resources.html');

  [
    'id="pharm-bundle-preview"',
    'id="adult-health-review-preview"',
    'id="practice-exams-preview"',
    'id="gi-my-notes-preview"',
  ].forEach((needle) => assert.match(html, new RegExp(needle)));

  assert.match(html, /review-pack-preview/);
  assert.match(html, /preview-mini-sheet/);
  assert.match(html, /assets\/product-previews\/gi-my-notes-preview-1500x844\.png/);
});

test('Adult Health topic pages show the paid review format before purchase CTAs', () => {
  [
    'exam3/diabetes.html',
    'exam3/hematology.html',
    'exam3/endocrine.html',
    'exam3/renal.html',
  ].forEach((path) => {
    const html = read(path);
    assert.match(html, /id="adult-health-review-preview"/);
    assert.match(html, /class="review-pack-preview compact/);
    assert.match(html, /priority grids/);
    assert.match(html, /practice-style prompts/);
    assert.doesNotMatch(html, /Preview the review pack/i);
    assert.doesNotMatch(html, /No actual exam or ATI questions/i);
    assert.doesNotMatch(html, /No score promises/i);
  });
});

test('Product preview surfaces do not repeat legal disclaimer copy already covered in Terms', () => {
  const previewSurfaces = [
    read('resources.html'),
    read('adult-health-final.html'),
    read('adult-health-final-gi-upper-lower.html'),
    read('adult-health-final-gi-liver-pancreas.html'),
    read('exam3/diabetes.html'),
    read('exam3/hematology.html'),
    read('exam3/endocrine.html'),
    read('exam3/renal.html'),
  ].join('\n');

  [
    /Preview shows sample format/i,
    /No actual exam or ATI questions/i,
    /No score promises/i,
    /Preview is educational study support/i,
    /Previews are educational study support/i,
    /Before you click Gumroad/i,
    /Preview the review pack/i,
    /Preview the packet/i,
  ].forEach((pattern) => assert.doesNotMatch(previewSurfaces, pattern));

  const terms = read('terms.html');
  assert.match(terms, /No product, video, flashcard deck, or preview promises a score/i);
});

test('Product preview copy avoids unsafe public marketing claims', () => {
  const combined = [
    read('resources.html'),
    read('adult-health-final.html'),
    read('exam3/diabetes.html'),
    read('exam3/hematology.html'),
    read('exam3/endocrine.html'),
    read('exam3/renal.html'),
  ].join('\n');

  [
    /NCLEX Tested/i,
    /official NCLEX/i,
    /pass your exam/i,
    /will be on your exam/i,
    /actual ATI/i,
    /ATI questions copied/i,
    /ATI test questions/i,
    /ATI exam questions/i,
    /ATI-style/i,
    /professor-verified/i,
    /extracted from ATI/i,
    /pulled from ATI/i,
    /taken from ATI/i,
  ].forEach((pattern) => assert.doesNotMatch(combined, pattern));
});
