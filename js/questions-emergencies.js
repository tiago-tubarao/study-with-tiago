// ══════════════════════════════════════════════
// NCLEX Questions — INJECTABLES + EMERGENCIES (8 drugs × 9 questions = 72 total)
// 3 difficulty levels: g=green(hardest), y=yellow(moderate), r=red(foundational)
// ══════════════════════════════════════════════

window.DRUG_DEEP_EMERGENCIES = {

  'Pramlintide — cut insulin by 50%': {
    details: [
      'MOA: Synthetic amylin — slows gastric emptying, suppresses glucagon, promotes satiety',
      'Used WITH insulin in both T1DM and T2DM — never as monotherapy',
      'CRITICAL: Cut mealtime insulin dose by 50% when starting pramlintide',
      'Severe hypoglycemia risk if insulin isn\'t reduced — especially within 3 hours of injection',
      'SubQ injection — separate syringe from insulin, separate injection site',
      'Nausea is common initially — usually improves over time',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on lispro 10 units before meals is starting pramlintide. The provider orders lispro 10 units + pramlintide at dinner. The nurse should:',
          options: ['Administer both as ordered — the provider calculated the doses', 'Question the order — lispro should be reduced to 5 units when starting pramlintide', 'Hold the pramlintide until the next meal since both are new orders', 'Mix pramlintide and lispro in one syringe for patient convenience'],
          correct: 1,
          rationale: 'Mealtime insulin MUST be cut by 50% when starting pramlintide — both drugs lower glucose, and pramlintide slows gastric emptying (delays glucose rise, so existing insulin dose becomes too much). 10 units without reduction = severe hypoglycemia risk. Option D is wrong — NEVER mix pramlintide with insulin.',
        },
        {
          stem: 'A patient on pramlintide and insulin has severe nausea and a blood glucose of 52 mg/dL 2 hours after dinner. The nurse should FIRST:',
          options: ['Administer an antiemetic for the nausea', 'Treat the hypoglycemia with 15g fast-acting carbohydrates', 'Hold pramlintide and contact the provider about discontinuing it', 'Position the patient on their side and call a rapid response'],
          correct: 1,
          rationale: 'Priority: treat the hypoglycemia FIRST (life-threatening). Nausea is secondary. The 15-15 rule applies. After stabilizing glucose, then address the nausea and notify the provider about possible dose adjustment. Option A addresses the secondary issue first — classic priority trap.',
        },
        {
          stem: 'A patient asks if they can inject pramlintide and insulin in the same syringe. The nurse responds:',
          options: ['"Yes, as long as you draw the insulin first."', '"No — pramlintide alters insulin\'s pH and absorption. They must be separate syringes at separate sites."', '"Yes, but only with rapid-acting insulin, not long-acting."', '"Only your pharmacist can pre-mix them safely."'],
          correct: 1,
          rationale: 'Pramlintide must NEVER be mixed with insulin in the same syringe — it changes the insulin\'s pharmacokinetics. Separate syringes, separate injection sites. No exceptions, no pre-mixing.',
        },
      ],
      y: [
        {
          stem: 'When teaching a patient about starting pramlintide, the MOST important instruction is:',
          options: ['"Take it at bedtime for best overnight glucose control."', '"A specific adjustment to your current insulin regimen is required before you start this."', '"This replaces your insulin, so you\'ll stop those injections."', '"For convenience, inject it at the same site and time as your insulin."'],
          correct: 1,
          rationale: 'The 50% insulin reduction is the #1 safety teaching. Without it, severe hypo within hours. Pramlintide is given before meals (not bedtime). It\'s always ADDED to insulin, never replaces it. Different injection sites required.',
        },
        {
          stem: 'Pramlintide is classified as:',
          options: ['An insulin analog', 'A synthetic amylin analog', 'An oral antidiabetic', 'A GLP-1 receptor agonist'],
          correct: 1,
          rationale: 'Pramlintide is a synthetic version of amylin, a hormone co-secreted with insulin by beta cells. It slows gastric emptying, suppresses glucagon, and promotes satiety. It\'s NOT insulin and NOT GLP-1.',
        },
        {
          stem: 'A patient on pramlintide reports decreased appetite and eating less. The nurse should:',
          options: ['Report this as an adverse reaction and hold the medication', 'Explain that reduced appetite is an expected effect — pramlintide promotes satiety', 'Increase the pramlintide dose to further suppress appetite', 'Recommend eating the same portions regardless of hunger'],
          correct: 1,
          rationale: 'Satiety (feeling full) is a KNOWN effect of pramlintide — part of how it helps with weight management. Reduced appetite is expected, not adverse. Monitor weight trends but don\'t panic.',
        },
      ],
      r: [
        {
          stem: 'The most critical action when starting pramlintide is:',
          options: ['Increase basal insulin by 25%', 'Reduce mealtime insulin by 50%', 'Switch from rapid-acting to regular insulin', 'Discontinue all other diabetes medications'],
          correct: 1,
          rationale: 'Cut mealtime insulin by 50% — this is the #1 safety rule. Pramlintide + full-dose insulin = severe hypoglycemia. Basal insulin typically stays the same initially.',
        },
        {
          stem: 'Pramlintide is used in combination with:',
          options: ['Metformin only', 'Insulin — it is never used as monotherapy', 'Sulfonylureas only', 'Any oral antidiabetic'],
          correct: 1,
          rationale: 'Pramlintide is always adjunctive to insulin therapy — both T1DM and T2DM. It supplements insulin, never replaces it. It\'s not combined with oral agents alone.',
        },
        {
          stem: 'Pramlintide helps control blood glucose by:',
          options: ['Stimulating insulin release from the pancreas', 'Slowing gastric emptying and suppressing glucagon', 'Blocking glucose absorption in the intestines', 'Increasing glucose excretion in urine'],
          correct: 1,
          rationale: 'Pramlintide (amylin analog): (1) slows gastric emptying → slower glucose absorption, (2) suppresses glucagon → less hepatic glucose output, (3) promotes satiety → less food intake. It does NOT stimulate insulin.',
        },
      ],
    },
  },

  'Exenatide (GLP-1, T2DM only)': {
    details: [
      'MOA: GLP-1 receptor agonist — same class as semaglutide but shorter-acting',
      'T2DM ONLY — contraindicated in T1DM (needs beta cells)',
      'Weight loss through appetite suppression and slowed gastric emptying',
      'Pancreatitis risk — report severe abdominal pain radiating to back',
      'SubQ injection — BID (exenatide IR) or weekly (exenatide ER/Bydureon)',
      'Common: nausea (dose-dependent, usually improves), injection site reactions',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on exenatide BID also takes levothyroxine every morning. The patient reports symptoms of hypothyroidism despite "taking everything as prescribed." The nurse suspects:',
          options: ['The exenatide is destroying the thyroid gland', 'Exenatide slows gastric emptying → delayed levothyroxine absorption → subtherapeutic thyroid levels', 'The hypothyroid symptoms are actually exenatide side effects', 'Levothyroxine and exenatide have a direct chemical interaction'],
          correct: 1,
          rationale: 'Exenatide significantly slows GI transit. Levothyroxine requires an empty stomach for proper absorption. Delayed gastric emptying can reduce levothyroxine bioavailability. The fix: take levothyroxine 1 hour before exenatide, or at least 4 hours apart. Option A is wrong — no thyroid destruction.',
        },
        {
          stem: 'A patient on exenatide weekly (Bydureon) wants to switch to semaglutide weekly. During the transition, the nurse should anticipate:',
          options: ['Starting semaglutide at full dose on the day the next exenatide dose is due', 'Starting semaglutide at a low dose and titrating up, beginning when the next exenatide dose would be due', 'Overlapping both medications for 2 weeks', 'Waiting 4 weeks after stopping exenatide before starting semaglutide'],
          correct: 1,
          rationale: 'When switching within the GLP-1 class: start the new agent when the old one is due (no overlap, no washout). Start low and titrate — GI effects may be different between agents. Option C doubles GI side effects and hypo risk. Option D leaves an unnecessary gap.',
        },
        {
          stem: 'A patient on exenatide develops acute kidney injury. The MOST likely contributing mechanism is:',
          options: ['Direct nephrotoxicity from exenatide', 'Severe nausea/vomiting → dehydration → prerenal AKI', 'Exenatide causes glucose to spill into urine, damaging the kidneys', 'Exenatide blocks ADH, causing excessive urination'],
          correct: 1,
          rationale: 'GLP-1 agonists cause significant nausea/vomiting, especially early in treatment. Persistent vomiting → volume depletion → prerenal AKI. This is an indirect but well-documented mechanism. Option C describes SGLT-2 mechanism, not GLP-1. Option D is incorrect — GLP-1 doesn\'t affect ADH.',
        },
      ],
      y: [
        {
          stem: 'A patient starting exenatide BID should be taught to inject:',
          options: ['30 minutes after meals', 'Within 60 minutes before breakfast and dinner', 'At bedtime only', 'Whenever blood glucose is above 200 mg/dL'],
          correct: 1,
          rationale: 'Exenatide BID is given within 60 minutes before the two main meals (typically breakfast and dinner). It needs to be on board before food arrives to slow gastric emptying and stimulate glucose-dependent insulin release.',
        },
        {
          stem: 'The most common side effect when starting exenatide is:',
          options: ['Severe hypoglycemia', 'Nausea — usually improves over weeks as the body adjusts', 'Weight gain', 'Elevated blood pressure'],
          correct: 1,
          rationale: 'Nausea is the #1 side effect of GLP-1 agonists — it\'s dose-dependent and typically improves over 4-8 weeks. Starting at a low dose and titrating slowly helps. Exenatide promotes weight LOSS, not gain.',
        },
        {
          stem: 'A patient on exenatide asks if they still need metformin. The nurse explains:',
          options: ['"Exenatide replaces metformin — you can stop it."', '"They work through different mechanisms and are commonly used together for better control."', '"You should stop metformin because both cause weight loss."', '"Only take one at a time — alternate days."'],
          correct: 1,
          rationale: 'Exenatide (GLP-1) + metformin (biguanide) = different mechanisms, complementary effects. Combined therapy improves glucose control without overlapping side effect profiles. Metformin is typically continued.',
        },
      ],
      r: [
        {
          stem: 'Exenatide is a:',
          options: ['Sulfonylurea', 'DPP-4 inhibitor', 'GLP-1 receptor agonist', 'SGLT-2 inhibitor'],
          correct: 2,
          rationale: 'Exenatide is a GLP-1 receptor agonist — same class as semaglutide and liraglutide. It mimics the incretin hormone GLP-1 to stimulate glucose-dependent insulin release.',
        },
        {
          stem: 'Exenatide is contraindicated in:',
          options: ['Type 2 diabetes with obesity', 'Type 1 diabetes', 'Patients over 65 years old', 'Patients with hypertension'],
          correct: 1,
          rationale: 'All GLP-1 agonists are CI in T1DM — they need functioning beta cells. T1DM patients have beta cell destruction. Exenatide is actually beneficial in T2DM with obesity (promotes weight loss).',
        },
        {
          stem: 'Exenatide promotes weight loss by:',
          options: ['Increasing metabolism', 'Suppressing appetite and slowing gastric emptying', 'Causing glucose to spill into urine', 'Blocking fat absorption'],
          correct: 1,
          rationale: 'GLP-1 agonists suppress appetite centrally and slow gastric emptying peripherally → eat less, feel full longer. Glucose in urine = SGLT-2 mechanism. Fat malabsorption = orlistat mechanism.',
        },
      ],
    },
  },

  'DKA vs HHS (ketones = key)': {
    details: [
      'DKA: T1DM (usually), glucose 300-800, KETONES present, pH <7.35, Kussmaul breathing, fruity breath',
      'HHS: T2DM (usually), glucose >600 (often >1000), NO ketones, profound dehydration, altered mental status',
      'Key differentiator: KETONES — DKA has them, HHS does not',
      'Both are emergencies requiring IV fluids, insulin, and electrolyte monitoring',
      'DKA develops in hours; HHS develops over days to weeks',
      'Treatment priority: fluids first (both), then K+ ≥ 3.3, then insulin',
    ],
    questions: {
      g: [
        {
          stem: 'A patient presents with glucose 850 mg/dL, serum osmolality 340 mOsm/kg, no ketones, pH 7.38, and severe dehydration. The nurse recognizes this as:',
          options: ['DKA — the extremely high glucose confirms it', 'HHS — high glucose, no ketones, normal pH, hyperosmolality, severe dehydration', 'Both DKA and HHS simultaneously', 'Neither — this is just uncontrolled diabetes'],
          correct: 1,
          rationale: 'No ketones + normal pH = NOT DKA. Glucose >600 + hyperosmolality + severe dehydration + no ketones = HHS. The trap: students see "850 glucose" and assume DKA. But DKA is defined by KETOACIDOSIS (ketones + low pH), not just high glucose.',
        },
        {
          stem: 'A patient in DKA has glucose of 350 and K+ of 3.0. The priority intervention is:',
          options: ['Start IV regular insulin drip to lower the glucose', 'Replace potassium FIRST — K+ must be ≥ 3.3 before insulin', 'Give D50W to prevent hypoglycemia during treatment', 'Administer sodium bicarbonate to correct the acidosis'],
          correct: 1,
          rationale: 'K+ 3.0 < 3.3 threshold. Insulin drives K+ into cells → fatal hypokalemia → cardiac arrest. ALWAYS replace K+ first. The trap: students want to treat the obvious problem (high glucose) but insulin would kill this patient. Priority order: fluids → K+ ≥ 3.3 → insulin.',
        },
        {
          stem: 'A patient with T2DM presents with glucose 280, positive ketones, pH 7.28, and is taking empagliflozin (SGLT-2 inhibitor). The nurse should suspect:',
          options: ['This is HHS — the patient has T2DM, so it can\'t be DKA', 'Euglycemic DKA — the SGLT-2 inhibitor causes ketoacidosis with deceptively normal glucose', 'Lab error — ketones don\'t occur in T2DM', 'Starvation ketosis from not eating — unrelated to diabetes'],
          correct: 1,
          rationale: 'Classic euglycemic DKA from SGLT-2 inhibitor. Glucose is only 280 (not the typical >300-800) because the drug dumps glucose in urine. But ketones + acidotic pH = DKA. The trap: students think T2DM can\'t get DKA, and the "normal" glucose throws them off.',
        },
      ],
      y: [
        {
          stem: 'The key laboratory finding that differentiates DKA from HHS is:',
          options: ['Blood glucose level', 'Presence of serum/urine ketones', 'Serum sodium level', 'White blood cell count'],
          correct: 1,
          rationale: 'Ketones are THE differentiator. DKA = ketones present (fat breakdown for energy). HHS = no significant ketones (patient has enough insulin to prevent lipolysis, just not enough for glucose uptake). Glucose alone doesn\'t differentiate — both can have very high glucose.',
        },
        {
          stem: 'A patient in DKA has fruity-smelling breath. This is caused by:',
          options: ['High blood glucose fermenting in the mouth', 'Acetone (a ketone body) being exhaled through the lungs', 'Dehydration causing oral bacterial overgrowth', 'A medication side effect from the insulin drip'],
          correct: 1,
          rationale: 'Acetone is a volatile ketone body that\'s exhaled. Fruity/sweet breath odor = hallmark of ketoacidosis. The body is breaking down fat for energy → ketone production → acetone in blood → exhaled.',
        },
        {
          stem: 'HHS typically develops over:',
          options: ['Minutes to hours, like an acute emergency', 'Days to weeks, with gradual worsening', 'Exactly 24 hours after missing insulin', 'Months of poor glucose control'],
          correct: 1,
          rationale: 'HHS is insidious — develops over days to weeks. Progressive dehydration as glucose rises → osmotic diuresis → profound volume loss → hyperosmolality. This is why elderly patients with T2DM are high risk — they may not recognize thirst/symptoms.',
        },
      ],
      r: [
        {
          stem: 'DKA is most commonly associated with:',
          options: ['Type 2 diabetes', 'Type 1 diabetes', 'Gestational diabetes', 'Prediabetes'],
          correct: 1,
          rationale: 'DKA primarily occurs in T1DM (no insulin production → body uses fat for energy → ketone production). It CAN occur in T2DM under severe stress or with SGLT-2 inhibitors, but T1DM is the classic association.',
        },
        {
          stem: 'HHS is characterized by all of the following EXCEPT:',
          options: ['Blood glucose >600 mg/dL', 'Severe dehydration', 'Significant ketone production', 'Altered mental status'],
          correct: 2,
          rationale: 'HHS = high glucose (>600), severe dehydration, altered mental status, BUT NO significant ketones. The patient has enough insulin to prevent fat breakdown (no ketones) but not enough to use glucose properly.',
        },
        {
          stem: 'Kussmaul respirations (deep, rapid breathing) are seen in:',
          options: ['HHS only', 'DKA — the body is trying to compensate for metabolic acidosis', 'Both DKA and HHS equally', 'Neither — they occur in respiratory disorders'],
          correct: 1,
          rationale: 'Kussmaul breathing is the body\'s attempt to blow off CO2 to compensate for metabolic acidosis in DKA. HHS doesn\'t have significant acidosis, so Kussmaul respirations are not a feature.',
        },
      ],
    },
  },

  'K+ ≥ 3.3 before insulin': {
    details: [
      'In DKA: insulin drives potassium INTO cells → serum K+ drops',
      'If K+ is already low (<3.3), giving insulin causes fatal hypokalemia → cardiac arrest',
      'RULE: Check K+ BEFORE starting insulin. If K+ < 3.3 → replace K+ first, THEN insulin',
      'FKI-D protocol: Fluids → K+ → Insulin → Dextrose (when glucose drops to 250)',
      'Even if K+ appears normal, total body K+ is usually depleted in DKA',
      'Monitor K+ every 1-2 hours during insulin drip',
    ],
    questions: {
      g: [
        {
          stem: 'A patient in DKA has glucose 450, pH 7.18, K+ 5.8 mEq/L. The nurse knows the elevated potassium is:',
          options: ['A sign of renal failure — hold insulin and consult nephrology', 'Expected in DKA — acidosis shifts K+ OUT of cells, but total body K+ is actually depleted. K+ will DROP once insulin starts.', 'A contraindication to insulin — treat hyperkalemia first with calcium gluconate', 'An error — recheck the lab before acting'],
          correct: 1,
          rationale: 'THE K+/DKA paradox. In acidosis, H+ enters cells and K+ exits → serum K+ appears HIGH even though total body K+ is LOW (lost through osmotic diuresis). Once insulin/fluids correct the acidosis, K+ shifts back into cells → rapid hypokalemia. The nurse must anticipate this and have K+ replacement ready. Option C would delay life-saving insulin.',
        },
        {
          stem: 'During DKA treatment, the insulin drip is running and the patient\'s K+ drops from 4.1 to 3.2 in one hour. The nurse should:',
          options: ['Continue insulin and add oral potassium supplements', 'STOP the insulin drip, aggressively replace K+ IV, resume insulin when K+ ≥ 3.3', 'Decrease insulin rate by 50% and replace K+ simultaneously', 'This is expected — continue current treatment unchanged'],
          correct: 1,
          rationale: 'K+ dropped below 3.3 = STOP insulin NOW. Continuing insulin pushes more K+ into cells → fatal arrhythmia. IV K+ replacement (not oral — too slow). Resume insulin only when K+ ≥ 3.3. Option D is the deadly trap — "expected" doesn\'t mean "safe to ignore."',
        },
        {
          stem: 'The FKI-D protocol in DKA stands for the treatment order. The nurse correctly identifies this as:',
          options: ['Fast-acting insulin, Ketone check, IV fluids, Dextrose', 'Fluids, K+ replacement (if needed), Insulin, Dextrose (when glucose ~250)', 'Fluid restriction, Ketorolac, Insulin, Discharge', 'Furosemide, K+ wasting, Insulin, Dialysis'],
          correct: 1,
          rationale: 'FKI-D: Fluids first (rehydration is priority #1), K+ ≥ 3.3 (check and replace before insulin), Insulin (IV regular drip), Dextrose (add D5W when glucose drops to ~250 to prevent hypo while continuing insulin to clear ketones).',
        },
      ],
      y: [
        {
          stem: 'Before starting an insulin drip for DKA, the nurse MUST verify:',
          options: ['The patient\'s weight for dosing', 'Serum potassium is ≥ 3.3 mEq/L', 'The patient has eaten within the last 4 hours', 'A12-lead ECG shows normal sinus rhythm'],
          correct: 1,
          rationale: 'K+ ≥ 3.3 is the absolute prerequisite before insulin in DKA. Insulin without adequate K+ → fatal hypokalemia → cardiac arrest. While weight-based dosing and ECG may be relevant, K+ is the non-negotiable safety check.',
        },
        {
          stem: 'During DKA treatment, dextrose (D5W) is added to the IV fluids when blood glucose reaches approximately:',
          options: ['100 mg/dL', '250 mg/dL', '400 mg/dL', '70 mg/dL'],
          correct: 1,
          rationale: 'At ~250 mg/dL, add dextrose to prevent hypoglycemia while CONTINUING the insulin drip. The goal is to clear ketones (not just lower glucose). If you stop insulin when glucose normalizes, ketones persist and acidosis continues.',
        },
        {
          stem: 'A patient in DKA has K+ of 3.1 mEq/L. The nurse should anticipate:',
          options: ['Starting the insulin drip immediately — 3.1 is close enough', 'IV potassium replacement BEFORE starting insulin', 'Oral potassium supplements with the insulin drip', 'No intervention — K+ will correct on its own'],
          correct: 1,
          rationale: '3.1 < 3.3 = hold insulin, give IV K+ first. Must be IV (not oral — too slow in an emergency). Resume insulin only when K+ reaches ≥ 3.3. "Close enough" doesn\'t apply to cardiac electrolytes.',
        },
      ],
      r: [
        {
          stem: 'In DKA, insulin causes potassium to:',
          options: ['Stay at the same level', 'Move OUT of cells into the blood', 'Move INTO cells, lowering serum potassium', 'Be excreted by the kidneys'],
          correct: 2,
          rationale: 'Insulin activates the Na+/K+-ATPase pump → drives K+ from blood INTO cells → serum K+ drops. This is why K+ must be adequate before giving insulin — if already low, insulin makes it critically low.',
        },
        {
          stem: 'The minimum potassium level required before starting insulin in DKA is:',
          options: ['2.5 mEq/L', '3.3 mEq/L', '4.0 mEq/L', '5.0 mEq/L'],
          correct: 1,
          rationale: 'K+ ≥ 3.3 mEq/L is the threshold. Below 3.3 = replace K+ first, then start insulin. This cutoff is critical for preventing fatal cardiac arrhythmias.',
        },
        {
          stem: 'The first treatment priority in DKA is:',
          options: ['Insulin administration', 'IV fluid resuscitation', 'Sodium bicarbonate', 'Oral glucose'],
          correct: 1,
          rationale: 'Fluids FIRST (FKI-D). Patients in DKA are severely dehydrated from osmotic diuresis. IV normal saline restores volume, improves perfusion, and begins to lower glucose even before insulin. Insulin comes after fluids and K+ check.',
        },
      ],
    },
  },

  'Glucagon — severe hypo rescue': {
    details: [
      'Used for SEVERE hypoglycemia when patient is UNCONSCIOUS or cannot swallow',
      'Routes: IM, SubQ, IV, intranasal (Baqsimi)',
      'MOA: Stimulates liver glycogen breakdown → raises blood glucose',
      'Position patient on their side (recovery position) — risk of vomiting/aspiration',
      'Onset: 10-15 minutes — have glucose ready for when they wake up',
      'Won\'t work if glycogen stores are depleted (chronic malnutrition, alcohol abuse, liver disease)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with T1DM is found unconscious with blood glucose of 28 mg/dL. The patient has chronic alcoholism and liver cirrhosis. After administering glucagon, blood glucose remains at 32 after 15 minutes. The nurse suspects:',
          options: ['The glucagon was administered incorrectly — redose with a higher amount', 'The patient\'s medical history has compromised the mechanism this drug relies on', 'The glucagon has likely expired — obtain a replacement kit and redose', 'The patient\'s condition has progressed beyond what glucagon can reverse'],
          correct: 1,
          rationale: 'Glucagon works by triggering glycogen→glucose conversion in the liver. Chronic alcohol abuse + cirrhosis = depleted glycogen stores → glucagon has no substrate to work on. IV dextrose (D50W) bypasses the liver entirely. Option A is a trap — redosing won\'t help if there\'s no glycogen.',
        },
        {
          stem: 'A patient\'s family administered intranasal glucagon (Baqsimi) at home. Upon EMS arrival, the patient is conscious but vomiting. The priority action is:',
          options: ['Administer another dose of glucagon since the first was nasal', 'Position on their side, give oral glucose when safe to swallow, and transport', 'Administer IV insulin to prevent rebound hyperglycemia', 'Give IV antiemetics before any other intervention'],
          correct: 1,
          rationale: 'Nausea/vomiting is common after glucagon. Position on side (aspiration precaution). The patient is conscious → oral glucose ASAP (glucagon effect is temporary, ~60-90 min). Do NOT give insulin — the whole point is raising glucose. Redosing isn\'t needed if it worked (patient is conscious).',
        },
        {
          stem: 'A nurse is teaching a patient\'s spouse how to administer glucagon in an emergency. The nurse should emphasize:',
          options: ['"Only use this if blood glucose is confirmed below 40 with a meter."', '"Use this if they\'re unconscious or unable to swallow — don\'t wait for a glucose reading. Position on their side."', '"Call 911 first and wait for paramedics to administer it."', '"Give it with orange juice for faster effect."'],
          correct: 1,
          rationale: 'In severe hypo emergencies, waiting for glucose confirmation delays treatment. If unconscious/unable to swallow → glucagon immediately, position on side (vomiting risk). THEN call 911. Option A delays life-saving treatment. Option D is impossible if the patient can\'t swallow.',
        },
      ],
      y: [
        {
          stem: 'Glucagon is appropriate for hypoglycemia when:',
          options: ['Blood glucose is below 70 and the patient is alert', 'The patient is unconscious or unable to swallow safely', 'The patient has mild shakiness but can eat', 'Blood glucose is below 100 before a meal'],
          correct: 1,
          rationale: 'Glucagon is for SEVERE hypo — unconscious or can\'t swallow (can\'t take oral glucose safely). Alert patients with mild symptoms get 15-15 rule (oral carbs). Glucagon is not for mild hypo.',
        },
        {
          stem: 'After administering glucagon, the nurse should:',
          options: ['Keep the patient flat on their back', 'Position on their side and offer oral carbohydrates when conscious', 'Administer insulin within 30 minutes to prevent rebound high', 'Discharge the patient once glucose normalizes'],
          correct: 1,
          rationale: 'Side position prevents aspiration (glucagon commonly causes nausea/vomiting). Oral carbs once conscious to sustain glucose (glucagon effect is temporary). Never give insulin after treating hypo. Patient needs monitoring, not immediate discharge.',
        },
        {
          stem: 'Glucagon raises blood glucose by:',
          options: ['Stimulating insulin production', 'Converting liver glycogen into glucose and releasing it into the blood', 'Blocking insulin receptors', 'Absorbing glucose from the intestines'],
          correct: 1,
          rationale: 'Glucagon activates hepatic glycogenolysis — breaks down stored glycogen → releases glucose into blood. This is the opposite of insulin\'s action. It requires adequate liver glycogen to work.',
        },
      ],
      r: [
        {
          stem: 'Glucagon is used to treat:',
          options: ['Hyperglycemia', 'Severe hypoglycemia', 'Diabetic ketoacidosis', 'Type 2 diabetes'],
          correct: 1,
          rationale: 'Glucagon treats severe hypoglycemia by raising blood glucose through glycogen breakdown. It\'s a rescue medication for emergencies, not routine glucose management.',
        },
        {
          stem: 'Available routes for glucagon administration include:',
          options: ['Oral and sublingual only', 'IM, SubQ, IV, and intranasal', 'IV only', 'Transdermal patch only'],
          correct: 1,
          rationale: 'Glucagon can be given IM (most common emergency), SubQ, IV (hospital), and intranasal (Baqsimi — newer, no injection needed). NOT oral — it would be destroyed by stomach acid.',
        },
        {
          stem: 'After glucagon administration, the patient should be positioned:',
          options: ['Flat on their back (supine)', 'On their side (recovery position)', 'Sitting upright at 90 degrees', 'In Trendelenburg position'],
          correct: 1,
          rationale: 'Recovery position (on side) prevents aspiration — glucagon commonly causes nausea and vomiting. An unconscious patient vomiting while supine could aspirate.',
        },
      ],
    },
  },

  'Sick Day Rule': {
    details: [
      'NEVER stop insulin in T1DM — even if not eating, the body still needs basal insulin',
      'Stopping insulin in T1DM = DKA within hours (no insulin → fat breakdown → ketones)',
      'Check blood glucose every 3-4 hours when sick',
      'Increase fluid intake to prevent dehydration',
      'Call provider if glucose >240 mg/dL, positive ketones, inability to eat/drink, or fever >101.5°F',
      'May need to adjust mealtime insulin, but NEVER stop basal insulin',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with T1DM has the flu and has been vomiting for 8 hours. They tell the nurse, "I can\'t eat anything, so I didn\'t take my insulin today." The nurse recognizes this as:',
          options: ['A reasonable decision — insulin without food creates unnecessary risk', 'A critical error that puts this patient at risk for a life-threatening complication', 'Partially correct — one type of insulin should have been continued', 'Only concerning if the patient has been without insulin for a full 24 hours'],
          correct: 1,
          rationale: 'In T1DM, basal insulin is ALWAYS needed — the body uses insulin for more than just food (cellular glucose uptake, preventing fat breakdown). No insulin for 8 hours in T1DM = DKA is likely already developing. Option C is partially right (skip mealtime if not eating) but the patient skipped ALL insulin, making B the best answer for the acute concern.',
        },
        {
          stem: 'A patient with T1DM calls the sick day hotline reporting glucose of 310 mg/dL, moderate urine ketones, and inability to keep fluids down. The nurse should advise:',
          options: ['"Continue checking glucose every 4 hours and try sipping clear fluids."', '"Go to the emergency department now — you need IV fluids and possibly IV insulin."', '"Take an extra dose of your rapid-acting insulin and call back in 2 hours."', '"This is normal when sick — just rest and your glucose will come down."'],
          correct: 1,
          rationale: 'Three red flags: glucose >240 + ketones + can\'t keep fluids down = DKA trajectory. The patient needs IV intervention (can\'t take oral fluids/meds). This is beyond "call back later." Option D is dangerously dismissive of ketones + vomiting in T1DM.',
        },
        {
          stem: 'A patient with T2DM on metformin and glipizide has the stomach flu and can\'t eat. The nurse should advise:',
          options: ['Stop all medications until they can eat again', 'Hold the glipizide (risk of hypo without food) but continue metformin; monitor glucose closely', 'Continue all medications as prescribed regardless of eating', 'Switch to insulin until the illness resolves'],
          correct: 1,
          rationale: 'Nuanced answer: glipizide (sulfonylurea) stimulates insulin regardless of food → hypo risk when not eating → HOLD. Metformin doesn\'t cause hypo alone → generally safe to continue. However, if severe vomiting/dehydration → hold metformin too (lactic acidosis risk). Option A is too broad — not all meds need to stop.',
        },
      ],
      y: [
        {
          stem: 'The most important sick day rule for a patient with T1DM is:',
          options: ['"Stop your insulin until you feel better and can eat."', '"Never stop your insulin — your body needs it even when you\'re not eating."', '"Double your insulin dose when sick to fight infection."', '"Only take insulin if your blood glucose is above 300."'],
          correct: 1,
          rationale: 'NEVER stop insulin in T1DM. The body needs basal insulin for cellular function, not just food coverage. Stopping → DKA within hours. Mealtime insulin may be adjusted, but basal insulin continues.',
        },
        {
          stem: 'A patient with diabetes should call their provider during illness when:',
          options: ['They have a mild headache', 'Blood glucose is consistently >240 mg/dL with ketones present', 'They missed one meal', 'Their temperature is 99.5°F'],
          correct: 1,
          rationale: 'Glucose >240 + ketones = DKA risk → call provider. Other call triggers: inability to eat/drink, vomiting >6 hours, fever >101.5°F, glucose not responding to correction doses.',
        },
        {
          stem: 'During illness, blood glucose should be checked:',
          options: ['Only in the morning', 'Every 3-4 hours', 'Once daily before bed', 'Only if the patient feels symptomatic'],
          correct: 1,
          rationale: 'Every 3-4 hours during illness. Stress hormones (cortisol, epinephrine) raise glucose unpredictably during illness. More frequent monitoring catches dangerous trends early.',
        },
      ],
      r: [
        {
          stem: 'Why is it dangerous for a T1DM patient to skip insulin when sick?',
          options: ['Blood glucose will drop too low without food to balance it', 'The body switches to an alternative energy source that produces dangerous byproducts', 'The immune system depends on insulin to mount an effective response', 'A single missed dose has minimal clinical significance'],
          correct: 1,
          rationale: 'T1DM = no endogenous insulin. Without exogenous insulin, cells can\'t use glucose → body burns fat → ketone production → metabolic acidosis → DKA. This can develop within hours of missing insulin.',
        },
        {
          stem: 'During a sick day, a diabetic patient should:',
          options: ['Reduce fluid intake to prevent nausea', 'Increase fluid intake to prevent dehydration', 'Exercise more to lower blood glucose', 'Fast completely until feeling better'],
          correct: 1,
          rationale: 'Increased fluids prevent dehydration (especially with vomiting/diarrhea/fever). Dehydration worsens hyperglycemia and concentrates ketones. Sugar-free fluids if glucose is high; regular fluids if glucose is low and patient can\'t eat.',
        },
        {
          stem: 'The sick day rule applies primarily to patients with:',
          options: ['Type 1 diabetes only', 'Type 2 diabetes only', 'Both Type 1 and Type 2 diabetes, but is most critical in T1DM', 'Prediabetes only'],
          correct: 2,
          rationale: 'Sick day rules apply to ALL diabetic patients, but the consequences of skipping insulin are most severe in T1DM (DKA risk). T2DM patients have some endogenous insulin, providing a buffer.',
        },
      ],
    },
  },

  'Hypoglycemia (TIRED) + 15-15 Rule': {
    details: [
      'TIRED mnemonic: Tachycardia, Irritability, Restlessness, Excessive hunger, Diaphoresis',
      '15-15 Rule: Give 15g fast-acting carbs, wait 15 minutes, recheck glucose',
      'Fast-acting carbs: 4 oz juice, 3-4 glucose tablets, 8 oz milk, 6-8 hard candies',
      'If still <70 after 15 min: repeat 15g carbs, recheck again',
      'Follow with complex carb + protein snack once stable (prevents rebound hypo)',
      'Severe hypo (unconscious): DO NOT give oral — use glucagon or IV dextrose',
    ],
    questions: {
      g: [
        {
          stem: 'A nurse finds a diabetic patient confused and diaphoretic. Blood glucose is 48 mg/dL. The patient is drowsy but able to follow simple commands. The nurse should:',
          options: ['Administer glucagon IM and position on their side', 'Provide oral fast-acting carbohydrates based on the patient\'s level of consciousness', 'Start IV dextrose as the first-line intervention', 'Hold all interventions until the provider arrives to evaluate'],
          correct: 1,
          rationale: 'Key detail: "able to follow simple commands" = can protect airway and swallow. Oral glucose (15-15 rule) is appropriate. Glucagon and IV dextrose are for UNCONSCIOUS patients who can\'t swallow. Option D delays treatment. The trap: students may overreact to the low glucose and use glucagon when oral carbs would suffice.',
        },
        {
          stem: 'A patient is treated with 15g of glucose tablets for blood glucose of 52 mg/dL. After 15 minutes, the recheck shows 64 mg/dL. The nurse should:',
          options: ['Document and continue monitoring — 64 is close enough to normal', 'Repeat 15g fast-acting carbohydrates — still below 70', 'Give glucagon since oral treatment isn\'t working', 'Notify the provider of treatment failure'],
          correct: 1,
          rationale: '64 is still below 70 = still hypoglycemic. Repeat the 15-15 rule: another 15g, wait 15 min, recheck. The trap: "64 is close to 70" tempts you to stop treating. Below 70 = continue treating.',
        },
        {
          stem: 'After treating hypoglycemia successfully (glucose now 82 mg/dL), the nurse should:',
          options: ['Document and resume normal activities — the episode is resolved', 'Provide a complex carbohydrate + protein snack to prevent rebound hypoglycemia', 'Administer the next scheduled insulin dose early', 'Hold all insulin for the rest of the day'],
          correct: 1,
          rationale: 'Fast-acting carbs raise glucose quickly but don\'t last. Without a follow-up snack (complex carb + protein), glucose will drop again. Crackers + cheese, half a sandwich, or peanut butter crackers sustain the level. Option D is excessive — you don\'t hold ALL insulin.',
        },
      ],
      y: [
        {
          stem: 'The 15-15 rule for hypoglycemia means:',
          options: ['Give 15 units of insulin, wait 15 minutes', 'Give 15g of fast-acting carbohydrates, wait 15 minutes, recheck glucose', 'Wait 15 minutes before calling the provider, then wait 15 more', 'Give 15mL of D50W IV push over 15 minutes'],
          correct: 1,
          rationale: '15-15 rule: 15g fast-acting carbs → wait 15 minutes → recheck. If still <70, repeat. Simple, systematic protocol for mild-moderate hypoglycemia in conscious patients.',
        },
        {
          stem: 'Which is an example of 15g of fast-acting carbohydrate?',
          options: ['A peanut butter sandwich', '4 oz (½ cup) of orange juice', 'A slice of pizza', 'A handful of almonds'],
          correct: 1,
          rationale: '4 oz juice = ~15g of fast-acting sugar. Peanut butter sandwich and pizza have fat/protein that slow absorption. Almonds are fat/protein with minimal carbs. For hypo, you need FAST sugar, not slow-release foods.',
        },
        {
          stem: 'The TIRED mnemonic for hypoglycemia symptoms stands for:',
          options: ['Tremors, Infection, Rash, Edema, Dizziness', 'Tachycardia, Irritability, Restlessness, Excessive hunger, Diaphoresis', 'Temperature elevation, Itching, Redness, Eye changes, Dry skin', 'Thirst, Increased urination, Rapid breathing, Elevated glucose, Dehydration'],
          correct: 1,
          rationale: 'TIRED = adrenergic response to low glucose: Tachycardia (heart compensating), Irritability, Restlessness, Excessive hunger (body demanding fuel), Diaphoresis (sweating — often the FIRST sign noticed). Option D describes HYPERglycemia symptoms.',
        },
      ],
      r: [
        {
          stem: 'Hypoglycemia is defined as blood glucose below:',
          options: ['100 mg/dL', '70 mg/dL', '50 mg/dL', '120 mg/dL'],
          correct: 1,
          rationale: 'Below 70 mg/dL = hypoglycemia. Below 54 = clinically significant. Below 40 = severe. Treatment begins at <70 in symptomatic patients.',
        },
        {
          stem: 'For a conscious patient with hypoglycemia, the FIRST action is:',
          options: ['Administer glucagon IM', 'Give 15g of fast-acting carbohydrates', 'Start an IV and give D50W', 'Call the provider and wait for orders'],
          correct: 1,
          rationale: 'Conscious + can swallow = oral glucose first (15-15 rule). Glucagon and IV dextrose are for unconscious patients. Don\'t wait for provider orders to treat symptomatic hypoglycemia — this is a nursing intervention.',
        },
        {
          stem: 'Diaphoresis (sweating) in a diabetic patient should make the nurse suspect:',
          options: ['Hyperglycemia', 'Hypoglycemia', 'Normal exercise response', 'Medication allergy'],
          correct: 1,
          rationale: 'Diaphoresis is a hallmark adrenergic response to hypoglycemia. The sympathetic nervous system activates as glucose drops → sweating, tachycardia, tremors. This is especially important in patients on beta-blockers where tachycardia is masked — diaphoresis may be the ONLY visible sign.',
        },
      ],
    },
  },

  'Beta-Blocker Masking': {
    details: [
      'Beta-blockers (propranolol, metoprolol, atenolol) block adrenergic symptoms of hypoglycemia',
      'MASKED symptoms: tachycardia, tremors, anxiety (beta-1 and beta-2 mediated)',
      'NOT masked: diaphoresis (sweating) — this is cholinergic, NOT adrenergic',
      'Diaphoresis becomes the ONLY reliable warning sign of hypo in beta-blocked patients',
      'Teach diabetic patients on beta-blockers to monitor glucose MORE frequently',
      'Don\'t rely on "feeling low" — may not feel it until dangerously low',
    ],
    questions: {
      g: [
        {
          stem: 'A diabetic patient on metoprolol has blood glucose of 45 mg/dL. Heart rate is 68 bpm, no tremors, but the patient is diaphoretic. A student nurse says, "They seem fine — HR is normal and no shaking." The nurse should:',
          options: ['Agree — vital signs are within normal limits and the patient appears stable', 'Intervene based on the glucose reading and the one symptom that is present', 'Recheck the glucose — the reading likely doesn\'t match the clinical picture', 'Provide a light snack and reassess in 30-60 minutes'],
          correct: 1,
          rationale: 'THE beta-blocker masking trap. Metoprolol blocks beta receptors → no tachycardia, no tremors. But diaphoresis is cholinergic (not blocked by beta-blockers) → it\'s the ONLY sign left. Glucose of 45 is severe hypo regardless of how "fine" they look. Treat with 15-15 rule NOW.',
        },
        {
          stem: 'A patient with T2DM and hypertension is on glipizide and propranolol. The nurse\'s priority teaching should include:',
          options: ['"Your blood pressure medication may raise your blood sugar."', '"Monitor your blood glucose more frequently — propranolol can mask the warning signs of low blood sugar, especially fast heartbeat."', '"You should stop the propranolol since it interacts with diabetes medications."', '"Take both medications with food to prevent stomach upset."'],
          correct: 1,
          rationale: 'Glipizide (sulfonylurea) = hypo risk. Propranolol (non-selective beta-blocker) = masks hypo symptoms. Combined = high-risk for UNRECOGNIZED hypoglycemia. The patient won\'t feel tachycardia or tremors → may not realize they\'re low until confusion or loss of consciousness. More frequent monitoring is the key safety measure.',
        },
        {
          stem: 'In a diabetic patient on beta-blockers, which finding should alert the nurse to possible hypoglycemia?',
          options: ['Heart rate of 110 bpm', 'Visible hand tremors', 'Unexplained diaphoresis with normal heart rate', 'Elevated blood pressure'],
          correct: 2,
          rationale: 'Beta-blockers prevent tachycardia (option A) and may reduce tremors (option B) during hypo. Diaphoresis with a normal heart rate in a diabetic on beta-blockers = hypoglycemia until proven otherwise. The "normal" HR is actually abnormal — it SHOULD be elevated if the patient is truly hypoglycemic.',
        },
      ],
      y: [
        {
          stem: 'Beta-blockers mask hypoglycemia symptoms by:',
          options: ['Lowering blood glucose further', 'Blocking the adrenergic response (tachycardia, tremors) that normally warns of low blood sugar', 'Preventing glucose from entering the brain', 'Increasing insulin sensitivity'],
          correct: 1,
          rationale: 'Normally, low glucose triggers adrenaline → tachycardia, tremors, anxiety as warning signs. Beta-blockers block these beta-adrenergic receptors → the warning system is disabled. The patient goes from "normal" to confused/unconscious without intermediate warnings.',
        },
        {
          stem: 'The ONE hypoglycemia symptom that is NOT masked by beta-blockers is:',
          options: ['Tachycardia', 'Tremors', 'Diaphoresis (sweating)', 'Anxiety and nervousness'],
          correct: 2,
          rationale: 'Diaphoresis is mediated by CHOLINERGIC (not adrenergic) nerve fibers. Beta-blockers only block beta-adrenergic receptors → sweating is unaffected. This makes diaphoresis the most reliable hypo sign in beta-blocked patients.',
        },
        {
          stem: 'A diabetic patient on atenolol should be taught to:',
          options: ['Check blood glucose less often since the medication stabilizes it', 'Check blood glucose MORE often and watch for sweating as a sign of low blood sugar', 'Stop the atenolol if blood sugar drops below 100', 'Take atenolol only when blood sugar is above 150'],
          correct: 1,
          rationale: 'More frequent monitoring compensates for the masked warning signs. The patient should recognize diaphoresis as a potential hypo sign and check glucose immediately when sweating unexpectedly.',
        },
      ],
      r: [
        {
          stem: 'Beta-blockers are concerning in diabetic patients because they:',
          options: ['Raise blood glucose levels', 'Mask the warning signs of hypoglycemia', 'Directly cause severe hypoglycemia', 'Interfere with insulin absorption'],
          correct: 1,
          rationale: 'Beta-blockers mask adrenergic hypo symptoms (tachycardia, tremors). The patient doesn\'t feel the warning signs → may not realize glucose is dangerously low until altered mental status occurs.',
        },
        {
          stem: 'Which hypoglycemia symptom is cholinergic (not blocked by beta-blockers)?',
          options: ['Rapid heartbeat', 'Hand tremors', 'Sweating', 'Anxiety'],
          correct: 2,
          rationale: 'Sweating (diaphoresis) is cholinergic — controlled by acetylcholine, not adrenaline. Beta-blockers target beta-adrenergic receptors → they block tachycardia, tremors, anxiety but NOT sweating.',
        },
        {
          stem: 'A diabetic patient on beta-blockers should be taught that if they notice unexpected sweating, they should:',
          options: ['Ignore it — sweating is normal', 'Check their blood glucose immediately — it may be a sign of hypoglycemia', 'Take an extra dose of their beta-blocker', 'Reduce physical activity'],
          correct: 1,
          rationale: 'Unexplained sweating in a diabetic on beta-blockers = check glucose. Since other warning signs (tachycardia, tremors) are masked, sweating may be the only clue that glucose is dropping.',
        },
      ],
    },
  },

};
