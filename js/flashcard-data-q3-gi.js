// ══════════════════════════════════════════════
// Flashcard Data — 34 Visual Cards for NURS 210 Quiz 3
// GI System Drugs — Chapters 34-40
// ADHD-optimized: emoji front connects to visual back
// Back = Gemini image + teaching notes that explain what you SEE
// Based on Dr. Barkley's dual coding + externalized WM research
// Updated 2026-03-31: Added Scopolamine + Dronabinol cards from ATI extraction
// ══════════════════════════════════════════════

window.FLASHCARD_DATA_Q3_GI = {
  sections: [
    { id: 'hpylori', label: 'H. pylori', icon: '\uD83E\uDDA0', color: '#5F3DC4' },
    { id: 'h2blockers', label: 'H2 Blockers', icon: '\uD83D\uDEE1\uFE0F', color: '#2A9D8F' },
    { id: 'ppis', label: 'PPIs', icon: '\uD83D\uDD12', color: '#1971C2' },
    { id: 'protectants', label: 'Protectants', icon: '\uD83E\uDE79', color: '#E67700' },
    { id: 'antacids', label: 'Antacids', icon: '\u2696\uFE0F', color: '#862E9C' },
    { id: 'antiemetics', label: 'Antiemetics', icon: '\uD83E\uDD22', color: '#C92A2A' },
    { id: 'laxatives', label: 'Laxatives', icon: '\uD83D\uDCA7', color: '#D9480F' },
    { id: 'antidiarrheals', label: 'Antidiarrheals', icon: '\uD83D\uDEBD', color: '#2B8A3E' },
    { id: 'ibs', label: 'IBS Drugs', icon: '\uD83E\uDDE0', color: '#D6336C' },
    { id: 'lifestyle', label: 'Lifestyle + Safety', icon: '\uD83C\uDF3F', color: '#5C940D' },
    { id: 'review', label: 'Rapid Review', icon: '\uD83D\uDEA8', color: '#495057' },
  ],
  cards: [
    // ═══ H. PYLORI (1 card) ═══
    {
      section: 'hpylori',
      front: { icon: '\uD83E\uDDA0\uD83D\uDC8A', title: 'H. pylori Triple Therapy', subtitle: 'PPI + 2 antibiotics for 10-14 days' },
      image: 'quiz3-gi-images/01_h_pylori_triple_therapy.png',
      notes: [
        'See the angry bug inside the stomach? That\'s H. pylori — causes MOST peptic ulcers. Three superhero pills attack it: PPI (kills the acid environment) + clarithromycin + amoxicillin.',
        'If penicillin-allergic: swap amoxicillin for METRONIDAZOLE. But warn them: metronidazole + alcohol = disulfiram-like reaction (severe flushing, vomiting, tachycardia). No alcohol during treatment!',
        'COMPLETE THE FULL 10-14 DAYS. Stopping early = antibiotic resistance + the ulcer comes back. This is a huge teaching point.',
        'Smoking delays ulcer healing regardless of drug therapy — both increases acid AND decreases mucosal blood flow. Cessation is critical.'
      ]
    },

    // ═══ H2 BLOCKERS (2 cards) ═══
    {
      section: 'h2blockers',
      front: { icon: '\uD83D\uDC51\uD83D\uDC8A', title: 'H2 Blocker Comparison', subtitle: 'Cimetidine = interaction king, famotidine = safe choice' },
      image: 'quiz3-gi-images/02_h2_blockers_comparison.png',
      notes: [
        'CIMETIDINE (Tagamet) wears the crown because it\'s the INTERACTION KING. It inhibits CYP450 enzymes, meaning it increases levels of warfarin (bleeding), phenytoin (toxicity), theophylline (toxicity), and benzos (sedation).',
        'Cimetidine also crosses the BBB = CNS effects (confusion, lethargy, depression) especially in ELDERLY with RENAL IMPAIRMENT. Plus it has anti-androgenic effects = gynecomastia and impotence. This drug has it all — and none of it is good.',
        'FAMOTIDINE (Pepcid) is the nice one. Fewest side effects, most commonly used, does NOT significantly inhibit CYP450. When the exam asks "which H2 blocker for elderly?" — it\'s famotidine.',
        'RANITIDINE (Zantac) has the X because it was recalled for NDMA contamination (carcinogen). May still appear on exams as a knowledge check.'
      ]
    },
    {
      section: 'h2blockers',
      front: { icon: '\uD83E\uDDD1\u200D\u2695\uFE0F', title: 'H2 Blocker Nursing Pearls', subtitle: 'IV rate, antacid timing, renal dosing' },
      image: 'quiz3-gi-images/03_h2_blocker_nursing.png',
      notes: [
        'RED bubble: IV push too fast = BRADYCARDIA + HYPOTENSION. Always dilute and infuse slowly. This is a safety priority question.',
        'BLUE bubble: Separate from antacids by 1 HOUR. Antacids decrease H2 blocker absorption. Give the antacid 1 hour before OR after.',
        'GREEN bubble: ALL H2 blockers need dose adjustment in renal impairment — not just cimetidine. The kidneys clear these drugs.',
        'ORANGE bubble: Elderly + cimetidine = confusion and delirium. Always prefer famotidine in older adults.',
        'PURPLE bubble: Ketoconazole and itraconazole NEED stomach acid to be absorbed. H2 blockers reduce acid = reduced antifungal effectiveness. Also: SMOKING decreases H2 blocker effectiveness — advise cessation.'
      ]
    },

    // ═══ PPIs (2 cards) ═══
    {
      section: 'ppis',
      front: { icon: '\uD83D\uDD12\u23F0', title: 'PPI Mechanism', subtitle: '30 min before meals — pump must be ACTIVE' },
      image: 'quiz3-gi-images/04_ppi_mechanism.png',
      notes: [
        'See the proton pump machine on the stomach wall? PPIs put a PERMANENT LOCK on it — irreversible inhibition of H+/K+ ATPase. This is why PPIs are the MOST POTENT acid suppressors available.',
        'The clock + plate = take 30 minutes BEFORE meals. Why? The pump must be ACTIVELY pumping acid to be blocked. If the pump is resting, the drug has nothing to lock onto.',
        'SWALLOW WHOLE — do NOT crush or chew (enteric coating protects the drug from stomach acid). Exception: LANSOPRAZOLE can be sprinkled on applesauce.',
        'PANTOPRAZOLE (Protonix) = the one available IV. Used for acute GI bleeding and NPO patients. Infuse over 15 minutes.',
        'PPIs are not for instant relief — takes 1-4 days for full effect. Don\'t self-treat OTC for more than 14 days.'
      ]
    },
    {
      section: 'ppis',
      front: { icon: '\u26A0\uFE0F\uD83D\uDCC5', title: 'PPI Long-Term Dangers', subtitle: '>1 year use = 6 major risks' },
      image: 'quiz3-gi-images/05_ppi_long_term_dangers.png',
      notes: [
        'Calendar shows >1 year — that\'s when the serious stuff kicks in. Six dangers radiating out:',
        'OSTEOPOROSIS/FRACTURES — decreased calcium absorption. Monitor bone density in long-term users. Report bone pain.',
        'HYPOMAGNESEMIA — can cause muscle cramps, spasms, arrhythmias. Monitor Mg2+ levels.',
        'B12 DEFICIENCY — acid is needed to absorb B12. No acid = no B12 over time.',
        'C. DIFFICILE — reduced stomach acid = less first-line defense against bacteria = C. diff can colonize. Report watery/bloody diarrhea.',
        'REBOUND ACID — if you stop abruptly after long-term use, acid comes roaring back worse than before. Must TAPER.',
        'CRITICAL INTERACTION: Omeprazole + Clopidogrel (Plavix) = AVOID. Omeprazole inhibits CYP2C19 which activates clopidogrel. Use PANTOPRAZOLE instead.'
      ]
    },

    // ═══ PROTECTANTS (2 cards) ═══
    {
      section: 'protectants',
      front: { icon: '\uD83E\uDE79\uD83D\uDEE1\uFE0F', title: 'Sucralfate (Carafate)', subtitle: 'Physical barrier — does NOT reduce acid' },
      image: 'quiz3-gi-images/06_sucralfate_barrier.png',
      notes: [
        'See the paste/bandage covering the ulcer crater? That\'s sucralfate — it creates a viscous protective barrier over the ulcer. Think of it as a Band-Aid for your stomach.',
        'KEY CONCEPT: This drug does NOT reduce or neutralize acid. It\'s purely a physical shield against acid, pepsin, and bile salts.',
        'EMPTY STOMACH required — 1 hour BEFORE meals. Why? The drug needs an ACIDIC environment to activate and bind to the ulcer proteins.',
        'THE 2-HOUR RULE: Separate from ALL other oral meds by 2 hours. Sucralfate coats the GI tract and blocks absorption of everything — phenytoin, fluoroquinolones, digoxin, warfarin, levothyroxine. This is heavily tested.',
        'Main side effect: CONSTIPATION (contains aluminum). Also watch for aluminum toxicity in renal failure patients.',
        'Treatment duration: 4-8 weeks. Healing must be confirmed by X-ray or endoscopy. Mnemonic: SUCKs onto the ulCER.'
      ]
    },
    {
      section: 'protectants',
      front: { icon: '\uD83D\uDEAB\uD83E\uDD30', title: 'Misoprostol (Cytotec)', subtitle: 'CATEGORY X — absolutely NO in pregnancy' },
      image: 'quiz3-gi-images/07_misoprostol_pregnancy_x.png',
      notes: [
        'The giant red X over the pregnant woman says it all — misoprostol is ABSOLUTELY CONTRAINDICATED in pregnancy (Category X). It causes uterine contractions that can lead to miscarriage and birth defects.',
        'Purpose: Prevents NSAID-induced gastric ulcers. NSAIDs deplete protective prostaglandins from the stomach lining. Misoprostol is a synthetic prostaglandin E1 analog that replaces them.',
        'THREE requirements for women of childbearing age: (1) Negative pregnancy test BEFORE starting, (2) Reliable contraception DURING therapy, (3) Start on Day 2-3 of menstrual period to confirm not pregnant.',
        'Most common side effect: DIARRHEA — up to 40% of patients, dose-related. Also cramping and menstrual irregularities.',
        'NO magnesium-containing antacids — they worsen the diarrhea. Take WITH FOOD to decrease GI effects.',
        'Mnemonic: MISO-PREG-NO!'
      ]
    },

    // ═══ ANTACIDS (2 cards) ═══
    {
      section: 'antacids',
      front: { icon: '\u2696\uFE0F\uD83D\uDCA9', title: 'Antacid Bowel Effects', subtitle: 'Al = constipation, Mg = diarrhea, Mylanta = balanced' },
      image: 'quiz3-gi-images/08_antacid_bowel_effects.png',
      notes: [
        'LEFT: Aluminum hydroxide (Amphojel) = CONSTIPATION. Mnemonic: AlumiNUM = NUMbs the bowels. Also binds phosphate — causes hypophosphatemia. Monitor phosphorus levels!',
        'CENTER: Magnesium hydroxide (Milk of Magnesia) = DIARRHEA. Mnemonic: MagNESIUM = Milk of MagNESIa = loose stools. Osmotic effect pulls water into the bowel.',
        'RIGHT: MYLANTA = professor\'s prototype. Aluminum + Magnesium + Simethicone. The combo BALANCES bowel effects (constipation + diarrhea cancel out). Simethicone = anti-gas.',
        'Professor\'s note: Aluminum compounds are "rarely used alone" for acid-peptic disorders. That\'s why combo products like Mylanta exist.',
        'ALL antacids: separate from other oral drugs by 1-2 HOURS. They raise pH and chelate drugs, blocking absorption of tetracyclines, fluoroquinolones, iron, digoxin, H2 blockers, levothyroxine, ketoconazole.',
        'Best timing: 1-3 hours AFTER meals (when acid peaks) + at bedtime.'
      ]
    },
    {
      section: 'antacids',
      front: { icon: '\uD83E\uDEC0\u2620\uFE0F', title: 'Antacids + Renal Failure', subtitle: 'Magnesium = most dangerous, calcium gluconate = antidote' },
      image: 'quiz3-gi-images/09_antacid_renal_danger.png',
      notes: [
        'MAGNESIUM = MOST DANGEROUS in renal failure. Kidneys can\'t excrete Mg2+, so it accumulates. Hypermagnesemia causes hypotension, respiratory depression, and CARDIAC ARREST. This can be fatal.',
        'Signs of hypermagnesemia: hypotension, muscle weakness, difficulty breathing, decreased deep tendon reflexes. Antidote: CALCIUM GLUCONATE IV.',
        'ALUMINUM = also dangerous in renal failure. Aluminum accumulates and causes toxicity. Use cautiously or avoid.',
        'CALCIUM CARBONATE (Tums) = rebound acid hypersecretion (calcium triggers gastrin release). Chronic use can cause milk-alkali syndrome: hypercalcemia + metabolic alkalosis + renal failure.',
        'Exam logic: When a question asks about antacids in a patient with kidney disease — magnesium is the answer they\'re looking for as the MOST dangerous.'
      ]
    },

    // ═══ ANTIEMETICS (4 cards) ═══
    {
      section: 'antiemetics',
      front: { icon: '\uD83C\uDFC6\uD83D\uDC8A', title: 'Ondansetron (Zofran)', subtitle: 'FIRST-LINE for chemo + post-op N/V' },
      image: 'quiz3-gi-images/10_ondansetron_first_line.png',
      notes: [
        'Crown = FIRST-LINE status. This is THE drug for chemotherapy-induced and post-operative nausea/vomiting. Blocks serotonin 5-HT3 receptors in the CTZ and vagal nerve terminals. SAME CLASS: granisetron (Kytril), palonosetron (Aloxi) — all end in -SETRON. Same MOA, same side effects.',
        'TIMING IS EVERYTHING: 30 min BEFORE chemo, infuse IV over 15 min, repeat 4 hours AFTER. Mnemonic: "30 Before, 15 Slow, 4 After."',
        'Side effects per professor: DIARRHEA (most common), headache, and transient liver enzyme elevation (monitor LFTs). Generally WELL TOLERATED — mild to moderate effects.',
        'ATI BOXED WARNING: Risk of SEROTONIN SYNDROME if combined with SSRIs, SNRIs, TCAs, MAOIs, triptans, lithium, fentanyl, tramadol. Watch for: agitation, confusion, rapid HR, muscle rigidity.',
        'ATI SAFETY: QT PROLONGATION risk — get baseline ECG. Monitor electrolytes (Na, K, Ca, Mg). TERATOGENIC — can cause septal defects and cleft palate in pregnancy.',
        'Available forms: IV (max 16 mg/dose), PO, and ODT (orally disintegrating tablet — dissolves on the tongue, great for patients who can\'t swallow). Also oral film and IM.',
        'ATI TRAP: Ondansetron does NOT cause tardive dyskinesia or EPS — that\'s METOCLOPRAMIDE. Don\'t confuse them!'
      ]
    },
    {
      section: 'antiemetics',
      front: { icon: '\u2600\uFE0F\uD83D\uDC8A', title: 'Promethazine (Phenergan)', subtitle: 'CNS depression + photosensitivity + QT changes' },
      image: 'quiz3-gi-images/11_promethazine_phenergan.png',
      notes: [
        'Four effects Dr. Lee emphasized — each in a colored box on the card:',
        'RED = CNS DEPRESSION: drowsiness, confusion, sedation. This drug hits hard. Avoid other CNS depressants and alcohol.',
        'YELLOW = PHOTOSENSITIVITY: educate on sun protection — sunscreen, protective clothing, avoid prolonged sun exposure.',
        'BLUE = ORTHOSTATIC HYPOTENSION: blood pressure drops when standing. Teach: change positions SLOWLY, sit on edge of bed before standing.',
        'PURPLE = Q/T WAVE CHANGES on ECG: monitor cardiac rhythm. This is why you don\'t just hand this drug out casually.',
        'Also: anticholinergic effects (blurred vision, dry mouth, urinary retention). PO, rectal, or IM preferred routes. NEVER give subcutaneous — causes tissue damage.',
        'ATI: Risk of NEUROLEPTIC MALIGNANT SYNDROME (NMS) — fever, muscle rigidity, altered mental status, variable BP, tachycardia. Also cholestatic jaundice + bone marrow suppression.',
        'RED SKULL: Children <2 years = FATAL RESPIRATORY DEPRESSION (BOXED WARNING + KIDs list). Beers Criteria in elderly. Never give to these groups.'
      ]
    },
    {
      section: 'antiemetics',
      front: { icon: '\u2764\uFE0F\uD83D\uDCC8', title: 'Hydroxyzine (Vistaril)', subtitle: 'Professor\'s #1 concern: QT prolongation + torsades' },
      image: 'quiz3-gi-images/12_hydroxyzine_cardiac.png',
      notes: [
        'Heart monitor showing dangerous rhythm = the whole point of this card. The professor emphasizes THREE cardiac effects:',
        'QT PROLONGATION — the heart takes too long to reset between beats. This sets the stage for deadly arrhythmias.',
        'TACHYCARDIA — heart rate goes up. Monitor heart rate.',
        'TORSADES DE POINTES — a life-threatening arrhythmia that can degenerate into ventricular fibrillation. This is the big one.',
        'Uses: anxiety, N/V, pruritus (itching), pre-op sedation. It\'s an H1 histamine blocker with mild anxiolytic properties.',
        'NURSING PEARL: MONITOR CARDIAC RHYTHM/STATUS. If the exam asks "what do you monitor with hydroxyzine?" — the answer is the heart, not the liver, not the kidneys.',
        'Other effects: drowsiness, dry mouth, urinary retention. Avoid CNS depressants.'
      ]
    },
    {
      section: 'antiemetics',
      front: { icon: '\uD83D\uDC8A\u2702\uFE0F', title: 'Aprepitant (Emend)', subtitle: 'Kills OCP + warfarin effectiveness' },
      image: 'quiz3-gi-images/13_aprepitant_interactions.png',
      notes: [
        'NK1 receptor antagonist — blocks substance P in the brain\'s vomiting center. Used for HIGHLY emetogenic chemo (cisplatin is the classic example).',
        'BROKEN SHIELD over birth control pills = aprepitant DECREASES oral contraceptive effectiveness. Women MUST use backup contraception during treatment. This is a major teaching point.',
        'SHRINKING WARFARIN pill = aprepitant DECREASES warfarin effectiveness. Monitor INR closely. Report unusual bruising or bleeding.',
        'Administration: Day 1 = 1 hour before chemo. Days 2-3 = morning dose. Often part of a triple regimen: aprepitant + ondansetron + dexamethasone.',
        'ATI SAFETY: STEVENS-JOHNSON SYNDROME risk — monitor for any rash or skin changes. Also ANAPHYLAXIS risk — have emergency equipment ready.',
        'ATI INTERACTION: Do NOT use with PIMOZIDE — risk of torsades de pointes. Also decreases PHENYTOIN effectiveness.',
        'It\'s a CYP3A4 substrate AND inhibitor — lots of interaction potential. Also increases dexamethasone and methylprednisolone levels (dose reduction needed for those).'
      ]
    },

    // ═══ ANTIEMETICS BASICS (2 cards) ═══
    {
      section: 'antiemetics',
      front: { icon: '\u26A0\uFE0F\uD83D\uDE1B', title: 'Metoclopramide (Reglan)', subtitle: 'BLACK BOX: Tardive dyskinesia — max 12 weeks' },
      image: 'quiz3-gi-images/14_metoclopramide_blackbox.png',
      notes: [
        'BLACK BOX WARNING banner = this is serious. Tardive dyskinesia = involuntary movements of the face and tongue (lip smacking, tongue protrusion, grimacing). May be IRREVERSIBLE.',
        'TWO superpowers shown: (1) Antiemetic — blocks dopamine in the CTZ, and (2) Prokinetic — increases gastric emptying. It is the ONLY antiemetic that also speeds up the stomach.',
        'MAX 12 WEEKS of use. Risk of tardive dyskinesia increases with duration and cumulative dose.',
        'Used for: diabetic gastroparesis (stomach empties too slowly), GERD, N/V.',
        'CONTRAINDICATED in: Parkinson disease (blocks dopamine = PD worse), GI OBSTRUCTION (ATI Safety Alert: can cause severe pain and intestinal rupture with mechanical obstruction — must determine cause BEFORE giving), GI bleed, seizure disorders, hypertension.',
        'Mnemonic: REGLANd of no return — TD may be irreversible after 12 weeks.',
        'Teaching: Report ANY involuntary facial movements, lip smacking, or tongue movements IMMEDIATELY.'
      ]
    },
    {
      section: 'antiemetics',
      front: { icon: '\uD83D\uDD0D\u274C', title: 'Antiemetic Exam Traps', subtitle: '6 trick answers to watch for on test day' },
      image: 'quiz3-gi-images/15_antiemetic_traps.png',
      notes: [
        'TRAP 1: Tardive dyskinesia = METOCLOPRAMIDE, NOT ondansetron. If the question says "5-HT3 antagonist" it\'s ondansetron — no TD risk there.',
        'TRAP 2: EPS (extrapyramidal symptoms) = metoclopramide or prochlorperazine, NOT loperamide. Loperamide is an antidiarrheal — totally different drug.',
        'TRAP 3: Torsades de pointes = HYDROXYZINE (per professor). The test won\'t say "bradycardia" — it\'ll say QT prolongation or torsades.',
        'TRAP 4: Photosensitivity = PROMETHAZINE (per professor). Not ondansetron, not loperamide.',
        'TRAP 5: Dronabinol = synthetic THC, Schedule III. It\'s a cannabinoid antiemetic for refractory chemo N/V.',
        'TRAP 6: Give antiemetics 30-60 min BEFORE the nausea-producing event, not after symptoms start. Timing is everything.'
      ]
    },

    // ═══ LAXATIVES (3 cards) ═══
    {
      section: 'laxatives',
      front: { icon: '\uD83D\uDCA7\u23F1\uFE0F', title: 'Laxative Types', subtitle: '7 drugs from slowest to fastest onset' },
      image: 'quiz3-gi-images/16_laxative_types.png',
      notes: [
        'PSYLLIUM (Metamucil) = bulk-forming, 1-3 days. Take with FULL GLASS of water — without enough fluid it can cause ESOPHAGEAL OBSTRUCTION. Mimics natural fiber.',
        'DOCUSATE (Colace) = stool softener, 1-3 days. PREVENTS hard stools (doesn\'t treat impaction). Key use: POST-MI patients — prevents straining/Valsalva which increases cardiac workload.',
        'LACTULOSE = osmotic, 24-48 hrs for constipation. But ALSO used for hepatic encephalopathy (traps ammonia). Dual purpose — heavily tested.',
        'PEG/MiraLAX = osmotic, 1-3 days. Does NOT cause electrolyte imbalance. GoLYTELY = colonoscopy prep (4 LITERS, works in 1 hour).',
        'BISACODYL (Dulcolax) = stimulant, 6-12 hrs PO. Do NOT crush (enteric-coated). No milk or antacids within 1 hour (dissolves coating). Suppository acts in 15-60 min.',
        'Mg HYDROXIDE = osmotic, 0.5-6 hrs. Fast but AVOID in renal failure (hypermagnesemia).',
        'GoLYTELY = 1 hour onset. 4 liters of prep. Patient must be near a bathroom.'
      ]
    },
    {
      section: 'laxatives',
      front: { icon: '\uD83E\uDDE0\uD83D\uDCA9', title: 'Lactulose Dual Mechanism', subtitle: 'Constipation + traps ammonia in hepatic encephalopathy' },
      image: 'quiz3-gi-images/17_lactulose_ammonia_trap.png',
      notes: [
        'TOP HALF: For constipation — osmotic effect draws water into the colon, softening stool. Takes 24-48 hours. Pretty straightforward.',
        'BOTTOM HALF: For hepatic encephalopathy — this is the HIGH YIELD part. The liver is failing, so it can\'t clear ammonia from the blood. Ammonia goes to the brain = confusion, asterixis, coma.',
        'HOW LACTULOSE HELPS: Bacteria in the colon convert lactulose to lactic acid, lowering colonic pH. This converts ammonia (NH3) to ammonium (NH4+). NH4+ is CHARGED and TRAPPED in the colon — can\'t be reabsorbed. Excreted in feces.',
        'GOAL: 2-3 soft stools per day. NOT frank diarrhea — that causes dehydration and electrolyte imbalance.',
        'Monitor: AMMONIA levels (should decrease) and electrolytes.',
        'Contraindication: GALACTOSEMIA (lactulose contains galactose and lactose).',
        'Mnemonic: Lactulose traps the (am)MONey in the colon.'
      ]
    },
    {
      section: 'laxatives',
      front: { icon: '\uD83E\uDEE6\uD83D\uDEAB', title: 'Mineral Oil Aspiration Risk', subtitle: 'Lipid pneumonia if aspirated — position matters' },
      image: 'quiz3-gi-images/18_mineral_oil_aspiration.png',
      notes: [
        'Main danger shown: oil going into lungs = LIPID PNEUMONIA. Oil in the airways causes severe inflammation. This is why patient positioning matters so much.',
        'RULES: Give at BEDTIME on an EMPTY stomach. Patient must be sitting UPRIGHT. Never give to someone lying flat.',
        'DO NOT give to: elderly, debilitated, children <6, patients with dysphagia, or bedbound patients. Anyone who might aspirate = no mineral oil.',
        'Do NOT give within 2 hours of meals (delays gastric emptying, increases aspiration risk).',
        'Chronic use = decreased absorption of fat-soluble vitamins A, D, E, K. Not for long-term use.',
        'Side effect to warn about: anal seepage/leakage — totally normal but embarrassing if they\'re not expecting it.'
      ]
    },

    // ═══ ANTIDIARRHEALS (1 card) ═══
    {
      section: 'antidiarrheals',
      front: { icon: '\uD83D\uDEBD\uD83D\uDC8A', title: 'Antidiarrheal Comparison', subtitle: 'Lomotil, Imodium, Pepto + the infection rule' },
      image: 'quiz3-gi-images/19_antidiarrheal_comparison.png',
      notes: [
        'LOMOTIL (diphenoxylate/atropine): Schedule V opioid. Atropine is added in subtherapeutic doses to DISCOURAGE ABUSE. In IBD patients = risk of TOXIC MEGACOLON (slows inflamed bowel). High doses = hypotension + respiratory depression per Dr. Lee.',
        'LOPERAMIDE (Imodium): OTC, acts locally on GI mu-opioid receptors. Causes sedation and dizziness — avoid activities requiring alertness. Does NOT cause EPS (ATI trap — that\'s metoclopramide). For dry mouth: sugarless gum/candy, NOT alcohol-based mouthwash.',
        'BISMUTH (Pepto-Bismol): Black stool + black tongue = HARMLESS (bismuth + sulfur reaction). Contains SALICYLATE — no aspirin-allergic patients, no kids with viral illness (Reye syndrome risk). Also used in H. pylori quadruple therapy.',
        'PROBIOTICS: Take 2 HOURS away from antibiotics (antibiotics kill the beneficial bacteria). Restore normal GI flora. Contraindicated in severely immunocompromised patients.',
        'THE BIG RULE: NEVER give antidiarrheals if infection is suspected (C. diff, E. coli, Shigella). You\'d be trapping the pathogen in the bowel. Let the body flush it out.'
      ]
    },

    // ═══ RAPID REVIEW (3 cards) ═══
    {
      section: 'review',
      front: { icon: '\u23F0\uD83D\uDC8A', title: 'Drug Separation Rules', subtitle: '4 timing rules you MUST know cold' },
      image: 'quiz3-gi-images/20_drug_separation_rules.png',
      notes: [
        'SUCRALFATE = 2 HOURS from ALL other meds. It coats the GI tract and physically blocks absorption. This is the longest separation and the most commonly tested.',
        'ANTACIDS = 1-2 HOURS from other oral drugs. They raise pH and chelate drugs, preventing absorption.',
        'H2 BLOCKERS + ANTACIDS = 1 HOUR apart. Antacids decrease H2 blocker absorption specifically.',
        'PROBIOTICS + ANTIBIOTICS = 2 HOURS apart. The antibiotics would kill the probiotic bacteria if taken together.',
        'BONUS: PPIs do NOT need separation from antacids (unlike H2 blockers). But ketoconazole/itraconazole NEED acid to be absorbed — avoid with ANY acid-reducing drug (PPIs, H2 blockers, antacids).'
      ]
    },
    {
      section: 'review',
      front: { icon: '\uD83D\uDC65\u274C', title: 'Population Restrictions', subtitle: 'Who gets WHAT drug restricted' },
      image: 'quiz3-gi-images/21_avoid_in_populations.png',
      notes: [
        'PREGNANT WOMAN + X = Misoprostol (Category X). Causes uterine contractions and miscarriage. This is the most absolute contraindication in GI pharm.',
        'KIDNEY + warning = Magnesium hydroxide (fatal hypermagnesemia) and aluminum hydroxide (toxicity). Magnesium is MORE dangerous.',
        'IBD COLON = Diphenoxylate/atropine (Lomotil). Slowing motility in an inflamed bowel = toxic megacolon.',
        'CHILD WITH CHICKENPOX = Bismuth subsalicylate (Pepto). Contains salicylate = Reye syndrome risk in kids with viral illness.',
        'ELDERLY BRAIN = Cimetidine. Crosses BBB = confusion and delirium in older adults. Use famotidine instead.',
        'PARKINSON BRAIN = Metoclopramide and prochlorperazine. Both block dopamine which would worsen Parkinson disease.'
      ]
    },
    {
      section: 'review',
      front: { icon: '\uD83E\uDDEA\uD83D\uDCCB', title: 'GI Labs to Monitor', subtitle: '7 drug-lab pairs for exam day' },
      image: 'quiz3-gi-images/22_gi_labs_to_monitor.png',
      notes: [
        'Aluminum hydroxide \u2192 PHOSPHORUS. It binds phosphate in the GI tract causing hypophosphatemia. Signs: weakness, anorexia.',
        'Magnesium hydroxide \u2192 MAGNESIUM + electrolytes. Especially in renal patients — hypermagnesemia can be fatal.',
        'PPIs long-term \u2192 Mg2+, B12, and BONE DENSITY. The triple threat of chronic PPI use.',
        'Lactulose (hepatic encephalopathy) \u2192 AMMONIA (NH3). Goal is to lower ammonia levels. Also monitor electrolytes if diarrhea is excessive.',
        'Metoclopramide \u2192 MOVEMENT ASSESSMENT. Screen for tardive dyskinesia at every visit. Involuntary face/tongue movements = stop the drug.',
        'Warfarin + aprepitant \u2192 INR. Aprepitant decreases warfarin effectiveness, so INR may drop.',
        'Misoprostol \u2192 PREGNANCY TEST (hCG). Must be negative before starting. Category X — no exceptions.'
      ]
    },

    // ═══ ANTIEMETICS — EXTRA CARDS (using existing images 23, 24) ═══
    {
      section: 'antiemetics',
      front: { icon: '\uD83D\uDE35\u200D\uD83D\uDCAB\uD83D\uDC8A', title: 'Prochlorperazine (Compazine)', subtitle: 'Phenothiazine — EPS risk, no Parkinson patients' },
      image: 'quiz3-gi-images/23_prochlorperazine_compazine.png',
      notes: [
        'WHAT IT DOES: Blocks DOPAMINE receptors in the CTZ. Strong antiemetic for severe nausea/vomiting. Same class as promethazine (phenothiazine).',
        'WHAT COULD GO WRONG: EXTRAPYRAMIDAL SYMPTOMS (EPS) — acute dystonia (muscle spasms, torticollis), akathisia (restlessness), pseudoparkinsonism (tremor, rigidity). Long-term = tardive dyskinesia. Rare but FATAL = neuroleptic malignant syndrome (NMS).',
        'WHO TO AVOID: PARKINSON DISEASE patients — blocking dopamine makes PD dramatically worse. Also avoid in children <2, bone marrow suppression.',
        'WHAT THE NURSE DOES: Monitor for involuntary movements at EVERY visit. Give with food to reduce GI irritation. Available PO, IM, rectal.',
        'WHAT TO TEACH: Rise SLOWLY (orthostatic hypotension). Report ANY involuntary movements immediately — lip smacking, tongue protrusion, grimacing.',
        'WHAT INTERACTS: Additive CNS depression with opioids, benzos, alcohol. Do NOT combine with other dopamine blockers.',
        'EXAM TRAP: Prochlorperazine causes EPS. Ondansetron does NOT. If the question mentions involuntary movements — think dopamine blockers, not serotonin blockers.'
      ]
    },
    {
      section: 'antiemetics',
      front: { icon: '\uD83C\uDFAF\uD83D\uDC8A', title: 'Antiemetic Decision Panel', subtitle: '4 mechanisms, 4 situations — pick the right drug' },
      image: 'quiz3-gi-images/24_antiemetic_four_panel.png',
      notes: [
        'PANEL 1 — CHEMO N/V: Ondansetron (5-HT3 blocker) is FIRST LINE. For highly emetogenic chemo: add aprepitant (NK1 blocker) + dexamethasone = triple therapy.',
        'PANEL 2 — MOTION SICKNESS: Dimenhydrinate (Dramamine) or meclizine (Antivert). Both are H1 antihistamines that suppress the vestibular system. Take 30 min BEFORE travel.',
        'PANEL 3 — GASTROPARESIS: Metoclopramide (Reglan) — the ONLY antiemetic that also speeds up gastric emptying. But max 12 weeks (tardive dyskinesia BLACK BOX).',
        'PANEL 4 — REFRACTORY/BREAKTHROUGH: Olanzapine (atypical antipsychotic) for breakthrough chemo N/V. Dronabinol (synthetic THC, Schedule III) for refractory cases.',
        'THE PRIORITY RULE: Give ALL antiemetics 30-60 minutes BEFORE the nausea-causing event. Prevention > treatment. This is heavily tested.',
        'NURSING PRIORITY: Always assess the CAUSE of nausea before medicating. Is it medication side effect? Obstruction? Infection? Increased ICP? The drug choice depends on the cause.'
      ]
    },

    // ═══ OCTREOTIDE (antidiarrheal — gap drug) ═══
    {
      section: 'antidiarrheals',
      front: { icon: '\uD83D\uDC89\uD83E\uDDE0', title: 'Octreotide (Sandostatin)', subtitle: 'Synthetic somatostatin — secretory diarrhea + carcinoid' },
      image: 'quiz3-gi-images/34_octreotide_sandostatin.png',
      notes: [
        'WHAT IT IS: Synthetic version of somatostatin — a hormone that INHIBITS many GI functions. It slows everything down: decreases GI motility, decreases secretions, decreases splanchnic blood flow.',
        'INDICATIONS: (1) Secretory diarrhea (carcinoid tumors, VIPomas), (2) Acromegaly (excess growth hormone), (3) Esophageal variceal bleeding (decreases portal blood flow). For this exam: focus on the DIARRHEA use.',
        'ADMINISTRATION: SubQ injection — ROTATE injection sites. Also available IV for acute variceal bleeding. NOT oral — peptide would be destroyed in the GI tract.',
        'ADVERSE EFFECTS: GALLSTONES (most important — somatostatin inhibits gallbladder contraction = bile stasis = stones). Also BRADYCARDIA, hyperglycemia OR hypoglycemia (alters insulin/glucagon), nausea, abdominal pain.',
        'WHAT THE NURSE MONITORS: Gallbladder symptoms (RUQ pain, N/V after fatty meals). Blood glucose (can swing either way). Heart rate (bradycardia). Thyroid function (long-term use can suppress TSH).',
        'PATIENT TEACHING: Report any right upper quadrant pain. Monitor blood sugar if diabetic. Rotate injection sites. May need long-acting depot injection (Sandostatin LAR) monthly for chronic use.',
        'EXAM LOGIC: "Synthetic somatostatin" = OCTREOTIDE. "Secretory diarrhea" = OCTREOTIDE. "Carcinoid tumor diarrhea" = OCTREOTIDE. "Gallstones as side effect" = OCTREOTIDE.'
      ]
    },

    // ═══ NEW ATI ANTIEMETIC CARDS (2026-03-31) ═══
    {
      section: 'antiemetics',
      front: { icon: '\uD83E\uDE79\uD83D\uDC42', title: 'Scopolamine (Transderm Scop)', subtitle: 'Anticholinergic — patch behind ear, motion sickness + PONV' },
      image: 'quiz3-gi-images/32_scopolamine_transderm.png',
      notes: [
        'WHAT IT DOES: Anticholinergic — inhibits ACh release in the CNS, blocks M1 receptors. Used for MOTION SICKNESS and PONV (postoperative nausea/vomiting). This is THE motion sickness drug.',
        'HOW TO APPLY: Transdermal patch behind the EAR (mastoid area). Apply at least 4 HOURS before travel. For surgery: apply the EVENING BEFORE. Area must be clean, dry, and hairless. Press firmly.',
        'PATCH LASTS 3 DAYS. NOT affected by water or showering. But MUST DISCONTINUE BEFORE MRI — metal layer in patch can heat up and cause BURNS. This is a unique safety point.',
        'ANTICHOLINERGIC SIDE EFFECTS (the "Can\'t See, Can\'t Pee, Can\'t Spit, Can\'t Sh*t" mnemonic): Blurred vision, urinary hesitancy/retention, dry mouth, constipation. Also tachycardia and dilated pupils.',
        'WASH HANDS before AND after handling the patch. Do NOT touch eyes after — scopolamine causes pupil dilation on contact. Use ice chips or sugarless gum for dry mouth.',
        'WHO TO AVOID: Elderly (confusion risk — Beers Criteria), glaucoma (angle-closure — increases intraocular pressure), BPH, GI obstruction, cardiac disease, myasthenia gravis.',
        'ATI SAFETY: Risk of ANTICHOLINERGIC TOXIDROME — flushed skin, tachycardia, agitation, confusion, urinary retention. Also OVERHEATING in hot weather (can\'t sweat properly). Monitor body temperature.',
        'DRUG INTERACTIONS: Additive effects with other anticholinergics, antihistamines, antidepressants, opioids, alcohol, sedatives. May slow GI tract = can affect absorption of PO medications.'
      ]
    },
    {
      section: 'antiemetics',
      front: { icon: '\uD83C\uDF3F\uD83D\uDC8A', title: 'Dronabinol (Marinol)', subtitle: 'Cannabinoid — Schedule III — LAST RESORT for chemo N/V' },
      image: 'quiz3-gi-images/33_dronabinol_marinol.png',
      notes: [
        'WHAT IT IS: Synthetic THC (delta-9-tetrahydrocannabinol). Schedule III CONTROLLED SUBSTANCE. Only used for CINV in clients who FAILED all other antiemetics. This is a LAST RESORT drug — never first-line.',
        'HOW IT WORKS: Binds to cannabinoid receptors in different parts of the CNS. Reduces nausea/vomiting AND increases appetite (used in AIDS wasting too, but that\'s not on this exam).',
        'SIDE EFFECTS (CNS-heavy): Dysphoria (sadness), sedation, confusion, euphoria, dry mouth (xerostomia), hypotension. Think: it\'s THC — same effects as marijuana.',
        'ADVERSE EFFECTS: SEIZURES (serious). CANNABINOID HYPEREMESIS SYNDROME (CHS) — paradoxical: the anti-nausea drug causes SEVERE nausea/vomiting + compulsive hot bathing. Report immediately.',
        'WHO TO SCREEN: Assess for CANNABIS USE DISORDER history (substance abuse risk). Assess hepatic AND renal function. Check pregnancy status — not safe in pregnancy.',
        'WHO TO AVOID: Clients with psychiatric history (can worsen anxiety, psychosis, paranoia). Avoid with other CNS depressants, anticholinergics. Caution with cardiac disease (tachycardia risk).',
        'NURSING ACTIONS: Monitor for substance misuse. Assess mental status (mood changes, confusion). Monitor vital signs (hypotension, tachycardia). Educate: NO driving — causes significant CNS impairment.',
        'EXAM LOGIC: "Schedule III antiemetic" = DRONABINOL. "Synthetic THC" = DRONABINOL. "Failed conventional therapy" = DRONABINOL. "Cannabinoid hyperemesis" = DRONABINOL. Four unique identifiers.'
      ]
    },

    // ═══ IBS DRUGS (new section — 2 cards) ═══
    {
      section: 'ibs',
      front: { icon: '\u2640\uFE0F\u26A0\uFE0F', title: 'Alosetron (Lotronex)', subtitle: 'FEMALES ONLY — Black Box — REMS required' },
      image: 'quiz3-gi-images/25_alosetron_lotronex.png',
      notes: [
        'WHAT IT DOES: 5-HT3 serotonin antagonist — slows colonic transit, reduces visceral pain. Same receptor as ondansetron but used for IBS-D, NOT nausea.',
        'WHO GETS IT: FEMALES ONLY with SEVERE IBS-D (diarrhea-predominant) who have FAILED all conventional therapy. NOT for males. NOT for mild IBS. NOT for acute diarrhea.',
        'WHAT COULD GO WRONG — BLACK BOX: (1) SEVERE CONSTIPATION that can require hospitalization. (2) ISCHEMIC COLITIS — reduced blood flow to the colon, potentially fatal. These are the two reasons for the Black Box.',
        'THE REMS PROGRAM: Requires signed patient-physician agreement BEFORE prescribing. Both must acknowledge risks. This is one of the strictest prescribing programs in GI pharm.',
        'WHAT THE NURSE MONITORS: Bowel frequency — if constipation develops, STOP immediately. Report abdominal pain, bloody stools, or rectal bleeding (ischemic colitis signs).',
        'WHAT TO TEACH: This drug is a last resort, not a first-line treatment. Stop and call provider if you have no bowel movement for 3+ days or notice blood in stool.',
        'EXAM LOGIC: "Requires signed agreement" = ALOSETRON. "5-HT3 blocker for IBS" = ALOSETRON. "Females only" = ALOSETRON. Three unique identifiers — hard to confuse with anything else.'
      ]
    },
    {
      section: 'ibs',
      front: { icon: '\uD83D\uDCA7\uD83E\uDDEA', title: 'Lubiprostone (Amitiza)', subtitle: 'Chloride channel activator — newer constipation agent' },
      image: 'quiz3-gi-images/26_lubiprostone_amitiza.png',
      notes: [
        'WHAT IT DOES: Activates chloride channels (ClC-2) on intestinal epithelial cells. This pulls CHLORIDE into the intestinal lumen, and water follows osmotically. Result: increased intestinal fluid secretion + stimulated motility.',
        'WHY IT\'S DIFFERENT: Unlike traditional laxatives (stimulants, osmotics, bulk-forming), lubiprostone works by a completely different mechanism — it\'s a prostone, a fatty acid derivative. This means it works even when traditional laxatives fail.',
        'THREE INDICATIONS: (1) Chronic idiopathic constipation, (2) Opioid-induced constipation (huge clinical need — opioids slow the gut), (3) IBS with constipation (IBS-C) in women.',
        'WHAT COULD GO WRONG: NAUSEA is the #1 side effect (up to 31%). Also diarrhea, headache, abdominal distension. Nausea is dose-related and often improves with continued use.',
        'WHAT THE NURSE DOES: Give WITH FOOD to reduce nausea (critical administration point). Monitor bowel frequency. Assess for dehydration if diarrhea develops.',
        'WHAT TO TEACH: Take with food and water. Report severe diarrhea or signs of dehydration. This is not a "rescue" laxative — it works over days, not hours.',
        'EXAM PAIR: Lubiprostone = chloride channels = fluid secretion. Alosetron = serotonin blocker = slows transit. Opposite mechanisms for opposite IBS subtypes (IBS-C vs IBS-D).'
      ]
    },

    // ═══ LIFESTYLE + SAFETY (new section — 5 cards) ═══
    {
      section: 'lifestyle',
      front: { icon: '\uD83C\uDF3F\u2705', title: 'GERD Lifestyle Modifications', subtitle: 'FIRST LINE — Try these BEFORE starting medications' },
      image: 'quiz3-gi-images/29_gerd_lifestyle.png',
      notes: [
        'THE PRIORITY: Per Dr. Lee — lifestyle changes are FIRST-LINE for GERD. Before ANY medication, try these. This is a nursing priority question — "which intervention FIRST?"',
        'RULE 1: Do NOT lie down for 1-2 HOURS after eating. Gravity prevents reflux. This is the most commonly tested lifestyle modification.',
        'RULE 2: Elevate HEAD OF BED 6-8 INCHES using blocks or wedges. NOT just extra pillows (that flexes the neck, not the body). The whole upper body must be elevated.',
        'RULE 3: Small, frequent meals. Avoid fatty, spicy, acidic, irritating foods. Large meals increase gastric distension = more reflux.',
        'RULE 4: Avoid TIGHT-FITTING CLOTHING — increases intra-abdominal pressure, pushes stomach contents upward.',
        'RULE 5: Maintain IDEAL BODY WEIGHT. Obesity increases intra-abdominal pressure dramatically. Weight loss alone can resolve mild GERD.',
        'RULE 6: Avoid BENDING or STOOPING after meals. Same logic as lying down — position matters.',
        'RULE 7: SMOKING CESSATION — smoking decreases lower esophageal sphincter pressure, allowing more reflux. This ties into the next card.',
        'EXAM LOGIC: "Which should the nurse teach FIRST?" = lifestyle modifications. "Which intervention is PRIORITY before medication?" = position, diet, weight.'
      ]
    },
    {
      section: 'lifestyle',
      front: { icon: '\uD83D\uDEAC\u2757', title: 'Smoking + Ulcers: Dual Mechanism', subtitle: 'Increases acid AND decreases blood flow' },
      image: 'quiz3-gi-images/30_smoking_ulcers.png',
      notes: [
        'MECHANISM 1 (RED): Smoking INCREASES gastric acid secretion. Nicotine stimulates parietal cells to pump out more HCl. More acid = more mucosal damage.',
        'MECHANISM 2 (BLUE): Smoking DECREASES mucosal blood flow. Nicotine causes vasoconstriction of gastric blood vessels. Less blood flow = less oxygen and nutrients for healing.',
        'THE DOUBLE HIT: Both mechanisms happening simultaneously means: (1) MORE acid attacking the ulcer, and (2) LESS blood supply to repair it. The ulcer can\'t heal.',
        'CLINICAL RESULT: Patients who smoke heal MORE SLOWLY and have MORE RECURRENT ULCERS despite taking the correct medications. The drugs work — but smoking undoes the benefit.',
        'WHAT THE NURSE DOES: Smoking cessation counseling is part of the CARE PLAN for EVERY ulcer patient. It\'s not optional teaching — it\'s a nursing intervention.',
        'APPLIES TO ALL GI DRUGS: Smoking decreases the effectiveness of H2 blockers AND PPIs. If the patient won\'t quit, at minimum advise: avoid smoking after the last daily dose.',
        'EXAM LOGIC: "Which patient statement shows understanding?" = "I will stop smoking to help my ulcer heal." "Which factor delays healing?" = continued smoking.'
      ]
    },
    {
      section: 'lifestyle',
      front: { icon: '\uD83E\uDE78\u26D4', title: 'Bismuth: NEVER Alone for Ulcers', subtitle: 'Causes SERIOUS BLEEDING if used without combo therapy' },
      image: 'quiz3-gi-images/31_bismuth_warning.png',
      notes: [
        'THE DANGER: Bismuth subsalicylate (Pepto-Bismol) can cause SERIOUS BLEEDING when used ALONE in patients with ulcers. The salicylate component has antiplatelet effects — it thins the blood at the ulcer site.',
        'THE RULE: Bismuth must ONLY be used as part of TRIPLE or QUADRUPLE therapy — combined with antibiotics + acid reducer. Never as monotherapy for ulcers.',
        'SAFE COMBO: Bismuth + PPI + 2 antibiotics = quadruple therapy for H. pylori. The other drugs protect while bismuth helps eradicate the bacteria.',
        'BLACK STOOL + BLACK TONGUE: These are HARMLESS. Bismuth reacts with sulfur in the GI tract. Do NOT confuse with GI bleeding. Teach patients this is expected and normal.',
        'SALICYLATE CONTENT: Contains salicylate = NO aspirin-allergic patients. NO children with viral illness (Reye syndrome risk). NO patients on anticoagulants (additive bleeding).',
        'WHAT THE NURSE MONITORS: Signs of GI bleeding — melena (BLACK TARRY stool from upper GI), hematemesis (vomiting blood), coffee-ground emesis. These are different from the harmless black discoloration.',
        'EXAM TRAP: "Black stool" in a patient on bismuth alone = concerning (possible bleeding). "Black stool" in a patient on quadruple therapy = expected (bismuth effect). Context changes the answer.'
      ]
    },
    {
      section: 'lifestyle',
      front: { icon: '\uD83E\uDDF2\uD83D\uDC8A', title: 'Cholestyramine (Questran)', subtitle: 'Bile acid sequestrant — binds EVERYTHING' },
      image: 'quiz3-gi-images/27_cholestyramine_questran.png',
      notes: [
        'WHAT IT DOES: Binds bile acids in the GI tract like a sponge. Used for diarrhea caused by BILE SALT MALABSORPTION — seen in Crohn disease and after ileal resection (the ileum normally reabsorbs bile).',
        'WHY IT CAUSES DIARRHEA RELIEF: Excess bile acids in the colon irritate the mucosa and pull water in (osmotic effect). Cholestyramine traps them before they reach the colon.',
        'THE BIG DRUG INTERACTION: Cholestyramine binds MANY drugs in the GI tract, preventing their absorption. This is the most interaction-heavy drug in the class.',
        'TIMING IS CRITICAL: Give other medications 1 HOUR BEFORE or 4-6 HOURS AFTER cholestyramine. This is a LONGER separation than sucralfate (2 hrs) or antacids (1-2 hrs). Heavily tested.',
        'WHAT IT DEPLETES: Fat-soluble vitamins A, D, E, K. Bile is needed for fat absorption. No bile = no fat absorption = no fat-soluble vitamins. Monitor for deficiency signs.',
        'ALSO CAUSES CONSTIPATION: Ironic — it treats diarrhea but can overshoot into constipation. It\'s on the professor\'s 13-drug constipation list.',
        'WHAT TO TEACH: Mix powder with liquid (don\'t take dry — esophageal irritation). Take other meds on schedule around it. Report easy bruising (vitamin K depletion = bleeding risk).',
        'EXAM PAIR: Cholestyramine = longest drug separation (1 hr before / 4-6 hrs after). Sucralfate = 2 hrs. Antacids = 1-2 hrs. Probiotics + antibiotics = 2 hrs.'
      ]
    },
    {
      section: 'lifestyle',
      front: { icon: '\uD83D\uDEBD\uD83D\uDCCB', title: '13 Drugs That Cause Constipation', subtitle: 'Professor\'s full assessment list — know them ALL' },
      image: 'quiz3-gi-images/28_constipation_drug_list.png',
      notes: [
        '#1 OPIOID ANALGESICS — The #1 cause of drug-induced constipation. EVERY patient on opioids needs a bowel regimen (usually docusate + stimulant laxative). This is a nursing PRIORITY.',
        '#2-3 ANTACIDS: Aluminum hydroxide AND calcium carbonate both cause constipation. Magnesium is the opposite (diarrhea). Mnemonic: AlumiNUM = NUMbs the bowels.',
        '#4 ANTICHOLINERGICS — Block parasympathetic = decreased GI motility. Includes atropine, scopolamine, benztropine, oxybutynin, and many more. Huge drug class.',
        '#5 CALCIUM CHANNEL BLOCKERS — Especially verapamil. Smooth muscle relaxation includes the GI tract = slower motility.',
        '#6 CLOZAPINE — Atypical antipsychotic. Can cause life-threatening constipation/ileus. Unique among antipsychotics for severity.',
        '#7 DIURETICS — Fluid loss = harder, drier stools. Encourage fluid intake.',
        '#8 IRON SUPPLEMENTS — Classic. Also turns stool BLACK (don\'t confuse with GI bleeding). Take with vitamin C (increases absorption), take between meals.',
        '#9 PHENOTHIAZINES — Antipsychotics (prochlorperazine, chlorpromazine). Anticholinergic properties slow the gut.',
        '#10 CHOLESTYRAMINE/COLESTIPOL — Bile acid sequestrants. Binding bile = less water in colon.',
        '#11 SUCRALFATE — Contains aluminum. Same mechanism as aluminum antacids.',
        '#12 TRICYCLIC ANTIDEPRESSANTS — Amitriptyline, nortriptyline. Strong anticholinergic properties.',
        '#13 VINCRISTINE — Chemotherapy agent. Neurotoxicity affects GI nerve plexus = paralytic ileus.',
        'NURSING ASSESSMENT: Before giving ANY laxative, check what other drugs the patient is on. If they\'re on 2-3 constipating drugs, constipation is EXPECTED — you need prophylaxis, not just rescue.'
      ]
    },
  ]
};
