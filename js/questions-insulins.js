// ══════════════════════════════════════════════
// NCLEX Questions — INSULIN GROUP (7 drugs × 9 questions = 63 total)
// 3 difficulty levels: g=green(hardest), y=yellow(moderate), r=red(foundational)
// ══════════════════════════════════════════════

window.DRUG_DEEP_INSULINS = {

  'Rapid-Acting Insulin (Lispro)': {
    details: [
      'Onset: 15 minutes — give immediately before meals (within 15 min)',
      'Peak: 1-2 hours — highest hypoglycemia risk window',
      'Duration: 3-4 hours — short coverage',
      'CLEAR solution (all insulins except NPH are clear)',
      'Can be mixed with NPH — draw CLEAR first, then cloudy',
      'If patient cannot eat, HOLD the rapid-acting dose — no food = no bolus insulin',
    ],
    questions: {
      g: [
        {
          stem: 'A patient receives lispro insulin at 0730 before breakfast. At 0900, the patient becomes diaphoretic and reports feeling shaky. The nurse\'s priority action is:',
          options: [
            'Recheck blood glucose and document the finding',
            'Administer 15g of fast-acting carbohydrates immediately',
            'Notify the provider and request a stat metabolic panel',
            'Administer glucagon 1mg IM and position on their side',
          ],
          correct: 1,
          rationale: '0900 is 1.5 hours after lispro — right at peak action. Diaphoresis + shakiness = hypoglycemia. Treat first with 15-15 rule. Option A is the trap — you don\'t "recheck and document" when symptomatic, you TREAT. Option D is for unconscious patients only — this patient is alert.',
        },
        {
          stem: 'A patient scheduled for surgery is NPO after midnight. The home regimen includes lispro 8 units with meals and glargine 20 units at bedtime. Which order should the nurse question?',
          options: [
            'Glargine 20 units SubQ at bedtime tonight',
            'Lispro 8 units SubQ with breakfast tray tomorrow',
            'D5W IV at 75 mL/hr during NPO period',
            'Blood glucose monitoring every 4 hours',
          ],
          correct: 1,
          rationale: 'NPO = no food = no mealtime insulin. Lispro is bolus insulin given WITH food. The trap: students think "hold ALL insulin when NPO" but basal insulin (glargine) is typically continued. You only hold mealtime rapid-acting.',
        },
        {
          stem: 'A nurse administers lispro at 0800. At 0815, the patient states they feel nauseous and cannot eat breakfast. The nurse should FIRST:',
          options: [
            'Encourage the patient to eat at least half the meal',
            'Check blood glucose and prepare to treat hypoglycemia',
            'Call the provider to request an antiemetic',
            'Document the patient\'s refusal to eat and monitor',
          ],
          correct: 1,
          rationale: 'Lispro was already given — it\'s active. No food intake after lispro creates a high hypoglycemia risk within 30-60 min. The priority is assess glucose and prepare treatment. Option A sounds reasonable but forcing food on a nauseous patient risks aspiration. Option D is dangerous passivity.',
        },
      ],
      y: [
        {
          stem: 'A nurse is teaching a patient about lispro insulin. Which statement by the patient indicates understanding?',
          options: [
            '"I should inject this 30 minutes before I eat."',
            '"I\'ll take this right before I start eating."',
            '"I can take this at bedtime for overnight coverage."',
            '"I should wait until after my meal to inject."',
          ],
          correct: 1,
          rationale: 'Lispro is rapid-acting — onset 15 minutes. Give immediately before meals (within 15 min of eating). Option A describes regular insulin timing (30 min before). Option C describes basal insulin. Option D would cause a postprandial spike before the insulin kicks in.',
        },
        {
          stem: 'A patient on lispro insulin has a blood glucose of 68 mg/dL at 1000. The patient is alert and oriented. The nurse should:',
          options: [
            'Administer glucagon 1mg IM immediately',
            'Give 15g of fast-acting carbohydrates and recheck in 15 minutes',
            'Hold the next insulin dose and notify the provider',
            'Encourage the patient to eat lunch early',
          ],
          correct: 1,
          rationale: '68 mg/dL is hypoglycemia (<70). Patient is conscious → 15-15 rule: 15g fast-acting carbs, recheck in 15 min. Glucagon is for unconscious patients. Holding the next dose is appropriate but not the priority — treat NOW.',
        },
        {
          stem: 'Which assessment finding in a patient taking lispro insulin requires the nurse to hold the dose and contact the provider?',
          options: [
            'Blood glucose of 180 mg/dL before lunch',
            'Blood glucose of 52 mg/dL before dinner',
            'Patient reports mild nausea after eating',
            'Injection site has small bruise from previous dose',
          ],
          correct: 1,
          rationale: '52 mg/dL is significant hypoglycemia. Giving more insulin would worsen it — hold the dose and notify provider. 180 is high but expected before-meal range for some patients. Nausea and bruising don\'t warrant holding insulin.',
        },
      ],
      r: [
        {
          stem: 'A patient needs insulin coverage that begins working as soon as possible before a meal. The nurse selects:',
          options: [
            'NPH insulin',
            'Regular insulin',
            'Lispro insulin',
            'Glargine insulin',
          ],
          correct: 2,
          rationale: 'Rapid-acting insulins (lispro, aspart, glulisine) have the fastest onset at 15 minutes. Regular is 30-60 min, NPH is 2-4 hours, and glargine has a gradual onset with no true peak.',
        },
        {
          stem: 'A patient asks why they need to eat immediately after taking lispro. The nurse\'s best response is:',
          options: [
            '"The medication needs food in your stomach to be absorbed into the bloodstream."',
            '"This insulin acts very quickly, so your blood sugar could drop dangerously without food."',
            '"It helps with digestion if you eat right after, but you can wait up to an hour if needed."',
            '"The medication works better when your stomach acid is active from eating."',
          ],
          correct: 1,
          rationale: 'Lispro onset is 15 minutes. Without food to raise blood glucose, the insulin will cause hypoglycemia. This is the most accurate and patient-friendly explanation.',
        },
        {
          stem: 'When preparing to administer lispro insulin, the nurse notes the solution appears clear. This indicates:',
          options: [
            'The vial has separated and needs to be gently rolled before use',
            'The insulin is appropriate for administration',
            'The wrong vial was selected — this patient\'s insulin should be cloudy',
            'The insulin was stored incorrectly and should be replaced',
          ],
          correct: 1,
          rationale: 'All insulins are clear EXCEPT NPH (which is cloudy). Lispro being clear is expected and normal. Rolling is needed for NPH to resuspend particles.',
        },
      ],
    },
  },

  'Short-Acting (Regular) — ONLY IV insulin': {
    details: [
      'Onset: 30-60 minutes SubQ, immediate IV — the ONLY insulin given IV',
      'Peak: 2-4 hours SubQ — hypoglycemia risk window',
      'Duration: 6-8 hours — longer coverage than rapid-acting',
      'CLEAR solution — do NOT confuse with rapid-acting based on appearance',
      'Used in DKA: IV regular insulin drip with K+ monitoring',
      'Given 30 minutes before meals when used SubQ (unlike rapid-acting which is 15 min)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient in DKA is receiving an IV regular insulin drip at 0.1 units/kg/hr. The most recent lab shows K+ 3.1 mEq/L. The nurse should:',
          options: [
            'Continue the insulin drip and add IV potassium replacement',
            'Stop the insulin drip, replace potassium first, then resume insulin when K+ ≥ 3.3',
            'Decrease the insulin drip rate by 50% and monitor K+ hourly',
            'Switch from IV to SubQ insulin to reduce potassium shifts',
          ],
          correct: 1,
          rationale: 'K+ 3.1 is below the 3.3 threshold — insulin drives K+ into cells, worsening hypokalemia → fatal arrhythmia. STOP insulin, replace K+ first. Option A is the deadly trap — continuing insulin while replacing K+ doesn\'t fix the problem fast enough. The rule: K+ ≥ 3.3 BEFORE insulin.',
        },
        {
          stem: 'A nurse is caring for a patient receiving IV regular insulin. The provider orders a transition to SubQ insulin. The nurse knows to:',
          options: [
            'Give the first SubQ dose and immediately discontinue the IV drip',
            'Discontinue the IV drip 30 minutes before the first SubQ dose',
            'Give the first SubQ dose and overlap the IV drip for 1-2 hours',
            'Wait until the next meal to give SubQ and stop the drip then',
          ],
          correct: 2,
          rationale: 'IV insulin has a half-life of only 5-10 minutes — stopping it causes an immediate gap. You must overlap: give SubQ first, keep the drip running 1-2 hours for the SubQ to absorb and reach therapeutic levels. Option A causes a dangerous gap. Option B is backwards.',
        },
        {
          stem: 'Two insulin vials are at the bedside: regular insulin and lispro. Both appear clear. Before administering via IV, the nurse should verify:',
          options: [
            'Either can be given IV since both are clear solutions',
            'Only the regular insulin vial — it is the ONLY insulin approved for IV use',
            'Check with pharmacy — all clear insulins can be given IV in emergencies',
            'Use whichever has the earlier expiration date',
          ],
          correct: 1,
          rationale: 'Regular insulin is the ONLY insulin given IV. Lispro, aspart, and other rapid-acting insulins are clear too but are NOT for IV use (outside of very specific protocols). The trap: students assume "clear = interchangeable" or that any rapid-acting can go IV.',
        },
      ],
      y: [
        {
          stem: 'A patient with T2DM is prescribed regular insulin 10 units SubQ before lunch. When should the nurse administer this dose?',
          options: [
            'Immediately before the first bite of food',
            '30 minutes before the meal is served',
            'After the patient finishes eating',
            'At the same time as bedtime glargine',
          ],
          correct: 1,
          rationale: 'Regular insulin onset is 30-60 min SubQ — it needs a 30-minute head start before the meal. This is different from rapid-acting (lispro/aspart) which is given within 15 min of eating.',
        },
        {
          stem: 'A patient receiving an IV insulin drip has blood glucose checked every hour. The last three readings are 320, 280, 245. The nurse should:',
          options: [
            'Increase the drip rate — glucose is still elevated',
            'Continue current rate — glucose is trending down appropriately',
            'Decrease the rate — glucose is dropping too fast, risk of cerebral edema',
            'Stop the drip — glucose is approaching normal',
          ],
          correct: 1,
          rationale: 'Glucose should drop 50-75 mg/dL per hour in DKA management. 320→280→245 is approximately 40/hr — appropriate decline. No change needed. Dropping too fast (>100/hr) risks cerebral edema. 245 is still elevated, not time to stop.',
        },
        {
          stem: 'A nurse is educating a patient about the difference between regular and rapid-acting insulin. Which statement is correct?',
          options: [
            '"Regular insulin works faster, so you take it closer to your meal."',
            '"Regular insulin takes longer to start working, so you take it earlier before meals."',
            '"Both types start working at the same speed but cover different lengths of time."',
            '"You can tell them apart by color — one is cloudy and one is clear."',
          ],
          correct: 1,
          rationale: 'Regular onset is 30-60 min (take 30 min before meal). Rapid-acting onset is 15 min (take right before eating). Both are clear solutions — NPH is the only cloudy one.',
        },
      ],
      r: [
        {
          stem: 'A patient in the ICU needs insulin administered through an IV line. The nurse verifies the order is for:',
          options: [
            'Glargine',
            'NPH',
            'Regular',
            'Lispro',
          ],
          correct: 2,
          rationale: 'Regular insulin is the ONLY insulin approved for IV administration. This is a fundamental fact tested repeatedly. Glargine and NPH are never given IV. Lispro is SubQ only in standard practice.',
        },
        {
          stem: 'A patient is prescribed regular insulin SubQ. The nurse inspects the vial and expects to see:',
          options: [
            'A cloudy, white solution that needs gentle rolling',
            'A clear, colorless solution',
            'A yellow-tinted solution',
            'A solution with visible particles',
          ],
          correct: 1,
          rationale: 'Regular insulin is clear. Only NPH is cloudy. Visible particles or discoloration in any insulin = discard. Students sometimes confuse regular with NPH on appearance — remember: all insulins are clear EXCEPT NPH.',
        },
        {
          stem: 'When is regular insulin most commonly administered via IV route?',
          options: [
            'For routine mealtime blood glucose management',
            'For diabetic ketoacidosis (DKA) as a continuous drip',
            'For long-term basal coverage overnight',
            'Whenever a patient cannot eat by mouth',
          ],
          correct: 1,
          rationale: 'IV regular insulin is used in DKA emergencies as a continuous drip to bring down dangerously high glucose and correct acidosis. It\'s not used IV for routine management or basal coverage.',
        },
      ],
    },
  },

  'Intermediate (NPH) — ONLY cloudy': {
    details: [
      'Onset: 2-4 hours — NOT for immediate glucose control',
      'Peak: 4-12 hours — WIDE peak window, unpredictable hypoglycemia',
      'Duration: 12-18 hours — intermediate coverage',
      'ONLY cloudy insulin — must gently roll (never shake) to resuspend',
      'Can be mixed with regular or rapid-acting — draw clear first',
      'Often given BID (morning and bedtime) for intermediate basal coverage',
    ],
    questions: {
      g: [
        {
          stem: 'A patient receives NPH insulin at 0700. At 1400, the patient becomes confused, diaphoretic, and has a blood glucose of 54. A family member asks, "But they took their insulin this morning — why is this happening now?" The nurse explains:',
          options: [
            '"The insulin dose was probably too high. We\'ll reduce it tomorrow."',
            '"NPH peaks between 4-12 hours — this is within the expected peak window, causing hypoglycemia."',
            '"Your family member must have skipped a snack. This wouldn\'t happen with proper eating."',
            '"This is an allergic reaction to the insulin, not related to timing."',
          ],
          correct: 1,
          rationale: '0700 + 7 hours = 1400 — right in the NPH peak window (4-12h). The wide, unpredictable peak is why NPH causes hypoglycemia hours after injection. Option A jumps to dose change without understanding timing. Option C blames the patient. Option D is completely wrong.',
        },
        {
          stem: 'A nurse is preparing NPH and lispro insulin in one syringe. After drawing up the lispro, the nurse accidentally injects air into the NPH vial. The nurse should:',
          options: [
            'Continue — air in the NPH vial doesn\'t affect the medication',
            'Discard both vials and start with new ones',
            'Discard the syringe, get a new one, and start over — the lispro may have contaminated the NPH',
            'Draw the NPH as planned — the order doesn\'t matter',
          ],
          correct: 2,
          rationale: 'The syringe already has lispro in it. Injecting into the NPH vial could push lispro INTO the NPH vial, contaminating it. Start over with a fresh syringe. The rule: inject air into NPH first (without drawing), then inject air into clear and draw clear, THEN draw NPH. Option A ignores cross-contamination.',
        },
        {
          stem: 'A patient on NPH insulin BID (0700 and 2100) reports hypoglycemic episodes at 0300. The nurse suspects:',
          options: [
            'The morning NPH dose is peaking too late',
            'The evening NPH dose (given at 2100) is peaking during sleep',
            'The patient is eating too much before bed',
            'The patient needs a higher bedtime dose to prevent rebound hyperglycemia',
          ],
          correct: 1,
          rationale: '2100 (9 PM) + 6 hours peak = 0300 (3 AM). The bedtime NPH is peaking in the middle of the night → nocturnal hypoglycemia. This is a known problem with NPH. Option D is backwards — MORE insulin = MORE hypo. The fix is often switching to glargine (no peak).',
        },
      ],
      y: [
        {
          stem: 'Before administering NPH insulin, the nurse should:',
          options: [
            'Shake the vial vigorously to ensure thorough mixing',
            'Gently roll the vial between the palms to resuspend',
            'Draw it up immediately without any mixing steps',
            'Hold the vial under warm running water for 30 seconds to improve flow',
          ],
          correct: 1,
          rationale: 'NPH is a suspension (cloudy) that settles. Gentle rolling resuspends the particles evenly without creating bubbles. Never shake (causes bubbles → inaccurate dose). Never microwave (denatures insulin). NPH is NOT clear — it\'s the only cloudy insulin.',
        },
        {
          stem: 'A patient asks why their NPH insulin looks different from their lispro. The nurse\'s best response is:',
          options: [
            '"NPH is cloudy because it contains protamine, which slows absorption. Your lispro is clear because it acts fast."',
            '"One is expired and one isn\'t — they should both look the same."',
            '"The pharmacy made an error — all insulins should be clear."',
            '"The color doesn\'t matter as long as you take the right dose."',
          ],
          correct: 0,
          rationale: 'NPH contains protamine (Neutral Protamine Hagedorn) which creates the cloudy suspension and delays absorption. Lispro has no protamine → clear and rapid. This is a teaching moment about why the insulins work differently.',
        },
        {
          stem: 'A patient on NPH and regular insulin asks about timing. The nurse should advise:',
          options: [
            '"Take both at bedtime for best overnight coverage."',
            '"Take the NPH 30 minutes before meals, just like regular."',
            '"NPH is usually given in the morning and/or at bedtime, separate from your mealtime regular insulin schedule."',
            '"You can take all your insulin at once — timing doesn\'t matter."',
          ],
          correct: 2,
          rationale: 'NPH provides intermediate basal coverage (BID: morning and bedtime). Regular/rapid-acting is mealtime bolus insulin. They serve different purposes with different timing. "Take everything at once" is dangerous.',
        },
      ],
      r: [
        {
          stem: 'A nurse is inspecting four insulin vials. Which one should appear cloudy?',
          options: [
            'Lispro',
            'Regular',
            'NPH',
            'Glargine',
          ],
          correct: 2,
          rationale: 'NPH is the ONLY cloudy insulin. All others (lispro, regular, glargine, detemir, aspart) are clear. This is one of the most commonly tested insulin facts.',
        },
        {
          stem: 'NPH insulin has a peak action time of:',
          options: [
            '15-30 minutes',
            '1-2 hours',
            '4-12 hours',
            'No peak (peakless)',
          ],
          correct: 2,
          rationale: 'NPH peaks between 4-12 hours — a wide, unpredictable window. Rapid-acting peaks at 1-2h, regular at 2-4h, and glargine is peakless. The wide NPH peak is why it carries higher hypo risk than newer basal insulins.',
        },
        {
          stem: 'A patient is prescribed NPH insulin at bedtime. The primary purpose of this timing is:',
          options: [
            'To cover the evening meal',
            'To provide overnight basal insulin coverage',
            'To prevent morning nausea',
            'To work with the body\'s natural cortisol peak at midnight',
          ],
          correct: 1,
          rationale: 'Bedtime NPH provides intermediate basal coverage through the night (duration 12-18h), helping control fasting morning glucose. It\'s not a mealtime insulin and cortisol actually peaks in early morning, not midnight.',
        },
      ],
    },
  },

  'Long-Acting (Glargine) — NEVER mix': {
    details: [
      'Onset: 1-2 hours — gradual, no true peak ("peakless")',
      'Duration: ~24 hours — true once-daily basal insulin',
      'NEVER mix with any other insulin — precipitates, loses effectiveness',
      'Given at the SAME TIME each day (consistency matters)',
      'Clear solution — don\'t confuse with NPH (NPH is cloudy)',
      'Lower hypoglycemia risk than NPH due to no peak',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on glargine 25 units at bedtime and lispro before meals asks to save needle sticks by mixing them. The nurse should:',
          options: [
            'Teach the patient to draw glargine first, then lispro',
            'Teach the patient to draw lispro first, then glargine',
            'Explain that glargine cannot be mixed with ANY other insulin and must be given separately',
            'Suggest switching to NPH so they can mix insulins in one syringe',
          ],
          correct: 2,
          rationale: 'Glargine has an acidic pH (4.0) that allows it to form microprecipitates for slow absorption. Mixing it with other insulins changes the pH → destroys the slow-release mechanism. NEVER mix glargine. Options A and B both describe mixing — both wrong regardless of draw order.',
        },
        {
          stem: 'A patient receiving glargine 30 units daily at 2200 consistently has fasting glucose of 65 mg/dL at 0600. The patient is asymptomatic. The nurse should:',
          options: [
            'Reassure the patient that 65 is close to normal and continue monitoring',
            'Document the finding and report to the provider — the dose may need reduction',
            'Hold the glargine tonight and recheck in the morning',
            'Give the patient a bedtime snack and continue the current dose',
          ],
          correct: 1,
          rationale: '65 is below 70 = hypoglycemia, even if asymptomatic. Consistent fasting hypo suggests the basal dose is too high. Option A is the trap — "close to normal" normalizes a dangerous pattern. Asymptomatic hypoglycemia is actually MORE dangerous because the patient loses warning signs over time (hypoglycemia unawareness).',
        },
        {
          stem: 'A patient normally takes glargine at 2200 but forgot last night. It is now 0600. The nurse should advise:',
          options: [
            '"Take your full dose now and resume at 2200 tonight — you\'ll double up but that\'s OK for one day"',
            '"Skip the missed dose entirely and take your normal dose tonight at 2200"',
            '"Take your dose now and contact your provider about adjusting today\'s schedule"',
            '"Take half the dose now and half at your regular time tonight"',
          ],
          correct: 2,
          rationale: 'An 8-hour gap in basal coverage risks hyperglycemia/DKA. The patient should take the dose now and contact the provider. Option A is dangerous — doubling up could cause severe hypo. Option B leaves an extended gap. Option D is a made-up approach without evidence.',
        },
      ],
      y: [
        {
          stem: 'A nurse is teaching a patient about glargine insulin. Which instruction is MOST important?',
          options: [
            '"Roll the vial gently before drawing up the dose."',
            '"Give it at the same time every day and never mix it with other insulins."',
            '"Take it 30 minutes before your largest meal."',
            '"Refrigerate after opening and discard after 7 days."',
          ],
          correct: 1,
          rationale: 'Glargine is peakless basal insulin — consistency of timing is key, and it must NEVER be mixed. Rolling is for NPH (cloudy). 30 min before meals describes regular insulin timing. Multi-dose vials are good for 28 days at room temp, not 7.',
        },
        {
          stem: 'A patient switches from NPH BID to glargine once daily. They ask why the change. The nurse explains:',
          options: [
            '"Glargine is cheaper and works the same way."',
            '"Glargine provides steady 24-hour coverage without the peaks that cause unpredictable hypoglycemia with NPH."',
            '"NPH was recalled by the FDA, so we\'re switching everyone."',
            '"You only need one shot instead of two — the drugs are identical otherwise."',
          ],
          correct: 1,
          rationale: 'The clinical advantage of glargine over NPH: peakless profile = more predictable glucose control = less hypoglycemia risk, especially nocturnal. The drugs are NOT identical — they have very different pharmacokinetic profiles.',
        },
        {
          stem: 'When inspecting a glargine insulin vial, the nurse expects to see:',
          options: [
            'A cloudy white suspension',
            'A clear, colorless solution',
            'A light yellow solution',
            'Visible particles that settle to the bottom',
          ],
          correct: 1,
          rationale: 'Glargine is clear despite being long-acting (its slow release comes from pH precipitation at injection site, not protamine like NPH). If cloudy, discolored, or has particles → discard.',
        },
      ],
      r: [
        {
          stem: 'Which characteristic distinguishes glargine from NPH insulin?',
          options: [
            'Glargine appears cloudy while NPH is clear',
            'Glargine provides steady coverage without peaks while NPH has a distinct peak period',
            'Glargine is given before meals while NPH provides background coverage',
            'Glargine can be mixed with rapid-acting insulins while NPH cannot',
          ],
          correct: 1,
          rationale: 'Glargine = peakless, 24-hour basal. NPH = peak 4-12h, BID dosing. Everything else is backwards: glargine is clear (not cloudy), both are basal (not mealtime), and glargine is the one that CANNOT be mixed.',
        },
        {
          stem: 'A patient is prescribed glargine insulin once daily. The nurse explains this insulin is classified as:',
          options: [
            'Rapid-acting — covers meals',
            'Short-acting — covers meals',
            'Intermediate-acting — provides partial day coverage',
            'Long-acting — provides 24-hour basal coverage',
          ],
          correct: 3,
          rationale: 'Glargine is long-acting, providing ~24 hours of steady basal insulin. It does NOT cover meals — that requires rapid or short-acting insulin.',
        },
        {
          stem: 'A patient asks if they can mix glargine with their lispro in one syringe. The nurse\'s correct response is:',
          options: [
            '"Yes, draw the lispro first, then the glargine."',
            '"Yes, but only if you use them within 5 minutes."',
            '"No, glargine must never be mixed with other insulins."',
            '"Only if your pharmacist pre-mixes them for you."',
          ],
          correct: 2,
          rationale: 'Glargine (Lantus) must NEVER be mixed. Its acidic pH (4.0) would be altered by mixing with other insulins, destroying its long-acting properties. No exceptions — not even pharmacist pre-mixing.',
        },
      ],
    },
  },

  'Premixed 70/30 and 75/25': {
    details: [
      '70/30 = 70% NPH + 30% Regular insulin',
      '75/25 = 75% lispro protamine + 25% lispro',
      'The BIGGER number is always the intermediate/NPH component',
      'Cannot adjust individual doses — both change together',
      'Given BID: before breakfast and before dinner',
      'Good for patients who need simplicity but less flexible than separate injections',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on 70/30 insulin has good fasting glucose but consistently elevated post-dinner readings. The provider asks the nurse\'s input. The nurse recognizes:',
          options: [
            'The evening dose should be increased to cover dinner better',
            'Premixed insulin cannot be independently adjusted — the patient may need to switch to separate basal/bolus regimen',
            'The patient should take the evening 70/30 dose 30 minutes earlier',
            'Add an oral antidiabetic for dinner coverage',
          ],
          correct: 1,
          rationale: 'The limitation of premixed: you can\'t increase the mealtime component (30%) without also increasing the basal component (70%). If the patient needs more dinner coverage but fasting is already good, increasing would cause overnight hypo. The fix is separate basal/bolus. This is a clinical reasoning trap.',
        },
        {
          stem: 'A nurse is drawing up 70/30 insulin. A student asks, "Which component provides the mealtime coverage?" The correct answer is:',
          options: [
            'The 70% component (NPH) covers the meal',
            'The 30% component (Regular) covers the meal',
            'Both components equally cover the meal',
            'Neither — premixed doesn\'t cover meals',
          ],
          correct: 1,
          rationale: 'In 70/30: the 30% regular insulin provides mealtime (bolus) coverage. The 70% NPH provides intermediate basal coverage. The BIGGER number is always the longer-acting component. Students often confuse which does what.',
        },
        {
          stem: 'A patient asks why the NPH portion is always the larger number in premixed insulin. The nurse explains:',
          options: [
            '"It\'s just how the manufacturer labels it — the numbers are arbitrary."',
            '"Because you need more basal (background) coverage than mealtime coverage throughout the day."',
            '"The NPH is weaker, so you need more of it to work."',
            '"It\'s actually a safety feature to prevent hypoglycemia."',
          ],
          correct: 1,
          rationale: 'The body needs a steady baseline of insulin all day (basal) plus surges at meals (bolus). The basal requirement is larger than any single meal bolus — hence 70% intermediate + 30% mealtime reflects physiologic needs.',
        },
      ],
      y: [
        {
          stem: 'A patient on premixed 70/30 insulin should be instructed to:',
          options: [
            'Take it at bedtime only',
            'Take it before breakfast and before dinner',
            'Take it only when blood glucose is above 200',
            'Take it after meals to prevent hypoglycemia',
          ],
          correct: 1,
          rationale: 'Premixed 70/30 is typically given BID: before breakfast and before dinner. The regular component covers the meal, the NPH provides intermediate coverage until the next dose.',
        },
        {
          stem: 'Before administering premixed 70/30 insulin, the nurse should:',
          options: [
            'Verify it is a clear solution',
            'Gently roll the vial — it contains NPH, which is a suspension',
            'Shake vigorously to ensure proper mixing',
            'Let it sit at room temperature for 1 hour',
          ],
          correct: 1,
          rationale: 'Premixed contains NPH (cloudy suspension). It MUST be gently rolled to resuspend the NPH component evenly. Never shake (creates bubbles). The solution should appear uniformly cloudy after rolling.',
        },
        {
          stem: 'A patient on premixed insulin says, "I want to skip dinner tonight." The nurse should advise:',
          options: [
            '"Take your insulin as scheduled regardless of meals."',
            '"Do not take your evening premixed dose if you\'re not eating — the mealtime component would cause hypoglycemia."',
            '"Take half your normal dose."',
            '"Switch to your morning dose timing instead."',
          ],
          correct: 1,
          rationale: 'Premixed includes mealtime insulin (regular/lispro). No meal = mealtime insulin has nothing to cover → hypoglycemia. The patient should not take the dose if skipping the meal. Contact provider for guidance.',
        },
      ],
      r: [
        {
          stem: 'In 70/30 premixed insulin, the 70 refers to:',
          options: [
            '70% rapid-acting insulin (lispro)',
            '70% regular insulin',
            '70% NPH (intermediate-acting) insulin',
            '70% glargine (long-acting) insulin',
          ],
          correct: 2,
          rationale: '70/30 = 70% NPH + 30% Regular. The bigger number is always the intermediate-acting (NPH) component. The smaller number is the mealtime component.',
        },
        {
          stem: 'Premixed insulin is cloudy because it contains:',
          options: [
            'Glargine, which is always cloudy',
            'Regular insulin, which turns cloudy when mixed',
            'NPH insulin, which is a suspension',
            'Preservatives that cause cloudiness',
          ],
          correct: 2,
          rationale: 'NPH is a suspension containing protamine, which makes it cloudy. When NPH is part of a premixed formulation, the entire solution appears cloudy. Glargine is clear. Regular is clear. Cloudiness = NPH component.',
        },
        {
          stem: 'A disadvantage of premixed insulin compared to separate basal/bolus injections is:',
          options: [
            'It costs significantly more than individual vials',
            'The doses cannot be individually adjusted for basal vs mealtime needs',
            'It cannot be given by SubQ injection',
            'It expires faster than other insulins',
          ],
          correct: 1,
          rationale: 'The main limitation: both components change together. If you increase the dose for better meal coverage, you also increase the basal (hypo risk). Separate injections allow independent adjustment of each component.',
        },
      ],
    },
  },

  'Mixing: Clear Before Cloudy': {
    details: [
      'Rule: ALWAYS draw clear insulin first, then cloudy (NPH)',
      'Why: Prevents contaminating the clear vial with NPH protamine particles',
      'Step 1: Inject air into NPH vial (do NOT draw yet)',
      'Step 2: Inject air into clear vial, draw clear insulin',
      'Step 3: Draw NPH insulin into the same syringe',
      'Memory aid: "Clear Before Cloudy" or "RN" — Regular before NPH',
    ],
    questions: {
      g: [
        {
          stem: 'A nurse is mixing regular and NPH insulin. After injecting air into both vials, the nurse draws NPH first by mistake. The nurse should:',
          options: [
            'Continue and draw the regular insulin — the order only affects the air injection',
            'Push the NPH back, draw regular first, then redraw NPH',
            'Discard the syringe and start over completely',
            'Inject the NPH dose, then draw regular in a separate syringe',
          ],
          correct: 2,
          rationale: 'Once NPH is in the syringe, drawing from the regular vial risks injecting NPH particles into the clear (regular) vial → contaminating the entire vial for future use. You MUST start over. Option B risks cross-contamination by pushing back. The whole point of "clear before cloudy" is vial integrity.',
        },
        {
          stem: 'A patient asks, "Why can\'t I just draw the NPH first? Does it really matter?" The nurse\'s most accurate response is:',
          options: [
            '"It doesn\'t really matter — it\'s just a convention we follow."',
            '"Drawing cloudy first could contaminate the clear insulin vial with protamine, changing how the clear insulin works for future doses."',
            '"NPH is more dangerous, so we draw it last as a safety check."',
            '"The clear insulin would dissolve the NPH particles if drawn first."',
          ],
          correct: 1,
          rationale: 'The reason is vial contamination. NPH contains protamine. If NPH enters the regular insulin vial, it would alter the onset/peak of ALL future doses drawn from that vial. Option A is dangerously dismissive. The reason is real and clinically important.',
        },
        {
          stem: 'A nursing student is preparing to mix regular and NPH. The student injects air into the regular vial first, then the NPH vial. This technique is:',
          options: [
            'Correct — air can be injected in any order',
            'Incorrect — air should be injected into NPH first, then regular, before drawing begins',
            'Correct — as long as clear is drawn first after air injection',
            'Incorrect — air is not needed when mixing insulins',
          ],
          correct: 1,
          rationale: 'The full sequence: (1) inject air into NPH vial (equal to NPH dose), withdraw needle WITHOUT drawing NPH, (2) inject air into regular vial (equal to regular dose), draw regular, (3) insert into NPH vial and draw NPH. Air into NPH must come FIRST because you don\'t want to draw from NPH yet.',
        },
      ],
      y: [
        {
          stem: 'When mixing insulins in one syringe, the nurse draws the clear insulin first because:',
          options: [
            'Clear insulin is faster acting and needs to be on top',
            'It prevents NPH particles from contaminating the clear insulin vial',
            'The clear insulin would become cloudy if drawn second',
            'Clear insulin expires faster and should be used first',
          ],
          correct: 1,
          rationale: 'The purpose is vial integrity — keeping NPH protamine particles out of the clear insulin vial. If contaminated, every future dose from that vial would have altered pharmacokinetics.',
        },
        {
          stem: 'The nurse needs to mix 6 units of regular and 18 units of NPH. What total volume should be in the syringe?',
          options: [
            '6 units',
            '18 units',
            '24 units',
            '12 units (the average)',
          ],
          correct: 2,
          rationale: 'When mixing: total = regular dose + NPH dose. 6 + 18 = 24 units total in the syringe. Draw 6 units of regular first (clear), then draw up to the 24-unit mark with NPH (cloudy).',
        },
        {
          stem: 'A memory aid for mixing insulins is "RN." This stands for:',
          options: [
            'Right Now — inject immediately after mixing',
            'Regular before NPH — draw regular (clear) first',
            'Roll, then Needle — roll the vial before inserting needle',
            'Refrigerate Nightly — store mixed insulin in fridge',
          ],
          correct: 1,
          rationale: '"RN" = Regular before NPH. Draw Regular (clear) first, then NPH (cloudy). Easy to remember because nursing students are becoming RNs — Regular before NPH.',
        },
      ],
      r: [
        {
          stem: 'When mixing two types of insulin in one syringe, the nurse should draw which type first?',
          options: [
            'NPH (cloudy) insulin first',
            'Regular or rapid-acting (clear) insulin first',
            'Whichever has the larger dose first',
            'It doesn\'t matter — either can be drawn first',
          ],
          correct: 1,
          rationale: '"Clear Before Cloudy" — always draw clear (regular or rapid-acting) before cloudy (NPH). This prevents cross-contamination of the clear vial.',
        },
        {
          stem: '"Clear Before Cloudy" refers to:',
          options: [
            'Checking that all insulin vials are clear before using them',
            'Drawing clear insulin into the syringe before drawing cloudy NPH insulin',
            'Giving clear insulin injection before cloudy insulin injection',
            'Storing clear insulin in front of cloudy insulin in the refrigerator',
          ],
          correct: 1,
          rationale: 'This is the mixing rule: when combining two insulins in ONE syringe, always draw the clear insulin first to prevent contaminating the clear vial with NPH particles.',
        },
        {
          stem: 'Which insulin is cloudy and must be drawn second when mixing?',
          options: [
            'Regular insulin',
            'Lispro (Humalog)',
            'NPH insulin',
            'Glargine (Lantus)',
          ],
          correct: 2,
          rationale: 'NPH is the only cloudy insulin. It is drawn SECOND when mixing ("Clear Before Cloudy"). Remember: glargine is clear but NEVER mixed with anything.',
        },
      ],
    },
  },

  'Somogyi vs Dawn Phenomenon': {
    details: [
      'Both cause elevated fasting morning glucose — but the CAUSE is opposite',
      'Dawn Phenomenon: normal rise in growth hormone/cortisol at 4-8 AM → morning hyperglycemia',
      'Somogyi Effect: overnight HYPOglycemia triggers rebound HYPERglycemia (counter-regulatory response)',
      'KEY test: check blood glucose at 3 AM — this differentiates the two',
      'Dawn: 3 AM glucose NORMAL → treatment: increase bedtime insulin or give later',
      'Somogyi: 3 AM glucose LOW → treatment: DECREASE bedtime insulin or add bedtime snack',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on bedtime NPH insulin has a fasting glucose of 280 mg/dL. A 3 AM glucose check shows 48 mg/dL. The nurse should anticipate the provider will:',
          options: [
            'Increase the bedtime NPH dose to prevent morning hyperglycemia',
            'Decrease the bedtime NPH dose or add a bedtime snack',
            'Add a morning dose of rapid-acting insulin',
            'Switch to an oral antidiabetic and discontinue insulin',
          ],
          correct: 1,
          rationale: 'Fasting 280 + 3 AM glucose 48 = Somogyi effect (overnight hypo → rebound hyper). The fix is LESS insulin at bedtime, not more. Option A is the DEADLY trap — increasing the dose worsens the overnight hypoglycemia that\'s causing the rebound. Students see "high morning glucose" and think "more insulin" — that\'s the trap.',
        },
        {
          stem: 'Two patients both have fasting glucose of 250 mg/dL. Patient A has a 3 AM glucose of 110. Patient B has a 3 AM glucose of 55. The nurse recognizes:',
          options: [
            'Both patients have Dawn Phenomenon and need increased bedtime insulin',
            'Patient A has Dawn Phenomenon (increase insulin); Patient B has Somogyi Effect (decrease insulin)',
            'Both patients have Somogyi Effect and need decreased bedtime insulin',
            'Patient A has Somogyi Effect; Patient B has Dawn Phenomenon',
          ],
          correct: 1,
          rationale: 'Patient A: 3 AM normal (110) + morning high = Dawn Phenomenon (hormonal rise → increase insulin). Patient B: 3 AM LOW (55) + morning high = Somogyi (rebound from hypo → decrease insulin). OPPOSITE treatments. Option D is backwards — the most common student mistake.',
        },
        {
          stem: 'A patient with Dawn Phenomenon is switched from bedtime NPH to bedtime glargine. This change is made because:',
          options: [
            'Glargine is cheaper than NPH',
            'Glargine\'s peakless profile provides more consistent overnight coverage without the gap that allows dawn hormone surges',
            'Glargine can be mixed with morning rapid-acting to save injections',
            'NPH cannot be given at bedtime',
          ],
          correct: 1,
          rationale: 'NPH peaks 4-12h but then wanes, potentially leaving a gap in the early morning when cortisol/GH surge (dawn phenomenon). Glargine provides steady 24h coverage with no peak or trough → better morning control.',
        },
      ],
      y: [
        {
          stem: 'The key assessment to differentiate Dawn Phenomenon from Somogyi Effect is:',
          options: [
            'A fasting blood glucose level',
            'A blood glucose level at 3 AM',
            'A hemoglobin A1C level',
            'A post-dinner blood glucose level',
          ],
          correct: 1,
          rationale: '3 AM glucose is THE differentiating test. Normal at 3 AM = Dawn (hormonal). Low at 3 AM = Somogyi (rebound from hypo). Fasting glucose is elevated in BOTH — it can\'t differentiate them.',
        },
        {
          stem: 'A patient with Somogyi Effect should be taught to:',
          options: [
            'Increase their bedtime insulin dose',
            'Have a bedtime snack to prevent overnight hypoglycemia',
            'Skip bedtime insulin entirely',
            'Check blood glucose only in the morning',
          ],
          correct: 1,
          rationale: 'Somogyi = overnight hypo → rebound hyperglycemia. A bedtime snack prevents the overnight glucose drop. The provider may also decrease the bedtime insulin dose. Option A would worsen the overnight hypo.',
        },
        {
          stem: 'Dawn Phenomenon is caused by:',
          options: [
            'Taking too much insulin at bedtime',
            'Normal physiologic release of growth hormone and cortisol in early morning',
            'Eating too many carbohydrates at dinner',
            'Forgetting to take bedtime medication',
          ],
          correct: 1,
          rationale: 'Dawn Phenomenon is a NORMAL physiologic response — counter-regulatory hormones (GH, cortisol) rise between 4-8 AM, increasing hepatic glucose production. It\'s not caused by patient error or insulin dosing.',
        },
      ],
      r: [
        {
          stem: 'Both Dawn Phenomenon and Somogyi Effect present with:',
          options: [
            'Low fasting morning blood glucose',
            'Elevated fasting morning blood glucose',
            'Normal fasting morning blood glucose',
            'Ketones in the morning urine',
          ],
          correct: 1,
          rationale: 'Both cause morning hyperglycemia — that\'s why they\'re confusing. The CAUSE is different (Dawn = hormonal, Somogyi = rebound from hypo), but the morning glucose result looks the same.',
        },
        {
          stem: 'In Somogyi Effect, the 3 AM blood glucose would be:',
          options: [
            'Normal (80-120 mg/dL)',
            'Low (hypoglycemic)',
            'High (above 200 mg/dL)',
            'Cannot be determined from the name',
          ],
          correct: 1,
          rationale: 'Somogyi = overnight HYPOglycemia → body releases counter-regulatory hormones → rebound HYPERglycemia by morning. 3 AM glucose is LOW. Dawn = 3 AM glucose is NORMAL.',
        },
        {
          stem: 'Regarding treatment of Dawn Phenomenon and Somogyi Effect, the nurse knows:',
          options: [
            'Both conditions are managed by increasing the bedtime insulin dose',
            'Both conditions are managed by decreasing the bedtime insulin dose',
            'The conditions require opposite adjustments to the insulin regimen',
            'Neither condition requires changes to insulin — dietary changes are sufficient',
          ],
          correct: 2,
          rationale: 'Dawn = not enough insulin during the dawn hours → increase or adjust timing. Somogyi = too much insulin → decrease dose. OPPOSITE treatments for conditions that look the same on the morning glucose reading.',
        },
      ],
    },
  },

};
