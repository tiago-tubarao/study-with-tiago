import assert from 'node:assert/strict';
import { existsSync, readFileSync } from 'node:fs';
import { test } from 'node:test';

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8');
const exists = (path) => existsSync(new URL(`../${path}`, import.meta.url));

const rooms = [
  {
    path: 'adult-health-final-gi-upper-lower.html',
    title: 'Upper/Lower GI Study Room',
    videoId: '9Hh1A-MYmK0',
    sections: 'upper,lower',
    visual: 'exam2/quiz3-gi-images/29_gerd_lifestyle.png',
    chapters: ['0:00 Intro + what this video covers', '23:00 Lower GI starts', '41:47 Emergency priority chain + drug quick-review'],
    requestTopic: 'Adult%20Health%20Final%20GI%20Upper%20Lower',
    relatedPath: 'adult-health-final-gi-liver-pancreas.html',
    relatedLabel: 'Next GI video: Liver/Pancreas',
    previewSlides: 7,
    kawaiiAssets: [
      'assets/product-previews/gi-kawaii/gi-kawaii-gerd.jpg',
      'assets/product-previews/gi-kawaii/gi-kawaii-ibd.jpg',
      'assets/product-previews/gi-kawaii/gi-kawaii-obstruction.jpg',
    ],
  },
  {
    path: 'adult-health-final-gi-liver-pancreas.html',
    title: 'Liver, Pancreas, and Gallbladder Study Room',
    videoId: '54xQ65nuZGc',
    sections: 'liver,pancreas_gallbladder',
    visual: 'exam2/quiz3-gi-images/17_lactulose_ammonia_trap.png',
    chapters: ['0:00 Intro + what this video covers', '14:16 Hepatic encephalopathy and lactulose', '32:02 Pancreatitis big picture, assessment, and priority care'],
    requestTopic: 'Adult%20Health%20Final%20GI%20Liver%20Pancreas%20Gallbladder',
    relatedPath: 'adult-health-final-gi-upper-lower.html',
    relatedLabel: 'Related GI video: Upper/Lower',
    previewSlides: 8,
    kawaiiAssets: [
      'assets/product-previews/gi-kawaii/gi-kawaii-cirrhosis.jpg',
      'assets/product-previews/gi-kawaii/gi-kawaii-encephalopathy.jpg',
      'assets/product-previews/gi-kawaii/gi-kawaii-pancreatitis.jpg',
      'assets/product-previews/gi-kawaii/gi-kawaii-gallbladder.jpg',
    ],
  },
];

test('Adult Health Final hub is a topic launcher, not a duplicate same-page video shelf', () => {
  const html = read('adult-health-final.html');

  assert.match(html, /<body class="visual-hub-page final-prep-hub-page">/);
  assert.match(html, /visual-topic-grid/);
  assert.match(html, /href="adult-health-final-gi-upper-lower\.html"/);
  assert.match(html, /href="adult-health-final-gi-liver-pancreas\.html"/);
  assert.match(html, /id="gi-my-notes-preview"/);
  assert.match(html, /id="neuro-final-stage"/);
  assert.match(html, /id="ortho-final-stage"/);
  assert.doesNotMatch(html, /href="#upper-lower-video"/);
  assert.doesNotMatch(html, /href="#liver-pancreas-video"/);
  assert.doesNotMatch(html, /final-video-grid/);
  assert.doesNotMatch(html, /youtube\.com\/embed\/9Hh1A-MYmK0/);
  assert.doesNotMatch(html, /youtube\.com\/embed\/54xQ65nuZGc/);
});

