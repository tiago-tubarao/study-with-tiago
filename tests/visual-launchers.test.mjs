import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { test } from 'node:test';
import { runInNewContext } from 'node:vm';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');

test('Adult Health hub renders a visual topic launcher for every public-ready topic', () => {
  const html = read('exam3/index.html');

  assert.match(html, /visual-topic-grid/);
  assert.match(html, /VISUAL_TOPICS_AH/);
  assert.match(html, /<body class="visual-hub-page">/);
  assert.doesNotMatch(html, /visual-topic-avatar/);
  assert.doesNotMatch(html, /youtube\.com\/vi|ytimg|profile-pic|headshot/i);

  [
    'cbc_values.jpg',
    'dka_vs_hhs.jpg',
    'thyroid_storm_vs_myxedema.jpg',
    'kidney_stones_renal_calculi.jpg',
  ].forEach((asset) => assert.match(html, new RegExp(asset.replace('.', '\\.'))));

  [
    'all-flashcards.html?deck=exam3&section=exam3_hematology',
    'all-flashcards.html?deck=exam3&section=exam3_diabetes',
    'all-flashcards.html?deck=exam3&section=exam3_thyroid',
    'all-flashcards.html?deck=exam3&section=exam3_renal',
    '../adult-health-final.html',
  ].forEach((href) => assert.match(html, new RegExp(href.replace(/[.?]/g, '\\$&'))));
});

test('Pharmacology hub renders visual launchers for videos, flashcards, and GI study flow', () => {
  const html = read('exam2/index.html');

  assert.match(html, /visual-topic-grid/);
  assert.match(html, /VISUAL_TOPICS_PHARM/);
  assert.match(html, /<body class="visual-hub-page">/);
  assert.doesNotMatch(html, /visual-topic-avatar/);
  assert.doesNotMatch(html, /youtube\.com\/vi|ytimg|profile-pic|headshot/i);

  [
    'heparin_card.jpeg',
    'bactrim_vs_pyridium.jpg',
    'insulin_timeline.jpg',
    'levothyroxine_card.jpeg',
    '04_ppi_mechanism.png',
  ].forEach((asset) => assert.match(html, new RegExp(asset.replace('.', '\\.'))));

  [
    '../all-flashcards.html?deck=pharm&section=pharm_diabetes',
    '../all-flashcards.html?deck=pharm&section=pharm_antimicrobials',
    '../all-flashcards.html?deck=pharm&section=pharm_hematology',
    '../all-flashcards.html?deck=pharm&section=pharm_endocrine',
    '../all-flashcards.html?deck=q3gi',
  ].forEach((href) => assert.match(html, new RegExp(href.replace(/[.?]/g, '\\$&'))));
});

test('Visual topic cards do not preserve profile/avatar overlay styling', () => {
  const css = read('style.css');

  assert.doesNotMatch(css, /visual-topic-avatar/);
  assert.match(css, /body\.visual-hub-page \.share-float/);
  assert.match(css, /body\.study-room-page \.share-float/);
});

test('Adult Health uploaded topic score bars accept slidesHave-only study data', () => {
  const context = {
    console: { log() {} },
    document: { getElementById: () => ({ innerHTML: '' }) },
    localStorage: {
      getItem: () => null,
      setItem() {},
      removeItem() {},
    },
  };
  context.window = context;

  runInNewContext(read('js/data-ah.js'), context);
  runInNewContext(read('js/tracker.js'), context);

  assert.doesNotThrow(() => context.calcScores('ah_diabetes', context.STUDY_DATA_AH));
  assert.ok(context.calcScores('ah_diabetes', context.STUDY_DATA_AH).totalBP > 0);
});

test('Topic pages expose video plus flashcard study-room actions above the question lists', () => {
  [
    ['exam3/diabetes.html', '../all-flashcards.html?deck=exam3&section=exam3_diabetes'],
    ['exam3/hematology.html', '../all-flashcards.html?deck=exam3&section=exam3_hematology'],
    ['exam3/endocrine.html', '../all-flashcards.html?deck=exam3&section=exam3_thyroid'],
    ['exam3/renal.html', '../all-flashcards.html?deck=exam3&section=exam3_renal'],
    ['exam2/diabetes.html', '../all-flashcards.html?deck=pharm&section=pharm_diabetes'],
    ['exam2/hematology.html', '../all-flashcards.html?deck=pharm&section=pharm_hematology'],
    ['exam2/endocrine.html', '../all-flashcards.html?deck=pharm&section=pharm_endocrine'],
    ['exam2/antimicrobials.html', '../all-flashcards.html?deck=pharm&section=pharm_antimicrobials'],
  ].forEach(([path, flashHref]) => {
    const html = read(path);
    assert.match(html, /<body class="study-room-page">/);
    assert.match(html, /study-room-shell/);
    assert.match(html, /flashcard-lane/);
    assert.match(html, new RegExp(flashHref.replace(/[.?]/g, '\\$&')));
  });
});

test('Study-room paths do not load the newsletter popup over the video and flashcard loop', () => {
  [
    'exam2/diabetes.html',
    'exam2/hematology.html',
    'exam2/endocrine.html',
    'exam2/antimicrobials.html',
    'adult-health-final.html',
  ].forEach((path) => {
    assert.doesNotMatch(read(path), /signup\.js/);
  });
});

test('Adult Health Final GI video cards use local study visuals instead of YouTube thumbnail URLs', () => {
  const html = read('adult-health-final.html');

  assert.match(html, /<body class="study-room-page">/);
  assert.doesNotMatch(html, /img\.youtube\.com/);
  assert.match(html, /exam2\/quiz3-gi-images\/29_gerd_lifestyle\.png/);
  assert.match(html, /exam2\/quiz3-gi-images\/17_lactulose_ammonia_trap\.png/);
});

test('Adult Health Final GI videos are playable on-page and watch clicks stay inside the study shelf', () => {
  const html = read('adult-health-final.html');

  assert.match(html, /youtube\.com\/embed\/9Hh1A-MYmK0/);
  assert.match(html, /youtube\.com\/embed\/54xQ65nuZGc/);
  assert.match(html, /<a class="video-card" href="#upper-lower-video"/);
  assert.match(html, /<a class="video-card" href="#liver-pancreas-video"/);
  assert.match(html, /<a class="resource-card" href="#upper-lower-video"/);
  assert.match(html, /<a class="resource-card" href="#liver-pancreas-video"/);
  assert.match(html, /<a class="resource-card" href="#gi-my-notes"/);
  assert.doesNotMatch(html, /href="https:\/\/youtu\.be\//);

  const gumroadLinks = html.match(/<a[^>]+href="https:\/\/medpro3\.gumroad\.com\/l\/adult-health-gi-my-notes"[^>]*>/g) || [];
  assert.equal(gumroadLinks.length, 1);
  gumroadLinks.forEach((link) => assert.doesNotMatch(link, /target="_blank"/));
});
