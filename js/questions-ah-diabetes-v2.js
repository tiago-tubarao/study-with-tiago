// ══════════════════════════════════════════════
// ADULT HEALTH — DIABETES V2 (Missing Conditions)
// 20 conditions × 5 questions = 100 questions
// Keys match exam3/diabetes.html name fields EXACTLY
// ══════════════════════════════════════════════

window.DRUG_DEEP_AH_DIABETES_V2 = {

  'Rapid-Acting Insulin (Lispro, Aspart)': {
    details: [
      'Onset: 15 minutes; Peak: ~1 hour; Duration: 2-4 hours',
      'Given immediately BEFORE meals (within 15 min) — must eat after injection or risk hypoglycemia',
      'Brand names: Humalog (lispro), NovoLog (aspart), Apidra (glulisine)',
      'Most common adverse effect: HYPOGLYCEMIA — especially if meal is skipped or delayed',
      'Can be given via insulin pump for continuous subcutaneous delivery'
    ],
    questions: {
      g: [
        {
          stem: 'A patient receives lispro insulin at 7:00 AM before breakfast. At what time should the nurse be MOST vigilant for hypoglycemia?',
          options: [
            '7:15 AM',
            '8:00 AM',
            '11:00 AM',
            '2:00 PM'
          ],
          correct: 1,
          rationale: 'Rapid-acting insulin (lispro) peaks at approximately 1 hour after injection. Given at 7:00 AM, peak action and greatest hypoglycemia risk occurs around 8:00 AM. By 11:00 AM and 2:00 PM, the drug has worn off (duration 2-4 hours). At 7:15 AM, onset is just beginning.'
        },
        {
          stem: 'A patient on rapid-acting insulin asks if they can take it 45 minutes before eating. Which response by the nurse is BEST?',
          options: [
            '"That timing is fine for rapid-acting insulin."',
            '"Take it within 15 minutes of eating — taking it too early increases hypoglycemia risk before your food is digested."',
            '"You should take it 1-2 hours before eating for best results."',
            '"Rapid-acting insulin should be taken at bedtime only."'
          ],
          correct: 1,
          rationale: 'Rapid-acting insulin should be given within 15 minutes BEFORE meals. Taking it 45 minutes early means the insulin peaks before food is absorbed, causing hypoglycemia. The rapid onset (15 min) and short duration require close timing with meals. Bedtime dosing is for long-acting insulin.'
        }
      ],
      y: [
        {
          stem: 'Which is a rapid-acting insulin?',
          options: [
            'NPH (Humulin N)',
            'Glargine (Lantus)',
            'Lispro (Humalog)',
            'Regular (Humulin R)'
          ],
          correct: 2,
          rationale: 'Lispro (Humalog) is a rapid-acting insulin with onset of 15 minutes. NPH is intermediate-acting. Glargine is long-acting. Regular insulin is short-acting (onset 30-60 min). Rapid-acting insulins are designed for mealtime coverage.'
        },
        {
          stem: 'A patient on rapid-acting insulin skips lunch. The nurse should monitor for:',
          options: [
            'Hyperglycemia from missed medication',
            'Hypoglycemia because the insulin is still active without food',
            'Diabetic ketoacidosis',
            'No concerns — missing one meal is not significant'
          ],
          correct: 1,
          rationale: 'If the patient took rapid-acting insulin but skipped the meal, the insulin will lower blood glucose without food to counterbalance it, causing hypoglycemia. The nurse should monitor for cold/clammy skin, shakiness, tachycardia, confusion, and treat if BG <70 mg/dL.'
        }
      ],
      r: [
        {
          stem: 'What is the onset of rapid-acting insulin (lispro)?',
          options: [
            '5 minutes',
            '15 minutes',
            '1-2 hours',
            '4-6 hours'
          ],
          correct: 1,
          rationale: 'Rapid-acting insulin (lispro, aspart, glulisine) has an onset of approximately 15 minutes, peaks at ~1 hour, and lasts 2-4 hours. This fast onset is why it must be given right before meals.'
        }
      ]
    }
  },

  'Short-Acting (Regular)': {
    details: [
      'Onset: 30-60 minutes; Peak: 2-4 hours; Duration: 5-7 hours',
      'The ONLY insulin that can be given IV — used as continuous drip in DKA/HHS (0.1 units/kg/hr)',
      'Can be mixed with NPH (draw Regular/clear FIRST, then NPH/cloudy)',
      'Monitor for hypoglycemia at 2-4 hours (peak time)',
      'Given 30 minutes before meals when used subcutaneously'
    ],
    questions: {
      g: [
        {
          stem: 'A patient in DKA is started on an insulin drip. Which type of insulin does the nurse anticipate using?',
          options: [
            'NPH insulin',
            'Glargine (Lantus)',
            'Regular insulin',
            'Lispro (Humalog)'
          ],
          correct: 2,
          rationale: 'Regular insulin is the ONLY insulin that can be given intravenously. In DKA, a continuous IV insulin drip (typically 0.1 units/kg/hr) is used for precise blood glucose control. NPH, glargine, and lispro are subcutaneous only. IV delivery allows rapid dose adjustments based on hourly glucose checks.'
        },
        {
          stem: 'A patient receives regular insulin subcutaneously at 11:30 AM before lunch. The nurse should be MOST alert for hypoglycemia at:',
          options: [
            '11:45 AM',
            '1:30-3:30 PM',
            '6:30 PM',
            '10:00 PM'
          ],
          correct: 1,
          rationale: 'Regular insulin peaks at 2-4 hours after injection. Given at 11:30 AM, peak effect occurs between 1:30-3:30 PM, when hypoglycemia risk is greatest. At 11:45, onset is just beginning. By 6:30 PM (7 hours), the insulin effect is waning.'
        }
      ],
      y: [
        {
          stem: 'When mixing regular and NPH insulin in the same syringe, which insulin should be drawn up FIRST?',
          options: [
            'NPH (cloudy) first, then regular (clear)',
            'Regular (clear) first, then NPH (cloudy)',
            'Either can be drawn first — order does not matter',
            'They should never be mixed in the same syringe'
          ],
          correct: 1,
          rationale: 'When mixing insulins: draw CLEAR (regular) before CLOUDY (NPH). Memory aid: "clear before cloudy." This prevents contamination of the regular insulin vial with NPH particles, which would alter the regular insulin\'s rapid action. Regular and NPH are the only insulins that should be mixed.'
        },
        {
          stem: 'What makes regular insulin unique compared to other insulin types?',
          options: [
            'It has no peak action time.',
            'It is the only insulin that can be given intravenously.',
            'It lasts 24 hours with a single injection.',
            'It does not cause hypoglycemia.'
          ],
          correct: 1,
          rationale: 'Regular insulin is the ONLY insulin approved for IV administration. All other insulins (rapid-acting, intermediate, long-acting) are given subcutaneously only. IV regular insulin is critical for managing DKA, HHS, and hyperkalemia in hospital settings.'
        }
      ],
      r: [
        {
          stem: 'What is the peak time of regular insulin?',
          options: [
            '15-30 minutes',
            '2-4 hours',
            '6-8 hours',
            '12-16 hours'
          ],
          correct: 1,
          rationale: 'Regular insulin peaks at 2-4 hours after subcutaneous injection. Onset is 30-60 minutes and duration is 5-7 hours. The peak is when hypoglycemia risk is highest — the nurse should monitor blood glucose during this window.'
        }
      ]
    }
  },

  'Intermediate (NPH)': {
    details: [
      'Onset: 1-3 hours; Peak: 4-12 hours; Duration: 12-18 hours',
      'Cloudy in appearance — must be gently rolled (not shaken) before administration',
      'Peak at 4-12 hours means risk of OVERNIGHT hypoglycemia when given at dinnertime (Somogyi effect)',
      'Can be mixed with regular insulin (clear before cloudy)',
      'Usually given once or twice daily for basal coverage'
    ],
    questions: {
      g: [
        {
          stem: 'A patient takes NPH insulin at 6:00 PM. At 2:00 AM, the patient is found diaphoretic and confused with a blood glucose of 52 mg/dL. The nurse recognizes this as:',
          options: [
            'Dawn phenomenon requiring increased evening insulin',
            'Somogyi effect — nocturnal hypoglycemia from NPH peak, requiring DECREASED evening insulin dose',
            'Normal blood glucose fluctuation during sleep',
            'DKA requiring emergency insulin drip'
          ],
          correct: 1,
          rationale: 'NPH peaks at 4-12 hours. Given at 6 PM, peak occurs around 10 PM-6 AM, causing nocturnal hypoglycemia (Somogyi effect). The 2 AM blood glucose of 52 confirms this. Treatment: DECREASE the evening NPH dose (not increase). Dawn phenomenon shows normal 3 AM glucose with high fasting glucose. A BG of 52 is hypoglycemia, not DKA.'
        },
        {
          stem: 'A nurse is preparing NPH insulin and notices it is cloudy. Which action is correct?',
          options: [
            'Discard the vial — all insulin should be clear.',
            'Gently roll the vial between the palms to mix the suspension evenly.',
            'Shake the vial vigorously to ensure complete mixing.',
            'Warm the vial in hot water before drawing up the dose.'
          ],
          correct: 1,
          rationale: 'NPH insulin is a suspension and is normally CLOUDY in appearance. It should be gently rolled between the palms (NOT shaken) to ensure even distribution of the particles. Shaking creates air bubbles and may damage the insulin. Clear insulins (regular, rapid-acting, glargine) should not be cloudy — cloudiness in those would indicate contamination.'
        }
      ],
      y: [
        {
          stem: 'Which characteristic is unique to NPH insulin?',
          options: [
            'It is clear in appearance.',
            'It is cloudy and must be gently rolled before use.',
            'It has no peak and provides 24-hour coverage.',
            'It can be given intravenously.'
          ],
          correct: 1,
          rationale: 'NPH is the only commonly used insulin that is cloudy (it is a suspension of insulin crystals). It must be gently rolled to mix evenly before injection. Clear insulins include regular, rapid-acting, and glargine. NPH has a definite peak (4-12 hours) and cannot be given IV.'
        },
        {
          stem: 'A patient on NPH insulin asks why they sometimes wake up shaky and sweaty at night. The nurse explains:',
          options: [
            '"This is normal and not related to your insulin."',
            '"Your NPH insulin peaks during the night, which can cause low blood sugar while you sleep."',
            '"You are eating too much before bed."',
            '"This is a sign your insulin dose is too low."'
          ],
          correct: 1,
          rationale: 'NPH peaks 4-12 hours after injection. If given at dinner/bedtime, the peak occurs during sleep, causing nocturnal hypoglycemia (Somogyi effect). Symptoms include diaphoresis, shakiness, and confusion during the night. The provider may need to reduce the evening dose or add a bedtime snack.'
        }
      ],
      r: [
        {
          stem: 'NPH insulin is classified as:',
          options: [
            'Rapid-acting',
            'Short-acting',
            'Intermediate-acting',
            'Long-acting'
          ],
          correct: 2,
          rationale: 'NPH is an intermediate-acting insulin with onset of 1-3 hours, peak of 4-12 hours, and duration of 12-18 hours. It provides basal coverage but has a definite peak (unlike long-acting insulins which are peakless).'
        }
      ]
    }
  },

  'Long-Acting (Glargine/Lantus)': {
    details: [
      'Onset: 1-2 hours; NO PEAK (flat, steady absorption); Duration: ~24 hours',
      'Provides basal insulin coverage — given once daily at the SAME time each day',
      'CANNOT be mixed with other insulins in the same syringe',
      'Lower hypoglycemia risk than NPH because there is no peak',
      'Clear in appearance (unlike NPH which is cloudy) — do not confuse'
    ],
    questions: {
      g: [
        {
          stem: 'A patient asks why they still need mealtime insulin if glargine provides 24-hour coverage. Which response is MOST accurate?',
          options: [
            '"Glargine covers everything — you don\'t need mealtime insulin."',
            '"Glargine provides a steady baseline level but does not cover the blood sugar spikes from meals — mealtime insulin handles those."',
            '"Glargine only works for 12 hours, so you need the extra coverage."',
            '"The mealtime insulin is just for backup in case glargine stops working."'
          ],
          correct: 1,
          rationale: 'Glargine provides steady BASAL insulin (background coverage) with no peak — it keeps glucose stable between meals and overnight. However, it does not cover the glucose spikes that occur after eating. Rapid-acting or short-acting insulin is needed at mealtimes (bolus insulin) to cover carbohydrate intake. This is called basal-bolus therapy.'
        },
        {
          stem: 'A nurse is preparing insulin for a patient who takes glargine and lispro. The patient asks to have both drawn into one syringe. The nurse should:',
          options: [
            'Draw glargine first, then lispro into the same syringe.',
            'Draw lispro first, then glargine into the same syringe.',
            'Explain that glargine CANNOT be mixed with other insulins and must be given as a separate injection.',
            'Mix them together since they are both clear insulins.'
          ],
          correct: 2,
          rationale: 'Glargine (Lantus) CANNOT be mixed with any other insulin in the same syringe. Mixing alters glargine\'s pH-dependent absorption, which would change its long-acting properties. It must always be given as a separate injection. Only regular and NPH can be mixed together.'
        }
      ],
      y: [
        {
          stem: 'Which statement about glargine (Lantus) is correct?',
          options: [
            'It peaks at 4-6 hours and must be timed with meals.',
            'It is cloudy and must be rolled before injection.',
            'It has no peak, providing steady 24-hour basal coverage.',
            'It can be given intravenously in emergencies.'
          ],
          correct: 2,
          rationale: 'Glargine has NO peak — it provides a flat, steady level of insulin over approximately 24 hours. This is why it has lower nocturnal hypoglycemia risk than NPH. Glargine is CLEAR (not cloudy). It cannot be given IV and is not timed with meals — it provides background/basal coverage.'
        },
        {
          stem: 'Why does glargine have a lower risk of nocturnal hypoglycemia compared to NPH?',
          options: [
            'Glargine is a weaker form of insulin.',
            'Glargine has no peak, so there is no surge of activity during sleep.',
            'Glargine is only active for 8 hours.',
            'Glargine stimulates the liver to produce glucose at night.'
          ],
          correct: 1,
          rationale: 'Glargine has NO peak — it provides a steady, flat level of insulin over 24 hours. NPH peaks at 4-12 hours, which can cause dangerous blood sugar drops overnight. The absence of a peak makes glargine safer for nighttime basal coverage.'
        }
      ],
      r: [
        {
          stem: 'How often is glargine (Lantus) typically administered?',
          options: [
            'Before each meal',
            'Once daily at the same time',
            'Every 8 hours',
            'Only when blood glucose is high'
          ],
          correct: 1,
          rationale: 'Glargine is given once daily at the SAME time each day because it provides approximately 24 hours of basal insulin coverage. It is not a mealtime insulin and is not given on a sliding scale or PRN basis.'
        }
      ]
    }
  },

  'Mixing Rule: Clear Before Cloudy': {
    details: [
      'When mixing regular (clear) and NPH (cloudy) in one syringe: draw CLEAR first, then CLOUDY',
      'Memory aid: "Clear before cloudy" prevents contamination of the regular insulin vial',
      'If NPH particles enter the regular vial, it would alter the regular insulin\'s predictable onset',
      'Only regular and NPH can be mixed — NEVER mix glargine or detemir with other insulins',
      'Inject air into NPH vial first (do not draw), then inject air into regular vial and draw regular, then draw NPH'
    ],
    questions: {
      g: [
        {
          stem: 'A nurse is teaching a patient to mix regular and NPH insulin. Place the steps in the correct order: (1) Draw regular insulin, (2) Inject air into NPH vial, (3) Inject air into regular vial, (4) Draw NPH insulin. Which sequence is correct?',
          options: [
            '3, 1, 2, 4',
            '2, 3, 1, 4',
            '1, 2, 3, 4',
            '3, 2, 1, 4'
          ],
          correct: 1,
          rationale: 'Correct sequence: (2) Inject air into NPH vial first (do NOT draw insulin yet), (3) Inject air into regular vial, (1) Draw up regular insulin (clear), (4) Then draw up NPH insulin (cloudy). Air is injected into NPH first to prevent NPH particles from contaminating the regular insulin. "Clear before cloudy" means draw clear/regular first.'
        },
        {
          stem: 'A nursing student draws NPH insulin first, then regular insulin into the same syringe. The nurse preceptor intervenes because:',
          options: [
            'NPH should never be given with regular insulin.',
            'Drawing NPH first risks contaminating the regular insulin vial with NPH particles, altering its action.',
            'Regular insulin is always drawn second by convention only.',
            'NPH cannot be drawn from a multi-dose vial.'
          ],
          correct: 1,
          rationale: 'If NPH (cloudy) is drawn first, NPH particles on the needle could contaminate the regular (clear) insulin vial when drawing the second insulin. This would alter the regular insulin\'s predictable, rapid onset. Drawing clear (regular) first protects the regular vial from contamination. This is a patient safety issue, not just convention.'
        }
      ],
      y: [
        {
          stem: 'The memory aid "clear before cloudy" refers to:',
          options: [
            'Administering rapid-acting insulin before long-acting',
            'Drawing regular insulin (clear) before NPH insulin (cloudy) when mixing',
            'Checking blood glucose before meals and at bedtime',
            'Injecting insulin into clear skin before bruised areas'
          ],
          correct: 1,
          rationale: '"Clear before cloudy" means draw regular insulin (which is clear) before NPH insulin (which is cloudy/milky) when mixing both in one syringe. This prevents contamination of the regular insulin vial with NPH particles.'
        },
        {
          stem: 'Which insulins can be mixed in the same syringe?',
          options: [
            'Glargine and lispro',
            'Regular and NPH',
            'Glargine and NPH',
            'Any two insulins can be mixed'
          ],
          correct: 1,
          rationale: 'Only regular insulin and NPH insulin can be mixed in the same syringe. Glargine (Lantus) and detemir (Levemir) should NEVER be mixed with other insulins because mixing alters their absorption properties. Rapid-acting insulins can be mixed with NPH in some protocols, but regular + NPH is the classic tested combination.'
        }
      ],
      r: [
        {
          stem: 'When mixing insulins, which type is drawn into the syringe FIRST?',
          options: [
            'NPH (cloudy)',
            'Regular (clear)',
            'Whichever has the larger dose',
            'It does not matter'
          ],
          correct: 1,
          rationale: 'Regular insulin (clear) is ALWAYS drawn first — "clear before cloudy." This prevents NPH particles from contaminating the regular insulin vial and altering its action.'
        }
      ]
    }
  },

  'Injection Sites & Rotation': {
    details: [
      'Injection sites: abdomen (fastest absorption), upper arms, thighs, buttocks',
      'ROTATE injection sites within the same region to prevent lipodystrophy (lumps/pits in tissue)',
      'Do NOT inject into the same exact spot repeatedly — space injections at least 1 inch apart',
      'Abdomen provides the most consistent absorption; avoid 2-inch area around the umbilicus',
      'Exercise increases absorption at the injection site — avoid injecting into a limb about to be exercised'
    ],
    questions: {
      g: [
        {
          stem: 'A patient who always injects insulin into the same spot on their left thigh develops firm, lumpy tissue at the site. The nurse recognizes this as:',
          options: [
            'An allergic reaction requiring medication change',
            'Lipodystrophy from repeated injections at the same site',
            'An abscess requiring incision and drainage',
            'Normal scar tissue from subcutaneous injections'
          ],
          correct: 1,
          rationale: 'Lipodystrophy (lipohypertrophy — firm, lumpy fat deposits) develops from repeated insulin injections at the same site. It impairs insulin absorption, leading to unpredictable blood glucose levels. Prevention: rotate injection sites within the same body region, spacing at least 1 inch apart. The nurse should teach proper rotation technique.'
        },
        {
          stem: 'A patient plans to go for a jog after injecting insulin into their right thigh. The nurse should advise:',
          options: [
            '"That\'s fine — exercise helps insulin work better."',
            '"Inject into the abdomen instead — exercising the thigh will speed up insulin absorption and increase hypoglycemia risk."',
            '"Wait at least 4 hours after injection before exercising."',
            '"Inject a smaller dose since you plan to exercise."'
          ],
          correct: 1,
          rationale: 'Exercise increases blood flow to the exercised muscles, which speeds insulin absorption from that area. Injecting into the thigh before a jog could cause faster-than-expected insulin absorption and hypoglycemia. The abdomen provides the most consistent absorption and is not affected by leg exercise.'
        }
      ],
      y: [
        {
          stem: 'Which injection site provides the FASTEST and most consistent insulin absorption?',
          options: [
            'Upper arms',
            'Thighs',
            'Abdomen',
            'Buttocks'
          ],
          correct: 2,
          rationale: 'The abdomen provides the fastest and most consistent insulin absorption due to its blood supply. Inject at least 2 inches away from the umbilicus. Upper arms and thighs have variable absorption depending on activity level. Buttocks have the slowest absorption.'
        },
        {
          stem: 'Why should insulin injection sites be rotated?',
          options: [
            'To prevent the body from developing insulin resistance',
            'To prevent lipodystrophy and ensure consistent insulin absorption',
            'To reduce pain from injections',
            'To prevent insulin from becoming ineffective'
          ],
          correct: 1,
          rationale: 'Site rotation prevents lipodystrophy (tissue changes from repeated trauma) which impairs insulin absorption and causes unpredictable blood glucose levels. Rotating within the same body region (not randomly between regions) provides the most consistent absorption while preventing tissue damage.'
        }
      ],
      r: [
        {
          stem: 'When injecting insulin into the abdomen, the nurse should avoid the area:',
          options: [
            'Above the waistline',
            'Within 2 inches of the umbilicus',
            'On the right side only',
            'Below the ribcage'
          ],
          correct: 1,
          rationale: 'Avoid injecting insulin within 2 inches (5 cm) of the umbilicus because absorption is erratic in this area due to fibrous tissue. The rest of the abdominal area is the preferred injection site for consistent absorption.'
        }
      ]
    }
  },

  'Insulin Storage': {
    details: [
      'Unopened insulin vials: refrigerate (36-46°F / 2-8°C) until expiration date',
      'Opened/in-use insulin: can be kept at room temperature for up to 28-30 days (varies by type)',
      'NEVER freeze insulin — freezing destroys it; NEVER expose to extreme heat or direct sunlight',
      'Room temperature insulin causes less injection pain than cold insulin',
      'Inspect before use: clear insulins should be clear; discard if cloudy, discolored, or has particles (except NPH which is normally cloudy)'
    ],
    questions: {
      g: [
        {
          stem: 'A patient stores their opened insulin vial in the car during summer. The nurse explains this is unsafe because:',
          options: [
            'The car vibrations damage the insulin molecules.',
            'Extreme heat degrades insulin, making it ineffective and causing unpredictable blood glucose control.',
            'Insulin must always be refrigerated once opened.',
            'The sunlight through the car window activates the insulin prematurely.'
          ],
          correct: 1,
          rationale: 'Extreme heat (as in a car during summer) degrades insulin proteins, making the medication less effective or completely inactive. This leads to unpredictable hyperglycemia. Once opened, insulin can be stored at room temperature (up to 86°F) for 28-30 days, but extreme heat or freezing destroys it. Refrigeration is not required once opened but is acceptable.'
        },
        {
          stem: 'A patient pulls a glargine vial from the refrigerator and notices it appears cloudy with visible particles. The nurse should:',
          options: [
            'Roll the vial gently to redistribute the particles.',
            'Warm the vial to room temperature and recheck.',
            'Discard the vial — glargine should always be clear; cloudiness indicates degradation.',
            'Draw up the dose as usual — some cloudiness is normal.'
          ],
          correct: 2,
          rationale: 'Glargine is a CLEAR insulin. Cloudiness, particles, or discoloration in a clear insulin indicates degradation or contamination — the vial must be discarded. Only NPH insulin is normally cloudy (it is a suspension). Using degraded insulin leads to unpredictable glucose control.'
        }
      ],
      y: [
        {
          stem: 'How should an opened insulin vial be stored?',
          options: [
            'In the freezer to extend shelf life',
            'At room temperature for up to 28-30 days',
            'In direct sunlight to keep it warm',
            'In a heated cabinet above 100°F'
          ],
          correct: 1,
          rationale: 'Once opened, insulin can be stored at room temperature (59-86°F) for up to 28-30 days. Room temperature insulin also causes less injection site pain than cold insulin. Never freeze (destroys insulin) or expose to extreme heat. Unopened vials should remain refrigerated.'
        },
        {
          stem: 'A patient complains that insulin injections are painful. Which tip may reduce discomfort?',
          options: [
            'Inject the insulin directly from the refrigerator.',
            'Allow the insulin to reach room temperature before injecting.',
            'Shake the vial vigorously before drawing up the dose.',
            'Inject into areas with visible bruising.'
          ],
          correct: 1,
          rationale: 'Cold insulin causes more injection site pain than room-temperature insulin. Allowing insulin to come to room temperature before injection reduces discomfort. Shaking causes air bubbles (roll gently for NPH only). Never inject into bruised areas.'
        }
      ],
      r: [
        {
          stem: 'Insulin should NEVER be:',
          options: [
            'Stored at room temperature',
            'Frozen',
            'Kept in the original box',
            'Used after opening the vial'
          ],
          correct: 1,
          rationale: 'Insulin should NEVER be frozen — freezing destroys the insulin molecules and makes it ineffective. Room temperature storage is fine for opened vials (up to 28-30 days). Keeping in the original box is actually recommended to protect from light.'
        }
      ]
    }
  },

  'Sulfonylureas (Glipizide, Glyburide)': {
    details: [
      'MOA: Stimulates pancreatic beta cells to secrete MORE insulin (requires functioning beta cells — Type 2 only)',
      'Major adverse effect: HYPOGLYCEMIA — especially if meals are skipped',
      'Risk factors for hypoglycemia: elderly, renal impairment, skipped meals, alcohol use',
      'Weight gain is common (insulin promotes fat storage)',
      'Take before meals; glyburide has longer duration and higher hypoglycemia risk than glipizide'
    ],
    questions: {
      g: [
        {
          stem: 'An elderly patient on glyburide is found confused and diaphoretic at 2:00 PM. Blood glucose is 48 mg/dL. The patient reports skipping lunch. Which factor MOST contributed to this event?',
          options: [
            'The patient is developing type 1 diabetes.',
            'Glyburide stimulates insulin release regardless of food intake, and skipping lunch allowed blood glucose to drop dangerously.',
            'The patient took too many over-the-counter vitamins.',
            'Glyburide caused liver failure leading to hypoglycemia.'
          ],
          correct: 1,
          rationale: 'Sulfonylureas (glyburide) stimulate the pancreas to release insulin independent of food intake. When a meal is skipped, the insulin continues lowering blood glucose without carbohydrate intake to counterbalance, causing hypoglycemia. Elderly patients are at higher risk due to decreased renal clearance. This is the most common and dangerous side effect of sulfonylureas.'
        },
        {
          stem: 'Why are sulfonylureas NOT effective for patients with type 1 diabetes?',
          options: [
            'Type 1 patients are allergic to sulfonylureas.',
            'Sulfonylureas require functioning pancreatic beta cells to stimulate insulin release, which are destroyed in type 1.',
            'Sulfonylureas only work on liver glucose production.',
            'Type 1 patients have too much insulin already.'
          ],
          correct: 1,
          rationale: 'Sulfonylureas work by stimulating pancreatic beta cells to release insulin. In type 1 diabetes, the autoimmune process has destroyed the beta cells — there are no cells to stimulate. Therefore, sulfonylureas are ineffective. Type 1 patients require exogenous insulin replacement.'
        }
      ],
      y: [
        {
          stem: 'Which adverse effect is MOST common with sulfonylureas?',
          options: [
            'Lactic acidosis',
            'Hypoglycemia',
            'Urinary tract infection',
            'Peripheral neuropathy'
          ],
          correct: 1,
          rationale: 'Hypoglycemia is the most common and serious adverse effect of sulfonylureas because they stimulate insulin release regardless of blood glucose level. Risk is highest when meals are skipped, in elderly patients, and with renal impairment. Lactic acidosis is associated with metformin, not sulfonylureas.'
        },
        {
          stem: 'A patient on glipizide asks when to take the medication. The nurse instructs:',
          options: [
            '"Take it at bedtime with a snack."',
            '"Take it 30 minutes before meals."',
            '"Take it only when your blood sugar is high."',
            '"Take it with antacids to reduce stomach upset."'
          ],
          correct: 1,
          rationale: 'Sulfonylureas should be taken before meals (typically 30 minutes) so that the insulin release coincides with the postprandial glucose rise from the meal. Taking it at bedtime increases nocturnal hypoglycemia risk. It is not a PRN medication.'
        }
      ],
      r: [
        {
          stem: 'Sulfonylureas work by:',
          options: [
            'Reducing glucose production in the liver',
            'Stimulating the pancreas to release more insulin',
            'Blocking glucose absorption in the intestines',
            'Increasing glucose excretion by the kidneys'
          ],
          correct: 1,
          rationale: 'Sulfonylureas (glipizide, glyburide) stimulate the pancreatic beta cells to secrete more insulin. They require functioning beta cells, so they only work in type 2 diabetes. Metformin reduces liver glucose production. Alpha-glucosidase inhibitors slow intestinal absorption. SGLT-2 inhibitors increase renal excretion.'
        }
      ]
    }
  },

  'Meglitinides (Repaglinide)': {
    details: [
      'MOA: Same as sulfonylureas — stimulates insulin secretion from beta cells, but SHORTER acting',
      'Taken with meals (skip the dose if skipping the meal) — flexible dosing',
      'Shorter duration = lower hypoglycemia risk than sulfonylureas (but still possible)',
      'Often called "meal-time" secretagogues because of meal-based dosing',
      'Adverse effects: hypoglycemia (if meal skipped), weight gain, upper respiratory infection'
    ],
    questions: {
      g: [
        {
          stem: 'A patient on repaglinide decides to skip dinner. Which instruction is MOST important?',
          options: [
            '"Take your repaglinide dose anyway to keep blood sugar stable."',
            '"Skip your repaglinide dose — taking it without eating will cause hypoglycemia."',
            '"Take half your usual dose as a compromise."',
            '"Take the dose with a glass of juice instead of dinner."'
          ],
          correct: 1,
          rationale: 'Meglitinides like repaglinide are taken WITH meals and should be SKIPPED if the meal is skipped. Taking the medication without food would stimulate insulin release without a glucose source, causing hypoglycemia. This "skip the meal, skip the dose" flexibility is a key advantage of meglitinides over sulfonylureas.'
        },
        {
          stem: 'What is the key advantage of meglitinides (repaglinide) over sulfonylureas (glyburide)?',
          options: [
            'Meglitinides do not cause any hypoglycemia.',
            'Meglitinides have shorter duration, allowing flexible meal-based dosing with lower hypoglycemia risk.',
            'Meglitinides work for type 1 diabetes.',
            'Meglitinides do not require functioning beta cells.'
          ],
          correct: 1,
          rationale: 'Meglitinides have a shorter duration of action compared to sulfonylureas, which allows flexible meal-based dosing (take with meal, skip with skipped meal). This reduces hypoglycemia risk. Both drug classes can still cause hypoglycemia and both require functioning beta cells (type 2 only).'
        }
      ],
      y: [
        {
          stem: 'When should a patient take repaglinide?',
          options: [
            'Once daily at bedtime',
            'With each meal (skip dose if meal is skipped)',
            'Only when blood glucose exceeds 200 mg/dL',
            'Every 8 hours regardless of meals'
          ],
          correct: 1,
          rationale: 'Repaglinide is taken WITH meals — it is a short-acting insulin secretagogue designed for mealtime use. If a meal is skipped, the dose should be skipped to prevent hypoglycemia. This meal-based dosing is the defining feature of meglitinides.'
        },
        {
          stem: 'Meglitinides have a mechanism of action similar to:',
          options: [
            'Metformin',
            'Sulfonylureas',
            'SGLT-2 inhibitors',
            'Alpha-glucosidase inhibitors'
          ],
          correct: 1,
          rationale: 'Meglitinides share the same mechanism as sulfonylureas — both stimulate pancreatic beta cells to release insulin. The key difference is that meglitinides have a shorter duration of action, allowing more flexible meal-based dosing.'
        }
      ],
      r: [
        {
          stem: 'The key dosing rule for meglitinides is:',
          options: [
            'Take on an empty stomach each morning',
            'Take with meals; skip the dose if skipping the meal',
            'Take only when blood glucose is above 250 mg/dL',
            'Take at bedtime with a snack'
          ],
          correct: 1,
          rationale: 'Meglitinides are taken WITH meals. If a meal is skipped, the dose is skipped. This prevents hypoglycemia from insulin secretion without a food source. This flexibility is the key clinical advantage of the drug class.'
        }
      ]
    }
  },

  'Alpha-Glucosidase Inhibitors (Acarbose)': {
    details: [
      'MOA: Slows carbohydrate digestion/absorption in the small intestine by inhibiting alpha-glucosidase enzymes',
      'Reduces POSTPRANDIAL (after-meal) blood glucose spikes — does not affect fasting glucose significantly',
      'Must be taken with the FIRST BITE of each meal to be effective',
      'Common adverse effects: flatulence, bloating, abdominal cramping, diarrhea (from undigested carbs fermenting in colon)',
      'If hypoglycemia occurs while on acarbose, treat with GLUCOSE TABLETS (not table sugar — acarbose blocks sucrose absorption)'
    ],
    questions: {
      g: [
        {
          stem: 'A patient taking acarbose and a sulfonylurea develops hypoglycemia (BG 58 mg/dL). The nurse should treat with:',
          options: [
            'Orange juice',
            'Table sugar dissolved in water',
            'Glucose tablets',
            'A candy bar'
          ],
          correct: 2,
          rationale: 'Acarbose blocks the enzymes that break down complex carbohydrates and sucrose (table sugar) in the intestines. If hypoglycemia occurs in a patient on acarbose, table sugar, juice, and candy will NOT be absorbed quickly enough. GLUCOSE tablets (pure dextrose) are the correct treatment because glucose does not require enzymatic breakdown and is absorbed directly. This is a critical NCLEX concept.'
        },
        {
          stem: 'A patient takes acarbose 30 minutes before eating. The nurse should correct this by saying:',
          options: [
            '"That timing is correct."',
            '"Take acarbose with the FIRST BITE of your meal — it needs to be in the gut when carbohydrates arrive."',
            '"Take it 1 hour after eating for best results."',
            '"Take it at bedtime instead."'
          ],
          correct: 1,
          rationale: 'Acarbose must be taken with the FIRST BITE of each meal. It works by slowing carbohydrate digestion in the intestine, so it must be present when food arrives. Taking it 30 minutes before or after eating makes it ineffective. It does not affect fasting glucose.'
        }
      ],
      y: [
        {
          stem: 'Which adverse effects are MOST common with acarbose?',
          options: [
            'Hypoglycemia and weight gain',
            'Flatulence, bloating, and abdominal cramping',
            'Lactic acidosis and metallic taste',
            'Urinary tract infections and dehydration'
          ],
          correct: 1,
          rationale: 'Acarbose slows carbohydrate absorption, so undigested carbohydrates pass into the colon where bacteria ferment them, producing gas. This causes flatulence, bloating, abdominal cramping, and diarrhea. These GI effects often limit patient compliance. Acarbose alone does not typically cause hypoglycemia.'
        },
        {
          stem: 'Acarbose primarily reduces:',
          options: [
            'Fasting blood glucose levels',
            'Postprandial (after-meal) blood glucose spikes',
            'Hemoglobin A1C by 3-4%',
            'Insulin resistance in muscle tissue'
          ],
          correct: 1,
          rationale: 'Acarbose slows carbohydrate digestion and absorption, which specifically reduces postprandial (after-meal) blood glucose spikes. It has minimal effect on fasting glucose because it only works when carbohydrates are being digested.'
        }
      ],
      r: [
        {
          stem: 'Acarbose works by:',
          options: [
            'Stimulating insulin release from the pancreas',
            'Slowing carbohydrate absorption in the small intestine',
            'Increasing glucose excretion in the urine',
            'Reducing glucose production in the liver'
          ],
          correct: 1,
          rationale: 'Acarbose inhibits alpha-glucosidase enzymes in the small intestine, slowing the breakdown and absorption of complex carbohydrates. This delays glucose entry into the bloodstream after meals. It does not affect insulin secretion, renal excretion, or liver glucose production.'
        }
      ]
    }
  },

  'SGLT-2 Inhibitors (-flozins)': {
    details: [
      'MOA: Blocks sodium-glucose co-transporter 2 in the kidneys → glucose is NOT reabsorbed → excreted in urine',
      'Names end in "-flozin": empagliflozin (Jardiance), canagliflozin (Invokana), dapagliflozin (Farxiga)',
      'Benefits: lowers blood glucose, promotes weight loss, reduces blood pressure, cardiovascular and renal protective effects',
      'Major adverse effects: UTIs and yeast infections (glucose in urine feeds bacteria/yeast), dehydration, hypotension',
      'Rare but serious: euglycemic DKA (DKA with NORMAL blood glucose — can be missed on standard screening)'
    ],
    questions: {
      g: [
        {
          stem: 'A patient on empagliflozin (Jardiance) presents with nausea, abdominal pain, and Kussmaul respirations. Blood glucose is 180 mg/dL. Arterial blood gas shows pH 7.22. The nurse suspects:',
          options: [
            'Hyperosmolar hyperglycemic syndrome (HHS)',
            'Euglycemic diabetic ketoacidosis (DKA) — a known risk with SGLT-2 inhibitors',
            'Lactic acidosis from metformin toxicity',
            'Hypoglycemia-related confusion'
          ],
          correct: 1,
          rationale: 'SGLT-2 inhibitors can cause euglycemic DKA — metabolic acidosis and ketosis with NORMAL or only mildly elevated blood glucose. This is dangerous because the "normal" glucose may delay recognition. Classic DKA presents with glucose >250, but SGLT-2-related DKA can occur at much lower levels. The acidotic pH (7.22) and Kussmaul respirations indicate acidosis despite a glucose of only 180.'
        },
        {
          stem: 'A patient on canagliflozin reports frequent vaginal yeast infections. The nurse explains this is related to the medication because:',
          options: [
            'The medication suppresses the immune system.',
            'The medication causes glucose to spill into the urine, creating an environment that promotes yeast growth.',
            'The medication alters vaginal pH directly.',
            'The medication causes antibiotic-like disruption of normal flora.'
          ],
          correct: 1,
          rationale: 'SGLT-2 inhibitors work by preventing glucose reabsorption in the kidneys, causing glycosuria (glucose in urine). The high glucose environment in the urinary tract and genital area promotes bacterial and yeast (Candida) growth, leading to UTIs and genital yeast infections. This is the most common side effect of the drug class.'
        }
      ],
      y: [
        {
          stem: 'Which suffix identifies an SGLT-2 inhibitor?',
          options: [
            '-gliptin',
            '-flozin',
            '-tide',
            '-formin'
          ],
          correct: 1,
          rationale: 'SGLT-2 inhibitors end in "-flozin": empagliflozin, canagliflozin, dapagliflozin. "-gliptin" = DPP-4 inhibitors. "-tide" = GLP-1 agonists (e.g., semaglutide). "-formin" = metformin.'
        },
        {
          stem: 'A patient on dapagliflozin reports increased urination and thirst. The nurse recognizes this is:',
          options: [
            'A sign of uncontrolled diabetes requiring dose increase',
            'An expected effect — the drug causes glucose excretion in urine, pulling water with it',
            'A sign of kidney failure requiring drug discontinuation',
            'An allergic reaction to the medication'
          ],
          correct: 1,
          rationale: 'SGLT-2 inhibitors cause osmotic diuresis — glucose excreted in urine pulls water with it, increasing urination. This can lead to dehydration and thirst, especially in elderly patients. The nurse should ensure adequate hydration and monitor for orthostatic hypotension.'
        }
      ],
      r: [
        {
          stem: 'SGLT-2 inhibitors lower blood glucose by:',
          options: [
            'Stimulating insulin release from the pancreas',
            'Blocking glucose reabsorption in the kidneys so it is excreted in urine',
            'Slowing glucose absorption in the intestines',
            'Increasing insulin sensitivity in muscle cells'
          ],
          correct: 1,
          rationale: 'SGLT-2 inhibitors block the sodium-glucose co-transporter 2 in the proximal tubule of the kidney, preventing glucose reabsorption. The glucose is instead excreted in the urine (glycosuria), lowering blood glucose levels independently of insulin.'
        }
      ]
    }
  },

  'GLP-1 Agonists (Semaglutide/Ozempic)': {
    details: [
      'MOA: Mimics GLP-1 (incretin hormone) → stimulates insulin release ONLY when glucose is high, suppresses glucagon, slows gastric emptying',
      'Names often end in "-tide": semaglutide (Ozempic/Wegovy), liraglutide (Victoza), dulaglutide (Trulicity)',
      'Benefits: significant weight loss (appetite suppression + slowed gastric emptying), cardiovascular benefits',
      'Adverse effects: nausea, vomiting, diarrhea (common initially); pancreatitis (rare but serious); thyroid C-cell tumors in animal studies',
      'Given by subcutaneous injection (weekly for semaglutide); oral semaglutide (Rybelsus) also available'
    ],
    questions: {
      g: [
        {
          stem: 'A patient on semaglutide (Ozempic) reports severe, persistent abdominal pain radiating to the back. Which complication should the nurse suspect?',
          options: [
            'Diabetic gastroparesis',
            'Acute pancreatitis — a rare but serious adverse effect of GLP-1 agonists',
            'Bowel obstruction from slowed gastric emptying',
            'Hypoglycemic episode with abdominal symptoms'
          ],
          correct: 1,
          rationale: 'Severe abdominal pain radiating to the back is the hallmark presentation of pancreatitis, which is a rare but serious adverse effect of GLP-1 agonists. The nurse should hold the medication, notify the provider, and obtain a serum lipase/amylase. GLP-1 agonists are contraindicated in patients with a history of pancreatitis.'
        },
        {
          stem: 'Why do GLP-1 agonists have a lower risk of hypoglycemia compared to sulfonylureas?',
          options: [
            'GLP-1 agonists do not affect insulin secretion.',
            'GLP-1 agonists stimulate insulin release ONLY when blood glucose is elevated (glucose-dependent action).',
            'GLP-1 agonists are only absorbed when blood glucose is high.',
            'GLP-1 agonists primarily work on the liver, not the pancreas.'
          ],
          correct: 1,
          rationale: 'GLP-1 agonists have glucose-dependent action — they only stimulate insulin secretion when blood glucose is elevated. When glucose falls to normal, the insulin-stimulating effect stops. Sulfonylureas stimulate insulin release regardless of glucose level, creating higher hypoglycemia risk.'
        }
      ],
      y: [
        {
          stem: 'Which adverse effect is MOST common when starting a GLP-1 agonist?',
          options: [
            'Hypoglycemia',
            'Nausea and vomiting',
            'Weight gain',
            'Hyperglycemia'
          ],
          correct: 1,
          rationale: 'Nausea and vomiting are the most common side effects of GLP-1 agonists, especially when starting therapy. This occurs because the drug slows gastric emptying. Symptoms usually improve over time. GLP-1 agonists actually promote weight LOSS (not gain) and have low hypoglycemia risk when used alone.'
        },
        {
          stem: 'A patient asks why they are losing weight on semaglutide. The nurse explains:',
          options: [
            '"Weight loss means the medication is not working properly."',
            '"Semaglutide slows stomach emptying and reduces appetite, which leads to eating less and losing weight."',
            '"The weight loss is from dehydration and you should drink more water."',
            '"Weight loss is a sign of pancreatitis and should be reported immediately."'
          ],
          correct: 1,
          rationale: 'GLP-1 agonists promote weight loss through two mechanisms: they slow gastric emptying (you feel full longer) and they act on brain appetite centers to reduce hunger. This is a beneficial effect, especially for type 2 diabetic patients with obesity. Semaglutide (Wegovy) is also FDA-approved specifically for weight management.'
        }
      ],
      r: [
        {
          stem: 'Semaglutide (Ozempic) is administered:',
          options: [
            'Orally three times daily',
            'By subcutaneous injection once weekly',
            'Intravenously in the hospital only',
            'Intramuscularly once monthly'
          ],
          correct: 1,
          rationale: 'Semaglutide (Ozempic) is given as a once-weekly subcutaneous injection. An oral form (Rybelsus) is also available but is taken daily. The weekly dosing improves patient compliance compared to daily injections.'
        }
      ]
    }
  },

  'DPP-4 Inhibitors (Sitagliptin)': {
    details: [
      'MOA: Inhibits DPP-4 enzyme that breaks down incretin hormones (GLP-1, GIP) → prolongs their glucose-lowering effect',
      'Names end in "-gliptin": sitagliptin (Januvia), saxagliptin (Onglyza), linagliptin (Tradjenta)',
      'Oral medication taken once daily — well tolerated with few side effects',
      'Weight neutral (does not cause weight gain or loss)',
      'Low hypoglycemia risk when used alone (glucose-dependent mechanism like GLP-1 agonists)'
    ],
    questions: {
      g: [
        {
          stem: 'A patient asks the difference between sitagliptin (Januvia) and semaglutide (Ozempic) since both work on incretins. The nurse explains:',
          options: [
            '"They are the same medication in different forms."',
            '"Sitagliptin prevents breakdown of your body\'s own incretin hormones, while semaglutide mimics the incretin hormone directly — semaglutide has stronger effects on weight loss."',
            '"Sitagliptin is injectable and semaglutide is oral."',
            '"There is no difference — both are DPP-4 inhibitors."'
          ],
          correct: 1,
          rationale: 'DPP-4 inhibitors (sitagliptin) PREVENT breakdown of natural incretin hormones, extending their action. GLP-1 agonists (semaglutide) directly MIMIC the incretin hormone at pharmacologic doses, producing stronger effects on insulin secretion, appetite suppression, and weight loss. DPP-4 inhibitors are weight-neutral with milder effects. Sitagliptin is oral; semaglutide can be injectable or oral.'
        },
        {
          stem: 'Which characteristic makes DPP-4 inhibitors particularly suitable for elderly patients with type 2 diabetes?',
          options: [
            'They cause significant weight loss.',
            'They have low hypoglycemia risk, are weight-neutral, and are well tolerated with once-daily oral dosing.',
            'They can be given intravenously if the patient cannot swallow.',
            'They reverse insulin resistance within one week.'
          ],
          correct: 1,
          rationale: 'DPP-4 inhibitors are ideal for elderly patients because they have: low hypoglycemia risk (glucose-dependent mechanism), weight neutrality (important in frail elderly), once-daily oral dosing (simple), and generally mild side effects. Hypoglycemia is especially dangerous in elderly patients (falls, confusion, cardiac events).'
        }
      ],
      y: [
        {
          stem: 'Which suffix identifies a DPP-4 inhibitor?',
          options: [
            '-flozin',
            '-gliptin',
            '-tide',
            '-glitazone'
          ],
          correct: 1,
          rationale: 'DPP-4 inhibitors end in "-gliptin": sitagliptin, saxagliptin, linagliptin. "-flozin" = SGLT-2 inhibitors. "-tide" = GLP-1 agonists. "-glitazone" = thiazolidinediones. Drug name suffixes are commonly tested on NCLEX.'
        },
        {
          stem: 'DPP-4 inhibitors lower blood glucose by:',
          options: [
            'Stimulating insulin release regardless of glucose level',
            'Preventing the breakdown of incretin hormones, which extend their glucose-lowering effect',
            'Blocking glucose absorption in the kidneys',
            'Directly replacing insulin in the bloodstream'
          ],
          correct: 1,
          rationale: 'DPP-4 inhibitors block the enzyme (DPP-4) that normally breaks down incretin hormones (GLP-1, GIP). By extending the life of these hormones, insulin secretion is enhanced and glucagon is suppressed — but only when glucose is elevated (glucose-dependent). This is why hypoglycemia risk is low.'
        }
      ],
      r: [
        {
          stem: 'Sitagliptin (Januvia) is taken:',
          options: [
            'By injection once weekly',
            'Orally once daily',
            'Intravenously in the hospital',
            'Three times daily with meals'
          ],
          correct: 1,
          rationale: 'Sitagliptin is taken orally once daily, with or without food. This simple dosing, combined with low side effects and low hypoglycemia risk, makes it a well-tolerated option for type 2 diabetes management.'
        }
      ]
    }
  },

  'Pramlintide (Amylin Mimetic)': {
    details: [
      'MOA: Synthetic amylin analog — slows gastric emptying, suppresses glucagon, promotes satiety',
      'Used as ADD-ON to mealtime insulin in BOTH type 1 and type 2 diabetes',
      'Given by subcutaneous injection BEFORE meals (separate syringe from insulin — cannot be mixed)',
      'Key adverse effect: severe hypoglycemia when combined with insulin — reduce mealtime insulin dose by 50% when starting',
      'Also promotes modest weight loss (unlike insulin which causes weight gain)'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with type 1 diabetes is started on pramlintide in addition to mealtime insulin. Which dosage adjustment does the nurse anticipate?',
          options: [
            'Increase the mealtime insulin dose by 50% for better glucose control.',
            'Reduce the mealtime insulin dose by 50% to prevent severe hypoglycemia.',
            'Discontinue basal insulin completely.',
            'No insulin dose changes are needed.'
          ],
          correct: 1,
          rationale: 'When pramlintide is added to mealtime insulin, the mealtime insulin dose should be REDUCED by 50% because pramlintide slows gastric emptying and suppresses glucagon, both of which lower glucose. The combined effect creates significant hypoglycemia risk. This is a critical safety measure that is frequently tested.'
        },
        {
          stem: 'A patient asks if they can mix pramlintide with their insulin in the same syringe. The nurse responds:',
          options: [
            '"Yes, you can mix them to reduce the number of injections."',
            '"No — pramlintide CANNOT be mixed with insulin. They must be given as separate injections."',
            '"You can mix them only with rapid-acting insulin."',
            '"Mix them only if using an insulin pen."'
          ],
          correct: 1,
          rationale: 'Pramlintide CANNOT be mixed with any insulin in the same syringe — mixing alters the pharmacokinetics of both drugs. They must be given as separate subcutaneous injections. This is a non-negotiable patient safety teaching point.'
        }
      ],
      y: [
        {
          stem: 'Which statement about pramlintide is correct?',
          options: [
            'It replaces insulin in type 2 diabetes.',
            'It is an amylin analog that slows gastric emptying and suppresses glucagon.',
            'It is taken orally once daily.',
            'It stimulates the pancreas to produce more insulin.'
          ],
          correct: 1,
          rationale: 'Pramlintide is a synthetic amylin analog. Amylin is a hormone normally co-secreted with insulin. Pramlintide slows gastric emptying (food enters intestine more slowly), suppresses glucagon (reduces liver glucose output), and promotes satiety. It is injected subcutaneously before meals and is always used WITH insulin, not as a replacement.'
        },
        {
          stem: 'Pramlintide is unique among diabetes medications because it can be used in:',
          options: [
            'Type 2 diabetes only',
            'Both type 1 AND type 2 diabetes as an add-on to insulin',
            'Gestational diabetes only',
            'Pre-diabetes for prevention'
          ],
          correct: 1,
          rationale: 'Pramlintide is one of the few non-insulin injectable medications approved for both type 1 and type 2 diabetes. It is always used as an ADD-ON to mealtime insulin, never alone. Most oral diabetes medications are for type 2 only.'
        }
      ],
      r: [
        {
          stem: 'The major safety concern when starting pramlintide is:',
          options: [
            'Liver toxicity',
            'Severe hypoglycemia when combined with insulin',
            'Allergic reaction',
            'Kidney failure'
          ],
          correct: 1,
          rationale: 'The major safety concern is severe hypoglycemia because pramlintide is always used with insulin, and their combined glucose-lowering effects can cause dangerous blood sugar drops. This is why mealtime insulin must be reduced by 50% when starting pramlintide.'
        }
      ]
    }
  },

  'DKA vs HHS Comparison': {
    details: [
      'DKA: primarily TYPE 1; glucose >250; pH <7.30; bicarb <16; ketones PRESENT; mortality 1-5%',
      'HHS: primarily TYPE 2 (usually >60 yrs); glucose >600; pH normal/near normal; NO significant ketones; osmolality >320; mortality 5-16%',
      'HHS has HIGHER mortality than DKA (counterintuitive — tested frequently)',
      'Both require: IV fluids, potassium monitoring, insulin therapy, and electrolyte replacement',
      'Key difference: DKA has acidosis + ketones; HHS has severe dehydration + hyperosmolarity without acidosis'
    ],
    questions: {
      g: [
        {
          stem: 'A nurse is comparing two patients: Patient A has glucose 310, pH 7.18, positive ketones. Patient B has glucose 680, pH 7.35, negative ketones, osmolality 340. Which has a HIGHER mortality risk?',
          options: [
            'Patient A (DKA) because the acidosis is more dangerous.',
            'Patient B (HHS) — despite no acidosis, HHS mortality (5-16%) is higher than DKA (1-5%).',
            'Both have equal mortality rates.',
            'Neither is at significant mortality risk with treatment.'
          ],
          correct: 1,
          rationale: 'HHS has a HIGHER mortality rate (5-16%) compared to DKA (1-5%), which is counterintuitive. HHS patients are typically older, have more comorbidities, and experience severe dehydration with extreme hyperosmolarity. The lack of acidosis in HHS can delay recognition. Patient A has DKA (glucose >250, pH <7.30, ketones). Patient B has HHS (glucose >600, normal pH, high osmolality).'
        },
        {
          stem: 'Which clinical finding BEST differentiates DKA from HHS?',
          options: [
            'Elevated blood glucose',
            'Need for IV fluid resuscitation',
            'Presence of ketoacidosis (low pH, positive ketones, Kussmaul respirations) in DKA vs. absent in HHS',
            'Requirement for insulin therapy'
          ],
          correct: 2,
          rationale: 'The KEY differentiator is acidosis: DKA has metabolic acidosis (pH <7.30, bicarb <16, positive ketones, Kussmaul respirations) while HHS does NOT have significant acidosis or ketosis. Both conditions have hyperglycemia (though HHS is much higher), both need IV fluids, and both need insulin. The presence or absence of acidosis is the distinguishing factor.'
        }
      ],
      y: [
        {
          stem: 'DKA primarily occurs in which type of diabetes?',
          options: [
            'Type 1',
            'Type 2',
            'Gestational',
            'Pre-diabetes'
          ],
          correct: 0,
          rationale: 'DKA primarily occurs in Type 1 diabetes because these patients have absolute insulin deficiency. Without insulin, the body breaks down fat for energy, producing ketones and causing acidosis. Type 2 patients usually have enough insulin to prevent ketosis (though DKA can rarely occur in type 2). HHS is the typical emergency in type 2.'
        },
        {
          stem: 'Which blood glucose level is the threshold for HHS?',
          options: [
            'Greater than 180 mg/dL',
            'Greater than 250 mg/dL',
            'Greater than 600 mg/dL',
            'Greater than 1000 mg/dL'
          ],
          correct: 2,
          rationale: 'HHS is characterized by blood glucose >600 mg/dL (often much higher — can exceed 1000). DKA threshold is >250 mg/dL. The extreme hyperglycemia in HHS causes severe osmotic diuresis and dehydration. The much higher glucose in HHS vs. DKA is a key exam differentiator.'
        }
      ],
      r: [
        {
          stem: 'Which hyperglycemic emergency has the HIGHER mortality rate?',
          options: [
            'DKA (1-5%)',
            'HHS (5-16%)',
            'Both have equal mortality',
            'Neither is life-threatening with treatment'
          ],
          correct: 1,
          rationale: 'HHS has a higher mortality rate (5-16%) compared to DKA (1-5%). This is counterintuitive because DKA seems more acute with acidosis, but HHS patients are typically older with more comorbidities and experience severe dehydration.'
        }
      ]
    }
  },

  'K+ Rule Before Insulin': {
    details: [
      'In DKA/HHS: potassium must be ≥3.3 mEq/L BEFORE starting insulin',
      'Insulin drives potassium INTO cells, which can cause fatal hypokalemia if K+ is already low',
      'Treatment sequence: IV fluids FIRST → check potassium → replace K+ if needed → THEN start insulin',
      'Even if K+ appears normal or high on initial labs, total body potassium is depleted from osmotic diuresis',
      'Monitor potassium every 1-2 hours during DKA treatment — it drops rapidly once insulin is given'
    ],
    questions: {
      g: [
        {
          stem: 'A patient in DKA has a potassium of 3.0 mEq/L. The provider orders an insulin drip. Which action should the nurse take?',
          options: [
            'Start the insulin drip as ordered — potassium will correct itself.',
            'Hold the insulin drip and notify the provider — potassium must be ≥3.3 mEq/L before starting insulin.',
            'Give the insulin at half the ordered rate.',
            'Administer calcium gluconate before starting insulin.'
          ],
          correct: 1,
          rationale: 'Potassium MUST be ≥3.3 mEq/L before starting insulin in DKA. Insulin drives potassium from the blood into cells, and starting insulin when K+ is already low (3.0) could cause life-threatening hypokalemia (cardiac arrhythmias, respiratory failure). The nurse must hold insulin, notify the provider, and replace potassium first. This is a critical safety checkpoint.'
        },
        {
          stem: 'A patient in DKA has an initial potassium of 5.8 mEq/L. The nurse understands this value is:',
          options: [
            'Normal and requires no intervention.',
            'Dangerously high, requiring immediate treatment before anything else.',
            'Misleadingly high — insulin and fluids will rapidly drop potassium as it shifts back into cells, so close monitoring is essential.',
            'A sign that the patient does not actually have DKA.'
          ],
          correct: 2,
          rationale: 'In DKA, potassium shifts OUT of cells (due to acidosis and insulin deficiency), causing serum K+ to appear normal or high despite TOTAL BODY potassium depletion. Once insulin is given, K+ rapidly shifts back into cells and serum levels can drop dangerously. The nurse must monitor K+ every 1-2 hours during treatment — the initially "high" level will plummet.'
        }
      ],
      y: [
        {
          stem: 'What is the minimum potassium level required before starting insulin in DKA?',
          options: [
            '2.5 mEq/L',
            '3.3 mEq/L',
            '4.0 mEq/L',
            '5.0 mEq/L'
          ],
          correct: 1,
          rationale: 'Potassium must be at least 3.3 mEq/L before starting insulin in DKA. This critical threshold prevents life-threatening hypokalemia, since insulin drives potassium into cells. If K+ is below 3.3, replace potassium first, then start insulin.'
        },
        {
          stem: 'Why does insulin cause potassium to drop in DKA patients?',
          options: [
            'Insulin increases potassium excretion by the kidneys.',
            'Insulin drives potassium from the blood INTO cells, lowering serum levels.',
            'Insulin breaks down potassium molecules.',
            'Insulin blocks potassium absorption from food.'
          ],
          correct: 1,
          rationale: 'Insulin activates the Na+/K+ ATPase pump on cell membranes, driving potassium from the extracellular space (blood) into cells. This is therapeutic in hyperkalemia but dangerous in DKA when total body K+ is already depleted despite appearing normal or high on labs.'
        }
      ],
      r: [
        {
          stem: 'The correct treatment sequence for DKA is:',
          options: [
            'Insulin → fluids → potassium',
            'Potassium → insulin → fluids',
            'IV fluids → potassium check → insulin',
            'Insulin → potassium → fluids'
          ],
          correct: 2,
          rationale: 'DKA treatment sequence: (1) IV fluids FIRST (correct dehydration), (2) Check potassium (must be ≥3.3), (3) Replace K+ if needed, (4) THEN start insulin. Starting insulin before correcting fluids and potassium can cause fatal complications.'
        }
      ]
    }
  },

  'DKA Fluid Management': {
    details: [
      'DKA patients are severely dehydrated — IV fluid resuscitation is the FIRST intervention',
      'Start with 0.9% NS (normal saline) for initial volume replacement',
      'When blood glucose drops to 200-250 mg/dL, switch IV fluids to D5W (dextrose 5%) to prevent hypoglycemia',
      'Continue insulin even after starting D5W — the goal is to clear ketones, not just lower glucose',
      'Monitor strict I&O, urine output, and hemodynamic status throughout treatment'
    ],
    questions: {
      g: [
        {
          stem: 'A patient in DKA has blood glucose that dropped from 450 to 220 mg/dL with insulin and IV fluids. The nurse should anticipate which change?',
          options: [
            'Discontinue insulin since glucose is near normal.',
            'Switch IV fluids to D5W (dextrose) to prevent hypoglycemia while continuing insulin to clear ketones.',
            'Increase the insulin drip rate to lower glucose further.',
            'Switch to oral fluids and discontinue IV access.'
          ],
          correct: 1,
          rationale: 'When glucose reaches 200-250 mg/dL in DKA, IV fluids are switched to D5W (dextrose-containing fluids) to prevent hypoglycemia. IMPORTANTLY, insulin is continued because the goal of insulin in DKA is not just to lower glucose — it is to STOP ketone production and resolve acidosis. The dextrose "feeds" the patient while insulin clears the ketosis.'
        },
        {
          stem: 'Which IV fluid does the nurse anticipate as the FIRST intervention for a patient presenting in DKA with severe dehydration?',
          options: [
            'D5W (dextrose 5% in water)',
            '0.9% normal saline (NS)',
            'D5 0.45% NaCl',
            'Lactated Ringer\'s solution'
          ],
          correct: 1,
          rationale: '0.9% normal saline is the FIRST IV fluid for DKA to rapidly restore intravascular volume and correct severe dehydration. NS is isotonic and expands the vascular space effectively. D5W is used later (when glucose reaches 200-250) to prevent hypoglycemia. The initial priority is volume resuscitation.'
        }
      ],
      y: [
        {
          stem: 'At what blood glucose level should IV fluids be changed to include dextrose during DKA treatment?',
          options: [
            '400 mg/dL',
            '300 mg/dL',
            '200-250 mg/dL',
            '100 mg/dL'
          ],
          correct: 2,
          rationale: 'When blood glucose drops to 200-250 mg/dL during DKA treatment, IV fluids are switched to D5W (dextrose-containing fluids). This prevents hypoglycemia while allowing continued insulin infusion to resolve ketoacidosis. The glucose target is not "normal" — it is 200-250 during active DKA treatment.'
        },
        {
          stem: 'Why is insulin continued even after glucose normalizes in DKA?',
          options: [
            'To prevent the glucose from rising again',
            'To continue clearing ketones and resolving the acidosis',
            'To stimulate appetite so the patient can eat',
            'Insulin cannot be stopped abruptly once started'
          ],
          correct: 1,
          rationale: 'In DKA, the primary goal of insulin is to stop ketone production and resolve metabolic acidosis — not just to lower glucose. Glucose may normalize before ketoacidosis resolves. D5W is added to prevent hypoglycemia while insulin continues clearing ketones. Insulin is transitioned (not stopped) once the anion gap closes.'
        }
      ],
      r: [
        {
          stem: 'The FIRST priority in DKA treatment is:',
          options: [
            'Insulin administration',
            'Potassium replacement',
            'IV fluid resuscitation',
            'Sodium bicarbonate'
          ],
          correct: 2,
          rationale: 'IV fluid resuscitation is the FIRST priority in DKA. Patients are severely dehydrated from osmotic diuresis, and fluid replacement is needed before insulin can be effective. The sequence is: fluids → K+ check → insulin.'
        }
      ]
    }
  },

  'Hypoglycemia Unawareness': {
    details: [
      'Loss of the early warning signs of hypoglycemia (shakiness, sweating, tachycardia, hunger)',
      'Caused by repeated episodes of hypoglycemia — the body stops producing counter-regulatory hormones',
      'Common in patients with long-standing type 1 diabetes and tight glucose control',
      'DANGEROUS: patient may progress directly to confusion, seizures, or loss of consciousness without warning',
      'Management: raise blood glucose targets temporarily, use continuous glucose monitors (CGM), educate family on glucagon use'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with type 1 diabetes for 20 years is found unconscious by their spouse with a blood glucose of 38 mg/dL. The patient reports never feeling symptoms before passing out. The nurse recognizes this as:',
          options: [
            'Normal progression of type 1 diabetes',
            'Hypoglycemia unawareness — loss of early warning symptoms from repeated hypoglycemic episodes',
            'A sign that the patient is not taking their insulin',
            'An indication of new-onset type 2 diabetes'
          ],
          correct: 1,
          rationale: 'Hypoglycemia unawareness develops from repeated hypoglycemic episodes, which blunt the counter-regulatory hormone response (epinephrine, glucagon). Without the early adrenergic symptoms (shakiness, sweating, tachycardia), the patient progresses directly to neuroglycopenic symptoms (confusion, seizures, loss of consciousness). This is common in long-standing type 1 diabetes with tight control.'
        },
        {
          stem: 'Which intervention is MOST important for a patient diagnosed with hypoglycemia unawareness?',
          options: [
            'Tighten glucose control with more frequent insulin adjustments.',
            'Temporarily raise blood glucose targets and ensure family is trained on glucagon administration.',
            'Switch from insulin to oral medications.',
            'Discontinue all diabetes medications temporarily.'
          ],
          correct: 1,
          rationale: 'For hypoglycemia unawareness, blood glucose targets are temporarily RAISED (allowing slightly higher glucose) to reduce hypoglycemic episodes and allow the counter-regulatory response to recover. Family/caregivers must be trained on glucagon use since the patient may lose consciousness without warning. Continuous glucose monitors (CGM) with alarms are also recommended.'
        }
      ],
      y: [
        {
          stem: 'Hypoglycemia unawareness is caused by:',
          options: [
            'Taking too much insulin at one time',
            'Repeated episodes of hypoglycemia that blunt the body\'s warning response',
            'Developing resistance to insulin over time',
            'Not eating enough protein with meals'
          ],
          correct: 1,
          rationale: 'Repeated hypoglycemic episodes desensitize the body\'s counter-regulatory response — the autonomic nervous system stops producing early warning symptoms (sweating, tremors, tachycardia). This leaves the patient unable to recognize dropping blood sugar until dangerous neuroglycopenic symptoms appear.'
        },
        {
          stem: 'Which patient is at HIGHEST risk for hypoglycemia unawareness?',
          options: [
            'A newly diagnosed type 2 diabetic on metformin',
            'A patient with type 1 diabetes for 25 years on tight glucose control',
            'A gestational diabetic controlled with diet',
            'A pre-diabetic patient on lifestyle modifications'
          ],
          correct: 1,
          rationale: 'Long-standing type 1 diabetes with tight glucose control (frequent hypoglycemic episodes) is the highest risk factor. Tight control increases hypoglycemia frequency, which desensitizes the counter-regulatory response over time. Metformin and diet-controlled diabetes rarely cause hypoglycemia.'
        }
      ],
      r: [
        {
          stem: 'The danger of hypoglycemia unawareness is that the patient:',
          options: [
            'Will develop insulin resistance',
            'May lose consciousness without any warning symptoms',
            'Will develop type 2 diabetes',
            'Cannot take insulin anymore'
          ],
          correct: 1,
          rationale: 'Without early warning symptoms (shakiness, sweating, hunger), the patient can progress directly from normal function to confusion, seizures, or loss of consciousness. This makes hypoglycemia unawareness a life-threatening condition requiring modified treatment goals and caregiver education.'
        }
      ]
    }
  },

  'Sick Day Rules': {
    details: [
      'NEVER stop insulin during illness — the body needs MORE insulin when sick due to stress hormones',
      'Monitor blood glucose more frequently (every 2-4 hours)',
      'If BG >240 mg/dL → test urine for ketones every 3-4 hours',
      'Maintain hydration with sugar-free fluids if able to eat; regular fluids if unable to eat (prevent dehydration AND hypoglycemia)',
      'Contact provider if: persistent vomiting, BG >300, moderate-large ketones, unable to keep fluids down, signs of DKA'
    ],
    questions: {
      g: [
        {
          stem: 'A type 1 diabetic patient with the flu calls the nurse and says "I can\'t eat, so I\'m not going to take my insulin today." The nurse should respond:',
          options: [
            '"That\'s a good idea — you don\'t need insulin if you\'re not eating."',
            '"NEVER skip insulin during illness — your body actually needs more insulin when sick. Check your blood sugar every 2-4 hours and sip clear fluids."',
            '"Take half your usual dose and skip the rest."',
            '"Come to the emergency department immediately."'
          ],
          correct: 1,
          rationale: 'Illness causes stress hormone release (cortisol, epinephrine) that raises blood glucose. Skipping insulin during illness is the #1 cause of DKA in type 1 diabetes. The patient should NEVER stop insulin when sick, should monitor BG every 2-4 hours, check ketones if BG >240, and maintain fluid intake. Contact the provider for dose adjustments — but never stop completely.'
        },
        {
          stem: 'A diabetic patient who is ill has a blood glucose of 280 mg/dL. Which additional assessment should the nurse instruct?',
          options: [
            'Check blood pressure every hour.',
            'Test urine for ketones every 3-4 hours.',
            'Measure body temperature every 30 minutes.',
            'Count carbohydrates more carefully.'
          ],
          correct: 1,
          rationale: 'When blood glucose exceeds 240 mg/dL during illness, the patient should test urine for ketones every 3-4 hours. Positive ketones indicate the body is breaking down fat for fuel (early sign of DKA). If moderate-to-large ketones are present, the patient should contact their provider immediately. This is a critical sick day rule.'
        }
      ],
      y: [
        {
          stem: 'During illness, a diabetic patient who cannot eat should drink:',
          options: [
            'Only water to prevent hyperglycemia',
            'Regular (sugar-containing) fluids to prevent both dehydration and hypoglycemia',
            'Coffee or tea with caffeine for energy',
            'Nothing until the illness resolves'
          ],
          correct: 1,
          rationale: 'If the patient CANNOT eat, they should drink regular (sugar-containing) fluids (juice, regular soda, broth, popsicles) to prevent both dehydration and hypoglycemia. If the patient CAN eat, sugar-free fluids are preferred. Maintaining hydration is critical during illness to prevent DKA/HHS.'
        },
        {
          stem: 'Which is a sick day rule for patients with diabetes?',
          options: [
            'Stop all diabetes medications until you feel better.',
            'Monitor blood glucose every 2-4 hours and never stop insulin.',
            'Only take medications if blood glucose is above 300 mg/dL.',
            'Fast until the illness resolves to keep blood sugar stable.'
          ],
          correct: 1,
          rationale: 'Key sick day rules: never stop insulin, monitor BG every 2-4 hours, check ketones if BG >240, maintain fluid intake, contact provider for persistent vomiting or BG >300. Stress hormones during illness raise blood glucose — stopping insulin causes DKA.'
        }
      ],
      r: [
        {
          stem: 'During illness, should a type 1 diabetic patient stop taking insulin?',
          options: [
            'Yes — insulin is not needed if not eating.',
            'No — NEVER stop insulin during illness; the body needs more insulin when sick.',
            'Only stop long-acting insulin; continue rapid-acting.',
            'Only take insulin if blood glucose is above 400 mg/dL.'
          ],
          correct: 1,
          rationale: 'NEVER stop insulin during illness. Stress hormones (cortisol, epinephrine, glucagon) released during illness increase blood glucose. Stopping insulin during illness is the most common cause of DKA in type 1 diabetes. The dose may need adjustment, but it should never be stopped completely.'
        }
      ]
    }
  },

  'Type 1 vs Type 2 Diabetes': {
    details: [
      'Type 1: autoimmune destruction of pancreatic beta cells → absolute insulin deficiency',
      'Type 2: insulin resistance + progressive beta cell dysfunction → relative insulin deficiency',
      'Type 1 onset: typically childhood/adolescence (but can occur at any age)',
      'Type 2 onset: typically adults >45 (but increasing in younger populations due to obesity)',
      'C-peptide test differentiates: LOW in Type 1 (no insulin production), NORMAL/HIGH in Type 2',
      'Type 1 always requires exogenous insulin; Type 2 may be managed with oral agents initially'
    ],
    questions: {
      g: [
        {
          stem: 'A 28-year-old patient presents with new-onset hyperglycemia and weight loss. The provider orders a C-peptide level, which returns very low. This finding is MOST consistent with:',
          options: [
            'Type 2 diabetes with good insulin sensitivity',
            'Type 1 diabetes with autoimmune beta cell destruction',
            'Gestational diabetes',
            'Prediabetes with insulin resistance'
          ],
          correct: 1,
          rationale: 'Low C-peptide indicates the pancreas is producing very little or no insulin. C-peptide is released in equal amounts with insulin during production, so it serves as a marker of endogenous insulin secretion. In Type 1, autoimmune destruction of beta cells results in minimal insulin production (low C-peptide). In Type 2, C-peptide is typically normal or elevated because the pancreas still produces insulin — the problem is resistance.'
        }
      ],
      y: [
        {
          stem: 'Which characteristic distinguishes Type 1 from Type 2 diabetes?',
          options: [
            'Type 1 is caused by insulin resistance; Type 2 is autoimmune',
            'Type 1 involves autoimmune destruction of beta cells; Type 2 involves insulin resistance',
            'Type 1 is managed with oral medications; Type 2 requires insulin',
            'Type 1 only occurs in adults; Type 2 only occurs in children'
          ],
          correct: 1,
          rationale: 'Type 1 = autoimmune destruction of pancreatic beta cells → no insulin production → always needs exogenous insulin. Type 2 = insulin resistance with progressive beta cell dysfunction → initially managed with lifestyle changes and oral agents, may eventually need insulin. Type 1 typically presents in youth but can occur at any age. Type 2 is increasingly seen in younger populations.'
        }
      ],
      r: [
        {
          stem: 'A patient is diagnosed with Type 1 diabetes. The nurse understands that this patient will:',
          options: [
            'Need oral hypoglycemic agents as first-line treatment',
            'Require insulin therapy for the rest of their life',
            'Be able to manage with diet and exercise alone',
            'Eventually outgrow the disease in adulthood'
          ],
          correct: 1,
          rationale: 'Type 1 diabetes is caused by autoimmune destruction of the insulin-producing beta cells in the pancreas. Without these cells, the body cannot produce insulin. Therefore, the patient will need exogenous insulin for life — there is no oral medication alternative. Oral agents work by either stimulating insulin secretion or improving insulin sensitivity, neither of which helps when beta cells are destroyed.'
        }
      ]
    }
  },

  'DKA (Diabetic Ketoacidosis)': {
    details: [
      'Primarily Type 1 diabetes — absolute insulin deficiency triggers lipolysis and ketone production',
      'Classic presentation: Kussmaul breathing (deep, rapid), fruity breath, abdominal pain, nausea/vomiting',
      'Labs: glucose 300-800, pH <7.30, bicarb <18, positive serum/urine ketones, anion gap elevated',
      'Treatment priority: IV NS first → check K+ (must be ≥3.3 before insulin) → insulin drip',
      'Switch IV to D5 when glucose 200-250 — continue insulin until ketones clear',
      'Triggers: infection, missed insulin doses, surgery, MI, stress'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with DKA has been on an insulin drip for 6 hours. Glucose dropped from 520 to 210 mg/dL. pH improved from 7.10 to 7.22. Ketones still positive. The nurse should anticipate:',
          options: [
            'Discontinuing the insulin drip since glucose is near normal',
            'Switching IV fluids to D5NS and continuing the insulin drip',
            'Administering subcutaneous insulin and stopping the drip',
            'Giving IV sodium bicarbonate to correct the remaining acidosis'
          ],
          correct: 1,
          rationale: 'When glucose drops to 200-250 in DKA, switch to dextrose-containing IV fluids AND continue the insulin drip. Glucose normalizes FASTER than ketones clear — stopping insulin because glucose improved would allow ketosis to worsen. The dextrose prevents hypoglycemia while insulin continues clearing ketones. Insulin drip continues until pH >7.30, bicarb >18, and ketones negative.'
        }
      ],
      y: [
        {
          stem: 'Which assessment finding is MOST characteristic of DKA?',
          options: [
            'Blood glucose >600 mg/dL with no ketones',
            'Kussmaul respirations with fruity breath odor',
            'Severe dehydration with altered mental status only',
            'Metabolic alkalosis with elevated pH'
          ],
          correct: 1,
          rationale: 'Kussmaul respirations (deep, rapid breathing) and fruity breath are hallmarks of DKA. Kussmaul breathing is the body compensating for metabolic ACIDOSIS by blowing off CO2. Fruity breath comes from exhaled acetone (a ketone body). Glucose >600 with no ketones is HHS, not DKA. DKA causes metabolic acidosis (low pH), not alkalosis.'
        }
      ],
      r: [
        {
          stem: 'The FIRST priority in treating a patient with DKA is:',
          options: [
            'Insulin administration',
            'Potassium replacement',
            'IV fluid resuscitation with 0.9% NS',
            'Sodium bicarbonate for acidosis'
          ],
          correct: 2,
          rationale: 'IV fluid resuscitation is ALWAYS the first priority in DKA. Patients can be 6-9 liters fluid-depleted from osmotic diuresis. Aggressive NS bolus restores circulating volume and improves renal perfusion. Insulin comes AFTER fluids (and only after K+ is verified ≥3.3 mEq/L). Bicarb is rarely used and only considered if pH <6.9.'
        }
      ]
    }
  },

  'HHS (Hyperosmolar Hyperglycemic State)': {
    details: [
      'Primarily Type 2 diabetes — enough insulin to prevent ketosis but not enough to control glucose',
      'Glucose often >600 mg/dL (can exceed 1000) with severe dehydration',
      'KEY differentiator from DKA: NO ketones, NO acidosis, NO Kussmaul breathing',
      'Mortality higher than DKA due to severe dehydration and often older patient population',
      'Treatment: aggressive IV fluid replacement (up to 9-12 L deficit), then insulin',
      'Monitor for cerebral edema if glucose corrected too rapidly'
    ],
    questions: {
      g: [
        {
          stem: 'An 82-year-old nursing home resident with Type 2 diabetes presents with glucose 1,100 mg/dL, serum osmolality 380 mOsm/kg, and negative ketones. The nurse recognizes this as:',
          options: [
            'Diabetic ketoacidosis',
            'Hyperosmolar hyperglycemic state',
            'Insulin shock',
            'Addisonian crisis'
          ],
          correct: 1,
          rationale: 'Classic HHS presentation: elderly patient with Type 2 diabetes, extremely high glucose (>600, here 1100), elevated osmolality (normal 275-295), and NEGATIVE ketones. The absence of ketones differentiates HHS from DKA. HHS has a higher mortality rate than DKA because patients are often older with comorbidities and present with more severe dehydration.'
        }
      ],
      y: [
        {
          stem: 'What is the KEY lab finding that differentiates HHS from DKA?',
          options: [
            'HHS has hyperglycemia; DKA does not',
            'HHS has absent or minimal ketones; DKA has significant ketones',
            'HHS has metabolic acidosis; DKA has metabolic alkalosis',
            'HHS occurs only in Type 1 diabetes; DKA in Type 2'
          ],
          correct: 1,
          rationale: 'KETONES are the primary differentiator. In HHS, there is enough circulating insulin to prevent lipolysis and ketone production (but not enough to control glucose). In DKA, absolute insulin deficiency triggers lipolysis → ketones → metabolic acidosis. Both conditions have hyperglycemia (HHS typically much higher). DKA causes acidosis, not HHS.'
        }
      ],
      r: [
        {
          stem: 'HHS occurs most commonly in patients with:',
          options: [
            'Type 1 diabetes who miss insulin doses',
            'Type 2 diabetes, especially elderly patients',
            'Gestational diabetes during the third trimester',
            'Prediabetes with fasting glucose 100-125 mg/dL'
          ],
          correct: 1,
          rationale: 'HHS is most common in elderly patients with Type 2 diabetes, often triggered by illness, infection, or inadequate fluid intake. Older adults may have diminished thirst sensation, leading to severe dehydration. The gradual onset (days to weeks) means glucose can climb extremely high before the patient seeks medical attention.'
        }
      ]
    }
  },

  'Chronic Complications': {
    details: [
      'Microvascular: retinopathy (leading cause of blindness), nephropathy (leading cause of ESRD), neuropathy (most common complication)',
      'Macrovascular: coronary artery disease, stroke, peripheral arterial disease — diabetes is a major cardiovascular risk factor',
      'Peripheral neuropathy: numbness/tingling in feet → loss of sensation → undetected injuries → diabetic foot ulcers → amputation',
      'Diabetic foot care: inspect daily, wear proper shoes, never walk barefoot, cut nails straight across, no heating pads on feet',
      'A1C <7% and tight BP control slow progression of ALL complications'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with diabetes and peripheral neuropathy steps on a nail but does not feel pain. Which complication does this scenario illustrate?',
          options: [
            'Retinopathy causing visual impairment',
            'Peripheral neuropathy causing loss of protective sensation, leading to undetected injury and infection risk',
            'Autonomic neuropathy causing gastroparesis',
            'Nephropathy causing fluid retention'
          ],
          correct: 1,
          rationale: 'Peripheral neuropathy causes loss of protective sensation in the feet. Without pain sensation, injuries go undetected, leading to infection, ulceration, and potentially amputation. This is why daily foot inspection is critical — the patient cannot rely on pain to alert them to injuries. Peripheral neuropathy is the most common complication of diabetes.'
        },
        {
          stem: 'A nurse is teaching a diabetic patient about foot care. Which instruction is MOST important?',
          options: [
            '"Soak your feet in hot water daily to improve circulation."',
            '"Inspect your feet daily for cuts, blisters, or redness — you may not feel injuries due to neuropathy."',
            '"Wear tight-fitting shoes to provide support."',
            '"Cut your toenails in a rounded shape to prevent ingrown nails."'
          ],
          correct: 1,
          rationale: 'Daily foot inspection is the MOST important teaching for diabetic patients with neuropathy. Because they may not feel injuries (loss of protective sensation), visual inspection catches problems early. Hot water soaks risk burns (can\'t feel temperature). Shoes should be well-fitting, not tight. Nails should be cut straight across (not rounded) to prevent ingrown nails.'
        }
      ],
      y: [
        {
          stem: 'Which is the MOST common chronic complication of diabetes?',
          options: [
            'Retinopathy',
            'Nephropathy',
            'Peripheral neuropathy',
            'Coronary artery disease'
          ],
          correct: 2,
          rationale: 'Peripheral neuropathy is the most common chronic complication of diabetes, affecting up to 50% of patients. It causes numbness, tingling, and pain in the extremities (typically starting in the feet). Retinopathy is the leading cause of blindness, and nephropathy is the leading cause of ESRD, but neuropathy is the most prevalent.'
        },
        {
          stem: 'Which A1C goal helps prevent chronic complications of diabetes?',
          options: [
            'Less than 5%',
            'Less than 7%',
            'Less than 10%',
            'Less than 12%'
          ],
          correct: 1,
          rationale: 'The American Diabetes Association recommends an A1C goal of <7% for most diabetic adults. This level has been shown to significantly reduce the risk of microvascular complications (retinopathy, nephropathy, neuropathy). More stringent goals (<6.5%) may be appropriate for some patients, while less stringent goals are used for elderly or those with hypoglycemia unawareness.'
        }
      ],
      r: [
        {
          stem: 'Diabetic retinopathy is the leading cause of:',
          options: [
            'Kidney failure',
            'Heart attack',
            'Blindness in working-age adults',
            'Peripheral neuropathy'
          ],
          correct: 2,
          rationale: 'Diabetic retinopathy is the leading cause of new-onset blindness in working-age adults (20-74 years). It results from microvascular damage to the retinal blood vessels from chronic hyperglycemia. Annual eye exams are essential for early detection and treatment.'
        }
      ]
    }
  }

};

console.log('DRUG_DEEP_AH_DIABETES_V2 loaded:', Object.keys(window.DRUG_DEEP_AH_DIABETES_V2).length, 'topics');
