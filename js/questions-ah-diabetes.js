// ══════════════════════════════════════════════
// ADULT HEALTH — Diabetes & Emergencies Questions
// Source: nurs327_exam3_diabetes_vA.js + nurs327_exam3_questions_vA.js
// ══════════════════════════════════════════════

window.DRUG_DEEP_AH_DIABETES = {

  'Dawn vs Somogyi Phenomenon': {
    details: [
      'Both cause elevated FASTING blood glucose — differentiated by 3 AM glucose check',
      'Dawn phenomenon: 3 AM glucose is NORMAL — morning rise from growth hormone surge',
      'Somogyi effect: 3 AM glucose is LOW — rebound hyperglycemia from nocturnal hypoglycemia',
      'Dawn treatment: adjust evening insulin timing or increase dose',
      'Somogyi treatment: DECREASE evening insulin or add bedtime snack',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with type 1 diabetes reports fasting glucose of 180-210 mg/dL despite taking NPH insulin at dinnertime. Which assessment is MOST important to differentiate Dawn phenomenon from Somogyi effect?',
          options: [
            'Obtain a hemoglobin A1C level',
            'Check the patient\'s blood glucose level at 3:00 AM',
            'Review the patient\'s dietary intake for the previous 24 hours',
            'Assess the insulin injection site for lipodystrophy',
          ],
          correct: 1,
          rationale: 'A 3 AM glucose is the KEY differentiator. LOW at 3 AM = Somogyi (nocturnal hypo → rebound morning hyperglycemia; reduce evening insulin). NORMAL at 3 AM = Dawn (growth hormone surge; adjust timing or increase dose). A1C shows average over months but cannot differentiate these. Diet review and site assessment are relevant but not diagnostic for this specific question.',
        },
      ],
      y: [
        {
          stem: 'A nurse checks a patient\'s 3 AM blood glucose and finds it is 48 mg/dL. The fasting morning glucose was 195 mg/dL. Which phenomenon does this pattern indicate?',
          options: [
            'Dawn phenomenon',
            'Somogyi effect',
            'Insulin resistance',
            'Diabetic ketoacidosis',
          ],
          correct: 1,
          rationale: 'Low glucose at 3 AM (48 mg/dL = hypoglycemia) followed by high morning glucose (195 mg/dL) = Somogyi effect. The body overcorrects the nocturnal low by releasing counter-regulatory hormones (glucagon, epinephrine, cortisol, growth hormone), causing rebound hyperglycemia by morning. Treatment: reduce the evening insulin dose or add a bedtime snack to prevent the overnight low.',
        },
      ],
      r: [
        {
          stem: 'A nurse is teaching a patient about checking blood glucose at 3 AM. The patient asks why this is necessary. The nurse explains it helps determine:',
          options: [
            'Whether the patient is eating too much before bed',
            'Whether morning high glucose is from overnight lows or a hormonal surge',
            'Whether the patient needs to switch from NPH to glargine insulin',
            'Whether the patient has developed type 2 diabetes in addition to type 1',
          ],
          correct: 1,
          rationale: 'The 3 AM glucose check differentiates two causes of morning hyperglycemia: Somogyi (overnight LOW causing rebound high) vs Dawn (hormonal surge causing high with no prior low). This distinction is critical because the treatments are OPPOSITE — Somogyi needs LESS evening insulin, while Dawn needs MORE or adjusted timing. Getting it wrong worsens the problem.',
        },
      ],
    },
  },

  'DKA vs HHS': {
    details: [
      'DKA: typically Type 1, glucose 300-800, pH <7.30, ketones PRESENT, Kussmaul breathing',
      'HHS: typically Type 2, glucose >600 (often 1000+), minimal/no ketones, severe dehydration',
      'Key differentiator: KETONES — DKA has them, HHS does not',
      'DKA can occur in Type 2 under extreme stress',
      'Both require aggressive IV fluid resuscitation as first priority',
      'DKA fluid switch: change to D5NS when glucose reaches 200-250 mg/dL (continue insulin for ketones)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient admitted with DKA has been on IV NS and an insulin drip for 4 hours. Initial glucose: 520 mg/dL; current glucose: 230 mg/dL. pH improved from 7.12 to 7.24. Ketones remain positive. Which IV fluid change should the nurse anticipate?',
          options: [
            'Discontinue IV fluids since glucose is approaching normal',
            'Switch to D5NS or D5 half-NS and continue the insulin drip',
            'Continue 0.9% NS and discontinue the insulin drip since glucose dropped below 250',
            'Switch to lactated Ringer\'s to correct the metabolic acidosis',
          ],
          correct: 1,
          rationale: 'When glucose drops to 200-250 during DKA treatment, switch to dextrose-containing fluids (D5NS). The insulin drip must CONTINUE until ketosis resolves (pH normalizes, ketones clear) — but without dextrose, continuing insulin would cause hypoglycemia. The dextrose prevents hypoglycemia while insulin clears ketones. CRITICAL: never stop insulin because glucose improved — glucose drops FASTER than ketones clear.',
        },
        {
          stem: 'A patient presents with DKA. Labs: glucose 480 mg/dL, pH 7.10, K+ 3.0 mEq/L, positive ketones. Which intervention should the nurse perform FIRST?',
          options: [
            'Begin IV regular insulin drip',
            'Initiate IV potassium replacement',
            'Start aggressive IV fluid resuscitation with 0.9% NS',
            'Administer IV sodium bicarbonate for acidosis',
          ],
          correct: 2,
          rationale: 'IV FLUIDS FIRST — always the initial priority in DKA. Patients lose up to 6.5 liters. BUT the hidden danger: K+ is 3.0, which is below 3.3. Potassium must be replaced BEFORE insulin (insulin drives K+ into cells, worsening hypokalemia). Correct sequence: fluids → K+ replacement → insulin (only after K+ is being replaced). Bicarb is controversial and only considered if pH <6.9.',
        },
      ],
      y: [
        {
          stem: 'Which finding differentiates DKA from HHS?',
          options: [
            'DKA has hyperglycemia; HHS does not',
            'DKA has ketones and Kussmaul respirations; HHS does not',
            'HHS occurs in type 1 diabetes; DKA occurs in type 2',
            'HHS causes dehydration; DKA does not',
          ],
          correct: 1,
          rationale: 'Ketones are THE differentiator. In DKA, absolute insulin deficiency causes lipolysis and ketone production (ketoacidosis). In HHS, there is ENOUGH insulin to prevent ketosis but not enough to prevent hyperglycemia. Kussmaul respirations (deep, rapid breathing) are the body\'s compensation for metabolic acidosis in DKA. Both conditions cause hyperglycemia and severe dehydration. DKA is classically type 1; HHS is classically type 2.',
        },
        {
          stem: 'A patient being treated for DKA shows: pH improved from 7.12 to 7.34, bicarb risen from 10 to 20, glucose down from 520 to 180, and respiratory rate changed from 32 to 16. Which finding indicates the DKA is resolving?',
          options: [
            'Only the glucose improvement',
            'Only the pH improvement',
            'All of these findings together indicate resolution',
            'None of these — resolution requires negative ketones',
          ],
          correct: 2,
          rationale: 'DKA resolution is indicated by: normalizing pH (7.34 approaching normal), rising bicarb (20 approaching normal 22-26), falling glucose, and resolution of Kussmaul respirations (32→16). All together these show the acidosis is clearing, glucose is controlled, and the body no longer needs compensatory rapid breathing. While negative ketones confirm full resolution, these trends strongly indicate the patient is responding to treatment.',
        },
      ],
      r: [
        {
          stem: 'A patient with type 1 diabetes has fruity breath, blood glucose of 480 mg/dL, and is breathing rapidly and deeply. The nurse recognizes these as signs of:',
          options: [
            'Hypoglycemia',
            'Diabetic ketoacidosis (DKA)',
            'Hyperosmolar hyperglycemic state (HHS)',
            'Metabolic alkalosis',
          ],
          correct: 1,
          rationale: 'Fruity breath (from ketone exhalation), hyperglycemia (480 mg/dL), and Kussmaul respirations (deep, rapid breathing to compensate for metabolic acidosis) are the classic DKA triad. DKA occurs primarily in type 1 diabetes when absolute insulin deficiency causes uncontrolled lipolysis and ketone production. HHS would have much higher glucose (>600) without ketones or fruity breath.',
        },
      ],
    },
  },

  'Hypoglycemia & 15-15 Rule': {
    details: [
      'Blood glucose <70 mg/dL = hypoglycemia',
      '15-15 Rule: give 15g fast-acting carbs, wait 15 min, recheck',
      'Conscious patient: juice, glucose tabs, regular soda (NOT diet)',
      'Unconscious patient: glucagon IM/SubQ/IV or D50 IV — NEVER give oral glucose',
      'Hypoglycemia unawareness: long-standing diabetes + autonomic neuropathy → no warning symptoms',
      'Beta-blockers mask hypoglycemia signs EXCEPT diaphoresis (sweating)',
    ],
    questions: {
      g: [
        {
          stem: 'A 58-year-old patient with type 1 diabetes diagnosed 25 years ago is found confused and unresponsive with blood glucose below 40 mg/dL. The spouse reports this has happened twice this month with no warning symptoms. Which factor BEST explains the lack of warning signs?',
          options: [
            'The patient is non-compliant with glucose monitoring',
            'Autonomic neuropathy from long-standing diabetes',
            'The insulin dose is too low to cause significant symptoms',
            'Insulin resistance masks hypoglycemia signs',
          ],
          correct: 1,
          rationale: 'Hypoglycemia unawareness occurs in long-standing diabetes (especially type 1) due to autonomic neuropathy. The adrenergic warning signs (sweating, tremor, tachycardia, anxiety) are mediated by the sympathetic nervous system. When autonomic neuropathy damages these nerves, patients progress directly from normal to confusion/LOC without warning. This requires more frequent monitoring, higher glucose targets, and CGM consideration.',
        },
      ],
      y: [
        {
          stem: 'A patient on a beta-blocker and insulin has a blood glucose of 55 mg/dL. Which hypoglycemia symptom is MOST reliable in this patient?',
          options: [
            'Tachycardia',
            'Tremors',
            'Diaphoresis (sweating)',
            'Anxiety and irritability',
          ],
          correct: 2,
          rationale: 'Beta-blockers mask most adrenergic symptoms of hypoglycemia (tachycardia, tremors, anxiety) because they block the beta-adrenergic response. DIAPHORESIS is the one reliable sign because sweating is mediated by cholinergic nerves, NOT adrenergic receptors, so beta-blockers do not block it. This is a classic exam question — "diaphoresis is the only reliable sign of hypoglycemia in a patient on beta-blockers."',
        },
      ],
      r: [
        {
          stem: 'A conscious patient with diabetes has a blood glucose of 58 mg/dL and is feeling shaky. The nurse should FIRST:',
          options: [
            'Administer glucagon 1 mg IM',
            'Give 15g of fast-acting carbohydrates and recheck in 15 minutes',
            'Start a D5W IV infusion',
            'Hold all insulin doses and call the provider',
          ],
          correct: 1,
          rationale: '15-15 Rule for conscious patients: give 15g of fast-acting carbohydrates (4 oz juice, glucose tabs, regular soda), wait 15 minutes, recheck glucose. If still <70, repeat. Glucagon is for UNCONSCIOUS patients who cannot swallow safely. IV dextrose is for severe cases or when IV access is established. Holding insulin and calling the provider is too slow — treat the hypoglycemia NOW.',
        },
      ],
    },
  },

  'Metformin (1st Line T2DM)': {
    details: [
      'First-line drug for type 2 diabetes — does NOT cause hypoglycemia when used alone',
      'Hold for 48 hours before/after IV contrast (lactic acidosis risk)',
      'Hold for surgery — resume after renal function confirmed',
      'Contraindicated in renal impairment (GFR <30)',
      'Most dangerous adverse effect: lactic acidosis (rare but potentially fatal)',
      'GI side effects are common (nausea, diarrhea) — take with food if needed',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with type 2 diabetes on metformin is scheduled for abdominal surgery in 3 days. Which action should the nurse plan regarding the metformin?',
          options: [
            'Discontinue metformin permanently and replace with a sulfonylurea',
            'Continue metformin through the morning of surgery with a sip of water',
            'Hold metformin the day of surgery and for 48 hours post-operatively until renal function is confirmed',
            'Double the metformin dose preoperatively to prevent hyperglycemia from surgical stress',
          ],
          correct: 2,
          rationale: 'Metformin must be held for surgery and for 48 hours after. Surgery can compromise renal perfusion (anesthesia, blood loss, hemodynamic changes), and metformin accumulates when renal function declines, increasing lactic acidosis risk. Resume only after serum creatinine/GFR confirms adequate renal function. The hold is temporary — not permanent. During this period, glucose is managed with insulin.',
        },
      ],
      y: [
        {
          stem: 'A patient on metformin is scheduled for a CT scan with IV contrast. The nurse should plan to:',
          options: [
            'Continue metformin as scheduled — contrast does not interact',
            'Hold metformin for 48 hours after the procedure and verify renal function before resuming',
            'Permanently discontinue metformin and switch to insulin',
            'Give an extra dose of metformin before the procedure to prevent glucose spike',
          ],
          correct: 1,
          rationale: 'IV contrast can temporarily impair renal function (contrast-induced nephropathy). Metformin is renally excreted — if kidneys are impaired, metformin accumulates and can cause lactic acidosis. Standard protocol: hold metformin for 48 hours after contrast, check serum creatinine, resume only if renal function is adequate. This is one of the most commonly tested metformin safety rules.',
        },
      ],
      r: [
        {
          stem: 'A nurse is teaching a patient about metformin. The patient should be instructed to seek immediate medical attention if they experience:',
          options: [
            'Mild nausea after taking the medication',
            'A metallic taste in the mouth',
            'Muscle pain, weakness, and difficulty breathing',
            'Weight loss of 2-3 pounds over a month',
          ],
          correct: 2,
          rationale: 'Muscle pain, weakness, and difficulty breathing are warning signs of LACTIC ACIDOSIS — the most serious adverse effect of metformin. Though rare, lactic acidosis can be fatal and requires emergency treatment. Mild nausea and metallic taste are common, manageable side effects. Modest weight loss is actually a beneficial effect of metformin (unlike sulfonylureas which cause weight gain).',
        },
      ],
    },
  },

  'Insulin Administration': {
    details: [
      'Rapid-acting (lispro): onset 15 min, give immediately before meals',
      'Regular: ONLY insulin that can be given IV, onset 30-60 min',
      'NPH: ONLY cloudy insulin, peaks 4-12 hours',
      'Glargine (Lantus): NEVER mix with other insulins (pH 4 formulation)',
      'Mixing rule: draw CLEAR (regular) before CLOUDY (NPH) — "clear before cloudy"',
      'Rotate injection sites within one region — abdomen has fastest absorption',
    ],
    questions: {
      g: [
        {
          stem: 'A nursing student plans to draw lispro and glargine into one syringe to minimize injections. The nurse should respond:',
          options: [
            '"Draw the lispro first since it is rapid-acting, then add the glargine."',
            '"These cannot be combined — give them as two separate injections."',
            '"Mix them but draw the glargine first since it is long-acting."',
            '"Mix them together but use a different injection site."',
          ],
          correct: 1,
          rationale: 'Glargine (Lantus) must NEVER be mixed with any other insulin. Glargine is formulated at pH 4 (acidic) which gives it slow, peakless absorption. Mixing alters the pH and destroys glargine\'s unique pharmacokinetic profile. The "clear before cloudy" rule applies to regular + NPH combinations ONLY — not to long-acting analogs like glargine or detemir.',
        },
      ],
      y: [
        {
          stem: 'A patient is prescribed NPH and regular insulin. In which order should the nurse draw up the insulins?',
          options: [
            'Draw NPH first, then regular insulin',
            'Draw regular insulin first, then NPH',
            'Draw from either vial first — the order does not matter',
            'These insulins cannot be mixed in the same syringe',
          ],
          correct: 1,
          rationale: '"Clear before cloudy" — always draw the clear insulin (regular) first, then the cloudy insulin (NPH). This prevents contamination of the regular insulin vial with NPH, which would alter the regular insulin\'s rapid onset. Regular is the clear, fast-acting insulin. NPH is the ONLY cloudy insulin. This is one of the most frequently tested insulin rules.',
        },
      ],
      r: [
        {
          stem: 'A patient receives lispro insulin at 0730 before breakfast. At what time is the patient at HIGHEST risk for hypoglycemia?',
          options: [
            'Immediately after injection (0730)',
            'At 0830-0930 (1-2 hours after injection)',
            'At 1130 (4 hours after injection)',
            'At 1530 (8 hours after injection)',
          ],
          correct: 1,
          rationale: 'Lispro is rapid-acting insulin: onset 15 minutes, PEAK 1-2 hours, duration 3-4 hours. The highest risk for hypoglycemia is at peak action (0830-0930). This is when the nurse should monitor most closely and ensure the patient has eaten. If the patient cannot eat after receiving rapid-acting insulin, the nurse must prepare to treat hypoglycemia.',
        },
      ],
    },
  },

  'Diabetic Foot Care': {
    details: [
      'Peripheral neuropathy → cannot feel injuries, burns, or pressure',
      'Daily foot inspection with a mirror to check soles — essential',
      'NEVER soak feet in hot water — risk of burns and skin maceration',
      'NEVER use heating pads on feet — cannot feel excessive heat',
      'Moisturize feet but NOT between toes (traps moisture → fungal infection)',
      'Trim nails straight across, file sharp edges with emery board',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with diabetes and peripheral neuropathy asks if using a heating pad on their feet at night would help with neuropathic pain. The nurse should respond:',
          options: [
            '"That is a good idea — heat improves circulation to the feet."',
            '"Never use heating pads on your feet — you cannot feel if it is too hot and could get burned."',
            '"Use the heating pad on the lowest setting only."',
            '"Alternate between heating pad and ice packs for best relief."',
          ],
          correct: 1,
          rationale: 'Heating pads are CONTRAINDICATED for diabetic feet with neuropathy. Peripheral neuropathy impairs temperature sensation — the patient cannot feel excessive heat and could sustain significant thermal burns without pain. For neuropathic pain, medications like gabapentin, duloxetine, or capsaicin cream are appropriate alternatives. Ice packs are also contraindicated for the same reason.',
        },
      ],
      y: [
        {
          stem: 'A nurse is teaching diabetic foot care. Which instruction is MOST important to include?',
          options: [
            'Soak feet in hot water for 20 minutes daily to improve circulation',
            'Inspect feet daily using a mirror to check the soles',
            'Walk barefoot at home to toughen the skin on the feet',
            'Use a razor blade to remove calluses and corns',
          ],
          correct: 1,
          rationale: 'Daily foot inspection is the cornerstone of diabetic foot care. Peripheral neuropathy means patients may not FEEL cuts, blisters, pressure injuries, or infections. Visual inspection catches problems before they become serious. A mirror helps see the soles. Hot water soaks can burn and macerate skin. Never walk barefoot (injury risk). Never self-treat calluses with sharp instruments (infection risk).',
        },
      ],
      r: [
        {
          stem: 'A patient with diabetes should be taught to test bath water temperature with:',
          options: [
            'Their feet, since they can best judge the temperature',
            'Their elbow or a thermometer',
            'Their fingertips, which are the most sensitive',
            'It is not necessary to check temperature — use warm water',
          ],
          correct: 1,
          rationale: 'Patients with diabetic neuropathy have impaired sensation in their feet — they CANNOT accurately judge temperature. The elbow has intact sensation and is the traditional method for testing water temperature (also used for infant baths). A thermometer provides the most accurate reading. Water should be warm, not hot — below 90°F/32°C to prevent burns on insensate feet.',
        },
      ],
    },
  },

  'A1C and Diagnostic Criteria': {
    details: [
      'Diabetes diagnosis: fasting glucose >=126, A1C >=6.5%, random glucose >=200 WITH symptoms, or 2hr OGTT >=200',
      'Random glucose >=200 WITH symptoms = diagnostic on a SINGLE test (no confirmation needed)',
      'Fasting glucose or A1C alone requires REPEAT confirmation on a different day',
      'A1C reflects average glucose over 2-3 MONTHS (lifespan of RBCs)',
      'A1C goal for most adults with diabetes: <7%',
      'A1C can be falsely low with hemolytic anemia, blood loss, or sickle cell disease',
    ],
    questions: {
      g: [
        {
          stem: 'A patient has: fasting glucose 142 mg/dL, A1C 7.2%, and random glucose 238 mg/dL with polyuria and polydipsia. Which result alone is sufficient to diagnose diabetes?',
          options: [
            'Fasting glucose 142 mg/dL alone',
            'A1C 7.2% alone',
            'Random glucose 238 mg/dL with classic symptoms of hyperglycemia',
            'All three results must be present simultaneously',
          ],
          correct: 2,
          rationale: 'Random glucose >=200 WITH classic symptoms (polyuria, polydipsia, polyphagia, weight loss) is diagnostic on a SINGLE test — no repeat needed. Fasting glucose >=126 or A1C >=6.5% require repeat confirmation on a different day when the patient is asymptomatic. You do NOT need all three simultaneously — any one diagnostic criterion, properly confirmed, establishes the diagnosis.',
        },
      ],
      y: [
        {
          stem: 'A patient\'s A1C is 8.4%. The nurse interprets this as:',
          options: [
            'Blood glucose has been well-controlled over the past 3 months',
            'Blood glucose has been above target for the past 2-3 months',
            'The patient had high blood glucose yesterday only',
            'The patient does not have diabetes',
          ],
          correct: 1,
          rationale: 'A1C reflects average blood glucose over 2-3 months (the lifespan of red blood cells). An A1C of 8.4% (target <7% for most adults) indicates the patient\'s diabetes has been poorly controlled over this period. A1C is NOT affected by one day\'s glucose readings — it represents the big picture. This result warrants medication adjustment and/or lifestyle counseling.',
        },
      ],
      r: [
        {
          stem: 'A nurse is explaining A1C testing to a patient. Which statement is MOST accurate?',
          options: [
            '"A1C shows your blood sugar from the past 24 hours."',
            '"A1C shows your average blood sugar over the past 2-3 months."',
            '"A1C is the same as a fasting blood glucose test."',
            '"A1C must be done every week for accurate monitoring."',
          ],
          correct: 1,
          rationale: 'A1C (glycosylated hemoglobin) measures the percentage of hemoglobin that has glucose attached. Since RBCs live about 120 days, A1C reflects average glucose control over 2-3 months. It is typically checked every 3-6 months. It is NOT the same as a fasting glucose (single point in time) and does not need weekly testing.',
        },
      ],
    },
  },

  'SGLT-2 Inhibitors': {
    details: [
      'Suffix: -gliflozin (empagliflozin/Jardiance, canagliflozin/Invokana, dapagliflozin/Farxiga)',
      'MOA: blocks glucose reabsorption in kidneys → glucose excreted in urine (glycosuria)',
      'Major side effects: UTIs and genital yeast infections (glucose-rich urine feeds bacteria/fungi)',
      'Euglycemic DKA: can cause DKA even with NORMAL blood glucose — unique trap',
      'Cardiovascular and renal benefits — increasingly used for heart failure and CKD',
      'Teach: report burning urination, cloudy urine, genital itching immediately',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on empagliflozin (Jardiance) reports burning urination, cloudy foul-smelling urine, and temperature of 100.6°F three days after starting the medication. The nurse should:',
          options: [
            'Reassure the patient that increased urination is expected',
            'Notify provider and obtain a urine culture',
            'Instruct the patient to increase fluid intake and the symptoms will resolve',
            'Hold the empagliflozin and administer diphenhydramine',
          ],
          correct: 1,
          rationale: 'SGLT-2 inhibitors cause glycosuria (glucose in urine), creating an ideal environment for bacterial and fungal growth. Dysuria, cloudy urine, foul smell, and fever are classic UTI signs requiring provider notification and urine culture for antibiotic treatment. Increased urination IS expected, but these INFECTION signs are not. Fluids alone won\'t resolve a UTI. This is not an allergic reaction — it\'s an infectious complication.',
        },
      ],
      y: [
        {
          stem: 'Which adverse effect is UNIQUE to SGLT-2 inhibitors that the nurse should teach the patient about?',
          options: [
            'Hypoglycemia when taken alone',
            'Euglycemic DKA — ketoacidosis with normal blood glucose',
            'Weight gain and fluid retention',
            'Elevated liver enzymes requiring monthly monitoring',
          ],
          correct: 1,
          rationale: 'Euglycemic DKA is unique to SGLT-2 inhibitors — the patient develops ketoacidosis but blood glucose may be NORMAL or only mildly elevated. This happens because the drug blocks glucose reabsorption, so even though ketones are building up, glucose stays low. This makes diagnosis tricky because providers may not suspect DKA with a normal glucose. Teach patients to report nausea, vomiting, abdominal pain, and fatigue even if glucose is normal.',
        },
      ],
      r: [
        {
          stem: 'SGLT-2 inhibitors work by:',
          options: [
            'Stimulating the pancreas to release more insulin',
            'Blocking glucose reabsorption in the kidneys, causing glucose to be excreted in urine',
            'Slowing carbohydrate absorption in the intestines',
            'Increasing insulin sensitivity in muscle and fat cells',
          ],
          correct: 1,
          rationale: 'SGLT-2 (sodium-glucose co-transporter 2) inhibitors block the reabsorption of glucose in the proximal tubule of the kidney. Normally, SGLT-2 reclaims filtered glucose back into the blood. By blocking this, the drug causes glucose to be excreted in the urine (glycosuria), lowering blood glucose levels. This mechanism also promotes mild osmotic diuresis and weight loss.',
        },
      ],
    },
  },

};

console.log('DRUG_DEEP_AH_DIABETES loaded:', Object.keys(window.DRUG_DEEP_AH_DIABETES).length, 'topics with questions');