test('Dedicated GI study rooms embed the right video, chapters, flashcard lane, product preview, and request box', () => {
  rooms.forEach((room) => {
    assert.ok(exists(room.path), `${room.path} should exist`);
    const html = read(room.path);

    assert.match(html, /<body class="study-room-page final-study-room-page">/);
    assert.match(html, new RegExp(room.title.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    assert.match(html, new RegExp(`id="yt-${room.videoId}"`));
    assert.match(html, new RegExp(`youtube\\.com/embed/${room.videoId}\\?enablejsapi=1`));
    assert.match(html, new RegExp(room.visual.replace(/[.?]/g, '\\$&')));
    assert.match(html, /class="chapter-list"/);
    room.chapters.forEach((chapter) => assert.match(html, new RegExp(chapter.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))));
    assert.match(html, new RegExp(`data-final-gi-sections="${room.sections}"`));
    assert.match(html, /js\/flashcard-data-final-gi\.js/);
    assert.match(html, /js\/final-gi-study-room\.js/);
    assert.match(html, /class="review-room-legend"/);
    assert.match(html, /Red<\/strong> danger \/ emergency/);
    assert.match(html, /Green<\/strong> nursing action/);
    assert.match(html, new RegExp(`class="study-room-action primary related-video-button" href="${room.relatedPath}"`));
    assert.match(html, new RegExp(room.relatedLabel.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')));
    assert.match(html, /id="gi-my-notes-study-ad"/);
    assert.match(html, /GI My Notes/);
    assert.match(html, /data-preview-carousel/);
    assert.match(html, /class="preview-carousel-controls"/);
    assert.match(html, /js\/product-preview-carousel\.js/);
    assert.match(html, /assets\/product-previews\/gi-my-notes-preview-1500x844\.png/);
    assert.match(html, /assets\/product-previews\/gi-my-notes-page-012\.png/);
    assert.match(html, /assets\/product-previews\/gi-my-notes-page-024\.png/);
    assert.match(html, /assets\/product-previews\/gi-my-notes-page-089\.png/);
    room.kawaiiAssets.forEach((asset) => assert.match(html, new RegExp(asset.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))));
    assert.equal((html.match(/class="preview-slide/g) || []).length, room.previewSlides);
    assert.equal((html.match(/class="preview-carousel-dot(?:\s|")/g) || []).length, room.previewSlides);
    assert.doesNotMatch(html, /Preview shows sample format/i);
    assert.doesNotMatch(html, /No actual exam or ATI questions/i);
    assert.doesNotMatch(html, /No score promises/i);
    assert.match(html, new RegExp(`requests\\.html\\?type=topic&topic=${room.requestTopic}`));
    assert.doesNotMatch(html, /href="https:\/\/youtu\.be\//);
    assert.doesNotMatch(html, /href="https:\/\/www\.youtube\.com\/watch/);
  });
});

test('Final GI study-room renderer filters cards by requested sections and uses accessible reveal controls', () => {
  const js = read('js/final-gi-study-room.js');

  assert.match(js, /data-final-gi-sections/);
  assert.match(js, /FLASHCARD_DATA_FINAL_GI/);
  assert.match(js, /document\.createElement\('details'\)/);
  assert.match(js, /card\.section/);
  assert.match(js, /semanticRules/);
  assert.match(js, /review-emphasis/);
  assert.match(js, /inline-flashcard-tone/);
  assert.match(js, /inline-flashcard-visual-hook/);
  assert.match(js, /inline-flashcard-icon/);
  assert.match(js, /card\.quickHook \|\| card\.mnemonic/);
  assert.match(js, /No cards found/);
});

test('Final GI study rooms keep hero art contained and expose the packet-style visual key', () => {
  const css = read('style.css');

  assert.match(css, /\.final-study-hero-media img[\s\S]*object-fit: contain/);
  assert.match(css, /\.review-room-legend/);
  assert.match(css, /\.legend-danger/);
  assert.match(css, /\.legend-action/);
  assert.match(css, /\.legend-teach/);
  assert.match(css, /\.legend-exam/);
  assert.match(css, /\.inline-flashcard\.tone-danger/);
  assert.match(css, /\.review-danger/);
  assert.match(css, /\.inline-flashcard-visual-hook/);
  assert.match(css, /\.inline-flashcard-icon/);
  assert.match(css, /\.inline-flashcard-hook/);
  assert.match(css, /\.preview-carousel-stage/);
  assert.match(css, /\.preview-carousel-stage::after/);
  assert.match(css, /\.preview-slide-visual img/);
});

test('Product preview carousel swaps slides without expanding the page', () => {
  const js = read('js/product-preview-carousel.js');

  assert.match(js, /data-preview-carousel/);
  assert.match(js, /data-preview-next/);
  assert.match(js, /data-preview-prev/);
  assert.match(js, /aria-pressed/);
});

test('Timestamp buttons expose an active state after a chapter jump', () => {
  const js = read('js/player.js');
  const css = read('style.css');

  assert.match(js, /markActiveTimestamp/);
  assert.match(js, /dataset\.currentStart/);
  assert.match(js, /aria-pressed/);
  assert.match(js, /classList\.toggle\('is-active'/);
  assert.match(css, /\.chapter-list button\.is-active/);
  assert.match(css, /\[data-theme="dark"\] \.chapter-list button\.is-active/);
});
