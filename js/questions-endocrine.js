// ══════════════════════════════════════════════
// NCLEX Questions — ENDOCRINE GROUP (17 drugs × 9 questions = 153 total)
// 3 difficulty levels: g=green(hardest), y=yellow(moderate), r=red(foundational)
// Thyroid (7) + Pituitary (6) + Adrenal (4)
// Generated: 2026-03-22
// ══════════════════════════════════════════════

window.DRUG_DEEP_ENDOCRINE = {

  // ═══ THYROID DRUGS (7) ═══


  'Levothyroxine (Synthroid)': {
    details: [
      'Synthetic T4 replacement for hypothyroidism — drug of choice, lifelong therapy',
      '4S Rule: Same time daily, Stomach empty (30-60 min before breakfast), Separate from calcium/iron by 4 hours, Six-to-eight weeks for TSH to stabilize',
      'Narrow therapeutic index — small dose changes cause big effects; monitor TSH every 6-8 weeks until stable',
      'Signs of overdose mimic HYPERthyroidism: tachycardia, heat intolerance, weight loss, tremors, insomnia',
      'Myxedema coma emergency: IV levothyroxine, passive rewarming only — NO heating pads (vasodilation causes hypotension)',
      'Drug interactions: antacids, calcium, iron, cholestyramine, sucralfate all decrease absorption'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with hypothyroidism who has been taking levothyroxine (Synthroid) 100 mcg daily for 2 years presents to the clinic with a heart rate of 112 bpm, unintentional weight loss of 8 lbs over 2 weeks, and reports of feeling "jittery and unable to sleep." TSH is 0.1 mIU/L (normal 0.5-4.5). Which action should the nurse anticipate FIRST?',
          options: [
            'A) Discontinue levothyroxine immediately and recheck TSH in 48 hours',
            'B) Notify the provider to decrease the levothyroxine dose',
            'C) Administer propranolol to control the tachycardia',
            'D) Order a thyroid ultrasound to rule out new-onset Graves disease'
          ],
          correct: 1,
          rationale: 'The suppressed TSH (0.1) with symptoms of hyperthyroidism indicates levothyroxine overreplacement — the dose needs to be reduced. Option A is the trap: abruptly stopping thyroid replacement can precipitate myxedema crisis; dose is adjusted down, not stopped. Option C treats the symptom but not the cause, and would be a dependent nursing action ordered by the provider alongside the dose change. Option D is unnecessary — the patient has a known cause (exogenous levothyroxine), not new-onset Graves.'
        },
        {
          stem: 'A nurse is caring for a patient found unresponsive with a temperature of 93.4F (34.1C), heart rate 42 bpm, blood pressure 78/50, and a history of hypothyroidism. The patient\'s spouse reports the patient stopped taking levothyroxine 3 months ago. Which nursing intervention should the nurse AVOID?',
          options: [
            'A) Applying warm blankets and raising the room temperature gradually',
            'B) Applying a heating pad to the trunk to restore core body temperature quickly',
            'C) Preparing for IV levothyroxine administration as prescribed',
            'D) Monitoring continuous cardiac telemetry and pulse oximetry'
          ],
          correct: 1,
          rationale: 'This is myxedema coma — a life-threatening hypothyroid emergency. Active/external rewarming with heating pads causes rapid peripheral vasodilation, worsening hypotension and potentially causing cardiovascular collapse. PASSIVE rewarming only (warm blankets, warm room). Option A is correct passive rewarming. Option C is the primary treatment — IV levothyroxine. Option D is appropriate monitoring for a critically ill patient with bradycardia.'
        },
        {
          stem: 'A patient taking levothyroxine (Synthroid) 75 mcg daily also takes calcium carbonate 600 mg with vitamin D for osteoporosis prevention. The patient reports taking both medications together every morning at 7:00 AM with breakfast. The most recent TSH is 8.2 mIU/L (normal 0.5-4.5). Which intervention is MOST appropriate?',
          options: [
            'A) Notify the provider to increase the levothyroxine dose since the TSH is elevated',
            'B) Instruct the patient to take levothyroxine at 6:00 AM on an empty stomach and calcium at 10:00 AM or later',
            'C) Recommend the patient switch from calcium carbonate to calcium citrate to avoid the interaction',
            'D) Suggest the patient take both medications at bedtime instead of in the morning'
          ],
          correct: 1,
          rationale: 'TRAP: The elevated TSH is not from an inadequate dose — it is from calcium binding to levothyroxine in the GI tract and blocking absorption. The fix is separation, not a dose increase. Levothyroxine must be taken on an empty stomach 30-60 minutes before eating, and calcium/iron must be separated by at least 4 hours. Option A is the classic trap — increasing the dose treats the wrong problem and could cause toxicity once the interaction is corrected. Option C is wrong because ALL forms of calcium interfere (not just carbonate). Option D — taking both at bedtime still does not separate them.'
        }
      ],
      y: [
        {
          stem: 'A nurse is providing discharge teaching to a patient newly prescribed levothyroxine (Synthroid) 50 mcg daily for hypothyroidism. Which patient statement indicates a need for further teaching?',
          options: [
            'A) "I will take this pill first thing in the morning on an empty stomach."',
            'B) "I should wait 30 to 60 minutes after taking this pill before eating breakfast."',
            'C) "Once my thyroid levels are normal, I can stop taking this medication."',
            'D) "I will keep my follow-up appointment in 6 weeks to recheck my TSH."'
          ],
          correct: 2,
          rationale: 'Hypothyroidism requires lifelong levothyroxine therapy — the thyroid gland does not recover. Stopping the medication will cause TSH to rise and symptoms to return. Option A is correct administration technique. Option B is correct timing for absorption. Option D is correct — TSH should be rechecked in 6-8 weeks after starting or changing the dose.'
        },
        {
          stem: 'A nurse is reviewing the medication administration record for a patient taking levothyroxine (Synthroid). Which scheduled medication should the nurse plan to administer at a different time than the levothyroxine?',
          options: [
            'A) Lisinopril (Zestril) 10 mg daily',
            'B) Atorvastatin (Lipitor) 20 mg daily',
            'C) Ferrous sulfate (iron supplement) 325 mg daily',
            'D) Omeprazole (Prilosec) 20 mg daily before dinner'
          ],
          correct: 2,
          rationale: 'Iron (ferrous sulfate) binds to levothyroxine in the GI tract and significantly reduces its absorption. Iron must be separated from levothyroxine by at least 4 hours. Option A (ACE inhibitor) and Option B (statin) do not interfere with levothyroxine absorption. Option D — while PPIs can slightly affect levothyroxine absorption, omeprazole before dinner is already separated from a morning levothyroxine dose and is a weaker interaction than iron.'
        },
        {
          stem: 'A patient with hypothyroidism has been taking levothyroxine (Synthroid) for 4 weeks. The patient calls the clinic stating, "I still feel tired and cold all the time. This medication is not working." Which response by the nurse is MOST appropriate?',
          options: [
            'A) "You should double your dose until your symptoms improve."',
            'B) "Levothyroxine takes 6 to 8 weeks to reach full effect. Continue the medication and keep your follow-up appointment."',
            'C) "Stop the medication and I will have the provider call in a different thyroid drug."',
            'D) "Come to the emergency department immediately for evaluation of myxedema coma."'
          ],
          correct: 1,
          rationale: 'Levothyroxine has a long half-life (6-7 days) and takes 6-8 weeks to reach steady state and full therapeutic effect. Four weeks is too early to judge effectiveness — the TSH recheck at 6-8 weeks will guide dose adjustments. Option A is dangerous — patients should never self-adjust doses of narrow therapeutic index drugs. Option C is premature — the drug has not had time to work. Option D — the patient is ambulatory and calling the clinic, not showing signs of myxedema coma.'
        }
      ],
      r: [
        {
          stem: 'A nurse is administering morning medications. Which instruction is correct for levothyroxine (Synthroid) administration?',
          options: [
            'A) Give with a full meal to prevent stomach upset',
            'B) Give on an empty stomach 30 to 60 minutes before breakfast',
            'C) Give at bedtime with a glass of milk',
            'D) Give with the patient\'s morning calcium supplement'
          ],
          correct: 1,
          rationale: 'Levothyroxine must be taken on an empty stomach 30-60 minutes before the first meal of the day for optimal absorption. Food, calcium, iron, and dairy products all decrease absorption. Option A — food decreases absorption. Option C — milk contains calcium which binds levothyroxine. Option D — calcium must be separated by 4 hours.'
        },
        {
          stem: 'A patient with hypothyroidism asks the nurse which laboratory test will be used to monitor the effectiveness of levothyroxine (Synthroid) therapy. Which response is correct?',
          options: [
            'A) Complete blood count (CBC)',
            'B) Thyroid-stimulating hormone (TSH)',
            'C) Hemoglobin A1C',
            'D) Liver function tests (LFTs)'
          ],
          correct: 1,
          rationale: 'TSH is the most sensitive test for monitoring thyroid replacement therapy. In hypothyroidism, TSH is elevated; effective levothyroxine therapy brings TSH into the normal range (0.5-4.5 mIU/L). Option A monitors blood cells, not thyroid function. Option C monitors long-term glucose control. Option D monitors liver function — not relevant to thyroid monitoring.'
        },
        {
          stem: 'A nurse is assessing a patient taking levothyroxine (Synthroid) 125 mcg daily. Which finding would suggest the patient is receiving too much medication?',
          options: [
            'A) Weight gain and constipation',
            'B) Tachycardia and heat intolerance',
            'C) Bradycardia and cold intolerance',
            'D) Fatigue and dry skin'
          ],
          correct: 1,
          rationale: 'Levothyroxine toxicity produces signs of hyperthyroidism: tachycardia, heat intolerance, weight loss, tremors, anxiety, insomnia. Options A, C, and D all describe symptoms of hypothyroidism — meaning the dose is too LOW, not too high.'
        }
      ]
    }
  },

  'Methimazole (Tapazole)': {
    details: [
      'Preferred antithyroid drug for hyperthyroidism (Graves disease) — inhibits thyroid hormone synthesis',
      'CONTRAINDICATED in 1st trimester of pregnancy — teratogenic (can cause aplasia cutis/scalp defects)',
      'Agranulocytosis: most dangerous adverse effect — report fever + sore throat IMMEDIATELY, check CBC with differential',
      'Monitor liver function tests (LFTs) — hepatotoxicity is possible',
      'Takes 3-8 weeks for full therapeutic effect — beta-blockers control symptoms in the meantime',
      'Once-daily dosing (advantage over PTU which requires TID dosing) — improves adherence'
    ],
    questions: {
      g: [
        {
          stem: 'A patient who has been taking methimazole (Tapazole) for 6 weeks for Graves disease calls the clinic reporting a temperature of 101.8F, severe sore throat, and difficulty swallowing that began yesterday. Which action should the nurse take FIRST?',
          options: [
            'A) Instruct the patient to take acetaminophen and gargle with salt water',
            'B) Advise the patient to stop taking methimazole immediately and come in for a stat CBC with differential',
            'C) Reassure the patient this is likely a viral infection and schedule a routine appointment',
            'D) Instruct the patient to continue methimazole and go to urgent care for a rapid strep test'
          ],
          correct: 1,
          rationale: 'Fever + sore throat in a patient on methimazole is agranulocytosis until proven otherwise. The absolute neutrophil count (ANC) must be checked immediately — if ANC <500, the patient has no immune defense against infection. The drug must be held pending results. Option A delays a potentially fatal diagnosis. Option C is dangerous — this is not routine. Option D — continuing the drug that may be causing the agranulocytosis while getting a strep test misses the critical concern entirely.'
        },
        {
          stem: 'A patient with newly diagnosed Graves disease discovers she is 6 weeks pregnant. The provider has been considering antithyroid therapy. Which medication concern should the nurse communicate to the provider?',
          options: [
            'A) Methimazole is safe in pregnancy and should be started immediately',
            'B) Methimazole is teratogenic in the first trimester — PTU is the recommended alternative until the second trimester',
            'C) Both methimazole and PTU are absolutely contraindicated throughout all trimesters of pregnancy',
            'D) Radioactive iodine therapy should be used instead of antithyroid medications during pregnancy'
          ],
          correct: 1,
          rationale: 'Methimazole is teratogenic in the 1st trimester (associated with aplasia cutis and choanal atresia). PTU is the drug of choice during the 1st trimester, then switched to methimazole in the 2nd trimester (because PTU carries a hepatotoxicity risk). Option A is dangerous — methimazole must be avoided in the 1st trimester. Option C is incorrect — PTU is safe in the 1st trimester. Option D — radioactive iodine is ABSOLUTELY contraindicated in pregnancy (destroys fetal thyroid).'
        },
        {
          stem: 'A patient taking methimazole (Tapazole) for Graves disease has the following lab results: WBC 2,100/mm3 (normal 5,000-10,000), ANC 400/mm3 (normal >1,500), ALT 42 U/L (normal 7-56). Which finding is MOST concerning and requires the nurse to hold the medication?',
          options: [
            'A) The elevated ALT indicating hepatotoxicity',
            'B) The critically low ANC indicating agranulocytosis',
            'C) The low WBC alone, which is expected during antithyroid therapy',
            'D) All values are within expected parameters for methimazole therapy'
          ],
          correct: 1,
          rationale: 'An ANC of 400 is critically low (<500 = severe neutropenia/agranulocytosis). This patient has virtually no neutrophils to fight infection and is at immediate risk for life-threatening sepsis. Methimazole must be stopped immediately. Option A — the ALT of 42 is actually within normal limits (7-56 U/L), not elevated. Option C — mild WBC depression may occur, but ANC <500 is never "expected." Option D is incorrect — ANC 400 is a medical emergency.'
        }
      ],
      y: [
        {
          stem: 'A nurse is teaching a patient newly prescribed methimazole (Tapazole) for hyperthyroidism. Which statement by the patient indicates correct understanding of when to seek emergency care?',
          options: [
            'A) "I should go to the ER if I notice my hair is thinning."',
            'B) "I should go to the ER if I develop a fever with a severe sore throat."',
            'C) "I should go to the ER if I gain more than 2 pounds in a week."',
            'D) "I should go to the ER if I feel more energetic than usual."'
          ],
          correct: 1,
          rationale: 'Fever + sore throat are hallmark signs of agranulocytosis, the most dangerous adverse effect of methimazole. This requires immediate CBC with differential. Option A — hair thinning can occur with both hyper- and hypothyroidism but is not an emergency. Option C — weight gain may indicate the drug is working (slowing metabolism back to normal). Option D — increased energy is not an emergency sign related to methimazole.'
        },
        {
          stem: 'A patient with Graves disease is being treated with methimazole (Tapazole). The nurse notes the provider also ordered propranolol (Inderal) 20 mg TID. The patient asks why two medications are needed. Which response by the nurse is MOST accurate?',
          options: [
            'A) "Propranolol helps the methimazole work faster to lower your thyroid hormones."',
            'B) "Methimazole takes weeks to lower thyroid hormones, so propranolol controls your heart rate and tremors in the meantime."',
            'C) "Propranolol is an antithyroid drug that works by a different mechanism than methimazole."',
            'D) "Both medications lower thyroid hormone production, but through different pathways."'
          ],
          correct: 1,
          rationale: 'Methimazole blocks thyroid hormone synthesis but takes 3-8 weeks for full effect because existing stored hormones must be depleted first. Propranolol (a beta-blocker) controls the sympathetic symptoms (tachycardia, tremors, anxiety) but does NOT lower thyroid hormone levels. Option A is wrong — propranolol does not affect thyroid hormone levels at all. Option C is wrong — propranolol is a beta-blocker, not an antithyroid drug. Option D is wrong — propranolol does not affect thyroid hormone production.'
        },
        {
          stem: 'A nurse is reviewing orders for a patient taking methimazole (Tapazole). Which laboratory tests should the nurse expect to monitor during therapy? Select the BEST combination.',
          options: [
            'A) TSH, free T4, and hemoglobin A1C',
            'B) CBC with differential and liver function tests',
            'C) BUN, creatinine, and urinalysis',
            'D) Serum calcium and phosphorus levels'
          ],
          correct: 1,
          rationale: 'Methimazole requires monitoring of CBC with differential (for agranulocytosis — WBC/ANC) and LFTs (for hepatotoxicity). While TSH and free T4 are also monitored to assess therapeutic effect, the question asks about monitoring for adverse drug effects. Option A — A1C is for diabetes monitoring. Option C — renal function is not a primary concern with methimazole. Option D — calcium/phosphorus relate to parathyroid function, not antithyroid drug monitoring.'
        }
      ],
      r: [
        {
          stem: 'A nurse is caring for a patient with Graves disease. Which medication is the preferred first-line antithyroid drug for long-term management in non-pregnant patients?',
          options: [
            'A) Propylthiouracil (PTU)',
            'B) Methimazole (Tapazole)',
            'C) Levothyroxine (Synthroid)',
            'D) Radioactive iodine (I-131)'
          ],
          correct: 1,
          rationale: 'Methimazole is the preferred antithyroid drug for non-pregnant patients because it has once-daily dosing, fewer side effects, and a lower risk of hepatotoxicity compared to PTU. Option A — PTU is reserved for 1st trimester pregnancy and thyroid storm. Option C — levothyroxine treats HYPOthyroidism, not hyperthyroidism. Option D — I-131 is a treatment option but is not a "first-line" antithyroid medication and destroys the gland permanently.'
        },
        {
          stem: 'Methimazole (Tapazole) treats hyperthyroidism by which mechanism of action?',
          options: [
            'A) Destroying thyroid gland tissue with radiation',
            'B) Inhibiting the synthesis of new thyroid hormones',
            'C) Blocking beta-adrenergic receptors to reduce symptoms',
            'D) Replacing deficient thyroid hormones'
          ],
          correct: 1,
          rationale: 'Methimazole inhibits the enzyme thyroid peroxidase, which is required for the synthesis of T3 and T4. It stops new hormone production but does not destroy existing hormones (which is why it takes weeks to work). Option A describes radioactive iodine (I-131). Option C describes propranolol (beta-blocker). Option D describes levothyroxine (thyroid replacement).'
        },
        {
          stem: 'A nurse is reviewing adverse effects of methimazole (Tapazole). Which adverse effect is the MOST dangerous and requires immediate drug discontinuation?',
          options: [
            'A) Mild skin rash',
            'B) Nausea and GI upset',
            'C) Agranulocytosis',
            'D) Temporary hair loss'
          ],
          correct: 2,
          rationale: 'Agranulocytosis (severe drop in neutrophils/WBCs) is the most dangerous adverse effect of methimazole. Without white blood cells, the patient cannot fight infections and can develop fatal sepsis. The drug must be stopped immediately. Option A — rash may occur but is not life-threatening. Option B — GI upset is common but manageable. Option D — hair loss is distressing but not dangerous.'
        }
      ]
    }
  },

  'PTU (Propylthiouracil)': {
    details: [
      'Antithyroid drug reserved for two specific situations: 1st trimester pregnancy + thyroid storm',
      'BLACK BOX WARNING: Severe hepatotoxicity (liver failure, liver transplant, death) — monitor LFTs',
      'Unique advantage: blocks peripheral conversion of T4 to T3 (methimazole does NOT do this) — critical in thyroid storm',
      'Switch to methimazole after 1st trimester due to hepatotoxicity risk',
      'Dosing: TID (three times daily) — less convenient than methimazole once-daily',
      'Also causes agranulocytosis — same fever/sore throat warning as methimazole'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with Graves disease develops thyroid storm with a heart rate of 188 bpm, temperature of 104.6F, and altered mental status. The provider orders antithyroid therapy. Which drug should the nurse anticipate administering FIRST and why?',
          options: [
            'A) Methimazole — it is the preferred antithyroid drug with fewer side effects',
            'B) PTU — it blocks both thyroid hormone synthesis AND peripheral T4-to-T3 conversion',
            'C) Radioactive iodine — it will permanently eliminate the source of excess hormones',
            'D) Lugol\'s solution — iodine will immediately suppress thyroid hormone release'
          ],
          correct: 1,
          rationale: 'In thyroid storm, PTU is preferred over methimazole because PTU has a unique dual mechanism: it inhibits new thyroid hormone synthesis AND blocks the peripheral conversion of T4 to the more active T3. This provides faster reduction in active thyroid hormone. Option A — methimazole only blocks synthesis, not conversion. Option C — radioactive iodine is contraindicated in thyroid storm (too slow and can initially worsen the crisis). Option D — iodine must be given AFTER PTU (at least 1 hour) to prevent providing substrate for more hormone production.'
        },
        {
          stem: 'A patient who is 8 weeks pregnant with Graves disease has been stabilized on PTU (propylthiouracil) for 5 weeks. At her 14-week prenatal visit, the nurse notes the provider is continuing PTU. Which action by the nurse is MOST appropriate?',
          options: [
            'A) Continue administering PTU as ordered since the patient is stable on this regimen',
            'B) Question the provider about switching from PTU to methimazole now that the patient has entered the second trimester',
            'C) Recommend the provider discontinue all antithyroid medications since the patient is past the first trimester',
            'D) Suggest radioactive iodine therapy as a permanent solution before the third trimester'
          ],
          correct: 1,
          rationale: 'PTU is used ONLY during the 1st trimester (because methimazole is teratogenic in the 1st trimester). After the 1st trimester, the patient should be switched to methimazole because PTU carries a Black Box Warning for hepatotoxicity. The nurse should advocate for this switch. Option A misses the guideline to switch. Option C — uncontrolled hyperthyroidism in pregnancy is dangerous to both mother and fetus. Option D — radioactive iodine is ABSOLUTELY contraindicated in pregnancy (destroys fetal thyroid gland).'
        },
        {
          stem: 'A patient taking PTU (propylthiouracil) for 3 months reports dark-colored urine, clay-colored stools, and right upper quadrant abdominal pain. ALT is 580 U/L (normal 7-56) and total bilirubin is 4.2 mg/dL (normal 0.1-1.2). Which action should the nurse take FIRST?',
          options: [
            'A) Hold the PTU and notify the provider immediately — these are signs of hepatotoxicity',
            'B) Continue PTU and schedule a follow-up in 2 weeks to recheck liver function',
            'C) Administer N-acetylcysteine as the standard antidote for PTU hepatotoxicity',
            'D) Switch to a higher dose of PTU since the current dose may not be controlling hyperthyroidism'
          ],
          correct: 0,
          rationale: 'Dark urine, clay-colored stools, RUQ pain, ALT 580 (10x normal), and elevated bilirubin are classic signs of severe hepatotoxicity — the Black Box Warning for PTU. The drug must be stopped immediately and the provider notified. Option B is dangerous — hepatotoxicity from PTU can progress to liver failure and death. Option C — while NAC is used for acetaminophen toxicity, it is not the standard treatment for PTU-induced hepatotoxicity. Option D is the opposite of what should be done.'
        }
      ],
      y: [
        {
          stem: 'A nursing student asks why PTU (propylthiouracil) is preferred over methimazole specifically in thyroid storm. Which response by the nurse preceptor is MOST accurate?',
          options: [
            'A) "PTU has a faster onset of action than methimazole."',
            'B) "PTU blocks the conversion of T4 to T3 in peripheral tissues, which methimazole does not do."',
            'C) "PTU has fewer side effects than methimazole in critically ill patients."',
            'D) "PTU can be given intravenously, while methimazole is oral only."'
          ],
          correct: 1,
          rationale: 'PTU uniquely blocks the peripheral conversion of T4 to the more active T3, providing a faster reduction in circulating active thyroid hormone during a thyroid storm crisis. Methimazole only blocks new hormone synthesis. Option A — both drugs have a similar onset; the advantage is the dual mechanism, not speed. Option C — PTU actually has MORE side effects (BBW hepatotoxicity). Option D — neither PTU nor methimazole is typically given IV (PTU is given orally or via NG tube in thyroid storm).'
        },
        {
          stem: 'A nurse is caring for a patient on PTU (propylthiouracil). Which assessment finding should the nurse report to the provider IMMEDIATELY?',
          options: [
            'A) Mild nausea after taking the medication',
            'B) Weight gain of 3 pounds over the past month',
            'C) Jaundice and right upper quadrant tenderness',
            'D) Slight drowsiness in the afternoon'
          ],
          correct: 2,
          rationale: 'Jaundice and RUQ tenderness are signs of hepatotoxicity — the Black Box Warning for PTU. This requires immediate reporting and drug discontinuation. Option A — mild nausea is a common, non-emergent side effect. Option B — weight gain is actually expected as hyperthyroidism is controlled (metabolism slows to normal). Option D — drowsiness is not a characteristic adverse effect requiring urgent reporting.'
        },
        {
          stem: 'A nurse is providing education to a patient prescribed PTU (propylthiouracil) during the first trimester of pregnancy. Which statement by the patient indicates understanding of the treatment plan?',
          options: [
            'A) "I will take PTU throughout my entire pregnancy since it is the safest option."',
            'B) "I will switch from PTU to methimazole once I enter my second trimester."',
            'C) "I can stop all thyroid medication once I feel better during pregnancy."',
            'D) "I should take PTU with my prenatal vitamin to improve absorption."'
          ],
          correct: 1,
          rationale: 'The guideline is PTU in the 1st trimester (because methimazole is teratogenic early in pregnancy), then switch to methimazole in the 2nd trimester (because PTU carries a hepatotoxicity risk). Option A is incorrect — PTU should not be used throughout pregnancy due to liver risk. Option C is dangerous — uncontrolled hyperthyroidism causes complications for mother and fetus. Option D — there is no reason to take PTU with a prenatal vitamin (and iron in the vitamin could affect absorption).'
        }
      ],
      r: [
        {
          stem: 'Which serious adverse effect carries a BLACK BOX WARNING for PTU (propylthiouracil)?',
          options: [
            'A) Agranulocytosis',
            'B) Severe hepatotoxicity',
            'C) Nephrotoxicity',
            'D) Cardiotoxicity'
          ],
          correct: 1,
          rationale: 'PTU carries a Black Box Warning for severe hepatotoxicity including liver failure requiring transplantation and death. This is the primary reason PTU is no longer first-line (reserved for 1st trimester pregnancy and thyroid storm only). Option A — agranulocytosis occurs with both PTU and methimazole but is not the BBW for PTU. Option C — nephrotoxicity is not a characteristic adverse effect. Option D — cardiotoxicity is not associated with PTU.'
        },
        {
          stem: 'A nurse is reviewing the use of PTU (propylthiouracil) in pregnancy. During which trimester is PTU the preferred antithyroid drug?',
          options: [
            'A) First trimester only',
            'B) Second trimester only',
            'C) Third trimester only',
            'D) All three trimesters'
          ],
          correct: 0,
          rationale: 'PTU is used in the 1st trimester because methimazole is teratogenic during early fetal development (risk of aplasia cutis and other birth defects). After the 1st trimester, the patient is switched to methimazole to avoid the hepatotoxicity risk of PTU. Options B, C, and D are all incorrect — PTU use is specifically limited to the 1st trimester.'
        },
        {
          stem: 'PTU (propylthiouracil) has a unique mechanism that makes it preferred in thyroid storm. Which additional action does PTU have that methimazole does not?',
          options: [
            'A) Blocks thyroid hormone synthesis',
            'B) Blocks peripheral conversion of T4 to T3',
            'C) Destroys thyroid gland cells',
            'D) Blocks beta-adrenergic receptors'
          ],
          correct: 1,
          rationale: 'PTU blocks both thyroid hormone synthesis (shared with methimazole) AND the peripheral conversion of T4 to the more active T3 (unique to PTU). This dual mechanism makes it preferred in thyroid storm where rapid reduction of active thyroid hormone is critical. Option A — both PTU and methimazole block synthesis. Option C — that describes radioactive iodine (I-131). Option D — that describes propranolol (a beta-blocker).'
        }
      ]
    }
  },

  'Radioactive Iodine (I-131)': {
    details: [
      'Ablation therapy — destroys thyroid gland tissue permanently using targeted radiation',
      'ABSOLUTE contraindication: pregnancy (destroys fetal thyroid) and breastfeeding',
      'Radiation isolation precautions: 5-7 days — separate utensils, flush toilet twice, distance from pregnant women and children',
      'Expected outcome: hypothyroidism — patient will need lifelong levothyroxine replacement',
      'Pre-treatment: stop antithyroid drugs 3-7 days before (to allow thyroid to absorb the iodine)',
      'Full effect takes 6-8 weeks — symptoms may temporarily worsen before improving'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with Graves disease is scheduled for radioactive iodine (I-131) therapy tomorrow. During the pre-procedure assessment, the patient mentions her pregnancy test from last month was negative and she has not been retested. Which action by the nurse is MOST important?',
          options: [
            'A) Proceed with I-131 therapy since the patient had a recent negative pregnancy test',
            'B) Obtain a pregnancy test today before administering I-131 — pregnancy is an absolute contraindication',
            'C) Ask the patient if she thinks she might be pregnant and proceed based on her response',
            'D) Administer I-131 but at a lower dose to reduce any potential fetal risk'
          ],
          correct: 1,
          rationale: 'Pregnancy is an ABSOLUTE contraindication for I-131 because it destroys fetal thyroid tissue, causing permanent congenital hypothyroidism or fetal death. A pregnancy test from last month is not current — a negative test must be obtained on the day of or immediately before the procedure. Option A is unsafe — the test is too old. Option C — patient self-report is not sufficient for an absolute contraindication. Option D — there is NO safe dose of I-131 in pregnancy; any dose destroys the fetal thyroid.'
        },
        {
          stem: 'A patient received radioactive iodine (I-131) therapy 4 months ago for Graves disease. Recent labs show TSH 12.8 mIU/L (normal 0.5-4.5) and free T4 0.4 ng/dL (normal 0.8-2.4). The patient is concerned and asks, "Did the treatment fail?" Which response by the nurse is MOST accurate?',
          options: [
            'A) "Yes, the treatment failed. You will likely need a second dose of I-131."',
            'B) "Your labs show hypothyroidism, which is the expected outcome after I-131. You will need thyroid replacement medication."',
            'C) "These results indicate your Graves disease has come back and you need methimazole."',
            'D) "These labs are temporarily abnormal. Your thyroid will recover on its own in a few months."'
          ],
          correct: 1,
          rationale: 'Hypothyroidism is the EXPECTED and DESIRED outcome of I-131 therapy — the goal is to destroy the overactive thyroid gland. The patient will then take levothyroxine (Synthroid) for lifelong thyroid replacement. Option A is wrong — this is success, not failure. Option C is incorrect — the high TSH and low T4 indicate hypothyroidism, not hyperthyroidism recurrence. Option D is incorrect — the thyroid gland has been ablated and will not recover.'
        },
        {
          stem: 'A nurse is providing discharge teaching to a patient who received I-131 therapy today. The patient lives with a pregnant spouse and a 3-year-old child. Which instruction is HIGHEST priority?',
          options: [
            'A) "Sleep in a separate room for at least 5 days and maintain a 6-foot distance from your pregnant spouse and child."',
            'B) "You can resume all normal household activities but should avoid kissing for 24 hours."',
            'C) "These precautions only apply to the first 48 hours after treatment."',
            'D) "Only your pregnant spouse needs to maintain distance — young children are not affected by radiation."'
          ],
          correct: 0,
          rationale: 'Pregnant women and young children are the MOST vulnerable to radiation exposure. The patient must maintain distance (6+ feet), sleep separately, use separate utensils, flush the toilet twice, and limit close contact for 5-7 days. Option B grossly underestimates the required precautions. Option C — precautions must continue for 5-7 days, not just 48 hours. Option D — young children are MORE sensitive to radiation than adults and must be protected.'
        }
      ],
      y: [
        {
          stem: 'A nurse is teaching a patient about radiation safety precautions after I-131 therapy. Which patient statement indicates correct understanding?',
          options: [
            'A) "I can share dishes and utensils with my family as long as I wash them well."',
            'B) "I should flush the toilet twice after each use for the next several days."',
            'C) "I only need to avoid pregnant women, not other adults or children."',
            'D) "I can hold and cuddle my infant as long as I shower first."'
          ],
          correct: 1,
          rationale: 'Flushing twice dilutes radioactive iodine excreted in urine, reducing environmental contamination. Option A is wrong — the patient should use separate, disposable utensils. Option C is wrong — young children and all close contacts should maintain distance. Option D is wrong — infants are extremely vulnerable to radiation; the patient must avoid prolonged close contact for 5-7 days.'
        },
        {
          stem: 'A patient scheduled for radioactive iodine (I-131) therapy has been taking methimazole (Tapazole) for Graves disease. The nurse notes the provider has ordered methimazole to be discontinued 5 days before the I-131 procedure. The patient asks why. Which explanation is correct?',
          options: [
            'A) "Methimazole interacts with I-131 and causes a dangerous chemical reaction."',
            'B) "Methimazole must be stopped so your thyroid gland will actively take up the radioactive iodine for effective treatment."',
            'C) "Methimazole makes I-131 work too aggressively, destroying too much tissue."',
            'D) "There is no reason to stop methimazole — you should question this order."'
          ],
          correct: 1,
          rationale: 'Antithyroid drugs suppress the thyroid gland\'s iodine uptake. If methimazole is not stopped before I-131, the gland will not absorb enough radioactive iodine for effective ablation. The gland needs to be "active" and hungry for iodine. Option A — there is no chemical reaction. Option C — the concern is too LITTLE uptake, not too much. Option D — the order is correct and evidence-based.'
        },
        {
          stem: 'Which patient would the nurse identify as having an ABSOLUTE contraindication to radioactive iodine (I-131) therapy?',
          options: [
            'A) A 65-year-old male with atrial fibrillation',
            'B) A 30-year-old female who is 10 weeks pregnant',
            'C) A 45-year-old female with a history of seasonal allergies',
            'D) A 55-year-old male with controlled hypertension'
          ],
          correct: 1,
          rationale: 'Pregnancy is the ABSOLUTE contraindication for I-131. Radioactive iodine crosses the placenta and destroys the fetal thyroid gland, causing irreversible congenital hypothyroidism. Option A — atrial fibrillation is actually a complication of hyperthyroidism that I-131 would help treat. Option C — seasonal allergies (including iodine allergy) are NOT a contraindication to I-131 (it is a different mechanism). Option D — controlled hypertension is not a contraindication.'
        }
      ],
      r: [
        {
          stem: 'After radioactive iodine (I-131) therapy for Graves disease, the nurse should teach the patient to expect which long-term outcome?',
          options: [
            'A) Complete cure with no further medication needed',
            'B) Lifelong hypothyroidism requiring thyroid replacement therapy',
            'C) Temporary hypothyroidism that resolves within 3 months',
            'D) Continued hyperthyroidism requiring additional antithyroid drugs'
          ],
          correct: 1,
          rationale: 'I-131 destroys thyroid gland tissue, resulting in permanent hypothyroidism. The patient will require lifelong levothyroxine (Synthroid) replacement. Option A is incorrect — while the hyperthyroidism is "cured," the patient trades it for hypothyroidism requiring medication. Option C — the hypothyroidism is permanent, not temporary. Option D — if hyperthyroidism continues, it means the treatment was insufficient and a second dose may be needed.'
        },
        {
          stem: 'A patient asks the nurse how radioactive iodine (I-131) treats hyperthyroidism. Which response is correct?',
          options: [
            'A) "It blocks the production of thyroid hormones like methimazole does."',
            'B) "It destroys thyroid gland cells using targeted radiation."',
            'C) "It removes the thyroid gland surgically using radiofrequency."',
            'D) "It blocks the effects of thyroid hormones on the heart and nervous system."'
          ],
          correct: 1,
          rationale: 'I-131 is taken up selectively by the thyroid gland (the only organ that concentrates iodine) and emits radiation that destroys thyroid cells (ablation). Option A describes antithyroid drugs (methimazole, PTU). Option C confuses radioactive iodine with surgical thyroidectomy. Option D describes the action of beta-blockers (propranolol).'
        },
        {
          stem: 'How long should a patient who received radioactive iodine (I-131) maintain radiation safety precautions at home?',
          options: [
            'A) 24 hours',
            'B) 48 hours',
            'C) 5 to 7 days',
            'D) 30 days'
          ],
          correct: 2,
          rationale: 'Radiation safety precautions (separate utensils, flush twice, distance from pregnant women/children, sleep separately) should be maintained for 5-7 days after I-131 therapy. Option A and B are too short — significant radioactive iodine is still being excreted. Option D is excessively long — the half-life of I-131 is 8 days, and most radiation is eliminated within 5-7 days.'
        }
      ]
    }
  },

  'Lugol\'s Solution (Potassium Iodide)': {
    details: [
      'Strong iodine solution used for pre-operative thyroid preparation (reduces gland vascularity and size before thyroidectomy)',
      'Also used in thyroid storm AFTER PTU (given 1 hour after antithyroid drug) — inhibits thyroid hormone release',
      'Administration: dilute in water or juice and drink through a STRAW — iodine stains teeth',
      'Monitor for iodism (iodine toxicity): metallic taste, burning mouth/throat, parotid gland swelling, increased salivation',
      'Not for long-term use — temporary "Wolff-Chaikoff effect" wears off, then thyroid escapes suppression',
      'Also used for radiation emergencies (nuclear disaster) — blocks thyroid uptake of radioactive iodine'
    ],
    questions: {
      g: [
        {
          stem: 'A patient in thyroid storm has received PTU 30 minutes ago. The provider orders Lugol\'s solution. The nurse notes the order states to administer Lugol\'s solution "now." Which action by the nurse is MOST appropriate?',
          options: [
            'A) Administer Lugol\'s solution immediately as ordered',
            'B) Hold the Lugol\'s solution and clarify with the provider — it should be given at least 1 hour after PTU',
            'C) Administer Lugol\'s solution simultaneously with a second dose of PTU',
            'D) Refuse to give Lugol\'s solution because iodine is contraindicated in thyroid storm'
          ],
          correct: 1,
          rationale: 'In thyroid storm, iodine (Lugol\'s) must be given at least 1 HOUR AFTER PTU. If iodine is given before antithyroid drugs block new hormone synthesis, the iodine provides raw material for the thyroid to produce even MORE hormone, worsening the crisis. The correct sequence is: PTU first, then beta-blocker, then corticosteroid, then iodine (at least 1 hr after PTU). Option A could worsen the thyroid storm. Option C — simultaneous administration is too early. Option D is incorrect — iodine IS used in thyroid storm, but with correct timing.'
        },
        {
          stem: 'A patient is receiving Lugol\'s solution in preparation for a thyroidectomy scheduled in 10 days. On day 7, the patient reports a metallic taste in the mouth, swelling under the jaw on both sides, and a burning sensation in the mouth and throat. Which action should the nurse take FIRST?',
          options: [
            'A) Reassure the patient that these are expected effects of iodine therapy',
            'B) Hold the Lugol\'s solution and report signs of iodism to the provider',
            'C) Administer diphenhydramine (Benadryl) for an allergic reaction to iodine',
            'D) Continue the medication but decrease the dose by half'
          ],
          correct: 1,
          rationale: 'Metallic taste + parotid gland swelling (bilateral jaw swelling) + burning mouth/throat are the classic triad of IODISM (iodine toxicity). The medication should be held and the provider notified to determine if the dose needs adjustment or the drug needs to be discontinued. Option A is incorrect — while mild metallic taste can occur, the full triad indicates toxicity. Option C — this is toxicity, not an allergic reaction (allergic reaction would present with urticaria, angioedema, anaphylaxis). Option D — dose adjustment is a provider decision, and the nurse should hold the drug first.'
        },
        {
          stem: 'A patient scheduled for thyroidectomy has been taking Lugol\'s solution for 2 weeks pre-operatively. The surgeon postpones the surgery by 3 additional weeks due to scheduling conflicts. The nurse is concerned about continued iodine therapy. Which rationale supports the nurse\'s concern?',
          options: [
            'A) Long-term iodine use causes permanent thyroid damage',
            'B) The thyroid gland will "escape" iodine suppression, and hormone levels may rebound — worsening hyperthyroidism',
            'C) Lugol\'s solution becomes toxic after 14 days regardless of dose',
            'D) Extended iodine use causes iodine deficiency paradoxically'
          ],
          correct: 1,
          rationale: 'The Wolff-Chaikoff effect (iodine-induced thyroid suppression) is temporary. After 10-14 days of continuous iodine, the thyroid "escapes" the suppressive effect and may actually increase hormone production, worsening hyperthyroidism. This is why iodine is used short-term pre-operatively with surgery timed within 10-14 days. Option A — iodine does not cause permanent damage. Option C — there is no fixed toxicity cutoff at 14 days; the concern is therapeutic escape. Option D — excess iodine does not cause deficiency.'
        }
      ],
      y: [
        {
          stem: 'A nurse is preparing to administer Lugol\'s solution to a patient. Which administration technique is correct?',
          options: [
            'A) Give undiluted in a medication cup and instruct the patient to swallow quickly',
            'B) Dilute in water or juice and have the patient drink through a straw',
            'C) Administer via intramuscular injection in the deltoid muscle',
            'D) Apply topically to the anterior neck over the thyroid gland'
          ],
          correct: 1,
          rationale: 'Lugol\'s solution should be diluted in water or juice to improve taste and MUST be administered through a straw because iodine stains teeth. Option A — undiluted iodine is unpleasant and will stain the teeth without a straw. Option C — Lugol\'s solution is an oral preparation, not injectable. Option D — Lugol\'s solution works systemically, not topically.'
        },
        {
          stem: 'A nurse is teaching a patient about Lugol\'s solution prescribed before a thyroidectomy. The patient asks, "Why do I need to take iodine if my thyroid is already overactive?" Which response is MOST accurate?',
          options: [
            'A) "The iodine will cure your hyperthyroidism so you may not need surgery."',
            'B) "The iodine temporarily decreases blood flow to the thyroid gland, making surgery safer and reducing bleeding."',
            'C) "The iodine will destroy part of your thyroid gland before surgery."',
            'D) "The iodine is a contrast dye that helps the surgeon visualize the thyroid."'
          ],
          correct: 1,
          rationale: 'Pre-operative Lugol\'s solution reduces the vascularity (blood supply) and size of the hypervascular thyroid gland, significantly reducing the risk of hemorrhage during thyroidectomy. Option A — iodine is not a cure; its effect is temporary. Option C — iodine does not destroy thyroid tissue (that is I-131). Option D — Lugol\'s is not a contrast dye.'
        },
        {
          stem: 'In the thyroid storm treatment sequence, when should Lugol\'s solution (iodine) be administered in relation to other medications?',
          options: [
            'A) First — before any other medications',
            'B) Simultaneously with PTU for synergistic effect',
            'C) Last — at least 1 hour after PTU has been administered',
            'D) Only if the patient does not respond to PTU and beta-blockers within 24 hours'
          ],
          correct: 2,
          rationale: 'The thyroid storm treatment sequence is: PTU first (blocks synthesis + conversion), then beta-blocker (controls symptoms), then corticosteroid (prevents adrenal crisis, blocks conversion), then iodine LAST (at least 1 hour after PTU to prevent providing substrate for MORE hormone production). Option A — giving iodine first would worsen the crisis. Option B — simultaneous gives iodine too early. Option D — iodine is part of the standard treatment, not a rescue therapy.'
        }
      ],
      r: [
        {
          stem: 'Why must a patient drink Lugol\'s solution through a straw?',
          options: [
            'A) To prevent aspiration of the liquid',
            'B) To prevent staining of the teeth',
            'C) To improve absorption in the stomach',
            'D) To reduce the risk of esophageal irritation'
          ],
          correct: 1,
          rationale: 'Iodine solutions stain the teeth brown. Using a straw directs the liquid past the teeth and into the back of the throat. Option A — aspiration risk is not specific to this medication. Option C — the straw does not affect GI absorption. Option D — while iodine can be irritating, the straw is specifically for dental staining prevention.'
        },
        {
          stem: 'Lugol\'s solution is prescribed before a thyroidectomy primarily to achieve which effect?',
          options: [
            'A) Permanently suppress thyroid hormone production',
            'B) Decrease the size and vascularity of the thyroid gland',
            'C) Destroy cancerous thyroid cells before surgery',
            'D) Replace iodine deficiency that caused the thyroid disorder'
          ],
          correct: 1,
          rationale: 'Lugol\'s solution temporarily reduces thyroid gland size and blood supply (vascularity), making the surgery safer by reducing the risk of excessive bleeding. Option A — the effect is temporary, not permanent. Option C — Lugol\'s does not destroy cells (that is radioactive iodine I-131). Option D — Graves disease is autoimmune, not caused by iodine deficiency.'
        },
        {
          stem: 'A nurse is reviewing medications given during a thyroid storm. Which medication class does Lugol\'s solution belong to?',
          options: [
            'A) Antithyroid drug',
            'B) Iodine preparation',
            'C) Beta-adrenergic blocker',
            'D) Corticosteroid'
          ],
          correct: 1,
          rationale: 'Lugol\'s solution is a potassium iodide/iodine preparation. In thyroid storm, it inhibits the release of preformed thyroid hormones. Option A — antithyroid drugs are methimazole and PTU (they block hormone synthesis). Option C — beta-blockers include propranolol (control heart rate/tremors). Option D — corticosteroids like hydrocortisone prevent adrenal crisis and block T4-to-T3 conversion.'
        }
      ]
    }
  },

  'Iodism (Iodine Toxicity)': {
    details: [
      'Toxicity from iodine preparations (Lugol\'s solution, SSKI, or excessive iodine intake)',
      'Classic signs: metallic taste, burning sensation in mouth/throat, parotid gland swelling (bilateral jaw swelling), increased salivation',
      'Additional symptoms: sneezing, eye irritation, skin rash, GI upset',
      'Antidote: sodium thiosulfate — binds and inactivates iodine',
      'Prevention: monitor for early signs (metallic taste is often the first symptom), use correct dilution, limit duration of therapy',
      'Different from iodine ALLERGY (which presents as urticaria, angioedema, anaphylaxis)'
    ],
    questions: {
      g: [
        {
          stem: 'A patient taking Lugol\'s solution pre-operatively reports a mild metallic taste yesterday that has now progressed to bilateral jaw swelling, a burning sensation in the mouth, and excessive drooling. The thyroidectomy is scheduled for tomorrow. Which nursing action takes HIGHEST priority?',
          options: [
            'A) Administer diphenhydramine (Benadryl) 50 mg IV for an anaphylactic reaction',
            'B) Hold the Lugol\'s solution, notify the provider of iodism symptoms, and anticipate sodium thiosulfate if severe',
            'C) Continue the Lugol\'s solution since stopping it the day before surgery would be more dangerous',
            'D) Switch from Lugol\'s solution to radioactive iodine (I-131) for pre-operative preparation'
          ],
          correct: 1,
          rationale: 'These are classic iodism symptoms (metallic taste progressing to parotid swelling, burning mouth, hypersalivation). The iodine source must be held, and the provider notified to determine if sodium thiosulfate (the antidote for iodism) is needed and to reevaluate the surgical plan. Option A is the trap — this is toxicity, not an allergic/anaphylactic reaction. Benadryl treats allergy (urticaria, angioedema), not chemical toxicity. Option C — continuing the offending agent worsens toxicity. Option D — I-131 is NOT used for pre-operative preparation; it ablates the gland.'
        },
        {
          stem: 'A nurse is assessing two patients who both received iodine preparations. Patient A has bilateral parotid swelling, metallic taste, and excessive salivation. Patient B has urticaria, facial swelling, wheezing, and hypotension. Which statement correctly differentiates these presentations?',
          options: [
            'A) Both patients are experiencing iodism and should receive sodium thiosulfate',
            'B) Patient A has iodism (toxicity) requiring drug discontinuation; Patient B has anaphylaxis requiring epinephrine',
            'C) Patient A has an allergic reaction; Patient B has iodism',
            'D) Both patients have iodine allergy and should receive diphenhydramine'
          ],
          correct: 1,
          rationale: 'Patient A presents with classic IODISM (toxicity): metallic taste, parotid swelling, hypersalivation. Treatment is drug discontinuation +/- sodium thiosulfate. Patient B presents with ANAPHYLAXIS (allergy): urticaria, angioedema, bronchospasm, hypotension. Treatment is epinephrine, IV fluids, airway management. These are fundamentally different conditions with different treatments. Option A incorrectly groups both as toxicity. Option C reverses the diagnoses. Option D incorrectly treats anaphylaxis with antihistamines alone (epinephrine is first-line).'
        },
        {
          stem: 'A nurse is caring for a patient with progressive iodism symptoms despite discontinuation of the iodine preparation 12 hours ago. The provider orders sodium thiosulfate. The nurse recognizes sodium thiosulfate works as an antidote by which mechanism?',
          options: [
            'A) Blocking iodine receptors on the thyroid gland',
            'B) Binding to and inactivating free iodine, allowing renal excretion',
            'C) Stimulating hepatic metabolism of iodine compounds',
            'D) Neutralizing iodine by converting it to radioactive I-131'
          ],
          correct: 1,
          rationale: 'Sodium thiosulfate binds to free iodine (and iodide), forming sodium iodide and sodium sulfate, which are then excreted by the kidneys. This reduces the toxic burden of excess iodine. Option A — iodine does not work through specific "iodine receptors." Option C — iodine is primarily excreted renally, not hepatically metabolized. Option D — thiosulfate does not convert iodine to I-131; this is pharmacologically impossible and dangerous.'
        }
      ],
      y: [
        {
          stem: 'A nurse is monitoring a patient taking Lugol\'s solution. Which assessment finding is the EARLIEST sign of iodism that the nurse should report?',
          options: [
            'A) Bilateral parotid gland swelling',
            'B) Metallic taste in the mouth',
            'C) Severe throat edema with dysphagia',
            'D) Skin rash covering the trunk and extremities'
          ],
          correct: 1,
          rationale: 'Metallic taste is typically the FIRST and earliest symptom of iodism, often appearing before other signs develop. If caught early, the dose can be adjusted or the drug discontinued before more serious toxicity develops. Option A — parotid swelling develops after initial metallic taste. Option C — severe throat edema suggests advanced toxicity or possible allergy. Option D — skin rash is a later manifestation.'
        },
        {
          stem: 'A patient being treated with an iodine preparation develops iodism. Which antidote should the nurse anticipate the provider will order?',
          options: [
            'A) Protamine sulfate',
            'B) Vitamin K (phytonadione)',
            'C) Sodium thiosulfate',
            'D) N-acetylcysteine (Mucomyst)'
          ],
          correct: 2,
          rationale: 'Sodium thiosulfate is the antidote for iodism — it binds and inactivates excess iodine. Option A — protamine sulfate is the antidote for heparin. Option B — vitamin K is the antidote for warfarin. Option D — N-acetylcysteine is the antidote for acetaminophen toxicity. These are commonly tested drug-antidote pairings on NCLEX.'
        },
        {
          stem: 'Which combination of symptoms should the nurse recognize as iodism?',
          options: [
            'A) Fever, sore throat, and low white blood cell count',
            'B) Metallic taste, parotid gland swelling, and burning sensation in the mouth',
            'C) Jaundice, dark urine, and right upper quadrant pain',
            'D) Urticaria, angioedema, and wheezing'
          ],
          correct: 1,
          rationale: 'Iodism presents with metallic taste, parotid gland swelling (bilateral jaw area), burning mouth/throat, and increased salivation. Option A describes agranulocytosis (from methimazole or PTU). Option C describes hepatotoxicity (PTU Black Box Warning). Option D describes anaphylaxis/allergic reaction — different from toxicity.'
        }
      ],
      r: [
        {
          stem: 'Iodism is a toxicity reaction to which type of medication?',
          options: [
            'A) Antithyroid drugs like methimazole',
            'B) Iodine preparations like Lugol\'s solution',
            'C) Thyroid replacement drugs like levothyroxine',
            'D) Beta-blockers like propranolol'
          ],
          correct: 1,
          rationale: 'Iodism is toxicity specifically from iodine preparations (Lugol\'s solution, SSKI, or excessive dietary iodine). It is not caused by antithyroid drugs (Option A), thyroid replacement (Option C), or beta-blockers (Option D). Each of these drug classes has its own distinct adverse effects.'
        },
        {
          stem: 'Which sign is characteristic of iodism?',
          options: [
            'A) Tachycardia and weight loss',
            'B) Metallic taste and parotid gland swelling',
            'C) Bradycardia and constipation',
            'D) Exophthalmos and tremors'
          ],
          correct: 1,
          rationale: 'Metallic taste and parotid gland swelling (bilateral jaw swelling) are hallmark signs of iodism. Option A describes hyperthyroidism symptoms. Option C describes hypothyroidism symptoms. Option D describes Graves disease features.'
        },
        {
          stem: 'A patient develops iodism from Lugol\'s solution. Which medication is the specific antidote?',
          options: [
            'A) Activated charcoal',
            'B) Sodium thiosulfate',
            'C) Calcium gluconate',
            'D) Flumazenil'
          ],
          correct: 1,
          rationale: 'Sodium thiosulfate binds and inactivates free iodine, serving as the specific antidote for iodism. Option A — activated charcoal is used for general oral poisoning/overdose within 1-2 hours of ingestion. Option C — calcium gluconate is used for hyperkalemia and hydrofluoric acid burns. Option D — flumazenil is the antidote for benzodiazepine overdose.'
        }
      ]
    }
  },

  'Sodium Thiosulfate': {
    details: [
      'Versatile antidote with THREE clinical uses: cyanide poisoning, iodism (iodine toxicity), and cisplatin-induced nephrotoxicity',
      'Cyanide poisoning: converts cyanide to thiocyanate (non-toxic) for renal excretion — given as part of the cyanide antidote kit',
      'Iodism: binds free iodine and inactivates it, allowing renal elimination',
      'Cisplatin nephrotoxicity: acts as a chemoprotectant by neutralizing cisplatin in the renal tubules',
      'Administration: IV infusion — monitor for hypotension and nausea during infusion',
      'Cyanide poisoning priority: hydroxocobalamin or amyl nitrite/sodium nitrite given FIRST, then sodium thiosulfate'
    ],
    questions: {
      g: [
        {
          stem: 'Multiple patients are brought to the emergency department after a house fire. One patient is unconscious with cherry-red skin, severe metabolic acidosis (pH 7.08), and a lactate of 14 mmol/L. The provider orders the cyanide antidote kit. In which order should the nurse anticipate administering the antidotes?',
          options: [
            'A) Sodium thiosulfate first, then hydroxocobalamin',
            'B) Hydroxocobalamin (or amyl nitrite/sodium nitrite) first, then sodium thiosulfate',
            'C) Sodium thiosulfate alone is sufficient as the complete cyanide antidote',
            'D) Activated charcoal first, then sodium thiosulfate, then hydroxocobalamin'
          ],
          correct: 1,
          rationale: 'In cyanide poisoning, hydroxocobalamin (Cyanokit) is given FIRST because it directly binds cyanide. Alternatively, amyl nitrite (inhaled) or sodium nitrite (IV) creates methemoglobin that binds cyanide. Sodium thiosulfate is then given to convert the cyanide-methemoglobin complex (or remaining cyanide) to non-toxic thiocyanate for renal excretion. Option A reverses the sequence. Option C — thiosulfate alone is insufficient for severe cyanide poisoning. Option D — activated charcoal poorly adsorbs cyanide and is not part of the standard protocol.'
        },
        {
          stem: 'A nurse is reviewing the medication profile of a patient receiving cisplatin chemotherapy for ovarian cancer. The nurse notes an order for sodium thiosulfate to be administered after the cisplatin infusion. A new nurse asks why an "antidote" is being given with chemotherapy. Which explanation is MOST accurate?',
          options: [
            'A) "Sodium thiosulfate is given because the patient is also receiving iodine-based contrast."',
            'B) "Sodium thiosulfate protects the kidneys by neutralizing cisplatin in the renal tubules, reducing nephrotoxicity."',
            'C) "Sodium thiosulfate reverses the antitumor effects of cisplatin if the cancer responds too quickly."',
            'D) "Sodium thiosulfate prevents cisplatin from causing cyanide release as a metabolic byproduct."'
          ],
          correct: 1,
          rationale: 'Cisplatin is highly nephrotoxic. Sodium thiosulfate acts as a chemoprotectant by binding to and inactivating cisplatin molecules in the renal tubules, protecting the kidneys without significantly reducing the drug\'s antitumor activity at the cancer site. Option A incorrectly relates it to iodine. Option C is incorrect — thiosulfate does not reverse antitumor activity at the tumor. Option D is fabricated — cisplatin does not release cyanide.'
        },
        {
          stem: 'A nurse needs to recall the THREE clinical uses of sodium thiosulfate for a pharmacology exam. Which combination is correct?',
          options: [
            'A) Cyanide poisoning, iodism, and acetaminophen overdose',
            'B) Cyanide poisoning, iodism, and cisplatin-induced nephrotoxicity',
            'C) Heparin overdose, iodism, and iron toxicity',
            'D) Cyanide poisoning, warfarin reversal, and cisplatin-induced nephrotoxicity'
          ],
          correct: 1,
          rationale: 'Sodium thiosulfate has three distinct antidote/protective uses: (1) cyanide poisoning — converts cyanide to thiocyanate, (2) iodism — binds and inactivates free iodine, (3) cisplatin nephrotoxicity — neutralizes cisplatin in renal tubules. Option A — acetaminophen overdose uses N-acetylcysteine, not thiosulfate. Option C — heparin uses protamine sulfate; iron uses deferoxamine. Option D — warfarin uses vitamin K (phytonadione).'
        }
      ],
      y: [
        {
          stem: 'A patient in the emergency department is being treated for cyanide poisoning. After hydroxocobalamin has been administered, the provider orders sodium thiosulfate IV. The nurse understands that sodium thiosulfate works in cyanide poisoning by which mechanism?',
          options: [
            'A) Directly binding to cyanide molecules in the bloodstream',
            'B) Converting cyanide to thiocyanate, a non-toxic compound excreted by the kidneys',
            'C) Stimulating the liver to metabolize cyanide more rapidly',
            'D) Blocking cyanide from entering cells by competing for the same receptors'
          ],
          correct: 1,
          rationale: 'Sodium thiosulfate donates a sulfur group to cyanide via the enzyme rhodanese, converting it to thiocyanate — a non-toxic compound that is readily excreted by the kidneys. Option A — hydroxocobalamin directly binds cyanide (not thiosulfate). Option C — cyanide is not primarily hepatically metabolized. Option D — cyanide does not work through specific receptors that can be competitively blocked.'
        },
        {
          stem: 'A nurse is administering sodium thiosulfate via IV infusion. Which assessment is MOST important during the infusion?',
          options: [
            'A) Monitor blood glucose levels every 15 minutes',
            'B) Monitor blood pressure — hypotension can occur during rapid infusion',
            'C) Monitor urine output for hematuria',
            'D) Monitor temperature for hyperthermia'
          ],
          correct: 1,
          rationale: 'Hypotension and nausea are the most common adverse effects during sodium thiosulfate IV infusion, particularly with rapid administration. Blood pressure should be monitored closely and the infusion rate adjusted if hypotension occurs. Option A — blood glucose is not specifically affected. Option C — hematuria is not a characteristic adverse effect. Option D — hyperthermia is not associated with thiosulfate infusion.'
        },
        {
          stem: 'A patient with severe iodism is not responding to discontinuation of Lugol\'s solution alone. The provider orders sodium thiosulfate. The nurse understands this is appropriate because sodium thiosulfate acts on iodism by which mechanism?',
          options: [
            'A) Increasing renal excretion of iodine by acting as an osmotic diuretic',
            'B) Binding to and inactivating free iodine, promoting its elimination',
            'C) Blocking iodine absorption from the gastrointestinal tract',
            'D) Converting iodine to a form that cannot be taken up by the thyroid'
          ],
          correct: 1,
          rationale: 'Sodium thiosulfate directly binds to free iodine and iodide, forming inactive compounds (sodium iodide and sodium sulfate) that are safely excreted by the kidneys. Option A — it is not an osmotic diuretic. Option C — by the time iodism develops, iodine is already absorbed systemically; GI blockade is irrelevant. Option D — the mechanism is binding/inactivation, not conversion to a thyroid-inactive form.'
        }
      ],
      r: [
        {
          stem: 'Sodium thiosulfate is the specific antidote for which type of poisoning?',
          options: [
            'A) Acetaminophen overdose',
            'B) Cyanide poisoning',
            'C) Opioid overdose',
            'D) Benzodiazepine overdose'
          ],
          correct: 1,
          rationale: 'Sodium thiosulfate is a key component of the cyanide antidote kit — it converts cyanide to non-toxic thiocyanate. Option A — acetaminophen overdose uses N-acetylcysteine (Mucomyst). Option C — opioid overdose uses naloxone (Narcan). Option D — benzodiazepine overdose uses flumazenil (Romazicon).'
        },
        {
          stem: 'How many clinical antidote uses does sodium thiosulfate have?',
          options: [
            'A) One — cyanide poisoning only',
            'B) Two — cyanide poisoning and iodism',
            'C) Three — cyanide poisoning, iodism, and cisplatin nephrotoxicity',
            'D) Four — cyanide, iodism, cisplatin, and acetaminophen'
          ],
          correct: 2,
          rationale: 'Sodium thiosulfate has THREE established clinical uses: (1) cyanide poisoning antidote, (2) iodism antidote, and (3) cisplatin nephrotoxicity chemoprotectant. Option A and B are incomplete. Option D adds acetaminophen incorrectly — that antidote is N-acetylcysteine.'
        },
        {
          stem: 'In the cyanide antidote protocol, when is sodium thiosulfate administered?',
          options: [
            'A) First, before any other antidotes',
            'B) After hydroxocobalamin or sodium nitrite has been given',
            'C) Only if the patient does not respond to hydroxocobalamin within 24 hours',
            'D) Simultaneously mixed with hydroxocobalamin in the same IV bag'
          ],
          correct: 1,
          rationale: 'In the cyanide antidote protocol, hydroxocobalamin (or sodium nitrite) is given FIRST to directly bind cyanide, followed by sodium thiosulfate to convert remaining cyanide to thiocyanate. Option A — thiosulfate alone is insufficient as the first agent. Option C — thiosulfate is part of the standard protocol, not a rescue therapy. Option D — these agents should NOT be mixed in the same IV bag.'
        }
      ]
    }
  },

  // ═══ PITUITARY DRUGS (6) ═══
  'Somatropin (Growth Hormone)': {
    details: [
      'Recombinant human growth hormone given SubQ at bedtime to mimic natural pulsatile secretion',
      'Monitor IGF-1 levels (not GH directly) to assess therapeutic response',
      'Contraindicated in active malignancy and diabetic retinopathy',
      'In children: watch for slipped capital femoral epiphysis (hip/knee pain, limp)',
      'Can cause hyperglycemia — monitor blood glucose, especially in diabetic patients',
      'Used for GH deficiency in children and adults, Turner syndrome, chronic renal insufficiency',
    ],
    questions: {
      g: [
        {
          stem: 'A nurse is caring for a 10-year-old receiving somatropin (Genotropin) for growth hormone deficiency. The child reports new-onset right knee pain and is limping. Which action should the nurse take FIRST?',
          options: [
            'Notify the provider immediately — this may indicate slipped capital femoral epiphysis',
            'Administer acetaminophen and document the finding as growing pains',
            'Apply ice to the knee and elevate the extremity',
            'Hold the next dose until the pain resolves',
          ],
          correct: 0,
          rationale: 'Slipped capital femoral epiphysis (SCFE) is a known complication of somatropin therapy in children. Hip/knee pain with a limp requires immediate provider notification because SCFE can cause permanent hip damage if untreated. B is wrong — dismissing this as growing pains delays a potentially serious diagnosis. C treats symptoms but misses the underlying concern. D addresses the medication but the priority is reporting the finding for evaluation.',
        },
        {
          stem: 'A patient with type 2 diabetes is prescribed somatropin for adult growth hormone deficiency. The fasting blood glucose has risen from 110 mg/dL to 188 mg/dL over the past 2 weeks. Which finding is MOST concerning to the nurse?',
          options: [
            'The patient has been eating larger meals due to increased appetite',
            'The patient has active diabetic retinopathy noted in the chart',
            'The patient reports fatigue and increased thirst',
            'The patient missed two doses of somatropin last week',
          ],
          correct: 1,
          rationale: 'Active diabetic retinopathy is a CONTRAINDICATION to somatropin therapy. The nurse should report this immediately because continuing the drug could worsen retinopathy. Somatropin can cause hyperglycemia (explaining the glucose rise in C), but the contraindication is the most critical finding. A may contribute to glucose elevation but is not dangerous in itself. D would not worsen the clinical picture.',
        },
        {
          stem: 'A nurse is reviewing laboratory results for a child on somatropin therapy. The IGF-1 level is significantly above the age-adjusted reference range. Which action is the priority?',
          options: [
            'Increase the somatropin dose to accelerate growth',
            'Notify the provider — the dose may need to be reduced',
            'Recheck the level in one month since IGF-1 fluctuates normally',
            'Hold the medication and obtain a stat GH level',
          ],
          correct: 1,
          rationale: 'Elevated IGF-1 above the reference range indicates excessive GH effect and the dose likely needs reduction to prevent adverse effects (hyperglycemia, increased intracranial pressure, accelerated bone changes). A is the opposite of what is needed. C delays action on an abnormal finding. D is incorrect because GH levels are not used to monitor somatropin therapy — IGF-1 is the correct marker since GH is secreted in pulses and single levels are unreliable.',
        },
      ],
      y: [
        {
          stem: 'A nurse is teaching the parents of a child prescribed somatropin about administration. Which statement by the parent indicates correct understanding?',
          options: [
            'I will give the injection in the morning before breakfast',
            'I will give the injection at bedtime each night',
            'I will give the injection right after lunch for best absorption',
            'I will alternate between morning and bedtime doses',
          ],
          correct: 1,
          rationale: 'Somatropin is administered SubQ at bedtime to mimic the body\'s natural pulsatile GH secretion, which peaks during sleep. A, C, and D do not align with the physiologic pattern and would reduce the drug\'s effectiveness at mimicking natural GH release.',
        },
        {
          stem: 'A nurse is assessing a patient receiving somatropin. Which assessment finding should the nurse report to the provider?',
          options: [
            'Mild injection site redness that resolves in 30 minutes',
            'A fasting blood glucose of 92 mg/dL',
            'A fasting blood glucose of 206 mg/dL',
            'A 2 cm increase in height over 6 months',
          ],
          correct: 2,
          rationale: 'Somatropin can cause hyperglycemia. A fasting glucose of 206 mg/dL is significantly elevated (normal fasting: 70-100 mg/dL) and must be reported. A is a common, expected minor reaction. B is a normal glucose value. D is the desired therapeutic effect of growth hormone therapy.',
        },
        {
          stem: 'A nurse is reviewing the chart of a patient being considered for somatropin therapy. Which condition in the medical history would the nurse flag as a potential contraindication?',
          options: [
            'History of seasonal allergies',
            'Active malignancy under treatment',
            'Well-controlled hypothyroidism on levothyroxine',
            'History of a fractured tibia 3 years ago',
          ],
          correct: 1,
          rationale: 'Active malignancy is a contraindication for somatropin because growth hormone can stimulate cell proliferation and potentially promote tumor growth. A has no relevance. C is not a contraindication (though thyroid function should be monitored). D is a resolved orthopedic issue with no bearing on GH therapy.',
        },
      ],
      r: [
        {
          stem: 'A nurse is caring for a child receiving somatropin. Which laboratory test is used to monitor the therapeutic effectiveness of this medication?',
          options: [
            'Serum growth hormone (GH) level',
            'Insulin-like growth factor-1 (IGF-1) level',
            'Thyroid-stimulating hormone (TSH) level',
            'Hemoglobin A1C level',
          ],
          correct: 1,
          rationale: 'IGF-1 is the correct lab to monitor somatropin effectiveness because it reflects sustained GH activity. A is incorrect — GH is secreted in pulses, making a single random level unreliable. C monitors thyroid function, not GH therapy. D monitors long-term glucose control, which may be affected by somatropin but does not measure its therapeutic effect.',
        },
        {
          stem: 'A nurse is explaining somatropin to a patient. Which statement best describes the route and timing of administration?',
          options: [
            'Oral tablet taken daily in the morning',
            'Intramuscular injection given weekly',
            'Subcutaneous injection given at bedtime',
            'Intravenous infusion given every 2 weeks',
          ],
          correct: 2,
          rationale: 'Somatropin is given as a subcutaneous injection at bedtime to mimic the body\'s natural growth hormone secretion pattern during sleep. A is incorrect — somatropin is a protein and would be destroyed by GI enzymes if given orally. B and D describe incorrect routes and frequencies.',
        },
        {
          stem: 'A nursing student asks why somatropin is contraindicated in patients with active cancer. Which response by the nurse is most accurate?',
          options: [
            'Growth hormone suppresses the immune system, increasing infection risk',
            'Growth hormone promotes cell growth, which could stimulate tumor proliferation',
            'Growth hormone interferes with chemotherapy drug metabolism',
            'Growth hormone causes severe bone marrow suppression',
          ],
          correct: 1,
          rationale: 'Growth hormone promotes cell growth and proliferation. In a patient with active malignancy, this effect could stimulate tumor growth. A is not the primary concern. C is not the mechanism of the contraindication. D is not an effect of somatropin.',
        },
      ],
    },
  },

  'Vasopressin (ADH)': {
    details: [
      'Antidiuretic hormone — promotes water reabsorption in the collecting ducts',
      'Three clinical uses: diabetes insipidus, septic shock (vasoconstriction), esophageal varices',
      'Major risk: water intoxication leading to hyponatremia (Na+ < 135 mEq/L)',
      'Monitor: strict I&O, daily weights, urine specific gravity (goal: 1.005-1.030)',
      'In septic shock: used as a vasopressor adjunct (not first-line)',
      'Signs of water intoxication: headache, confusion, weight gain, decreased sodium',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with diabetes insipidus is receiving vasopressin. The nurse notes the following: weight gain of 3 kg since yesterday, serum sodium 126 mEq/L, headache, and confusion. Which action should the nurse take FIRST?',
          options: [
            'Administer a normal saline bolus to correct the sodium',
            'Hold the vasopressin and notify the provider immediately',
            'Encourage the patient to increase oral fluid intake',
            'Recheck the serum sodium level in 4 hours',
          ],
          correct: 1,
          rationale: 'These findings — rapid weight gain, serum Na+ 126 mEq/L (normal 135-145), headache, confusion — indicate water intoxication from excessive ADH effect. The priority is to hold the vasopressin (stop the cause) and notify the provider. A may be part of treatment but is a provider decision. C would worsen fluid overload. D delays action on a dangerous clinical picture — hyponatremia with neurological symptoms requires immediate intervention.',
        },
        {
          stem: 'A patient in septic shock is receiving vasopressin 0.04 units/min along with norepinephrine. The patient\'s blood pressure improves to 92/58 mmHg and urine output drops to 10 mL/hr. Which finding requires the MOST urgent nursing action?',
          options: [
            'The blood pressure is still below normal range',
            'The patient is developing oliguria — assess for mesenteric ischemia',
            'The vasopressin dose needs to be increased for better BP control',
            'The norepinephrine should be discontinued now that vasopressin is running',
          ],
          correct: 1,
          rationale: 'Vasopressin causes vasoconstriction that can reduce perfusion to the mesentery, kidneys, and extremities. Oliguria (urine output < 0.5 mL/kg/hr) in this context may indicate visceral ischemia, which is a serious complication requiring urgent assessment and provider notification. A — the BP is improving toward the MAP goal of >= 65. C — vasopressin in septic shock is typically capped at 0.04 units/min. D — both vasopressors often run concurrently; stopping norepinephrine prematurely could cause hemodynamic collapse.',
        },
        {
          stem: 'A nurse is caring for two patients: Patient A has diabetes insipidus on vasopressin with urine specific gravity 1.001, and Patient B has diabetes insipidus on vasopressin with urine specific gravity 1.025 and serum sodium 128 mEq/L. Which patient requires priority intervention?',
          options: [
            'Patient A — the urine specific gravity indicates the vasopressin is not working',
            'Patient B — the findings suggest water intoxication from excessive vasopressin effect',
            'Both patients require equal priority since both have diabetes insipidus',
            'Patient A — dilute urine always indicates a more urgent problem',
          ],
          correct: 1,
          rationale: 'Patient B shows signs of vasopressin excess: concentrated urine (1.025) means the drug is working too well — too much water is being reabsorbed, leading to dilutional hyponatremia (Na+ 128, normal 135-145). This is dangerous and can cause seizures. Patient A (urine SG 1.001) suggests the vasopressin may not be adequately controlling the DI, which needs attention but is not immediately life-threatening. C ignores the difference in clinical urgency. D is incorrect — the clinical danger is in the hyponatremia, not the dilute urine.',
        },
      ],
      y: [
        {
          stem: 'A nurse is monitoring a patient receiving vasopressin for diabetes insipidus. Which assessment findings indicate the medication is effective?',
          options: [
            'Urine output of 8 liters/day and extreme thirst',
            'Urine specific gravity 1.015 and urine output 1,500 mL/day',
            'Serum sodium 150 mEq/L and dry mucous membranes',
            'Blood pressure 80/50 mmHg and tachycardia',
          ],
          correct: 1,
          rationale: 'Effective vasopressin therapy for DI produces concentrated urine (SG 1.005-1.030) and normal urine output (~1-2 L/day). A describes uncontrolled DI — the drug is not working. C shows hypernatremia and dehydration — also uncontrolled DI. D describes hypotension unrelated to DI treatment effectiveness.',
        },
        {
          stem: 'A nurse is caring for a patient with diabetes insipidus receiving vasopressin. Which nursing assessments should be performed? Select the priority monitoring set.',
          options: [
            'Strict I&O, daily weights, and urine specific gravity',
            'Blood glucose checks every 4 hours and ketone monitoring',
            'Liver function tests weekly and abdominal girth measurements',
            'Pulmonary function tests and peak flow measurements',
          ],
          correct: 0,
          rationale: 'Vasopressin promotes water reabsorption, so monitoring I&O (to track fluid balance), daily weights (rapid weight gain = fluid retention), and urine specific gravity (to assess urine concentration) are the priority assessments. B monitors diabetic complications, not DI treatment. C monitors hepatic function, not relevant here. D monitors respiratory function, unrelated to vasopressin therapy.',
        },
        {
          stem: 'A nurse is teaching a patient about vasopressin therapy for diabetes insipidus. Which patient statement indicates a need for further teaching?',
          options: [
            'I should weigh myself every morning at the same time',
            'I should drink as much water as I can to stay hydrated',
            'I should report headaches or confusion to my provider right away',
            'I need to keep track of how much I urinate each day',
          ],
          correct: 1,
          rationale: 'Excessive fluid intake while on vasopressin increases the risk of water intoxication and hyponatremia. Patients should drink to thirst, not force fluids. A is correct — daily weights monitor fluid status. C is correct — headache and confusion are early signs of water intoxication. D is correct — tracking urine output helps monitor treatment effectiveness.',
        },
      ],
      r: [
        {
          stem: 'A nurse is reviewing the medication list for a patient with diabetes insipidus. Vasopressin is prescribed. The nurse understands that this medication works by which mechanism?',
          options: [
            'Blocking aldosterone receptors in the kidneys',
            'Promoting water reabsorption in the renal collecting ducts',
            'Increasing glucose uptake into the cells',
            'Stimulating the anterior pituitary to release growth hormone',
          ],
          correct: 1,
          rationale: 'Vasopressin (ADH) acts on V2 receptors in the renal collecting ducts to increase water reabsorption, concentrating the urine and reducing output. A describes the mechanism of spironolactone. C describes insulin\'s action. D describes a function of GHRH, not vasopressin.',
        },
        {
          stem: 'The nurse knows vasopressin is used for which of the following clinical indications?',
          options: [
            'Diabetes insipidus, septic shock, and esophageal varices',
            'Type 1 diabetes mellitus, heart failure, and migraine',
            'Hypothyroidism, Addison disease, and osteoporosis',
            'Acromegaly, Cushing syndrome, and hyperparathyroidism',
          ],
          correct: 0,
          rationale: 'Vasopressin has three key clinical uses: diabetes insipidus (replaces deficient ADH), septic shock (vasoconstriction via V1 receptors), and esophageal varices (reduces portal pressure via splanchnic vasoconstriction). B, C, and D list conditions unrelated to vasopressin therapy.',
        },
        {
          stem: 'A patient on vasopressin therapy is at risk for water intoxication. Which electrolyte imbalance is associated with this complication?',
          options: [
            'Hyperkalemia (elevated potassium)',
            'Hyponatremia (low sodium)',
            'Hypercalcemia (elevated calcium)',
            'Hypermagnesemia (elevated magnesium)',
          ],
          correct: 1,
          rationale: 'Water intoxication from vasopressin causes dilutional hyponatremia — excess water reabsorption dilutes the serum sodium (normal 135-145 mEq/L). A, C, and D are electrolyte imbalances not directly caused by vasopressin excess.',
        },
      ],
    },
  },

  'Desmopressin (DDAVP)': {
    details: [
      'Synthetic vasopressin analog — preferred over vasopressin for diabetes insipidus',
      'Four clinical uses: diabetes insipidus, nocturnal enuresis (bedwetting), hemophilia A, von Willebrand disease type 1',
      'Routes: intranasal, IV, SubQ, oral',
      'Fluid restriction is important to prevent water intoxication and hyponatremia',
      'For hemophilia A/vWD: stimulates release of factor VIII and von Willebrand factor from endothelial cells',
      'Intranasal: alternate nostrils, check nasal passages for congestion (affects absorption)',
    ],
    questions: {
      g: [
        {
          stem: 'A child with hemophilia A is scheduled for a dental extraction. Desmopressin (DDAVP) 0.3 mcg/kg IV is ordered pre-procedure. Thirty minutes after administration, the child develops a headache, nausea, and the serum sodium returns at 129 mEq/L. Which action should the nurse take FIRST?',
          options: [
            'Administer an antiemetic for the nausea and continue monitoring',
            'Restrict fluids and notify the provider — these are signs of water intoxication',
            'Encourage the child to drink clear fluids to prevent dehydration',
            'Proceed with the dental extraction since the desmopressin has been given',
          ],
          correct: 1,
          rationale: 'Headache, nausea, and serum Na+ 129 mEq/L (normal 135-145) are signs of water intoxication and hyponatremia from the ADH effect of desmopressin. Fluid restriction and provider notification are the priority. A treats a symptom but misses the underlying emergency. C would worsen the fluid overload and hyponatremia. D ignores a potentially dangerous complication that needs to be addressed before any elective procedure.',
        },
        {
          stem: 'A nurse is caring for a patient with diabetes insipidus using intranasal desmopressin. The patient reports the medication "doesn\'t seem to be working anymore" and urine output has increased to 5 liters/day. Which assessment should the nurse perform FIRST?',
          options: [
            'Check the patient\'s nasal passages for congestion or irritation',
            'Obtain a random serum growth hormone level',
            'Assess for signs of pituitary tumor progression',
            'Switch the patient to oral desmopressin immediately',
          ],
          correct: 0,
          rationale: 'With intranasal desmopressin, nasal congestion, rhinitis, or mucosal irritation can significantly impair absorption, leading to decreased effectiveness. This is the most likely and immediately correctable cause. B is irrelevant to DI management. C may eventually be warranted but is not the first assessment. D is a provider decision, not an independent nursing action, and the nurse should first determine WHY the current route is failing.',
        },
        {
          stem: 'A nurse is admitting a 7-year-old prescribed desmopressin nasal spray for nocturnal enuresis. The mother states she gives the child a large glass of water with the medication at bedtime "to make sure it works well." Which nursing response is MOST appropriate?',
          options: [
            'That is a good practice — staying hydrated helps the medication work',
            'Fluid intake should be restricted in the evening when using desmopressin to prevent a dangerous drop in sodium',
            'The child should drink the water in the morning instead of at bedtime',
            'Water does not affect how desmopressin works so it does not matter when the child drinks',
          ],
          correct: 1,
          rationale: 'Desmopressin promotes water retention. Giving extra fluids at bedtime while the drug is active increases the risk of water intoxication and hyponatremia, which can cause seizures — especially dangerous in children. Fluid restriction in the evening is a critical teaching point. A is dangerous misinformation. C does not address the bedtime risk period. D is incorrect — fluid intake directly impacts the risk of water intoxication with desmopressin.',
        },
      ],
      y: [
        {
          stem: 'A nurse is teaching a patient newly prescribed intranasal desmopressin for diabetes insipidus. Which instructions should the nurse include?',
          options: [
            'Spray into the same nostril each time for consistent absorption',
            'Alternate nostrils with each dose and report any nasal congestion',
            'Blow the nose vigorously immediately after administration',
            'Use the spray only when symptoms of excessive urination appear',
          ],
          correct: 1,
          rationale: 'Alternating nostrils reduces mucosal irritation, and nasal congestion must be reported because it can impair absorption and reduce drug effectiveness. A would increase irritation to one side. C would blow out the medication before absorption. D is incorrect — desmopressin should be taken on a regular schedule, not PRN.',
        },
        {
          stem: 'A patient asks the nurse why desmopressin is being given before a minor surgical procedure for von Willebrand disease type 1. Which response is accurate?',
          options: [
            'Desmopressin stimulates the bone marrow to produce more platelets',
            'Desmopressin stimulates release of von Willebrand factor and factor VIII to help your blood clot',
            'Desmopressin directly activates the clotting cascade at factor X',
            'Desmopressin prevents the breakdown of fibrin clots after they form',
          ],
          correct: 1,
          rationale: 'Desmopressin stimulates endothelial cells to release stored von Willebrand factor (vWF) and factor VIII, temporarily improving clotting ability. This is why it is used pre-procedure in vWD type 1 and mild hemophilia A. A is incorrect — it does not affect platelet production. C describes a different part of the coagulation cascade. D describes the mechanism of antifibrinolytics like aminocaproic acid, not desmopressin.',
        },
        {
          stem: 'A nurse is comparing vasopressin and desmopressin for a patient with diabetes insipidus. Which statement about desmopressin is correct?',
          options: [
            'Desmopressin has stronger vasopressor effects than vasopressin',
            'Desmopressin is preferred because it has a more selective antidiuretic effect with less vasoconstriction',
            'Desmopressin can only be given intravenously',
            'Desmopressin is used for septic shock but not diabetes insipidus',
          ],
          correct: 1,
          rationale: 'Desmopressin is a synthetic analog with enhanced antidiuretic activity and minimal vasopressor effect, making it preferred for DI management. A is the opposite — desmopressin has LESS vasopressor activity. C is wrong — it is available intranasal, IV, SubQ, and oral. D reverses the indications — vasopressin is used for septic shock, while desmopressin is the preferred DI treatment.',
        },
      ],
      r: [
        {
          stem: 'The nurse identifies which of the following as clinical indications for desmopressin (DDAVP)?',
          options: [
            'Diabetes insipidus, nocturnal enuresis, hemophilia A, and von Willebrand disease type 1',
            'Diabetes mellitus, insomnia, hemophilia B, and thrombocytopenia',
            'Acromegaly, Cushing syndrome, and deep vein thrombosis',
            'Septic shock, esophageal varices, and cardiac arrest',
          ],
          correct: 0,
          rationale: 'Desmopressin has four key indications: diabetes insipidus (ADH replacement), nocturnal enuresis (reduces nighttime urine production), hemophilia A (releases factor VIII), and von Willebrand disease type 1 (releases vWF). B lists incorrect conditions — hemophilia B involves factor IX, not responsive to DDAVP. C lists conditions treated by somatostatin analogs. D lists vasopressin indications, not desmopressin.',
        },
        {
          stem: 'A patient is prescribed desmopressin (DDAVP) for diabetes insipidus. Which precaution is MOST important for the nurse to reinforce?',
          options: [
            'Avoid taking the medication with food',
            'Restrict fluid intake as directed to prevent water intoxication',
            'Take the medication only when thirsty',
            'Avoid exposure to sunlight while on this medication',
          ],
          correct: 1,
          rationale: 'Fluid restriction is critical with desmopressin to prevent water intoxication and hyponatremia. The drug promotes water reabsorption, and excess fluid intake can lead to dangerous sodium dilution. A — food does not significantly affect desmopressin. C — it is taken on a schedule, not PRN. D — photosensitivity is not associated with desmopressin.',
        },
        {
          stem: 'Desmopressin is available in which routes of administration?',
          options: [
            'Oral and topical only',
            'Intramuscular and rectal only',
            'Intranasal, intravenous, subcutaneous, and oral',
            'Intravenous only',
          ],
          correct: 2,
          rationale: 'Desmopressin is available via intranasal spray, IV, SubQ, and oral routes, offering flexibility depending on the clinical situation. A is incomplete. B lists routes not used for desmopressin. D is too limited.',
        },
      ],
    },
  },

  'Octreotide (Sandostatin)': {
    details: [
      'Somatostatin analog — mimics the inhibitory hormone somatostatin',
      'Three key indications: acromegaly, carcinoid syndrome, esophageal varices',
      'Major side effect: GALLSTONE formation — obtain baseline gallbladder ultrasound before starting',
      'Other side effects: steatorrhea (fatty stools), hyperglycemia, injection site reactions',
      'Routes: SubQ (short-acting) or IM (long-acting depot — Sandostatin LAR)',
      'Suppresses GH, insulin, glucagon, and GI hormones',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with acromegaly has been receiving octreotide (Sandostatin) for 8 months. The patient presents to the clinic with sudden right upper quadrant pain, nausea, and pain radiating to the right shoulder after eating a fatty meal. Which complication does the nurse suspect?',
          options: [
            'Acute pancreatitis from octreotide toxicity',
            'Cholelithiasis (gallstones) — a known complication of octreotide therapy',
            'Hepatic failure from long-term octreotide use',
            'Peptic ulcer disease from increased gastric acid',
          ],
          correct: 1,
          rationale: 'Gallstone formation is a well-documented complication of octreotide because it decreases gallbladder motility and bile secretion. RUQ pain, nausea, and referred pain to the right shoulder after a fatty meal are classic signs of cholelithiasis. A — pancreatitis presents with epigastric pain radiating to the back. C — hepatic failure is not a typical octreotide complication. D — octreotide actually decreases gastric acid secretion, making peptic ulcers less likely.',
        },
        {
          stem: 'A nurse is preparing to start octreotide therapy for a patient with newly diagnosed acromegaly. The provider has not ordered any baseline diagnostic studies. Which action should the nurse take FIRST?',
          options: [
            'Administer the first dose and schedule labs for the next visit',
            'Contact the provider to request a baseline gallbladder ultrasound before initiating therapy',
            'Order a baseline chest X-ray to evaluate for cardiac complications',
            'Request a baseline bone density scan',
          ],
          correct: 1,
          rationale: 'A baseline gallbladder ultrasound is recommended before starting octreotide because of the significant risk of gallstone formation. The nurse should advocate for this baseline study before the first dose. A skips an important safety step. C and D are not standard baseline requirements specific to octreotide initiation.',
        },
        {
          stem: 'A patient with carcinoid syndrome on octreotide reports greasy, foul-smelling stools for the past week and a fasting blood glucose of 198 mg/dL. The patient asks if these are related to the medication. Which response is MOST accurate?',
          options: [
            'These are unrelated — you should see your gastroenterologist and endocrinologist separately',
            'The steatorrhea and hyperglycemia are both known side effects of octreotide and should be reported to your provider',
            'The fatty stools indicate the medication is not working for your carcinoid syndrome',
            'The high blood sugar means you have developed diabetes and need to stop octreotide',
          ],
          correct: 1,
          rationale: 'Both steatorrhea (from decreased pancreatic enzyme secretion) and hyperglycemia (from suppressed insulin secretion) are known side effects of octreotide. The provider needs to evaluate both findings to determine if dose adjustment or additional management is needed. A dismisses the drug connection. C is incorrect — steatorrhea is a side effect, not a sign of treatment failure. D oversimplifies — hyperglycemia may require management but does not necessarily mean stopping the drug.',
        },
      ],
      y: [
        {
          stem: 'A nurse is educating a patient starting octreotide (Sandostatin) SubQ injections. Which teaching points should the nurse include?',
          options: [
            'Report any right upper quadrant abdominal pain — it may indicate gallstones',
            'This medication will increase your appetite and cause weight gain',
            'You should expect your blood sugar levels to decrease significantly',
            'Take the medication with a high-fat meal for better absorption',
          ],
          correct: 0,
          rationale: 'Patients on octreotide must be taught to report RUQ pain because gallstone formation is a significant risk. B is incorrect — octreotide may cause anorexia, not increased appetite. C is the opposite — octreotide can cause hyperglycemia. D — SubQ injections are not taken with meals, and high-fat meals are not relevant to injection absorption.',
        },
        {
          stem: 'A nurse is reviewing the indications for octreotide (Sandostatin). Which group of conditions correctly matches this drug?',
          options: [
            'Heart failure, hypertension, and atrial fibrillation',
            'Acromegaly, carcinoid syndrome, and esophageal varices',
            'Diabetes insipidus, nocturnal enuresis, and hemophilia A',
            'Hypothyroidism, Addison disease, and osteoporosis',
          ],
          correct: 1,
          rationale: 'Octreotide is used for acromegaly (suppresses GH), carcinoid syndrome (controls flushing and diarrhea), and esophageal varices (reduces splanchnic blood flow). A lists cardiovascular conditions. C lists desmopressin indications. D lists endocrine conditions not treated with somatostatin analogs.',
        },
        {
          stem: 'A patient on long-term octreotide asks why periodic ultrasounds are ordered. The nurse explains:',
          options: [
            'The ultrasounds check for liver tumors caused by the medication',
            'The ultrasounds monitor for gallstone development, which is a common side effect',
            'The ultrasounds evaluate kidney function since octreotide is nephrotoxic',
            'The ultrasounds are routine and unrelated to the medication',
          ],
          correct: 1,
          rationale: 'Periodic gallbladder ultrasounds are recommended during octreotide therapy because the drug significantly increases the risk of gallstone formation by decreasing gallbladder contractility. A — octreotide does not cause liver tumors. C — octreotide is not nephrotoxic. D dismisses the clinical relevance of the monitoring.',
        },
      ],
      r: [
        {
          stem: 'Octreotide (Sandostatin) belongs to which drug classification?',
          options: [
            'Growth hormone receptor antagonist',
            'Somatostatin analog',
            'Dopamine agonist',
            'Gonadotropin-releasing hormone agonist',
          ],
          correct: 1,
          rationale: 'Octreotide is a somatostatin analog that mimics the inhibitory effects of natural somatostatin, suppressing GH, insulin, glucagon, and various GI hormones. A describes pegvisomant. C describes bromocriptine or cabergoline. D describes leuprolide or goserelin.',
        },
        {
          stem: 'Which side effect is MOST characteristic of octreotide therapy and requires baseline screening?',
          options: [
            'Gallstone formation',
            'Hearing loss',
            'Peripheral neuropathy',
            'Pulmonary fibrosis',
          ],
          correct: 0,
          rationale: 'Gallstone formation is the hallmark side effect of octreotide due to decreased gallbladder motility. A baseline gallbladder ultrasound is recommended before starting therapy. B, C, and D are not associated with octreotide use.',
        },
        {
          stem: 'A nurse understands that octreotide suppresses which of the following hormones?',
          options: [
            'Thyroid hormone and cortisol only',
            'Growth hormone, insulin, and glucagon',
            'Estrogen and progesterone only',
            'Aldosterone and antidiuretic hormone only',
          ],
          correct: 1,
          rationale: 'Octreotide mimics somatostatin, which is an inhibitory hormone that suppresses growth hormone, insulin, glucagon, and various GI hormones. This broad suppression explains its multiple indications and side effects (hyperglycemia from insulin suppression, steatorrhea from decreased pancreatic function). A, C, and D list hormones not primarily affected by somatostatin analogs.',
        },
      ],
    },
  },

  'Lanreotide (Somatuline)': {
    details: [
      'Somatostatin analog — same drug class as octreotide',
      'Given as a deep subcutaneous injection ONCE monthly (convenience advantage)',
      'Indications: acromegaly, gastroenteropancreatic neuroendocrine tumors (GEP-NETs)',
      'Same side effect profile as octreotide: gallstones, hyperglycemia, steatorrhea',
      'Administered in the upper outer gluteal area — deep SubQ, not IM',
      'Pre-filled syringe — allow to reach room temperature before injecting',
    ],
    questions: {
      g: [
        {
          stem: 'A patient receiving monthly lanreotide (Somatuline) injections for acromegaly reports new epigastric pain after meals and pale, floating stools for the past 2 weeks. The fasting glucose is 210 mg/dL. Which constellation of findings should the nurse recognize?',
          options: [
            'Infection from immunosuppression caused by lanreotide',
            'Normal GI adjustment period that will resolve without intervention',
            'Multiple known adverse effects of somatostatin analog therapy requiring provider notification',
            'Signs of medication allergy requiring discontinuation',
          ],
          correct: 2,
          rationale: 'Steatorrhea (pale, floating, fatty stools), post-meal epigastric discomfort (possible gallstone-related), and hyperglycemia (fasting glucose 210 mg/dL) are all established adverse effects of somatostatin analogs like lanreotide. The nurse should notify the provider for evaluation and management. A — lanreotide is not immunosuppressive. B dismisses concerning findings. D — these are pharmacologic side effects, not allergic reactions (which would present with rash, urticaria, anaphylaxis).',
        },
        {
          stem: 'A nurse is administering the first dose of lanreotide (Somatuline) to a patient with a neuroendocrine tumor. The pre-filled syringe has just been removed from the refrigerator. Which action should the nurse take FIRST?',
          options: [
            'Inject immediately to maintain drug potency',
            'Allow the syringe to reach room temperature for 30 minutes before administration',
            'Warm the syringe under hot running water for rapid preparation',
            'Draw up the medication into a standard syringe for easier administration',
          ],
          correct: 1,
          rationale: 'Lanreotide in its pre-filled syringe should be allowed to reach room temperature before injection to reduce injection site pain and ensure proper drug consistency for deep SubQ administration. A — injecting cold medication increases pain and may affect absorption. C — hot water could degrade the drug. D — lanreotide comes in a pre-filled syringe designed for deep SubQ injection and should not be transferred.',
        },
        {
          stem: 'A patient with acromegaly has been on lanreotide for 6 months. The IGF-1 level is within normal range, but the patient has developed new right upper quadrant pain. An ultrasound reveals cholelithiasis. The patient asks if they should stop the medication. What is the nurse\'s BEST response?',
          options: [
            'Yes, gallstones mean you must stop the medication permanently',
            'This is a known side effect — the provider will determine the best plan, which may include continuing treatment with gallstone management',
            'Gallstones are not related to lanreotide so this is coincidental',
            'We will switch you to a different drug class that does not cause gallstones',
          ],
          correct: 1,
          rationale: 'Gallstones are a known complication of somatostatin analogs. However, stopping a medication that is effectively controlling acromegaly (normal IGF-1) requires risk-benefit analysis by the provider. The gallstones may be managed separately. A is premature — this is a provider decision. C is incorrect — gallstones are directly linked to somatostatin analog use. D is misleading — while pegvisomant is an alternative, the decision involves many factors and is not the nurse\'s independent call.',
        },
      ],
      y: [
        {
          stem: 'A nurse is teaching a patient about lanreotide injections. Which statement by the patient indicates correct understanding of the administration schedule?',
          options: [
            'I need to come in daily for my injection',
            'I need to come in once a week for my injection',
            'I need to come in once a month for my injection',
            'I only need the injection when my symptoms flare up',
          ],
          correct: 2,
          rationale: 'Lanreotide (Somatuline Depot) is administered as a deep subcutaneous injection once every 4 weeks (monthly). This is a major convenience advantage over short-acting octreotide, which requires multiple daily injections. A, B, and D are incorrect schedules.',
        },
        {
          stem: 'A nurse is preparing to administer lanreotide (Somatuline). Which injection site is correct?',
          options: [
            'Deltoid muscle using a 1-inch needle at 90 degrees',
            'Upper outer gluteal area as a deep subcutaneous injection',
            'Anterior thigh using a standard SubQ technique',
            'Abdomen, 2 inches from the umbilicus',
          ],
          correct: 1,
          rationale: 'Lanreotide is given as a deep subcutaneous injection in the upper outer gluteal area. This is specific to this formulation. A describes an IM deltoid injection. C and D describe standard SubQ sites but lanreotide specifically requires the deep SubQ gluteal approach for proper depot formation and sustained release.',
        },
        {
          stem: 'A nurse is comparing octreotide and lanreotide for a patient with acromegaly. Which statement about lanreotide is correct?',
          options: [
            'Lanreotide is from a completely different drug class than octreotide',
            'Lanreotide must be given daily like short-acting octreotide',
            'Lanreotide has the same gallstone risk and is given once monthly for convenience',
            'Lanreotide has no risk of gallstones unlike octreotide',
          ],
          correct: 2,
          rationale: 'Both lanreotide and octreotide are somatostatin analogs with the same side effect profile (gallstones, hyperglycemia, steatorrhea). Lanreotide\'s advantage is monthly dosing versus octreotide\'s multiple daily injections (short-acting form). A is wrong — same class. B is wrong — monthly, not daily. D is wrong — same gallstone risk.',
        },
      ],
      r: [
        {
          stem: 'Lanreotide (Somatuline) belongs to which drug classification?',
          options: [
            'Growth hormone receptor antagonist',
            'Somatostatin analog',
            'Dopamine agonist',
            'Thyroid hormone replacement',
          ],
          correct: 1,
          rationale: 'Lanreotide is a somatostatin analog, the same class as octreotide. Both mimic the inhibitory effects of natural somatostatin. A describes pegvisomant. C describes bromocriptine. D describes levothyroxine.',
        },
        {
          stem: 'Which of the following are indications for lanreotide (Somatuline)?',
          options: [
            'Diabetes insipidus and nocturnal enuresis',
            'Acromegaly and gastroenteropancreatic neuroendocrine tumors',
            'Septic shock and cardiac arrest',
            'Hypothyroidism and myxedema coma',
          ],
          correct: 1,
          rationale: 'Lanreotide is indicated for acromegaly (suppresses GH secretion) and GEP-NETs (controls hormone-secreting tumors). A lists desmopressin indications. C lists vasopressin/epinephrine indications. D lists levothyroxine indications.',
        },
        {
          stem: 'Which side effects should the nurse monitor for in a patient receiving lanreotide?',
          options: [
            'Gallstone formation, hyperglycemia, and steatorrhea',
            'Hypoglycemia, weight gain, and edema',
            'Hair loss, photosensitivity, and kidney stones',
            'Bone marrow suppression, mouth sores, and alopecia',
          ],
          correct: 0,
          rationale: 'Lanreotide shares the same side effect profile as all somatostatin analogs: gallstones (decreased gallbladder motility), hyperglycemia (suppressed insulin), and steatorrhea (decreased pancreatic enzyme secretion). B describes opposite metabolic effects. C lists unrelated side effects. D describes chemotherapy side effects.',
        },
      ],
    },
  },

  'Pegvisomant (Somavert)': {
    details: [
      'Growth hormone RECEPTOR ANTAGONIST — blocks GH from binding to its receptor',
      'The PARADOX: serum GH levels go UP on this drug (expected — negative feedback loop is interrupted)',
      'Monitor IGF-1 levels (NOT GH) — IGF-1 should decrease, confirming the drug is working',
      'Liver function test (LFT) monitoring required — risk of hepatotoxicity',
      'Does NOT shrink or suppress the pituitary tumor (only blocks GH action peripherally)',
      'Used when surgery and somatostatin analogs have failed for acromegaly',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with acromegaly is started on pegvisomant (Somavert) after failing octreotide therapy. Two months later, labs show GH levels are elevated above baseline. The patient is alarmed. Which nursing response is MOST appropriate?',
          options: [
            'This is concerning — I will notify the provider to discontinue the medication immediately',
            'Elevated GH is expected with pegvisomant because it blocks the GH receptor, which interrupts feedback and raises GH levels — your IGF-1 level is what we monitor for effectiveness',
            'The medication is clearly not working since GH is higher than before treatment',
            'We need to double the dose since the GH level has not decreased',
          ],
          correct: 1,
          rationale: 'This is the PEGVISOMANT PARADOX — the most testable concept for this drug. Pegvisomant blocks GH receptors, so the pituitary no longer receives negative feedback from IGF-1, causing it to produce MORE GH. This is EXPECTED. Treatment success is measured by IGF-1 levels (which should decrease), NOT GH levels. A and C incorrectly interpret elevated GH as treatment failure. D incorrectly uses GH as the dosing guide.',
        },
        {
          stem: 'A nurse is reviewing labs for a patient on pegvisomant. The ALT is 180 U/L (normal: 7-56 U/L) and AST is 165 U/L (normal: 10-40 U/L). The IGF-1 is within normal limits. Which action is the PRIORITY?',
          options: [
            'Continue the medication since IGF-1 shows it is working effectively',
            'Hold the pegvisomant and notify the provider — these LFTs indicate possible hepatotoxicity',
            'Administer N-acetylcysteine for presumed acetaminophen overdose',
            'Increase the dose since liver enzyme elevation is a sign the drug needs adjustment',
          ],
          correct: 1,
          rationale: 'Pegvisomant carries a risk of hepatotoxicity, and LFTs must be monitored regularly. ALT 180 and AST 165 are significantly elevated (3x upper normal), requiring the drug to be held and the provider notified. A dangerously prioritizes efficacy over safety. C assumes a specific cause without evidence. D is backwards — elevated LFTs are a sign to reduce or stop the drug, not increase it.',
        },
        {
          stem: 'A patient with acromegaly on pegvisomant has an MRI showing pituitary tumor growth. The patient asks why the tumor grew despite being on treatment. Which explanation is accurate?',
          options: [
            'Pegvisomant caused the tumor to grow as a direct side effect',
            'Pegvisomant blocks GH action at the receptor but does NOT suppress or shrink the pituitary tumor — separate tumor management is needed',
            'The tumor growth means pegvisomant has completely failed and must be stopped',
            'This is impossible — pegvisomant should have shrunk the tumor',
          ],
          correct: 1,
          rationale: 'Pegvisomant works peripherally by blocking GH receptors. It has NO direct effect on the pituitary tumor itself — it does not suppress GH secretion or shrink the tumor. Tumor monitoring with periodic MRIs is essential because growth may continue. A oversimplifies — pegvisomant does not directly cause tumor growth, but the elevated GH from lost feedback could theoretically stimulate it. C is too extreme — the drug may still be managing symptoms effectively. D is incorrect — tumor shrinkage is not expected with this mechanism.',
        },
      ],
      y: [
        {
          stem: 'A nurse is teaching a patient about pegvisomant therapy for acromegaly. Which statement indicates correct understanding?',
          options: [
            'My growth hormone levels should decrease if the drug is working',
            'I need regular liver function tests because this medication can affect my liver',
            'This medication will shrink my pituitary tumor over time',
            'I only need to take this medication until my GH level normalizes',
          ],
          correct: 1,
          rationale: 'Regular LFT monitoring is essential because pegvisomant can cause hepatotoxicity. A is incorrect — GH levels actually increase (the paradox). C is incorrect — pegvisomant does not affect tumor size. D is incorrect — GH levels are not the treatment target; IGF-1 is monitored, and treatment is typically long-term.',
        },
        {
          stem: 'A nurse is comparing somatostatin analogs (octreotide) with pegvisomant for acromegaly treatment. Which statement about pegvisomant is correct?',
          options: [
            'Pegvisomant suppresses GH secretion from the pituitary, just like octreotide',
            'Pegvisomant blocks GH receptors in peripheral tissues while octreotide suppresses GH release',
            'Pegvisomant is always first-line therapy for acromegaly',
            'Pegvisomant has a lower risk of side effects compared to octreotide',
          ],
          correct: 1,
          rationale: 'This captures the key mechanistic difference: octreotide (somatostatin analog) suppresses GH RELEASE from the pituitary, while pegvisomant blocks GH RECEPTORS peripherally. Pegvisomant is typically reserved for patients who fail surgery and/or somatostatin analogs. A incorrectly equates the mechanisms. C is wrong — pegvisomant is typically second/third-line. D is not accurate — pegvisomant has its own unique risks (hepatotoxicity).',
        },
        {
          stem: 'Which laboratory tests should the nurse monitor for a patient on pegvisomant (Somavert)?',
          options: [
            'Serum GH level and complete blood count',
            'IGF-1 level and liver function tests',
            'Serum calcium and phosphorus levels',
            'Urine specific gravity and serum osmolality',
          ],
          correct: 1,
          rationale: 'IGF-1 is monitored for treatment effectiveness (should decrease), and LFTs are monitored for hepatotoxicity (a known risk). A is incorrect — GH levels rise on pegvisomant (expected) and are not used for monitoring; CBC is not specifically indicated. C monitors calcium/phosphorus metabolism, not relevant here. D monitors fluid balance, relevant to vasopressin/desmopressin, not pegvisomant.',
        },
      ],
      r: [
        {
          stem: 'Pegvisomant (Somavert) works by which mechanism?',
          options: [
            'Stimulating somatostatin release from the hypothalamus',
            'Blocking growth hormone receptors in peripheral tissues',
            'Suppressing growth hormone release from the anterior pituitary',
            'Increasing insulin-like growth factor production in the liver',
          ],
          correct: 1,
          rationale: 'Pegvisomant is a GH receptor antagonist — it blocks GH from binding to its receptor in peripheral tissues (especially the liver), preventing IGF-1 production. A and C describe somatostatin analog mechanisms. D describes the opposite of what pegvisomant does — it DECREASES IGF-1 production.',
        },
        {
          stem: 'A nurse understands that during pegvisomant therapy, which lab change is EXPECTED and does NOT indicate treatment failure?',
          options: [
            'Decreased serum GH levels',
            'Increased serum GH levels',
            'Elevated IGF-1 levels',
            'Decreased liver enzymes',
          ],
          correct: 1,
          rationale: 'Increased GH levels are EXPECTED with pegvisomant — this is the paradox. By blocking GH receptors, less IGF-1 is produced, removing negative feedback on the pituitary, which then produces more GH. A is what you might expect, but it is NOT what happens. C would indicate treatment failure (IGF-1 should decrease). D is not specifically expected or unexpected.',
        },
        {
          stem: 'Pegvisomant is typically prescribed for acromegaly in which clinical scenario?',
          options: [
            'As first-line therapy before trying any other treatment',
            'Only for children with growth hormone deficiency',
            'After surgery and/or somatostatin analogs have failed to control the disease',
            'As a preventive medication for patients at risk of acromegaly',
          ],
          correct: 2,
          rationale: 'Pegvisomant is reserved for patients whose acromegaly is not adequately controlled by surgery and/or somatostatin analogs (octreotide, lanreotide). It is a second/third-line agent. A is incorrect — surgery is usually first-line. B is wrong — pegvisomant is for acromegaly (excess GH), not GH deficiency. D is not a valid indication — there is no preventive use.',
        },
      ],
    },
  },

  // ═══ ADRENAL DRUGS (4) ═══

  'Hydrocortisone': {
    details: [
      'Primary glucocorticoid replacement for Addison\'s disease (primary adrenal insufficiency)',
      'Potency: 1x (baseline) — lowest potency glucocorticoid',
      'NEVER stop abruptly — adrenal crisis risk: hypotension, shock, cardiovascular collapse, death',
      'Stress dosing: double or triple dose during illness, surgery, or trauma',
      'Take with food or milk to decrease GI irritation',
      'Patient must wear MedicAlert bracelet and carry injectable emergency dose',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with Addison\'s disease who takes hydrocortisone 20 mg daily is admitted for emergency appendectomy. In the preoperative area, the patient\'s blood pressure drops to 78/50 mmHg, heart rate is 128 bpm, and the patient becomes confused and diaphoretic. Which action should the nurse take FIRST?',
          options: [
            'Administer the patient\'s scheduled morning dose of hydrocortisone orally',
            'Notify the provider and anticipate IV hydrocortisone stress dosing',
            'Increase the IV normal saline rate and place the patient in Trendelenburg position',
            'Obtain a serum cortisol level and basic metabolic panel before intervening',
          ],
          correct: 1,
          rationale: 'B) CORRECT — This patient is experiencing adrenal crisis (Addisonian crisis) triggered by surgical stress. The body cannot mount a cortisol response, causing cardiovascular collapse. IV hydrocortisone stress dosing (100 mg IV bolus, then 50 mg every 8 hours) is the life-saving intervention. A) Oral hydrocortisone is inadequate in crisis — the patient needs IV delivery for immediate effect, and oral absorption is unreliable in a hypotensive, potentially vomiting patient. C) Fluids and positioning support blood pressure but do NOT address the root cause (cortisol deficiency). Without cortisol replacement, fluids alone will not sustain hemodynamics. D) Waiting for lab results delays critical treatment. Adrenal crisis is treated empirically based on clinical presentation in a known Addison\'s patient — treat first, confirm later.',
        },
        {
          stem: 'A nurse is caring for a patient with Addison\'s disease on hydrocortisone replacement therapy. The patient develops influenza with a temperature of 102.4°F (39.1°C), vomiting, and inability to keep oral medications down for 12 hours. Which finding is MOST concerning to the nurse?',
          options: [
            'Blood glucose of 68 mg/dL',
            'Serum potassium of 5.8 mEq/L with blood pressure 82/54 mmHg',
            'Heart rate of 104 bpm with oral temperature 102.4°F',
            'White blood cell count of 12,500/mm³',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Hyperkalemia (5.8 mEq/L, normal 3.5-5.0) combined with hypotension signals impending adrenal crisis. Without cortisol (missed oral doses due to vomiting), aldosterone production also drops, causing sodium loss and potassium retention. This combination is life-threatening — cardiac dysrhythmias from hyperkalemia plus cardiovascular collapse from hypotension. A) Blood glucose of 68 is mildly low and expected without cortisol (cortisol maintains glucose), but it is not immediately life-threatening and can be corrected with IV dextrose. C) Tachycardia with fever is an expected physiological response to infection — not specific to adrenal crisis. D) Elevated WBC of 12,500 is an expected immune response to influenza infection and is not concerning in this context.',
        },
        {
          stem: 'A nurse receives shift report on four patients. Which patient should the nurse assess FIRST?',
          options: [
            'A patient with Cushing\'s syndrome whose morning blood glucose is 186 mg/dL',
            'A patient with Addison\'s disease who reports dizziness when standing and has not taken hydrocortisone in 2 days due to running out of medication',
            'A patient with hypothyroidism whose TSH level is 8.2 mIU/L on levothyroxine therapy',
            'A patient with type 2 diabetes whose HbA1c result returned at 7.8%',
          ],
          correct: 1,
          rationale: 'B) CORRECT — An Addison\'s patient who has not taken hydrocortisone for 2 days is at imminent risk for adrenal crisis (life-threatening hypotension, shock, death). Orthostatic dizziness indicates hemodynamic instability is already developing. This patient needs immediate assessment and intervention. A) Blood glucose of 186 in Cushing\'s is expected (cortisol excess causes hyperglycemia) and is not immediately dangerous — it requires monitoring and possible medication adjustment but is not emergent. C) TSH of 8.2 indicates subtherapeutic levothyroxine dosing, but hypothyroidism worsens gradually over weeks — this is not an emergency. D) HbA1c of 7.8% reflects 3-month glucose control and requires treatment plan adjustment, not immediate intervention.',
        },
      ],
      y: [
        {
          stem: 'A nurse is assessing a patient newly diagnosed with Addison\'s disease who is being started on hydrocortisone replacement therapy. Which assessment findings does the nurse expect to find BEFORE treatment is initiated?',
          options: [
            'Moon face, buffalo hump, and purple striae on the abdomen',
            'Hyperpigmentation of skin creases, fatigue, and low blood pressure',
            'Weight gain, facial edema, and elevated blood glucose',
            'Exophthalmos, heat intolerance, and tachycardia',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Addison\'s disease (primary adrenal insufficiency) presents with hyperpigmentation (excess ACTH stimulates melanocytes), profound fatigue (no cortisol for energy metabolism), and hypotension (no aldosterone for sodium/water retention). These are the classic triad. A) Moon face, buffalo hump, and purple striae are features of Cushing\'s syndrome (cortisol EXCESS) — the exact opposite of Addison\'s. This is the most common exam trap. C) Weight gain, edema, and hyperglycemia also describe Cushing\'s syndrome or could suggest other endocrine disorders. D) Exophthalmos, heat intolerance, and tachycardia describe Graves\' disease (hyperthyroidism), not adrenal insufficiency.',
        },
        {
          stem: 'A patient with Addison\'s disease takes hydrocortisone 20 mg every morning and 10 mg every evening. The patient calls the clinic reporting a cold with mild body aches and a temperature of 100.8°F (38.2°C). Which instruction should the nurse provide?',
          options: [
            '"Continue your regular dose — a mild cold does not require dose changes"',
            '"Stop taking hydrocortisone until the fever resolves to prevent immunosuppression"',
            '"Double your hydrocortisone dose and contact your provider if symptoms worsen"',
            '"Come to the emergency department immediately for IV hydrocortisone"',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Stress dosing for illness means doubling (or tripling for severe illness) the hydrocortisone dose. A mild febrile illness qualifies as physiological stress that increases cortisol demand. The patient should double the dose and follow up if worsening. A) Continuing the regular dose during illness is dangerous — the body needs MORE cortisol during stress. The normal adrenal glands would produce 2-3x more cortisol during illness, but Addison\'s patients cannot do this. B) NEVER stop hydrocortisone — abrupt discontinuation causes adrenal crisis. This is the most dangerous option. D) A mild cold with low-grade fever does not require emergency IV treatment. ED visits are reserved for severe illness, inability to keep oral medications down (vomiting), or signs of adrenal crisis.',
        },
        {
          stem: 'A nurse is teaching a patient with Addison\'s disease about hydrocortisone therapy. Which statement by the patient requires further teaching?',
          options: [
            '"I should wear a medical alert bracelet that says I take corticosteroids"',
            '"I need to take my medication with food to protect my stomach"',
            '"If I feel better after a few months, I can gradually stop taking this medication"',
            '"I should carry an emergency injection kit when I travel"',
          ],
          correct: 2,
          rationale: 'C) REQUIRES FURTHER TEACHING — Hydrocortisone replacement for Addison\'s disease is LIFELONG. The adrenal glands do not recover. Stopping the medication, even gradually, will lead to adrenal insufficiency and potentially fatal adrenal crisis. The patient must understand this is not a temporary treatment. A) Correct understanding — MedicAlert bracelet is essential so emergency responders know to administer corticosteroids if the patient is found unresponsive. B) Correct understanding — hydrocortisone should be taken with food or milk to reduce GI irritation and ulcer risk. D) Correct understanding — an emergency injectable hydrocortisone kit (Solu-Cortef) is critical for situations where oral medication cannot be taken (vomiting, loss of consciousness).',
        },
      ],
      r: [
        {
          stem: 'A nurse is reviewing medication orders for a patient with Addison\'s disease. Hydrocortisone is prescribed as replacement therapy. The nurse understands that hydrocortisone replaces which hormone that the patient\'s body can no longer produce?',
          options: [
            'Aldosterone',
            'Cortisol',
            'Epinephrine',
            'Thyroid hormone',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Hydrocortisone is a synthetic glucocorticoid that replaces cortisol, which the damaged adrenal cortex can no longer produce in Addison\'s disease. Cortisol is essential for glucose metabolism, stress response, and immune regulation. A) Aldosterone is a mineralocorticoid replaced by fludrocortisone (Florinef), not hydrocortisone. While hydrocortisone has mild mineralocorticoid activity, its primary role is cortisol replacement. C) Epinephrine is produced by the adrenal medulla, not the adrenal cortex. The adrenal medulla is typically not affected in Addison\'s disease. D) Thyroid hormone is produced by the thyroid gland and replaced by levothyroxine — it has no connection to adrenal function.',
        },
        {
          stem: 'A patient asks the nurse why they cannot simply stop taking hydrocortisone when they feel well. Which response by the nurse is most accurate?',
          options: [
            '"Stopping suddenly can cause your blood sugar to rise dangerously high"',
            '"Your body has stopped making its own cortisol, so stopping the medication can cause a life-threatening drop in blood pressure"',
            '"The medication needs to be taken for at least one year before you can taper off"',
            '"Stopping the medication will cause your potassium levels to drop too low"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — In Addison\'s disease, the adrenal glands are permanently damaged and cannot produce cortisol. Without exogenous cortisol replacement, the patient develops adrenal crisis: severe hypotension, cardiovascular collapse, and potentially death. This is why abrupt discontinuation is never safe. A) Stopping cortisol causes HYPOglycemia (cortisol maintains blood glucose), not hyperglycemia. Blood sugar drops, not rises. C) Hydrocortisone replacement for Addison\'s is lifelong — there is no "taper off" timeline. The adrenal glands do not regenerate. D) Without cortisol/aldosterone, potassium levels RISE (hyperkalemia), not drop. Cortisol and aldosterone promote potassium excretion.',
        },
        {
          stem: 'A nurse is administering hydrocortisone to a patient with Addison\'s disease. Which action should the nurse include when administering this medication?',
          options: [
            'Give the medication on an empty stomach for maximum absorption',
            'Administer the medication with food or milk',
            'Hold the medication if the patient\'s blood pressure is above 120/80 mmHg',
            'Crush the tablet and mix with grapefruit juice',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Hydrocortisone should be taken with food or milk to decrease GI irritation. Glucocorticoids increase gastric acid secretion and can cause peptic ulcers, so food provides a protective buffer. A) Empty stomach increases GI irritation and ulcer risk. There is no therapeutic benefit to empty-stomach administration for hydrocortisone. C) A blood pressure above 120/80 is not a reason to hold hydrocortisone in an Addison\'s patient — these patients are typically hypotensive, and normalization of blood pressure is a therapeutic goal. D) Grapefruit juice can increase the effects of corticosteroids (inhibits CYP3A4 metabolism) and should be avoided, not used as an administration vehicle.',
        },
      ],
    },
  },

  'Glucocorticoids (Potency Ladder)': {
    details: [
      'Potency ladder: Hydrocortisone (1x) → Prednisone (4x) → Methylprednisolone (5x) → Dexamethasone (25x)',
      'Higher potency = lower dose needed for equivalent effect',
      'Shared side effects: hyperglycemia, immunosuppression, osteoporosis, Cushing features, poor wound healing',
      'All glucocorticoids must be TAPERED — never stopped abruptly (HPA axis suppression)',
      'Monitor: blood glucose, potassium (depleted), calcium (depleted), bone density',
      'Grapefruit juice increases glucocorticoid effects — avoid',
    ],
    questions: {
      g: [
        {
          stem: 'A nurse is caring for a patient who has been taking prednisone 40 mg daily for 3 weeks to treat an autoimmune condition. The provider writes an order to discontinue prednisone. The nurse should:',
          options: [
            'Administer the last dose and discontinue as ordered',
            'Question the order because prednisone requires gradual tapering after prolonged use',
            'Hold the medication and wait for the pharmacy to verify the order',
            'Discontinue the medication but schedule a follow-up cortisol level in 1 week',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Prednisone taken for more than 1-2 weeks suppresses the hypothalamic-pituitary-adrenal (HPA) axis. The adrenal glands reduce endogenous cortisol production. Abrupt discontinuation can cause adrenal crisis (hypotension, shock, death) because the adrenals cannot immediately resume cortisol production. The nurse must question the order and advocate for a tapering schedule. A) Simply following the discontinue order is unsafe — this is a situation where the nurse must use clinical judgment and question a potentially harmful order. C) Waiting for pharmacy verification delays necessary advocacy. The nurse should directly contact the prescriber. D) Discontinuing and scheduling a lab is too late — the crisis can occur within hours to days of abrupt cessation, not a week later.',
        },
        {
          stem: 'A nurse is monitoring four patients receiving glucocorticoid therapy. Which patient requires the MOST immediate intervention?',
          options: [
            'A patient on prednisone whose fasting blood glucose is 162 mg/dL',
            'A patient on methylprednisolone who reports increased appetite and a 3-pound weight gain over 2 weeks',
            'A patient on dexamethasone who has a temperature of 101.8°F (38.8°C) with a productive cough and WBC of 3,200/mm³',
            'A patient on hydrocortisone who reports mild epigastric burning after taking the medication',
          ],
          correct: 2,
          rationale: 'C) CORRECT — This patient shows signs of infection (fever, productive cough) with a critically low WBC of 3,200/mm³ (normal 5,000-10,000). Glucocorticoids cause immunosuppression by suppressing WBC function and counts. A suppressed immune system plus active infection signs is an emergency — the patient cannot mount an adequate immune response and is at risk for sepsis. A) Fasting glucose of 162 is elevated but expected with glucocorticoid therapy (steroids raise blood glucose). This requires monitoring and possible antihyperglycemic adjustment but is not immediately life-threatening. B) Increased appetite and weight gain are common, expected side effects of glucocorticoids — not emergent. D) Epigastric burning is a GI side effect that should be addressed (take with food, consider GI protection) but is not immediately dangerous.',
        },
        {
          stem: 'A patient is being converted from IV methylprednisolone 20 mg to an equivalent oral prednisone dose. The nurse anticipates the provider will order approximately:',
          options: [
            'Prednisone 4 mg (lower dose because oral is more potent)',
            'Prednisone 16 mg (equivalent anti-inflammatory dose)',
            'Prednisone 25 mg (higher dose because oral has lower bioavailability)',
            'Prednisone 20 mg (1:1 conversion between glucocorticoids)',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Methylprednisolone is 5x potency; prednisone is 4x potency. To convert: 20 mg methylprednisolone / 5 = 4 mg hydrocortisone equivalents, then 4 x (5/4) = 25 mg prednisone. The slightly higher oral dose accounts for the potency difference — prednisone is slightly less potent mg-for-mg than methylprednisolone. A) 4 mg would be far too low — this would represent a massive dose reduction causing adrenal insufficiency. B) 16 mg is an incorrect calculation that does not properly account for the relative potencies. D) 1:1 conversion ignores the different potencies of these two drugs — methylprednisolone is more potent per mg than prednisone.',
        },
      ],
      y: [
        {
          stem: 'A patient has been taking prednisone for 6 months for rheumatoid arthritis. The nurse should monitor for which long-term complications of glucocorticoid therapy? (Select the BEST answer)',
          options: [
            'Hypoglycemia, hyperkalemia, and weight loss',
            'Osteoporosis, hyperglycemia, and increased infection risk',
            'Hypothyroidism, bradycardia, and constipation',
            'Hypotension, bronchospasm, and hyperkalemia',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Long-term glucocorticoid use causes: osteoporosis (calcium/vitamin D loss, bone breakdown), hyperglycemia (cortisol promotes gluconeogenesis and insulin resistance), and immunosuppression (increased infection risk from WBC suppression). These are the "big three" monitoring priorities. A) Glucocorticoids cause HYPERglycemia (not hypo), HYPOkalemia (not hyper), and weight GAIN (not loss) — this answer is the exact opposite of reality. C) These are symptoms of hypothyroidism, not glucocorticoid side effects. Glucocorticoids do not significantly affect thyroid function. D) Glucocorticoids cause HYPERtension (sodium/water retention), not hypotension. Bronchospasm is not a side effect — glucocorticoids are actually used to TREAT bronchospasm.',
        },
        {
          stem: 'A nurse is teaching a patient newly prescribed prednisone about dietary modifications during therapy. Which dietary instruction is MOST important?',
          options: [
            '"Decrease your sodium intake and increase potassium-rich foods like bananas and oranges"',
            '"Increase your sodium intake to prevent the hypotension caused by this medication"',
            '"Avoid all dairy products because this medication causes lactose intolerance"',
            '"Eat a high-protein diet to counteract the weight loss from this medication"',
          ],
          correct: 0,
          rationale: 'A) CORRECT — Glucocorticoids cause sodium and water retention (leading to hypertension and edema) and potassium excretion (leading to hypokalemia). The patient should decrease sodium to minimize fluid retention and increase potassium-rich foods to prevent dangerous hypokalemia. B) Increasing sodium is the opposite of what is needed — glucocorticoids already cause sodium retention. Adding more sodium worsens hypertension and edema. C) Glucocorticoids do not cause lactose intolerance. Dairy is actually encouraged for calcium to help prevent osteoporosis. D) Glucocorticoids cause weight GAIN (increased appetite, fat redistribution), not weight loss. A high-protein diet is not the primary dietary concern.',
        },
        {
          stem: 'A nurse is reviewing a patient\'s medication list and notes the patient takes prednisone 10 mg daily along with ibuprofen 600 mg three times daily for arthritis pain. The nurse should be concerned about which potential complication?',
          options: [
            'Serotonin syndrome from the drug interaction',
            'GI bleeding and peptic ulcer formation',
            'Dangerous hypotension from combined vasodilation',
            'Hepatotoxicity requiring liver function monitoring',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Both glucocorticoids and NSAIDs (ibuprofen) independently increase GI bleeding and ulcer risk. Glucocorticoids increase gastric acid secretion and decrease mucosal protection. NSAIDs inhibit prostaglandin production that protects the GI lining. Together, the risk is significantly compounded — this combination should be flagged and the patient monitored closely or given GI protection (PPI). A) Serotonin syndrome involves serotonergic drugs (SSRIs, MAOIs, tramadol) — neither prednisone nor ibuprofen affects serotonin. C) Neither drug causes significant vasodilation or hypotension. Glucocorticoids actually promote sodium/water retention and hypertension. D) While NSAIDs can rarely affect the liver, hepatotoxicity is not the primary concern with this specific combination — GI bleeding is the major risk.',
        },
      ],
      r: [
        {
          stem: 'A nurse is comparing glucocorticoid medications. Which drug has the HIGHEST anti-inflammatory potency?',
          options: [
            'Hydrocortisone',
            'Prednisone',
            'Methylprednisolone',
            'Dexamethasone',
          ],
          correct: 3,
          rationale: 'D) CORRECT — Dexamethasone has 25x the anti-inflammatory potency of hydrocortisone, making it the most potent glucocorticoid on the standard potency ladder. The order from lowest to highest: Hydrocortisone (1x) → Prednisone (4x) → Methylprednisolone (5x) → Dexamethasone (25x). A) Hydrocortisone is the baseline (1x potency) — the least potent. B) Prednisone is 4x potency — moderate. C) Methylprednisolone is 5x potency — moderately high but still far below dexamethasone.',
        },
        {
          stem: 'A patient taking long-term prednisone develops a rounded face, central obesity, and thin skin that bruises easily. The nurse recognizes these as signs of:',
          options: [
            'Addison\'s disease from medication failure',
            'Iatrogenic Cushing\'s syndrome from exogenous glucocorticoids',
            'Allergic reaction to prednisone requiring discontinuation',
            'Hypothyroidism developing as a side effect of steroid therapy',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Moon face, central (truncal) obesity, thin fragile skin, and easy bruising are classic features of Cushing\'s syndrome. When caused by exogenous glucocorticoid use, it is called "iatrogenic" Cushing\'s syndrome. This is an expected side effect of long-term high-dose glucocorticoid therapy, not an emergency, but the provider should evaluate whether the dose can be reduced. A) Addison\'s disease is cortisol DEFICIENCY — the opposite. A patient TAKING prednisone has excess cortisol, not deficiency. C) These are not allergic reaction symptoms. Allergic reactions involve urticaria, angioedema, anaphylaxis — not gradual body changes. D) Hypothyroidism causes different symptoms: cold intolerance, constipation, weight gain with myxedema. The pattern described is specific to cortisol excess.',
        },
        {
          stem: 'A nurse is educating a patient about why glucocorticoid medications must be tapered gradually rather than stopped abruptly. Which explanation is correct?',
          options: [
            'Abrupt discontinuation causes rebound hyperglycemia that can lead to diabetic ketoacidosis',
            'The body\'s adrenal glands need time to resume producing cortisol after being suppressed by the medication',
            'Stopping suddenly causes the immune system to overreact, leading to severe allergic reactions',
            'Gradual tapering prevents the kidneys from excreting too much sodium at once',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Exogenous glucocorticoids suppress the hypothalamic-pituitary-adrenal (HPA) axis through negative feedback. The adrenal glands atrophy and stop producing endogenous cortisol. Gradual tapering allows the HPA axis to slowly "wake up" and resume cortisol production. Abrupt cessation leaves the patient without any cortisol source — causing adrenal crisis. A) Abrupt discontinuation actually causes HYPOglycemia (cortisol maintains blood glucose), not hyperglycemia. Without cortisol, glucose drops. C) The immune system does not "overreact" in an allergic manner after steroid withdrawal. Patients may experience a flare of the underlying inflammatory condition, but this is not an allergic reaction. D) Sodium handling is affected but is not the primary reason for tapering — the life-threatening concern is cortisol deficiency and cardiovascular collapse.',
        },
      ],
    },
  },

  'Dexamethasone': {
    details: [
      '25x glucocorticoid potency — most potent on the standard ladder',
      'Minimal mineralocorticoid activity (does NOT retain sodium/water significantly)',
      'Use 1: Cushing\'s diagnosis — dexamethasone suppression test (normal: cortisol suppresses; Cushing\'s: cortisol stays high)',
      'Use 2: Fetal lung maturity — given to mother before preterm delivery (24-34 weeks) to accelerate surfactant production',
      'Use 3: Cerebral edema — brain tumors, meningitis, increased ICP (vasogenic edema)',
      'Same glucocorticoid side effects: hyperglycemia, immunosuppression, GI irritation',
    ],
    questions: {
      g: [
        {
          stem: 'A nurse is caring for a patient with a brain tumor who is receiving dexamethasone 4 mg IV every 6 hours for cerebral edema. The patient\'s blood glucose has been trending upward: 156 mg/dL yesterday, 198 mg/dL this morning, and now 234 mg/dL. The patient has no history of diabetes. Which action should the nurse take FIRST?',
          options: [
            'Hold the dexamethasone until blood glucose normalizes',
            'Notify the provider of the trending hyperglycemia and anticipate insulin orders',
            'Administer regular insulin 10 units subcutaneously per the nurse\'s clinical judgment',
            'Encourage the patient to ambulate to help lower blood glucose',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Dexamethasone (a potent glucocorticoid) predictably causes steroid-induced hyperglycemia by promoting gluconeogenesis and insulin resistance. The trend is worsening, and the patient now exceeds 200 mg/dL. The nurse should notify the provider to obtain sliding scale insulin or scheduled insulin orders. Holding dexamethasone is not appropriate because the drug is treating life-threatening cerebral edema. A) Holding dexamethasone in a patient with brain tumor-related cerebral edema risks herniation and death. The hyperglycemia must be managed WITH the dexamethasone, not instead of it. The edema treatment takes priority. C) Nurses cannot independently administer insulin without a provider order. Even with a sliding scale, 10 units is arbitrary and could cause dangerous hypoglycemia. D) While exercise can help lower glucose, ambulation in a patient with cerebral edema may be contraindicated or impractical, and it will not adequately control this level of hyperglycemia.',
        },
        {
          stem: 'A pregnant patient at 28 weeks gestation is admitted with preterm labor contractions. The provider orders dexamethasone 6 mg IM every 12 hours for 4 doses. The patient asks, "Why are you giving me a steroid? Will it hurt my baby?" Which response by the nurse is BEST?',
          options: [
            '"The steroid stops your contractions so the baby can continue growing"',
            '"The steroid helps your baby\'s lungs mature faster so the baby can breathe better if born early"',
            '"The steroid treats the infection that is causing your preterm labor"',
            '"The steroid will reduce swelling in your uterus to prevent premature delivery"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Dexamethasone given to the mother between 24-34 weeks gestation crosses the placenta and accelerates fetal lung maturity by stimulating surfactant production. Surfactant prevents alveolar collapse and is essential for neonatal breathing. This is one of the most evidence-based interventions in obstetrics for reducing neonatal respiratory distress syndrome. A) Dexamethasone does NOT stop contractions — that is the role of tocolytics (e.g., terbutaline, magnesium sulfate, nifedipine). Confusing the purpose of antenatal steroids with tocolytics is a common exam trap. C) Dexamethasone is not being given to treat infection. While corticosteroids have anti-inflammatory properties, their role here is specifically fetal lung maturation. D) Dexamethasone does not reduce uterine swelling or prevent delivery — it prepares the fetus for the possibility of early delivery.',
        },
        {
          stem: 'A patient undergoes a dexamethasone suppression test. The next morning, the patient\'s serum cortisol level is 22 mcg/dL (normal suppressed value: <5 mcg/dL). The nurse understands this result suggests:',
          options: [
            'The test was performed incorrectly and should be repeated',
            'The patient has Addison\'s disease with insufficient cortisol production',
            'The patient likely has Cushing\'s syndrome because cortisol did not suppress',
            'The result is normal and the patient does not have an endocrine disorder',
          ],
          correct: 2,
          rationale: 'C) CORRECT — In a normal dexamethasone suppression test, exogenous dexamethasone suppresses ACTH via negative feedback, which in turn suppresses cortisol to <5 mcg/dL. A cortisol level of 22 mcg/dL means the feedback loop is not working — the body continues producing cortisol despite the dexamethasone signal to stop. This is the hallmark finding of Cushing\'s syndrome (either from a pituitary tumor producing excess ACTH or an adrenal tumor producing excess cortisol). A) While repeat testing may be considered, a cortisol of 22 is significantly elevated and is clinically meaningful — not simply a procedural error. B) Addison\'s disease involves LOW cortisol, not high. A patient with Addison\'s would have very low baseline cortisol regardless of the test. D) A normal result would show cortisol suppressed to <5 mcg/dL. A value of 22 is clearly abnormal.',
        },
      ],
      y: [
        {
          stem: 'A nurse is preparing to administer dexamethasone to a patient with bacterial meningitis. The provider orders dexamethasone to be given BEFORE the first dose of antibiotics. The student nurse asks, "Why give the steroid before the antibiotic?" Which explanation by the nurse is correct?',
          options: [
            '"Dexamethasone enhances antibiotic absorption across the blood-brain barrier"',
            '"Dexamethasone reduces the inflammatory response triggered by bacterial cell death when antibiotics begin working"',
            '"Dexamethasone must be given first because it takes longer to reach therapeutic levels"',
            '"Dexamethasone prevents an allergic reaction to the antibiotic"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — When antibiotics kill bacteria in meningitis, bacterial cell lysis releases inflammatory mediators that can worsen cerebral edema and increase intracranial pressure. Giving dexamethasone before or with the first antibiotic dose reduces this inflammatory cascade, decreasing complications like hearing loss and neurological damage. A) Dexamethasone does not enhance antibiotic absorption. It works by suppressing the inflammatory response, not by altering drug pharmacokinetics. C) Dexamethasone has a relatively quick onset of action. The timing is about getting anti-inflammatory effects in place BEFORE the bacterial die-off begins, not about onset timing. D) Dexamethasone is not given as premedication for allergic reactions to antibiotics. Allergic reaction prevention would involve test doses or desensitization protocols.',
        },
        {
          stem: 'A nurse is monitoring a patient receiving dexamethasone for cerebral edema secondary to a brain tumor. Which assessment finding would the nurse expect to see if the medication is effective?',
          options: [
            'Decreased urine output and peripheral edema',
            'Improved level of consciousness and decreased headache',
            'Increased temperature indicating immune system activation',
            'Pupil dilation bilaterally with increased heart rate',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Dexamethasone reduces vasogenic cerebral edema, which decreases intracranial pressure. Signs of effectiveness include improved level of consciousness (less drowsy/confused), decreased headache (less pressure), and improved neurological status. A) Decreased urine output and peripheral edema would suggest fluid retention — a side effect, not a therapeutic outcome. While dexamethasone has minimal mineralocorticoid activity, this is not the desired effect. C) Increased temperature suggests infection, which would be WORSENED by immunosuppressive therapy. Glucocorticoids may actually mask fever by suppressing the immune response. D) Bilateral pupil dilation with tachycardia could indicate worsening neurological status or sympathetic activation — not improvement. Improving ICP should normalize pupil responses.',
        },
        {
          stem: 'A nurse is reviewing medications for a patient with cerebral edema. The provider switches from methylprednisolone to dexamethasone. The nurse understands that a key advantage of dexamethasone for this condition is:',
          options: [
            'Dexamethasone has stronger mineralocorticoid effects for blood pressure support',
            'Dexamethasone has minimal mineralocorticoid activity, reducing fluid retention concerns',
            'Dexamethasone is the only glucocorticoid that can cross the blood-brain barrier',
            'Dexamethasone has fewer hyperglycemic effects than other glucocorticoids',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Dexamethasone has very minimal mineralocorticoid activity compared to other glucocorticoids. This means less sodium and water retention, which is important in a patient with cerebral edema — you do not want additional fluid retention worsening brain swelling. A) This is backwards — dexamethasone has the LEAST mineralocorticoid effect of the major glucocorticoids. Hydrocortisone has the most mineralocorticoid activity. C) All glucocorticoids can cross the blood-brain barrier to varying degrees. Dexamethasone is preferred for cerebral edema due to its high potency and low mineralocorticoid effect, not exclusive BBB access. D) Dexamethasone is the MOST potent glucocorticoid (25x) and actually has significant hyperglycemic effects — this is not an advantage.',
        },
      ],
      r: [
        {
          stem: 'A nursing student is studying dexamethasone. Which THREE clinical uses should the student associate with this medication?',
          options: [
            'Cushing\'s diagnosis (suppression test), fetal lung maturity, and cerebral edema',
            'Addison\'s replacement therapy, asthma maintenance, and allergic rhinitis',
            'Type 2 diabetes management, osteoporosis treatment, and wound healing',
            'Hypertension treatment, diuresis, and potassium replacement',
          ],
          correct: 0,
          rationale: 'A) CORRECT — The three hallmark uses of dexamethasone are: (1) dexamethasone suppression test to diagnose Cushing\'s syndrome, (2) given to pregnant patients before preterm delivery to accelerate fetal lung maturity, and (3) treatment of cerebral edema from brain tumors or meningitis. B) Addison\'s replacement uses hydrocortisone (not dexamethasone — too potent and lacks mineralocorticoid activity). Asthma and rhinitis may use inhaled steroids (budesonide, fluticasone), not systemic dexamethasone as first-line. C) Glucocorticoids CAUSE hyperglycemia, worsen osteoporosis, and IMPAIR wound healing — the exact opposite of treatment for these conditions. D) Glucocorticoids cause hypertension (not treat it), cause fluid retention (not diuresis), and deplete potassium (not replace it).',
        },
        {
          stem: 'A nurse understands that dexamethasone is 25 times more potent than hydrocortisone. This means that compared to hydrocortisone, dexamethasone:',
          options: [
            'Must be given in 25 times higher doses for the same effect',
            'Requires a much smaller dose to achieve the same anti-inflammatory effect',
            'Has 25 times fewer side effects than hydrocortisone',
            'Takes 25 times longer to reach peak effect',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Higher potency means a smaller dose is needed for the same therapeutic effect. If hydrocortisone 100 mg provides a certain anti-inflammatory effect, only 4 mg of dexamethasone is needed for the equivalent effect (100 / 25 = 4). A) This is backwards — higher potency means LOWER doses, not higher. A drug that is 25x more potent needs 1/25th the dose. C) Higher potency does not mean fewer side effects. In fact, the same glucocorticoid side effects (hyperglycemia, immunosuppression, etc.) occur at equivalent doses regardless of which drug is used. D) Potency has no direct relationship to onset time. Potency refers to the dose-response relationship, not pharmacokinetics.',
        },
        {
          stem: 'A nurse is administering dexamethasone to a patient. The nurse should monitor for which common side effect of glucocorticoid therapy?',
          options: [
            'Hypoglycemia',
            'Hyperglycemia',
            'Hyperkalemia',
            'Hypotension',
          ],
          correct: 1,
          rationale: 'B) CORRECT — All glucocorticoids, including dexamethasone, cause hyperglycemia by promoting gluconeogenesis (liver glucose production) and increasing insulin resistance. Blood glucose monitoring is essential during therapy. A) Glucocorticoids cause HYPERglycemia, not hypoglycemia. Cortisol is a counter-regulatory hormone that raises blood sugar. C) Glucocorticoids cause HYPOkalemia (potassium depletion), not hyperkalemia. They promote renal potassium excretion. D) Glucocorticoids cause HYPERtension (sodium/water retention), not hypotension. The exception is Addison\'s disease where the ABSENCE of cortisol causes hypotension.',
        },
      ],
    },
  },

  'Fludrocortisone (Florinef)': {
    details: [
      'MINERALOCORTICOID replacement — replaces aldosterone (NOT a glucocorticoid for inflammation)',
      'Used in Addison\'s disease alongside hydrocortisone (replaces both cortisol AND aldosterone)',
      'Mechanism: retains sodium and water, excretes potassium',
      'Monitor: daily weights, blood pressure (watch for hypertension), serum potassium (watch for hypokalemia), edema',
      'Teach: high-potassium diet (bananas, oranges, potatoes), wear MedicAlert bracelet',
      'Signs of excess: hypertension, edema, hypokalemia, weight gain',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with Addison\'s disease takes fludrocortisone (Florinef) 0.1 mg daily and hydrocortisone 20 mg daily. The nurse reviews today\'s lab results: sodium 148 mEq/L (normal 136-145), potassium 2.9 mEq/L (normal 3.5-5.0), blood pressure 168/98 mmHg. Which action should the nurse take FIRST?',
          options: [
            'Hold the fludrocortisone and notify the provider of the lab results and blood pressure',
            'Administer the fludrocortisone as scheduled and recheck labs tomorrow',
            'Hold both the fludrocortisone and the hydrocortisone',
            'Administer IV potassium chloride 40 mEq as a rapid IV push',
          ],
          correct: 0,
          rationale: 'A) CORRECT — The patient shows signs of fludrocortisone EXCESS: hypernatremia (Na 148), hypokalemia (K 2.9), and hypertension (168/98). Fludrocortisone retains sodium and excretes potassium — all findings point to too much mineralocorticoid effect. Hold the fludrocortisone, notify the provider, and anticipate a dose reduction and potassium replacement. B) Administering fludrocortisone when the patient already shows toxicity signs will worsen hypernatremia, hypokalemia, and hypertension. Potassium of 2.9 is dangerous (cardiac dysrhythmia risk). C) Holding hydrocortisone is dangerous — it replaces cortisol, and abrupt discontinuation causes adrenal crisis. Only the fludrocortisone should be held; the hydrocortisone should continue. This is a critical distinction. D) IV potassium must NEVER be given as rapid IV push — this causes fatal cardiac arrest. IV KCl must be diluted and infused slowly (no faster than 10 mEq/hour via peripheral line). This option tests a critical medication safety rule.',
        },
        {
          stem: 'A nurse is caring for a patient with Addison\'s disease on fludrocortisone therapy. The patient weighs 2.7 kg more than yesterday, has 2+ pitting edema in bilateral ankles, and reports a headache. Blood pressure is 154/92 mmHg. Heart rate is 78 bpm. Which nursing diagnosis is the HIGHEST priority?',
          options: [
            'Imbalanced nutrition: more than body requirements related to increased appetite',
            'Excess fluid volume related to mineralocorticoid excess',
            'Acute pain related to headache requiring analgesic administration',
            'Activity intolerance related to fatigue from Addison\'s disease',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Rapid weight gain (2.7 kg in 24 hours = fluid, not fat), pitting edema, hypertension, and headache are classic signs of excess fluid volume from too much mineralocorticoid effect. Fludrocortisone is retaining too much sodium and water. This is the priority because unchecked fluid overload can lead to heart failure and pulmonary edema. A) A 2.7 kg weight gain overnight is fluid retention, not nutritional excess. Caloric weight gain occurs over weeks, not 24 hours. Recognizing rapid weight gain as fluid is a critical nursing assessment skill. C) The headache is likely caused by the hypertension from fluid overload — treating the root cause (fluid excess) will address the symptom. Treating just the headache misses the bigger picture. D) Fatigue may be present but is not the priority when the patient has acute fluid overload with hypertension.',
        },
        {
          stem: 'A nurse receives morning lab results for a patient on fludrocortisone (Florinef). Potassium is 3.0 mEq/L. The patient is also on digoxin (Lanoxin) for atrial fibrillation. Why is this potassium level ESPECIALLY dangerous for this patient?',
          options: [
            'Low potassium will cause the fludrocortisone to be metabolized too quickly',
            'Hypokalemia increases the risk of digoxin toxicity, which can cause fatal cardiac dysrhythmias',
            'Low potassium inactivates digoxin, making it therapeutically ineffective',
            'Hypokalemia combined with digoxin causes irreversible kidney damage',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Hypokalemia potentiates digoxin toxicity. Digoxin and potassium compete for the same binding sites on the sodium-potassium ATPase pump. When potassium is low, more digoxin binds to the pump, increasing its toxic effects: fatal cardiac dysrhythmias (bradycardia, heart block, ventricular tachycardia/fibrillation). A patient on both fludrocortisone (which depletes potassium) and digoxin requires vigilant potassium monitoring. A) Potassium levels do not affect fludrocortisone metabolism. This is a fabricated pharmacokinetic relationship. C) Hypokalemia INCREASES digoxin\'s effects (to toxic levels), not decreases. This is the opposite of what actually happens. D) The digoxin-hypokalemia interaction primarily affects the HEART, not the kidneys. Digoxin toxicity manifests as cardiac dysrhythmias, visual changes (yellow-green halos), and GI symptoms.',
        },
      ],
      y: [
        {
          stem: 'A nurse is teaching a patient with Addison\'s disease about fludrocortisone (Florinef) therapy. Which statement by the patient indicates correct understanding of self-monitoring?',
          options: [
            '"I should weigh myself every week at different times to track my weight"',
            '"I should weigh myself every morning at the same time and report a gain of more than 2 pounds in one day"',
            '"I only need to check my weight if I notice swelling in my legs"',
            '"Weight monitoring is not necessary with this medication since it only affects my salt levels"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Daily weights taken at the same time (typically morning, after voiding, before eating) with the same scale and similar clothing provide the most accurate fluid balance assessment. A gain of more than 2 pounds (approximately 1 kg) in 24 hours indicates fluid retention and should be reported to the provider for possible dose adjustment. A) Weekly weights at different times are inconsistent and will not detect rapid fluid changes. Fludrocortisone\'s effects on fluid balance require daily monitoring for early detection. C) Waiting for visible edema means fluid overload has already progressed significantly. Daily weights catch the problem BEFORE clinical edema develops. D) Fludrocortisone affects sodium AND water retention, which directly impacts weight. Weight monitoring is one of the most important self-care activities for this medication.',
        },
        {
          stem: 'A patient with Addison\'s disease is prescribed both hydrocortisone and fludrocortisone (Florinef). The patient asks, "Why do I need two different medications?" Which explanation by the nurse is most accurate?',
          options: [
            '"One medication works in the morning and the other works at night"',
            '"Hydrocortisone replaces cortisol for energy and stress response, while fludrocortisone replaces aldosterone to maintain your salt and fluid balance"',
            '"Both medications do the same thing, but using two lower doses is safer than one high dose"',
            '"Hydrocortisone treats the symptoms while fludrocortisone cures the underlying disease"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — In Addison\'s disease, the adrenal cortex fails to produce BOTH glucocorticoids (cortisol) and mineralocorticoids (aldosterone). Hydrocortisone replaces cortisol (glucose metabolism, stress response, immune function). Fludrocortisone replaces aldosterone (sodium retention, potassium excretion, blood pressure maintenance). Two different hormones require two different replacement medications. A) The timing of medications is not the reason for two drugs — they replace different hormones with different physiological roles. B is the physiological explanation. C) They are NOT the same — hydrocortisone is a glucocorticoid and fludrocortisone is a mineralocorticoid. They have completely different mechanisms and target different hormonal deficiencies. D) Neither medication cures Addison\'s disease. Both are lifelong REPLACEMENT therapies — the adrenal glands do not regenerate.',
        },
        {
          stem: 'A nurse is reviewing the dietary plan for a patient taking fludrocortisone (Florinef). Which food choices indicate the patient understands the dietary modifications needed with this medication?',
          options: [
            'Bacon, canned soup, and salted crackers',
            'Bananas, baked potatoes, and orange juice',
            'White rice, plain pasta, and white bread',
            'Cheese, ice cream, and whole milk',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Fludrocortisone causes potassium excretion, so a high-potassium diet is essential. Bananas (422 mg K+), baked potatoes (926 mg K+), and orange juice (496 mg K+ per cup) are excellent potassium sources. A) These are all HIGH-sodium foods. Fludrocortisone already retains sodium — adding more sodium worsens hypertension and fluid overload. Patients should actually limit sodium intake. C) These are refined carbohydrates with minimal potassium content. They do not address the primary dietary concern of potassium replacement. D) These are calcium-rich dairy foods. While calcium is important, the PRIMARY dietary concern with fludrocortisone is potassium replacement, not calcium.',
        },
      ],
      r: [
        {
          stem: 'A nurse is studying adrenal medications. Fludrocortisone (Florinef) is classified as which type of corticosteroid?',
          options: [
            'Glucocorticoid',
            'Mineralocorticoid',
            'Androgen',
            'Catecholamine',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Fludrocortisone is a synthetic mineralocorticoid that replaces aldosterone. It acts on the kidneys to retain sodium and water while excreting potassium — mimicking the action of aldosterone from the adrenal cortex. A) Glucocorticoids (hydrocortisone, prednisone, dexamethasone) replace cortisol. Fludrocortisone is NOT a glucocorticoid and is not used for anti-inflammatory purposes. C) Androgens are sex hormones (testosterone) produced by the adrenal cortex and gonads — not related to fludrocortisone\'s mechanism. D) Catecholamines (epinephrine, norepinephrine) are produced by the adrenal MEDULLA, not the adrenal cortex. Fludrocortisone replaces a cortex hormone.',
        },
        {
          stem: 'A patient with Addison\'s disease takes fludrocortisone (Florinef). The nurse understands that this medication works by:',
          options: [
            'Stimulating the adrenal glands to produce more cortisol',
            'Retaining sodium and water while promoting potassium excretion in the kidneys',
            'Blocking the effects of excess aldosterone on the kidneys',
            'Increasing glucose production in the liver for energy',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Fludrocortisone mimics aldosterone at the renal tubules, promoting sodium and water reabsorption while excreting potassium. This maintains blood volume and blood pressure in patients whose adrenal glands can no longer produce aldosterone. A) Fludrocortisone does not stimulate the adrenal glands — in Addison\'s disease, the adrenal glands are damaged and cannot respond to stimulation. The medication directly replaces the missing hormone. C) Blocking aldosterone describes spironolactone (Aldactone), a potassium-sparing diuretic. Fludrocortisone does the OPPOSITE — it mimics aldosterone, not blocks it. D) Increasing liver glucose production describes glucocorticoid action (cortisol), not mineralocorticoid action. Fludrocortisone\'s primary effect is on sodium/potassium/fluid balance.',
        },
        {
          stem: 'A nurse is monitoring a patient on fludrocortisone (Florinef) therapy. Which assessment is MOST important for the nurse to perform daily?',
          options: [
            'Checking the patient\'s pupil response to light',
            'Weighing the patient at the same time each morning',
            'Monitoring the patient\'s respiratory rate every 4 hours',
            'Assessing the patient\'s deep tendon reflexes',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Daily weights are the most reliable way to monitor fluid balance in patients on mineralocorticoid therapy. A sudden weight gain (>1 kg/2 lbs in 24 hours) indicates fluid retention from excessive sodium/water reabsorption — a sign the dose may be too high. A) Pupil response monitoring is relevant for neurological conditions and increased ICP — not mineralocorticoid therapy. C) While respiratory rate is always part of vital signs, it is not the MOST specific assessment for fludrocortisone monitoring. Daily weights are more directly tied to the medication\'s mechanism. D) Deep tendon reflexes are assessed for neurological function and certain electrolyte imbalances (magnesium, calcium) but are not the primary monitoring parameter for fludrocortisone.',
        },
      ],
    },
  },


};
