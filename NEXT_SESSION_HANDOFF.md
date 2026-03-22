# NEXT SESSION HANDOFF — Video Content + Slide Upgrade + Website Integration

Paste this entire prompt into the next Claude chat.

---

## WHO I AM
I'm Thomas (Tiago), a BSN nursing student with ADHD building a YouTube nursing education channel. I just built a personal study website at `projects/study-website/` called "Study with Tiago" — interactive exam prep with embedded YouTube videos, side-by-side syllabus comparison, 198 NCLEX scenario questions, scoring system with A+ through F grading, and confidence dots that expand into test-yourself panels. The website is working locally and needs to be connected to my video content.

## WHAT HAPPENED LAST SESSION (2026-03-22)
- Built the entire study website (9 pages, 10 JS modules, 198 questions)
- Website at `projects/study-website/` — serve with `python3 -m http.server 8848`
- Diabetes page is the flagship (exam2/diabetes.html) — full interactive features
- Endocrine page (exam2/endocrine.html) — built but needs Deck 4 NCLEX questions written
- Antimicrobials + Hematology are placeholder pages
- Memory saved at `memory/project_study-website.md`
- Session log at `memory/sessions/2026-03-22.md`

## WHAT I NEED NOW — 3 THINGS

### 1. SLIDE PRESENTATION UPGRADE
My current slides are built with pptxgenjs (Node.js PowerPoint generator) at `pharmwork/`. They work but they're:
- **Visually boring** — text-heavy, no animations, basic color blocks
- **Not optimized for video** — they look like study slides, not YouTube slides
- **Glitchy in recording** — PowerPoint screen recording has lag and transition issues

I want to explore:
- **Can Canva replace PowerPoint for recording?** We have 25+ Canva MCP tools connected but never used them for this. Canva has presentations, animations, and screen recording built in.
- **If staying with PowerPoint, how do we make it prettier?** Better layouts, embedded visuals, NLM infographics as slides (we've done this before — see `memory/feedback_nlm-visual-pipeline.md`)
- **What about other free tools?** Google Slides, Prezi, Pitch, Gamma.app, Beautiful.ai — are any of these better for video recording?

**Current slide system:**
- `pharmwork/slide-helpers.js` — 16 functions (10 study + 6 video)
- `pharmwork/deck3-video.js` — Diabetes video slides (RECORDED, uploaded)
- `pharmwork/deck4-video.js` — Endocrine video slides (RECORDED, uploaded)
- `pharmwork/deck2-video.js` — Antimicrobials video slides (NOT recorded, needs blueprint fix)
- Deck 1 and Deck 5 video slides don't exist yet
- Study decks: `deck1-5.js` — dense study versions (not for video)

**The dual slide system** (see `memory/project_dual-slide-system.md`):
- Study slides = dense, text-heavy, for reviewing
- Video slides = big text, one concept per slide, ADHD-friendly, for YouTube
- Both generated from the same data, different templates

### 2. VIDEO INTRO + WEBSITE INTEGRATION
Now that the website exists, every video should reference it:
- **Intro slide** needs to mention: "Follow along at [website URL] — watch the video, check the syllabus, test yourself"
- **End screen** should push to the website for interactive studying
- **Description** should link to the specific deck page on the website
- **Pinned comment** should mention the website + free study bundle

Research and recommend:
- What's the optimal YouTube video structure for nursing education? (Hook → intro → content → CTA)
- How long should the hook be? (First 30 seconds are critical for retention)
- Should I have a consistent intro/outro template?
- What makes nursing YouTube videos get recommended? (SEO, thumbnails, titles)

**Current YouTube status:**
- Channel: Tiago (@TiagoNursing)
- 2 videos uploaded: Deck 3 Diabetes (dL9bcmea9Mw), Deck 4 Endocrine (9nmNgaX8ndo)
- Gumroad free bundle: medpro3.gumroad.com/l/wcoda
- YouTube metadata files: `pharmwork/youtube/NURS210_Exam2_Deck{N}_YouTube.md`
- Strategy report: `references/` directory

### 3. NEXT DECK TO BUILD
The next video to record is **Deck 2 — Infectious Disease & Antimicrobials** (18-22 exam questions, LARGEST section). But:
- The slides have blueprint errors (see `pharmwork/youtube/DECK2_BLUEPRINT_FIX_HANDOFF.md`)
- 8 off-blueprint slides need to be removed
- 6+ missing items need to be added
- The fix handoff exists but wasn't executed yet

**Priority order:**
1. Fix Deck 2 slides (blueprint alignment)
2. Upgrade slide visuals (whichever tool we choose)
3. Add website integration to intro/outro slides
4. Record Deck 2
5. Then Deck 1 (Hematology) and Deck 5 (GI) — these don't have video slides yet

## KEY FILES TO READ
1. `memory/MEMORY.md` — master index
2. `memory/project_study-website.md` — website project status
3. `memory/sessions/2026-03-22.md` — last session details
4. `memory/project_dual-slide-system.md` — study vs video slide architecture
5. `memory/feedback_nlm-visual-pipeline.md` — NLM infographic pipeline (proven)
6. `pharmwork/youtube/DECK2_BLUEPRINT_FIX_HANDOFF.md` — Deck 2 fix instructions
7. `pharmwork/slide-helpers.js` — current slide generation system
8. `.claude/skills/slide-deck-builder/SKILL.md` — slide building skill
9. `.claude/skills/youtube-content-pipeline/SKILL.md` — YouTube optimization skill
10. `references/` — YouTube strategy report

## MY EXAM IS MARCH 25 (3 DAYS AWAY)
- Study > building right now
- But getting the content pipeline optimized means better study materials
- The website is ready for studying at localhost:8848

## WHAT I'D LIKE FROM THIS SESSION
1. **Research and recommend**: PowerPoint vs Canva vs other tools for video recording. Pros/cons for my use case (ADHD, nursing education, YouTube optimization). Give me a clear recommendation.
2. **If Canva**: Show me how to use the Canva MCP tools to create a presentation template that matches my brand (Scrub Teal #2A9D8F, Navy #1A2A42, Gold #E9C46A). Design an intro slide that references the website.
3. **If PowerPoint**: Upgrade the slide-helpers.js video functions to produce prettier slides. More visual, less text, better for YouTube.
4. **YouTube structure**: Give me an optimal video structure template (hook, intro, content sections, CTA, outro) with timing recommendations based on what works for nursing education channels.
5. **Fix Deck 2**: Execute the blueprint fix handoff so the slides are ready to record.
6. **Write Deck 4 questions**: The Endocrine page on the website needs NCLEX questions for 19 drugs (same structure as Diabetes: 9 per drug, 3 difficulty levels). Save to `projects/study-website/js/questions-endocrine.js`.

## CONTEXT RULES
- Load `thomas-context` skill at session start
- Read MEMORY.md for full system map
- All files stay in `~/Claude AI/` — never scatter outputs
- Privacy: no school name, professor name, or class numbers in any public-facing content
- ADHD-friendly: bullets, one thing at a time, visual structure
- Match intent, not exact words
