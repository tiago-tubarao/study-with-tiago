// ══════════════════════════════════════════════
// 84 Individual Drug Flashcards — Adult Health Exam 3
// Image on front, 12-Point Clinical Framework on back
// Generated from 26 drug groups × individual drugs
// ══════════════════════════════════════════════

window.FLASHCARD_DATA_DRUGS = (function() {

  var sections = [
    { id: 'diabetes', label: 'Diabetes', icon: '\u{1F489}', color: '#2B8A3E' },
    { id: 'endocrine', label: 'Endocrine', icon: '\u{1F98B}', color: '#5F3DC4' },
    { id: 'renal', label: 'Renal', icon: '\u{1FAD8}', color: '#1971C2' },
    { id: 'hematology', label: 'Hematology', icon: '\u{1FA78}', color: '#C92A2A' }
  ];

  // ── 26 Drug Groups with 8-Category Content ──
  var groups = {

    'rapid-acting': {
      section: 'diabetes', drugClass: 'Rapid-Acting Insulin',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Shortest onset insulin; facilitates cellular uptake of glucose',
        '\u{1F50D} LOOKS LIKE \u2014 Lowered blood glucose; postprandial glycemic control',
        '\u26A0\uFE0F GOES WRONG \u2014 Hypoglycemia (cold, clammy, tachycardic), hypokalemia, lipohypertrophy',
        '\u{1F52C} MONITOR \u2014 Blood glucose (BG) right before administration, potassium levels',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Give within 10-15 minutes of a meal. Patient MUST have food in front of them',
        '\u{1F4DA} TEACH \u2014 Rotate injection sites. S/S of hypoglycemia and the 15/15 rule (15g fast carbs, recheck in 15 mins)',
        '\u{1F6A8} PRIORITY \u2014 Hypoglycemia \u2014 ALWAYS assess the symptomatic patient FIRST',
        '\u26D4 CAN\'T MIX \u2014 Beta-blockers (mask signs of hypoglycemia). Corticosteroids (increase BG, requiring dose adjustment)',
        '\u{1F504} SIMILAR \u2014 Hypo (cold/clammy/shaky) vs Hyper (warm/dry/fruity breath). Rapid insulin causes hypo, not hyper',
        '\u{1F198} EMERGENCY \u2014 Severe hypoglycemia: seizure/coma. If conscious \u2192 15g fast carbs. If unconscious \u2192 Glucagon IM or D50 IV. Position on SIDE',
        '\u{1F4CB} ASSESS FIRST \u2014 Check BG BEFORE treating. Tremor + tachy can mimic other emergencies. BG confirms hypoglycemia',
        '\u26D3\uFE0F CHAIN \u2014 Too much insulin \u2192 glucose drops \u2192 brain starves \u2192 counter-regulatory surge (epi) \u2192 tremor/tachy/sweating \u2192 seizure/coma if untreated'
      ],
      mnemonic: 'Rapid = Race to eat! Food MUST be at bedside before you push the plunger.'
    },

    'regular-nph': {
      section: 'diabetes', drugClass: 'Short & Intermediate Insulin',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Regular (Short) for meal coverage/IV use; NPH (Intermediate) for basal coverage',
        '\u{1F50D} LOOKS LIKE \u2014 Steady BG control. NPH appears CLOUDY; Regular is CLEAR',
        '\u26A0\uFE0F GOES WRONG \u2014 Hypoglycemia (NPH peak is 4-12 hours \u2014 highest risk time)',
        '\u{1F52C} MONITOR \u2014 BG, HbA1c, potassium',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Regular is the ONLY insulin given IV. Draw up Clear (Regular) before Cloudy (NPH) when mixing',
        '\u{1F4DA} TEACH \u2014 Eat a bedtime snack for NPH to prevent middle-of-the-night hypoglycemia',
        '\u{1F6A8} PRIORITY \u2014 Timing meals with the NPH peak',
        '\u26D4 CAN\'T MIX \u2014 Do NOT mix NPH with long-acting insulins',
        '\u{1F504} SIMILAR \u2014 Regular = CLEAR (short, mealtime). NPH = CLOUDY (intermediate, peaks 4-12hr). Always draw CLEAR before CLOUDY',
        '\u{1F198} EMERGENCY \u2014 NPH nocturnal hypoglycemia: night sweats, confusion, morning headache. PREVENT with bedtime snack',
        '\u{1F4CB} ASSESS FIRST \u2014 Is meal ready? Can patient eat after injection? If NPO \u2192 HOLD the dose',
        '\u26D3\uFE0F CHAIN \u2014 NPH peaks 4-12hr \u2192 BG drops mid-sleep \u2192 counter-regulatory hormones surge \u2192 AM rebound hyperglycemia (Somogyi effect)'
      ],
      mnemonic: 'RN = Regular Nurse draws Regular FIRST! Clear before Cloudy.'
    },

    'long-acting': {
      section: 'diabetes', drugClass: 'Long-Acting Basal Insulin',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Basal insulin; no distinct peak (low risk of hypoglycemia)',
        '\u{1F50D} LOOKS LIKE \u2014 Consistent, 24-hour BG control',
        '\u26A0\uFE0F GOES WRONG \u2014 Hypoglycemia (rare), hypokalemia',
        '\u{1F52C} MONITOR \u2014 Fasting BG, HbA1c',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Give once or twice daily at the SAME time',
        '\u{1F4DA} TEACH \u2014 Do NOT skip doses even if sick (sick day rules)',
        '\u{1F6A8} PRIORITY \u2014 NEVER mix long-acting insulin with any other insulin in the same syringe',
        '\u26D4 CAN\'T MIX \u2014 Cannot be administered IV or mixed with any other insulin',
        '\u{1F504} SIMILAR \u2014 Long-acting (steady 24hr, no peak) vs Rapid (drops fast after meals). NEVER confuse \u2014 wrong insulin = wrong timing',
        '\u{1F198} EMERGENCY \u2014 Rarely causes hypo alone. If hypo occurs, assess for drug interactions or stacking with other insulin',
        '\u{1F4CB} ASSESS FIRST \u2014 Verify patient taking it daily at SAME time. Check renal function (prolongs duration if eGFR < 30)',
        '\u26D3\uFE0F CHAIN \u2014 Provides basal insulin 24/7 \u2192 cells use glucose steadily \u2192 prevents fasting hyperglycemia \u2192 prevents DKA. No peak = safer'
      ],
      mnemonic: 'Long-acting = Lone wolf. NEVER mix, NEVER IV, same time every day.'
    },

    'metformin': {
      section: 'diabetes', drugClass: 'Biguanide',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Decreases hepatic glucose production; increases insulin sensitivity',
        '\u{1F50D} LOOKS LIKE \u2014 Lowered HbA1c, weight loss (sometimes). Does NOT stimulate insulin release (low hypoglycemia risk)',
        '\u26A0\uFE0F GOES WRONG \u2014 Lactic acidosis (muscle aches, hyperventilation), GI upset (diarrhea), B12 deficiency',
        '\u{1F52C} MONITOR \u2014 BUN/Creatinine (renal function), liver enzymes',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 HOLD 48 hours before and after IV contrast dye. Give with meals to reduce GI upset',
        '\u{1F4DA} TEACH \u2014 Report unusual muscle pain or difficulty breathing (lactic acidosis)',
        '\u{1F6A8} PRIORITY \u2014 Renal failure risk if combined with IV contrast',
        '\u26D4 CAN\'T MIX \u2014 IV contrast dye (iodine-based)',
        '\u{1F504} SIMILAR \u2014 Metformin (no hypo risk alone) vs Sulfonylureas (HIGH hypo risk). Both lower BG but very different safety profiles',
        '\u{1F198} EMERGENCY \u2014 Lactic acidosis: muscle pain, hyperventilation, pH < 7.35. STOP metformin. IV bicarb, supportive care. Triggered by renal failure + contrast dye',
        '\u{1F4CB} ASSESS FIRST \u2014 Check BUN/Creatinine BEFORE starting. eGFR < 30 = contraindicated. Check LFTs baseline',
        '\u26D3\uFE0F CHAIN \u2014 Metformin blocks hepatic gluconeogenesis \u2192 less glucose produced \u2192 fasting BG drops. Also \u2191 insulin sensitivity \u2192 muscles use more glucose'
      ],
      mnemonic: 'METformin MET its match with contrast \u2014 HOLD 48hr before AND after!'
    },

    'sulfonylureas': {
      section: 'diabetes', drugClass: 'Insulin Secretagogue',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Stimulates the pancreas to release more insulin',
        '\u{1F50D} LOOKS LIKE \u2014 Lowered fasting and postprandial BG',
        '\u26A0\uFE0F GOES WRONG \u2014 Severe hypoglycemia, weight gain, disulfiram-like reaction with alcohol',
        '\u{1F52C} MONITOR \u2014 BG, signs of hypoglycemia',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 HOLD if the patient is NPO or not eating',
        '\u{1F4DA} TEACH \u2014 Take 30 mins before meals. Avoid alcohol. Wear sunscreen (photosensitivity)',
        '\u{1F6A8} PRIORITY \u2014 High risk for hypoglycemia in older adults (Glyburide is on the Beers criteria list)',
        '\u26D4 CAN\'T MIX \u2014 Alcohol, sulfa allergies (cross-sensitivity)',
        '\u{1F504} SIMILAR \u2014 Sulfonylurea (stimulates pancreas ALWAYS) vs DPP-4 (only when glucose HIGH). SU = high hypo risk. DPP-4 = low risk',
        '\u{1F198} EMERGENCY \u2014 Severe hypoglycemia in elderly: confusion, falls, seizures. Long duration means hypo can RECUR. Monitor for hours after treatment',
        '\u{1F4CB} ASSESS FIRST \u2014 Did patient eat? If NPO or skipping meals \u2192 HOLD dose ALWAYS. Check age (Glyburide on Beers list for >65)',
        '\u26D3\uFE0F CHAIN \u2014 SU stimulates beta cells \u2192 \u2191 insulin release even without food \u2192 BG drops \u2192 hypoglycemia \u2192 counter-regulatory surge \u2192 tremor/tachy'
      ],
      mnemonic: 'GLI- prefix = GLucose goes Low = hypoglycemia! HOLD if NPO.'
    },

    'sglt2': {
      section: 'diabetes', drugClass: 'SGLT2 Inhibitor',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Blocks glucose reabsorption in the kidneys; you pee out the sugar',
        '\u{1F50D} LOOKS LIKE \u2014 Lowered BG, weight loss, mild diuresis',
        '\u26A0\uFE0F GOES WRONG \u2014 UTI, yeast infections, dehydration, orthostatic hypotension, DKA',
        '\u{1F52C} MONITOR \u2014 Urine for ketones, BUN/Creatinine, BP (fluid volume deficit)',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Assess hydration status and fall risk',
        '\u{1F4DA} TEACH \u2014 Excellent perineal hygiene to prevent infections. Change positions slowly',
        '\u{1F6A8} PRIORITY \u2014 Sepsis from untreated UTI',
        '\u26D4 CAN\'T MIX \u2014 Diuretics (increases risk of severe dehydration/hypotension)',
        '\u{1F504} SIMILAR \u2014 Euglycemic DKA (SGLT2) vs Regular DKA: Both have ketones + acidosis but SGLT2 DKA has NORMAL glucose. Easiest to miss',
        '\u{1F198} EMERGENCY \u2014 Euglycemic DKA: fruity breath, Kussmaul, BG may be only 250. STOP SGLT2 immediately. Treat like standard DKA',
        '\u{1F4CB} ASSESS FIRST \u2014 Check hydration status FIRST. Assess orthostatic vitals. Screen for UTI symptoms. Fall risk assessment critical',
        '\u26D3\uFE0F CHAIN \u2014 SGLT2 blocks renal glucose reabsorption \u2192 glycosuria \u2192 osmotic diuresis \u2192 dehydration. Glucose in urine \u2192 UTI/yeast breeding ground'
      ],
      mnemonic: 'SGLT2 = Sugar Goes to Loo, Twice! Watch for UTI + yeast.'
    },

    'glp1-dpp4': {
      section: 'diabetes', drugClass: 'Incretin-Based Therapy',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Incretin mimetics; slow gastric emptying, increase satiety, stimulate insulin release only when glucose is high',
        '\u{1F50D} LOOKS LIKE \u2014 Weight loss, lowered postprandial BG',
        '\u26A0\uFE0F GOES WRONG \u2014 Pancreatitis (severe abdominal pain radiating to the back), GI upset',
        '\u{1F52C} MONITOR \u2014 Amylase, lipase, BG',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Administer Exenatide/Liraglutide SubQ. Sitagliptin is PO',
        '\u{1F4DA} TEACH \u2014 Report severe, unrelenting abdominal pain immediately',
        '\u{1F6A8} PRIORITY \u2014 Acute pancreatitis',
        '\u26D4 CAN\'T MIX \u2014 Patients with a history of medullary thyroid cancer (GLP-1s)',
        '\u{1F504} SIMILAR \u2014 Pancreatitis pain (epigastric radiating to back) vs Gallbladder (RUQ). GLP-1 causes pancreatitis. Check amylase/lipase to distinguish',
        '\u{1F198} EMERGENCY \u2014 Acute pancreatitis: severe epigastric pain to back, \u2191 amylase/lipase, N/V. STOP GLP-1 IMMEDIATELY. NPO, IV fluids, pain management',
        '\u{1F4CB} ASSESS FIRST \u2014 Screen for medullary thyroid cancer history BEFORE starting any GLP-1. Assess baseline amylase/lipase. Family hx of MTC = contraindicated',
        '\u26D3\uFE0F CHAIN \u2014 GLP-1 slows gastric emptying + \u2191 satiety \u2192 \u2193 appetite \u2192 weight loss + \u2193 BG. Pancreatic overstimulation \u2192 pancreatitis risk'
      ],
      mnemonic: 'GLP-1 = Great for Losing Pounds but watch the Pancreas + Thyroid!'
    },

    'tzd': {
      section: 'diabetes', drugClass: 'TZD / Insulin Sensitizer',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Increases cellular insulin sensitivity',
        '\u{1F50D} LOOKS LIKE \u2014 Better long-term glycemic control',
        '\u26A0\uFE0F GOES WRONG \u2014 Fluid retention, worsening heart failure (HF), liver toxicity',
        '\u{1F52C} MONITOR \u2014 Daily weights, lung sounds (crackles), ALT/AST (liver enzymes)',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Assess for edema, SOB, and weight gain',
        '\u{1F4DA} TEACH \u2014 Report rapid weight gain or shortness of breath',
        '\u{1F6A8} PRIORITY \u2014 Worsening heart failure (pulmonary edema)',
        '\u26D4 CAN\'T MIX \u2014 Class III or IV Heart Failure',
        '\u{1F504} SIMILAR \u2014 TZD edema (fluid retention from drug) vs HF edema (heart failure). Both = swollen ankles. TZD worsens existing HF. Check BNP/echo',
        '\u{1F198} EMERGENCY \u2014 TZD-induced acute HF: rapid weight gain (5+ lbs/week), orthopnea, crackles. STOP TZD. Diuretics + O2 + cardiology consult',
        '\u{1F4CB} ASSESS FIRST \u2014 Check ejection fraction BEFORE starting (Class III/IV HF = contraindicated). Baseline weight + ankle edema. Daily weights CRITICAL',
        '\u26D3\uFE0F CHAIN \u2014 TZD activates PPAR-gamma \u2192 \u2191 Na reabsorption \u2192 fluid retention \u2192 volume overload \u2192 worsens HF. Also \u2191 insulin sensitivity (therapeutic)'
      ],
      mnemonic: 'TZD = Think Zonking Da heart! Fluid + liver + HF.'
    },

    'alpha-glucosidase': {
      section: 'diabetes', drugClass: 'Carb Blocker',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Slows carbohydrate digestion and absorption in the GI tract',
        '\u{1F50D} LOOKS LIKE \u2014 Flatter postprandial glucose spikes',
        '\u26A0\uFE0F GOES WRONG \u2014 Severe GI distress (flatulence, diarrhea, abdominal pain), hepatotoxicity',
        '\u{1F52C} MONITOR \u2014 BG, liver enzymes',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 MUST be taken with the FIRST bite of a meal',
        '\u{1F4DA} TEACH \u2014 If hypoglycemia occurs, treat with pure DEXTROSE (glucose tabs/gel), NOT table sugar, because Acarbose blocks sucrose absorption',
        '\u{1F6A8} PRIORITY \u2014 Treating hypoglycemia correctly (use DEXTROSE, not juice/candy)',
        '\u26D4 CAN\'T MIX \u2014 Patients with IBS or bowel obstruction',
        '\u{1F504} SIMILAR \u2014 Acarbose hypo treatment is DIFFERENT: MUST use pure DEXTROSE (glucose tabs). Regular sugar/juice WON\u2019T work because drug blocks digestion',
        '\u{1F198} EMERGENCY \u2014 Hypoglycemia while on Acarbose: patient takes juice \u2192 BG stays LOW (drug blocks it). ONLY glucose tabs/gel/D50 will work',
        '\u{1F4CB} ASSESS FIRST \u2014 Screen for bowel obstruction, IBS, IBD BEFORE starting. Check baseline LFTs. Assess GI tolerance',
        '\u26D3\uFE0F CHAIN \u2014 Acarbose blocks brush border enzymes \u2192 carbs digest SLOWLY \u2192 flatter postprandial spike. Undigested carbs ferment in colon \u2192 gas/bloating'
      ],
      mnemonic: 'ACARbose = A CARB blocker \u2014 FIRST bite + glucose tabs ONLY for hypo!'
    },

    'amylin': {
      section: 'diabetes', drugClass: 'Amylin Analog',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Slows gastric emptying and suppresses glucagon',
        '\u{1F50D} LOOKS LIKE \u2014 Less postprandial glucose spiking',
        '\u26A0\uFE0F GOES WRONG \u2014 Severe hypoglycemia (when combined with insulin)',
        '\u{1F52C} MONITOR \u2014 BG constantly',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Give SubQ before major meals. Do NOT mix with insulin in the same syringe',
        '\u{1F4DA} TEACH \u2014 Inject at least 2 inches away from insulin injection sites',
        '\u{1F6A8} PRIORITY \u2014 Profound hypoglycemia within 3 hours of dosing',
        '\u26D4 CAN\'T MIX \u2014 Gastroparesis (already have delayed gastric emptying)',
        '\u{1F504} SIMILAR \u2014 Amylin + insulin hypo (SEVERE, within 3hr) vs GLP-1 hypo (rare alone). Amylin always paired with insulin = much higher risk',
        '\u{1F198} EMERGENCY \u2014 Profound hypoglycemia within 3 hours of dosing. Cut premeal insulin by 50%. If severe: D50 IV or Glucagon IM',
        '\u{1F4CB} ASSESS FIRST \u2014 Can patient recognize hypo symptoms? Do they have reliable access to fast carbs? If not \u2192 too high-risk for amylin',
        '\u26D3\uFE0F CHAIN \u2014 Pramlintide slows gastric emptying + suppresses glucagon \u2192 prolonged low BG. Combined with rapid insulin = SEVERE hypo window 0-3hr post-dose'
      ],
      mnemonic: 'PRAMlintide = PRAMbulance \u2014 slow down, keep 2 inches from insulin!'
    },

    'hypo-rescue': {
      section: 'diabetes', drugClass: 'Emergency Rescue',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Elevates BG quickly. Glucagon stimulates hepatic glycogenolysis; D50 is pure IV glucose',
        '\u{1F50D} LOOKS LIKE \u2014 Patient wakes up, BG > 70 mg/dL',
        '\u26A0\uFE0F GOES WRONG \u2014 Nausea/vomiting (Glucagon), phlebitis/tissue necrosis (D50 infiltration)',
        '\u{1F52C} MONITOR \u2014 BG every 15 minutes until stable; IV site for D50',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Roll patient on their side after Glucagon (prevents aspiration from vomiting). Push D50 slowly through a large-bore IV',
        '\u{1F4DA} TEACH \u2014 Provide a complex carb + protein snack once awake to prevent rebound hypoglycemia',
        '\u{1F6A8} PRIORITY \u2014 Airway protection (aspiration risk with Glucagon)',
        '\u26D4 CAN\'T MIX \u2014 Glucagon won\'t work in starving/emaciated patients (no glycogen stores)',
        '\u{1F504} SIMILAR \u2014 Glucagon (needs liver glycogen) vs D50 (pure glucose, always works). Starving/malnourished patient \u2192 Glucagon WON\u2019T work \u2192 use D50',
        '\u{1F198} EMERGENCY \u2014 Unconscious hypoglycemia: secure airway FIRST. No IV \u2192 Glucagon IM. IV available \u2192 D50 (faster). Recheck BG q15min. Feed when awake',
        '\u{1F4CB} ASSESS FIRST \u2014 Check IV access BEFORE choosing agent. Assess nutritional status (glycogen stores). Position on SIDE before Glucagon (vomiting risk)',
        '\u26D3\uFE0F CHAIN \u2014 Severe hypo \u2192 brain glucose drops \u2192 altered LOC \u2192 can\u2019t eat \u2192 needs injectable rescue. Glucagon \u2192 glycogenolysis \u2192 glucose released. D50 = direct'
      ],
      mnemonic: 'Glucagon = roll on SIDE (vomiting). D50 = large-bore IV ONLY. Feed after!'
    },

    'levothyroxine': {
      section: 'endocrine', drugClass: 'Thyroid Hormone',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Synthetic T4 hormone',
        '\u{1F50D} LOOKS LIKE \u2014 Increased energy, weight loss, normal HR, normal TSH levels',
        '\u26A0\uFE0F GOES WRONG \u2014 Thyrotoxicosis/Hyperthyroidism (tachycardia, palpitations, heat intolerance)',
        '\u{1F52C} MONITOR \u2014 TSH, T3, T4, heart rate',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Give in the morning, on an empty stomach, 30-60 mins before breakfast',
        '\u{1F4DA} TEACH \u2014 Therapy is LIFELONG. Do NOT abruptly stop. Report chest pain or racing heart',
        '\u{1F6A8} PRIORITY \u2014 Cardiac dysrhythmias from toxicity',
        '\u26D4 CAN\'T MIX \u2014 Iron, calcium, and antacids (binds to levothyroxine \u2014 space by 4 HOURS)',
        '\u{1F504} SIMILAR \u2014 Levothyroxine toxicity (hyper signs from overdose) vs Graves\u2019 disease (hyper from autoimmune). Both = tachy/tremor. Check med history to distinguish',
        '\u{1F198} EMERGENCY \u2014 Thyroid storm from overdose: fever >106\u00B0F, delirium, severe tachy. STOP levothyroxine. PTU \u2192 Iodine \u2192 Beta-blocker \u2192 Dexamethasone',
        '\u{1F4CB} ASSESS FIRST \u2014 Check TSH/free T4 BEFORE adjusting dose. Is patient taking with Ca/Fe (blocks absorption)? Taking AM on empty stomach?',
        '\u26D3\uFE0F CHAIN \u2014 T4 converts to T3 (active) \u2192 \u2191 metabolic rate \u2192 \u2191 O2 demand + cardiac workload. Overdose = excessive T3 \u2192 thyrotoxicosis'
      ],
      mnemonic: 'LEVO = 4S Rule: Same time, Separate Ca/Fe by 4hr, Stomach empty, Signs of toxicity.'
    },

    'antithyroid': {
      section: 'endocrine', drugClass: 'Antithyroid Agent',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Blocks thyroid hormone synthesis (Methimazole, PTU); shrinks/destroys thyroid gland (SSKI, Radioactive Iodine)',
        '\u{1F50D} LOOKS LIKE \u2014 Weight gain, lowered HR, decreased anxiety',
        '\u26A0\uFE0F GOES WRONG \u2014 Agranulocytosis (low WBCs), hepatotoxicity (PTU), hypothyroidism',
        '\u{1F52C} MONITOR \u2014 WBC count, liver enzymes, signs of infection',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Give SSKI through a STRAW (stains teeth)',
        '\u{1F4DA} TEACH \u2014 Report sore throat or fever immediately (agranulocytosis). RAI: flush toilet twice, isolate from pregnant women/kids for 1 week',
        '\u{1F6A8} PRIORITY \u2014 Infection (due to severe immunosuppression/agranulocytosis)',
        '\u26D4 CAN\'T MIX \u2014 Methimazole in the 1st trimester of pregnancy (PTU is preferred)',
        '\u{1F504} SIMILAR \u2014 Agranulocytosis (fever + sore throat from drug) vs Strep throat: Both sore throat. Agranulocytosis = STOP drug + check WBC. Strep = continue med',
        '\u{1F198} EMERGENCY \u2014 Agranulocytosis: WBC < 500, severe infection risk. STOP Methimazole/PTU IMMEDIATELY. Broad-spectrum antibiotics, G-CSF, ICU if needed',
        '\u{1F4CB} ASSESS FIRST \u2014 Baseline WBC + LFTs BEFORE starting. If sore throat/fever develops \u2192 get STAT CBC. Do NOT wait for scheduled labs',
        '\u26D3\uFE0F CHAIN \u2014 Methimazole blocks peroxidase \u2192 can\u2019t add iodine to tyrosine \u2192 \u2193 T3/T4 synthesis. Agranulocytosis = immune-mediated WBC destruction (unpredictable)'
      ],
      mnemonic: 'Sore throat + fever = STOP the drug! PTU for 1st trimester ONLY.'
    },

    'corticosteroids': {
      section: 'endocrine', drugClass: 'Corticosteroid',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Glucocorticoids (anti-inflammatory, immunosuppressant) & Mineralocorticoids (Fludrocortisone \u2014 retains Na+ and water)',
        '\u{1F50D} LOOKS LIKE \u2014 Decreased inflammation, managed Addison\'s disease',
        '\u26A0\uFE0F GOES WRONG \u2014 Cushing\'s syndrome (moon face, buffalo hump), hyperglycemia, osteoporosis, infection, GI bleeding',
        '\u{1F52C} MONITOR \u2014 BG, WBCs, Potassium (causes hypokalemia), Sodium (causes hypernatremia)',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 TAPER doses \u2014 NEVER stop abruptly (causes Addisonian crisis)',
        '\u{1F4DA} TEACH \u2014 Report signs of infection. Take with food. Need annual eye exams (cataracts)',
        '\u{1F6A8} PRIORITY \u2014 Addisonian crisis (severe hypotension, shock) if abruptly stopped',
        '\u26D4 CAN\'T MIX \u2014 NSAIDs (massive risk for GI bleed)',
        '\u{1F504} SIMILAR \u2014 Iatrogenic Cushing\u2019s (from prednisone) vs Cushing\u2019s disease (pituitary tumor): Same moon face/buffalo hump. Cause different. Check med list FIRST',
        '\u{1F198} EMERGENCY \u2014 Addisonian crisis if stopped abruptly: severe hypotension, shock, hyperkalemia. IV fluids + IV hydrocortisone 100mg STAT. ALWAYS taper',
        '\u{1F4CB} ASSESS FIRST \u2014 BEFORE stopping, plan a TAPER schedule. Check orthostatic BP. Assess for adrenal insufficiency signs (fatigue, hypotension, hyperpigmentation)',
        '\u26D3\uFE0F CHAIN \u2014 Exogenous steroids suppress ACTH \u2192 adrenal glands atrophy \u2192 can\u2019t produce cortisol. Abrupt stop = no cortisol from ANY source \u2192 crisis'
      ],
      mnemonic: 'NEVER stop steroids cold turkey! Taper = life. NSAIDs = GI bleed.'
    },

    'pituitary-adrenal': {
      section: 'endocrine', drugClass: 'Pituitary/Adrenal Agent',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Somatropin (Growth Hormone); Octreotide (suppresses GH/stops GI bleeds); Desmopressin (Synthetic ADH for DI); Mitotane/Mifepristone (treats Cushing\'s); Ketoconazole (inhibits cortisol synthesis)',
        '\u{1F50D} LOOKS LIKE \u2014 Growth in kids (Somatropin); decreased urine output/increased SG (Desmopressin); decreased cortisol (Mitotane)',
        '\u26A0\uFE0F GOES WRONG \u2014 Hyperglycemia (Somatropin); Water intoxication/hyponatremia (Desmopressin); Hepatotoxicity (Ketoconazole)',
        '\u{1F52C} MONITOR \u2014 Height/weight (Somatropin), Urine SG and Sodium (Desmopressin), LFTs (Ketoconazole)',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Desmopressin: assess for headache and changes in LOC (signs of hyponatremia/cerebral edema)',
        '\u{1F4DA} TEACH \u2014 Desmopressin: restrict fluid intake to prevent water intoxication',
        '\u{1F6A8} PRIORITY \u2014 Seizures from hyponatremia (Desmopressin)',
        '\u26D4 CAN\'T MIX \u2014 Somatropin after epiphyseal plates have closed',
        '\u{1F504} SIMILAR \u2014 SIADH (retain water, low Na) vs DI (lose water, high Na): EXACT opposites. SIADH = fluid restrict. DI = replace fluids + DDAVP',
        '\u{1F198} EMERGENCY \u2014 DDAVP overdose \u2192 water intoxication: Na < 120, seizures, cerebral edema. STOP DDAVP. Fluid restrict. 3% saline if seizing (correct Na SLOWLY)',
        '\u{1F4CB} ASSESS FIRST \u2014 Check serum Na + osmolality BEFORE giving DDAVP. Monitor LOC closely post-dose. Assess fluid intake',
        '\u26D3\uFE0F CHAIN \u2014 DI = no ADH \u2192 kidneys can\u2019t reabsorb water \u2192 massive UO (5-20 L/day). DDAVP replaces ADH \u2192 aquaporins insert \u2192 water reabsorbed'
      ],
      mnemonic: 'DDAVP = Diabetes Insipidus (water, not sugar). Watch for water intoxication!'
    },

    'bone-calcium': {
      section: 'endocrine', drugClass: 'Bone & Calcium Regulator',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Bisphosphonates push calcium back into bones. Cinacalcet decreases PTH. Calcium Gluconate is IV calcium (also heart protector in hyperkalemia)',
        '\u{1F50D} LOOKS LIKE \u2014 Increased bone density, normalized serum calcium levels',
        '\u26A0\uFE0F GOES WRONG \u2014 Esophagitis/esophageal ulcers (Alendronate), hypocalcemia (Trousseau/Chvostek signs)',
        '\u{1F52C} MONITOR \u2014 Serum calcium, phosphate, DXA scans',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Alendronate: give on empty stomach with full glass of water. Patient MUST sit strictly upright for 30 mins',
        '\u{1F4DA} TEACH \u2014 Report jaw pain (osteonecrosis of the jaw \u2014 Pamidronate/Alendronate)',
        '\u{1F6A8} PRIORITY \u2014 Esophageal rupture (Alendronate); cardiac dysrhythmias (Calcium Gluconate pushed too fast)',
        '\u26D4 CAN\'T MIX \u2014 Bisphosphonates in patients who cannot sit upright for 30 minutes',
        '\u{1F504} SIMILAR \u2014 Hypocalcemia (Chvostek/Trousseau) vs Hypomagnesemia (also Chvostek/Trousseau): Both = neuromuscular irritability. Check BOTH Ca + Mg levels',
        '\u{1F198} EMERGENCY \u2014 Hypocalcemia tetany post-thyroidectomy: laryngospasm \u2192 airway emergency. IV Calcium Gluconate STAT. Tracheostomy tray at bedside',
        '\u{1F4CB} ASSESS FIRST \u2014 Can patient sit upright 30 min? (Alendronate requirement). Check swallowing. Check eGFR (< 35 = contraindicated). Baseline Ca/PO4',
        '\u26D3\uFE0F CHAIN \u2014 Bisphosphonates bind hydroxyapatite \u2192 block osteoclasts \u2192 \u2193 bone resorption \u2192 Ca stays in bone \u2192 \u2191 density. Must take correctly or esophageal injury'
      ],
      mnemonic: 'Alendronate = sit UP 30 min or esophagus BURNS. Jaw pain = osteonecrosis!'
    },

    'pheo-meds': {
      section: 'endocrine', drugClass: 'Adrenergic Blocker',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Alpha-blockers (Phenoxybenzamine, Phentolamine) vasodilate to lower extreme BP; Beta-blocker (Propranolol) lowers HR',
        '\u{1F50D} LOOKS LIKE \u2014 Lowered BP, controlled HR in thyrotoxicosis or pheochromocytoma',
        '\u26A0\uFE0F GOES WRONG \u2014 Severe orthostatic hypotension, reflex tachycardia, bronchospasm (Propranolol)',
        '\u{1F52C} MONITOR \u2014 BP, HR continuously during IV administration',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Phentolamine is also the antidote for norepinephrine IV extravasation (inject into the tissue)',
        '\u{1F4DA} TEACH \u2014 Change positions very slowly',
        '\u{1F6A8} PRIORITY \u2014 Hypertensive crisis management',
        '\u26D4 CAN\'T MIX \u2014 Propranolol in asthma patients (bronchoconstriction)',
        '\u{1F504} SIMILAR \u2014 Beta-blocker alone in pheo = WORSE (unopposed alpha \u2192 HTN crisis). MUST give alpha blocker FIRST, then beta. Reverse order is LETHAL',
        '\u{1F198} EMERGENCY \u2014 Hypertensive crisis: BP > 180/120, headache, diaphoresis. Phentolamine IV FIRST + O2. Then propranolol. NEVER beta alone',
        '\u{1F4CB} ASSESS FIRST \u2014 BP q5-15min during IV administration. Have crash cart at bedside. Assess for hypertensive complications (AMS, pulmonary edema)',
        '\u26D3\uFE0F CHAIN \u2014 Pheochromocytoma releases catecholamines \u2192 alpha-1 vasoconstriction \u2192 \u2191\u2191 BP. Alpha-block FIRST \u2192 vasodilation. THEN beta controls HR safely'
      ],
      mnemonic: 'Alpha FIRST, Beta SECOND! Beta alone = unopposed alpha = WORSE crisis.'
    },

    'misc-endo': {
      section: 'endocrine', drugClass: 'Misc Endocrine',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Eplerenone (Aldosterone antagonist, K+-sparing); Demeclocycline/Tolvaptan (Treats SIADH by blocking ADH); Capsaicin (Topical for diabetic neuropathy); Metoclopramide (Prokinetic for gastroparesis)',
        '\u{1F50D} LOOKS LIKE \u2014 Increased UO (SIADH meds); Pain relief; Decreased N/V',
        '\u26A0\uFE0F GOES WRONG \u2014 Hyperkalemia (Eplerenone); Tardive dyskinesia (Metoclopramide)',
        '\u{1F52C} MONITOR \u2014 Potassium (Eplerenone), Sodium (Tolvaptan)',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Metoclopramide: watch for lip-smacking, tongue protrusion (EPS signs)',
        '\u{1F4DA} TEACH \u2014 Capsaicin: wash hands immediately after applying (will burn eyes)',
        '\u{1F6A8} PRIORITY \u2014 Tardive dyskinesia/EPS with Metoclopramide (STOP the drug)',
        '\u26D4 CAN\'T MIX \u2014 Metoclopramide in bowel obstruction',
        '\u{1F504} SIMILAR \u2014 SIADH hyponatremia (low UO, concentrated urine) vs Diuretic hyponatremia (high UO, dilute urine): Both low Na. Urine osmolality separates them',
        '\u{1F198} EMERGENCY \u2014 Tardive dyskinesia from Metoclopramide: involuntary lip-smacking/tongue movements. May be IRREVERSIBLE. STOP drug at FIRST sign of EPS',
        '\u{1F4CB} ASSESS FIRST \u2014 Screen for movement disorder history BEFORE Metoclopramide. Monitor for facial grimacing, lip-smacking early (EPS signs = STOP)',
        '\u26D3\uFE0F CHAIN \u2014 Metoclopramide blocks dopamine \u2192 removes dopamine inhibition of ACh \u2192 ACh excess \u2192 involuntary movements (EPS/tardive dyskinesia)'
      ],
      mnemonic: 'Metoclopramide = lip-smacking = STOP! Capsaicin = WASH HANDS or eyes burn!'
    },

    'diuretics': {
      section: 'renal', drugClass: 'Diuretic',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Furosemide (Loop), HCTZ (Thiazide) WASTE potassium. Spironolactone SPARES potassium',
        '\u{1F50D} LOOKS LIKE \u2014 Increased urine output, decreased edema, lowered BP',
        '\u26A0\uFE0F GOES WRONG \u2014 Hypokalemia (Loop/Thiazide), Hyperkalemia (Spironolactone), Ototoxicity (IV Furosemide pushed too fast)',
        '\u{1F52C} MONITOR \u2014 Daily weights, strict I&Os, Potassium, BP, BUN/Creatinine',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Push IV Furosemide slowly (max 20mg/min). Give in the morning to prevent nocturia',
        '\u{1F4DA} TEACH \u2014 Eat potassium-rich foods (Loop/Thiazide) OR avoid potassium substitutes (Spironolactone)',
        '\u{1F6A8} PRIORITY \u2014 Cardiac dysrhythmias from potassium imbalances',
        '\u26D4 CAN\'T MIX \u2014 Furosemide with Aminoglycosides (compounds ototoxicity risk)',
        '\u{1F504} SIMILAR \u2014 Loop (LOSES K+, needs bananas) vs Spiro (SAVES K+, no salt substitutes). Both diuretics but OPPOSITE K+ effects. Know which patient is on which',
        '\u{1F198} EMERGENCY \u2014 Severe hypokalemia (K+ < 2.5) OR hyperkalemia (K+ > 6.5): both \u2192 peaked T waves \u2192 VFib. Loop causes hypo. Spiro causes hyper',
        '\u{1F4CB} ASSESS FIRST \u2014 Check K+ + Cr BEFORE Loop. Check K+ + renal function BEFORE Spiro. Daily weights. Orthostatic vitals (fall risk in elderly)',
        '\u26D3\uFE0F CHAIN \u2014 Furosemide blocks Na/K/Cl cotransporter \u2192 K+ wasted in urine \u2192 hypokalemia \u2192 cardiac dysrhythmia. Spiro blocks aldosterone \u2192 K+ retained'
      ],
      mnemonic: 'Loop/Thiazide = LOSE K+ (eat bananas). Spironolactone = SAVES K+ (no salt substitutes).'
    },

    'k-binders': {
      section: 'renal', drugClass: 'Potassium Binder',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Exchanges sodium for potassium in the GI tract; you poop out the potassium',
        '\u{1F50D} LOOKS LIKE \u2014 Lowered serum potassium, frequent bowel movements',
        '\u26A0\uFE0F GOES WRONG \u2014 Bowel necrosis, hypokalemia, hypernatremia, constipation (if it hardens)',
        '\u{1F52C} MONITOR \u2014 Potassium, Sodium, Bowel sounds',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Assess bowel sounds BEFORE giving. If bowels are hypoactive, HOLD the med (risk of necrosis)',
        '\u{1F4DA} TEACH \u2014 Expect loose stools',
        '\u{1F6A8} PRIORITY \u2014 Hyperkalemia is lethal (peaked T waves). This drug works slowly; if critical, give IV Calcium Gluconate + IV Insulin/D50 FIRST',
        '\u26D4 CAN\'T MIX \u2014 Hypoactive bowel sounds or paralytic ileus',
        '\u{1F504} SIMILAR \u2014 Critical K+ > 6.5 with EKG changes = IV Calcium + Insulin (minutes). Chronic K+ 5.5-6 = Kayexalate OK (hours). Know which situation you\u2019re in',
        '\u{1F198} EMERGENCY \u2014 Kayexalate bowel necrosis: abdominal pain, bloody diarrhea, perforation. More common with sorbitol. No bowel sounds = NEVER give',
        '\u{1F4CB} ASSESS FIRST \u2014 Bowel sounds q4h (MUST be present). Check K+ before each dose. Assess for constipation. Monitor Na (exchanges Na for K)',
        '\u26D3\uFE0F CHAIN \u2014 Hyperkalemia \u2192 peaked T waves \u2192 wide QRS \u2192 VFib. Kayexalate exchanges Na for K in gut \u2192 K+ excreted in stool (takes 6-24hr, too slow for emergencies)'
      ],
      mnemonic: 'No bowel sounds = NO Kayexalate! Critical K+? IV Calcium + Insulin FIRST.'
    },

    'immunosuppressants': {
      section: 'renal', drugClass: 'Immunosuppressant',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Prevents organ transplant rejection',
        '\u{1F50D} LOOKS LIKE \u2014 Retained, functioning transplanted kidney',
        '\u26A0\uFE0F GOES WRONG \u2014 Severe infection, nephrotoxicity, hepatotoxicity, hypertension',
        '\u{1F52C} MONITOR \u2014 Drug trough levels (narrow therapeutic index), WBC, BUN/Creatinine',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Practice STRICT aseptic technique. Assess for signs of infection (even a low-grade fever is an EMERGENCY)',
        '\u{1F4DA} TEACH \u2014 LIFELONG therapy. Avoid crowds and sick people. Do NOT consume grapefruit juice',
        '\u{1F6A8} PRIORITY \u2014 Infection \u2014 these patients have zero immune system',
        '\u26D4 CAN\'T MIX \u2014 Grapefruit juice (causes severe drug toxicity), live vaccines',
        '\u{1F504} SIMILAR \u2014 Graft rejection (fever + organ dysfunction) vs Infection/sepsis (fever + hypotension): Both have fever. Rejection = \u2191 immunosuppression. Sepsis = antibiotics. Must differentiate quickly',
        '\u{1F198} EMERGENCY \u2014 ANY fever in transplant patient = EMERGENCY. Even low-grade (100.4\u00B0F). Call MD immediately, get CBC + cultures. Do NOT wait',
        '\u{1F4CB} ASSESS FIRST \u2014 Temperature BEFORE any visit. Check trough drug levels (narrow therapeutic window). Assess for ANY infection signs (cough, dysuria, wound changes)',
        '\u26D3\uFE0F CHAIN \u2014 Cyclosporine/Tacrolimus block calcineurin \u2192 T-cells can\u2019t activate \u2192 no rejection. BUT: immune system blind to infections \u2192 any breach \u2192 sepsis risk'
      ],
      mnemonic: 'No grapefruit, no crowds, no live vaccines \u2014 LIFELONG! Fever = EMERGENCY.'
    },

    'misc-renal': {
      section: 'renal', drugClass: 'Mixed Renal Agent',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Allopurinol (reduces uric acid); Epoetin Alfa (stimulates RBCs); MgSO4 (seizure prophylaxis); Ketorolac (NSAID); Morphine (Opioid)',
        '\u{1F50D} LOOKS LIKE \u2014 No gout attacks; increased Hgb; absent seizures; pain relief',
        '\u26A0\uFE0F GOES WRONG \u2014 Stevens-Johnson (Allopurinol); DVT/Stroke if Hgb > 11 (Epoetin); Mg Toxicity (loss of DTRs); Renal failure (Ketorolac); Respiratory depression (Morphine)',
        '\u{1F52C} MONITOR \u2014 Uric acid, Hgb/Hct, Deep Tendon Reflexes/RR (Mg), Creatinine (Ketorolac)',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Epoetin: check BP before giving (causes HTN). MgSO4: keep Calcium Gluconate at bedside as antidote',
        '\u{1F4DA} TEACH \u2014 Drink 3 liters of water daily with Allopurinol',
        '\u{1F6A8} PRIORITY \u2014 Loss of Deep Tendon Reflexes (STOP Mg infusion immediately)',
        '\u26D4 CAN\'T MIX \u2014 Ketorolac is highly nephrotoxic \u2014 NEVER give to patients with severe kidney disease',
        '\u{1F504} SIMILAR \u2014 Mg toxicity (LOSS of DTRs, drowsy) vs Hypocalcemia (INCREASED reflexes, Chvostek/Trousseau): OPPOSITE neuromuscular effects. Check levels',
        '\u{1F198} EMERGENCY \u2014 Mg toxicity: lost DTRs \u2192 respiratory paralysis \u2192 cardiac arrest. STOP infusion. Calcium Gluconate 10mL 10% IV STAT (antagonizes Mg at NMJ)',
        '\u{1F4CB} ASSESS FIRST \u2014 DTRs at baseline BEFORE starting MgSO4. Check RR q1h (< 12 = HOLD). Assess renal function (Mg accumulates if eGFR < 30)',
        '\u26D3\uFE0F CHAIN \u2014 MgSO4 blocks calcium at NMJ \u2192 prevents muscle contraction (stops seizures). Too much \u2192 complete NMJ blockade \u2192 paralysis. Calcium reopens channels'
      ],
      mnemonic: 'DTRs gone = STOP Mg NOW! Calcium Gluconate = the antidote. Ketorolac kills kidneys.'
    },

    'anticoagulants': {
      section: 'hematology', drugClass: 'Anticoagulant',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Prevents clot formation (does NOT dissolve existing clots). Argatroban/Bivalirudin used for HIT',
        '\u{1F50D} LOOKS LIKE \u2014 No DVT extension, no PE, patent blood flow',
        '\u26A0\uFE0F GOES WRONG \u2014 Hemorrhage, Heparin-Induced Thrombocytopenia (HIT \u2014 50% drop in platelets)',
        '\u{1F52C} MONITOR \u2014 aPTT (Heparin), PT/INR (Warfarin), Platelets',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Enoxaparin: give SubQ in abdomen, do NOT rub the site, leave the air bubble in the syringe',
        '\u{1F4DA} TEACH \u2014 Bleeding precautions (soft toothbrush, electric razor). Warfarin: keep Vitamin K intake CONSISTENT, do not eliminate it',
        '\u{1F6A8} PRIORITY \u2014 Internal bleeding (tachycardia, hypotension, altered LOC, black tarry stools)',
        '\u26D4 CAN\'T MIX \u2014 Warfarin in pregnancy (teratogenic). Active bleeding',
        '\u{1F504} SIMILAR \u2014 HIT (heparin \u2192 low platelets + CLOTS) vs TTP (low platelets + hemolysis + neuro): Both low platelets. HIT = stop heparin. TTP = plasma exchange',
        '\u{1F198} EMERGENCY \u2014 Major hemorrhage: GI bleed, intracranial, retroperitoneal. STOP anticoagulant. Check labs. 2 large-bore IVs. Reversal: Protamine (heparin) or Vit K (warfarin)',
        '\u{1F4CB} ASSESS FIRST \u2014 Baseline platelets BEFORE heparin (HIT risk). Assess bleeding risk (recent surgery, falls, renal failure). Check aPTT/INR before each dose',
        '\u26D3\uFE0F CHAIN \u2014 Heparin binds AT-III \u2192 inactivates thrombin + Factor Xa \u2192 prevents clots. Warfarin blocks Vit K-dependent factors (II, VII, IX, X). HIT = paradoxical clotting'
      ],
      mnemonic: 'Heparin = aPTT + Protamine. Warfarin = INR + Vitamin K. NEVER Warfarin in pregnancy!'
    },

    'antidotes': {
      section: 'hematology', drugClass: 'Reversal Agent / Antidote',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Protamine (Heparin); Phytonadione/Vit K (Warfarin); Flumazenil (Benzos); Naloxone (Opioids); Acetylcysteine (Tylenol); Digibind (Digoxin); Leucovorin (Methotrexate); Deferoxamine (Iron)',
        '\u{1F50D} LOOKS LIKE \u2014 Reversal of toxicity/overdose',
        '\u26A0\uFE0F GOES WRONG \u2014 Naloxone (flash pulmonary edema, immediate withdrawal); Flumazenil (seizures)',
        '\u{1F52C} MONITOR \u2014 Vital signs, specific drug levels, PT/INR or aPTT',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Naloxone wears off in 30-60 mins; prepare to administer a SECOND dose',
        '\u{1F4DA} TEACH \u2014 Avoid the precipitating drug',
        '\u{1F6A8} PRIORITY \u2014 Respiratory arrest (Opioid/Benzo overdose) \u2014 secure airway FIRST',
        '\u26D4 CAN\'T MIX \u2014 Flumazenil in patients with chronic benzo use (causes lethal status epilepticus)',
        '\u{1F504} SIMILAR \u2014 Know your pairs: Protamine = heparin. Vit K = warfarin. Flumazenil = benzos. Naloxone = opioids. Wrong antidote = wasted critical time',
        '\u{1F198} EMERGENCY \u2014 Naloxone flash pulmonary edema: pink frothy sputum after reversal. Also: Naloxone wears off in 30-60 min but opioid lasts longer \u2192 re-dose',
        '\u{1F4CB} ASSESS FIRST \u2014 BEFORE Flumazenil: chronic benzo use? (causes status epilepticus). BEFORE Naloxone: secure airway (vomiting risk). Drug screen if unknown',
        '\u26D3\uFE0F CHAIN \u2014 Opioid binds mu receptor \u2192 \u2193 respiratory drive. Naloxone competes for mu receptor \u2192 blocks opioid \u2192 breathing returns. Short half-life = must re-dose'
      ],
      mnemonic: 'PIVA: Protamine-heparin, INR-vitamin K, Valium-flumazenil, Acetylcysteine-Tylenol.'
    },

    'blood-builders': {
      section: 'hematology', drugClass: 'Hematinic / Factor Replacement',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Cyanocobalamin (B12 for pernicious anemia); Ferrous Sulfate/Iron Dextran (iron-deficiency); DDAVP (Factor VIII for vWD); Emicizumab (Hemophilia A)',
        '\u{1F50D} LOOKS LIKE \u2014 Increased Hgb/Hct, normal RBC size, cessation of bleeding',
        '\u26A0\uFE0F GOES WRONG \u2014 Anaphylaxis (IV Iron Dextran); Iron toxicity (GI necrosis)',
        '\u{1F52C} MONITOR \u2014 CBC, Reticulocyte count, Iron/Ferritin levels',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Give PO Iron on empty stomach with Vitamin C (OJ). Z-track for IM Iron Dextran. Give a TEST DOSE of Iron Dextran FIRST',
        '\u{1F4DA} TEACH \u2014 Liquid iron stains teeth \u2014 drink through a straw. Stools will turn dark green/black (normal)',
        '\u{1F6A8} PRIORITY \u2014 Anaphylactic shock with IV Iron Dextran',
        '\u26D4 CAN\'T MIX \u2014 PO Iron with milk or antacids (blocks absorption)',
        '\u{1F504} SIMILAR \u2014 Iron deficiency (microcytic, low ferritin) vs B12 deficiency (macrocytic, low B12): Both anemia. Different cause, different treatment, different labs',
        '\u{1F198} EMERGENCY \u2014 IV Iron Dextran anaphylaxis: angioedema, bronchospasm, hypotension. STOP immediately. Epinephrine IM STAT. ALWAYS give test dose FIRST',
        '\u{1F4CB} ASSESS FIRST \u2014 Test dose BEFORE IV Iron Dextran. For B12: assess if pernicious anemia (needs lifelong IM, PO won\u2019t absorb). Check Hgb trend baseline',
        '\u26D3\uFE0F CHAIN \u2014 Iron deficiency \u2192 can\u2019t make hemoglobin \u2192 \u2193 RBC production \u2192 anemia. Iron absorbed in duodenum \u2192 transported to marrow \u2192 incorporated into Hgb'
      ],
      mnemonic: 'Iron + OJ = best friends. Z-track IM. TEST DOSE IV. Black stools = normal.'
    },

    'oncology': {
      section: 'hematology', drugClass: 'Antineoplastic',
      facts: [
        '\u{1F9E0} WHAT IS IT \u2014 Hydroxyurea (reduces sickling in Sickle Cell); Imatinib (Leukemia targeted therapy); Rituximab (Monoclonal antibody for lymphomas/autoimmune)',
        '\u{1F50D} LOOKS LIKE \u2014 Decreased sickle cell crises; tumor regression',
        '\u26A0\uFE0F GOES WRONG \u2014 Severe bone marrow suppression (myelosuppression), tumor lysis syndrome, infusion reactions (Rituximab)',
        '\u{1F52C} MONITOR \u2014 CBC (WBCs, Platelets, RBCs), Uric acid, Renal panel',
        '\u{1F469}\u200D\u2695\uFE0F NURSE DOES \u2014 Rituximab: monitor STRICTLY during infusion for anaphylaxis/bronchospasm. STOP infusion if reaction occurs',
        '\u{1F4DA} TEACH \u2014 Strict infection precautions. Report fever > 100.4\u00B0F immediately',
        '\u{1F6A8} PRIORITY \u2014 Anaphylaxis during Rituximab infusion',
        '\u26D4 CAN\'T MIX \u2014 Live vaccines during chemotherapy/immunosuppression',
        '\u{1F504} SIMILAR \u2014 Tumor lysis syndrome (\u2191K+, \u2191uric acid, \u2193Ca) vs Sepsis (fever, hypotension): Both severe. TLS = from rapid cell death. Labs distinguish them',
        '\u{1F198} EMERGENCY \u2014 Rituximab anaphylaxis: bronchospasm, hypotension during infusion. STOP infusion. Epinephrine IM STAT. MUST stay at bedside entire infusion',
        '\u{1F4CB} ASSESS FIRST \u2014 Baseline CBC BEFORE chemo. Screen for Hep B (reactivation risk with Rituximab). Vitals BEFORE infusion. Active infection = contraindication',
        '\u26D3\uFE0F CHAIN \u2014 Chemo kills rapidly-dividing cells \u2192 cell contents released (K+, uric acid, PO4) \u2192 tumor lysis syndrome \u2192 hyperkalemia + renal failure'
      ],
      mnemonic: 'Rituximab infusion = STAY at bedside! Fever > 100.4 = call NOW. No live vaccines.'
    }
  };

  // ── 84 Individual Drug Cards ──
  var drugList = [
    // DIABETES (22)
    { group: 'rapid-acting', drugName: 'Aspart', brandName: 'NovoLog', image: 'aspart_card.jpeg' },
    { group: 'rapid-acting', drugName: 'Lispro', brandName: 'Humalog', image: 'lispro_card.jpeg' },
    { group: 'rapid-acting', drugName: 'Glulisine', brandName: 'Apidra', image: 'glulisine_card.jpeg' },
    { group: 'rapid-acting', drugName: 'Afrezza', brandName: 'Inhaled Insulin', image: 'afrezza_card.jpeg' },
    { group: 'regular-nph', drugName: 'Regular Insulin', brandName: 'Humulin R', image: 'regular_insulin_card.jpeg' },
    { group: 'regular-nph', drugName: 'NPH Insulin', brandName: 'Humulin N', image: 'nph_card.jpeg' },
    { group: 'long-acting', drugName: 'Glargine', brandName: 'Lantus', image: 'glargine_card.jpeg' },
    { group: 'long-acting', drugName: 'Degludec', brandName: 'Tresiba', image: 'degludec_card.jpeg' },
    { group: 'long-acting', drugName: 'Detemir', brandName: 'Levemir', image: 'detemir_card.jpeg' },
    { group: 'metformin', drugName: 'Metformin', brandName: 'Glucophage', image: 'metformin_card_v2.jpeg' },
    { group: 'sulfonylureas', drugName: 'Glipizide', brandName: 'Glucotrol', image: 'glipizide_card.jpeg' },
    { group: 'sulfonylureas', drugName: 'Glyburide', brandName: 'DiaBeta', image: 'glyburide_card.jpeg' },
    { group: 'sulfonylureas', drugName: 'Repaglinide', brandName: 'Prandin', image: 'repaglinide_card.jpeg' },
    { group: 'sglt2', drugName: 'Canagliflozin', brandName: 'Invokana', image: 'canagliflozin_card.jpeg' },
    { group: 'glp1-dpp4', drugName: 'Exenatide', brandName: 'Byetta', image: 'exenatide_card.jpeg' },
    { group: 'glp1-dpp4', drugName: 'Liraglutide', brandName: 'Victoza', image: 'liraglutide_card.jpeg' },
    { group: 'glp1-dpp4', drugName: 'Sitagliptin', brandName: 'Januvia', image: 'sitagliptin_card.jpeg' },
    { group: 'tzd', drugName: 'Pioglitazone', brandName: 'Actos', image: 'pioglitazone_card.jpeg' },
    { group: 'alpha-glucosidase', drugName: 'Acarbose', brandName: 'Precose', image: 'acarbose_card.jpeg' },
    { group: 'amylin', drugName: 'Pramlintide', brandName: 'Symlin', image: 'pramlintide_card.jpeg' },
    { group: 'hypo-rescue', drugName: 'Glucagon', brandName: 'GlucaGen', image: 'glucagon_card.jpeg' },
    { group: 'hypo-rescue', drugName: 'Dextrose 50%', brandName: 'D50W', image: 'dextrose50_card.jpeg' },

    // ENDOCRINE (26)
    { group: 'levothyroxine', drugName: 'Levothyroxine', brandName: 'Synthroid', image: 'levothyroxine_card.jpeg' },
    { group: 'antithyroid', drugName: 'Methimazole', brandName: 'Tapazole', image: 'methimazole_card.jpeg' },
    { group: 'antithyroid', drugName: 'PTU', brandName: 'Propylthiouracil', image: 'ptu_card.jpeg' },
    { group: 'antithyroid', drugName: 'SSKI', brandName: "Lugol's Solution", image: 'sski_card.jpeg' },
    { group: 'antithyroid', drugName: 'Radioactive Iodine', brandName: 'I-131', image: 'radioactive_iodine_card.jpeg' },
    { group: 'corticosteroids', drugName: 'Dexamethasone', brandName: 'Decadron', image: 'dexamethasone_card.jpeg' },
    { group: 'corticosteroids', drugName: 'Hydrocortisone', brandName: 'Solu-Cortef', image: 'hydrocortisone_card.jpeg' },
    { group: 'corticosteroids', drugName: 'Fludrocortisone', brandName: 'Florinef', image: 'fludrocortisone_card.jpeg' },
    { group: 'pituitary-adrenal', drugName: 'Somatropin', brandName: 'Genotropin', image: 'somatropin_card.jpeg' },
    { group: 'pituitary-adrenal', drugName: 'Octreotide', brandName: 'Sandostatin', image: 'octreotide_card.jpeg' },
    { group: 'pituitary-adrenal', drugName: 'Desmopressin', brandName: 'DDAVP', image: 'desmopressin_card.jpeg' },
    { group: 'pituitary-adrenal', drugName: 'Mitotane', brandName: 'Lysodren', image: 'mitotane_card.jpeg' },
    { group: 'pituitary-adrenal', drugName: 'Mifepristone', brandName: 'Korlym', image: 'mifepristone_card.jpeg' },
    { group: 'pituitary-adrenal', drugName: 'Ketoconazole', brandName: 'Nizoral', image: 'ketoconazole_card.jpeg' },
    { group: 'bone-calcium', drugName: 'Alendronate', brandName: 'Fosamax', image: 'alendronate_card.jpeg' },
    { group: 'bone-calcium', drugName: 'Pamidronate', brandName: 'Aredia', image: 'pamidronate_card.jpeg' },
    { group: 'bone-calcium', drugName: 'Cinacalcet', brandName: 'Sensipar', image: 'cinacalcet_card.jpeg' },
    { group: 'bone-calcium', drugName: 'Calcium Gluconate', brandName: 'IV Calcium', image: 'calcium_gluconate_card.jpeg' },
    { group: 'pheo-meds', drugName: 'Phenoxybenzamine', brandName: 'Dibenzyline', image: 'phenoxybenzamine_card.jpeg' },
    { group: 'pheo-meds', drugName: 'Phentolamine', brandName: 'Regitine', image: 'phentolamine_card.jpeg' },
    { group: 'pheo-meds', drugName: 'Propranolol', brandName: 'Inderal', image: 'propranolol_card.jpeg' },
    { group: 'misc-endo', drugName: 'Eplerenone', brandName: 'Inspra', image: 'eplerenone_card.jpeg' },
    { group: 'misc-endo', drugName: 'Demeclocycline', brandName: 'Declomycin', image: 'demeclocycline_card.jpeg' },
    { group: 'misc-endo', drugName: 'Tolvaptan', brandName: 'Samsca', image: 'tolvaptan_card.jpeg' },
    { group: 'misc-endo', drugName: 'Capsaicin', brandName: 'Zostrix', image: 'capsaicin_card.jpeg' },
    { group: 'misc-endo', drugName: 'Metoclopramide', brandName: 'Reglan', image: 'metoclopramide_card.jpeg' },

    // RENAL (14)
    { group: 'diuretics', drugName: 'Furosemide', brandName: 'Lasix', image: 'furosemide_card.jpeg' },
    { group: 'diuretics', drugName: 'HCTZ', brandName: 'Microzide', image: 'hctz_card.jpeg' },
    { group: 'diuretics', drugName: 'Spironolactone', brandName: 'Aldactone', image: 'spironolactone_card.jpeg' },
    { group: 'k-binders', drugName: 'Kayexalate', brandName: 'SPS', image: 'kayexalate_card.jpeg' },
    { group: 'k-binders', drugName: 'Patiromer', brandName: 'Veltassa', image: 'patiromer_card.jpeg' },
    { group: 'k-binders', drugName: 'Sodium Zirconium', brandName: 'Lokelma', image: 'sodium_zirconium_card.jpeg' },
    { group: 'immunosuppressants', drugName: 'Cyclosporine', brandName: 'Sandimmune', image: 'cyclosporine_card.jpeg' },
    { group: 'immunosuppressants', drugName: 'Tacrolimus', brandName: 'Prograf', image: 'tacrolimus_card.jpeg' },
    { group: 'immunosuppressants', drugName: 'Mycophenolate', brandName: 'CellCept', image: 'mycophenolate_card.jpeg' },
    { group: 'misc-renal', drugName: 'Allopurinol', brandName: 'Zyloprim', image: 'allopurinol_card.jpeg' },
    { group: 'misc-renal', drugName: 'Epoetin Alfa', brandName: 'Procrit', image: 'epoetin_alfa_card.jpeg' },
    { group: 'misc-renal', drugName: 'Magnesium Sulfate', brandName: 'MgSO4', image: 'magnesium_sulfate_card.jpeg' },
    { group: 'misc-renal', drugName: 'Ketorolac', brandName: 'Toradol', image: 'ketorolac_card.jpeg' },
    { group: 'misc-renal', drugName: 'Morphine', brandName: 'MS Contin', image: 'morphine_card.jpeg' },

    // HEMATOLOGY (22)
    { group: 'anticoagulants', drugName: 'Heparin', brandName: 'Unfractionated', image: 'heparin_card.jpeg' },
    { group: 'anticoagulants', drugName: 'Enoxaparin', brandName: 'Lovenox', image: 'enoxaparin_card.jpeg' },
    { group: 'anticoagulants', drugName: 'Warfarin', brandName: 'Coumadin', image: 'warfarin_card.jpeg' },
    { group: 'anticoagulants', drugName: 'Argatroban', brandName: 'Argatroban', image: 'argatroban_card.jpeg' },
    { group: 'anticoagulants', drugName: 'Bivalirudin', brandName: 'Angiomax', image: 'bivalirudin_card.jpeg' },
    { group: 'antidotes', drugName: 'Protamine Sulfate', brandName: 'Heparin Antidote', image: 'protamine_sulfate_card.jpeg' },
    { group: 'antidotes', drugName: 'Phytonadione', brandName: 'Vitamin K', image: 'phytonadione_card.jpeg' },
    { group: 'antidotes', drugName: 'Flumazenil', brandName: 'Romazicon', image: 'flumazenil_card.jpeg' },
    { group: 'antidotes', drugName: 'Naloxone', brandName: 'Narcan', image: 'naloxone_card.jpeg' },
    { group: 'antidotes', drugName: 'Acetylcysteine', brandName: 'Mucomyst', image: 'acetylcysteine_card.jpeg' },
    { group: 'antidotes', drugName: 'Digibind', brandName: 'DigiFab', image: 'digibind_card.jpeg' },
    { group: 'antidotes', drugName: 'Leucovorin', brandName: 'Folinic Acid', image: 'leucovorin_card.jpeg' },
    { group: 'antidotes', drugName: 'Deferoxamine', brandName: 'Desferal', image: 'deferoxamine_card.jpeg' },
    { group: 'blood-builders', drugName: 'Cyanocobalamin', brandName: 'Vitamin B12', image: 'cyanocobalamin_card.jpeg' },
    { group: 'blood-builders', drugName: 'Folic Acid', brandName: 'Folate', image: 'folic_acid_card.jpeg' },
    { group: 'blood-builders', drugName: 'Ferrous Sulfate', brandName: 'Iron Supplement', image: 'ferrous_sulfate_card.jpeg' },
    { group: 'blood-builders', drugName: 'Iron Dextran', brandName: 'INFeD', image: 'iron_dextran_card.jpeg' },
    { group: 'blood-builders', drugName: 'DDAVP', brandName: 'Desmopressin (vWD)', image: 'ddavp_vwd_card.jpeg' },
    { group: 'blood-builders', drugName: 'Emicizumab', brandName: 'Hemlibra', image: 'emicizumab_card.jpeg' },
    { group: 'oncology', drugName: 'Hydroxyurea', brandName: 'Hydrea', image: 'hydroxyurea_card.jpeg' },
    { group: 'oncology', drugName: 'Imatinib', brandName: 'Gleevec', image: 'imatinib_card.jpeg' },
    { group: 'oncology', drugName: 'Rituximab', brandName: 'Rituxan', image: 'rituximab_card.jpeg' }
  ];

  // ── Generate cards from groups ──
  var cards = drugList.map(function(d) {
    var g = groups[d.group];
    return {
      section: g.section,
      drugName: d.drugName,
      brandName: d.brandName,
      drugClass: g.drugClass,
      image: d.image,
      facts: g.facts,
      mnemonic: g.mnemonic,
      groupId: d.group
    };
  });

  return { sections: sections, cards: cards, groups: groups };
})();
