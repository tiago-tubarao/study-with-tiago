// ══════════════════════════════════════════════
// ADULT HEALTH — Endocrine (Thyroid, Pituitary, Adrenal) Questions
// Source: nurs327_exam3_endocrine_vA.js + nurs327_exam3_questions_vA.js
// ══════════════════════════════════════════════

window.DRUG_DEEP_AH_ENDOCRINE = {

  'Addison\'s Disease': {
    details: [
      'Primary adrenal insufficiency — decreased cortisol AND aldosterone',
      'Electrolytes: LOW sodium (Na+ wasting), HIGH potassium (K+ retention) — opposite of Cushing\'s',
      'Hyperpigmentation (bronzed skin, dark knuckles/palms) — pathognomonic for PRIMARY Addison\'s',
      'Caused by elevated ACTH stimulating melanocyte-stimulating hormone',
      'Orthostatic hypotension from volume depletion (aldosterone deficiency)',
      'Treatment: lifelong glucocorticoid (hydrocortisone) + mineralocorticoid (fludrocortisone) replacement',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with Addison\'s disease who ran out of hydrocortisone 2 days ago presents with: BP 68/40, HR 128, temp 103.1°F, glucose 52 mg/dL, confusion. Which combination of interventions is the PRIORITY?',
          options: [
            'Oral fludrocortisone, IV LR, acetaminophen for fever',
            'IV hydrocortisone 100 mg bolus, IV normal saline with dextrose, blood cultures before antibiotics',
            'IV dexamethasone, fluid restriction, insulin for the glucose level',
            'IV levothyroxine, passive rewarming, oral hydrocortisone',
          ],
          correct: 1,
          rationale: 'This is Addisonian crisis triggered by infection + abrupt steroid cessation. Treatment triad: (1) IV hydrocortisone 100mg bolus (emergency steroid replacement), (2) IV NS with dextrose/D5NS (volume resuscitation + correct hypoglycemia), (3) blood cultures before antibiotics (investigate the trigger). ORAL medications are inappropriate — patient is confused and in shock. Fluid RESTRICTION is for SIADH, not adrenal crisis. The glucose of 52 is HYPOglycemia — insulin would be fatal. Option D describes myxedema coma treatment.',
        },
      ],
      y: [
        {
          stem: 'A patient presents with chronic fatigue, weight loss, darkened skin on knuckles and palms, and BP 88/56 sitting, 72/48 standing. Which lab finding does the nurse expect?',
          options: [
            'Serum sodium 148 mEq/L and potassium 3.2 mEq/L',
            'Serum sodium 128 mEq/L and potassium 5.8 mEq/L',
            'Serum sodium 140 mEq/L and potassium 4.0 mEq/L',
            'Serum sodium 150 mEq/L and potassium 5.6 mEq/L',
          ],
          correct: 1,
          rationale: 'Addison\'s disease: without aldosterone, kidneys cannot retain sodium or excrete potassium → hyponatremia + hyperkalemia. Hyperpigmentation + orthostatic hypotension + fatigue confirm adrenal insufficiency. Option A (high Na+, low K+) is the OPPOSITE — that\'s Cushing\'s/hyperaldosteronism. Normal values (C) don\'t match the clinical picture.',
        },
      ],
      r: [
        {
          stem: 'A patient with Addison\'s disease asks why they must never abruptly stop taking hydrocortisone. The nurse explains:',
          options: [
            '"Your body will produce too much cortisol if you stop suddenly."',
            '"Your adrenal glands cannot produce cortisol on their own — stopping suddenly can cause a life-threatening crisis."',
            '"Hydrocortisone is addictive and must be weaned slowly."',
            '"Stopping suddenly causes your blood pressure to become too high."',
          ],
          correct: 1,
          rationale: 'In Addison\'s disease, the adrenal glands are destroyed and cannot produce cortisol. Hydrocortisone replaces what the body cannot make. Abruptly stopping causes Addisonian crisis — severe hypotension, hypoglycemia, hyperkalemia, and potentially cardiovascular collapse. The medication is not addictive — it is a necessary hormone replacement, like insulin in type 1 diabetes.',
        },
      ],
    },
  },

  'Cushing\'s Syndrome': {
    details: [
      'Cortisol EXCESS — from exogenous steroids (most common) or adrenal/pituitary tumor',
      'Classic signs: moon face, truncal obesity, buffalo hump, purple striae, thin skin, easy bruising',
      'Electrolytes: HIGH sodium (retention), LOW potassium (wasting) — opposite of Addison\'s',
      'Hyperglycemia (cortisol is counter-regulatory), immunosuppression, osteoporosis',
      'Diagnosis: overnight dexamethasone suppression test — cortisol should drop below 5 mcg/dL',
      'If cortisol stays HIGH after dexamethasone → abnormal (positive for Cushing\'s)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient\'s overnight dexamethasone suppression test shows morning cortisol of 22 mcg/dL. How should the nurse interpret this?',
          options: [
            'Normal result — Cushing\'s ruled out',
            'Cortisol not suppressed — abnormal result supporting Cushing\'s',
            'Repeat test — dexamethasone interferes with cortisol assay',
            'Confirms Addison\'s disease',
          ],
          correct: 1,
          rationale: 'Normally, exogenous dexamethasone suppresses ACTH via negative feedback, dropping morning cortisol below 5 mcg/dL. In Cushing\'s, the cortisol source (tumor or ectopic ACTH) does not respond to feedback — cortisol stays HIGH. A result of 22 mcg/dL (well above 5) = cortisol was NOT suppressed, supporting Cushing\'s diagnosis. The test evaluates whether cortisol CAN be suppressed, not just whether it is in normal range.',
        },
      ],
      y: [
        {
          stem: 'A patient with Cushing\'s syndrome on long-term prednisone gets a cold. They ask if they should reduce their prednisone dose. The nurse should respond:',
          options: [
            '"Yes, lower your dose to reduce side effects during illness."',
            '"No — during illness you may actually need to INCREASE your dose (stress dosing). Call your provider."',
            '"Stop the prednisone until the cold resolves."',
            '"It doesn\'t matter — prednisone has no effect on how your body handles illness."',
          ],
          correct: 1,
          rationale: 'During illness or stress, the body normally increases cortisol production. Patients on chronic steroids have suppressed adrenal glands that cannot mount this response. DECREASING the dose during illness could precipitate adrenal crisis. Patients may need STRESS DOSING (increased dose) during illness, surgery, or trauma. Never stop steroids abruptly — this can cause life-threatening adrenal insufficiency.',
        },
      ],
      r: [
        {
          stem: 'Which set of findings is MOST consistent with Cushing\'s syndrome?',
          options: [
            'Weight loss, hypotension, hyperpigmentation',
            'Moon face, truncal obesity, purple striae, hyperglycemia',
            'Exophthalmos, tachycardia, heat intolerance',
            'Tetany, Chvostek\'s sign, Trousseau\'s sign',
          ],
          correct: 1,
          rationale: 'Moon face, truncal obesity, buffalo hump, and purple striae are classic Cushing\'s signs from cortisol excess. Hyperglycemia occurs because cortisol is a counter-regulatory hormone. Option A describes Addison\'s (cortisol deficiency). Option C describes hyperthyroidism/Graves\'. Option D describes hypocalcemia/hypoparathyroidism.',
        },
      ],
    },
  },

  'SIADH vs Diabetes Insipidus': {
    details: [
      'SIADH: too much ADH → water retention → dilutional hyponatremia, concentrated urine, LOW urine output',
      'DI: too little ADH → water loss → hypernatremia, dilute urine (SG 1.001-1.005), HIGH urine output',
      'SIADH treatment: FLUID RESTRICTION (500-1000 mL/day)',
      'DI treatment: desmopressin (DDAVP) — synthetic ADH replacement',
      'NEVER give DDAVP for SIADH (already has too much ADH) or fluids for SIADH (worsens dilution)',
      'Central DI: head trauma, pituitary surgery. Nephrogenic DI: kidneys don\'t respond to ADH',
    ],
    questions: {
      g: [
        {
          stem: 'A patient 48 hours after head injury has urine output of 450 mL/hr for 3 hours, urine SG 1.002, and extreme thirst. Which serum lab result does the nurse anticipate?',
          options: [
            'Sodium 122 mEq/L and osmolality 260 mOsm/kg',
            'Sodium 152 mEq/L and osmolality 310 mOsm/kg',
            'Sodium 138 mEq/L and osmolality 285 mOsm/kg',
            'Sodium 130 mEq/L and osmolality 295 mOsm/kg',
          ],
          correct: 1,
          rationale: 'This is central diabetes insipidus (DI) from pituitary damage after head injury. Without ADH, kidneys cannot concentrate urine — massive dilute output (SG 1.001-1.005). As water is lost, blood concentrates: HYPERnatremia (>145) and HIGH osmolality (>300). SIADH would show the OPPOSITE: low sodium, low osmolality, high urine SG, low urine output.',
        },
        {
          stem: 'A patient with SIADH has sodium of 126 mEq/L. Which intervention is the PRIMARY treatment?',
          options: [
            'Encourage PO fluids to 3L/day',
            'Fluid restriction 500-1000 mL/day',
            'Desmopressin (DDAVP) intranasal',
            'Normal saline 250 mL/hr IV',
          ],
          correct: 1,
          rationale: 'SIADH = excess ADH = water retention = dilutional hyponatremia. Treatment: RESTRICT fluids to let sodium concentration normalize. Encouraging fluids would WORSEN the dilution. DDAVP is synthetic ADH — giving MORE ADH to a patient with ADH excess would be dangerous. Normal saline at high rate is not primary treatment; if sodium is critically low with seizures, 3% hypertonic saline is used, not NS.',
        },
      ],
      y: [
        {
          stem: 'Which findings correctly differentiate SIADH from DI?',
          options: [
            'SIADH: high urine output, dilute urine. DI: low urine output, concentrated urine.',
            'SIADH: low sodium, concentrated urine, fluid restriction. DI: high sodium, dilute urine, give DDAVP.',
            'Both conditions present identically and require the same treatment.',
            'SIADH: hypernatremia. DI: hyponatremia.',
          ],
          correct: 1,
          rationale: 'SIADH and DI are OPPOSITES. SIADH (too much ADH): retains water → low sodium, concentrated urine, low output → treat with fluid restriction. DI (too little ADH): loses water → high sodium, dilute urine, massive output → treat with DDAVP (synthetic ADH). Remember: SIADH = Saturated (fluid overloaded). DI = Dry (dehydrated).',
        },
      ],
      r: [
        {
          stem: 'A patient diagnosed with diabetes insipidus produces 6 liters of dilute urine per day and is extremely thirsty. The nurse expects the treatment to include:',
          options: [
            'Fluid restriction and diuretics',
            'Desmopressin (DDAVP) to replace missing ADH',
            'Increased sodium intake',
            'Corticosteroid replacement therapy',
          ],
          correct: 1,
          rationale: 'DI is caused by insufficient ADH (antidiuretic hormone). DDAVP (desmopressin) is synthetic ADH that replaces what the body cannot produce, allowing the kidneys to concentrate urine and reduce output. Fluid restriction would be dangerous in DI — the patient is already dehydrated from massive water loss. The patient should be encouraged to drink to match output until DDAVP takes effect.',
        },
      ],
    },
  },

  'Hypothyroidism / Levothyroxine': {
    details: [
      'Signs: fatigue, weight gain, cold intolerance, constipation, bradycardia, dry skin, hair loss',
      'Labs: TSH HIGH (pituitary screaming for more thyroid hormone), T4 LOW',
      'Treatment: levothyroxine (Synthroid) — take on EMPTY stomach, 30-60 min before breakfast',
      'Avoid: calcium, iron, antacids within 4 hours (impair absorption)',
      'Takes 6-8 weeks to see full effect — monitor TSH at 6-week intervals',
      'Myxedema coma: severe hypothyroidism → hypothermia, bradycardia, LOC — medical emergency',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with hypothyroidism is found unresponsive. Vitals: temp 93.2°F, HR 42, RR 8, BP 78/50. Myxedema coma is diagnosed. Which action should the nurse plan FIRST?',
          options: [
            'Active rewarming with heating blankets',
            'Levothyroxine 200 mcg PO via NGT',
            'IV levothyroxine + prepare for intubation',
            'IV propranolol for bradycardia',
          ],
          correct: 2,
          rationale: 'Myxedema coma requires IV levothyroxine (oral absorption unreliable due to paralytic ileus) and airway support (RR 8 = impending respiratory failure). ACTIVE rewarming is CONTRAINDICATED — causes peripheral vasodilation and cardiovascular collapse. Use PASSIVE rewarming only. Propranolol (beta-blocker) would WORSEN bradycardia — beta-blockers treat HYPERthyroidism, not hypothyroidism.',
        },
      ],
      y: [
        {
          stem: 'A patient on levothyroxine for 8 weeks shows: TSH 2.1 mIU/L, improved energy, 5-lb weight loss. Which interpretation is correct?',
          options: [
            'The medication dose is too high — reduce it',
            'The medication is working effectively at the correct dose',
            'The patient needs a higher dose — TSH should be zero',
            'These results are unrelated to levothyroxine therapy',
          ],
          correct: 1,
          rationale: 'TSH 2.1 is within normal range (0.5-4.5), energy is improved, and moderate weight loss reflects normalized metabolism. These are signs of effective therapy. TSH should NOT be zero — that would indicate overtreatment. Reducing the dose would cause symptoms to return. The gradual improvement over 6-8 weeks is the expected therapeutic timeline.',
        },
      ],
      r: [
        {
          stem: 'A nurse is teaching a patient about taking levothyroxine. Which instruction is MOST important?',
          options: [
            'Take it with a full meal to prevent stomach upset',
            'Take it on an empty stomach, 30-60 minutes before breakfast',
            'Take it at bedtime with a glass of milk',
            'Take it at any time of day — timing does not matter',
          ],
          correct: 1,
          rationale: 'Levothyroxine must be taken on an empty stomach (30-60 min before eating) for optimal absorption. Food, calcium, iron, and antacids all significantly reduce absorption. Milk contains calcium, which binds levothyroxine. Consistent timing each morning is important for stable thyroid hormone levels. Some patients may take it at bedtime (at least 3 hours after eating), but morning empty stomach is the standard instruction.',
        },
      ],
    },
  },

  'Hyperthyroidism / Graves\' Disease': {
    details: [
      'Signs: weight loss, heat intolerance, tachycardia, tremors, anxiety, exophthalmos (Graves\')',
      'Labs: TSH LOW (suppressed), T3/T4 HIGH',
      'Antithyroid drugs: methimazole (preferred) or PTU (pregnancy 1st trimester only)',
      'Agranulocytosis: sore throat + fever on methimazole = EMERGENCY — get STAT CBC',
      'Aspirin is CONTRAINDICATED — displaces T4 from binding proteins, can trigger thyroid storm',
      'Thyroid storm: extreme tachycardia, fever >104°F, delirium — treat with PTU, beta-blocker, iodine, steroids',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with Graves\' disease on methimazole calls reporting sore throat and fever of 101.8°F. They ask about taking aspirin. Which response is MOST appropriate?',
          options: [
            '"Yes, aspirin is safe for fever."',
            '"Use acetaminophen instead — and come to the clinic today."',
            '"Take aspirin and rest. Call back in 48 hours."',
            '"Hold your methimazole until the fever resolves."',
          ],
          correct: 1,
          rationale: 'TWO critical safety issues: (1) Aspirin is CONTRAINDICATED in hyperthyroidism — it displaces T4 from binding proteins, increasing free thyroid hormone and potentially triggering thyroid storm. Use acetaminophen. (2) Sore throat + fever on methimazole = agranulocytosis RED FLAG — a life-threatening WBC drop. The patient needs a STAT CBC immediately. This question tests integration of both concepts.',
        },
      ],
      y: [
        {
          stem: 'A patient with hyperthyroidism is started on methimazole. Which teaching point is MOST critical?',
          options: [
            'Take the medication with food to prevent nausea',
            'Report sore throat, fever, or mouth sores immediately — these may signal a dangerous blood disorder',
            'Expect to feel better within 24 hours',
            'Avoid foods high in iodine',
          ],
          correct: 1,
          rationale: 'Agranulocytosis (severe drop in WBCs) is the most dangerous adverse effect of methimazole and PTU. Signs: sore throat, fever, mouth sores — indicators of severe neutropenia leaving the patient defenseless against infection. This is a medical emergency requiring immediate CBC and possible drug discontinuation. Methimazole takes weeks to work, not 24 hours.',
        },
      ],
      r: [
        {
          stem: 'Which set of findings is consistent with hyperthyroidism?',
          options: [
            'Weight gain, cold intolerance, constipation, bradycardia',
            'Weight loss, heat intolerance, tachycardia, tremors',
            'Hyperpigmentation, orthostatic hypotension, fatigue',
            'Moon face, truncal obesity, purple striae',
          ],
          correct: 1,
          rationale: 'Hyperthyroidism = excess thyroid hormone = everything speeds up: weight loss (increased metabolism), heat intolerance (increased heat production), tachycardia (increased cardiac stimulation), tremors (increased neuromuscular excitability). Option A is hypothyroidism. Option C is Addison\'s disease. Option D is Cushing\'s syndrome.',
        },
      ],
    },
  },

  'Post-Thyroidectomy Care': {
    details: [
      'Tracheostomy tray, O2, suction at bedside — laryngeal edema or hemorrhage can obstruct airway',
      'Semi-Fowler\'s position, support head/neck — reduce venous pressure and swelling',
      'Monitor for hypocalcemia: tingling fingers/toes, Chvostek\'s sign, Trousseau\'s sign',
      'Parathyroid glands may be accidentally removed → acute hypocalcemia → tetany',
      'Assess voice quality q1-2h — hoarseness indicates recurrent laryngeal nerve damage',
      'Check BEHIND the neck for blood pooling — anterior dressing may look clean while hemorrhage collects posteriorly',
    ],
    questions: {
      g: [
        {
          stem: 'After total thyroidectomy, the patient reports tingling around the mouth and fingertips. The nurse taps the facial nerve anterior to the ear and observes twitching of the upper lip. This finding indicates:',
          options: [
            'Recurrent laryngeal nerve damage — expected post-operatively',
            'Hypocalcemia from accidental parathyroid removal — positive Chvostek\'s sign',
            'Allergic reaction to anesthesia — administer epinephrine',
            'Normal sensory changes from surgical manipulation',
          ],
          correct: 1,
          rationale: 'Positive Chvostek\'s sign (facial twitching when the facial nerve is tapped) + perioral/fingertip tingling = hypocalcemia from accidental parathyroid gland removal or damage. The parathyroid glands regulate calcium — without them, calcium drops rapidly, progressing from tingling to tetany to seizures to cardiac arrest. This is a medical emergency requiring IV calcium gluconate. Trousseau\'s sign (carpopedal spasm with BP cuff) is the other hypocalcemia test.',
        },
        {
          stem: 'A nurse checks the anterior dressing on a post-thyroidectomy patient and finds it clean and dry. Which additional assessment is essential?',
          options: [
            'No further assessment needed — the dressing is clean',
            'Check behind the neck and behind the ears for blood pooling',
            'Remove the dressing completely to inspect the incision',
            'Apply pressure to the anterior neck to test for bleeding',
          ],
          correct: 1,
          rationale: 'Blood from a thyroidectomy site pools POSTERIORLY due to gravity. The anterior dressing may look perfectly clean while significant hemorrhage collects behind the neck and behind the ears. The nurse must check these areas to detect bleeding. A rapidly expanding neck can compress the trachea and cause airway obstruction. Never apply pressure to a fresh thyroidectomy incision.',
        },
      ],
      y: [
        {
          stem: 'A post-thyroidectomy patient\'s voice is hoarse 6 hours after surgery. The nurse interprets this as a possible sign of:',
          options: [
            'Normal swelling that will resolve within 24 hours',
            'Damage to the recurrent laryngeal nerve',
            'Hypocalcemia from parathyroid removal',
            'Anesthesia side effects from intubation',
          ],
          correct: 1,
          rationale: 'Hoarseness after thyroidectomy suggests damage to the recurrent laryngeal nerve, which controls the vocal cords. The nurse should assess voice quality every 1-2 hours post-op. While some hoarseness from intubation is possible, persistent hoarseness specifically after thyroidectomy raises concern for nerve injury. The nerve runs very close to the thyroid gland and can be stretched or cut during surgery. Notify the surgeon.',
        },
      ],
      r: [
        {
          stem: 'What equipment must be at the bedside of a patient who has just returned from thyroidectomy?',
          options: [
            'A blood glucose monitor and insulin',
            'A tracheostomy tray, oxygen, and suction equipment',
            'A cardiac defibrillator',
            'A chest tube insertion kit',
          ],
          correct: 1,
          rationale: 'Laryngeal edema or hemorrhage after thyroidectomy can cause acute airway obstruction requiring emergency tracheostomy. A tracheostomy tray must be at the bedside along with oxygen and suction. This is a life-saving precaution specific to thyroidectomy and other neck surgeries where the airway is at risk.',
        },
      ],
    },
  },

  'Hyperparathyroidism': {
    details: [
      'Excess PTH → pulls calcium from bones → HYPERcalcemia',
      'Remember: "Bones, stones, groans, moans" — bone pain, kidney stones, GI upset, muscle weakness/fatigue',
      'Calcium is HIGH, phosphorus is LOW (inverse relationship)',
      'Risk: pathologic fractures from bone demineralization',
      'Treatment: hydration, calcitonin (lowers calcium), possible parathyroidectomy',
      'Monitor for cardiac effects of high calcium: shortened QT interval, bradycardia',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with primary hyperparathyroidism has a calcium of 13.2 mg/dL. Which intervention should the nurse anticipate as the FIRST priority?',
          options: [
            'Encourage high-calcium diet to prevent further bone loss',
            'Aggressive IV normal saline hydration to promote renal calcium excretion',
            'Administer vitamin D supplements',
            'Restrict all oral fluids to concentrate the urine',
          ],
          correct: 1,
          rationale: 'Hypercalcemia treatment starts with aggressive IV hydration (NS) to dilute calcium and promote renal excretion. After hydration, furosemide may be given to further promote calcium excretion (loop diuretics waste calcium). A high-calcium diet would worsen hypercalcemia. Vitamin D would increase calcium absorption. Fluid restriction would concentrate calcium further and increase kidney stone risk.',
        },
      ],
      y: [
        {
          stem: 'A nurse is assessing a patient with hyperparathyroidism. Which findings does the nurse expect? (Choose the BEST answer)',
          options: [
            'Numbness, tingling, positive Chvostek\'s sign',
            'Bone pain, kidney stones, fatigue, constipation',
            'Weight loss, tachycardia, heat intolerance',
            'Moon face, purple striae, truncal obesity',
          ],
          correct: 1,
          rationale: '"Bones, stones, groans, moans" — bone pain (calcium pulled from bones), kidney stones (excess calcium filtered through kidneys), GI complaints/constipation (groans), and fatigue/depression (moans). Option A describes HYPOcalcemia (hypoparathyroidism). Option C is hyperthyroidism. Option D is Cushing\'s syndrome.',
        },
      ],
      r: [
        {
          stem: 'In hyperparathyroidism, calcium is _______ and phosphorus is _______.',
          options: [
            'High; high',
            'High; low',
            'Low; high',
            'Low; low',
          ],
          correct: 1,
          rationale: 'Calcium and phosphorus have an INVERSE relationship. When PTH is excess, it pulls calcium from bones (calcium goes UP) and causes the kidneys to excrete phosphorus (phosphorus goes DOWN). In hypoparathyroidism, the opposite occurs: calcium is LOW and phosphorus is HIGH. This inverse relationship is one of the most commonly tested endocrine concepts.',
        },
      ],
    },
  },

};

console.log('DRUG_DEEP_AH_ENDOCRINE loaded:', Object.keys(window.DRUG_DEEP_AH_ENDOCRINE).length, 'topics with questions');
