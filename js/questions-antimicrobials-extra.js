// antimicrobial_extra_questions.js — NCLEX-Style Antimicrobial Drug Questions (Extended Set)
// 12 drugs/topics x 5 questions each = 60 total questions
// Difficulty: g = GREEN (hardest/trap), y = YELLOW (moderate), r = RED (foundational)
// Distribution per drug: 2g, 2y, 1r
// Generated: 2026-03-23
// Source: Professor antimicrobial content + Lilley pharmacology + ATI pharm

window.DRUG_DEEP_ANTIMICROBIALS_EXTRA = {

  'Carbapenems (Imipenem/Meropenem)': {
    details: [
      'Broadest spectrum beta-lactam antibiotics — reserved for multidrug-resistant (MDR) infections',
      'Imipenem is ALWAYS given with cilastatin — cilastatin inhibits renal dehydropeptidase (prevents imipenem breakdown in kidneys)',
      'Meropenem does NOT require cilastatin (stable against renal enzymes)',
      'Seizure risk — especially with imipenem (meropenem has lower seizure risk)',
      'Cross-allergenicity with penicillin is approximately 1% (low but exists)',
      'Beta-lactam mechanism: inhibits cell wall synthesis by binding penicillin-binding proteins (PBPs)',
      'Used for serious nosocomial infections, polymicrobial infections, and MDR gram-negative organisms',
    ],
    questions: {
      g: [
        {
          stem: 'A nurse is caring for a patient with a multidrug-resistant Pseudomonas wound infection who is started on imipenem-cilastatin IV. The patient\'s history includes a penicillin allergy documented as "mild rash 10 years ago." On day 2 of therapy, the patient develops new-onset tonic-clonic seizures. Which action should the nurse take FIRST?',
          options: [
            'Administer IV diphenhydramine for an allergic cross-reaction',
            'Ensure patient safety during the seizure and notify the provider — seizures are a known adverse effect of imipenem',
            'Discontinue the medication and administer epinephrine for anaphylaxis',
            'Increase the infusion rate to complete the dose before discontinuing the medication',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Seizures are a well-known adverse effect of imipenem, particularly in patients with renal impairment, CNS disorders, or high doses. The priority is patient safety (protect from injury during seizure) and provider notification. The provider may switch to meropenem, which has a significantly lower seizure risk. A) Diphenhydramine treats allergic reactions, not drug-induced seizures. While cross-allergenicity exists (~1%), seizures are not an allergic response — they are a direct neurotoxic effect of imipenem. C) Epinephrine is for anaphylaxis (characterized by hypotension, bronchospasm, urticaria), not seizures. There is no indication of anaphylaxis here. D) Increasing the infusion rate would deliver MORE of the seizure-causing drug faster — this is dangerous and would worsen the situation.',
        },
        {
          stem: 'A provider orders imipenem-cilastatin for a critically ill patient with a carbapenem-resistant Klebsiella pneumoniae (CRE) bloodstream infection. The nurse questions this order. Which is the BEST rationale for the nurse\'s concern?',
          options: [
            'Imipenem cannot be used for bloodstream infections — only for wound infections',
            'Cilastatin makes the drug nephrotoxic and should not be used in critically ill patients',
            'A carbapenem-resistant organism will NOT be susceptible to imipenem — the antibiotic will be ineffective',
            'Carbapenems are only effective against gram-positive organisms, and Klebsiella is gram-negative',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Carbapenem-resistant Enterobacteriaceae (CRE) produce carbapenemase enzymes that break down carbapenems including imipenem. Using imipenem against a carbapenem-resistant organism is futile — it will not kill the bacteria. The nurse should question this and advocate for susceptibility-guided therapy (e.g., ceftazidime-avibactam, polymyxins, or combination therapy). A) Imipenem is used for many serious infections including bloodstream infections — there is no restriction to wound infections only. B) Cilastatin actually PROTECTS the kidneys — it prevents renal metabolism of imipenem, which would produce a nephrotoxic metabolite. Cilastatin is the protective component, not a harmful one. D) Carbapenems are the BROADEST spectrum beta-lactams — they cover gram-positive, gram-negative, AND anaerobes. Klebsiella (gram-negative) would normally be covered if it were susceptible.',
        },
      ],
      y: [
        {
          stem: 'A nurse is preparing to administer meropenem IV to a patient with a severe intra-abdominal infection. The patient asks, "Why am I getting this instead of regular penicillin?" Which response by the nurse is MOST accurate?',
          options: [
            '"Meropenem is a stronger version of penicillin that works exactly the same way"',
            '"Meropenem covers a much broader range of bacteria than penicillin and is reserved for serious infections where other antibiotics may not work"',
            '"Meropenem is an antifungal medication, not an antibiotic like penicillin"',
            '"Meropenem is safer than penicillin because it has no side effects"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Meropenem is a carbapenem, the broadest spectrum beta-lactam. It is reserved for serious, multidrug-resistant infections because of its extensive coverage against gram-positive, gram-negative, and anaerobic organisms. This accurately explains why it is chosen over narrower-spectrum antibiotics. A) While both are beta-lactams that inhibit cell wall synthesis, saying it "works exactly the same way" oversimplifies the differences in spectrum, pharmacokinetics, and resistance profiles. They are related but not the same. C) Meropenem is an antibiotic (antibacterial), NOT an antifungal. Antifungals include drugs like fluconazole, amphotericin B, and ketoconazole. D) No drug has "no side effects." Meropenem can cause seizures (less than imipenem but still possible), diarrhea, nausea, and C. difficile infection. This statement is inaccurate and would give false reassurance.',
        },
        {
          stem: 'A patient with a penicillin allergy (documented anaphylaxis) is prescribed meropenem. The nurse reviews the chart and contacts the provider. Which is the BEST rationale for the nurse\'s action?',
          options: [
            'Carbapenems are in the same drug class as penicillins — they should never be given to penicillin-allergic patients',
            'Although cross-allergenicity is low (~1%), a patient with a history of anaphylaxis to penicillin warrants discussion before administering any beta-lactam',
            'Meropenem contains penicillin as an inactive ingredient',
            'All patients receiving meropenem require allergy testing first regardless of history',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Cross-allergenicity between penicillins and carbapenems is approximately 1% (much lower than previously thought). However, when the penicillin allergy is documented as anaphylaxis (a severe, life-threatening reaction), the nurse should verify the order with the provider. The drug may still be given with appropriate precautions, but the risk-benefit discussion should occur. A) Carbapenems are NOT "the same class" as penicillins — they are both beta-lactams but are different subclasses with different structures. The blanket "never give" statement is outdated — current evidence supports cautious use of carbapenems in most penicillin-allergic patients. C) Meropenem does not contain penicillin. They share a beta-lactam ring structure but are chemically distinct drugs. D) Routine allergy testing is not required for all meropenem patients. Allergy evaluation may be warranted in patients with documented severe penicillin allergy, but it is not universal practice.',
        },
      ],
      r: [
        {
          stem: 'A nursing student asks why imipenem is always combined with cilastatin. Which response by the nurse is correct?',
          options: [
            'Cilastatin prevents seizures caused by imipenem',
            'Cilastatin prevents the breakdown of imipenem in the kidneys by inhibiting renal dehydropeptidase',
            'Cilastatin enhances the antibacterial activity of imipenem against resistant organisms',
            'Cilastatin is an antiemetic that prevents nausea from imipenem',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Cilastatin inhibits the enzyme renal dehydropeptidase I (DHP-I) in the kidneys, which would otherwise rapidly break down imipenem. Without cilastatin, imipenem would be inactivated in the kidneys, resulting in inadequate drug levels AND a nephrotoxic metabolite. Cilastatin preserves therapeutic levels and protects the kidneys. A) Cilastatin does not prevent seizures. Seizures are caused by imipenem\'s effect on the CNS, and cilastatin has no anticonvulsant properties. Meropenem has a lower seizure risk due to its different molecular structure, not because of an additive. C) Cilastatin has no antibacterial activity — it is purely a pharmacokinetic protector. It does not enhance imipenem\'s spectrum or potency against bacteria. D) Cilastatin is not an antiemetic. If nausea occurs with imipenem-cilastatin, a separate antiemetic would be needed.',
        },
      ],
    },
  },

  'Macrolides (Azithromycin)': {
    details: [
      'Binds to the 50S ribosomal subunit — inhibits bacterial protein synthesis (bacteriostatic)',
      'QT prolongation risk — avoid in patients with existing QT prolongation or on other QT-prolonging drugs',
      'GI upset is the most common adverse effect (nausea, diarrhea, abdominal pain)',
      'WEAK CYP3A4 inhibitor (unlike erythromycin/clarithromycin which are strong) — fewer drug interactions but still monitor',
      'First-line for community-acquired pneumonia (CAP) and atypical organisms (Mycoplasma, Chlamydia, Legionella)',
      'Z-pack (Zithromax) = 5-day course (500mg day 1, then 250mg days 2-5) with long tissue half-life',
      'Available PO and IV — can be taken without regard to food (unlike erythromycin)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient is prescribed azithromycin (Z-pack) for community-acquired pneumonia. The patient\'s current medications include amiodarone 200 mg daily and simvastatin 40 mg daily. The nurse reviews the medication list and contacts the provider. Which is the PRIMARY concern?',
          options: [
            'Azithromycin will decrease the effectiveness of amiodarone, requiring a higher dose',
            'Both azithromycin and amiodarone prolong the QT interval, increasing the risk of fatal cardiac dysrhythmias (torsades de pointes)',
            'Azithromycin is contraindicated in all patients taking any cardiac medication',
            'Simvastatin must be discontinued permanently before azithromycin can be started',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Both azithromycin and amiodarone independently prolong the QT interval. When combined, the risk of additive QT prolongation leading to torsades de pointes (a potentially fatal ventricular dysrhythmia) is significantly increased. The nurse should contact the provider to discuss an alternative antibiotic (e.g., a respiratory fluoroquinolone or doxycycline). A) Azithromycin does not decrease amiodarone\'s effectiveness. If anything, azithromycin inhibits CYP3A4, which could INCREASE amiodarone levels. The concern is QT prolongation, not reduced efficacy. C) Azithromycin is not contraindicated with ALL cardiac medications — it is specifically the QT-prolonging drugs that pose the highest risk. Many cardiac drugs (beta-blockers, ACE inhibitors) do not prolong QT and can be safely co-administered. D) While azithromycin can increase simvastatin levels via CYP3A4 inhibition (increasing rhabdomyolysis risk), the statin does not need to be permanently discontinued — temporary hold or dose adjustment may suffice. The QT concern with amiodarone is the MORE dangerous interaction.',
        },
        {
          stem: 'A nurse is reviewing discharge medications for a patient treated with azithromycin for Chlamydia trachomatis. The patient is a 24-year-old female who takes combined oral contraceptives. She states, "My doctor told me the antibiotic is just one dose." Which assessment by the nurse is MOST important?',
          options: [
            'Verify that the patient\'s sexual partner has also been treated or referred for treatment',
            'Instruct the patient to use a backup contraceptive method because azithromycin reduces oral contraceptive effectiveness',
            'Teach the patient that azithromycin requires 7 days of treatment, not a single dose',
            'Obtain a pregnancy test because azithromycin is a Category X medication',
          ],
          correct: 0,
          rationale: 'A) CORRECT — Partner treatment is essential to prevent reinfection (the "ping-pong effect"). If the partner is not treated, the patient will likely be re-infected upon resuming sexual contact. This is a critical public health and patient care priority for all STI treatment. B) Unlike rifampin, azithromycin does NOT significantly reduce oral contraceptive effectiveness. This is a common misconception — the CDC states that most antibiotics (except rifamycins) do not interfere with hormonal contraception. C) The patient is correct — azithromycin for Chlamydia IS a single 1g oral dose. This is one of its advantages over the alternative 7-day doxycycline regimen for Chlamydia treatment. The nurse should not provide incorrect information. D) Azithromycin is NOT Category X — it is generally considered safe in pregnancy (Category B). It is actually a preferred agent for Chlamydia treatment in pregnant women.',
        },
      ],
      y: [
        {
          stem: 'A nurse is teaching a patient who is prescribed azithromycin (Zithromax Z-pack) for bronchitis. Which statement by the patient indicates CORRECT understanding of the medication?',
          options: [
            '"I will take all five days of medication even if I feel better after two days"',
            '"I should take this medication with an antacid to prevent stomach upset"',
            '"If I miss a dose, I should double up the next day to stay on schedule"',
            '"I can stop the medication once my cough goes away"',
          ],
          correct: 0,
          rationale: 'A) CORRECT — The patient should complete the entire 5-day course (Z-pack: 500mg day 1, then 250mg days 2-5) even if symptoms improve. Stopping early promotes antibiotic resistance and may allow the infection to return. B) Aluminum and magnesium-containing antacids can reduce azithromycin absorption. If an antacid is needed, it should be taken at least 1 hour before or 2 hours after azithromycin, not simultaneously. C) Doubling doses increases the risk of adverse effects (GI upset, QT prolongation) without proven benefit. The patient should take the missed dose as soon as remembered, then resume the regular schedule. D) Stopping antibiotics early based on symptom resolution is a leading cause of antibiotic resistance. The full course must be completed to eradicate the infection.',
        },
        {
          stem: 'A patient receiving IV azithromycin for severe community-acquired pneumonia reports new-onset palpitations and dizziness. The cardiac monitor shows a QTc interval of 520 ms (normal: <440 ms for males, <460 ms for females). Which action should the nurse take FIRST?',
          options: [
            'Administer a normal saline bolus to treat dehydration-related tachycardia',
            'Stop the infusion and notify the provider immediately — QT prolongation is a known adverse effect of azithromycin',
            'Reassure the patient that palpitations are a normal response to IV antibiotics',
            'Slow the infusion rate and continue monitoring the QTc every 4 hours',
          ],
          correct: 1,
          rationale: 'B) CORRECT — A QTc of 520 ms is significantly prolonged and puts the patient at risk for torsades de pointes, a life-threatening ventricular dysrhythmia. QT prolongation is a known adverse effect of azithromycin. The infusion must be stopped and the provider notified immediately to evaluate for alternative antibiotics and assess cardiac status. A) While dehydration can cause tachycardia, the QTc prolongation to 520 ms is the critical finding that must be addressed first. A fluid bolus does not treat drug-induced QT prolongation. C) Palpitations combined with QTc prolongation are NOT normal — they represent a potentially life-threatening drug adverse effect. Reassuring the patient without acting on abnormal findings is unsafe. D) Simply slowing the rate does not resolve the QT prolongation risk. The drug is the problem, and continuing it at any rate maintains the danger. The medication needs to be stopped, not slowed.',
        },
      ],
      r: [
        {
          stem: 'A nurse is reviewing a patient\'s new prescription for azithromycin. Which mechanism of action does the nurse identify for this medication?',
          options: [
            'Inhibits bacterial cell wall synthesis by binding penicillin-binding proteins',
            'Inhibits bacterial protein synthesis by binding to the 50S ribosomal subunit',
            'Inhibits bacterial DNA replication by blocking DNA gyrase',
            'Disrupts bacterial cell membrane integrity, causing cell lysis',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Azithromycin (a macrolide) works by binding to the 50S ribosomal subunit of bacteria, preventing protein synthesis. This action is bacteriostatic (stops bacterial growth) rather than bactericidal (kills bacteria). A) Inhibiting cell wall synthesis via penicillin-binding proteins describes beta-lactam antibiotics (penicillins, cephalosporins, carbapenems) — not macrolides. C) Blocking DNA gyrase describes fluoroquinolones (ciprofloxacin, levofloxacin) — not macrolides. D) Disrupting cell membrane integrity describes polymyxins (colistin) and certain antifungals (amphotericin B) — not macrolides.',
        },
      ],
    },
  },

  'Rifampin (TB)': {
    details: [
      'Part of RIPE therapy for tuberculosis (Rifampin, Isoniazid, Pyrazinamide, Ethambutol)',
      'Turns ALL body fluids red/orange — urine, tears, sweat, saliva, sputum',
      'Potent CYP450 INDUCER — accelerates metabolism of many drugs (oral contraceptives, warfarin, HIV meds, methadone)',
      'Hepatotoxicity — monitor LFTs (AST, ALT, bilirubin) regularly',
      'NEVER used alone — resistance develops rapidly in monotherapy',
      'Take on empty stomach for best absorption (1 hour before or 2 hours after meals)',
      'Also used for MRSA combination therapy and meningococcal prophylaxis',
    ],
    questions: {
      g: [
        {
          stem: 'A 28-year-old female patient with newly diagnosed active TB is started on RIPE therapy. She takes combined oral contraceptives (ethinyl estradiol/norgestrel). At her 2-week follow-up, she mentions she had unprotected intercourse and asks if her birth control is still effective. Which response by the nurse is MOST appropriate?',
          options: [
            '"Your birth control is fine — TB medications do not affect oral contraceptives"',
            '"Rifampin is a potent CYP450 inducer that significantly reduces the effectiveness of oral contraceptives. You need a backup method, and you should take a pregnancy test"',
            '"Only isoniazid affects birth control. Rifampin is safe to take with oral contraceptives"',
            '"You should stop your oral contraceptives immediately because they interfere with rifampin absorption"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Rifampin is one of the most potent CYP450 inducers. It dramatically increases the metabolism of ethinyl estradiol and progestins, reducing oral contraceptive effectiveness by up to 50%. Given unprotected intercourse, a pregnancy test is appropriate, and the patient needs an alternative or additional contraceptive method (barrier method or IUD) for the duration of rifampin therapy. A) This is dangerously incorrect. Rifampin is one of the few antibiotics that DOES significantly reduce oral contraceptive effectiveness, unlike most other antibiotics. C) Isoniazid does not significantly affect oral contraceptives. Rifampin is the TB drug known for this interaction. This answer reverses the correct drug association. D) Oral contraceptives do not interfere with rifampin absorption. The interaction is one-directional: rifampin reduces contraceptive effectiveness, not the other way around. Additionally, stopping contraceptives leaves the patient with no pregnancy prevention.',
        },
        {
          stem: 'A patient with latent TB infection is prescribed rifampin monotherapy for 4 months (an alternative to isoniazid). The patient also takes warfarin (Coumadin) for atrial fibrillation with a therapeutic INR range of 2.0-3.0. After 2 weeks, the INR drops to 1.2. Which explanation by the nurse is correct?',
          options: [
            'The patient is likely non-adherent with warfarin — counsel on medication compliance',
            'Rifampin inhibits CYP450 enzymes, causing warfarin levels to become dangerously high',
            'Rifampin induces CYP450 enzymes, accelerating warfarin metabolism and reducing its anticoagulant effect — the warfarin dose likely needs to be increased',
            'The low INR is caused by the TB infection itself and will normalize as the infection clears',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Rifampin is a potent CYP450 INDUCER (not inhibitor). It upregulates hepatic enzymes that metabolize warfarin, causing warfarin to be broken down faster. This results in subtherapeutic INR levels, putting the patient at risk for clot formation. The warfarin dose will likely need to be significantly increased during rifampin therapy. A) While non-adherence is possible, the timing (2 weeks after starting rifampin) strongly suggests a drug interaction. The nurse should identify the most likely pharmacological cause before attributing it to behavior. B) Rifampin INDUCES (speeds up) CYP450 enzymes — it does NOT inhibit them. This is the opposite. If rifampin were an inhibitor, warfarin levels would increase and INR would be elevated (causing bleeding risk), not decreased. D) Latent TB infection does not cause clinically significant changes in INR. The temporal correlation with rifampin initiation points to a drug interaction.',
        },
      ],
      y: [
        {
          stem: 'A patient on RIPE therapy for active TB calls the clinic in a panic, stating, "My tears are red and my urine looks like orange soda! Something is really wrong." Which response by the nurse is BEST?',
          options: [
            '"Come to the emergency department immediately — red tears indicate a serious adverse reaction"',
            '"This is a normal and expected effect of rifampin — it turns body fluids red/orange, including urine, tears, sweat, and saliva. It is harmless but can stain contact lenses and clothing"',
            '"This means your liver is failing. Stop all TB medications immediately and come in for labs"',
            '"This only happens when you take too much medication. Reduce your dose by half until the color goes away"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Rifampin characteristically turns ALL body fluids red/orange (urine, tears, sweat, saliva, sputum). This is harmless and expected, but patients must be warned in advance. It can permanently stain soft contact lenses and clothing. The patient should be reassured that this is normal while reminding them to protect contacts and fabrics. A) Red/orange body fluids from rifampin are not an emergency. Sending the patient to the ED for an expected drug effect wastes healthcare resources and increases patient anxiety. However, if the patient had dark brown urine or jaundice, liver evaluation WOULD be warranted. C) Red/orange body fluids are NOT a sign of liver failure. Liver failure signs include jaundice (yellow skin/sclera), dark brown urine, clay-colored stools, abdominal pain, and elevated LFTs. Stopping all TB medications without cause risks treatment failure and resistance. D) The color change occurs at therapeutic doses — it is not a sign of overdose. Reducing the dose would make the TB treatment subtherapeutic and promote resistance.',
        },
        {
          stem: 'A nurse is teaching a patient newly started on rifampin as part of RIPE therapy. Which statement by the patient indicates a need for FURTHER teaching?',
          options: [
            '"I should take this medication on an empty stomach for the best absorption"',
            '"I need to have regular blood tests to check my liver function"',
            '"I can take just the rifampin and skip the other TB medications once I feel better"',
            '"I should use a non-hormonal backup contraceptive method while on this medication"',
          ],
          correct: 2,
          rationale: 'C) REQUIRES FURTHER TEACHING — Rifampin must NEVER be taken alone for active TB. Monotherapy leads to rapid resistance development. All four RIPE medications must be taken together during the intensive phase (first 2 months), followed by rifampin + isoniazid for the continuation phase (4-7 months). Stopping other medications because of feeling better is dangerous. A) This is correct — rifampin should be taken on an empty stomach (1 hour before or 2 hours after meals) for optimal absorption. Food decreases absorption. B) This is correct — rifampin is hepatotoxic, and LFTs (AST, ALT, bilirubin) should be monitored at baseline and periodically throughout treatment. D) This is correct — rifampin dramatically reduces the effectiveness of hormonal contraceptives via CYP450 induction, so a backup non-hormonal method (barrier method or copper IUD) is necessary.',
        },
      ],
      r: [
        {
          stem: 'A nurse is reviewing the medication profile of a patient on RIPE therapy for tuberculosis. Which drug in the RIPE regimen is known for turning body fluids red/orange?',
          options: [
            'Isoniazid (INH)',
            'Rifampin',
            'Pyrazinamide',
            'Ethambutol',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Rifampin is the RIPE drug known for turning all body fluids red/orange, including urine, tears, sweat, saliva, and sputum. This is its most recognizable and frequently tested characteristic. A) Isoniazid (INH) does not change body fluid color. INH is associated with hepatotoxicity and peripheral neuropathy (prevented with vitamin B6/pyridoxine). C) Pyrazinamide does not change body fluid color. It is associated with hepatotoxicity and hyperuricemia (elevated uric acid causing gout-like symptoms). D) Ethambutol does not change body fluid color. It is associated with optic neuritis (visual acuity loss and red-green color blindness).',
        },
      ],
    },
  },

  'Pyrazinamide (TB)': {
    details: [
      'Part of RIPE therapy — used during the intensive phase (first 2 months)',
      'Hepatotoxicity is a major concern — monitor LFTs (AST, ALT, bilirubin)',
      'Increases uric acid levels → can precipitate gout or joint pain (hyperuricemia)',
      'Contraindicated in severe liver disease',
      'Mechanism: disrupts mycobacterial membrane metabolism and transport functions',
      'Works best in acidic environments (inside macrophages where TB hides)',
      'Combined with rifampin, isoniazid, and ethambutol for first 2 months, then discontinued',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on RIPE therapy for 6 weeks presents to the clinic with complaints of severe right great toe pain, swelling, and redness. Lab results show uric acid 11.2 mg/dL (normal: 3.5-7.2 mg/dL) and AST 142 U/L (normal: 10-40 U/L). Which finding should the nurse report to the provider FIRST?',
          options: [
            'The elevated uric acid level — gout is the primary safety concern with pyrazinamide',
            'The elevated AST level — hepatotoxicity is more dangerous than hyperuricemia and could be life-threatening',
            'The right great toe symptoms — gout requires immediate treatment with colchicine before addressing any other findings',
            'Neither finding is concerning — both are expected effects that resolve after pyrazinamide is discontinued',
          ],
          correct: 1,
          rationale: 'B) CORRECT — While BOTH findings are pyrazinamide-related adverse effects, the elevated AST (142 U/L, >3x normal) indicates hepatotoxicity, which is potentially life-threatening. Hepatotoxicity can progress to liver failure and death if not addressed. The provider needs to evaluate whether pyrazinamide (and potentially other hepatotoxic RIPE drugs) should be held or discontinued. A) Elevated uric acid and gout symptoms ARE concerning and need treatment, but they are not life-threatening. Hepatotoxicity takes priority because it can be fatal. Gout causes significant discomfort but does not kill. C) Treating gout symptoms is appropriate but is a secondary concern compared to possible liver damage. Colchicine or NSAIDs can address gout, but liver failure requires immediate intervention. D) While hyperuricemia is expected with pyrazinamide, an AST of 142 is NOT simply "expected." Significantly elevated liver enzymes require evaluation and possible medication adjustment. Dismissing this finding could lead to progressive liver damage.',
        },
        {
          stem: 'A nurse is caring for a patient with active TB who has a history of chronic hepatitis B with baseline AST 65 U/L. The provider prescribes standard RIPE therapy. Which concern should the nurse communicate to the provider?',
          options: [
            'Ethambutol should be avoided because it worsens hepatitis B viral replication',
            'Pyrazinamide, isoniazid, and rifampin are all hepatotoxic — with pre-existing liver disease, the risk of liver failure is significantly elevated and requires closer monitoring or regimen modification',
            'RIPE therapy is absolutely contraindicated in all patients with any liver disease',
            'Only rifampin is hepatotoxic — the other three RIPE drugs are safe for the liver',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Three of the four RIPE drugs (pyrazinamide, isoniazid, and rifampin) are hepatotoxic. In a patient with pre-existing liver disease (chronic hepatitis B with already-elevated AST), the cumulative hepatotoxicity risk is significantly increased. The provider may need to modify the regimen, intensify LFT monitoring, or consider alternative non-hepatotoxic agents. A) Ethambutol is NOT hepatotoxic — its primary toxicity is optic neuritis. It does not worsen hepatitis B viral replication. Ethambutol is actually one of the safer RIPE drugs for the liver. C) RIPE therapy is not absolutely contraindicated in all liver disease. It may be used with caution, closer monitoring, or regimen modification. However, pyrazinamide IS specifically contraindicated in severe liver disease. D) This is incorrect — pyrazinamide, isoniazid, AND rifampin are all hepatotoxic. Claiming only rifampin affects the liver underestimates the risk and could lead to inadequate monitoring of the patient.',
        },
      ],
      y: [
        {
          stem: 'A nurse is teaching a patient starting RIPE therapy about pyrazinamide. Which adverse effects should the nurse include in the teaching? (Select the BEST answer)',
          options: [
            'Visual changes and difficulty distinguishing colors',
            'Elevated uric acid levels that may cause joint pain, and liver toxicity requiring regular blood tests',
            'Red/orange discoloration of all body fluids',
            'Peripheral neuropathy and numbness in the hands and feet',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Pyrazinamide\'s two major adverse effects are hyperuricemia (elevated uric acid → gout-like joint pain) and hepatotoxicity (requiring regular LFT monitoring). Patients need to report joint pain, swelling, fatigue, jaundice, dark urine, or abdominal pain. A) Visual changes and color discrimination problems are associated with ETHAMBUTOL (optic neuritis), not pyrazinamide. C) Red/orange body fluids are the hallmark of RIFAMPIN, not pyrazinamide. D) Peripheral neuropathy is associated with ISONIAZID (INH), which depletes pyridoxine (vitamin B6). Pyridoxine supplementation prevents this effect.',
        },
        {
          stem: 'A patient completing the intensive phase (first 2 months) of RIPE therapy asks why pyrazinamide is being discontinued while the other medications continue. Which response by the nurse is correct?',
          options: [
            '"Pyrazinamide is only needed during the intensive phase because it works best against actively multiplying bacteria inside macrophages. Continuing it longer increases toxicity risk without significant benefit"',
            '"We ran out of pyrazinamide at the pharmacy, so the provider is substituting it with another drug"',
            '"Pyrazinamide was discontinued because your uric acid was too high to continue"',
            '"All four drugs should continue for the entire treatment — I will contact the provider about this"',
          ],
          correct: 0,
          rationale: 'A) CORRECT — Pyrazinamide is uniquely effective during the intensive phase because it works in acidic intracellular environments (inside macrophages) where TB bacilli hide. After 2 months, its benefit decreases and continuing it adds unnecessary hepatotoxicity and hyperuricemia risk. Standard TB treatment protocol transitions to just rifampin + isoniazid for the continuation phase. B) This is not a pharmacological rationale — pyrazinamide discontinuation after 2 months is part of the standard treatment protocol, not a supply issue. C) Unless the patient had documented symptomatic hyperuricemia requiring discontinuation, routine pyrazinamide cessation at 2 months is protocol-driven, not adverse-effect-driven. While hyperuricemia is common, it alone doesn\'t typically cause early discontinuation. D) Standard RIPE protocol calls for all four drugs for 2 months, then rifampin + isoniazid for 4-7 more months. Continuing all four for the entire duration is NOT standard and would increase toxicity.',
        },
      ],
      r: [
        {
          stem: 'Which laboratory test should the nurse monitor regularly for a patient taking pyrazinamide as part of RIPE therapy?',
          options: [
            'Serum creatinine and BUN (renal function)',
            'Liver function tests (AST, ALT, bilirubin)',
            'Complete blood count with differential (CBC)',
            'Thyroid-stimulating hormone (TSH)',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Pyrazinamide is hepatotoxic, making regular LFT monitoring (AST, ALT, bilirubin) essential. Elevated liver enzymes indicate hepatic damage, and significant elevations may require dose adjustment or drug discontinuation. Uric acid levels should also be monitored. A) Pyrazinamide is not primarily nephrotoxic. Renal function monitoring (creatinine, BUN) is not the priority lab for this drug. Aminoglycosides and vancomycin are drugs that require renal function monitoring. C) CBC monitoring is important for some medications (e.g., chemotherapy, clozapine) but is not the primary concern with pyrazinamide. D) TSH monitoring is for thyroid medications (levothyroxine, methimazole), not TB drugs. Pyrazinamide does not affect thyroid function.',
        },
      ],
    },
  },

  'Ethambutol (TB)': {
    details: [
      'Part of RIPE therapy for tuberculosis',
      'Major toxicity: optic neuritis — can cause decreased visual acuity and red-green color blindness',
      'Baseline visual acuity and color discrimination testing REQUIRED before starting',
      'Monthly visual monitoring during treatment',
      'Red-green color blindness is an EARLY sign of optic neuritis — report immediately',
      'Contraindicated in children too young for reliable visual acuity testing',
      'Generally well-tolerated otherwise — less hepatotoxic than other RIPE drugs',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on RIPE therapy for 6 weeks reports, "The traffic lights look weird — I can\'t tell if the light is red or green anymore." The patient\'s visual acuity was 20/20 bilaterally at baseline. Current visual acuity is 20/40 in both eyes. Which action should the nurse take?',
          options: [
            'Reassure the patient that mild visual changes are common and will resolve when treatment ends',
            'Document the finding and recheck visual acuity at the next monthly appointment',
            'Discontinue ethambutol immediately (per standing protocol or notify the provider urgently) — these are signs of optic neuritis that can become irreversible',
            'Switch the patient from ethambutol to isoniazid since both drugs have the same mechanism of action',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Red-green color discrimination loss combined with decreased visual acuity (20/20 baseline to 20/40) are classic signs of ethambutol-induced optic neuritis. This requires IMMEDIATE discontinuation because continued use can cause permanent, irreversible vision loss. The damage may be reversible if caught early and the drug is stopped promptly. A) Visual changes from ethambutol are NOT "common and harmless" — they are a sign of optic nerve damage. Reassuring the patient without acting delays critical intervention. While damage IS often reversible if caught early, continuing the drug risks permanent blindness. B) Waiting until the next monthly appointment is too late. Optic neuritis can progress to irreversible damage. This finding requires same-day action, not scheduling a future evaluation. D) Isoniazid and ethambutol have completely different mechanisms of action. The patient is already taking isoniazid as part of RIPE. The treatment plan will need modification by the TB specialist, but simply "switching" is not the correct approach — the ethambutol needs to be stopped urgently.',
        },
        {
          stem: 'A provider orders RIPE therapy for a 4-year-old child diagnosed with active TB. The nurse expresses concern about one of the medications. Which medication and rationale justify the nurse\'s concern?',
          options: [
            'Rifampin — it causes permanent red staining of developing teeth in children under 8',
            'Isoniazid — it causes irreversible growth plate damage in children',
            'Ethambutol — children this young cannot reliably perform the visual acuity and color discrimination testing needed to monitor for optic neuritis',
            'Pyrazinamide — it causes premature epiphyseal plate closure in pediatric patients',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Ethambutol requires baseline and monthly visual acuity and color discrimination testing to detect optic neuritis early. Children under approximately 5-6 years old often cannot reliably perform Snellen chart testing or Ishihara color plate testing. Without reliable monitoring, optic neuritis could progress undetected to permanent vision loss. The risk-benefit must be carefully evaluated. A) Rifampin does not cause tooth staining. Tetracyclines are the antibiotic class that stains developing teeth (contraindicated in children <8 and pregnant women). B) Isoniazid does not damage growth plates. Its major pediatric concern is hepatotoxicity and peripheral neuropathy (prevented with pyridoxine). D) Pyrazinamide does not cause epiphyseal plate closure. This is a fabricated adverse effect. Pyrazinamide causes hyperuricemia and hepatotoxicity in children and adults alike.',
        },
      ],
      y: [
        {
          stem: 'A nurse is performing baseline assessments before a patient starts ethambutol as part of RIPE therapy. Which assessment is MOST essential to perform before the first dose?',
          options: [
            'Audiometry testing to establish baseline hearing',
            'Visual acuity testing and color discrimination (Ishihara plates) to establish baseline',
            'Pulmonary function tests to measure baseline lung capacity',
            'Electrocardiogram to establish baseline cardiac rhythm',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Visual acuity (Snellen chart) and color discrimination (Ishihara color plates) must be performed BEFORE starting ethambutol to establish a baseline. This allows detection of any changes during treatment that would indicate optic neuritis. Without a baseline, it is impossible to determine if visual changes are drug-related. A) Audiometry (hearing testing) is the baseline assessment for aminoglycosides (gentamicin, amikacin) which cause ototoxicity — not for ethambutol. C) Pulmonary function tests assess lung disease severity but are not specific to ethambutol monitoring. They may be part of overall TB management but are not the drug-specific baseline. D) ECG is a baseline for QT-prolonging drugs (azithromycin, fluoroquinolones) or cardiotoxic drugs — not for ethambutol, which does not have significant cardiac effects.',
        },
        {
          stem: 'A patient on RIPE therapy asks the nurse which specific visual change should be reported immediately. Which response by the nurse is correct?',
          options: [
            '"Report any double vision or seeing halos around lights"',
            '"Report difficulty distinguishing between red and green colors — this is an early warning sign of ethambutol toxicity"',
            '"Report any sensitivity to bright lights or photophobia"',
            '"Report floaters or flashing lights in your peripheral vision"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Red-green color blindness is the EARLIEST sign of ethambutol-induced optic neuritis. It often appears before visual acuity changes. Patients should be taught to specifically monitor for difficulty distinguishing red from green and report it immediately — prompt discontinuation can prevent permanent damage. A) Double vision (diplopia) and halos are associated with other eye conditions (glaucoma, cataracts, cranial nerve palsies), not specifically with ethambutol-induced optic neuritis. C) Photophobia (light sensitivity) is associated with meningitis, uveitis, or migraine — not specifically with ethambutol toxicity. D) Floaters and flashing lights suggest retinal detachment or vitreous changes — an ophthalmologic emergency unrelated to ethambutol. Ethambutol affects the optic nerve, not the retina.',
        },
      ],
      r: [
        {
          stem: 'Which adverse effect is the nurse\'s PRIMARY concern when a patient is prescribed ethambutol?',
          options: [
            'Hepatotoxicity',
            'Optic neuritis (decreased visual acuity and color blindness)',
            'Peripheral neuropathy',
            'Ototoxicity (hearing loss)',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Optic neuritis is ethambutol\'s signature and most serious adverse effect. It causes decreased visual acuity and impaired red-green color discrimination. This is the most frequently tested fact about ethambutol. A) Hepatotoxicity is primarily associated with isoniazid, rifampin, and pyrazinamide — not ethambutol. Ethambutol is the LEAST hepatotoxic of the RIPE drugs. C) Peripheral neuropathy is the hallmark toxicity of ISONIAZID (INH), prevented by supplementation with vitamin B6 (pyridoxine). D) Ototoxicity is associated with aminoglycosides (gentamicin, streptomycin) and loop diuretics (furosemide), not ethambutol.',
        },
      ],
    },
  },

  'Ketoconazole (Antifungal)': {
    details: [
      'Azole antifungal — inhibits ergosterol synthesis (disrupts fungal cell membrane)',
      'BLACK BOX WARNING: Hepatotoxicity — can cause fatal liver damage',
      'Potent CYP3A4 INHIBITOR — causes many dangerous drug interactions',
      'Requires acidic gastric pH for absorption — avoid antacids, PPIs, H2 blockers',
      'Topical formulation (cream, shampoo) is much safer than systemic',
      'Rarely used systemically due to hepatotoxicity and drug interactions — replaced by safer azoles (fluconazole)',
      'Suffix pattern: -azole = azole antifungal (fluconazole, itraconazole, ketoconazole)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with a systemic fungal infection is prescribed oral ketoconazole. The patient\'s medication list includes omeprazole 20 mg daily, simvastatin 40 mg nightly, and calcium carbonate as needed. Which medication interaction should the nurse prioritize when contacting the provider?',
          options: [
            'Calcium carbonate — it will chelate ketoconazole and prevent antifungal activity',
            'Omeprazole — it raises gastric pH, drastically reducing ketoconazole absorption, AND ketoconazole inhibits CYP3A4 which can increase simvastatin to toxic levels causing rhabdomyolysis',
            'Simvastatin only — the statin should be switched to a water-soluble vitamin',
            'None — ketoconazole has no significant drug interactions when taken with food',
          ],
          correct: 1,
          rationale: 'B) CORRECT — There are TWO critical interactions: (1) Omeprazole (a PPI) raises gastric pH, making it too alkaline for ketoconazole absorption. Ketoconazole requires acidic gastric pH to dissolve and be absorbed. (2) Ketoconazole is a potent CYP3A4 inhibitor, which blocks simvastatin metabolism, raising statin levels dramatically and risking rhabdomyolysis (skeletal muscle breakdown, potentially fatal). Both interactions are clinically significant and need to be addressed. A) While calcium carbonate is an antacid that could raise gastric pH, the mechanism described (chelation) is inaccurate for this drug pair. Chelation is the mechanism with fluoroquinolones and tetracyclines + divalent cations. The PPI interaction with omeprazole is more significant and persistent. C) While the simvastatin interaction is real and dangerous, ignoring the omeprazole interaction means the ketoconazole won\'t even be absorbed — making the antifungal treatment ineffective. Both issues must be addressed. D) Ketoconazole has MANY significant drug interactions — it is one of the most interaction-prone drugs in clinical use. This statement is dangerously incorrect.',
        },
        {
          stem: 'A nurse reviews lab results for a patient who has been taking oral ketoconazole for 3 weeks. Results show: ALT 285 U/L (normal: 7-56 U/L), AST 310 U/L (normal: 10-40 U/L), total bilirubin 3.8 mg/dL (normal: 0.1-1.2 mg/dL). The patient reports fatigue, dark urine, and loss of appetite. Which action should the nurse take FIRST?',
          options: [
            'Hold the next dose and notify the provider immediately — these findings indicate hepatotoxicity, which is a Black Box Warning for ketoconazole',
            'Continue the medication and recheck liver function in one week',
            'Administer N-acetylcysteine (Mucomyst) as the specific antidote for ketoconazole hepatotoxicity',
            'Switch to IV ketoconazole to bypass first-pass hepatic metabolism',
          ],
          correct: 0,
          rationale: 'A) CORRECT — The lab results show severe hepatotoxicity: ALT and AST are 5-8x the upper limit of normal, bilirubin is elevated (indicating liver cannot process it), and the patient has classic symptoms of liver injury (fatigue, dark urine, anorexia). Ketoconazole carries a Black Box Warning for hepatotoxicity, including fatal cases. The medication must be held immediately and the provider notified for further evaluation and alternative antifungal therapy. B) Continuing the medication with liver enzymes this elevated is dangerous — it could progress to liver failure and death. One week is far too long to wait with these values. C) N-acetylcysteine (NAC) is the antidote for acetaminophen overdose, not ketoconazole hepatotoxicity. There is no specific antidote for ketoconazole-induced liver damage — the intervention is drug discontinuation and supportive care. D) IV ketoconazole does not exist as a standard formulation. Even if it did, bypassing first-pass metabolism would not address the drug\'s intrinsic hepatotoxicity — the liver damage is caused by the drug itself, not by its route of administration.',
        },
      ],
      y: [
        {
          stem: 'A patient asks the nurse why the provider switched from oral ketoconazole to oral fluconazole for treating a fungal infection. Which response by the nurse is MOST accurate?',
          options: [
            '"Fluconazole is a newer drug that works by a completely different mechanism"',
            '"Fluconazole has a much better safety profile — less liver toxicity and fewer drug interactions — while still being effective against many of the same fungi"',
            '"Ketoconazole only works topically, so it cannot treat systemic infections"',
            '"Fluconazole is cheaper, so insurance companies prefer it"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Fluconazole has largely replaced oral ketoconazole for systemic fungal infections because it has significantly less hepatotoxicity, fewer drug interactions (weaker CYP inhibitor), does not require acidic pH for absorption, and has better CNS penetration. Both are effective azole antifungals, but fluconazole\'s safety profile is superior. A) Both fluconazole and ketoconazole are azole antifungals that work by the same mechanism — inhibiting ergosterol synthesis in the fungal cell membrane. They are not "completely different." C) Ketoconazole CAN be used systemically (oral formulation exists), but it is rarely used systemically now BECAUSE of its toxicity profile, not because it only works topically. D) While cost can influence prescribing, the switch from ketoconazole to fluconazole is driven by safety, not economics. Ketoconazole\'s Black Box Warning for hepatotoxicity is the primary reason for the change.',
        },
        {
          stem: 'A nurse is teaching a patient prescribed oral ketoconazole. Which instruction is MOST important to include?',
          options: [
            '"Take this medication with a large glass of milk to protect your stomach"',
            '"Take this medication with an acidic beverage like cola or orange juice, and avoid antacids, PPIs, and H2 blockers — the drug needs stomach acid to be absorbed"',
            '"Take this medication at bedtime on an empty stomach for best results"',
            '"Crush the tablet and mix with applesauce if you have difficulty swallowing"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Ketoconazole requires acidic gastric pH to dissolve and be absorbed. PPIs (omeprazole), H2 blockers (famotidine), and antacids all raise gastric pH, dramatically reducing absorption. Taking with an acidic beverage (cola, orange juice) can help maintain adequate acidity for absorption. A) Milk is alkaline and could reduce gastric acidity, impairing ketoconazole absorption. Additionally, the fat in milk could alter drug absorption unpredictably. C) While empty stomach timing is sometimes relevant, the critical teaching point for ketoconazole is maintaining gastric acidity, not timing. Without addressing the pH requirement, the drug may not be absorbed regardless of timing. D) Crushing instructions are medication-specific and depend on the formulation. The MOST important teaching for ketoconazole is the gastric pH requirement, which directly affects whether the drug works at all.',
        },
      ],
      r: [
        {
          stem: 'Which Black Box Warning is associated with oral ketoconazole?',
          options: [
            'QT prolongation and torsades de pointes',
            'Hepatotoxicity (potentially fatal liver damage)',
            'Tendon rupture and peripheral neuropathy',
            'Bone marrow suppression and agranulocytosis',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Oral ketoconazole carries a Black Box Warning for hepatotoxicity, including cases of fatal liver damage. LFTs must be monitored before and during treatment. This is the primary reason ketoconazole has been largely replaced by safer azole antifungals for systemic use. A) Ketoconazole does carry QT prolongation risk (and it is mentioned as a concern), but the PRIMARY Black Box Warning — the one most tested — is hepatotoxicity. Both are real risks, but hepatotoxicity is the BBW answer on exams. C) Tendon rupture and peripheral neuropathy are Black Box Warnings for fluoroquinolones (ciprofloxacin, levofloxacin, ofloxacin), not ketoconazole. D) Bone marrow suppression and agranulocytosis are associated with medications like clozapine, carbamazepine, and certain chemotherapy agents, not ketoconazole.',
        },
      ],
    },
  },

  'Ofloxacin (Fluoroquinolone)': {
    details: [
      'Fluoroquinolone antibiotic — same class as ciprofloxacin and levofloxacin',
      'Mechanism: inhibits bacterial DNA gyrase and topoisomerase IV (bactericidal)',
      'FOUR Black Box Warnings: tendon rupture, peripheral neuropathy, CNS effects, aortic dissection/aneurysm',
      'Available as ophthalmic and otic (ear) drops — commonly used topically',
      'Avoid in children <18 years (cartilage damage in growing joints)',
      'Avoid in pregnancy (teratogenic risk)',
      'Photosensitivity — patients must avoid prolonged sun exposure and use sunscreen',
      'Drug interactions: chelation with divalent/trivalent cations (Ca, Mg, Fe, Al) reduces absorption',
    ],
    questions: {
      g: [
        {
          stem: 'A 72-year-old patient taking prednisone 20 mg daily for rheumatoid arthritis is prescribed ofloxacin for a urinary tract infection. Two days later, the patient reports sudden, severe pain in the right Achilles tendon while walking. Which finding does the nurse recognize as MOST significant?',
          options: [
            'The patient has age-related tendon degeneration unrelated to the antibiotic',
            'The combination of fluoroquinolone use, corticosteroid use, and age >60 puts this patient at highest risk for tendon rupture — a Black Box Warning adverse effect',
            'The pain is caused by the prednisone, not the ofloxacin, and the antibiotic should be continued',
            'Achilles tendon pain is a common side effect of all antibiotics and will resolve with rest',
          ],
          correct: 1,
          rationale: 'B) CORRECT — This patient has THREE risk factors for fluoroquinolone-induced tendon rupture: (1) fluoroquinolone use (ofloxacin), (2) concurrent corticosteroid use (prednisone), and (3) age >60 years. Tendon rupture is a Black Box Warning for ALL fluoroquinolones. The Achilles tendon is the most commonly affected. The ofloxacin should be discontinued immediately and the provider notified. A) While age-related tendon degeneration exists, the temporal relationship (2 days after starting ofloxacin) and risk factors make fluoroquinolone-induced tendinopathy the most likely cause. Dismissing this as age-related could lead to tendon rupture. C) While corticosteroids do increase tendon rupture risk, the combination with a fluoroquinolone dramatically amplifies this risk. Both drugs contribute — but the fluoroquinolone is the trigger that must be stopped. Continuing ofloxacin would be dangerous. D) Achilles tendon pain is NOT a "common side effect of all antibiotics." It is a specific, serious, Black Box Warning effect of fluoroquinolones. No other antibiotic class carries this warning.',
        },
        {
          stem: 'A nurse is discharging a patient who was prescribed ofloxacin ophthalmic drops for bacterial conjunctivitis. The patient also has a history of aortic aneurysm repair. The patient states, "I\'m glad this is just eye drops — I know I can\'t take the fluoroquinolone pills because of my aorta." Which response by the nurse is BEST?',
          options: [
            '"You\'re correct — the eye drops deliver such a small dose that systemic side effects don\'t apply"',
            '"Actually, fluoroquinolone eye drops carry the same risk of aortic dissection as oral forms — we need to call the provider"',
            '"The aortic risk only applies to ciprofloxacin, not ofloxacin"',
            '"You\'re right that systemic fluoroquinolones carry an aortic dissection risk with your history. The ophthalmic drops have minimal systemic absorption, making this a reasonable choice, but report any unusual symptoms"',
          ],
          correct: 3,
          rationale: 'D) CORRECT — This is a nuanced clinical answer. Systemic fluoroquinolones carry a Black Box Warning for aortic aneurysm/dissection, particularly in patients with pre-existing aortic conditions. Ophthalmic drops have minimal systemic absorption, so the risk is dramatically lower than oral/IV forms. However, the patient should still be aware and report unusual symptoms. This validates the patient\'s knowledge while providing accurate, balanced information. A) While partially correct about the low systemic dose, dismissing ALL systemic concerns from ophthalmic drops is oversimplified. Very small amounts can be absorbed systemically through the nasolacrimal duct, and best practice is informed awareness. B) Ophthalmic fluoroquinolones do NOT carry the same level of risk as systemic forms. The systemic absorption from eye drops is minimal. Calling the provider for routine ophthalmic fluoroquinolone use would be an overreaction unless the patient reports systemic symptoms. C) The aortic dissection risk applies to ALL fluoroquinolones as a class warning — not just ciprofloxacin. This is incorrect information.',
        },
      ],
      y: [
        {
          stem: 'A patient prescribed oral ofloxacin asks, "Can I take my calcium supplement and iron tablet at the same time as my antibiotic?" Which response by the nurse is correct?',
          options: [
            '"Yes, taking them together will enhance the antibiotic\'s absorption"',
            '"No — calcium and iron are divalent cations that bind to fluoroquinolones and significantly reduce their absorption. Take them at least 2 hours apart"',
            '"You should stop taking calcium and iron completely while on this antibiotic"',
            '"Only iron interferes with ofloxacin. Calcium is fine to take together"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Divalent and trivalent cations (calcium, magnesium, iron, aluminum, zinc) form insoluble chelate complexes with fluoroquinolones, dramatically reducing antibiotic absorption (sometimes by >90%). They must be taken at least 2 hours before or 6 hours after the fluoroquinolone. A) Taking them together would DECREASE, not enhance, absorption. The chelation reaction makes the antibiotic unavailable for absorption from the GI tract. C) Calcium and iron do not need to be stopped entirely — they just need to be separated by time from the fluoroquinolone dose. Stopping essential supplements unnecessarily could cause other health problems (osteoporosis, anemia). D) BOTH calcium and iron (and magnesium, aluminum-containing antacids, and zinc) interfere with fluoroquinolone absorption. The chelation effect applies to all divalent/trivalent cations, not just iron.',
        },
        {
          stem: 'A nurse is reviewing a new prescription for ofloxacin for a 16-year-old patient. Which action by the nurse is MOST appropriate?',
          options: [
            'Administer the medication as prescribed — ofloxacin is safe for all ages',
            'Contact the provider to verify the order — fluoroquinolones are generally avoided in patients under 18 due to the risk of cartilage damage in developing joints',
            'Administer the medication but monitor for hearing loss',
            'Request a lower dose appropriate for pediatric patients',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Fluoroquinolones are generally avoided in patients under 18 years old because they can cause damage to developing cartilage and joints (arthropathy demonstrated in animal studies). The nurse should verify that the provider is aware of the patient\'s age and has determined that the benefit outweighs the risk, or suggest an alternative antibiotic. A) Ofloxacin is NOT safe for all ages — the cartilage damage risk in children and adolescents is well-established. Administering without verification violates the nurse\'s role as patient advocate. C) Hearing loss (ototoxicity) is associated with aminoglycosides, not fluoroquinolones. The age-related concern with fluoroquinolones is cartilage/joint damage. D) Simply lowering the dose does not eliminate the risk of cartilage damage — the risk is related to the drug class effect on developing joints, not just the dose. The appropriateness of the drug choice itself needs to be verified.',
        },
      ],
      r: [
        {
          stem: 'Which Black Box Warning(s) are associated with fluoroquinolones such as ofloxacin?',
          options: [
            'Hepatotoxicity and renal failure',
            'Tendon rupture, peripheral neuropathy, CNS effects, and aortic dissection/aneurysm',
            'QT prolongation and cardiac arrest',
            'Bone marrow suppression and aplastic anemia',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Fluoroquinolones carry FOUR Black Box Warnings: (1) Tendon rupture (especially Achilles, increased with corticosteroids and age >60), (2) Peripheral neuropathy (may be irreversible), (3) CNS effects (seizures, confusion, hallucinations, depression, suicidal ideation), and (4) Aortic aneurysm/dissection. These are among the most heavily tested drug warnings. A) While fluoroquinolones can rarely affect the liver and kidneys, hepatotoxicity and renal failure are not their Black Box Warnings. C) QT prolongation can occur with some fluoroquinolones but is not listed as a Black Box Warning — it is a separate warning/precaution. The four BBWs are tendon, nerve, CNS, and aorta. D) Bone marrow suppression and aplastic anemia are associated with drugs like chloramphenicol, carbamazepine, and chemotherapy agents — not fluoroquinolones.',
        },
      ],
    },
  },

  'Fosfomycin': {
    details: [
      'Single 3g oral dose for uncomplicated urinary tract infections (UTIs)',
      'Specifically effective against E. coli and Enterococcus faecalis',
      'Granules must be mixed in cool or room-temperature water (NOT hot water — heat degrades the drug)',
      'Growing importance for multidrug-resistant (MDR) UTIs — active against many ESBL-producing organisms',
      'Safe in pregnancy — one of the few UTI medications with a good safety profile in pregnancy',
      'Mechanism: inhibits early cell wall synthesis (different target than beta-lactams)',
      'Unique single-dose convenience improves adherence',
    ],
    questions: {
      g: [
        {
          stem: 'A pregnant patient at 28 weeks gestation presents with a confirmed uncomplicated UTI caused by an ESBL-producing E. coli. The culture shows resistance to TMP-SMX and ciprofloxacin. The provider prescribes fosfomycin 3g single dose. A nursing student questions this choice. Which response by the nurse is BEST?',
          options: [
            '"The provider made an error — fosfomycin is contraindicated in pregnancy"',
            '"Fosfomycin is an appropriate choice: it is safe in pregnancy, effective against E. coli including many ESBL-producing strains, and its single-dose regimen improves adherence"',
            '"Fosfomycin can only treat fungal UTIs, not bacterial ones"',
            '"The patient should receive IV vancomycin instead — it is the only option for resistant UTIs"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Fosfomycin is an excellent choice here for multiple reasons: (1) safe in pregnancy (no teratogenic effects), (2) effective against E. coli (its primary target), (3) active against many ESBL-producing organisms (unique cell wall synthesis mechanism that is unaffected by ESBL enzymes), and (4) single-dose convenience for adherence. With TMP-SMX and ciprofloxacin resistance, fosfomycin is a guideline-recommended option. A) Fosfomycin is NOT contraindicated in pregnancy. It is actually one of the safer UTI treatments during pregnancy and is recommended by multiple guidelines for this indication. C) Fosfomycin is an ANTIBACTERIAL, not an antifungal. It inhibits bacterial cell wall synthesis and is specifically indicated for bacterial UTIs. D) IV vancomycin is not appropriate for an uncomplicated UTI — it is reserved for serious MRSA infections and does not concentrate well in urine. Additionally, vancomycin is not effective against gram-negative E. coli.',
        },
        {
          stem: 'A patient is prescribed fosfomycin for an uncomplicated UTI. The nurse provides medication instructions. The patient returns the next day saying, "I dissolved the powder in my hot tea this morning like I do with my other supplements." Which is the nurse\'s PRIMARY concern?',
          options: [
            'Hot beverages increase the risk of fosfomycin-induced renal toxicity',
            'The caffeine in tea interferes with fosfomycin absorption, rendering it ineffective',
            'Hot liquid can degrade fosfomycin, potentially reducing its effectiveness — the dose may need to be repeated',
            'Tea stains interact with fosfomycin causing a toxic chemical reaction',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Fosfomycin granules must be dissolved in cool or room-temperature water, NOT hot liquids. Heat can degrade the medication, reducing its potency. Since this is a single-dose treatment, if the drug was degraded, the UTI may not be adequately treated. The provider should be notified to determine if a repeat dose is needed. A) Fosfomycin is not significantly nephrotoxic, and hot beverages do not cause renal toxicity with this drug. B) Caffeine does not have a clinically significant interaction with fosfomycin absorption. While the tea is a problem, it is due to the HEAT, not the caffeine. D) There is no "toxic chemical reaction" between tea stains and fosfomycin. This is fabricated. The concern is thermal degradation of the drug, not a chemical interaction with tea compounds.',
        },
      ],
      y: [
        {
          stem: 'A nurse is teaching a patient how to take fosfomycin for an uncomplicated UTI. Which instruction is correct?',
          options: [
            '"Take one packet every 8 hours for 7 days to complete the course"',
            '"Dissolve the entire packet in 3-4 ounces of cool water, stir, and drink immediately — this is a one-time dose"',
            '"Swallow the granules dry with a glass of water — do not dissolve them"',
            '"Dissolve the packet in hot water and drink it like tea before bedtime"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Fosfomycin is a single 3g oral dose. The granules must be dissolved in 3-4 ounces of cool or room-temperature water (not hot), stirred well, and taken immediately. The single-dose regimen is one of its main advantages for patient adherence. A) Fosfomycin for uncomplicated UTI is a SINGLE dose, not a 7-day course. The one-dose convenience is a key advantage. Taking multiple doses over 7 days would be unnecessary and is not the standard regimen for uncomplicated UTI. C) The granules must be dissolved in water before taking — swallowing them dry would result in poor absorption and potentially GI irritation. The granule formulation is designed for dissolution. D) Hot water can degrade fosfomycin, reducing its effectiveness. The water must be cool or room temperature.',
        },
        {
          stem: 'A nurse is comparing UTI treatment options. Which characteristic makes fosfomycin unique compared to other UTI antibiotics?',
          options: [
            'It requires a 14-day treatment course for effectiveness',
            'It is the only UTI antibiotic that requires IV administration',
            'It is effective as a single oral dose, which is particularly advantageous for patient adherence',
            'It is only effective against fungal urinary tract infections',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Fosfomycin\'s single-dose oral regimen is its most distinctive feature. Most other UTI antibiotics require 3-7 days of therapy (TMP-SMX 3 days, nitrofurantoin 5-7 days, ciprofloxacin 3 days). The single dose dramatically improves adherence and is especially useful for patients who have difficulty completing multi-day courses. A) Fosfomycin is a SINGLE dose (one-time 3g packet), not a 14-day course. Fourteen days would be an unusually long UTI treatment duration for an uncomplicated infection. B) Fosfomycin for uncomplicated UTI is given ORALLY as a dissolved granule packet. While an IV formulation exists in some countries for complicated infections, the oral single-dose form is the standard use being discussed. D) Fosfomycin is an ANTIBACTERIAL that targets bacterial UTIs (E. coli, Enterococcus), not fungal infections.',
        },
      ],
      r: [
        {
          stem: 'A nurse receives an order for fosfomycin 3g for a patient with an uncomplicated UTI. Which organisms does the nurse understand fosfomycin is MOST effective against?',
          options: [
            'Pseudomonas aeruginosa and MRSA',
            'Escherichia coli (E. coli) and Enterococcus faecalis',
            'Mycobacterium tuberculosis and Mycoplasma pneumoniae',
            'Candida albicans and Aspergillus fumigatus',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Fosfomycin is specifically indicated for uncomplicated UTIs caused by E. coli and Enterococcus faecalis, which are the most common UTI pathogens. Its activity against these organisms, including many drug-resistant strains, is well-established. A) While fosfomycin has some activity against Pseudomonas in IV formulations, it is NOT the primary indication for the oral UTI formulation. MRSA is a gram-positive organism that typically causes skin and bloodstream infections, not the typical UTI target. C) Mycobacterium tuberculosis is treated with RIPE therapy, and Mycoplasma is treated with macrolides or tetracyclines. Fosfomycin is not used for either of these organisms. D) Candida and Aspergillus are FUNGI — they require antifungal medications (fluconazole, amphotericin B). Fosfomycin is an antibacterial with no antifungal activity.',
        },
      ],
    },
  },

  'Methenamine': {
    details: [
      'Used for UTI PROPHYLAXIS (prevention) — NOT for treating active infections',
      'Requires acidic urine pH <5.5 to convert to formaldehyde (the active bactericidal agent)',
      'Urinary acidifiers: vitamin C (ascorbic acid) or cranberry juice can help maintain acidic pH',
      'Avoid concurrent use with sulfonamides (TMP-SMX) — formaldehyde + sulfonamides form insoluble precipitates in urine',
      'Also avoid alkalinizing agents (sodium bicarbonate, acetazolamide) which raise urine pH above effective range',
      'NOT effective against acute UTI — it takes time for urinary formaldehyde levels to become bactericidal',
      'Available as methenamine hippurate (Hiprex) and methenamine mandelate',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on methenamine hippurate (Hiprex) for recurrent UTI prophylaxis is prescribed TMP-SMX (Bactrim) for an acute UTI. The nurse reviews the medication list. Which concern should the nurse communicate to the provider?',
          options: [
            'TMP-SMX and methenamine both treat UTIs, making the combination unnecessarily redundant',
            'Methenamine converts to formaldehyde in acidic urine, and formaldehyde combined with sulfonamides can form insoluble precipitates in the urinary tract, risking crystalluria and kidney damage',
            'TMP-SMX raises urine pH, making methenamine more effective — the doses should both be increased',
            'Methenamine inhibits the antibacterial activity of TMP-SMX, making both drugs ineffective',
          ],
          correct: 1,
          rationale: 'B) CORRECT — This is a specific and dangerous drug interaction. Methenamine is converted to formaldehyde in acidic urine. When formaldehyde combines with sulfonamide compounds (the "S" in TMP-SMX is sulfamethoxazole, a sulfonamide), they can form insoluble precipitates that crystallize in the urinary tract, causing crystalluria, hematuria, and potentially obstructive kidney damage. Methenamine should be held during sulfonamide therapy. A) While there is some redundancy, the real concern is not redundancy — it is the dangerous chemical interaction between formaldehyde (from methenamine) and sulfonamides. Simply being redundant is not a safety hazard; the precipitate formation is. C) This is incorrect on multiple levels. TMP-SMX does not significantly raise urine pH, and even if pH increased, it would make methenamine LESS effective (it needs acidic pH). Additionally, no dose increase is warranted. D) Methenamine does not inhibit TMP-SMX\'s antibacterial action. The concern is the physical/chemical precipitate formation, not pharmacological antagonism.',
        },
        {
          stem: 'A patient on methenamine for UTI prophylaxis asks the nurse whether taking sodium bicarbonate for heartburn is acceptable. The patient also takes vitamin C 500 mg daily. Which response demonstrates the BEST understanding of methenamine pharmacology?',
          options: [
            '"Sodium bicarbonate is fine — it will enhance methenamine\'s effectiveness by increasing urine pH"',
            '"Sodium bicarbonate alkalinizes your urine, which would prevent methenamine from converting to its active form (formaldehyde). Continue the vitamin C, which helps keep urine acidic, but use a different heartburn medication that doesn\'t alkalinize urine"',
            '"You should stop the vitamin C — it makes methenamine toxic by making urine too acidic"',
            '"Both sodium bicarbonate and vitamin C should be stopped while taking methenamine"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Methenamine requires urine pH <5.5 to be converted to formaldehyde (the bactericidal agent). Sodium bicarbonate is a potent alkalinizing agent that would raise urine pH above 5.5, preventing methenamine activation and making it ineffective. Vitamin C (ascorbic acid) is actually HELPFUL because it acidifies urine, maintaining the pH in the effective range. The patient should use an alternative heartburn remedy (calcium carbonate is less alkalinizing than sodium bicarbonate). A) This is backwards — increasing urine pH DECREASES methenamine effectiveness. Methenamine needs ACIDIC urine, not alkaline. Sodium bicarbonate would essentially disable the drug. C) Vitamin C is BENEFICIAL for methenamine therapy, not harmful. It acidifies urine, maintaining the pH below 5.5 that methenamine needs. There is no "too acidic" concern at normal vitamin C supplementation doses. D) Vitamin C should be CONTINUED (it helps methenamine work). Only the sodium bicarbonate should be avoided. Stopping vitamin C would reduce methenamine\'s effectiveness.',
        },
      ],
      y: [
        {
          stem: 'A nurse is educating a patient on methenamine hippurate (Hiprex) prescribed for recurrent UTI prevention. Which instruction should the nurse include?',
          options: [
            '"Take this medication only when you feel UTI symptoms starting"',
            '"Drink cranberry juice or take vitamin C to help keep your urine acidic — this medication works best in acidic urine"',
            '"Limit your fluid intake to keep the medication concentrated in your bladder"',
            '"Take this with an antacid to reduce stomach upset"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Methenamine requires urine pH <5.5 to convert to formaldehyde (the active antibacterial agent). Cranberry juice and vitamin C (ascorbic acid) are urinary acidifiers that help maintain this acidic environment. Patients should be taught to consume acidifying agents regularly while on methenamine. A) Methenamine is taken on a regular, ongoing schedule for PROPHYLAXIS (prevention), not PRN (as needed) when symptoms start. It is not effective for treating acute infections — by the time symptoms appear, the infection is established and needs a different antibiotic. C) Patients should maintain ADEQUATE fluid intake to promote urinary flushing and overall urinary tract health. Restricting fluids could lead to dehydration and concentrated, stagnant urine — which promotes bacterial growth. D) Antacids alkalinize not just the stomach but can also alkalinize urine, which would reduce methenamine\'s effectiveness. This is counterproductive to the drug\'s mechanism.',
        },
        {
          stem: 'A patient asks the nurse, "Why can\'t I just use this methenamine to treat my UTI instead of taking the antibiotic the doctor prescribed?" Which response by the nurse is correct?',
          options: [
            '"You\'re right — methenamine can treat acute infections. I\'ll ask the provider about switching"',
            '"Methenamine is for PREVENTION of UTIs, not treatment. It works slowly by releasing formaldehyde in acidic urine over time, which is not fast enough to clear an active infection. You need the antibiotic to treat the infection you have now"',
            '"Methenamine and antibiotics are the same thing — there is no difference"',
            '"Methenamine treats UTIs faster than antibiotics, but insurance only covers it for prevention"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Methenamine is a prophylactic (preventive) agent, not a treatment for acute UTIs. It works by slowly converting to formaldehyde in acidic urine, creating a bacteriostatic/bactericidal environment over time. This gradual mechanism is effective for preventing colonization but far too slow to treat an established, symptomatic infection. Acute UTIs need a fast-acting antibiotic. A) Methenamine cannot effectively treat acute infections. Recommending a switch from an antibiotic to methenamine for an active UTI would delay proper treatment and allow the infection to worsen, potentially progressing to pyelonephritis or sepsis. C) Methenamine and antibiotics work by completely different mechanisms. Methenamine is a pro-drug that converts to formaldehyde; antibiotics directly target bacterial processes (cell wall, protein synthesis, DNA replication). D) Methenamine does NOT treat UTIs faster than antibiotics — it does not treat acute UTIs at all. This statement is entirely inaccurate.',
        },
      ],
      r: [
        {
          stem: 'The nurse understands that methenamine is used for which purpose in urinary tract management?',
          options: [
            'Treatment of acute complicated pyelonephritis',
            'Prophylaxis (prevention) of recurrent urinary tract infections',
            'Treatment of acute uncomplicated UTIs as a first-line agent',
            'Management of urinary incontinence in elderly patients',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Methenamine is used exclusively for UTI PROPHYLAXIS (prevention) in patients with recurrent UTIs. It works by converting to formaldehyde in acidic urine, creating an environment hostile to bacterial colonization. It is taken regularly to prevent new infections. A) Pyelonephritis (kidney infection) is a serious acute condition requiring parenteral antibiotics (IV ceftriaxone, fluoroquinolones) — methenamine would be completely inadequate and dangerous to rely on. C) Methenamine is NOT a first-line treatment for acute UTIs. First-line acute UTI treatments include TMP-SMX, nitrofurantoin, and fosfomycin. D) Urinary incontinence is managed with behavioral therapy, pelvic floor exercises, anticholinergics (oxybutynin), or beta-3 agonists (mirabegron) — not with methenamine, which is an antimicrobial prophylactic.',
        },
      ],
    },
  },

  'Nitrofurantoin (Macrobid)': {
    details: [
      'Used for UTI treatment AND prophylaxis',
      'Turns urine brown/rust colored — normal, harmless effect',
      'Must take with FOOD — increases absorption and reduces GI upset',
      'Contraindicated when CrCl <30 mL/min — drug cannot concentrate in urine with poor kidney function',
      'Pulmonary toxicity with long-term use (pulmonary fibrosis) — monitor for cough, dyspnea',
      'Safe in pregnancy EXCEPT near term (38-42 weeks) — risk of hemolytic anemia in newborn',
      'Mechanism: damages bacterial DNA — bactericidal at therapeutic urinary concentrations',
      'Only works in URINE — does not achieve therapeutic levels in blood or tissue (useless for systemic infections)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with a serum creatinine of 2.8 mg/dL and estimated CrCl of 22 mL/min is prescribed nitrofurantoin (Macrobid) for a UTI. The nurse reviews the order. Which action is MOST appropriate?',
          options: [
            'Administer the medication as ordered — renal function does not affect nitrofurantoin',
            'Administer the medication but increase the dose to compensate for reduced renal clearance',
            'Contact the provider — nitrofurantoin is contraindicated when CrCl is below 30 mL/min because the drug cannot concentrate in the urine, making it ineffective and increasing systemic toxicity risk',
            'Hold the medication until the patient\'s next dialysis session, then administer afterward',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Nitrofurantoin is contraindicated when CrCl <30 mL/min for TWO reasons: (1) the drug works ONLY in urine and requires adequate renal excretion to concentrate there — with poor kidney function, therapeutic urinary levels cannot be achieved, making the drug ineffective; (2) the drug accumulates systemically instead, increasing the risk of peripheral neuropathy and other toxicities. An alternative antibiotic is needed. A) Renal function is CRITICAL for nitrofurantoin — it only works by concentrating in urine. Without adequate renal function, the drug is both ineffective and more toxic. B) Increasing the dose does not compensate for the inability to concentrate the drug in urine when kidneys are failing. It would only increase systemic drug levels and toxicity without improving urinary tract concentrations. D) Nitrofurantoin is not effectively managed around dialysis sessions. The drug should simply not be used in patients with CrCl <30 mL/min — an alternative antibiotic should be prescribed.',
        },
        {
          stem: 'A 36-week-pregnant patient with a UTI is prescribed nitrofurantoin (Macrobid). The nurse reviews the patient\'s gestational age. Which action by the nurse is MOST appropriate?',
          options: [
            'Administer as prescribed — nitrofurantoin is safe throughout all stages of pregnancy',
            'Contact the provider — nitrofurantoin should be avoided near term (38-42 weeks) and at 36 weeks the patient is approaching this window, warranting discussion of the risk of hemolytic anemia in the newborn',
            'Refuse to administer because nitrofurantoin is a Category X drug in all trimesters',
            'Administer the medication but schedule a fetal ultrasound to monitor for drug toxicity',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Nitrofurantoin is generally safe in pregnancy but should be avoided near term (38-42 weeks) because it can cause hemolytic anemia in the newborn (the immature neonatal liver cannot adequately handle the drug). At 36 weeks, the patient is very close to this window, and if labor occurs early, the baby could be exposed. The provider should be notified to weigh risks and consider an alternative. A) Nitrofurantoin is NOT safe throughout ALL stages of pregnancy — it should be avoided near term (38-42 weeks) due to neonatal hemolytic anemia risk. Stating it is universally safe is inaccurate. C) Nitrofurantoin is NOT Category X (teratogenic/contraindicated in pregnancy). It is generally considered safe in most of pregnancy. The concern is specifically near-term use, not all-trimester contraindication. D) Fetal ultrasound cannot detect hemolytic anemia from nitrofurantoin exposure. The concern is post-delivery hemolysis in the newborn, not an in-utero structural abnormality visible on ultrasound.',
        },
      ],
      y: [
        {
          stem: 'A nurse is teaching a patient prescribed nitrofurantoin (Macrobid) for a UTI. Which instruction is MOST important for the nurse to include?',
          options: [
            '"Take this medication on an empty stomach with a full glass of water"',
            '"Take this medication WITH FOOD — food increases drug absorption and reduces stomach upset"',
            '"Crush the capsule and mix with applesauce for easier swallowing"',
            '"Take this medication only at bedtime for maximum effectiveness"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Nitrofurantoin must be taken with food for two important reasons: (1) food significantly increases drug absorption (bioavailability increases by approximately 40%), and (2) food reduces the common GI side effects (nausea, vomiting, diarrhea). Taking it on an empty stomach reduces effectiveness and worsens tolerability. A) Empty stomach is the OPPOSITE of what is needed. Taking nitrofurantoin without food reduces absorption and increases nausea. C) Macrobid capsules contain a dual-release formulation that should NOT be crushed. Crushing alters the drug release mechanism and can increase GI upset. D) While some prophylactic regimens use bedtime dosing, the MOST important instruction is taking with food. Timing alone without food would reduce absorption.',
        },
        {
          stem: 'A patient on long-term nitrofurantoin prophylaxis for recurrent UTIs develops a persistent dry cough and shortness of breath over several weeks. Which adverse effect does the nurse suspect?',
          options: [
            'Allergic reaction to the brown dye in the medication',
            'Pulmonary toxicity (pulmonary fibrosis) — a known adverse effect of long-term nitrofurantoin use',
            'Community-acquired pneumonia unrelated to the medication',
            'Gastrointestinal reflux causing aspiration',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Pulmonary toxicity (including pulmonary fibrosis) is a recognized adverse effect of LONG-TERM nitrofurantoin use. Symptoms include progressive dry cough, dyspnea, and decreased exercise tolerance developing over weeks to months. The medication should be discontinued and the patient evaluated with chest imaging and pulmonary function tests. A) The brown color of urine is from nitrofurantoin itself, not a dye additive. Pulmonary symptoms are not caused by a dye allergy. This does not explain the chronic respiratory symptoms. C) While pneumonia is possible, the gradual onset of cough and dyspnea in a patient on long-term nitrofurantoin should prompt the nurse to suspect drug-induced pulmonary toxicity first, given the direct temporal relationship. D) GERD-related aspiration would typically present with symptoms related to eating/positioning, heartburn, and acidic taste — not the insidious progressive cough and dyspnea pattern seen with pulmonary fibrosis.',
        },
      ],
      r: [
        {
          stem: 'A patient taking nitrofurantoin (Macrobid) calls the clinic worried about brown-colored urine. Which response by the nurse is correct?',
          options: [
            '"This indicates kidney damage — come in for labs immediately"',
            '"This is a normal, harmless effect of nitrofurantoin — the medication turns urine a brown or rust color"',
            '"This means the infection is getting worse — go to the emergency department"',
            '"You are dehydrated — increase your fluid intake to 4 liters per day"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Brown or rust-colored urine is a normal, harmless, and expected effect of nitrofurantoin. The drug itself is excreted in urine and changes its color. Patients should be warned about this BEFORE starting the medication to prevent unnecessary anxiety. A) Brown urine from nitrofurantoin does not indicate kidney damage. Signs of kidney damage include decreased urine output, edema, significantly elevated creatinine/BUN, and electrolyte abnormalities. C) Brown urine from the medication does not indicate worsening infection. Signs of worsening UTI include increasing pain, fever, flank pain, and hematuria (blood, not drug-related color change). D) While dark urine CAN indicate dehydration, in a patient taking nitrofurantoin, the brown color is overwhelmingly likely from the drug. Telling a patient to drink 4 liters is excessive and could cause water intoxication.',
        },
      ],
    },
  },

  'Phenazopyridine (Pyridium)': {
    details: [
      'Urinary tract ANALGESIC only — provides pain relief, NOT an antibiotic',
      'Turns urine bright orange/red — can stain clothing and contact lenses',
      'Used for UTI symptom relief WHILE WAITING for antibiotics to take effect (24-48 hours)',
      'Maximum 2 days OTC use — should not be used to delay proper antibiotic treatment',
      'Can MASK UTI symptoms — important not to use as a substitute for treatment',
      'Can interfere with urinalysis results (false readings on dipstick)',
      'Available OTC (lower dose) and by prescription (higher dose)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient presents to the urgent care clinic with UTI symptoms (dysuria, frequency, urgency). The patient has been taking OTC phenazopyridine (Pyridium) for 5 days and states, "The burning went away on day 2, so I figured I was getting better and didn\'t need the antibiotic." A urine dipstick shows abnormal orange discoloration. Which is the nurse\'s GREATEST concern?',
          options: [
            'The orange discoloration indicates the urine sample is contaminated and a new sample is needed',
            'Phenazopyridine masked the UTI symptoms without treating the infection — the UTI likely progressed. Additionally, the drug interferes with urinalysis accuracy, and the patient exceeded the recommended 2-day OTC maximum',
            'Five days of phenazopyridine is the standard treatment course and the infection should be resolved',
            'The patient needs a higher dose of phenazopyridine since symptoms initially improved then returned',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Multiple concerns: (1) Phenazopyridine is NOT an antibiotic — it only masks symptoms. The UTI was never treated and likely progressed (possibly to pyelonephritis). (2) The patient exceeded the 2-day OTC recommended maximum, increasing risk of adverse effects. (3) Phenazopyridine interferes with urine dipstick results (false positives/negatives, abnormal discoloration), requiring a clean specimen after the drug clears. The patient needs proper antibiotic treatment and possibly imaging to assess for complicated infection. A) While phenazopyridine DOES interfere with urinalysis, the nurse\'s greatest concern is not just the sample quality — it is that the infection went untreated for 5 days. The sample issue is secondary to the untreated infection. C) Phenazopyridine is NEVER a treatment course. It provides symptomatic relief only and should never be used instead of antibiotics. Five days without antibiotic treatment risks serious complications. D) Increasing the dose of a symptom-masking agent without treating the underlying infection is dangerous and inappropriate. The patient needs an antibiotic, not more pain relief.',
        },
        {
          stem: 'A nurse is collecting a urine sample for urinalysis from a patient who started phenazopyridine 2 hours ago. The patient was also started on an antibiotic for a diagnosed UTI. Which action by the nurse is MOST appropriate regarding the urine sample?',
          options: [
            'Collect the sample now — phenazopyridine does not affect urine testing',
            'Document that the patient is taking phenazopyridine, as it can interfere with urine dipstick results and may cause inaccurate readings',
            'Wait 24 hours after the antibiotic dose to collect the sample for accurate results',
            'Discard phenazopyridine-affected urine samples and catheterize the patient for a clean specimen',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Phenazopyridine can interfere with urine dipstick test results, causing false readings on nitrites, leukocyte esterase, bilirubin, and urobilinogen due to the orange dye. Documenting the medication allows the lab to account for interference. If an unaffected sample is needed, the provider may request collection after the drug clears (phenazopyridine has a short duration). A) Phenazopyridine DOES affect urine testing — its orange dye can cause false readings on multiple dipstick parameters. Collecting without documentation could lead to misinterpretation. C) Waiting 24 hours after the antibiotic is not the relevant timing issue — the interference is from the phenazopyridine, not the antibiotic. Antibiotics do not typically interfere with dipstick analysis. D) Catheterization carries infection risk and is unnecessarily invasive. Documentation of the interfering medication is sufficient. Catheterization should only be used when there is a clinical indication beyond dye interference.',
        },
      ],
      y: [
        {
          stem: 'A nurse is discharging a patient with a UTI who is prescribed both an antibiotic and phenazopyridine (Pyridium). Which teaching point is MOST important?',
          options: [
            '"Continue taking phenazopyridine for the full 7 days along with your antibiotic"',
            '"Phenazopyridine is for pain relief only — continue taking your antibiotic for the full prescribed course even after the burning stops. Phenazopyridine is typically used for only 2 days"',
            '"You only need to take the antibiotic if the phenazopyridine doesn\'t work"',
            '"Stop the antibiotic once the phenazopyridine relieves your symptoms"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Phenazopyridine provides symptom relief (analgesic for burning, urgency, frequency) while the antibiotic works to eliminate the infection (typically 24-48 hours for symptoms to improve from the antibiotic). Phenazopyridine is recommended for only 2 days, while the full antibiotic course must be completed. The patient must understand that pain relief does not mean the infection is gone. A) Phenazopyridine should NOT be taken for 7 days — the recommended OTC maximum is 2 days. Extended use increases the risk of adverse effects (methemoglobinemia, hemolytic anemia) without additional benefit. C) The antibiotic is the TREATMENT — it is not optional. Phenazopyridine only masks symptoms. Without the antibiotic, the infection will worsen regardless of symptom relief. D) Stopping the antibiotic based on symptom relief is dangerous. Symptoms may improve from the analgesic while the bacteria are still present. This promotes antibiotic resistance and UTI recurrence.',
        },
        {
          stem: 'A patient taking phenazopyridine (Pyridium) calls the nurse concerned about bright orange-red urine and asks if their contact lenses could be affected. Which response is correct?',
          options: [
            '"The orange color means you are having a serious allergic reaction — come in immediately"',
            '"Orange urine is normal with phenazopyridine. Yes, the dye CAN stain soft contact lenses permanently — consider wearing glasses while taking this medication"',
            '"Only your urine changes color — it cannot affect your eyes or contact lenses"',
            '"The orange color means you are dehydrated and need to drink more water"',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Phenazopyridine turns urine bright orange/red, which is a normal, expected effect. The dye CAN stain soft contact lenses orange permanently if the patient handles lenses after touching orange-tinged urine or through trace amounts in tears. Patients should be advised to wear glasses during the short course of treatment. A) Orange urine is NOT an allergic reaction — it is the expected, normal effect of phenazopyridine. An actual allergic reaction would present with rash, hives, swelling, or difficulty breathing. C) While the primary color change is in urine, phenazopyridine CAN also slightly discolor tears and other body fluids, and it definitely can stain soft contact lenses. Telling the patient it cannot affect lenses is inaccurate. D) Orange urine in a patient on phenazopyridine is from the drug, not dehydration. Dehydration causes dark amber/concentrated urine, not bright orange.',
        },
      ],
      r: [
        {
          stem: 'Which statement BEST describes the action of phenazopyridine (Pyridium)?',
          options: [
            'It is a broad-spectrum antibiotic that kills UTI-causing bacteria',
            'It is a urinary tract analgesic that provides symptom relief (pain, burning, urgency) but does NOT treat the infection',
            'It is an antifungal medication for yeast-related UTIs',
            'It is an anti-inflammatory that reduces kidney swelling',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Phenazopyridine is a urinary tract analgesic ONLY. It provides local pain relief for dysuria (burning), urgency, and frequency by acting on the urinary tract mucosa. It has NO antibacterial, antifungal, or anti-infective activity. It is used alongside antibiotics for symptom relief. A) Phenazopyridine is NOT an antibiotic — this is the most common and most dangerous misconception. Patients who believe it treats the infection may not take their prescribed antibiotic. C) Phenazopyridine is not an antifungal. Fungal UTIs (candiduria) are treated with fluconazole or amphotericin B bladder irrigation. D) Phenazopyridine is not an anti-inflammatory and does not reduce kidney swelling. It acts locally on the urinary tract mucosa as an analgesic (pain reliever), not as an anti-inflammatory.',
        },
      ],
    },
  },

  'Antibiotic Prophylaxis': {
    details: [
      'SURGICAL: Cefazolin (1st-gen cephalosporin) 30-60 minutes before incision — covers skin flora',
      'CARDIAC/IE: Amoxicillin 2g PO 1 hour before dental procedures — for prosthetic valves, prior IE, certain congenital heart conditions',
      'Clindamycin is the alternative for penicillin-allergic patients requiring IE prophylaxis',
      'UTI PROPHYLAXIS: Low-dose TMP-SMX or nitrofurantoin for recurrent UTIs',
      'STD PROPHYLAXIS/TREATMENT: Ceftriaxone 500mg IM + azithromycin (or doxycycline) for gonorrhea/chlamydia co-treatment',
      'Timing is critical: too early = drug wears off, too late = bacteria already colonizing',
      'Goal: prevent infection in high-risk situations, NOT treat existing infection',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with a prosthetic mitral valve is scheduled for a dental cleaning. The preoperative orders include amoxicillin 2g PO. The patient arrives at the dental office and reports a severe penicillin allergy (anaphylaxis and throat swelling 5 years ago). The dental procedure is scheduled to begin in 45 minutes. Which action should the nurse take?',
          options: [
            'Administer the amoxicillin as ordered — the allergy was 5 years ago and likely resolved',
            'Cancel the dental procedure entirely — patients with penicillin allergy can never have dental work',
            'Contact the prescriber to obtain an alternative prophylactic antibiotic such as clindamycin 600 mg PO, which should be given 1 hour before the procedure',
            'Administer the amoxicillin with diphenhydramine (Benadryl) as premedication to prevent the allergic reaction',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Amoxicillin is a penicillin-family drug and is contraindicated in a patient with documented anaphylaxis to penicillin. Clindamycin 600 mg PO given 30-60 minutes before the procedure is the recommended alternative for IE prophylaxis in penicillin-allergic patients. Other alternatives include azithromycin or clarithromycin 500 mg PO. The nurse should contact the prescriber immediately — there is still time before the procedure. A) Penicillin allergy with anaphylaxis does NOT resolve over time — IgE-mediated severe allergies can persist for life. Administering amoxicillin to a patient with documented anaphylaxis risk could cause a life-threatening reaction. B) Patients with penicillin allergy CAN have dental work — they simply need a non-penicillin prophylactic antibiotic. Canceling the procedure entirely is unnecessary and delays needed dental care. D) Premedicating with diphenhydramine does NOT safely prevent anaphylaxis. Antihistamines can mask early symptoms of anaphylaxis, making recognition and treatment delayed. This is a dangerous approach to a known severe allergy.',
        },
        {
          stem: 'A nurse in the preoperative area reviews a patient\'s chart for a scheduled total knee replacement. The antibiotic prophylaxis order reads: "Cefazolin 2g IV to be administered 30-60 minutes before incision." The current time is 0730, and the scheduled incision time is 0800. The nurse has not yet started the antibiotic. Which action is MOST appropriate?',
          options: [
            'Begin the cefazolin infusion now to ensure adequate tissue levels before incision at 0800',
            'Wait until 0800 to give the antibiotic so it is administered at the time of incision for maximum effect',
            'Administer the antibiotic after the surgery since timing doesn\'t matter for prophylaxis',
            'Hold the antibiotic because the patient will receive antibiotics in the recovery room anyway',
          ],
          correct: 0,
          rationale: 'A) CORRECT — Surgical prophylaxis requires antibiotic administration 30-60 minutes BEFORE incision to ensure adequate tissue levels when the skin is opened and bacteria can enter. At 0730, administering now gives 30 minutes before the 0800 incision — this is within the recommended window. Adequate tissue levels at the time of incision are essential. B) Administering AT the time of incision (0800) is too late. The antibiotic needs time to distribute to tissues and reach adequate concentrations BEFORE the surgical site is exposed. Giving it at incision time means inadequate protection when it matters most. C) Post-surgical antibiotic administration does NOT provide the same prophylactic benefit. The goal is to have therapeutic levels in tissue DURING the procedure when bacterial contamination is most likely. After surgery, contamination has already occurred if bacteria were present. D) Recovery room antibiotics are typically continuation doses, not prophylactic doses. The initial prophylactic dose is the most critical — missing it significantly increases surgical site infection risk.',
        },
      ],
      y: [
        {
          stem: 'A nurse is reviewing prophylactic antibiotic indications with nursing students. Which patient requires infective endocarditis (IE) prophylaxis before a dental procedure?',
          options: [
            'A patient with mitral valve prolapse without regurgitation',
            'A patient with a prosthetic mechanical aortic valve',
            'A patient with a history of coronary artery bypass graft (CABG)',
            'A patient with well-controlled hypertension on lisinopril',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Current AHA guidelines recommend IE prophylaxis for patients at HIGHEST risk: prosthetic heart valves, previous IE, specific congenital heart diseases, and cardiac transplant recipients with valvulopathy. A prosthetic mechanical valve is a clear indication for prophylaxis before dental procedures. A) Mitral valve prolapse WITHOUT regurgitation is no longer an indication for IE prophylaxis per current AHA guidelines. The 2007 guideline update significantly narrowed the indications. C) CABG (coronary artery bypass) does not create an endocarditis risk that requires prophylaxis. The bypass graft is a vascular conduit, not a valve replacement. D) Hypertension, even when treated with medications, is not a risk factor for infective endocarditis and does not require antibiotic prophylaxis before dental procedures.',
        },
        {
          stem: 'A patient is diagnosed with gonorrhea and chlamydia co-infection at an STD clinic. Which antibiotic regimen does the nurse anticipate the provider will prescribe?',
          options: [
            'Amoxicillin 500 mg PO three times daily for 10 days',
            'Ceftriaxone 500 mg IM single dose PLUS doxycycline 100 mg PO twice daily for 7 days (or azithromycin 1g PO single dose)',
            'Metronidazole (Flagyl) 500 mg PO twice daily for 14 days',
            'Vancomycin 1g IV every 12 hours for 5 days',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Current CDC guidelines recommend dual therapy for gonorrhea/chlamydia co-infection: ceftriaxone 500 mg IM (covers gonorrhea — a third-generation cephalosporin with excellent gram-negative coverage) PLUS doxycycline 100 mg BID for 7 days or azithromycin 1g PO single dose (covers chlamydia — an intracellular organism requiring drugs with good tissue penetration). A) Amoxicillin is NOT effective against gonorrhea due to widespread resistance. While it can treat some infections, it is not part of the current STD treatment protocol. C) Metronidazole treats anaerobic infections and is used for trichomoniasis and bacterial vaginosis, NOT for gonorrhea or chlamydia. D) IV vancomycin is used for MRSA and serious gram-positive infections. It is not indicated for gonorrhea (gram-negative) or chlamydia (intracellular). Additionally, IV therapy is not appropriate for outpatient STD treatment.',
        },
      ],
      r: [
        {
          stem: 'A nurse is preparing a patient for surgery. The surgeon orders cefazolin 2g IV for surgical prophylaxis. When should the nurse administer this antibiotic?',
          options: [
            '30-60 minutes before the surgical incision',
            'Immediately after the surgery is completed',
            '24 hours before the scheduled surgery',
            'When the patient first arrives at the hospital for pre-admission testing',
          ],
          correct: 0,
          rationale: 'A) CORRECT — Surgical antibiotic prophylaxis with cefazolin should be administered 30-60 minutes before incision. This timing ensures peak tissue levels at the time the surgical wound is open and most vulnerable to bacterial contamination. This is the standard evidence-based recommendation. B) Post-operative administration is too late for prophylaxis. The goal is to have the antibiotic in the tissues BEFORE contamination can occur during surgery. C) Twenty-four hours before surgery is far too early. The drug would be metabolized and excreted well before the actual surgery, providing no protection at incision time. D) Pre-admission testing typically occurs days before surgery. Administering the antibiotic this early would provide zero prophylactic benefit at the time of surgery.',
        },
      ],
    },
  },

};
