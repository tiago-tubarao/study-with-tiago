// ══════════════════════════════════════════════
// HINTS — One-line nudges for each question
// Loaded AFTER question files, BEFORE questions.js merge
// Attaches hints to existing questions without modifying the original files
// ══════════════════════════════════════════════

(function() {
  // Map: drugName -> { g: [hint1,hint2,hint3], y: [...], r: [...] }
  const HINTS = {

    // ═══ INSULINS ═══
    'Rapid-Acting Insulin (Lispro)': {
      g: [
        'When was the dose given and when does this insulin peak?',
        'Does this patient have a reason to eat in the morning?',
        'The insulin is already in the body — what happens if no food follows?',
      ],
      y: [
        'How soon before eating should rapid-acting be given?',
        'What defines hypoglycemia, and what\'s the first-line treatment for a conscious patient?',
        'What glucose level means you should NOT give more insulin?',
      ],
      r: [
        'Compare the onset times: which one starts working fastest?',
        'What happens if insulin works but there\'s no food to raise glucose?',
        'What should all insulins look like EXCEPT one?',
      ],
    },
    'Short-Acting (Regular) — ONLY IV insulin': {
      g: [
        'What must be above 3.3 before insulin can be started?',
        'IV insulin has a very short half-life — what happens if you stop it abruptly?',
        'Not all clear insulins are the same — what makes regular special?',
      ],
      y: [
        'Regular insulin has a slower onset than rapid-acting — how does that affect meal timing?',
        'How fast should glucose drop per hour in DKA treatment?',
        'What\'s the key timing difference between regular and rapid-acting?',
      ],
      r: [
        'Only ONE type of insulin can go through an IV line...',
        'What should regular insulin look like in the vial?',
        'When is IV insulin most commonly used in emergencies?',
      ],
    },
    'Intermediate (NPH) — ONLY cloudy': {
      g: [
        'Calculate: when was the NPH given, and what\'s the peak window (4-12h)?',
        'Once you\'ve drawn clear insulin, what happens if that syringe touches the NPH vial?',
        'What time does bedtime NPH peak if given at 9 PM?',
      ],
      y: [
        'Why does this insulin need to be rolled, not shaken?',
        'What makes NPH look different from every other insulin?',
        'NPH covers the background — what covers the meals?',
      ],
      r: [
        'Only one insulin has this appearance...',
        'The peak window for NPH is wide — what range?',
        'Why would a doctor prescribe bedtime insulin?',
      ],
    },
    'Long-Acting (Glargine) — NEVER mix': {
      g: [
        'What happens to glargine\'s pH if you mix it with another insulin?',
        'Is a glucose of 65 safe if it keeps happening every morning?',
        'How long is the patient unprotected if they miss a dose?',
      ],
      y: [
        'What\'s the ONE thing you should NEVER do with glargine?',
        'Why would a patient switch from NPH to glargine?',
        'Glargine is clear — but so is regular insulin. What\'s different about how it works?',
      ],
      r: [
        'Compare: which insulin has NO peak?',
        'How long does one dose of glargine last?',
        'Can you combine glargine with other insulins in one syringe?',
      ],
    },
    'Premixed 70/30 and 75/25': {
      g: [
        'If you can\'t adjust one component without changing the other, what\'s the limitation?',
        'In 70/30, which number is the mealtime portion?',
        'The bigger number always represents which component?',
      ],
      y: [
        'When during the day is premixed insulin typically given?',
        'Does premixed contain NPH? What does that mean for preparation?',
        'What happens if a patient skips the meal but takes the premixed dose?',
      ],
      r: [
        'In 70/30, what does the 70 refer to?',
        'Why does premixed insulin appear cloudy?',
        'What\'s the trade-off of using premixed vs. separate injections?',
      ],
    },
    'Mixing: Clear Before Cloudy': {
      g: [
        'If the syringe already has clear insulin and you inject into the NPH vial, what could contaminate what?',
        'Why does vial contamination matter for future doses?',
        'What\'s the correct order for injecting AIR into the vials?',
      ],
      y: [
        'What are you trying to protect by drawing clear first?',
        'If mixing 6 units regular + 18 units NPH, what\'s the total in the syringe?',
        'What does the "RN" mnemonic stand for?',
      ],
      r: [
        'Which type gets drawn into the syringe second?',
        'Which insulins CAN be mixed together?',
        'What is the cloudy insulin called?',
      ],
    },
    'Somogyi vs Dawn Phenomenon': {
      g: [
        'The 3 AM glucose tells you everything — is it high, low, or normal?',
        'Both have high morning glucose, but the treatments are OPPOSITE. Why?',
        'Why might glargine solve a problem that NPH causes?',
      ],
      y: [
        'What single test differentiates these two conditions?',
        'If the body went too low overnight, what does it do to compensate?',
        'What hormones naturally rise between 4-8 AM?',
      ],
      r: [
        'Both conditions share what morning finding?',
        'In Somogyi, is the 3 AM glucose high or low?',
        'Do these two conditions have the same treatment or different?',
      ],
    },

    // ═══ ORAL ANTIDIABETICS ═══
    'Metformin — 1st line T2DM': {
      g: [
        'Think about how long metformin needs to be out of the system around contrast dye...',
        'Chronic tingling in both feet — is this an acute emergency or a nutritional deficiency?',
        'What renal threshold makes metformin too dangerous to use?',
      ],
      y: [
        'Does metformin stimulate insulin release? What does that mean for hypo risk?',
        'Are GI effects from metformin dangerous or just uncomfortable?',
        'What organ clears metformin from the body?',
      ],
      r: [
        'How does metformin lower glucose without touching insulin?',
        'What\'s the rare but fatal adverse effect of metformin?',
        'What type of medical procedure requires holding metformin?',
      ],
    },
    'Sulfonylureas (all 5 named)': {
      g: [
        'Two things are happening: the drug forces insulin AND the alcohol blocks the liver\'s backup plan...',
        'Sulfa allergy + sulfonylurea — are these chemically related?',
        'In elderly patients, how long can glyburide\'s effects last?',
      ],
      y: [
        'This drug forces insulin release regardless of glucose level — what does that mean for safety?',
        'What happens when sulfonylureas meet alcohol?',
        'All sulfonylurea names share what ending?',
      ],
      r: [
        'What does "insulin secretagogue" mean?',
        'What word ending do all 5 drugs share?',
        'Does this drug class cause weight gain or weight loss?',
      ],
    },
    'Acarbose — GLUCOSE TABS ONLY': {
      g: [
        'The drug blocks sugar BREAKDOWN — so what kind of sugar can bypass that block entirely?',
        'Does acarbose alone actually cause hypoglycemia?',
        'GI symptoms with acarbose — is the drug working or failing?',
      ],
      y: [
        'When does this drug need to be in the gut — before, during, or after eating?',
        'What type of glucose spike does acarbose specifically target?',
        'Are flatulence and bloating dangerous or expected?',
      ],
      r: [
        'What enzyme does acarbose block?',
        'If regular sugar won\'t work for hypo, what WILL?',
        'What are the most common side effects?',
      ],
    },
    'SGLT-2 Inhibitors (-flozins)': {
      g: [
        'Can you have ketoacidosis even when blood glucose looks almost normal?',
        'What does a GFR of 28 mean for a drug that works in the kidneys?',
        'Why would you stop this drug days before surgery, not just the morning of?',
      ],
      y: [
        'Sugar in urine creates a breeding ground for what?',
        'If the drug makes you urinate more, is that a problem or the mechanism?',
        'Beyond glucose, what other measurements improve with SGLT-2 inhibitors?',
      ],
      r: [
        'Where in the body do SGLT-2 inhibitors work?',
        'What infections are common because of sugar in urine?',
        'What ending do all SGLT-2 drug names share?',
      ],
    },
    'GLP-1 Agonists (Semaglutide/Ozempic)': {
      g: [
        'Not all thyroid cancers are the same — which TYPE is the contraindication?',
        'In T1DM, are the beta cells functional or destroyed?',
        'Severe pain radiating to the BACK from the upper abdomen — what organ is behind the stomach?',
      ],
      y: [
        'Is nausea with GLP-1 drugs dangerous or expected?',
        'Is weight loss a side effect or a therapeutic benefit?',
        'How often is injectable semaglutide given?',
      ],
      r: [
        'What does the Black Box Warning involve?',
        'Why can\'t T1DM patients use this drug?',
        'How do GLP-1 agonists reduce appetite?',
      ],
    },
    'DPP-4 Inhibitors (Sitagliptin)': {
      g: [
        'Severe upper abdominal pain after fatty food, radiating to back — what does that pattern suggest?',
        'If metformin is always first-line, why would someone be on sitagliptin instead?',
        'When two drugs that lower glucose are combined, which one is the hypo culprit?',
      ],
      y: [
        'What makes DPP-4 unique compared to drugs that cause weight gain?',
        '"Glucose-dependent" insulin release — what does that protect against?',
        'DPP-4 and GLP-1 agonists share what risk?',
      ],
      r: [
        'What ending do DPP-4 drug names share?',
        'Does this drug cause weight gain, loss, or neither?',
        'What enzyme does this drug block, and what does that preserve?',
      ],
    },
    'Meglitinides (Repaglinide)': {
      g: [
        'No meal = no need for mealtime insulin stimulation. What\'s the rule?',
        'Two drugs that stimulate insulin together — is that safe?',
        'What makes this drug ideal for someone who eats at unpredictable times?',
      ],
      y: [
        'How soon before eating should this be taken?',
        'Compared to sulfonylureas, is the duration longer or shorter?',
        'Blood glucose is 72 and the patient is about to eat — is that a reason to hold?',
      ],
      r: [
        'What\'s the key patient teaching phrase for meglitinides?',
        'How do meglitinides lower blood glucose?',
        'Why is shorter duration an advantage?',
      ],
    },

    // ═══ EMERGENCIES ═══
    'Pramlintide — cut insulin by 50%': {
      g: [
        'The provider ordered full-dose mealtime insulin WITH pramlintide. Is that safe?',
        'Two problems at once: low glucose AND nausea. Which is life-threatening?',
        'Can pramlintide and insulin share a syringe?',
      ],
      y: [
        'What must happen to the mealtime insulin dose when starting pramlintide?',
        'What hormone does pramlintide mimic?',
        'Is decreased appetite a problem or an expected effect?',
      ],
      r: [
        'What\'s the #1 safety rule when starting pramlintide?',
        'Is pramlintide used alone or always with insulin?',
        'How does pramlintide slow glucose absorption?',
      ],
    },
    'Exenatide (GLP-1, T2DM only)': {
      g: [
        'Exenatide slows gastric emptying — what does that do to other oral medications?',
        'When switching between GLP-1 drugs, do you overlap or leave a gap?',
        'Persistent vomiting leads to what kidney problem?',
      ],
      y: [
        'When should the BID formulation be injected relative to meals?',
        'Is initial nausea a reason to stop the drug?',
        'Can exenatide be combined with metformin?',
      ],
      r: [
        'What drug class does exenatide belong to?',
        'Why is exenatide contraindicated in T1DM?',
        'What\'s the primary mechanism for weight loss?',
      ],
    },
    'DKA vs HHS (ketones = key)': {
      g: [
        'No ketones + normal pH — can it still be a diabetes emergency?',
        'What must be checked BEFORE starting the insulin drip?',
        'SGLT-2 inhibitor + ketones + glucose only 280 — what\'s happening?',
      ],
      y: [
        'What lab finding is present in DKA but absent in HHS?',
        'What causes the fruity breath smell in DKA?',
        'Does HHS develop suddenly or gradually?',
      ],
      r: [
        'Which diabetes type is most associated with DKA?',
        'What does HHS have that DKA doesn\'t in terms of glucose levels?',
        'What breathing pattern compensates for metabolic acidosis?',
      ],
    },
    'K+ ≥ 3.3 before insulin': {
      g: [
        'In acidosis, K+ shifts OUT of cells — so is the serum level showing true or false elevation?',
        'The K+ just dropped below 3.3 while on an insulin drip. What happens to the heart?',
        'F-K-I-D: what does each letter stand for in the treatment order?',
      ],
      y: [
        'What electrolyte MUST be checked before insulin in DKA?',
        'When glucose reaches ~250 during treatment, what gets added to the IV?',
        'Is K+ of 3.1 "close enough" to start insulin?',
      ],
      r: [
        'Does insulin push potassium into or out of cells?',
        'What K+ level is the minimum threshold before insulin?',
        'What\'s the FIRST treatment priority in DKA — fluids or insulin?',
      ],
    },
    'Glucagon — severe hypo rescue': {
      g: [
        'Glucagon needs glycogen to work. What conditions deplete glycogen stores?',
        'After glucagon works and the patient wakes up — is the crisis over?',
        'The patient is unconscious. Can you give orange juice?',
      ],
      y: [
        'When is glucagon the right choice vs. oral glucose?',
        'Why position on the side after glucagon?',
        'What organ does glucagon act on to release glucose?',
      ],
      r: [
        'What condition is glucagon used to treat?',
        'What routes can glucagon be given?',
        'Why the recovery position after administration?',
      ],
    },
    'Sick Day Rule': {
      g: [
        'T1DM + no food + no insulin for 8 hours = what emergency is developing?',
        'Glucose >240, ketones positive, can\'t keep fluids down — is this "call back later" or "go to the ED"?',
        'T2DM patient can\'t eat: which med has hypo risk and which doesn\'t?',
      ],
      y: [
        'Can a T1DM patient ever stop their insulin, even when not eating?',
        'What combination of findings means "call the provider immediately"?',
        'How often should a sick diabetic check their glucose?',
      ],
      r: [
        'Why is skipping insulin in T1DM dangerous even without eating?',
        'What should diabetic patients increase when sick?',
        'Is the sick day rule more critical in T1DM or T2DM?',
      ],
    },
    'Hypoglycemia (TIRED) + 15-15 Rule': {
      g: [
        'The patient can follow commands — does that change whether you use oral glucose or glucagon?',
        'Glucose went from 52 to 64 after treatment. Is 64 above the threshold?',
        'Fast-acting carbs raise glucose quickly but don\'t last — then what?',
      ],
      y: [
        '15 grams, 15 minutes — what happens after the recheck?',
        'What counts as 15g of fast-acting carbs?',
        'What does each letter in TIRED stand for?',
      ],
      r: [
        'What blood glucose number defines hypoglycemia?',
        'For a conscious patient with low blood sugar, what\'s the first thing you give?',
        'Sweating in a diabetic patient should make you think of what?',
      ],
    },
    'Beta-Blocker Masking': {
      g: [
        'HR is 68, no tremors, but diaphoretic — on metoprolol. Is the normal HR reassuring or deceptive?',
        'A T1DM patient is prescribed propranolol for migraines. What\'s the safety concern?',
        'Which warning sign survives beta-blockade because it uses a different nerve pathway?',
      ],
      y: [
        'Which type of nerve fiber controls sweating — adrenergic or cholinergic?',
        'If tachycardia is masked, what\'s left to warn the patient of low glucose?',
        'What should diabetic patients on beta-blockers do more frequently?',
      ],
      r: [
        'Do beta-blockers cause or mask hypoglycemia?',
        'Which hypo symptom is NOT blocked by beta-blockers?',
        'What should a diabetic on beta-blockers do if they notice unexplained sweating?',
      ],
    },

    // ═══ ENDOCRINE DRUG HINTS (17 drugs × 9 = 153 hints) ═══
  'Levothyroxine (Synthroid)': {
    g: [
      'TSH and thyroid hormone move in opposite directions.',
      'Narrow therapeutic index — monitor TSH every 6-8 weeks.',
      'TSH and thyroid hormone move in opposite directions.',
    ],
    y: [
      'Think about the 4S rule for this drug.',
      'Narrow therapeutic index — monitor TSH every 6-8 weeks.',
      'Narrow therapeutic index — monitor TSH every 6-8 weeks.',
    ],
    r: [
      'Empty stomach + consistent timing = key.',
      'Narrow therapeutic index — monitor TSH every 6-8 weeks.',
      'Narrow therapeutic index — monitor TSH every 6-8 weeks.',
    ],
  },
  'Methimazole (Tapazole)': {
    g: [
      'This is a hematologic emergency — what WBC-related crisis?',
      'Which trimester makes this drug unsafe?',
      'Agranulocytosis means dangerously low neutrophils.',
    ],
    y: [
      'Preferred antithyroid EXCEPT in one specific situation.',
      'Preferred antithyroid EXCEPT in one specific situation.',
      'Agranulocytosis means dangerously low neutrophils.',
    ],
    r: [
      'Which trimester makes this drug unsafe?',
      'Preferred antithyroid EXCEPT in one specific situation.',
      'Preferred antithyroid EXCEPT in one specific situation.',
    ],
  },
  'PTU (Propylthiouracil)': {
    g: [
      'PTU has a unique advantage no other antithyroid has.',
      'Blocks T4-to-T3 conversion — unique among antithyroids.',
      'Blocks T4-to-T3 conversion — unique among antithyroids.',
    ],
    y: [
      'PTU has a unique advantage no other antithyroid has.',
      'Blocks T4-to-T3 conversion — unique among antithyroids.',
      'PTU is for 1st trimester only — then switch.',
    ],
    r: [
      'Blocks T4-to-T3 conversion — unique among antithyroids.',
      'PTU is for 1st trimester only — then switch.',
      'PTU has a unique advantage no other antithyroid has.',
    ],
  },
  'Radioactive Iodine (I-131)': {
    g: [
      'ABSOLUTE contraindication — test before ANY dose.',
      'Expected outcome: hypothyroidism requiring lifelong levothyroxine.',
      'ABSOLUTE contraindication — test before ANY dose.',
    ],
    y: [
      'Expected outcome: hypothyroidism requiring lifelong levothyroxine.',
      'Expected outcome: hypothyroidism requiring lifelong levothyroxine.',
      'Expected outcome: hypothyroidism requiring lifelong levothyroxine.',
    ],
    r: [
      'Expected outcome: hypothyroidism requiring lifelong levothyroxine.',
      'Expected outcome: hypothyroidism requiring lifelong levothyroxine.',
      'Expected outcome: hypothyroidism requiring lifelong levothyroxine.',
    ],
  },
  'Lugol\'s Solution (Potassium Iodide)': {
    g: [
      'Iodine must come AFTER PTU — timing is critical.',
      'Pre-surgical prep: reduces thyroid vascularity.',
      'Pre-surgical prep: reduces thyroid vascularity.',
    ],
    y: [
      'Pre-surgical prep: reduces thyroid vascularity.',
      'Pre-surgical prep: reduces thyroid vascularity.',
      'Iodine must come AFTER PTU — timing is critical.',
    ],
    r: [
      'Iodine stains teeth — protect them during administration.',
      'Pre-surgical prep: reduces thyroid vascularity.',
      'Iodine must come AFTER PTU — timing is critical.',
    ],
  },
  'Iodism (Iodine Toxicity)': {
    g: [
      'Metallic taste is the earliest warning sign.',
      'Metallic taste is the earliest warning sign.',
      'What neutralizes excess iodine?',
    ],
    y: [
      'Toxicity signs: metallic taste, parotid swelling, burning mouth.',
      'What neutralizes excess iodine?',
      'Toxicity signs: metallic taste, parotid swelling, burning mouth.',
    ],
    r: [
      'Toxicity signs: metallic taste, parotid swelling, burning mouth.',
      'Toxicity signs: metallic taste, parotid swelling, burning mouth.',
      'What neutralizes excess iodine?',
    ],
  },
  'Sodium Thiosulfate': {
    g: [
      'Cyanide protocol: hydroxocobalamin first, then thiosulfate.',
      'Chemoprotective — reduces nephrotoxicity.',
      'Three uses: cyanide, iodism, cisplatin protection.',
    ],
    y: [
      'Cyanide protocol: hydroxocobalamin first, then thiosulfate.',
      'Three uses: cyanide, iodism, cisplatin protection.',
      'Three uses: cyanide, iodism, cisplatin protection.',
    ],
    r: [
      'Three uses: cyanide, iodism, cisplatin protection.',
      'Three uses: cyanide, iodism, cisplatin protection.',
      'Cyanide protocol: hydroxocobalamin first, then thiosulfate.',
    ],
  },
  'Somatropin (Growth Hormone)': {
    g: [
      'SCFE is a known complication in growing children.',
      'CI: active malignancy, diabetic retinopathy.',
      'IGF-1, not GH, is the monitoring marker.',
    ],
    y: [
      'CI: active malignancy, diabetic retinopathy.',
      'CI: active malignancy, diabetic retinopathy.',
      'CI: active malignancy, diabetic retinopathy.',
    ],
    r: [
      'IGF-1, not GH, is the monitoring marker.',
      'CI: active malignancy, diabetic retinopathy.',
      'CI: active malignancy, diabetic retinopathy.',
    ],
  },
  'Vasopressin (ADH)': {
    g: [
      'ADH: 3 uses — DI, septic shock, varices.',
      'Vasopressin causes vasoconstriction in shock.',
      'ADH: 3 uses — DI, septic shock, varices.',
    ],
    y: [
      'ADH: 3 uses — DI, septic shock, varices.',
      'ADH: 3 uses — DI, septic shock, varices.',
      'ADH: 3 uses — DI, septic shock, varices.',
    ],
    r: [
      'ADH: 3 uses — DI, septic shock, varices.',
      'ADH: 3 uses — DI, septic shock, varices.',
      'Too much ADH = too much water retention.',
    ],
  },
  'Desmopressin (DDAVP)': {
    g: [
      'DDAVP releases stored clotting factors.',
      'Congestion affects intranasal absorption.',
      'Fluid restriction is critical with this indication.',
    ],
    y: [
      'Congestion affects intranasal absorption.',
      'DDAVP releases stored clotting factors.',
      '4 uses: DI, enuresis, hemophilia A, vWD type 1.',
    ],
    r: [
      '4 uses: DI, enuresis, hemophilia A, vWD type 1.',
      '4 uses: DI, enuresis, hemophilia A, vWD type 1.',
      '4 uses: DI, enuresis, hemophilia A, vWD type 1.',
    ],
  },
  'Octreotide (Sandostatin)': {
    g: [
      'Suppresses GH release from the pituitary.',
      'Suppresses GH release from the pituitary.',
      'Baseline gallbladder ultrasound before starting.',
    ],
    y: [
      'Baseline gallbladder ultrasound before starting.',
      'Baseline gallbladder ultrasound before starting.',
      'Somatostatin analogs slow gallbladder motility.',
    ],
    r: [
      'Baseline gallbladder ultrasound before starting.',
      'Baseline gallbladder ultrasound before starting.',
      'Baseline gallbladder ultrasound before starting.',
    ],
  },
  'Lanreotide (Somatuline)': {
    g: [
      'Deep SubQ in the gluteal area — not standard sites.',
      'Same class and risks as octreotide.',
      'Same class and risks as octreotide.',
    ],
    y: [
      'Deep SubQ in the gluteal area — not standard sites.',
      'Deep SubQ in the gluteal area — not standard sites.',
      'Same class and risks as octreotide.',
    ],
    r: [
      'Same class and risks as octreotide.',
      'Same class and risks as octreotide.',
      'Same class and risks as octreotide.',
    ],
  },
  'Pegvisomant (Somavert)': {
    g: [
      'GH receptor antagonist — monitor IGF-1, not GH.',
      'Monitor IGF-1, NOT GH — that is the key.',
      'Blocks receptors peripherally — does NOT affect the tumor.',
    ],
    y: [
      'GH receptor antagonist — monitor IGF-1, not GH.',
      'GH receptor antagonist — monitor IGF-1, not GH.',
      'GH receptor antagonist — monitor IGF-1, not GH.',
    ],
    r: [
      'GH receptor antagonist — monitor IGF-1, not GH.',
      'GH receptor antagonist — monitor IGF-1, not GH.',
      'GH receptor antagonist — monitor IGF-1, not GH.',
    ],
  },
  'Hydrocortisone': {
    g: [
      'NEVER stop abruptly — taper always.',
      'NEVER stop abruptly — taper always.',
      'NEVER stop abruptly — taper always.',
    ],
    y: [
      'NEVER stop abruptly — taper always.',
      'NEVER stop abruptly — taper always.',
      'NEVER stop abruptly — taper always.',
    ],
    r: [
      'NEVER stop abruptly — taper always.',
      'Abrupt withdrawal = adrenal crisis = cardiovascular collapse.',
      'NEVER stop abruptly — taper always.',
    ],
  },
  'Glucocorticoids (Potency Ladder)': {
    g: [
      'Potency ladder: 1x → 4x → 5x → 25x.',
      'Potency ladder: 1x → 4x → 5x → 25x.',
      'Higher potency = lower dose needed for same effect.',
    ],
    y: [
      'Potency ladder: 1x → 4x → 5x → 25x.',
      'Potency ladder: 1x → 4x → 5x → 25x.',
      'Potency ladder: 1x → 4x → 5x → 25x.',
    ],
    r: [
      'Higher potency = lower dose needed for same effect.',
      'Potency ladder: 1x → 4x → 5x → 25x.',
      'HPA axis suppression requires gradual withdrawal.',
    ],
  },
  'Dexamethasone': {
    g: [
      '25x potency makes it ideal for reducing brain swelling.',
      'Given to the MOTHER, not the baby.',
      'Diagnostic test: normal cortisol suppresses, Cushing does not.',
    ],
    y: [
      '3 uses: Cushing dx, fetal lungs, cerebral edema.',
      '25x potency makes it ideal for reducing brain swelling.',
      '25x potency makes it ideal for reducing brain swelling.',
    ],
    r: [
      '3 uses: Cushing dx, fetal lungs, cerebral edema.',
      '3 uses: Cushing dx, fetal lungs, cerebral edema.',
      '3 uses: Cushing dx, fetal lungs, cerebral edema.',
    ],
  },
  'Fludrocortisone (Florinef)': {
    g: [
      'Mineralocorticoid: retains Na+, excretes K+.',
      'Fluid retention is the key monitoring concern.',
      'Mineralocorticoid: retains Na+, excretes K+.',
    ],
    y: [
      'Mineralocorticoid only — NOT a glucocorticoid.',
      'Addison needs BOTH glucocorticoid AND mineralocorticoid.',
      'Mineralocorticoid only — NOT a glucocorticoid.',
    ],
    r: [
      'Mineralocorticoid only — NOT a glucocorticoid.',
      'Mineralocorticoid only — NOT a glucocorticoid.',
      'Mineralocorticoid only — NOT a glucocorticoid.',
    ],
  },
// ═══ HEMATOLOGY DRUG HINTS (15 drugs × 9 = 135 hints) ═══
    'Heparin (Unfractionated)': {
      g: [
        'aPTT for heparin, PT/INR for warfarin.',
        'HIT is paradoxically thrombotic, not hemorrhagic.',
        'HIT is paradoxically thrombotic, not hemorrhagic.',
      ],
      y: [
        'Think about the monitoring parameter specific to this drug.',
        'Think about the monitoring parameter specific to this drug.',
        'aPTT for heparin, PT/INR for warfarin.',
      ],
      r: [
        'aPTT for heparin, PT/INR for warfarin.',
        'Match the antidote to the anticoagulant — PIVA mnemonic.',
        'Think about the monitoring parameter specific to this drug.',
      ],
    },
    'Enoxaparin (Lovenox)': {
      g: [
        'SubQ only — never rub the injection site.',
        'SubQ only — never rub the injection site.',
        'SubQ only — never rub the injection site.',
      ],
      y: [
        'SubQ only — never rub the injection site.',
        'Weight-based dosing, anti-Xa monitoring if needed.',
        'Weight-based dosing, anti-Xa monitoring if needed.',
      ],
      r: [
        'Weight-based dosing, anti-Xa monitoring if needed.',
        'Weight-based dosing, anti-Xa monitoring if needed.',
        'Weight-based dosing, anti-Xa monitoring if needed.',
      ],
    },
    'Warfarin (Coumadin)': {
      g: [
        'Active bleeding needs immediate reversal — which is faster?',
        'Active bleeding needs immediate reversal — which is faster?',
        'Active bleeding needs immediate reversal — which is faster?',
      ],
      y: [
        'Consistency is the key — not avoidance.',
        'PT/INR monitoring — know the goal ranges.',
        'Active bleeding needs immediate reversal — which is faster?',
      ],
      r: [
        'PT/INR monitoring — know the goal ranges.',
        'Category X — what alternative is safe in pregnancy?',
        'Active bleeding needs immediate reversal — which is faster?',
      ],
    },
    'Dabigatran (Pradaxa)': {
      g: [
        'Direct thrombin inhibitor — different antidote than Xa inhibitors.',
        'Direct thrombin inhibitor — different antidote than Xa inhibitors.',
        'Direct thrombin inhibitor — different antidote than Xa inhibitors.',
      ],
      y: [
        'Direct thrombin inhibitor — different antidote than Xa inhibitors.',
        'Direct thrombin inhibitor — different antidote than Xa inhibitors.',
        'Direct thrombin inhibitor — different antidote than Xa inhibitors.',
      ],
      r: [
        'This DOAC has its own specific reversal agent.',
        'Direct thrombin inhibitor — different antidote than Xa inhibitors.',
        'Direct thrombin inhibitor — different antidote than Xa inhibitors.',
      ],
    },
    'Rivaroxaban (Xarelto)': {
      g: [
        'Factor Xa inhibitor — shares an antidote with apixaban.',
        'Factor Xa inhibitor — shares an antidote with apixaban.',
        'Factor Xa inhibitor — shares an antidote with apixaban.',
      ],
      y: [
        'Factor Xa inhibitor — shares an antidote with apixaban.',
        'Factor Xa inhibitor — shares an antidote with apixaban.',
        'Factor Xa inhibitor — shares an antidote with apixaban.',
      ],
      r: [
        'Factor Xa inhibitor — shares an antidote with apixaban.',
        'Factor Xa inhibitor — shares an antidote with apixaban.',
        'Factor Xa inhibitor — shares an antidote with apixaban.',
      ],
    },
    'Apixaban (Eliquis)': {
      g: [
        'Factor Xa inhibitor — andexanet alfa reverses it.',
        'Factor Xa inhibitor — andexanet alfa reverses it.',
        'Factor Xa inhibitor — andexanet alfa reverses it.',
      ],
      y: [
        'Factor Xa inhibitor — andexanet alfa reverses it.',
        'Factor Xa inhibitor — andexanet alfa reverses it.',
        'Factor Xa inhibitor — andexanet alfa reverses it.',
      ],
      r: [
        'Factor Xa inhibitor — andexanet alfa reverses it.',
        'Factor Xa inhibitor — andexanet alfa reverses it.',
        'Factor Xa inhibitor — andexanet alfa reverses it.',
      ],
    },
    'Aspirin (Low-Dose 81 mg)': {
      g: [
        'Children + viral illness + aspirin = fatal syndrome.',
        'Irreversible effect — lasts the platelet lifespan (7-10 days).',
        'Irreversible effect — lasts the platelet lifespan (7-10 days).',
      ],
      y: [
        'Irreversible effect — lasts the platelet lifespan (7-10 days).',
        'Irreversible effect — lasts the platelet lifespan (7-10 days).',
        'Children + viral illness + aspirin = fatal syndrome.',
      ],
      r: [
        'Irreversible effect — lasts the platelet lifespan (7-10 days).',
        'Irreversible effect — lasts the platelet lifespan (7-10 days).',
        'Irreversible effect — lasts the platelet lifespan (7-10 days).',
      ],
    },
    'Clopidogrel (Plavix)': {
      g: [
        'ADP receptor blocker — irreversible, hold before surgery.',
        'ADP receptor blocker — irreversible, hold before surgery.',
        'Genetic variation affects drug activation.',
      ],
      y: [
        'ADP receptor blocker — irreversible, hold before surgery.',
        'ADP receptor blocker — irreversible, hold before surgery.',
        'ADP receptor blocker — irreversible, hold before surgery.',
      ],
      r: [
        'ADP receptor blocker — irreversible, hold before surgery.',
        'ADP receptor blocker — irreversible, hold before surgery.',
        'ADP receptor blocker — irreversible, hold before surgery.',
      ],
    },
    'Alteplase (tPA)': {
      g: [
        'Time is brain — what is the maximum window?',
        'Active bleeding and recent surgery are absolute CIs.',
        'Time is brain — what is the maximum window?',
      ],
      y: [
        'Time is brain — what is the maximum window?',
        'Dissolves clots (unlike anticoagulants which only prevent them).',
        'Dissolves clots (unlike anticoagulants which only prevent them).',
      ],
      r: [
        'Dissolves clots (unlike anticoagulants which only prevent them).',
        'Time is brain — what is the maximum window?',
        'Dissolves clots (unlike anticoagulants which only prevent them).',
      ],
    },
    'Epoetin Alfa (Procrit/Epogen)': {
      g: [
        'There is a ceiling — going too high causes clots.',
        'There is a ceiling — going too high causes clots.',
        'Stimulates red blood cells — monitor Hgb and BP.',
      ],
      y: [
        'Stimulates red blood cells — monitor Hgb and BP.',
        'Stimulates red blood cells — monitor Hgb and BP.',
        'Stimulates red blood cells — monitor Hgb and BP.',
      ],
      r: [
        'Stimulates red blood cells — monitor Hgb and BP.',
        'There is a ceiling — going too high causes clots.',
        'Stimulates red blood cells — monitor Hgb and BP.',
      ],
    },
    'Filgrastim (Neupogen)': {
      g: [
        '24 hours after chemo, stop 24 hours before next dose.',
        '24 hours after chemo, stop 24 hours before next dose.',
        'Stimulates neutrophils — bone pain is the classic side effect.',
      ],
      y: [
        'Stimulates neutrophils — bone pain is the classic side effect.',
        '24 hours after chemo, stop 24 hours before next dose.',
        'Stimulates neutrophils — bone pain is the classic side effect.',
      ],
      r: [
        'Stimulates neutrophils — bone pain is the classic side effect.',
        'Stimulates neutrophils — bone pain is the classic side effect.',
        '24 hours after chemo, stop 24 hours before next dose.',
      ],
    },
    'Oprelvekin (Neumega)': {
      g: [
        'Fluid retention is the major concern with this drug.',
        'Stimulates platelets — watch for fluid retention and A-fib.',
        'Stimulates platelets — watch for fluid retention and A-fib.',
      ],
      y: [
        'Stimulates platelets — watch for fluid retention and A-fib.',
        'Stimulates platelets — watch for fluid retention and A-fib.',
        'Stimulates platelets — watch for fluid retention and A-fib.',
      ],
      r: [
        'Stimulates platelets — watch for fluid retention and A-fib.',
        'Stimulates platelets — watch for fluid retention and A-fib.',
        'Stimulates platelets — watch for fluid retention and A-fib.',
      ],
    },
    'Sargramostim (Leukine)': {
      g: [
        'Broader than G-CSF — stimulates granulocytes AND monocytes.',
        'Broader than G-CSF — stimulates granulocytes AND monocytes.',
        'Broader than G-CSF — stimulates granulocytes AND monocytes.',
      ],
      y: [
        'Broader than G-CSF — stimulates granulocytes AND monocytes.',
        'Broader than G-CSF — stimulates granulocytes AND monocytes.',
        'Broader than G-CSF — stimulates granulocytes AND monocytes.',
      ],
      r: [
        'Broader than G-CSF — stimulates granulocytes AND monocytes.',
        'Broader than G-CSF — stimulates granulocytes AND monocytes.',
        'Broader than G-CSF — stimulates granulocytes AND monocytes.',
      ],
    },
    'Cyclosporine (Sandimmune/Neoral)': {
      g: [
        'Nephrotoxicity is the #1 concern — monitor BUN/Cr.',
        'A common food interaction increases drug levels.',
        'Nephrotoxicity is the #1 concern — monitor BUN/Cr.',
      ],
      y: [
        'Unique side effect not seen with tacrolimus.',
        'Nephrotoxicity is the #1 concern — monitor BUN/Cr.',
        'Nephrotoxicity is the #1 concern — monitor BUN/Cr.',
      ],
      r: [
        'Nephrotoxicity is the #1 concern — monitor BUN/Cr.',
        'A common food interaction increases drug levels.',
        'Nephrotoxicity is the #1 concern — monitor BUN/Cr.',
      ],
    },
    'Tacrolimus (Prograf)': {
      g: [
        'Neurotoxicity distinguishes this from cyclosporine.',
        'This drug can cause new-onset diabetes.',
        'Nephrotoxicity + neurotoxicity — monitor trough levels.',
      ],
      y: [
        'Nephrotoxicity + neurotoxicity — monitor trough levels.',
        'Nephrotoxicity + neurotoxicity — monitor trough levels.',
        'This drug can cause new-onset diabetes.',
      ],
      r: [
        'Nephrotoxicity + neurotoxicity — monitor trough levels.',
        'Nephrotoxicity + neurotoxicity — monitor trough levels.',
        'Nephrotoxicity + neurotoxicity — monitor trough levels.',
      ],
    },
  };


  // Attach hints to existing DRUG_DEEP entries
  function attachHints(deepObj) {
    if (!deepObj) return;
    Object.keys(HINTS).forEach(drugName => {
      if (deepObj[drugName] && deepObj[drugName].questions) {
        ['g', 'y', 'r'].forEach(level => {
          if (deepObj[drugName].questions[level] && HINTS[drugName][level]) {
            deepObj[drugName].questions[level].forEach((q, i) => {
              if (HINTS[drugName][level][i] && !q.hint) {
                q.hint = HINTS[drugName][level][i];
              }
            });
          }
        });
      }
    });
  }

  // Run after all question files load
  if (window.DRUG_DEEP_INSULINS) attachHints(window.DRUG_DEEP_INSULINS);
  if (window.DRUG_DEEP_ORALS) attachHints(window.DRUG_DEEP_ORALS);
  if (window.DRUG_DEEP_EMERGENCIES) attachHints(window.DRUG_DEEP_EMERGENCIES);
  if (window.DRUG_DEEP_ENDOCRINE) attachHints(window.DRUG_DEEP_ENDOCRINE);
  if (window.DRUG_DEEP_HEMATOLOGY) attachHints(window.DRUG_DEEP_HEMATOLOGY);
})();
