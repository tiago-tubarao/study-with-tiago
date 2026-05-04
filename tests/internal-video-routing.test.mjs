import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

const localVideoIds = [
  '9Hh1A-MYmK0',
  '54xQ65nuZGc',
  'dL9bcmea9Mw',
  '9nmNgaX8ndo',
  'VluJCc8MNlI',
  '59_re_AuMwc',
  'Ge5nu_SuNp4',
  'MrFMIWnel2M',
  'VA8fOrMcHNA',
  '7Ctl6uAWgms',
];

test('Video Hub GI Final cards route to dedicated on-site study rooms', () => {
  const html = read('videos.html');

  assert.match(html, /href="adult-health-final-gi-upper-lower\.html"/);
  assert.match(html, /href="adult-health-final-gi-liver-pancreas\.html"/);
  assert.match(html, /Open the study room/);
  assert.doesNotMatch(html, /href="adult-health-final\.html#upper-lower-video"/);
  assert.doesNotMatch(html, /href="adult-health-final\.html#liver-pancreas-video"/);

  ['9Hh1A-MYmK0', '54xQ65nuZGc'].forEach((id) => {
    assert.doesNotMatch(html, new RegExp(`href="https://youtu\\.be/${id}`));
    assert.doesNotMatch(html, new RegExp(`href="https://www\\.youtube\\.com/watch\\?v=${id}`));
  });
});

test('Resources generated video list uses local study-room routes for embedded videos', () => {
  const html = read('resources.html');

  assert.doesNotMatch(html, /https:\/\/www\.youtube\.com\/watch\?v=\$\{/);
  assert.doesNotMatch(html, /https:\/\/youtu\.be\/9Hh1A-MYmK0|https:\/\/youtu\.be\/54xQ65nuZGc/);
  assert.match(html, /localHref/);
  assert.match(html, /Open study room/);

  [
    'adult-health-final-gi-upper-lower.html',
    'adult-health-final-gi-liver-pancreas.html',
    'exam3/diabetes.html#video',
    'exam3/endocrine.html#video',
    'exam3/renal.html#video',
    'exam3/hematology.html#video',
    'exam2/diabetes.html#video',
    'exam2/endocrine.html#video',
    'exam2/antimicrobials.html#video',
    'exam2/hematology.html#video',
  ].forEach((href) => assert.match(html, new RegExp(href.replace(/[.?]/g, '\\$&'))));
});

test('Local video IDs are not linked to external watch pages from hub/resource contexts', () => {
  const combined = [read('videos.html'), read('resources.html')].join('\n');

  localVideoIds.forEach((id) => {
    assert.doesNotMatch(combined, new RegExp(`href="https://youtu\\.be/${id}`));
    assert.doesNotMatch(combined, new RegExp(`href="https://www\\.youtube\\.com/watch\\?v=${id}`));
  });
});

test('Adult Health Final shelf has staged Neuro and Ortho receiving spaces without public-ready claims', () => {
  const html = read('adult-health-final.html');

  assert.match(html, /id="neuro-final-stage"/);
  assert.match(html, /id="ortho-final-stage"/);
  assert.match(html, /recording lane coming next/i);
  assert.match(html, /Not linked as a public video yet/);
  assert.match(html, /Not sold as a public product yet/);
  assert.doesNotMatch(html, /Neuro My Notes - \$|Ortho My Notes - \$/);
});

test('Homepage sends GI My Notes interest to the on-site preview before Gumroad', () => {
  const html = read('index.html');

  assert.match(html, /href="adult-health-final\.html#gi-my-notes-preview"/);
  assert.doesNotMatch(html, /href="https:\/\/medpro3\.gumroad\.com\/l\/adult-health-gi-my-notes"[^>]*>GI My Notes/);
});

test('Timestamp fallback keeps playback inside embedded players instead of opening YouTube', () => {
  const js = read('js/player.js');

  assert.doesNotMatch(js, /window\.open\(`https:\/\/www\.youtube\.com\/watch/);
  assert.match(js, /youtube\.com\/embed\/\$\{ytId\}/);
});
