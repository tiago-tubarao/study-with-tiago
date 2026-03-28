// ══════════════════════════════════════════════
// ADULT HEALTH — ENDOCRINE V2 (Missing Conditions)
// 25 conditions × 5 questions = 125 questions
// Keys match exam3/endocrine.html name fields EXACTLY
// ══════════════════════════════════════════════

window.DRUG_DEEP_AH_ENDOCRINE_V2 = {

  'Levothyroxine (Synthroid)': {
    details: [
      'MOA: Replaces missing thyroid hormone (synthetic T4) for hypothyroidism',
      'Take in the AM on an EMPTY stomach (30-60 min before breakfast) for best absorption',
      'Takes 4-8 weeks for full therapeutic effect — do not expect immediate results',
      'Monitor for toxicity signs: HR >100, weight loss, tremors, insomnia, heat intolerance (signs of hyperthyroidism)',
      'Many drug interactions: separate from calcium, iron, antacids by 4 hours; increases warfarin effect'
    ],
    questions: {
      g: [
        {
          stem: 'A patient on levothyroxine reports a resting heart rate of 112, unintentional weight loss of 8 lbs in 2 weeks, tremors, and heat intolerance. The nurse suspects:',
          options: [
            'The medication is not working and the dose needs to be increased.',
            'Levothyroxine toxicity — the dose is too high, causing iatrogenic hyperthyroidism.',
            'A normal response to starting thyroid replacement therapy.',
            'An allergic reaction requiring immediate discontinuation.'
          ],
          correct: 1,
          rationale: 'These are signs of hyperthyroidism (HR >100, weight loss, tremors, heat intolerance) — indicating the levothyroxine dose is TOO HIGH. The patient is over-replaced, creating iatrogenic hyperthyroidism. The dose should be reduced. These are NOT signs of the medication failing (which would show hypothyroid symptoms: fatigue, weight gain, cold intolerance).'
        },
        {
          stem: 'A patient takes levothyroxine at 7 AM and calcium carbonate at 7:15 AM. The nurse should instruct:',
          options: [
            '"That timing is fine since both are taken in the morning."',
            '"Separate levothyroxine from calcium by at least 4 hours — calcium blocks thyroid hormone absorption."',
            '"Take calcium first, then levothyroxine 15 minutes later."',
            '"Calcium supplements are contraindicated with levothyroxine."'
          ],
          correct: 1,
          rationale: 'Calcium, iron, and antacids bind to levothyroxine in the GI tract, significantly reducing absorption. They must be separated by at least 4 hours. The patient should take levothyroxine first thing in the morning on an empty stomach, then wait at least 4 hours before taking calcium. Calcium is not contraindicated — just needs spacing.'
        }
      ],
      y: [
        {
          stem: 'When should a patient take levothyroxine?',
          options: [
            'At bedtime with a snack',
            'In the morning on an empty stomach, 30-60 minutes before breakfast',
            'With meals to reduce GI upset',
            'Only when feeling fatigued'
          ],
          correct: 1,
          rationale: 'Levothyroxine should be taken in the morning on an empty stomach (30-60 minutes before eating) for optimal absorption. Food, especially high-fiber, calcium, and iron, significantly reduces absorption. It is a daily medication taken at the same time, not PRN.'
        },
        {
          stem: 'How long does it take for a levothyroxine dose change to reach full effect?',
          options: [
            '24-48 hours',
            '1 week',
            '4-8 weeks',
            '6 months'
          ],
          correct: 2,
          rationale: 'Levothyroxine takes 4-8 weeks to reach full therapeutic effect after a dose change. TSH levels should be rechecked at 6-8 weeks, not sooner. Patients should not expect immediate symptom improvement and should not adjust doses prematurely.'
        }
      ],
      r: [
        {
          stem: 'Levothyroxine is used to treat:',
          options: [
            'Hyperthyroidism',
            'Hypothyroidism',
            'Diabetes insipidus',
            'Cushing syndrome'
          ],
          correct: 1,
          rationale: 'Levothyroxine (Synthroid) is synthetic T4 used to replace missing thyroid hormone in hypothyroidism. Hyperthyroidism is treated with antithyroid drugs (methimazole, PTU). It is a lifelong daily medication for most patients.'
        }
      ]
    }
  },

  'Methimazole (Tapazole)': {
    details: [
      'MOA: Blocks synthesis of NEW thyroid hormones (does NOT affect stored hormone already in the gland)',
      'Preferred long-term antithyroid drug for hyperthyroidism/Graves disease',
      'Longer acting than PTU — allows once-daily dosing',
      'BLACK BOX: Agranulocytosis (life-threatening drop in WBCs); also hepatotoxicity',
      'TERATOGENIC — contraindicated in first trimester of pregnancy (PTU used instead)'
    ],
    questions: {
      g: [
        {
          stem: 'A patient on methimazole develops a sore throat, fever of 102.8°F, and mouth ulcers. Which action should the nurse take FIRST?',
          options: [
            'Administer acetaminophen for the fever and continue the medication.',
            'Hold the methimazole and obtain a STAT CBC — suspect agranulocytosis.',
            'Increase fluid intake and encourage gargling with salt water.',
            'Administer a throat culture to rule out strep pharyngitis.'
          ],
          correct: 1,
          rationale: 'Sore throat, fever, and mouth ulcers in a patient on methimazole are classic signs of AGRANULOCYTOSIS (severe neutropenia) — a life-threatening black box adverse effect. The nurse must hold the medication immediately and obtain a STAT CBC with differential to check the WBC/neutrophil count. Continuing the drug could be fatal.'
        },
        {
          stem: 'A pregnant patient in her first trimester has Graves disease. Which antithyroid medication should the nurse anticipate?',
          options: [
            'Methimazole (Tapazole)',
            'PTU (propylthiouracil)',
            'Radioactive iodine (I-131)',
            'Levothyroxine (Synthroid)'
          ],
          correct: 1,
          rationale: 'Methimazole is TERATOGENIC (causes birth defects) and is contraindicated in the first trimester. PTU is the preferred antithyroid drug in early pregnancy. After the first trimester, some providers switch back to methimazole (lower hepatotoxicity risk than PTU). Radioactive iodine is ABSOLUTELY contraindicated in pregnancy (destroys fetal thyroid). Levothyroxine treats hypothyroidism, not hyperthyroidism.'
        }
      ],
      y: [
        {
          stem: 'What is the most serious adverse effect of methimazole?',
          options: [
            'Weight gain',
            'Agranulocytosis (severe drop in white blood cells)',
            'Hair loss',
            'Constipation'
          ],
          correct: 1,
          rationale: 'Agranulocytosis is the most serious (black box) adverse effect of methimazole. It causes a life-threatening drop in neutrophils, leaving the patient unable to fight infection. Signs include sore throat, fever, and mouth ulcers. The drug must be stopped immediately if suspected.'
        },
        {
          stem: 'Methimazole works by:',
          options: [
            'Destroying thyroid tissue permanently',
            'Blocking the synthesis of new thyroid hormones',
            'Replacing missing thyroid hormone',
            'Blocking thyroid hormone receptors in target tissues'
          ],
          correct: 1,
          rationale: 'Methimazole blocks thyroid peroxidase, an enzyme needed to synthesize new thyroid hormones (T3 and T4). It does NOT destroy thyroid tissue (that is radioactive iodine) and does NOT affect hormones already stored in the gland. Effects take weeks as stored hormones are depleted.'
        }
      ],
      r: [
        {
          stem: 'Methimazole is used to treat:',
          options: [
            'Hypothyroidism',
            'Hyperthyroidism',
            'Thyroid cancer',
            'Diabetes mellitus'
          ],
          correct: 1,
          rationale: 'Methimazole is an antithyroid drug used to treat hyperthyroidism (Graves disease, toxic nodular goiter). It reduces the production of thyroid hormones. Hypothyroidism is treated with levothyroxine (replacement).'
        }
      ]
    }
  },

  'PTU (Propylthiouracil)': {
    details: [
      'MOA: Blocks synthesis of new thyroid hormones AND blocks peripheral conversion of T4 to T3',
      'Dual mechanism makes it the drug of FIRST choice in thyroid storm',
      'Used in first trimester of pregnancy (methimazole is teratogenic)',
      'BLACK BOX: Hepatotoxicity (liver failure) — more severe than methimazole; also agranulocytosis',
      'Shorter acting than methimazole — requires multiple daily doses'
    ],
    questions: {
      g: [
        {
          stem: 'In thyroid storm, PTU is given FIRST rather than methimazole because:',
          options: [
            'PTU works faster than methimazole.',
            'PTU blocks both thyroid hormone synthesis AND peripheral T4-to-T3 conversion, providing dual action in the crisis.',
            'Methimazole is contraindicated in all emergencies.',
            'PTU can be given intravenously while methimazole cannot.'
          ],
          correct: 1,
          rationale: 'PTU has a DUAL mechanism: it blocks new thyroid hormone synthesis (like methimazole) AND blocks the peripheral conversion of T4 to T3 (the more active form). In thyroid storm, rapidly reducing T3 levels is critical, making PTU the first-line drug. Methimazole only blocks synthesis. Both are given orally; neither is IV.'
        },
        {
          stem: 'A patient on PTU develops jaundice, dark urine, and RUQ abdominal pain. The nurse should:',
          options: [
            'Continue the medication and monitor liver enzymes at the next appointment.',
            'Hold PTU immediately and notify the provider — these are signs of hepatotoxicity (black box warning).',
            'Increase the PTU dose to better control hyperthyroidism.',
            'Administer acetaminophen for the abdominal pain.'
          ],
          correct: 1,
          rationale: 'Jaundice, dark urine, and RUQ pain are signs of hepatotoxicity — PTU carries a BLACK BOX WARNING for severe liver failure (more hepatotoxic than methimazole). The drug must be stopped immediately. Giving acetaminophen would worsen liver injury. This is the main reason methimazole is preferred for long-term use when not in pregnancy or thyroid storm.'
        }
      ],
      y: [
        {
          stem: 'What unique advantage does PTU have over methimazole?',
          options: [
            'PTU has no risk of agranulocytosis.',
            'PTU blocks peripheral T4-to-T3 conversion in addition to blocking synthesis.',
            'PTU can be used safely throughout pregnancy.',
            'PTU has a longer duration of action.'
          ],
          correct: 1,
          rationale: 'PTU has a dual mechanism: it blocks thyroid hormone synthesis AND blocks peripheral conversion of T4 to T3. This makes it more effective in thyroid storm where rapid T3 reduction is critical. Both drugs cause agranulocytosis. PTU is preferred only in first trimester (not all of pregnancy). PTU actually has a shorter duration than methimazole.'
        },
        {
          stem: 'PTU is preferred over methimazole in which situation?',
          options: [
            'Long-term maintenance therapy for Graves disease',
            'First trimester of pregnancy and thyroid storm',
            'Mild hyperthyroidism in elderly patients',
            'Patients with a history of liver disease'
          ],
          correct: 1,
          rationale: 'PTU is preferred in two specific situations: (1) first trimester of pregnancy (methimazole is teratogenic) and (2) thyroid storm (PTU\'s dual mechanism provides faster T3 reduction). For long-term maintenance, methimazole is preferred because PTU has higher hepatotoxicity risk.'
        }
      ],
      r: [
        {
          stem: 'The black box warning for PTU involves:',
          options: [
            'Cardiac arrhythmias',
            'Severe hepatotoxicity (liver failure)',
            'Renal failure',
            'Pulmonary fibrosis'
          ],
          correct: 1,
          rationale: 'PTU carries a black box warning for severe hepatotoxicity, including fatal liver failure. This is more common with PTU than methimazole and is why methimazole is preferred for long-term therapy. Signs include jaundice, dark urine, RUQ pain, and elevated liver enzymes.'
        }
      ]
    }
  },

  'Agranulocytosis': {
    details: [
      'Severe, life-threatening reduction in granulocytes (neutrophils) — ANC often <500',
      'Associated with antithyroid drugs (methimazole, PTU), clozapine, carbamazepine, and other medications',
      'Classic presentation: sore throat, fever, mouth ulcers in a patient on a causative drug',
      'Action: STOP the causative drug immediately, obtain STAT CBC, start empiric antibiotics if febrile',
      'Without treatment, overwhelming infection and death can occur rapidly'
    ],
    questions: {
      g: [
        {
          stem: 'A patient on methimazole for 3 weeks presents with temperature 103.2°F, severe sore throat, and oral ulcerations. CBC shows WBC 1,200 with ANC 180. Which action is the HIGHEST priority?',
          options: [
            'Administer throat lozenges and schedule an outpatient follow-up.',
            'Discontinue methimazole immediately, obtain blood cultures, and initiate empiric broad-spectrum antibiotics.',
            'Increase the methimazole dose to better control hyperthyroidism.',
            'Administer acetaminophen and recheck CBC in 1 week.'
          ],
          correct: 1,
          rationale: 'ANC of 180 is severe agranulocytosis — a medical emergency. The causative drug (methimazole) must be stopped immediately. With fever and severe neutropenia, blood cultures should be obtained and empiric broad-spectrum antibiotics started immediately (neutropenic fever protocol). Delay risks sepsis and death. This patient needs immediate hospitalization.'
        },
        {
          stem: 'Which patient teaching is ESSENTIAL for a patient starting methimazole or PTU?',
          options: [
            '"Take the medication with food to prevent nausea."',
            '"Report sore throat, fever, or mouth sores IMMEDIATELY — these could be signs of a dangerous drop in white blood cells."',
            '"Avoid sunlight while taking this medication."',
            '"This medication may cause temporary hair color changes."'
          ],
          correct: 1,
          rationale: 'Patients on antithyroid drugs MUST know to report sore throat, fever, and mouth ulcers immediately — these are early signs of agranulocytosis (black box warning). Early detection saves lives. The drug must be stopped and CBC obtained urgently. This teaching should be given at the time of prescription and reinforced at every visit.'
        }
      ],
      y: [
        {
          stem: 'Agranulocytosis is characterized by:',
          options: [
            'Excessive production of all white blood cells',
            'A dangerous drop in neutrophils leaving the patient unable to fight infection',
            'An allergic reaction causing hives and itching',
            'An increase in red blood cell production'
          ],
          correct: 1,
          rationale: 'Agranulocytosis is a severe reduction in granulocytes (primarily neutrophils), leaving the patient critically immunocompromised and unable to fight infections. Even minor infections can become rapidly fatal. It is a known adverse effect of antithyroid drugs (methimazole, PTU).'
        },
        {
          stem: 'Which triad of symptoms in a patient on antithyroid medication suggests agranulocytosis?',
          options: [
            'Weight gain, fatigue, and constipation',
            'Sore throat, fever, and mouth ulcers',
            'Tremors, tachycardia, and weight loss',
            'Jaundice, dark urine, and abdominal pain'
          ],
          correct: 1,
          rationale: 'Sore throat, fever, and mouth ulcers are the classic triad of agranulocytosis. Without neutrophils, the mouth and throat (common bacterial entry points) develop ulcerations and infection. The triad of jaundice, dark urine, and abdominal pain suggests hepatotoxicity (another serious adverse effect, especially of PTU).'
        }
      ],
      r: [
        {
          stem: 'When agranulocytosis is suspected, the FIRST action is to:',
          options: [
            'Continue the medication and monitor symptoms',
            'Stop the causative medication immediately',
            'Increase fluid intake',
            'Apply topical anesthetic to mouth ulcers'
          ],
          correct: 1,
          rationale: 'The causative medication must be STOPPED immediately when agranulocytosis is suspected. Continuing the drug allows further destruction of neutrophils and increases the risk of fatal infection. A STAT CBC confirms the diagnosis, and empiric antibiotics are started if the patient is febrile.'
        }
      ]
    }
  },

  'Radioactive Iodine (I-131)': {
    details: [
      'MOA: Concentrated by the thyroid gland, destroys thyroid tissue with radiation — permanent treatment',
      'Used for hyperthyroidism when drugs fail, thyroid cancer, and large goiters',
      'Most patients become HYPOTHYROID after treatment and need lifelong levothyroxine',
      'ABSOLUTELY contraindicated in PREGNANCY (destroys fetal thyroid) and breastfeeding',
      'Radiation safety: temporary isolation, separate utensils, flush twice, limit close contact for several days'
    ],
    questions: {
      g: [
        {
          stem: 'A nurse is caring for a patient who received I-131 therapy. The patient\'s spouse asks to stay overnight. Which response is MOST appropriate?',
          options: [
            '"That\'s fine — the radiation dose is too small to affect others."',
            '"Visitors should limit close contact and maintain distance. The patient is temporarily radioactive and precautions are needed for several days."',
            '"No visitors are allowed for 30 days after treatment."',
            '"Only visitors under age 18 need to stay away."'
          ],
          correct: 1,
          rationale: 'After I-131, the patient emits radiation temporarily. Precautions include: limiting close contact (maintain 6-foot distance when possible), no sharing utensils/drinking glasses, flushing toilet twice, sleeping in a separate bed, and limiting contact with pregnant women and children for several days. Total isolation for 30 days is excessive, but basic precautions are essential.'
        },
        {
          stem: 'A patient treated with I-131 for Graves disease 6 months ago reports weight gain, fatigue, cold intolerance, and constipation. The nurse recognizes:',
          options: [
            'The I-131 treatment did not work and hyperthyroidism is returning.',
            'Expected hypothyroidism following radioactive iodine therapy — the patient will likely need lifelong levothyroxine.',
            'Side effects of radiation that will resolve on their own.',
            'Signs of thyroid cancer requiring immediate intervention.'
          ],
          correct: 1,
          rationale: 'These are classic hypothyroid symptoms. Most patients become hypothyroid after I-131 because the treatment destroys thyroid tissue. This is an EXPECTED outcome, not a complication. The patient will need lifelong levothyroxine replacement. Patients should be counseled about this before treatment.'
        }
      ],
      y: [
        {
          stem: 'Radioactive iodine (I-131) is ABSOLUTELY contraindicated in:',
          options: [
            'Patients over age 65',
            'Pregnant women and breastfeeding mothers',
            'Patients with hypertension',
            'Patients with diabetes'
          ],
          correct: 1,
          rationale: 'I-131 is absolutely contraindicated in pregnancy and breastfeeding. Radioactive iodine crosses the placenta and is concentrated by the fetal thyroid, causing permanent destruction and hypothyroidism in the fetus. It is also secreted in breast milk. A pregnancy test is required before administration.'
        },
        {
          stem: 'The most common long-term result of I-131 treatment is:',
          options: [
            'Permanent cure of hyperthyroidism with normal thyroid function',
            'Development of hypothyroidism requiring lifelong levothyroxine',
            'Thyroid cancer',
            'No change in thyroid function'
          ],
          correct: 1,
          rationale: 'Most patients become hypothyroid after I-131 because the radiation destroys thyroid tissue. This is expected and is essentially trading hyperthyroidism for hypothyroidism, which is easier to manage with daily levothyroxine. Patients should understand they will likely need lifelong thyroid replacement.'
        }
      ],
      r: [
        {
          stem: 'Radioactive iodine (I-131) treats hyperthyroidism by:',
          options: [
            'Blocking thyroid hormone synthesis',
            'Destroying thyroid tissue with radiation',
            'Blocking thyroid hormone receptors',
            'Stimulating TSH production'
          ],
          correct: 1,
          rationale: 'I-131 is concentrated by the thyroid gland (the thyroid actively takes up iodine), where it emits radiation that destroys thyroid cells. This permanently reduces thyroid hormone production. Unlike antithyroid drugs that block synthesis, I-131 destroys the tissue itself.'
        }
      ]
    }
  },

  'Thyroid Storm Protocol': {
    details: [
      'Life-threatening acceleration of hyperthyroidism: HR >180, temp >104°F, altered mental status, atrial fibrillation',
      'Drug ORDER matters (NCLEX favorite): PTU FIRST → beta-blocker → corticosteroid → iodine LAST (1 hour after PTU)',
      'PTU first because it blocks BOTH synthesis and peripheral T4→T3 conversion',
      'Iodine given LAST and 1 hour AFTER PTU — if given first, thyroid uses iodine to make MORE hormone',
      'Supportive: cooling measures, seizure precautions, IV fluids, cardiac monitoring'
    ],
    questions: {
      g: [
        {
          stem: 'A patient in thyroid storm needs iodine (SSKI) for hormone release suppression. The nurse should administer iodine:',
          options: [
            'Immediately, before any other medications.',
            'At least 1 HOUR after PTU — giving iodine before PTU would allow the thyroid to use it to make MORE hormone.',
            'Only after the patient\'s heart rate drops below 100.',
            'Simultaneously with the beta-blocker.'
          ],
          correct: 1,
          rationale: 'Iodine must be given at least 1 HOUR after PTU. PTU must block thyroid hormone synthesis FIRST. If iodine is given before synthesis is blocked, the overactive thyroid gland will use the iodine as raw material to produce EVEN MORE thyroid hormone, worsening the crisis. This sequence is a critical NCLEX concept.'
        },
        {
          stem: 'Which is the correct drug administration ORDER in thyroid storm?',
          options: [
            'Beta-blocker → iodine → PTU → corticosteroid',
            'PTU → beta-blocker → corticosteroid → iodine (1 hour after PTU)',
            'Iodine → PTU → beta-blocker → corticosteroid',
            'Corticosteroid → PTU → iodine → beta-blocker'
          ],
          correct: 1,
          rationale: 'Thyroid storm drug order: (1) PTU FIRST — blocks synthesis AND peripheral T4→T3 conversion, (2) Beta-blocker — controls tachycardia and sympathetic symptoms, (3) Corticosteroid (hydrocortisone IV) — reduces peripheral T4→T3 conversion and treats potential adrenal insufficiency, (4) Iodine LAST — given 1 hour after PTU to block hormone release. This sequence is one of the most tested endocrine concepts.'
        }
      ],
      y: [
        {
          stem: 'Which clinical findings indicate thyroid storm?',
          options: [
            'Bradycardia, hypothermia, and lethargy',
            'Heart rate >180, temperature >104°F, and altered mental status',
            'Weight gain, constipation, and cold intolerance',
            'Mild tremor and slight tachycardia'
          ],
          correct: 1,
          rationale: 'Thyroid storm presents with extreme manifestations of hyperthyroidism: severe tachycardia (HR >180), high fever (>104°F), altered mental status (agitation, delirium, coma), atrial fibrillation, and potential seizures. Bradycardia and hypothermia indicate the opposite (myxedema coma). This is a medical emergency with high mortality.'
        },
        {
          stem: 'Why is PTU given FIRST in thyroid storm rather than methimazole?',
          options: [
            'PTU can be given intravenously.',
            'PTU blocks both thyroid hormone synthesis AND peripheral T4-to-T3 conversion.',
            'Methimazole is contraindicated in all emergencies.',
            'PTU works within 5 minutes.'
          ],
          correct: 1,
          rationale: 'PTU has a dual mechanism: it blocks new hormone synthesis AND blocks peripheral conversion of T4 to T3 (the more potent hormone). In thyroid storm, rapidly reducing circulating T3 is critical. Methimazole only blocks synthesis. Both are given orally; neither works in 5 minutes.'
        }
      ],
      r: [
        {
          stem: 'Thyroid storm is a medical emergency caused by:',
          options: [
            'Severe hypothyroidism',
            'Life-threatening acceleration of hyperthyroidism',
            'Thyroid cancer metastasis',
            'Iodine deficiency'
          ],
          correct: 1,
          rationale: 'Thyroid storm is an extreme, life-threatening exacerbation of hyperthyroidism with very high mortality if untreated. It can be triggered by infection, surgery, trauma, or stopping antithyroid medications. Severe hypothyroidism causes myxedema coma (opposite emergency).'
        }
      ]
    }
  },

  'Myxedema Coma': {
    details: [
      'Life-threatening decompensation of SEVERE hypothyroidism — the opposite of thyroid storm',
      'Triggered by: infection, cold exposure, surgery, stopping thyroid medication, sedatives/opioids',
      'Signs: hypothermia, bradycardia, hypotension, hypoventilation, altered mental status → coma',
      'Treatment: IV levothyroxine (T4), IV liothyronine (T3) for faster effect, supportive warming, corticosteroids',
      'CRITICAL: passive rewarming ONLY (active warming causes vasodilation → cardiovascular collapse)'
    ],
    questions: {
      g: [
        {
          stem: 'A patient in myxedema coma has a core temperature of 93°F. The nurse should:',
          options: [
            'Apply active warming blankets and heat lamps to raise the temperature quickly.',
            'Use passive rewarming (warm blankets, warm room) — active warming causes vasodilation and cardiovascular collapse.',
            'Administer antipyretics to prevent fever during rewarming.',
            'Place the patient in a cool bath to prevent overheating.'
          ],
          correct: 1,
          rationale: 'In myxedema coma, only PASSIVE rewarming should be used (warm blankets, increased room temperature). Active warming (heated blankets, heat lamps, warm IV fluids) causes peripheral vasodilation, which drops blood pressure further in an already hypotensive patient, potentially causing cardiovascular collapse. This is a critical nursing intervention unique to myxedema coma.'
        },
        {
          stem: 'A patient with known hypothyroidism is found unresponsive with temp 94°F, HR 42, BP 80/50, and RR 8. The nurse suspects myxedema coma. Which medication does the nurse anticipate?',
          options: [
            'PTU to block thyroid hormone production',
            'IV levothyroxine to rapidly replace thyroid hormone',
            'Radioactive iodine to stimulate the thyroid',
            'Methimazole to restore thyroid balance'
          ],
          correct: 1,
          rationale: 'Myxedema coma requires emergency IV thyroid hormone replacement — IV levothyroxine (T4) and sometimes IV liothyronine (T3) for faster onset. This is the OPPOSITE of thyroid storm treatment. PTU and methimazole are antithyroid drugs (for hyperthyroidism) and would worsen this condition. I-131 destroys thyroid tissue, which is the opposite of what is needed.'
        }
      ],
      y: [
        {
          stem: 'Which vital sign pattern is characteristic of myxedema coma?',
          options: [
            'Tachycardia, hypertension, and fever',
            'Hypothermia, bradycardia, and hypotension',
            'Normal vitals with altered mental status only',
            'Tachypnea, hyperthermia, and wide pulse pressure'
          ],
          correct: 1,
          rationale: 'Myxedema coma presents with the classic triad of hypothermia (low temp), bradycardia (slow HR), and hypotension (low BP) — reflecting the severely slowed metabolism of untreated hypothyroidism. The first option describes thyroid storm (opposite). Hypoventilation and altered mental status/coma complete the picture.'
        },
        {
          stem: 'Which factor can trigger myxedema coma in a patient with hypothyroidism?',
          options: [
            'Taking too much levothyroxine',
            'Stopping thyroid medication, cold exposure, or infection',
            'Eating iodine-rich foods',
            'Excessive exercise'
          ],
          correct: 1,
          rationale: 'Myxedema coma is triggered by events that increase metabolic demand or further reduce thyroid function in a patient with severe hypothyroidism: stopping thyroid medication, cold exposure, infection, surgery, trauma, and sedatives/opioids. Taking too much levothyroxine would cause hyperthyroidism, not myxedema.'
        }
      ],
      r: [
        {
          stem: 'Myxedema coma is a life-threatening complication of:',
          options: [
            'Hyperthyroidism',
            'Severe hypothyroidism',
            'Hyperparathyroidism',
            'Diabetes mellitus'
          ],
          correct: 1,
          rationale: 'Myxedema coma is the most severe, life-threatening form of hypothyroidism. Metabolism slows to dangerous levels, causing hypothermia, bradycardia, hypotension, hypoventilation, and coma. It requires emergency IV thyroid hormone replacement. Thyroid storm is the hyperthyroid emergency.'
        }
      ]
    }
  },

  'Post-Thyroidectomy Care': {
    details: [
      'Monitor for hemorrhage: check dressing for blood; assess for neck swelling/tightness (can compress airway)',
      'Keep tracheostomy tray and calcium gluconate at bedside (emergency airway + hypocalcemia treatment)',
      'Assess for hypocalcemia (parathyroid damage): tingling around mouth/fingers, positive Chvostek/Trousseau signs, tetany',
      'Assess for laryngeal nerve damage: hoarseness, voice changes — have patient speak regularly',
      'Position semi-Fowler with neck supported — avoid hyperextension; support neck when moving'
    ],
    questions: {
      g: [
        {
          stem: 'Four hours after thyroidectomy, a patient reports tingling around the mouth and numbness in the fingertips. The nurse should FIRST:',
          options: [
            'Reassure the patient this is normal post-surgical sensation.',
            'Assess for Chvostek and Trousseau signs and notify the provider — suspect hypocalcemia from parathyroid damage.',
            'Administer a narcotic analgesic for pain management.',
            'Check the surgical dressing for bleeding.'
          ],
          correct: 1,
          rationale: 'Perioral tingling and fingertip numbness are early signs of HYPOCALCEMIA from inadvertent parathyroid gland damage during thyroidectomy. The nurse should check Chvostek sign (facial twitching when tapping CN VII) and Trousseau sign (carpal spasm with BP cuff inflation) and notify the provider. IV calcium gluconate should be at bedside for this reason. Untreated hypocalcemia → tetany → laryngospasm.'
        },
        {
          stem: 'Which items must be at the bedside of a post-thyroidectomy patient?',
          options: [
            'Incentive spirometer and elastic stockings',
            'Tracheostomy tray and IV calcium gluconate',
            'Chest tube setup and pulse oximeter',
            'Blood glucose monitor and insulin'
          ],
          correct: 1,
          rationale: 'A tracheostomy tray is needed in case of airway obstruction from hemorrhage (neck hematoma) or laryngospasm (from hypocalcemia or laryngeal nerve damage). IV calcium gluconate is needed for emergency treatment of hypocalcemia from parathyroid damage. These are the TWO critical bedside items for post-thyroidectomy care.'
        }
      ],
      y: [
        {
          stem: 'After thyroidectomy, the nurse asks the patient to speak. This assessment checks for:',
          options: [
            'Level of consciousness',
            'Laryngeal nerve damage (hoarseness indicates injury)',
            'Ability to swallow medications',
            'Airway patency only'
          ],
          correct: 1,
          rationale: 'Having the patient speak assesses the recurrent laryngeal nerve, which runs close to the thyroid and can be damaged during surgery. Hoarseness or voice changes indicate nerve injury. The nurse should assess voice quality immediately after surgery and at regular intervals. Bilateral nerve damage can cause airway obstruction.'
        },
        {
          stem: 'How should a post-thyroidectomy patient be positioned?',
          options: [
            'Flat on their back with neck hyperextended',
            'Semi-Fowler\'s with the neck supported — avoid hyperextension',
            'High-Fowler\'s sitting straight up',
            'Side-lying on the operative side'
          ],
          correct: 1,
          rationale: 'Semi-Fowler\'s position with neck support reduces swelling and strain on the incision. The neck should NOT be hyperextended (increases tension on suture line). When the patient moves, they should support the back of the neck with their hands to avoid stress on the surgical site.'
        }
      ],
      r: [
        {
          stem: 'The primary risk of parathyroid damage during thyroidectomy is:',
          options: [
            'Hyperkalemia',
            'Hypocalcemia',
            'Hyperglycemia',
            'Hyponatremia'
          ],
          correct: 1,
          rationale: 'The parathyroid glands regulate calcium. If damaged during thyroidectomy, calcium levels drop (hypocalcemia), causing tingling, numbness, muscle cramping, positive Chvostek/Trousseau signs, and potentially tetany and laryngospasm. IV calcium gluconate is the emergency treatment.'
        }
      ]
    }
  },

  'Sodium Thiosulfate': {
    details: [
      'Used as an antidote for cyanide poisoning and for calciphylaxis in CKD/dialysis patients',
      'In endocrine context: may be used for iodine-related emergencies or as adjunct therapy',
      'Mechanism in cyanide toxicity: donates sulfur to convert cyanide to less toxic thiocyanate',
      'Given intravenously; can cause nausea, vomiting, and hypotension',
      'Also used topically to treat tinea versicolor and as an adjunct in cisplatin nephrotoxicity prevention'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with end-stage renal disease on dialysis develops calciphylaxis (painful skin necrosis from calcium deposits). Which medication may be used as part of treatment?',
          options: [
            'Calcium gluconate',
            'Sodium thiosulfate',
            'Vitamin D supplementation',
            'Phosphate supplements'
          ],
          correct: 1,
          rationale: 'Sodium thiosulfate is used in the treatment of calciphylaxis — a serious condition in CKD/dialysis patients where calcium deposits in blood vessels cause painful skin necrosis. It helps dissolve calcium deposits. Calcium gluconate and vitamin D would worsen calcification. Phosphate control is important but phosphate supplements would be harmful.'
        },
        {
          stem: 'Sodium thiosulfate is the antidote for which type of poisoning?',
          options: [
            'Carbon monoxide poisoning',
            'Cyanide poisoning',
            'Organophosphate poisoning',
            'Lead poisoning'
          ],
          correct: 1,
          rationale: 'Sodium thiosulfate is a primary antidote for cyanide poisoning. It donates a sulfur atom to convert cyanide to thiocyanate, a much less toxic compound that is excreted by the kidneys. Carbon monoxide is treated with 100% oxygen. Organophosphate poisoning uses atropine/pralidoxime. Lead poisoning uses chelation therapy.'
        }
      ],
      y: [
        {
          stem: 'Sodium thiosulfate works in cyanide poisoning by:',
          options: [
            'Binding to cyanide directly and removing it from the blood',
            'Converting cyanide to less toxic thiocyanate for renal excretion',
            'Stimulating liver detoxification of cyanide',
            'Blocking cyanide receptors on cells'
          ],
          correct: 1,
          rationale: 'Sodium thiosulfate provides sulfur that combines with cyanide to form thiocyanate, a much less toxic compound that can be excreted by the kidneys. This detoxification pathway converts a lethal poison into a manageable metabolite.'
        },
        {
          stem: 'Which route is sodium thiosulfate given for cyanide poisoning?',
          options: [
            'Oral',
            'Intravenous',
            'Intramuscular',
            'Subcutaneous'
          ],
          correct: 1,
          rationale: 'Sodium thiosulfate is given intravenously for cyanide poisoning to ensure rapid systemic delivery. Cyanide poisoning is a medical emergency requiring immediate treatment. Oral administration would be too slow in an emergency.'
        }
      ],
      r: [
        {
          stem: 'Sodium thiosulfate is primarily used as an antidote for:',
          options: [
            'Acetaminophen overdose',
            'Cyanide poisoning',
            'Opioid overdose',
            'Warfarin toxicity'
          ],
          correct: 1,
          rationale: 'Sodium thiosulfate is the antidote for cyanide poisoning. Acetaminophen overdose uses N-acetylcysteine. Opioid overdose uses naloxone. Warfarin toxicity uses vitamin K or FFP.'
        }
      ]
    }
  },

  'Diabetes Insipidus (DI)': {
    details: [
      'NOT enough ADH (or kidneys don\'t respond to ADH) → massive DILUTE urine output, dehydration, hypernatremia',
      'Central DI: brain doesn\'t produce ADH (tumor, head injury, surgery) — responds to desmopressin',
      'Nephrogenic DI: kidneys don\'t respond to ADH (lithium, renal damage) — does NOT respond to desmopressin',
      'Labs: HIGH sodium (>145), HIGH serum osmolality (>295), LOW urine osmolality (<200), LOW specific gravity (<1.005)',
      'Urine output can reach 15-20 L/day if untreated — life-threatening dehydration'
    ],
    questions: {
      g: [
        {
          stem: 'A patient post-craniotomy develops urine output of 800 mL/hr with specific gravity of 1.002 and serum sodium of 152 mEq/L. The nurse suspects:',
          options: [
            'SIADH from surgical stress',
            'Central diabetes insipidus from pituitary/hypothalamic damage',
            'Acute kidney injury from surgical blood loss',
            'Normal postoperative diuresis'
          ],
          correct: 1,
          rationale: 'Massive urine output (polyuria), very low specific gravity (1.002 = dilute urine), and hypernatremia (152) after brain surgery = central DI. The surgery damaged the pituitary or hypothalamus, disrupting ADH production. SIADH would show decreased output, concentrated urine, and low sodium. AKI shows decreased output. 800 mL/hr is not normal diuresis.'
        },
        {
          stem: 'A water deprivation test is performed on a patient with suspected DI. After withholding water, urine remains dilute. After administering desmopressin, urine becomes concentrated. This confirms:',
          options: [
            'Nephrogenic DI',
            'Central DI',
            'SIADH',
            'Normal kidney function'
          ],
          correct: 1,
          rationale: 'In the water deprivation test: water is withheld → if DI is present, urine stays dilute. Then desmopressin (synthetic ADH) is given. If urine concentrates after desmopressin, the kidneys CAN respond to ADH but the brain isn\'t producing it = CENTRAL DI. If urine stays dilute after desmopressin, kidneys can\'t respond = NEPHROGENIC DI.'
        }
      ],
      y: [
        {
          stem: 'Which lab pattern is characteristic of diabetes insipidus?',
          options: [
            'Low sodium, low serum osmolality, high urine osmolality',
            'High sodium, high serum osmolality, low urine osmolality',
            'Normal sodium, normal osmolality, normal urine output',
            'Low sodium, high urine specific gravity, decreased urine output'
          ],
          correct: 1,
          rationale: 'DI causes: HIGH sodium (>145, hypernatremia from water loss), HIGH serum osmolality (>295, concentrated blood), LOW urine osmolality (<200, dilute urine), LOW specific gravity (<1.005). The body is losing massive water in dilute urine, concentrating the blood. The opposite pattern (low sodium, concentrated urine) is SIADH.'
        },
        {
          stem: 'What is the most dangerous consequence of untreated diabetes insipidus?',
          options: [
            'Hypoglycemia',
            'Severe dehydration and hypernatremia',
            'Fluid overload and hyponatremia',
            'Metabolic acidosis'
          ],
          correct: 1,
          rationale: 'Without ADH, the kidneys cannot concentrate urine, leading to massive fluid loss (up to 15-20 L/day). This causes severe dehydration and hypernatremia (sodium becomes concentrated as water is lost). Without treatment, cardiovascular collapse and death can occur from volume depletion.'
        }
      ],
      r: [
        {
          stem: 'Diabetes insipidus is caused by a deficiency or lack of response to:',
          options: [
            'Insulin',
            'Antidiuretic hormone (ADH)',
            'Cortisol',
            'Thyroid hormone'
          ],
          correct: 1,
          rationale: 'Diabetes insipidus involves a deficiency of ADH (central DI) or the kidneys\' inability to respond to ADH (nephrogenic DI). Despite the name "diabetes," it has nothing to do with insulin or blood glucose. ADH tells the kidneys to retain water — without it, massive dilute urine is produced.'
        }
      ]
    }
  },

  'SIADH': {
    details: [
      'Too much ADH → body retains water → dilutional hyponatremia (LOW sodium, LOW serum osmolality)',
      'Urine is inappropriately CONCENTRATED (high osmolality >300, high specific gravity >1.025)',
      'Causes: brain tumors, head injury, lung cancer (especially small cell), medications, surgery',
      'DANGER: seizures if sodium drops below 120 mEq/L',
      'Treatment: fluid RESTRICTION (800 mL/day), 3% hypertonic saline for severe/symptomatic hyponatremia, tolvaptan'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with SIADH has a sodium of 118 mEq/L and begins seizing. Which intervention does the nurse anticipate?',
          options: [
            'Administer 0.9% normal saline rapidly.',
            'Administer 3% hypertonic saline slowly with frequent sodium monitoring.',
            'Restrict all fluids immediately.',
            'Administer desmopressin (DDAVP).'
          ],
          correct: 1,
          rationale: 'Symptomatic hyponatremia with seizures requires 3% hypertonic saline to raise sodium levels carefully. It must be given SLOWLY because rapid correction can cause osmotic demyelination syndrome (brain damage). Sodium should be corrected no faster than 8-12 mEq/L in 24 hours. Normal saline is isotonic and won\'t correct severe hyponatremia. DDAVP would worsen SIADH (more ADH effect). Fluid restriction is for chronic management, not seizures.'
        },
        {
          stem: 'A nurse is planning care for a patient with SIADH. Which intervention is the cornerstone of treatment?',
          options: [
            'Encourage fluid intake of 3 liters per day.',
            'Restrict fluids to approximately 800 mL per day.',
            'Administer IV D5W at 200 mL/hr.',
            'Encourage high-sodium diet with unlimited water.'
          ],
          correct: 1,
          rationale: 'Fluid RESTRICTION (often 800 mL/day) is the cornerstone of SIADH treatment. Since the problem is water retention (too much ADH), restricting intake helps the body excrete excess water and allows sodium to normalize. Encouraging fluids or giving hypotonic IV fluids (D5W) would worsen the dilutional hyponatremia.'
        }
      ],
      y: [
        {
          stem: 'Which lab pattern is characteristic of SIADH?',
          options: [
            'High sodium, high serum osmolality, dilute urine',
            'Low sodium, low serum osmolality, concentrated urine',
            'Normal sodium, normal osmolality, normal urine',
            'High sodium, low serum osmolality, concentrated urine'
          ],
          correct: 1,
          rationale: 'SIADH causes: LOW sodium (<135, hyponatremia from dilution), LOW serum osmolality (<280, dilute blood), and paradoxically CONCENTRATED urine (high osmolality >300, high specific gravity >1.025). The body retains water (diluting blood sodium) while the kidneys concentrate urine inappropriately.'
        },
        {
          stem: 'At what sodium level do seizures become a significant risk in SIADH?',
          options: [
            'Below 135 mEq/L',
            'Below 120 mEq/L',
            'Below 145 mEq/L',
            'Below 130 mEq/L'
          ],
          correct: 1,
          rationale: 'Seizures become a significant risk when sodium drops below 120 mEq/L. At this level, the osmotic gradient causes cerebral edema (water moves into brain cells), leading to altered mental status, seizures, and potentially coma. This is a medical emergency requiring 3% hypertonic saline.'
        }
      ],
      r: [
        {
          stem: 'SIADH causes the body to:',
          options: [
            'Excrete too much water',
            'Retain too much water, diluting the blood sodium',
            'Produce too little ADH',
            'Excrete too much sodium'
          ],
          correct: 1,
          rationale: 'In SIADH, excessive ADH causes the kidneys to retain too much water, which dilutes blood sodium (dilutional hyponatremia). The problem is WATER excess, not sodium deficiency. Treatment focuses on fluid restriction to let the body correct the imbalance.'
        }
      ]
    }
  },

  'DI vs SIADH Comparison': {
    details: [
      'DI: LOW ADH → massive dilute urine → dehydration → HIGH sodium, HIGH serum osmolality',
      'SIADH: HIGH ADH → water retention → dilution → LOW sodium, LOW serum osmolality',
      'DI urine: DILUTE (low specific gravity <1.005) | SIADH urine: CONCENTRATED (high specific gravity >1.025)',
      'DI treatment: DDAVP + fluid replacement | SIADH treatment: fluid RESTRICTION + tolvaptan',
      'Memory: DI = Dry (dehydrated, dilute urine) | SIADH = Soggy (waterlogged, concentrated urine)'
    ],
    questions: {
      g: [
        {
          stem: 'A nurse is reviewing labs for two patients. Patient A: Na+ 158, serum osm 310, urine SG 1.002, output 6L/day. Patient B: Na+ 122, serum osm 265, urine SG 1.030, output 400 mL/day. Which diagnoses match?',
          options: [
            'Patient A = SIADH; Patient B = DI',
            'Patient A = DI; Patient B = SIADH',
            'Both patients have DI',
            'Both patients have SIADH'
          ],
          correct: 1,
          rationale: 'Patient A has DI: HIGH sodium (158), HIGH serum osmolality (310), DILUTE urine (SG 1.002), massive output (6L). Patient B has SIADH: LOW sodium (122), LOW serum osmolality (265), CONCENTRATED urine (SG 1.030), LOW output (400 mL). Everything is opposite between the two conditions. DI = losing water; SIADH = retaining water.'
        },
        {
          stem: 'A patient is admitted with serum sodium of 119 mEq/L and concentrated urine. The nurse should anticipate which fluid management?',
          options: [
            'Encourage oral fluid intake of 2-3 liters per day.',
            'Strict fluid RESTRICTION and seizure precautions.',
            'Administer DDAVP to concentrate the urine further.',
            'Begin rapid IV normal saline infusion at 500 mL/hr.'
          ],
          correct: 1,
          rationale: 'Low sodium (119) with concentrated urine = SIADH. Treatment is fluid RESTRICTION (reduce water intake to let sodium normalize). With sodium below 120, seizure precautions are critical. DDAVP would worsen the condition (more water retention). Rapid fluid administration would further dilute sodium. If symptomatic, 3% hypertonic saline is used carefully.'
        }
      ],
      y: [
        {
          stem: 'The key lab difference between DI and SIADH is:',
          options: [
            'DI has low potassium while SIADH has high potassium.',
            'DI has high sodium with dilute urine while SIADH has low sodium with concentrated urine.',
            'DI has low glucose while SIADH has high glucose.',
            'Both conditions have identical lab values.'
          ],
          correct: 1,
          rationale: 'The labs are opposites: DI = HIGH sodium (dehydration) + DILUTE urine (kidneys can\'t concentrate). SIADH = LOW sodium (water retention/dilution) + CONCENTRATED urine (kidneys retaining water). This is the most tested comparison in endocrine nursing.'
        },
        {
          stem: 'Which condition is treated with fluid RESTRICTION?',
          options: [
            'Diabetes insipidus',
            'SIADH',
            'Addison\'s disease',
            'Thyroid storm'
          ],
          correct: 1,
          rationale: 'SIADH is treated with fluid restriction because the problem is water RETENTION (too much ADH). Restricting intake allows the body to excrete excess water and normalize sodium. DI is the opposite — the patient needs FLUID REPLACEMENT because they are losing too much water.'
        }
      ],
      r: [
        {
          stem: 'In diabetes insipidus, sodium is ____ and in SIADH, sodium is ____.',
          options: [
            'Low; high',
            'High; low',
            'Normal; normal',
            'High; high'
          ],
          correct: 1,
          rationale: 'DI = HIGH sodium (hypernatremia) because the body loses massive water, concentrating the blood. SIADH = LOW sodium (hyponatremia) because the body retains excess water, diluting the blood. They are mirror-image conditions.'
        }
      ]
    }
  },

  'Desmopressin (DDAVP)': {
    details: [
      'Synthetic ADH analog — replaces missing antidiuretic hormone in CENTRAL DI',
      'Routes: intranasal spray, subcutaneous injection, IV, oral tablet',
      'Effect: tells kidneys to retain water → decreases urine output, increases urine concentration',
      'Does NOT work in nephrogenic DI (kidneys can\'t respond to ADH)',
      'Also used for: von Willebrand disease (stimulates vWF release), nocturnal enuresis (bedwetting)'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with nephrogenic DI is started on desmopressin, but urine output remains at 8 L/day with no improvement. The nurse understands this is because:',
          options: [
            'The dose is too low and needs to be increased.',
            'Desmopressin replaces ADH, but in nephrogenic DI the kidneys CANNOT respond to ADH — the drug is ineffective.',
            'The patient is not taking the medication correctly.',
            'Desmopressin takes 6-8 weeks to work.'
          ],
          correct: 1,
          rationale: 'Desmopressin replaces ADH activity, which works in CENTRAL DI (brain doesn\'t produce ADH). In NEPHROGENIC DI, the kidneys cannot respond to ADH regardless of how much is present — the receptors or tubules are damaged. Therefore, desmopressin is ineffective. Nephrogenic DI is treated with thiazide diuretics, NSAIDs, and sodium restriction.'
        },
        {
          stem: 'A patient on intranasal desmopressin for DI reports a severe headache and the nurse notes periorbital edema. Serum sodium is 128 mEq/L. The nurse suspects:',
          options: [
            'An allergic reaction to the nasal spray',
            'Water intoxication from excessive desmopressin effect — the patient is retaining too much water',
            'Worsening DI requiring a higher dose',
            'A sinus infection from nasal administration'
          ],
          correct: 1,
          rationale: 'Headache, edema, and low sodium (128) indicate water intoxication — the desmopressin is causing the kidneys to retain too much water, diluting the blood (iatrogenic SIADH-like picture). The dose may be too high or the patient is drinking too much fluid. The nurse should hold the medication, restrict fluids, and notify the provider. Worsening DI would show high sodium, not low.'
        }
      ],
      y: [
        {
          stem: 'Desmopressin (DDAVP) is effective for which type of diabetes insipidus?',
          options: [
            'Nephrogenic DI',
            'Central DI',
            'Both types equally',
            'Neither type'
          ],
          correct: 1,
          rationale: 'Desmopressin works for CENTRAL DI because it replaces the missing ADH. The kidneys are functioning normally — they just need the ADH signal. In nephrogenic DI, the kidneys cannot respond to ADH (damaged receptors/tubules), so desmopressin is ineffective.'
        },
        {
          stem: 'Besides diabetes insipidus, desmopressin is also used to treat:',
          options: [
            'Hypertension',
            'Von Willebrand disease (stimulates vWF release)',
            'Hypothyroidism',
            'Hyperkalemia'
          ],
          correct: 1,
          rationale: 'Desmopressin stimulates the release of stored von Willebrand factor from endothelial cells, making it useful for mild-to-moderate von Willebrand disease before minor procedures. It is also used for nocturnal enuresis (bedwetting) in children.'
        }
      ],
      r: [
        {
          stem: 'Desmopressin works by:',
          options: [
            'Blocking ADH receptors in the kidneys',
            'Mimicking ADH to tell the kidneys to retain water',
            'Increasing sodium excretion by the kidneys',
            'Stimulating the pituitary to produce more ADH'
          ],
          correct: 1,
          rationale: 'Desmopressin is a synthetic ADH analog that acts on kidney collecting ducts, telling them to reabsorb water. This decreases urine output and increases urine concentration — directly replacing the missing ADH function in central DI.'
        }
      ]
    }
  },

  'Vasopressin (ADH)': {
    details: [
      'Antidiuretic hormone produced by hypothalamus, stored in posterior pituitary',
      'Acts on kidney collecting ducts to increase water reabsorption (concentrates urine)',
      'Also a potent VASOCONSTRICTOR — used in cardiac arrest (ACLS) and septic shock',
      'Synthetic vasopressin (Pitressin) used for DI, GI bleeding (variceal), cardiac arrest',
      'Side effects: water retention, hyponatremia, vasoconstriction → hypertension, ischemia'
    ],
    questions: {
      g: [
        {
          stem: 'A patient in septic shock is on vasopressin infusion in addition to norepinephrine. The nurse understands vasopressin is used in this context because:',
          options: [
            'It replaces missing ADH in all critically ill patients.',
            'It acts as a potent vasoconstrictor to help raise blood pressure in refractory shock.',
            'It prevents diabetes insipidus from developing during sepsis.',
            'It increases urine output to prevent kidney failure.'
          ],
          correct: 1,
          rationale: 'In septic shock, vasopressin is used as an adjunct vasopressor for its potent vasoconstrictor properties — it constricts blood vessels to help raise blood pressure when catecholamines alone are insufficient. This is a separate use from its ADH/antidiuretic role. In this context, the vasoconstriction is the desired effect.'
        },
        {
          stem: 'A nurse is monitoring a patient on vasopressin infusion for DI. Which finding requires immediate intervention?',
          options: [
            'Urine output decreased from 800 to 200 mL/hr',
            'Blood pressure rose from 110/70 to 190/110 with chest pain',
            'Serum sodium decreased from 155 to 142 mEq/L',
            'Urine specific gravity increased from 1.003 to 1.018'
          ],
          correct: 1,
          rationale: 'Vasopressin is a potent vasoconstrictor — severe hypertension (190/110) with chest pain indicates excessive vasoconstriction that could cause myocardial ischemia or stroke. This requires immediate intervention (reduce dose/stop infusion, notify provider). Decreased urine output and increased specific gravity are EXPECTED therapeutic effects. Normalizing sodium (155→142) is desired.'
        }
      ],
      y: [
        {
          stem: 'Vasopressin (ADH) has two main pharmacological actions:',
          options: [
            'Bronchodilation and anti-inflammatory effects',
            'Water reabsorption in kidneys and vasoconstriction',
            'Insulin secretion and glucagon suppression',
            'Calcium absorption and bone formation'
          ],
          correct: 1,
          rationale: 'Vasopressin has two main actions: (1) antidiuretic — increases water reabsorption in kidney collecting ducts (its primary physiologic role), and (2) vasoconstriction — constricts blood vessels to raise blood pressure (utilized therapeutically in shock and cardiac arrest).'
        },
        {
          stem: 'Where is ADH (vasopressin) produced and stored?',
          options: [
            'Produced and stored in the anterior pituitary',
            'Produced in the hypothalamus and stored in the posterior pituitary',
            'Produced in the kidneys and stored in the adrenal glands',
            'Produced and stored in the thyroid gland'
          ],
          correct: 1,
          rationale: 'ADH is synthesized in the hypothalamus and transported to the posterior pituitary where it is stored and released when needed (in response to increased serum osmolality or decreased blood volume). This is why pituitary surgery or head trauma can cause central DI.'
        }
      ],
      r: [
        {
          stem: 'The primary physiological role of ADH (vasopressin) is to:',
          options: [
            'Increase urine production',
            'Decrease water reabsorption',
            'Increase water reabsorption by the kidneys',
            'Stimulate red blood cell production'
          ],
          correct: 2,
          rationale: 'ADH\'s primary role is to increase water reabsorption in the kidney collecting ducts, concentrating the urine and conserving body water. "Antidiuretic" literally means "against urination." Without ADH, the kidneys excrete massive dilute urine (diabetes insipidus).'
        }
      ]
    }
  },

  'Somatropin (Growth Hormone)': {
    details: [
      'Recombinant human growth hormone (GH) — used for GH deficiency in children and adults',
      'Given by subcutaneous injection, usually at bedtime (mimics natural GH release during sleep)',
      'Effects: promotes linear growth in children, increases muscle mass, decreases fat mass',
      'Adverse effects: joint pain, edema, carpal tunnel syndrome, hyperglycemia, increased intracranial pressure',
      'Contraindicated in: active malignancy, diabetic retinopathy, closed epiphyses (children already done growing)'
    ],
    questions: {
      g: [
        {
          stem: 'A child receiving somatropin injections develops severe headaches and visual changes. The nurse should suspect:',
          options: [
            'Normal side effects that will resolve with continued use.',
            'Increased intracranial pressure — a serious adverse effect requiring immediate evaluation.',
            'Growth hormone deficiency is worsening.',
            'An allergic reaction to the injection preservative.'
          ],
          correct: 1,
          rationale: 'Severe headaches and visual changes during somatropin therapy can indicate increased intracranial pressure (pseudotumor cerebri/idiopathic intracranial hypertension), a serious adverse effect. The medication should be held and the child needs immediate ophthalmologic and neurologic evaluation. This is not a normal side effect.'
        },
        {
          stem: 'Why is somatropin typically administered at bedtime?',
          options: [
            'To reduce the risk of injection site reactions.',
            'To mimic the body\'s natural growth hormone release pattern, which peaks during sleep.',
            'Because food interactions are minimized at night.',
            'To prevent hyperglycemia during the day.'
          ],
          correct: 1,
          rationale: 'Natural growth hormone secretion peaks during deep sleep. Administering somatropin at bedtime mimics this physiological pattern, optimizing the hormonal effect. This timing also aligns with the body\'s circadian rhythm for growth and tissue repair.'
        }
      ],
      y: [
        {
          stem: 'Which adverse effect should the nurse monitor for in a patient receiving somatropin?',
          options: [
            'Hypoglycemia',
            'Hyperglycemia',
            'Hypothyroidism',
            'Hypocalcemia'
          ],
          correct: 1,
          rationale: 'Growth hormone is a counter-regulatory hormone that RAISES blood glucose. Somatropin therapy can cause hyperglycemia and insulin resistance. Blood glucose should be monitored, especially in patients with diabetes or pre-diabetes. GH is one of the hormones that opposes insulin action.'
        },
        {
          stem: 'Somatropin is contraindicated in children with:',
          options: [
            'Open growth plates',
            'Closed epiphyses (growth plates already fused)',
            'Moderate GH deficiency',
            'Short stature for their age'
          ],
          correct: 1,
          rationale: 'Somatropin promotes linear growth through the epiphyseal growth plates. Once these plates close (epiphyseal fusion), the bones can no longer grow longer, making growth hormone therapy for height gain ineffective. In adults, somatropin is used for other metabolic effects, not height.'
        }
      ],
      r: [
        {
          stem: 'Somatropin is a synthetic form of:',
          options: [
            'Thyroid hormone',
            'Growth hormone',
            'Insulin',
            'Cortisol'
          ],
          correct: 1,
          rationale: 'Somatropin is recombinant human growth hormone (GH), used to treat GH deficiency. It promotes growth in children and has metabolic effects in adults (increases muscle mass, decreases fat). It is given by subcutaneous injection.'
        }
      ]
    }
  },

  'Octreotide (Sandostatin)': {
    details: [
      'MOA: Somatostatin analog — inhibits growth hormone, glucagon, and insulin secretion',
      'Used for acromegaly (excess GH), carcinoid tumors, VIPomas, and esophageal variceal bleeding',
      'Given subcutaneously or IM (long-acting monthly depot formulation available)',
      'Adverse effects: GI upset (nausea, diarrhea, abdominal pain), gallstones (reduces gallbladder motility), hyperglycemia',
      'Monitor: growth hormone levels, IGF-1 levels, blood glucose, gallbladder ultrasound periodically'
    ],
    questions: {
      g: [
        {
          stem: 'A patient on long-term octreotide for acromegaly develops RUQ pain after eating fatty foods. The nurse suspects:',
          options: [
            'Peptic ulcer disease from the medication.',
            'Cholelithiasis (gallstones) — octreotide reduces gallbladder motility, promoting stone formation.',
            'Liver failure from drug toxicity.',
            'Pancreatitis from elevated growth hormone.'
          ],
          correct: 1,
          rationale: 'Octreotide inhibits gallbladder contraction, causing bile stasis and promoting gallstone formation (cholelithiasis). RUQ pain after fatty meals is the classic gallstone presentation. Patients on long-term octreotide should have periodic gallbladder ultrasounds. This is a well-known adverse effect of somatostatin analogs.'
        },
        {
          stem: 'A nurse is monitoring a patient started on octreotide for acromegaly. Which lab should be assessed to determine treatment effectiveness?',
          options: [
            'TSH and free T4',
            'GH (growth hormone) and IGF-1 levels',
            'Cortisol and ACTH',
            'Hemoglobin A1C'
          ],
          correct: 1,
          rationale: 'Octreotide treats acromegaly by suppressing growth hormone secretion. Treatment effectiveness is measured by GH levels (should decrease) and IGF-1 levels (should normalize). TSH/T4 assess thyroid function. Cortisol/ACTH assess adrenal function. While blood glucose should be monitored (GI effects), A1C is not the primary efficacy measure.'
        }
      ],
      y: [
        {
          stem: 'Octreotide works by:',
          options: [
            'Stimulating growth hormone production',
            'Inhibiting growth hormone secretion (somatostatin analog)',
            'Blocking growth hormone receptors on target tissues',
            'Increasing IGF-1 production in the liver'
          ],
          correct: 1,
          rationale: 'Octreotide mimics somatostatin, the body\'s natural growth hormone-inhibiting hormone. It suppresses GH, glucagon, and insulin secretion from the pituitary and pancreas. This makes it effective for acromegaly (GH excess) and certain GI tumors.'
        },
        {
          stem: 'Which adverse effect should the nurse monitor for with long-term octreotide use?',
          options: [
            'Osteoporosis',
            'Gallstones',
            'Hair loss',
            'Renal failure'
          ],
          correct: 1,
          rationale: 'Long-term octreotide use promotes gallstone formation (cholelithiasis) because it reduces gallbladder motility, causing bile stasis and crystal formation. Periodic gallbladder ultrasounds are recommended. Other adverse effects include GI upset and blood glucose changes.'
        }
      ],
      r: [
        {
          stem: 'Octreotide (Sandostatin) is primarily used to treat:',
          options: [
            'Growth hormone deficiency',
            'Acromegaly (excess growth hormone)',
            'Hypothyroidism',
            'Diabetes insipidus'
          ],
          correct: 1,
          rationale: 'Octreotide is used for acromegaly — it suppresses excess growth hormone secretion. Growth hormone deficiency is treated with somatropin (replacement). It is also used for carcinoid tumors and variceal bleeding.'
        }
      ]
    }
  },

  'Pegvisomant Paradox': {
    details: [
      'MOA: Growth hormone RECEPTOR ANTAGONIST — blocks GH from binding to its receptors on target tissues',
      'THE PARADOX: GH levels in blood actually RISE on this drug (pituitary thinks more GH is needed because receptors are blocked)',
      'But clinical effects IMPROVE because GH cannot act on tissues — IGF-1 levels decrease',
      'Used when octreotide is ineffective for acromegaly',
      'Monitor: IGF-1 (should decrease = working), LFTs (hepatotoxicity risk), tumor size (GH rise may stimulate pituitary tumor growth)'
    ],
    questions: {
      g: [
        {
          stem: 'A patient on pegvisomant for acromegaly has labs showing: GH elevated at 35 ng/mL, IGF-1 normalized at 180 ng/mL. A student nurse says the treatment isn\'t working because GH is high. The nurse explains:',
          options: [
            '"You\'re right — the medication should be changed."',
            '"GH levels RISE on pegvisomant because the drug blocks GH receptors. The pituitary senses low GH effect and produces more. But IGF-1 normalizing proves the drug IS working — tissues can\'t respond to GH."',
            '"Both labs are abnormal — we need to increase the dose."',
            '"GH is always high in acromegaly regardless of treatment."'
          ],
          correct: 1,
          rationale: 'This is the pegvisomant paradox: by blocking GH receptors, the pituitary loses negative feedback and produces MORE GH (level rises). However, since receptors are blocked, tissues cannot respond to GH, so IGF-1 (the downstream marker of GH action) normalizes. Efficacy is measured by IGF-1, NOT GH level. This is a high-yield exam concept.'
        },
        {
          stem: 'Which lab is used to monitor pegvisomant EFFICACY (whether it\'s working)?',
          options: [
            'Growth hormone level (should decrease)',
            'IGF-1 level (should decrease/normalize)',
            'TSH level (should normalize)',
            'Cortisol level (should decrease)'
          ],
          correct: 1,
          rationale: 'IGF-1 is the correct efficacy marker for pegvisomant. Since the drug blocks GH receptors, GH levels paradoxically RISE (not useful for monitoring). IGF-1 is produced by the liver in response to GH action on tissues — if pegvisomant blocks GH receptors effectively, IGF-1 decreases. Normalizing IGF-1 = drug is working.'
        }
      ],
      y: [
        {
          stem: 'Pegvisomant works differently from octreotide because:',
          options: [
            'Pegvisomant suppresses GH secretion while octreotide blocks GH receptors.',
            'Pegvisomant blocks GH receptors on target tissues while octreotide suppresses GH secretion.',
            'Both drugs work the same way.',
            'Pegvisomant stimulates GH production while octreotide inhibits it.'
          ],
          correct: 1,
          rationale: 'Octreotide (somatostatin analog) suppresses GH SECRETION from the pituitary — GH levels decrease. Pegvisomant blocks GH RECEPTORS on target tissues — GH cannot act even though levels rise. They work at different points: octreotide at the source, pegvisomant at the target.'
        },
        {
          stem: 'The "paradox" of pegvisomant refers to:',
          options: [
            'The drug cures acromegaly permanently after one dose.',
            'GH levels in the blood RISE while the clinical effects of GH excess improve.',
            'The drug works for hypothyroidism and hyperthyroidism simultaneously.',
            'Patients gain weight despite having excess growth hormone.'
          ],
          correct: 1,
          rationale: 'The paradox is that GH levels INCREASE (pituitary compensates for blocked receptors) while the CLINICAL effects of acromegaly improve (tissues can\'t respond to GH). Labs look "worse" (high GH) but the patient gets better (normalized IGF-1, symptom improvement).'
        }
      ],
      r: [
        {
          stem: 'Pegvisomant treats acromegaly by:',
          options: [
            'Destroying the pituitary tumor',
            'Blocking growth hormone receptors so GH cannot act on tissues',
            'Increasing growth hormone production',
            'Replacing missing growth hormone'
          ],
          correct: 1,
          rationale: 'Pegvisomant is a GH receptor antagonist — it blocks GH from binding to its receptors on target tissues (liver, bone, cartilage). Even though GH is present in the blood, it cannot exert its effects. This reduces IGF-1 production and improves acromegaly symptoms.'
        }
      ]
    }
  },

  'Acromegaly': {
    details: [
      'Caused by EXCESS growth hormone in adults (after epiphyseal closure) — usually from pituitary adenoma',
      'Enlarged hands, feet, jaw, face (coarsened features), voice deepening, headaches, visual field defects',
      'Systemic: glucose intolerance/diabetes, hypertension, cardiomegaly, sleep apnea, arthropathy',
      'Diagnosis: elevated fasting GH, elevated IGF-1, MRI of pituitary for tumor',
      'Treatment: surgery (transsphenoidal), octreotide, pegvisomant, radiation'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with acromegaly has a fasting blood glucose of 210 mg/dL despite no history of diabetes. The nurse understands this is because:',
          options: [
            'Acromegaly medications cause hyperglycemia.',
            'Excess growth hormone is a counter-regulatory hormone that raises blood glucose and causes insulin resistance.',
            'The pituitary tumor is secreting insulin-blocking hormones.',
            'The patient developed type 1 diabetes independently.'
          ],
          correct: 1,
          rationale: 'Growth hormone is a counter-regulatory hormone that opposes insulin action, raising blood glucose and causing insulin resistance. Chronic GH excess in acromegaly commonly leads to glucose intolerance and frank diabetes mellitus. This is a direct metabolic effect of the disease, not medication-related.'
        },
        {
          stem: 'A patient with acromegaly reports their rings no longer fit and their shoes feel tight. The nurse recognizes these as:',
          options: [
            'Fluid retention from heart failure',
            'Classic signs of acromegaly — progressive enlargement of hands and feet from excess GH',
            'Side effects of GH-lowering medications',
            'Signs of hypothyroidism'
          ],
          correct: 1,
          rationale: 'Progressive enlargement of the hands (rings don\'t fit) and feet (shoes too tight) are hallmark presentations of acromegaly. Excess GH causes soft tissue and bone growth in the extremities, face (jaw enlargement, coarsened features), and internal organs. These changes develop gradually and are often not noticed until rings/shoes/hats no longer fit.'
        }
      ],
      y: [
        {
          stem: 'Acromegaly is most commonly caused by:',
          options: [
            'Thyroid gland overactivity',
            'A growth hormone-secreting pituitary adenoma',
            'Excess cortisol from the adrenal glands',
            'Liver overproduction of IGF-1'
          ],
          correct: 1,
          rationale: 'Acromegaly is most commonly caused by a benign pituitary adenoma (tumor) that secretes excess growth hormone. The tumor can also cause headaches and visual field defects from pressure on the optic chiasm. Diagnosis involves GH/IGF-1 levels and MRI of the pituitary.'
        },
        {
          stem: 'Which diagnostic test confirms acromegaly?',
          options: [
            'Thyroid function tests',
            'Elevated IGF-1 and fasting GH levels with pituitary MRI',
            'Complete blood count with differential',
            'Serum cortisol and ACTH levels'
          ],
          correct: 1,
          rationale: 'Acromegaly is confirmed by elevated IGF-1 (reflects chronic GH excess) and elevated fasting GH. MRI of the pituitary identifies the adenoma. Oral glucose tolerance test may also be used — normally GH suppresses after glucose load, but in acromegaly it does not.'
        }
      ],
      r: [
        {
          stem: 'Acromegaly occurs when excess growth hormone is produced in:',
          options: [
            'Children before growth plates close',
            'Adults after growth plates have closed',
            'Only during puberty',
            'Only in elderly patients'
          ],
          correct: 1,
          rationale: 'Acromegaly occurs in ADULTS (after epiphyseal plate closure). Since bones can no longer grow longer, excess GH causes thickening and widening of bones and soft tissues (hands, feet, jaw, face). In children (before plate closure), excess GH causes gigantism (tall stature) instead.'
        }
      ]
    }
  },

  'Post-Hypophysectomy Care': {
    details: [
      'Hypophysectomy = surgical removal of pituitary gland (transsphenoidal approach through the nose/sinus)',
      'Monitor for CSF leak: clear drainage from nose — test for glucose (CSF contains glucose, mucus does not)',
      'AVOID: coughing, sneezing, straining, bending, blowing nose — all increase intracranial pressure',
      'Monitor for diabetes insipidus: sudden increase in urine output (ADH no longer produced)',
      'Lifelong hormone replacement needed: cortisol, thyroid, ADH, sex hormones (pituitary no longer produces them)'
    ],
    questions: {
      g: [
        {
          stem: 'After transsphenoidal hypophysectomy, a patient has clear fluid dripping from the nose. The nurse should:',
          options: [
            'Have the patient blow their nose to clear the drainage.',
            'Test the drainage for glucose — positive glucose suggests CSF leak, a surgical emergency.',
            'Apply nasal decongestant spray.',
            'Pack the nose with gauze and reassess in 1 hour.'
          ],
          correct: 1,
          rationale: 'Clear nasal drainage after transsphenoidal surgery may be a CSF leak (the surgical approach goes through the sinus, close to the dura). CSF contains glucose while nasal mucus does not. A positive glucose test suggests CSF leak, which requires immediate notification of the surgeon (risk of meningitis). NEVER have the patient blow their nose (increases ICP and worsens the leak).'
        },
        {
          stem: 'A post-hypophysectomy patient\'s urine output suddenly increases to 500 mL/hr with specific gravity of 1.001. The nurse suspects:',
          options: [
            'Normal postoperative diuresis from IV fluids',
            'Diabetes insipidus from loss of ADH production after pituitary removal',
            'SIADH from surgical stress',
            'Urinary tract infection'
          ],
          correct: 1,
          rationale: 'Sudden massive urine output (500 mL/hr) with very dilute urine (SG 1.001) after pituitary removal = diabetes insipidus. The pituitary stores and releases ADH — without it, the kidneys cannot concentrate urine. This is an expected complication that requires desmopressin replacement. SIADH would show decreased output and concentrated urine.'
        }
      ],
      y: [
        {
          stem: 'Which activity should be AVOIDED after transsphenoidal hypophysectomy?',
          options: [
            'Deep breathing exercises',
            'Blowing the nose, coughing, and straining',
            'Dangling legs at bedside',
            'Sipping clear liquids'
          ],
          correct: 1,
          rationale: 'After transsphenoidal surgery, anything that increases intracranial pressure must be avoided: blowing the nose, coughing, sneezing, straining (Valsalva), and bending over. These can disrupt the surgical site and cause CSF leak or hemorrhage. Deep breathing is encouraged, but forceful coughing is not.'
        },
        {
          stem: 'After pituitary removal, the patient will need lifelong replacement of:',
          options: [
            'Only thyroid hormone',
            'Multiple hormones including cortisol, thyroid, ADH, and sex hormones',
            'Only insulin',
            'No hormone replacement is needed'
          ],
          correct: 1,
          rationale: 'The pituitary is the "master gland" — it produces hormones that control the thyroid (TSH), adrenals (ACTH), gonads (FSH/LH), growth (GH), and water balance (ADH). After removal, ALL these hormones need lifelong replacement: levothyroxine, hydrocortisone, desmopressin, sex hormones, and possibly GH.'
        }
      ],
      r: [
        {
          stem: 'The transsphenoidal approach to pituitary surgery goes through the:',
          options: [
            'Top of the skull',
            'Nose and sphenoid sinus',
            'Back of the head',
            'Side of the neck'
          ],
          correct: 1,
          rationale: 'Transsphenoidal surgery accesses the pituitary through the nose and sphenoid sinus, avoiding the need to open the skull. This approach has fewer complications but creates a risk of CSF leak through the nasal cavity. This is why nasal drainage is carefully monitored postoperatively.'
        }
      ]
    }
  },

  'Addisonian Crisis': {
    details: [
      'LIFE-THREATENING acute adrenal insufficiency — patient cannot produce cortisol when stressed',
      'Triggers: illness, infection, surgery, trauma, or stopping steroid medication abruptly in Addison\'s patient',
      'Signs: severe hypotension, vascular collapse, dehydration, nausea/vomiting, weakness, confusion',
      'Emergency treatment: IV hydrocortisone (Solu-Cortef) 100mg bolus + aggressive IV normal saline STAT',
      'Prevention: stress dosing (double/triple steroid dose during illness), MedicAlert bracelet, NEVER stop steroids abruptly'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with Addison\'s disease develops the flu with vomiting and is unable to keep oral medications down. BP is 78/50. The nurse recognizes this as addisonian crisis. Which interventions are the HIGHEST priority?',
          options: [
            'Oral hydrocortisone and clear fluids when vomiting stops.',
            'IV hydrocortisone 100mg STAT and aggressive IV normal saline for volume resuscitation.',
            'IV dextrose 50% and glucagon.',
            'IM epinephrine and IV diphenhydramine.'
          ],
          correct: 1,
          rationale: 'Addisonian crisis requires emergency IV hydrocortisone (replaces the cortisol the patient cannot produce) and IV normal saline (replaces volume lost from vomiting and cortisol-mediated vasodilation). Oral medications are useless if the patient is vomiting. This is a hemodynamic emergency — the patient is in vascular collapse from cortisol deficiency. D50/glucagon treat hypoglycemia. Epi/diphenhydramine treat anaphylaxis.'
        },
        {
          stem: 'A patient with Addison\'s disease tells the nurse they ran out of hydrocortisone 3 days ago and "felt fine so didn\'t worry about it." The nurse\'s PRIORITY teaching is:',
          options: [
            '"It\'s okay to miss a few days since the medication stays in your system."',
            '"NEVER stop hydrocortisone abruptly — your body cannot produce cortisol on its own. Missing doses can trigger a life-threatening crisis, especially if you get sick or stressed."',
            '"You can take double the dose tomorrow to catch up."',
            '"Missing the medication only matters if you feel symptoms."'
          ],
          correct: 1,
          rationale: 'In Addison\'s disease, the adrenal glands cannot produce cortisol. Exogenous hydrocortisone IS their cortisol. Stopping abruptly is life-threatening because any stressor (illness, injury, emotional stress) demands extra cortisol the body cannot make, triggering addisonian crisis. The patient may feel fine at baseline but will crash under stress without cortisol replacement.'
        }
      ],
      y: [
        {
          stem: 'Which of the following can trigger an addisonian crisis?',
          options: [
            'Taking too much hydrocortisone',
            'Illness, surgery, or abruptly stopping steroid medication',
            'Eating a high-sodium diet',
            'Exercising moderately three times per week'
          ],
          correct: 1,
          rationale: 'Addisonian crisis is triggered by anything that increases cortisol demand: illness/infection, surgery, trauma, emotional stress, or abruptly stopping steroid replacement medication. The Addison\'s patient cannot produce extra cortisol to meet the demand. Taking too much hydrocortisone causes Cushing-like effects, not crisis.'
        },
        {
          stem: 'What does "stress dosing" mean for a patient with Addison\'s disease?',
          options: [
            'Taking medication only during stressful events',
            'Doubling or tripling the hydrocortisone dose during illness, surgery, or major stress',
            'Reducing the dose to prevent side effects during stress',
            'Switching from oral to topical steroids during illness'
          ],
          correct: 1,
          rationale: 'Stress dosing means increasing the hydrocortisone dose (usually doubling or tripling) during illness, surgery, trauma, or significant stress. Normal adrenal glands increase cortisol output 5-10x during stress. Since Addison\'s patients cannot do this, their replacement dose must be increased to prevent crisis.'
        }
      ],
      r: [
        {
          stem: 'The emergency treatment for addisonian crisis includes:',
          options: [
            'Oral prednisone and water',
            'IV hydrocortisone and IV normal saline',
            'IV insulin and potassium',
            'Blood transfusion and antibiotics'
          ],
          correct: 1,
          rationale: 'Addisonian crisis requires IV hydrocortisone (Solu-Cortef) to replace missing cortisol and IV normal saline for aggressive fluid resuscitation. The patient is in vascular collapse from cortisol deficiency, which causes severe hypotension and dehydration. Oral medications are insufficient in crisis.'
        }
      ]
    }
  },

  'Hydrocortisone': {
    details: [
      'Prototype glucocorticoid — replaces BOTH glucocorticoid AND mineralocorticoid activity in Addison\'s',
      'Take in the morning (mimics natural cortisol circadian rhythm peak)',
      'NEVER stop abruptly — must taper (abrupt stop causes adrenal crisis from HPA axis suppression)',
      'Long-term SE: Cushing-like effects (moon face, buffalo hump, weight gain, hyperglycemia, osteoporosis, immunosuppression)',
      'CRITICAL: masks fever and infection signs — monitor carefully for hidden infections'
    ],
    questions: {
      g: [
        {
          stem: 'A patient on long-term hydrocortisone develops weight gain, round face, and blood glucose of 186 mg/dL. The nurse recognizes these as:',
          options: [
            'Signs that Addison\'s disease is worsening.',
            'Iatrogenic Cushing syndrome — expected side effects of long-term glucocorticoid therapy.',
            'An allergic reaction to the medication.',
            'Signs of thyroid dysfunction.'
          ],
          correct: 1,
          rationale: 'Weight gain, moon face (round face), and hyperglycemia are classic signs of Cushing syndrome developing from long-term glucocorticoid use (iatrogenic Cushing). Cortisol promotes fat redistribution, raises blood glucose (counter-regulatory hormone), and causes sodium/water retention. These are expected but concerning side effects that require monitoring and possible dose adjustment.'
        },
        {
          stem: 'A patient on hydrocortisone has a temperature of 98.6°F but appears ill with tachycardia and altered mental status. The nurse should consider that:',
          options: [
            'The normal temperature rules out infection.',
            'Glucocorticoids MASK fever — the patient may have a serious infection despite a normal temperature.',
            'The patient is dehydrated and needs fluids only.',
            'Tachycardia is a normal side effect of hydrocortisone.'
          ],
          correct: 1,
          rationale: 'Glucocorticoids suppress the immune and inflammatory response, which can MASK fever — a critical sign of infection. A patient on steroids may have a normal temperature despite having a serious infection. The nurse must assess for OTHER signs of infection (tachycardia, altered mental status, elevated WBC, hypotension) and not rely on temperature alone. This is a crucial safety concept.'
        }
      ],
      y: [
        {
          stem: 'Why should hydrocortisone NEVER be stopped abruptly?',
          options: [
            'It causes rebound hypertension.',
            'Long-term use suppresses the HPA axis — abrupt stopping causes adrenal crisis because the body cannot produce its own cortisol.',
            'It causes withdrawal seizures.',
            'The liver cannot metabolize the remaining drug.'
          ],
          correct: 1,
          rationale: 'Long-term exogenous glucocorticoid use suppresses the hypothalamic-pituitary-adrenal (HPA) axis through negative feedback. The adrenal glands atrophy and cannot produce cortisol independently. Abrupt discontinuation leaves the patient with NO cortisol source, which can trigger life-threatening adrenal crisis. Doses must be tapered gradually to allow the HPA axis to recover.'
        },
        {
          stem: 'When should hydrocortisone be taken?',
          options: [
            'At bedtime to prevent insomnia',
            'In the morning to mimic the natural cortisol peak',
            'With every meal',
            'Only when feeling weak or dizzy'
          ],
          correct: 1,
          rationale: 'Hydrocortisone should be taken in the morning because natural cortisol follows a circadian rhythm with the highest levels in the early morning. Morning dosing mimics this pattern, minimizing sleep disruption and aligning with the body\'s natural hormone cycle.'
        }
      ],
      r: [
        {
          stem: 'Hydrocortisone is the drug of choice for:',
          options: [
            'Hyperthyroidism',
            'Addison\'s disease (adrenal insufficiency)',
            'Diabetes mellitus',
            'Polycythemia vera'
          ],
          correct: 1,
          rationale: 'Hydrocortisone is the prototype drug for Addison\'s disease, providing both glucocorticoid (cortisol) and some mineralocorticoid (aldosterone-like) replacement. It is taken daily for life to replace the hormones the destroyed adrenal glands can no longer produce.'
        }
      ]
    }
  },

  'Steroid Potency Ladder': {
    details: [
      'Glucocorticoids vary in potency, duration, and mineralocorticoid activity',
      'Hydrocortisone: LOW potency, SHORT acting, significant mineralocorticoid effect — used for replacement',
      'Prednisone: INTERMEDIATE potency, intermediate duration — most common oral steroid for inflammation',
      'Methylprednisolone (Solu-Medrol): INTERMEDIATE-HIGH potency — used IV for acute conditions',
      'Dexamethasone: HIGHEST potency (25-30x hydrocortisone), LONG acting, minimal mineralocorticoid — used for cerebral edema, diagnostic tests'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with severe cerebral edema from a brain tumor needs the MOST potent glucocorticoid with the LEAST mineralocorticoid effect. Which drug does the nurse anticipate?',
          options: [
            'Hydrocortisone',
            'Prednisone',
            'Fludrocortisone',
            'Dexamethasone'
          ],
          correct: 3,
          rationale: 'Dexamethasone is the most potent glucocorticoid (25-30x hydrocortisone) with virtually NO mineralocorticoid effect (minimal sodium/water retention). This makes it ideal for cerebral edema where potent anti-inflammatory action is needed without fluid retention that would worsen brain swelling. Hydrocortisone has significant mineralocorticoid activity. Fludrocortisone is a pure mineralocorticoid.'
        },
        {
          stem: 'A nurse is comparing steroid potency. Which statement is correct?',
          options: [
            'Hydrocortisone is the most potent glucocorticoid available.',
            'Prednisone is 4-5x more potent than hydrocortisone; dexamethasone is 25-30x more potent.',
            'All glucocorticoids have the same potency at equivalent doses.',
            'Dexamethasone has the strongest mineralocorticoid effect.'
          ],
          correct: 1,
          rationale: 'Steroid potency increases up the ladder: hydrocortisone (1x, baseline) → prednisone (4-5x) → methylprednisolone (5x) → dexamethasone (25-30x). As glucocorticoid potency increases, mineralocorticoid effect generally decreases. Dexamethasone has minimal mineralocorticoid effect despite being the most potent glucocorticoid.'
        }
      ],
      y: [
        {
          stem: 'Which glucocorticoid is MOST commonly prescribed as an oral anti-inflammatory?',
          options: [
            'Hydrocortisone',
            'Prednisone',
            'Dexamethasone',
            'Fludrocortisone'
          ],
          correct: 1,
          rationale: 'Prednisone is the most commonly prescribed oral glucocorticoid for inflammatory conditions (asthma, autoimmune diseases, allergic reactions). It has intermediate potency (4-5x hydrocortisone) and intermediate duration. Hydrocortisone is mainly for replacement. Dexamethasone is reserved for high-potency needs. Fludrocortisone is a mineralocorticoid.'
        },
        {
          stem: 'As glucocorticoid potency increases (from hydrocortisone to dexamethasone), what happens to mineralocorticoid effect?',
          options: [
            'It increases proportionally.',
            'It generally decreases.',
            'It stays the same.',
            'It becomes unpredictable.'
          ],
          correct: 1,
          rationale: 'As glucocorticoid potency increases up the steroid ladder, mineralocorticoid effect generally decreases. Hydrocortisone has significant mineralocorticoid activity (good for Addison\'s). Dexamethasone has virtually none (good when you want anti-inflammatory without fluid retention).'
        }
      ],
      r: [
        {
          stem: 'Which glucocorticoid has the HIGHEST anti-inflammatory potency?',
          options: [
            'Hydrocortisone',
            'Prednisone',
            'Methylprednisolone',
            'Dexamethasone'
          ],
          correct: 3,
          rationale: 'Dexamethasone is the most potent glucocorticoid, with 25-30 times the anti-inflammatory potency of hydrocortisone. It is used for severe conditions requiring maximum anti-inflammatory effect, such as cerebral edema, severe allergic reactions, and as a diagnostic tool (dexamethasone suppression test).'
        }
      ]
    }
  },

  'Dexamethasone': {
    details: [
      'HIGHEST potency glucocorticoid (25-30x hydrocortisone), LONG-acting, minimal mineralocorticoid effect',
      'Used for: cerebral edema, severe inflammation, antiemetic in chemotherapy, diagnostic test (suppression test)',
      'Dexamethasone suppression test: given to patient → normal adrenals suppress cortisol; Cushing\'s does NOT suppress',
      'Same long-term side effects as all glucocorticoids: Cushing features, hyperglycemia, immunosuppression, osteoporosis',
      'Must be tapered (not stopped abruptly) after prolonged use'
    ],
    questions: {
      g: [
        {
          stem: 'A patient undergoes a dexamethasone suppression test. The next morning, cortisol level is 18 mcg/dL (normal suppression: <1.8 mcg/dL). This result suggests:',
          options: [
            'Normal adrenal function — the test is negative.',
            'Cushing\'s syndrome — the cortisol did NOT suppress despite dexamethasone, indicating autonomous cortisol production.',
            'Addison\'s disease — the cortisol is too high.',
            'The patient did not take the dexamethasone.'
          ],
          correct: 1,
          rationale: 'In the dexamethasone suppression test, normal adrenals respond to exogenous glucocorticoid by SUPPRESSING cortisol production (negative feedback). A cortisol level of 18 (far above the <1.8 suppression threshold) indicates the cortisol source is NOT responding to normal feedback — consistent with Cushing\'s syndrome (autonomous cortisol production from tumor or ectopic source).'
        },
        {
          stem: 'Why is dexamethasone preferred over hydrocortisone for treating cerebral edema?',
          options: [
            'Dexamethasone is cheaper.',
            'Dexamethasone has maximum anti-inflammatory potency with minimal fluid-retaining mineralocorticoid effect.',
            'Hydrocortisone cannot cross the blood-brain barrier.',
            'Dexamethasone has a faster onset of action.'
          ],
          correct: 1,
          rationale: 'Dexamethasone provides the highest anti-inflammatory potency (25-30x hydrocortisone) with virtually NO mineralocorticoid effect (no sodium/water retention). For cerebral edema, you need maximum inflammation reduction without adding fluid retention that would worsen brain swelling. Hydrocortisone\'s mineralocorticoid effect would be counterproductive.'
        }
      ],
      y: [
        {
          stem: 'The dexamethasone suppression test is used to diagnose:',
          options: [
            'Addison\'s disease',
            'Cushing\'s syndrome',
            'Diabetes insipidus',
            'Hypothyroidism'
          ],
          correct: 1,
          rationale: 'The dexamethasone suppression test is used to diagnose Cushing\'s syndrome. Dexamethasone is given and cortisol is measured the next morning. Normal adrenals suppress cortisol production. If cortisol remains elevated, it indicates autonomous cortisol production (Cushing\'s). Addison\'s is diagnosed with the ACTH stimulation test.'
        },
        {
          stem: 'Dexamethasone is classified as a:',
          options: [
            'Short-acting, low-potency glucocorticoid',
            'Long-acting, high-potency glucocorticoid',
            'Mineralocorticoid',
            'Antithyroid drug'
          ],
          correct: 1,
          rationale: 'Dexamethasone is a long-acting, high-potency glucocorticoid — the most potent in its class (25-30x hydrocortisone). It has minimal mineralocorticoid activity, making it useful when strong anti-inflammatory effects are needed without fluid retention.'
        }
      ],
      r: [
        {
          stem: 'In the dexamethasone suppression test, a NORMAL result shows:',
          options: [
            'Cortisol levels increase after dexamethasone',
            'Cortisol levels are suppressed (decreased) after dexamethasone',
            'Cortisol levels remain unchanged',
            'ACTH levels increase dramatically'
          ],
          correct: 1,
          rationale: 'In a normal response, dexamethasone (a potent glucocorticoid) triggers negative feedback on the HPA axis, SUPPRESSING the body\'s own cortisol production. Cortisol levels decrease. If they do NOT suppress, it suggests Cushing\'s syndrome.'
        }
      ]
    }
  },

  'Fludrocortisone (Florinef)': {
    details: [
      'Pure MINERALOCORTICOID replacement — replaces aldosterone activity in Addison\'s disease',
      'MOA: Promotes sodium and water retention; promotes potassium excretion',
      'Used alongside hydrocortisone in Addison\'s (hydrocortisone = glucocorticoid, fludrocortisone = mineralocorticoid)',
      'Adverse effects: hypertension, edema, weight gain (from sodium/water retention); hypokalemia',
      'Monitor: BP, daily weight, serum electrolytes (Na+, K+), peripheral edema'
    ],
    questions: {
      g: [
        {
          stem: 'A patient on fludrocortisone reports muscle cramps and weakness. Serum potassium is 2.9 mEq/L. The nurse understands this is caused by:',
          options: [
            'Inadequate dietary potassium intake.',
            'Fludrocortisone\'s mineralocorticoid effect — it promotes potassium excretion, causing hypokalemia.',
            'An allergic reaction to the medication.',
            'Interaction with the patient\'s calcium supplement.'
          ],
          correct: 1,
          rationale: 'Fludrocortisone replaces aldosterone, which promotes sodium retention and potassium excretion. This mineralocorticoid effect can cause hypokalemia (low K+), manifesting as muscle cramps, weakness, and potentially dangerous cardiac arrhythmias. The nurse should report the finding, anticipate potassium supplementation, and monitor for cardiac effects.'
        },
        {
          stem: 'A patient with Addison\'s disease asks why they need both hydrocortisone AND fludrocortisone. The nurse explains:',
          options: [
            '"They are the same medication in different doses."',
            '"Hydrocortisone replaces cortisol (glucocorticoid) and fludrocortisone replaces aldosterone (mineralocorticoid) — your adrenal glands made both, so both need replacing."',
            '"Fludrocortisone prevents side effects of hydrocortisone."',
            '"You only need one — the doctor will discontinue the other soon."'
          ],
          correct: 1,
          rationale: 'The adrenal cortex produces both glucocorticoids (cortisol) and mineralocorticoids (aldosterone). In Addison\'s disease, both are deficient. Hydrocortisone replaces cortisol (regulates metabolism, stress response, inflammation). Fludrocortisone replaces aldosterone (regulates sodium/potassium/water balance). Both are needed for complete replacement.'
        }
      ],
      y: [
        {
          stem: 'Which adverse effect should the nurse monitor for in a patient taking fludrocortisone?',
          options: [
            'Hypoglycemia',
            'Hypertension and peripheral edema',
            'Hypothermia',
            'Leukopenia'
          ],
          correct: 1,
          rationale: 'Fludrocortisone promotes sodium and water retention (mineralocorticoid effect), which can cause hypertension, peripheral edema, and weight gain. The nurse should monitor blood pressure, daily weights, and assess for ankle swelling. Patients may need a low-sodium diet if fluid retention becomes problematic.'
        },
        {
          stem: 'Fludrocortisone replaces the function of which hormone?',
          options: [
            'Cortisol',
            'Aldosterone',
            'ADH (vasopressin)',
            'Thyroid hormone'
          ],
          correct: 1,
          rationale: 'Fludrocortisone is a synthetic mineralocorticoid that replaces aldosterone function. Aldosterone regulates sodium/potassium balance and fluid volume. In Addison\'s disease, aldosterone deficiency causes hyponatremia (sodium loss) and hyperkalemia (potassium retention). Fludrocortisone corrects this.'
        }
      ],
      r: [
        {
          stem: 'Fludrocortisone promotes retention of ____ and excretion of ____.',
          options: [
            'Potassium; sodium',
            'Sodium and water; potassium',
            'Calcium; phosphate',
            'Glucose; insulin'
          ],
          correct: 1,
          rationale: 'Fludrocortisone (like aldosterone) promotes sodium and water retention while promoting potassium excretion. This is why its side effects include hypertension/edema (too much sodium/water) and hypokalemia (too much potassium lost).'
        }
      ]
    }
  },

  'Steroid Side Effects': {
    details: [
      'Cushing features: moon face, buffalo hump, trunk obesity, thin extremities, purple striae, fragile skin',
      'Metabolic: hyperglycemia (cortisol raises glucose), osteoporosis, muscle wasting, poor wound healing',
      'Immune: immunosuppression (masks infection signs, increases infection risk), masks fever',
      'GI: peptic ulcers (especially with NSAIDs), GI bleeding',
      'Other: mood changes/psychosis, cataracts, adrenal suppression (HPA axis), growth suppression in children'
    ],
    questions: {
      g: [
        {
          stem: 'A patient on long-term prednisone falls and sustains a hip fracture from minimal trauma. The nurse understands this is related to:',
          options: [
            'The patient\'s age is the only factor.',
            'Glucocorticoid-induced osteoporosis — steroids promote bone resorption and decrease calcium absorption, weakening bones.',
            'A side effect of the disease being treated, not the medication.',
            'Prednisone-induced muscle weakness that caused the fall, not bone weakness.'
          ],
          correct: 1,
          rationale: 'Long-term glucocorticoids cause osteoporosis through multiple mechanisms: they increase bone resorption (osteoclast activity), decrease calcium absorption from the gut, increase renal calcium excretion, and inhibit osteoblast function. This leads to fragile bones susceptible to pathologic fractures from minimal trauma. Patients on long-term steroids should receive calcium, vitamin D, and bone density monitoring.'
        },
        {
          stem: 'A patient on chronic prednisone therapy asks why their blood glucose has been elevated lately. The nurse explains:',
          options: [
            '"Prednisone has no effect on blood glucose."',
            '"Glucocorticoids are counter-regulatory hormones that raise blood glucose by increasing liver gluconeogenesis and causing insulin resistance."',
            '"The elevated glucose is from the disease you\'re treating, not the medication."',
            '"Only hydrocortisone affects blood glucose, not prednisone."'
          ],
          correct: 1,
          rationale: 'ALL glucocorticoids raise blood glucose — they stimulate hepatic gluconeogenesis (liver produces more glucose) and cause insulin resistance in peripheral tissues. This can unmask diabetes in predisposed patients or worsen control in existing diabetics. Blood glucose should be monitored in all patients on chronic steroids. The dose of diabetic medications may need to be increased.'
        }
      ],
      y: [
        {
          stem: 'Which body changes indicate Cushing-like effects from long-term steroid use?',
          options: [
            'Weight loss, hyperpigmentation, and hypotension',
            'Moon face, buffalo hump, trunk obesity, and purple striae',
            'Enlarged hands, feet, and jaw',
            'Exophthalmos, tremors, and weight loss'
          ],
          correct: 1,
          rationale: 'Cushing features from steroids include: moon face (round, puffy), buffalo hump (fat deposit at base of neck), trunk/central obesity with thin extremities, purple striae (stretch marks), fragile skin, and easy bruising. Weight loss and hyperpigmentation suggest Addison\'s. Enlarged extremities suggest acromegaly. Exophthalmos suggests Graves\' disease.'
        },
        {
          stem: 'Why should patients on long-term glucocorticoids take calcium and vitamin D supplements?',
          options: [
            'To prevent hyperkalemia',
            'To prevent glucocorticoid-induced osteoporosis',
            'To enhance the anti-inflammatory effect',
            'To prevent weight gain'
          ],
          correct: 1,
          rationale: 'Glucocorticoids cause osteoporosis by decreasing calcium absorption and increasing bone resorption. Calcium and vitamin D supplementation help counteract this bone loss. Bone density monitoring (DEXA scans) is also recommended for patients on long-term steroids.'
        }
      ],
      r: [
        {
          stem: 'Long-term glucocorticoid use increases the risk of infection because:',
          options: [
            'Steroids directly kill white blood cells.',
            'Steroids suppress the immune system and mask signs of infection (including fever).',
            'Steroids cause bacteria to grow faster.',
            'Steroids prevent antibiotic absorption.'
          ],
          correct: 1,
          rationale: 'Glucocorticoids suppress the immune and inflammatory response, making patients more susceptible to infections AND masking the typical signs of infection (fever, redness, swelling, pain). A patient on steroids may have a serious infection without obvious symptoms, making careful assessment crucial.'
        }
      ]
    }
  }

};

console.log('DRUG_DEEP_AH_ENDOCRINE_V2 loaded:', Object.keys(window.DRUG_DEEP_AH_ENDOCRINE_V2).length, 'topics');
