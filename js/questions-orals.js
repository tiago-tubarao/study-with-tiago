// ══════════════════════════════════════════════
// NCLEX Questions — ORAL ANTIDIABETICS (7 drugs × 9 questions = 63 total)
// 3 difficulty levels: g=green(hardest), y=yellow(moderate), r=red(foundational)
// ══════════════════════════════════════════════

window.DRUG_DEEP_ORALS = {

  'Metformin — 1st line T2DM': {
    details: [
      'MOA: Decreases hepatic glucose production, increases insulin sensitivity — does NOT stimulate insulin release',
      'Key lab: Check renal function (SCr/GFR) before starting — CI if GFR < 30',
      'Lactic acidosis risk: rare but fatal. Hold 48h before AND after IV contrast dye',
      'No hypoglycemia when used alone (doesn\'t touch insulin secretion)',
      'GI side effects (diarrhea, nausea) are #1 reason patients stop — take with food, titrate slowly',
      'Can cause B12 deficiency with long-term use — monitor annually',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with T2DM on metformin 1000mg BID is scheduled for a CT scan with IV contrast tomorrow morning. The nurse should:',
          options: ['Hold metformin today and restart 48 hours after the procedure', 'Administer metformin with a full glass of water before the scan', 'Contact the provider to switch to glipizide before the procedure', 'Hold metformin only on the morning of the scan and resume that evening'],
          correct: 0,
          rationale: 'Metformin must be held 48h BEFORE and AFTER IV contrast due to risk of contrast-induced nephropathy → metformin accumulation → lactic acidosis. Option D is the trap — holding only the morning isn\'t enough. Option C is unnecessary — you just hold and resume, not switch drugs.',
        },
        {
          stem: 'A patient taking metformin 850mg BID reports persistent diarrhea and a tingling sensation in both feet for the past 3 months. The nurse should prioritize:',
          options: ['Recommend taking metformin with meals to reduce GI symptoms', 'Check the patient\'s most recent B12 level', 'Hold the next dose and notify the provider of possible lactic acidosis', 'Assess the patient\'s blood glucose log for hypoglycemic episodes'],
          correct: 1,
          rationale: 'Tingling in both feet for 3 months = peripheral neuropathy. Long-term metformin + neuropathy = B12 deficiency (metformin inhibits B12 absorption). Option C is the trap — lactic acidosis presents ACUTELY (tachycardia, hypotension, confusion), not with chronic tingling.',
        },
        {
          stem: 'A patient with T2DM, CHF, and a GFR of 25 mL/min asks about starting metformin. The nurse recognizes:',
          options: ['Metformin is safe — start at a low dose and titrate up', 'Metformin is contraindicated — GFR below 30 increases lactic acidosis risk', 'Metformin is preferred in CHF because it\'s cardioprotective', 'Start metformin but monitor renal function weekly'],
          correct: 1,
          rationale: 'Metformin is CI when GFR < 30 — impaired kidneys can\'t clear metformin → accumulation → lactic acidosis. Option C is the trap — while metformin has some CV benefits, the renal impairment overrides everything. CHF also reduces renal perfusion.',
        },
      ],
      y: [
        {
          stem: 'A nurse is teaching a newly diagnosed T2DM patient about metformin. The patient asks, "Will this make my blood sugar go too low?" The best response is:',
          options: ['"Yes, always carry glucose tablets with you."', '"Metformin alone rarely causes hypoglycemia because it doesn\'t stimulate insulin release."', '"Only if you skip meals — make sure you eat on schedule."', '"It depends on your A1C level — we\'ll monitor closely."'],
          correct: 1,
          rationale: 'Metformin works by decreasing hepatic glucose production — it does NOT stimulate the pancreas. Hypoglycemia is rare when used alone. Option A is the trap — that advice applies to sulfonylureas/insulin, not metformin.',
        },
        {
          stem: 'A patient on metformin reports nausea and diarrhea after starting the medication. The nurse should:',
          options: ['Hold the medication and report a possible allergic reaction', 'Advise taking metformin with food and that GI effects often improve over time', 'Discontinue metformin immediately — these are signs of lactic acidosis', 'Switch to an injectable medication'],
          correct: 1,
          rationale: 'GI effects (nausea, diarrhea, bloating) are the MOST COMMON reason patients stop metformin. Taking with food and slow dose titration help. These are NOT signs of lactic acidosis (which is acute: tachycardia, hypotension, confusion, respiratory distress).',
        },
        {
          stem: 'Which lab should the nurse check BEFORE a patient starts metformin?',
          options: ['Thyroid function (TSH)', 'Renal function (GFR/creatinine)', 'Liver enzymes (AST/ALT)', 'Complete blood count (CBC)'],
          correct: 1,
          rationale: 'Metformin is cleared by the kidneys. GFR must be checked before starting — CI if GFR < 30, caution if 30-45. Renal impairment → metformin accumulation → lactic acidosis risk.',
        },
      ],
      r: [
        {
          stem: 'Metformin is classified as the first-line drug for T2DM because:',
          options: ['It directly stimulates pancreatic beta cells to secrete insulin', 'It targets the liver and improves insulin sensitivity with a favorable safety profile', 'It is the most potent glucose-lowering agent available', 'It reverses insulin resistance permanently with long-term use'],
          correct: 1,
          rationale: 'Metformin decreases liver glucose output and increases insulin sensitivity. Unlike sulfonylureas, it doesn\'t stimulate insulin secretion → low hypo risk. It\'s first-line due to efficacy, safety, and low cost. It does NOT cure diabetes.',
        },
        {
          stem: 'The most serious adverse effect of metformin is:',
          options: ['Hypoglycemia', 'Weight gain', 'Lactic acidosis', 'Hyperkalemia'],
          correct: 2,
          rationale: 'Lactic acidosis is rare but potentially fatal. Risk increases with renal impairment, IV contrast dye, or hypoxic conditions. Metformin alone rarely causes hypo and is actually weight-neutral to weight-loss.',
        },
        {
          stem: 'A patient on metformin should be instructed to hold the medication when:',
          options: ['They have a cold or flu', 'They are scheduled for a procedure with IV contrast dye', 'Their blood glucose is above 200 mg/dL', 'They miss a meal'],
          correct: 1,
          rationale: 'IV contrast can impair renal function → metformin accumulation → lactic acidosis. Hold 48h before and after contrast procedures. Missing a meal doesn\'t require holding metformin (it doesn\'t cause hypo alone).',
        },
      ],
    },
  },

  'Sulfonylureas (all 5 named)': {
    details: [
      'MOA: Stimulates pancreatic beta cells to release MORE insulin (insulin secretagogue)',
      'Names: Chlorpropamide, Glipizide, Tolazamide, Glyburide, Glimepiride — all "-ide" endings',
      'CAUSES hypoglycemia — the most dangerous side effect (stimulates insulin regardless of glucose)',
      'Weight gain is common (insulin promotes fat storage)',
      'Disulfiram-like reaction with alcohol (especially chlorpropamide) — flushing, nausea, vomiting',
      'CI in sulfa allergy (cross-sensitivity possible), renal/hepatic impairment',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on glipizide has a blood glucose of 62 mg/dL and is diaphoretic. The patient states they had two beers with dinner. The nurse recognizes this patient is at risk for:',
          options: ['Lactic acidosis from the combined effect of alcohol and the medication', 'Prolonged hypoglycemia from a dual mechanism affecting glucose recovery', 'An isolated disulfiram-like reaction unrelated to the glucose reading', 'Diabetic ketoacidosis triggered by alcohol consumption'],
          correct: 1,
          rationale: 'Double hit: glipizide forces insulin release → glucose drops. Alcohol blocks the liver from making new glucose (gluconeogenesis) → the body can\'t recover from the low. Result: prolonged, dangerous hypoglycemia. Option C is a trap — the disulfiram reaction (flushing) is separate from the hypo risk, but BOTH are happening.',
        },
        {
          stem: 'A patient with a sulfa allergy is prescribed glyburide. The nurse should:',
          options: ['Administer as ordered — sulfa drugs and sulfonylureas are unrelated', 'Question the order — there is potential cross-sensitivity between sulfa antibiotics and sulfonylureas', 'Give the first dose in the clinic and observe for 4 hours', 'Administer with diphenhydramine prophylaxis'],
          correct: 1,
          rationale: 'Sulfonylureas contain a sulfonamide moiety — potential cross-reactivity with sulfa allergy. The nurse should question and clarify with the provider. Option A is the trap — they ARE chemically related. The risk is debated but the nurse\'s role is to flag it.',
        },
        {
          stem: 'An elderly patient on glyburide is found confused and diaphoretic at 0300. Blood glucose is 38 mg/dL. After treating the acute episode, the nurse should be concerned about:',
          options: ['The episode is resolved once glucose normalizes — resume normal monitoring', 'This medication\'s prolonged action means glucose may drop again — extended monitoring is critical', 'The patient should be switched to a different drug class before morning', 'This was likely dietary and is unlikely to recur with the same dose'],
          correct: 1,
          rationale: 'Glyburide has the LONGEST duration of all sulfonylureas (especially in elderly with reduced renal clearance). One treatment may not be enough — glucose can drop again hours later. Extended monitoring with frequent glucose checks is critical. This is why glyburide is often avoided in elderly patients.',
        },
      ],
      y: [
        {
          stem: 'A patient on sulfonylurea therapy should be taught to:',
          options: ['Take the medication on an empty stomach for better absorption', 'Always carry fast-acting glucose because hypoglycemia is a risk', 'Expect weight loss as a side effect', 'Drink alcohol in moderation — no interactions exist'],
          correct: 1,
          rationale: 'Sulfonylureas stimulate insulin release regardless of blood glucose → hypo risk. Patients MUST carry glucose. Weight gain (not loss) is expected. Alcohol interaction is significant (disulfiram reaction + enhanced hypo).',
        },
        {
          stem: 'Which adverse effect is MOST commonly associated with sulfonylurea therapy?',
          options: ['Lactic acidosis', 'Hypoglycemia', 'Pancreatitis', 'Urinary tract infections'],
          correct: 1,
          rationale: 'Sulfonylureas force insulin release → hypoglycemia is the #1 concern. Lactic acidosis is metformin. Pancreatitis is GLP-1/DPP-4. UTIs are SGLT-2 inhibitors. Each drug class has its signature adverse effect.',
        },
        {
          stem: 'A patient on chlorpropamide drinks a glass of wine and develops facial flushing, nausea, and headache. This is:',
          options: ['An allergic reaction to wine', 'A disulfiram-like reaction — sulfonylureas interact with alcohol', 'Signs of hyperglycemia', 'An expected response that doesn\'t require intervention'],
          correct: 1,
          rationale: 'Disulfiram-like reaction: sulfonylureas (especially chlorpropamide) inhibit aldehyde dehydrogenase when combined with alcohol → accumulation of acetaldehyde → flushing, nausea, vomiting. Patients must be warned about alcohol.',
        },
      ],
      r: [
        {
          stem: 'A patient asks how their glipizide works. The nurse explains that this medication:',
          options: ['Prevents carbohydrates from being digested in the intestines', 'Signals the pancreas to increase its insulin output', 'Makes muscle and fat cells respond better to existing insulin', 'Causes excess glucose to be filtered out through the kidneys'],
          correct: 1,
          rationale: 'Sulfonylureas are insulin secretagogues — they stimulate pancreatic beta cells to release insulin. This is why they cause hypoglycemia (insulin release happens regardless of blood glucose level).',
        },
        {
          stem: 'Which ending do all sulfonylurea drug names share?',
          options: ['-olol', '-pril', '-ide', '-flozin'],
          correct: 2,
          rationale: 'All sulfonylureas end in "-ide": glipIDE, glyburIDE, glimeprIDE, chlorpropamIDE, tolazamIDE. -olol = beta blockers, -pril = ACE inhibitors, -flozin = SGLT-2 inhibitors.',
        },
        {
          stem: 'A common side effect of sulfonylurea therapy besides hypoglycemia is:',
          options: ['Weight loss', 'Weight gain', 'Diarrhea', 'Frequent urination'],
          correct: 1,
          rationale: 'Sulfonylureas increase insulin → insulin promotes fat storage → weight gain. This is the opposite of metformin (weight neutral/loss), GLP-1 (weight loss), and SGLT-2 (weight loss).',
        },
      ],
    },
  },

  'Acarbose — GLUCOSE TABS ONLY': {
    details: [
      'MOA: Blocks alpha-glucosidase enzyme → delays carbohydrate breakdown in the gut',
      'Slows glucose absorption — reduces postprandial (after-meal) spikes',
      'THE critical teaching: if hypo occurs, give PURE GLUCOSE (tablets/gel) only',
      'Why? Acarbose blocks complex sugar breakdown — juice, honey, candy WON\'T work fast enough',
      'Take with FIRST BITE of each meal (needs to be present when carbs arrive)',
      'GI side effects: flatulence, bloating, diarrhea (undigested carbs ferment in gut)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on acarbose and glipizide experiences hypoglycemia with a blood glucose of 58 mg/dL. A family member offers orange juice. The nurse should:',
          options: ['Allow the orange juice — it is an appropriate fast-acting carbohydrate', 'Intervene and provide a different form of carbohydrate instead', 'Give the juice and follow with a complex carbohydrate and protein snack', 'Administer glucagon IM since this patient cannot absorb oral carbohydrates effectively'],
          correct: 1,
          rationale: 'THE acarbose trap. Acarbose blocks alpha-glucosidase → complex sugars (sucrose in juice, fructose in honey) CAN\'T be broken down fast enough. ONLY pure glucose (dextrose) bypasses this blockade. Option D is wrong — the patient is conscious. Option A is the dangerous common mistake.',
        },
        {
          stem: 'A patient on acarbose alone (no other diabetes meds) has a blood glucose of 65 mg/dL. The nurse should:',
          options: ['Give 15g of glucose tablets immediately — this is hypoglycemia', 'Recheck in 15 minutes — acarbose alone rarely causes true hypoglycemia', 'Give orange juice and a snack', 'Administer glucagon SubQ'],
          correct: 1,
          rationale: 'Acarbose alone does NOT cause hypoglycemia — it only slows carb absorption, it doesn\'t stimulate insulin. A reading of 65 in a patient on acarbose ALONE likely reflects normal variation or a lab/timing issue. If on acarbose + sulfonylurea, THEN it\'s a concern (the sulfonylurea causes the hypo). The trap: treating a non-emergency as an emergency.',
        },
        {
          stem: 'A patient on acarbose reports "terrible gas and bloating — I want to stop this medication." The nurse\'s BEST response is:',
          options: ['"I\'ll contact the provider right away — those symptoms indicate a serious reaction."', '"This is a known effect that typically improves. Let\'s talk about ways to manage it while your body adjusts."', '"That\'s likely related to your diet choices rather than the medication itself."', '"I\'ll get you something for the bloating — an antacid should take care of it."'],
          correct: 1,
          rationale: 'GI effects are EXPECTED and actually confirm the drug is working (blocking carb digestion → carbs ferment in colon → gas). Symptoms typically improve over 4-8 weeks as gut flora adjusts. The nurse should validate the discomfort, explain the mechanism, and discuss coping strategies rather than discontinuing.',
        },
      ],
      y: [
        {
          stem: 'A patient asks when to take acarbose. The correct instruction is:',
          options: ['"30 minutes before meals on an empty stomach"', '"With the first bite of each meal"', '"At bedtime to control fasting glucose"', '"2 hours after eating to prevent glucose spikes"'],
          correct: 1,
          rationale: 'Acarbose must be in the gut WHEN carbs arrive — it blocks the enzyme before digestion starts. "First bite of each meal." Option A describes levothyroxine timing. Option C describes basal insulin.',
        },
        {
          stem: 'Which patient would benefit MOST from acarbose therapy?',
          options: ['A patient with mainly elevated fasting glucose', 'A patient with high postprandial (after-meal) glucose spikes', 'A patient who frequently skips meals', 'A patient who needs basal insulin coverage'],
          correct: 1,
          rationale: 'Acarbose delays carb absorption → specifically reduces postprandial glucose spikes. It doesn\'t affect fasting glucose much. A patient who skips meals wouldn\'t benefit (no carbs to block). It\'s not insulin replacement.',
        },
        {
          stem: 'The nurse is reviewing side effects of acarbose with a patient. Expected GI side effects include:',
          options: ['Constipation and dry mouth', 'Flatulence, bloating, and diarrhea', 'Nausea and metallic taste', 'Heartburn and esophageal reflux'],
          correct: 1,
          rationale: 'Undigested carbohydrates reach the colon and are fermented by bacteria → gas (flatulence), bloating, and diarrhea. These are the hallmark GI effects of alpha-glucosidase inhibitors.',
        },
      ],
      r: [
        {
          stem: 'Acarbose works by:',
          options: ['Stimulating insulin release from the pancreas', 'Blocking carbohydrate digestion in the intestines', 'Increasing glucose excretion in the urine', 'Decreasing glucose production in the liver'],
          correct: 1,
          rationale: 'Acarbose blocks alpha-glucosidase, the enzyme that breaks down complex carbohydrates into glucose. This delays sugar absorption after meals. It does NOT affect insulin release, urine glucose, or liver production.',
        },
        {
          stem: 'If a patient on acarbose develops hypoglycemia, the nurse should administer:',
          options: ['Orange juice', 'Glucose tablets', 'Honey', 'Regular cola'],
          correct: 1,
          rationale: 'ONLY pure glucose (dextrose tablets/gel) works because acarbose blocks the enzymes needed to break down sucrose (juice), fructose (honey), and other complex sugars. Pure glucose doesn\'t need enzymatic breakdown.',
        },
        {
          stem: 'The most common side effects of acarbose are:',
          options: ['Hypoglycemia and weight gain', 'Gas, bloating, and diarrhea', 'Urinary tract infections', 'Thyroid tumors'],
          correct: 1,
          rationale: 'GI effects (flatulence, bloating, diarrhea) from undigested carbs fermenting in the colon. Acarbose alone doesn\'t cause hypo or weight gain. UTIs are SGLT-2. Thyroid is GLP-1.',
        },
      ],
    },
  },

  'SGLT-2 Inhibitors (-flozins)': {
    details: [
      'MOA: Blocks glucose reabsorption in kidneys → glucose excreted in urine (glycosuria)',
      'Sugar in urine = breeding ground for yeast/bacteria → UTI and genital yeast infections common',
      'Euglycemic DKA: DKA with NORMAL blood glucose (200-250) — THE exam trap',
      'Weight loss + BP reduction = bonus effects (cardioprotective, renoprotective)',
      'Assess renal function — less effective with low GFR',
      'Teach: increased urination is expected (how the drug works), maintain hydration',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on empagliflozin presents with nausea, vomiting, Kussmaul respirations, and blood glucose of 220 mg/dL. The nurse suspects:',
          options: ['Hyperglycemic hyperosmolar state based on the dehydration symptoms', 'Diabetic ketoacidosis despite the relatively low glucose reading', 'Lactic acidosis secondary to a medication interaction', 'Expected gastrointestinal side effects of the current medication regimen'],
          correct: 1,
          rationale: 'THE classic SGLT-2 trap. Kussmaul respirations = acidosis. But glucose is only 220 (not >300 like typical DKA). SGLT-2 inhibitors cause "euglycemic DKA" — ketoacidosis with deceptively normal glucose because the drug dumps glucose in urine. Option A: HHS has glucose >600, no ketosis. Option D: Kussmaul breathing is NEVER "normal."',
        },
        {
          stem: 'Which patient should the nurse report to the provider BEFORE administering canagliflozin?',
          options: ['Patient with A1C of 8.2% and BMI of 32', 'Patient with GFR of 28 mL/min and creatinine of 2.1', 'Patient reporting urinating more frequently than usual', 'Patient with fasting blood glucose of 156 mg/dL'],
          correct: 1,
          rationale: 'GFR 28 = Stage 4 CKD. SGLT-2 inhibitors need functioning kidneys to work. Less effective AND increased AKI risk. Option C is the trap — increased urination is HOW the drug works (expected). Options A and D describe the exact patient who benefits from SGLT-2.',
        },
        {
          stem: 'A patient on dapagliflozin is scheduled for surgery. The nurse should anticipate:',
          options: ['Continue dapagliflozin through the perioperative period', 'Hold dapagliflozin 3-4 days before surgery to prevent euglycemic DKA', 'Switch to IV insulin and continue dapagliflozin', 'Hold only on the morning of surgery'],
          correct: 1,
          rationale: 'Surgical stress + NPO status + SGLT-2 inhibitor = high risk for euglycemic DKA. Current guidelines recommend holding SGLT-2 inhibitors 3-4 days before surgery. Option D is insufficient. Option A is dangerous. This is a newer guideline that many students don\'t know.',
        },
      ],
      y: [
        {
          stem: 'A female patient on dapagliflozin reports vaginal itching and white discharge for 2 weeks. The nurse should:',
          options: ['Discontinue dapagliflozin immediately', 'Educate that genital yeast infections are common, advise OTC antifungal, report to provider', 'Obtain a urine culture for UTI', 'Reassure that symptoms will resolve as the body adjusts'],
          correct: 1,
          rationale: 'Genital yeast infections are KNOWN, COMMON side effects of SGLT-2 inhibitors (sugar in urine feeds yeast). Don\'t stop the drug for a manageable side effect — treat the yeast infection. Option D is wrong — it won\'t self-resolve.',
        },
        {
          stem: 'A patient asks why they are urinating so much since starting empagliflozin. The nurse explains:',
          options: ['"You may have a urinary tract infection — I\'ll order a culture."', '"The medication works by removing excess sugar through your urine, which increases urine volume."', '"You\'re probably drinking too much water."', '"This is a sign the medication isn\'t working — I\'ll notify the provider."'],
          correct: 1,
          rationale: 'SGLT-2 inhibitors block glucose reabsorption → glycosuria → osmotic diuresis → increased urine. This is the mechanism of action, not a side effect. Patients should maintain hydration. Polyuria = the drug IS working.',
        },
        {
          stem: 'Benefits of SGLT-2 inhibitors beyond glucose control include:',
          options: ['Increased appetite and weight gain', 'Weight loss and blood pressure reduction', 'Improved thyroid function', 'Enhanced insulin sensitivity in muscles'],
          correct: 1,
          rationale: 'SGLT-2 inhibitors cause weight loss (glucose calories lost in urine) and mild BP reduction (osmotic diuresis). They are also cardioprotective and renoprotective — emerging indications beyond diabetes.',
        },
      ],
      r: [
        {
          stem: 'SGLT-2 inhibitors work by:',
          options: ['Stimulating insulin release from the pancreas', 'Blocking glucose reabsorption in the kidneys, causing sugar to be excreted in urine', 'Slowing carbohydrate digestion in the intestines', 'Increasing insulin sensitivity in fat cells'],
          correct: 1,
          rationale: 'SGLT-2 (sodium-glucose co-transporter 2) inhibitors block glucose reabsorption in the proximal tubule → glucose spills into urine. The "-flozin" ending: canagli-FLOZIN, dapagli-FLOZIN, empagli-FLOZIN.',
        },
        {
          stem: 'Common side effects of SGLT-2 inhibitors include:',
          options: ['Constipation and dry mouth', 'Urinary tract infections and genital yeast infections', 'Severe hypoglycemia', 'Thyroid tumors'],
          correct: 1,
          rationale: 'Sugar in urine creates a breeding ground for bacteria (UTIs) and yeast (genital infections). SGLT-2 inhibitors alone rarely cause hypoglycemia. Thyroid tumors = GLP-1 agonists.',
        },
        {
          stem: 'SGLT-2 inhibitor drug names all end in:',
          options: ['-gliptin', '-tide', '-flozin', '-formin'],
          correct: 2,
          rationale: '-flozin = SGLT-2 inhibitors (canagliflozin, dapagliflozin, empagliflozin). -gliptin = DPP-4 inhibitors. -tide = GLP-1 agonists. -formin = biguanides.',
        },
      ],
    },
  },

  'GLP-1 Agonists (Semaglutide/Ozempic)': {
    details: [
      'MOA: Mimics incretin hormone → stimulates insulin release ONLY when glucose is high (glucose-dependent)',
      'BBW: Thyroid C-cell tumors in rodents — CI in personal/family history of medullary thyroid cancer or MEN2',
      'Contraindicated in T1DM — these drugs need functioning beta cells',
      'Major benefit: weight loss (suppresses appetite, slows gastric emptying)',
      'Pancreatitis risk — teach to report severe abdominal pain radiating to back',
      'SubQ injection — some daily (liraglutide), some weekly (semaglutide)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on semaglutide mentions their mother had "thyroid cancer removed." The nurse should:',
          options: ['Educate that thyroid monitoring with regular labs can manage this risk', 'Clarify the TYPE of thyroid cancer — medullary thyroid carcinoma is a contraindication, papillary is not', 'Reassure that the BBW only applies to rodent studies', 'Recommend metformin instead since it also promotes weight loss'],
          correct: 1,
          rationale: 'The BBW is specific to MEDULLARY thyroid cancer and MEN2. Papillary thyroid cancer (most common) is NOT a contraindication. The nurse must CLARIFY the type. Option A can\'t "monitor" a contraindication. Option C dangerously dismisses the BBW.',
        },
        {
          stem: 'A patient with T1DM and BMI of 34 asks about Ozempic for weight loss. The nurse\'s best response is:',
          options: ['"We\'ll need to adjust your insulin doses when you start it."', '"GLP-1 agonists are contraindicated in T1DM because they require functioning beta cells."', '"That\'s a great option for both your diabetes and weight."', '"You\'ll need to stop your insulin first since Ozempic stimulates your own insulin."'],
          correct: 1,
          rationale: 'GLP-1 agonists need functioning beta cells to work. In T1DM, beta cells are destroyed. Option D is the DEADLIEST trap — stopping insulin in T1DM → fatal DKA. Option A would never start a contraindicated drug and "adjust around it."',
        },
        {
          stem: 'A patient on liraglutide calls reporting severe epigastric pain radiating to the back, nausea, and vomiting for 6 hours. The nurse should:',
          options: ['Advise taking the medication with food to reduce GI effects', 'Schedule an appointment for next week to evaluate', 'Instruct the patient to go to the ED — these symptoms suggest pancreatitis', 'Recommend an OTC antacid and monitor for 24 hours'],
          correct: 2,
          rationale: 'Severe epigastric pain radiating to BACK + nausea = classic pancreatitis. GLP-1 agonists carry known pancreatitis risk. This is an EMERGENCY. Option B ("next week") for acute abdominal pain is negligent.',
        },
      ],
      y: [
        {
          stem: 'A patient starting semaglutide asks about the most common side effects. The nurse should mention:',
          options: ['Hypoglycemia and weight gain', 'Nausea, vomiting, and decreased appetite', 'Urinary tract infections and yeast infections', 'Elevated blood pressure and edema'],
          correct: 1,
          rationale: 'GI effects (nausea, vomiting, diarrhea, decreased appetite) are the most common side effects of GLP-1 agonists. The decreased appetite is actually part of the weight loss mechanism. UTIs = SGLT-2. Hypo/weight gain = sulfonylureas.',
        },
        {
          stem: 'A patient on semaglutide has lost 15 pounds in 3 months. The patient is concerned. The nurse should:',
          options: ['"This is concerning — I\'ll report it to the provider as an adverse reaction."', '"Weight loss is an expected and beneficial effect of this medication."', '"You should eat more to counteract the weight loss."', '"The medication isn\'t working correctly if you\'re losing weight."'],
          correct: 1,
          rationale: 'Weight loss is a KNOWN BENEFIT of GLP-1 agonists — they suppress appetite and slow gastric emptying. For a T2DM patient, weight loss improves insulin sensitivity. This is a feature, not a bug.',
        },
        {
          stem: 'The nurse teaches a patient on weekly semaglutide to:',
          options: ['Inject at a different time each week for best results', 'Inject on the same day each week, SubQ in abdomen, thigh, or upper arm', 'Take the medication orally with a full glass of water', 'Inject IV for faster absorption'],
          correct: 1,
          rationale: 'Weekly semaglutide is SubQ, same day each week for consistency. Injection sites rotate among abdomen, thigh, upper arm. Oral semaglutide exists (Rybelsus) but has specific taking instructions. Never IV.',
        },
      ],
      r: [
        {
          stem: 'The Black Box Warning for GLP-1 agonists involves:',
          options: ['Liver failure', 'Thyroid C-cell tumors (medullary thyroid cancer risk)', 'Severe hypoglycemia', 'Cardiovascular events'],
          correct: 1,
          rationale: 'BBW: risk of thyroid C-cell tumors (medullary thyroid carcinoma) observed in rodent studies. CI in patients with personal/family history of medullary thyroid cancer or MEN2 syndrome.',
        },
        {
          stem: 'GLP-1 agonists are contraindicated in T1DM because:',
          options: ['They cause severe hyperglycemia in T1DM', 'They require functioning pancreatic beta cells, which are destroyed in T1DM', 'They interact with insulin injections', 'They are only available in oral form'],
          correct: 1,
          rationale: 'GLP-1 agonists work by enhancing insulin release from beta cells. In T1DM, autoimmune destruction eliminates beta cells — the drug has nothing to stimulate. These patients need exogenous insulin.',
        },
        {
          stem: 'GLP-1 agonists promote weight loss primarily by:',
          options: ['Increasing metabolism and calorie burning', 'Suppressing appetite and slowing gastric emptying', 'Blocking fat absorption in the intestines', 'Increasing glucose excretion in urine'],
          correct: 1,
          rationale: 'GLP-1 agonists act centrally to reduce appetite and peripherally to slow gastric emptying (feel full longer → eat less). Glucose in urine = SGLT-2 mechanism, not GLP-1.',
        },
      ],
    },
  },

  'DPP-4 Inhibitors (Sitagliptin)': {
    details: [
      'MOA: Blocks DPP-4 enzyme → prevents incretin hormone breakdown → more insulin when glucose is high',
      'Drug names end in "-gliptin": sitagliptin, saxagliptin, linagliptin, alogliptin',
      'Weight NEUTRAL — doesn\'t cause gain or loss (unique advantage)',
      'Low hypoglycemia risk when used alone (glucose-dependent insulin release)',
      'Pancreatitis risk — same class concern as GLP-1 agonists',
      'Oral medication — once daily, no injections needed',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on sitagliptin reports severe upper abdominal pain after eating fatty foods. The pain radiates to the back. The nurse should:',
          options: ['Advise the patient to avoid fatty foods — this is a dietary issue', 'Assess for pancreatitis — DPP-4 inhibitors carry this risk, and the presentation is classic', 'Suggest an antacid — this sounds like GERD', 'Reassure that GI effects are common and temporary with DPP-4 inhibitors'],
          correct: 1,
          rationale: 'Severe epigastric pain radiating to back after fatty food = classic pancreatitis presentation. DPP-4 inhibitors (like GLP-1 agonists) carry pancreatitis risk. Option D is the trap — while GI effects CAN occur, this specific pattern (severe, radiating, postprandial) is NOT benign.',
        },
        {
          stem: 'A patient asks why they were prescribed sitagliptin instead of metformin. The most likely reason is:',
          options: ['Sitagliptin is always more effective than metformin', 'The patient likely has a contraindication to metformin such as renal impairment', 'Sitagliptin causes more weight loss than metformin', 'Sitagliptin is cheaper than metformin'],
          correct: 1,
          rationale: 'Metformin is ALWAYS first-line unless contraindicated. If a patient is on sitagliptin instead, they likely have renal impairment (metformin CI), GI intolerance, or another contraindication. Sitagliptin is weight neutral (not weight loss). Metformin is cheaper. The trap: students may not realize sitagliptin is second-line.',
        },
        {
          stem: 'A patient is on sitagliptin AND glipizide. Blood glucose is 58 mg/dL. The nurse recognizes:',
          options: ['Sitagliptin caused the hypoglycemia — hold it and notify provider', 'The glipizide is the likely culprit — sitagliptin alone rarely causes hypo, but combined with a sulfonylurea increases the risk', 'Both medications equally contributed — hold both', 'This glucose is within normal range — no intervention needed'],
          correct: 1,
          rationale: 'DPP-4 inhibitors alone rarely cause hypo (glucose-dependent mechanism). But combined with sulfonylureas (which force insulin release), hypo risk increases significantly. The sulfonylurea is the primary driver. Option A blames the wrong drug.',
        },
      ],
      y: [
        {
          stem: 'A benefit of DPP-4 inhibitors compared to sulfonylureas is:',
          options: ['Greater glucose-lowering effect', 'Weight neutrality — they don\'t cause weight gain', 'They are injectable, which improves compliance', 'They eliminate the need for blood glucose monitoring'],
          correct: 1,
          rationale: 'DPP-4 inhibitors are weight neutral — a significant advantage over sulfonylureas (which cause weight gain). They\'re oral (not injectable). They have modest glucose-lowering compared to sulfonylureas. Monitoring is still needed.',
        },
        {
          stem: 'DPP-4 inhibitors enhance insulin release in a "glucose-dependent" manner. This means:',
          options: ['They only work when blood glucose is elevated — reducing hypo risk', 'They require glucose tablets to be taken with the medication', 'They work better with higher A1C levels', 'Patients must eat glucose before taking the medication'],
          correct: 0,
          rationale: 'Glucose-dependent = the drug stimulates insulin release only when blood glucose is high. When glucose is normal, the drug\'s effect diminishes → lower hypo risk compared to sulfonylureas (which force insulin release regardless of glucose level).',
        },
        {
          stem: 'A patient on sitagliptin should be taught to report which symptom immediately?',
          options: ['Mild headache', 'Severe abdominal pain radiating to the back', 'Slight nausea after the first dose', 'Joint stiffness in the morning'],
          correct: 1,
          rationale: 'Severe abdominal pain radiating to back = possible pancreatitis — a known risk with DPP-4 inhibitors. This requires emergency evaluation. Mild headache and slight nausea are common and transient. Joint pain can occur but isn\'t emergent.',
        },
      ],
      r: [
        {
          stem: 'DPP-4 inhibitor drug names end in:',
          options: ['-flozin', '-gliptin', '-tide', '-formin'],
          correct: 1,
          rationale: '-gliptin = DPP-4 inhibitors: sitaGLIPTIN, saxaGLIPTIN, linaGLIPTIN, aloGLIPTIN. -flozin = SGLT-2. -tide = GLP-1 agonists. -formin = biguanides.',
        },
        {
          stem: 'DPP-4 inhibitors affect body weight by:',
          options: ['Causing significant weight loss', 'Causing significant weight gain', 'Being weight neutral — no significant change', 'Causing weight loss initially, then weight gain'],
          correct: 2,
          rationale: 'Weight neutrality is a key feature of DPP-4 inhibitors. Compare: sulfonylureas = weight gain, GLP-1 = weight loss, SGLT-2 = weight loss, metformin = neutral to slight loss.',
        },
        {
          stem: 'DPP-4 inhibitors work by:',
          options: ['Blocking glucose absorption in the gut', 'Preventing the breakdown of incretin hormones so they can stimulate insulin longer', 'Blocking glucose reabsorption in the kidneys', 'Directly stimulating insulin release from beta cells'],
          correct: 1,
          rationale: 'DPP-4 is the enzyme that breaks down incretin hormones (GLP-1, GIP). By blocking DPP-4, these hormones last longer → more insulin release when glucose is high. They don\'t directly stimulate beta cells — they extend the natural incretin effect.',
        },
      ],
    },
  },

  'Meglitinides (Repaglinide)': {
    details: [
      'MOA: Stimulates insulin release — similar to sulfonylureas but shorter acting',
      'Key rule: "Skip the meal, skip the dose" — taken right before each meal',
      'Rapid onset (15-30 min), short duration (2-4 hours)',
      'Hypoglycemia risk — but less than sulfonylureas due to shorter duration',
      'Take 15-30 minutes before meals (up to 3x/day)',
      'Good for patients with erratic eating schedules (flexible dosing)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on repaglinide is about to skip lunch due to a medical procedure. The patient asks if they should still take their noon dose. The nurse advises:',
          options: ['Take the dose as scheduled to maintain glucose control', 'Skip the dose — "skip the meal, skip the dose" applies to meglitinides', 'Take half the dose to provide partial coverage', 'Take the dose after the procedure when they can eat'],
          correct: 1,
          rationale: '"Skip the meal, skip the dose" is THE meglitinide rule. These short-acting insulin secretagogues are meant to cover meals. No meal = no need for the dose = hypoglycemia risk if taken without food. Option C is made up — no half-dose protocol exists.',
        },
        {
          stem: 'A patient is on repaglinide TID with meals AND glipizide daily. The nurse should question this combination because:',
          options: ['The medications cancel each other out', 'Both stimulate insulin release — using them together significantly increases hypoglycemia risk without additional benefit', 'Repaglinide is only for T1DM while glipizide is for T2DM', 'Glipizide blocks the absorption of repaglinide'],
          correct: 1,
          rationale: 'Both are insulin secretagogues working on similar channels. Combining them doubles the insulin stimulation without proportional glucose benefit → excessive hypo risk. This is a prescribing error the nurse should catch.',
        },
        {
          stem: 'A patient with an irregular eating schedule (sometimes eats 2 meals, sometimes 4) asks which diabetes medication offers the most flexibility. The nurse should discuss:',
          options: ['Glipizide — take once daily regardless of meals', 'Repaglinide — take before each meal, skip if no meal', 'Glargine insulin — covers 24 hours regardless of meals', 'Metformin — take with or without food'],
          correct: 1,
          rationale: 'Repaglinide\'s short action and meal-based dosing makes it ideal for irregular eaters. Take before each meal you eat, skip if you skip. Glipizide is daily (less flexible). Glargine is basal (doesn\'t cover meals). Metformin is taken consistently regardless of meals.',
        },
      ],
      y: [
        {
          stem: 'The nurse teaches a patient on repaglinide to take the medication:',
          options: ['At bedtime for overnight glucose control', '15-30 minutes before each meal', 'Once daily in the morning with breakfast', 'Only when blood glucose is above 200 mg/dL'],
          correct: 1,
          rationale: 'Repaglinide is taken 15-30 minutes before each meal to cover the mealtime glucose spike. Its rapid onset (15-30 min) and short duration (2-4 hours) match meal timing perfectly.',
        },
        {
          stem: 'Compared to sulfonylureas, meglitinides have:',
          options: ['Longer duration of action and higher hypo risk', 'Shorter duration of action and relatively lower hypo risk', 'No risk of hypoglycemia whatsoever', 'Stronger glucose-lowering effect'],
          correct: 1,
          rationale: 'Meglitinides are shorter acting (2-4h vs 12-24h for sulfonylureas) → insulin stimulation wears off faster → less sustained hypo risk. They still CAN cause hypo, just less likely and shorter-lived.',
        },
        {
          stem: 'A patient on repaglinide has a blood glucose of 72 mg/dL before dinner. The patient plans to eat a full meal. The nurse should:',
          options: ['Hold the repaglinide — glucose is borderline low', 'Give the dose as prescribed — the meal will provide glucose to match the insulin stimulation', 'Give half the dose to be safe', 'Contact the provider before giving any medication'],
          correct: 1,
          rationale: '72 is within normal range (70-100). The patient is about to eat → food will raise glucose. Repaglinide\'s purpose is to cover the meal. Holding it would result in postprandial hyperglycemia. The drug matches the meal — that\'s the design.',
        },
      ],
      r: [
        {
          stem: 'The key teaching for meglitinides (repaglinide) is:',
          options: ['"Take it at the same time every day regardless of meals"', '"Skip the meal, skip the dose"', '"Take it at bedtime only"', '"Only take it when your blood sugar is high"'],
          correct: 1,
          rationale: '"Skip the meal, skip the dose" — meglitinides are mealtime insulin stimulators. No meal = no need for extra insulin = skip the dose to avoid hypoglycemia.',
        },
        {
          stem: 'Meglitinides work by:',
          options: ['Blocking glucose absorption in the gut', 'Stimulating the pancreas to release insulin for a short duration', 'Increasing insulin sensitivity in muscles', 'Blocking glucose reabsorption in kidneys'],
          correct: 1,
          rationale: 'Meglitinides are short-acting insulin secretagogues — they stimulate beta cells to release insulin, similar to sulfonylureas but with shorter duration (2-4 hours vs 12-24 hours).',
        },
        {
          stem: 'An advantage of repaglinide over sulfonylureas is:',
          options: ['It never causes hypoglycemia', 'Its shorter duration allows flexible meal-based dosing', 'It promotes weight loss', 'It doesn\'t require a prescription'],
          correct: 1,
          rationale: 'Repaglinide\'s short duration (2-4h) means you dose around meals — flexible for patients with irregular eating. Sulfonylureas are once/twice daily with longer duration. Repaglinide CAN cause hypo (just shorter-lived), doesn\'t promote weight loss.',
        },
      ],
    },
  },

};
