// ══════════════════════════════════════════════
// NCLEX Questions — ANTIMICROBIALS SPECIAL GROUP
// TB, Antifungals, Antivirals, HIV
// 3 difficulty levels: g=green(hardest), y=yellow(moderate), r=red(foundational)
// ══════════════════════════════════════════════

window.DRUG_DEEP_ANTIMICROBIALS_SPECIAL = {

  'Isoniazid (INH) — TB': {
    details: [
      'Part of the RIPE regimen: Rifampin, Isoniazid, Pyrazinamide, Ethambutol',
      'ALWAYS give with pyridoxine (B6) to prevent peripheral neuropathy',
      'Hepatotoxicity — monitor liver enzymes (AST/ALT)',
      'DOT (Directly Observed Therapy) is required for TB treatment compliance',
      'RIPE = 4 drugs x 2 months (intensive), then 2 drugs x 4 months (continuation)',
      'Side effect mnemonic: R=Red body fluids, I=neuropathy (give B6), P=gout/joint Pain, E=Eye problems',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on isoniazid reports tingling and numbness in both hands and feet. The nurse recognizes this as peripheral neuropathy caused by:',
          options: [
            'Direct nerve toxicity from isoniazid that cannot be prevented',
            'Pyridoxine (B6) deficiency — isoniazid depletes B6, causing neuropathy',
            'An allergic reaction requiring immediate drug discontinuation',
            'A drug interaction with the patient\'s other TB medications',
          ],
          correct: 1,
          rationale: 'Isoniazid depletes pyridoxine (vitamin B6), which causes peripheral neuropathy. This is PREVENTABLE — always co-prescribe B6 with isoniazid. If the patient is already symptomatic, start B6 immediately and notify the provider. The exam loves this question.',
        },
        {
          stem: 'A patient has been on the RIPE regimen for 2 months. The provider discontinues pyrazinamide and ethambutol but continues rifampin and isoniazid. The patient asks why. The nurse explains:',
          options: [
            '"You\'re cured — these two drugs are just for maintenance."',
            '"The intensive phase (4 drugs for 2 months) kills most of the bacteria. Now you continue 2 drugs for 4 more months to eliminate remaining organisms."',
            '"The other two drugs were causing too many side effects."',
            '"You only need 2 drugs because your TB was mild."',
          ],
          correct: 1,
          rationale: 'RIPE regimen: 4 drugs x 2 months (intensive phase), then isoniazid + rifampin x 4 months (continuation phase). Total = 6 months minimum. This phased approach prevents drug resistance. The patient is NOT cured at 2 months.',
        },
        {
          stem: 'A patient on isoniazid has an ALT of 280 U/L (normal 7-56). The nurse should:',
          options: [
            'Continue the medication and recheck labs in 1 month',
            'Hold isoniazid and notify the provider — ALT is 5x normal, indicating hepatotoxicity',
            'Administer N-acetylcysteine (NAC) as an antidote',
            'Reduce the dose by half and continue treatment',
          ],
          correct: 1,
          rationale: 'ALT 5x above normal is the threshold for stopping isoniazid due to hepatotoxicity. 280 is 5x the upper limit of normal (56). All RIPE drugs are hepatotoxic — monitor liver enzymes regularly. NAC is the antidote for acetaminophen, not isoniazid.',
        },
      ],
      y: [
        {
          stem: 'Which vitamin should ALWAYS be given with isoniazid?',
          options: [
            'Vitamin C',
            'Vitamin D',
            'Pyridoxine (Vitamin B6)',
            'Folic acid',
          ],
          correct: 2,
          rationale: 'B6 (pyridoxine) prevents isoniazid-induced peripheral neuropathy. This is non-negotiable — every patient on INH gets B6. If you see a question about tingling/numbness in a TB patient, think B6 deficiency.',
        },
        {
          stem: 'DOT (Directly Observed Therapy) for TB means:',
          options: [
            'The patient self-administers medication at home and calls the clinic to report',
            'A healthcare worker watches the patient take every dose',
            'The patient takes a double dose every other day',
            'The patient reports to the hospital for IV infusions',
          ],
          correct: 1,
          rationale: 'DOT requires a healthcare worker to physically observe the patient swallowing every dose. This ensures compliance — TB treatment is 6+ months, and skipping doses leads to drug-resistant TB (MDR-TB). Non-adherence is a public health crisis.',
        },
        {
          stem: 'Which RIPE drug causes orange-red discoloration of body fluids?',
          options: [
            'Isoniazid',
            'Rifampin',
            'Pyrazinamide',
            'Ethambutol',
          ],
          correct: 1,
          rationale: 'Rifampin = Red body fluids. Urine, tears, sweat, saliva all turn orange-red. This is harmless but patients need to know — it will permanently stain contact lenses. Mnemonic: R = Red (Rifampin).',
        },
      ],
      r: [
        {
          stem: 'The RIPE regimen for TB includes which 4 drugs?',
          options: [
            'Rifampin, Isoniazid, Penicillin, Erythromycin',
            'Rifampin, Isoniazid, Pyrazinamide, Ethambutol',
            'Rifampin, Ibuprofen, Pyridoxine, Ethambutol',
            'Ranitidine, Isoniazid, Prednisone, Epinephrine',
          ],
          correct: 1,
          rationale: 'RIPE = Rifampin, Isoniazid, Pyrazinamide, Ethambutol. All four are used together for the first 2 months, then rifampin + isoniazid continue for 4 more months.',
        },
        {
          stem: 'Ethambutol requires monitoring of which body system?',
          options: [
            'Hearing',
            'Vision (eye exams)',
            'Kidney function',
            'Blood glucose',
          ],
          correct: 1,
          rationale: 'Ethambutol can cause optic neuritis (vision changes, color blindness, decreased acuity). Mnemonic: E = Eyes. Baseline and regular eye exams are required. Report any vision changes immediately.',
        },
        {
          stem: 'A patient on the RIPE regimen should avoid:',
          options: [
            'Dairy products',
            'Sunlight',
            'Alcohol (all 4 drugs are hepatotoxic)',
            'Exercise',
          ],
          correct: 2,
          rationale: 'All RIPE drugs are hepatotoxic — alcohol adds liver stress on top of that. Avoid alcohol completely during TB treatment. Monitor liver enzymes regularly.',
        },
      ],
    },
  },

  'Amphotericin B (Antifungal)': {
    details: [
      'Nickname: "AmphoTERRIBLE" — because of severe side effects',
      'Used for serious systemic fungal infections (life-threatening)',
      'Nephrotoxicity is the biggest concern — monitor BUN/creatinine',
      'Pre-medicate with DHAM: Diphenhydramine, Hydrocortisone, Acetaminophen, Meperidine (for rigors)',
      'Infusion reactions: fever, chills, rigors ("shake and bake")',
      'Hydrate with NS before infusion to protect kidneys',
      'Monitor potassium and magnesium (hypokalemia/hypomagnesemia)',
    ],
    questions: {
      g: [
        {
          stem: 'Before administering amphotericin B, the nurse should prepare which pre-medications? (Select the BEST combination)',
          options: [
            'Ondansetron and famotidine',
            'Diphenhydramine, hydrocortisone, acetaminophen, and meperidine (DHAM)',
            'Epinephrine and atropine',
            'Lorazepam and morphine',
          ],
          correct: 1,
          rationale: 'DHAM pre-meds: Diphenhydramine (antihistamine for reactions), Hydrocortisone (anti-inflammatory), Acetaminophen (fever), Meperidine (for rigors/shaking chills). These prevent the "shake and bake" infusion reactions that amphotericin B is notorious for.',
        },
        {
          stem: 'A patient on amphotericin B has a potassium of 3.0 mEq/L. The nurse should:',
          options: [
            'Continue the amphotericin B — this K+ is acceptable',
            'Hold the amphotericin B and notify the provider — hypokalemia needs correction',
            'Administer the amphotericin B with orange juice',
            'Double the IV fluid rate to dilute the potassium',
          ],
          correct: 1,
          rationale: 'Normal K+ is 3.5-5.0. Amphotericin B causes renal potassium wasting (hypokalemia). K+ of 3.0 is dangerously low — risk of cardiac arrhythmias. Hold the drug, replace potassium, and notify the provider. Monitor K+ and Mg2+ throughout therapy.',
        },
      ],
      y: [
        {
          stem: 'The nurse should administer which IV fluid BEFORE amphotericin B to protect the kidneys?',
          options: [
            'D5W (dextrose 5% in water)',
            'Normal saline (0.9% NaCl)',
            'Lactated Ringer\'s',
            'D5 1/2 NS',
          ],
          correct: 1,
          rationale: 'NS (normal saline) hydration before amphotericin B helps prevent nephrotoxicity by maintaining renal blood flow. This is a standard pre-infusion protocol. Always hydrate before and during amphotericin B administration.',
        },
        {
          stem: 'Amphotericin B is nicknamed "AmphoTERRIBLE" because:',
          options: [
            'It tastes terrible',
            'It has severe side effects including nephrotoxicity and infusion reactions',
            'It doesn\'t work well against most fungi',
            'It requires monthly blood transfusions',
          ],
          correct: 1,
          rationale: 'The nickname reflects its severe toxicity profile: nephrotoxicity, hypokalemia, hypomagnesemia, fever, chills, rigors, nausea, vomiting. Despite this, it\'s used because it treats life-threatening fungal infections that other drugs can\'t.',
        },
        {
          stem: 'Which lab values should the nurse monitor during amphotericin B therapy?',
          options: [
            'Blood glucose and hemoglobin A1C',
            'BUN, creatinine, potassium, and magnesium',
            'INR and PT',
            'TSH and T4',
          ],
          correct: 1,
          rationale: 'BUN/creatinine for nephrotoxicity + potassium and magnesium for electrolyte wasting. These are the critical labs for amphotericin B monitoring.',
        },
      ],
      r: [
        {
          stem: 'The most serious adverse effect of amphotericin B is:',
          options: [
            'Headache',
            'Nephrotoxicity',
            'Constipation',
            'Drowsiness',
          ],
          correct: 1,
          rationale: 'Nephrotoxicity is the #1 concern with amphotericin B. It can cause acute kidney injury. That\'s why we pre-hydrate with NS and monitor renal function closely throughout therapy.',
        },
        {
          stem: 'Amphotericin B is used to treat:',
          options: [
            'Bacterial infections',
            'Viral infections',
            'Serious systemic fungal infections',
            'Parasitic infections',
          ],
          correct: 2,
          rationale: 'Amphotericin B is a potent antifungal used for life-threatening systemic fungal infections (aspergillosis, cryptococcal meningitis, histoplasmosis). It works by binding to ergosterol in the fungal cell membrane.',
        },
      ],
    },
  },

  'Acyclovir (Antiviral)': {
    details: [
      'Used for: HSV (herpes simplex), VZV (varicella-zoster/shingles)',
      'Does NOT cure herpes — manages outbreaks, reduces viral shedding',
      'IV administration: hydrate well BEFORE giving — nephrotoxicity risk from crystallization',
      'Maintain adequate hydration throughout therapy',
      'Can be given PO, IV, or topically',
      'Teach patients: acyclovir manages, does not eliminate, the virus',
    ],
    questions: {
      g: [
        {
          stem: 'A patient is prescribed IV acyclovir for severe herpes encephalitis. Before starting the infusion, the nurse should FIRST:',
          options: [
            'Check the patient\'s liver function tests',
            'Ensure adequate hydration — administer IV fluids to protect the kidneys from crystal deposition',
            'Apply topical acyclovir to any visible lesions',
            'Place the patient in droplet isolation',
          ],
          correct: 1,
          rationale: 'IV acyclovir can crystallize in the renal tubules, causing nephrotoxicity. Hydrating BEFORE the infusion dilutes the drug in the kidneys and prevents crystal formation. This is similar to the amphotericin B pre-hydration concept.',
        },
      ],
      y: [
        {
          stem: 'A patient asks, "Will acyclovir cure my herpes?" The nurse\'s best response is:',
          options: [
            '"Yes, after a full course you\'ll be cured."',
            '"No, acyclovir manages outbreaks and reduces shedding, but the virus remains in your body."',
            '"Yes, but only if you take it every day for a year."',
            '"It depends on the type of herpes you have."',
          ],
          correct: 1,
          rationale: 'Acyclovir is NOT a cure. HSV establishes latency in nerve ganglia and stays forever. Acyclovir reduces outbreak severity, speeds healing, and decreases viral shedding. Patients need to understand this for realistic expectations and ongoing prevention.',
        },
        {
          stem: 'Which nursing intervention is essential for a patient receiving IV acyclovir?',
          options: [
            'Monitor for hearing loss',
            'Maintain adequate fluid intake to prevent renal crystal deposition',
            'Apply sunscreen before the infusion',
            'Give with food to reduce GI upset',
          ],
          correct: 1,
          rationale: 'Hydration is critical with IV acyclovir to prevent crystalluria and nephrotoxicity. Encourage oral fluids (if able) and maintain IV hydration. Monitor BUN/creatinine.',
        },
      ],
      r: [
        {
          stem: 'Acyclovir is used to treat:',
          options: [
            'Bacterial meningitis',
            'Herpes simplex virus (HSV) and varicella-zoster virus (VZV)',
            'Influenza A and B',
            'HIV/AIDS',
          ],
          correct: 1,
          rationale: 'Acyclovir targets HSV (cold sores, genital herpes) and VZV (chickenpox, shingles). It does NOT work against influenza (that\'s oseltamivir) or HIV (that\'s HAART).',
        },
        {
          stem: 'Acyclovir does NOT:',
          options: [
            'Reduce the severity of outbreaks',
            'Decrease viral shedding',
            'Cure herpes infections permanently',
            'Speed healing of lesions',
          ],
          correct: 2,
          rationale: 'Acyclovir manages but does NOT cure herpes. The virus establishes latency in nerve ganglia and persists for life. Acyclovir helps with everything else — reducing severity, decreasing shedding, and speeding healing.',
        },
      ],
    },
  },

  'HIV / HAART': {
    details: [
      'HAART = Highly Active Antiretroviral Therapy — uses 3+ drugs from 2+ classes',
      'Adherence must be 95%+ — missing doses leads to drug resistance',
      'AZT (Zidovudine) — NRTI used in pregnancy to prevent vertical transmission',
      'Efavirenz — NNRTI, take at bedtime (vivid dreams, CNS effects), teratogenic',
      'Enfuvirtide — fusion inhibitor, given SubQ (injection site reactions)',
      'Start PCP prophylaxis (TMP-SMX) when CD4 drops below 200',
      'Monitor: CD4 count and viral load to assess treatment effectiveness',
    ],
    questions: {
      g: [
        {
          stem: 'An HIV-positive pregnant patient asks which antiretroviral drug will protect her baby from getting HIV during delivery. The nurse should expect the provider to prescribe:',
          options: [
            'Efavirenz (NNRTI)',
            'Enfuvirtide (fusion inhibitor)',
            'Zidovudine/AZT (NRTI)',
            'Dolutegravir (integrase inhibitor)',
          ],
          correct: 2,
          rationale: 'AZT (zidovudine) is the standard NRTI used to prevent vertical (mother-to-child) HIV transmission during pregnancy and delivery. Efavirenz is CONTRAINDICATED in pregnancy (teratogenic — neural tube defects). This is a classic NCLEX question.',
        },
        {
          stem: 'A patient on HAART reports taking all but about 3-4 doses per month of their once-daily regimen. The nurse calculates adherence at approximately 87%. This is:',
          options: [
            'Acceptable — 85% adherence is sufficient for HAART',
            'Inadequate — HAART requires 95%+ adherence to prevent drug resistance',
            'Excellent — any adherence above 80% is considered good',
            'Not important — HAART works regardless of adherence',
          ],
          correct: 1,
          rationale: 'HAART requires 95%+ adherence — one of the strictest adherence requirements of any medication regimen. Below 95%, the virus can develop resistance, making the drugs useless. For a 30-day month with once-daily dosing, 95% = missing no more than 1-2 doses.',
        },
        {
          stem: 'A patient with HIV has a CD4 count of 185 cells/mm3. The nurse should anticipate an order for:',
          options: [
            'Oseltamivir prophylaxis',
            'TMP-SMX (Bactrim) prophylaxis for PCP',
            'Acyclovir prophylaxis',
            'Rifampin prophylaxis for TB',
          ],
          correct: 1,
          rationale: 'CD4 below 200 = start PCP (Pneumocystis pneumonia) prophylaxis with TMP-SMX. This is a critical threshold — PCP is a leading cause of death in untreated HIV/AIDS. The CD4 count tells you the immune system status.',
        },
      ],
      y: [
        {
          stem: 'Efavirenz (NNRTI) should be taken at what time of day?',
          options: [
            'With breakfast',
            'At lunchtime',
            'At bedtime',
            'Midafternoon',
          ],
          correct: 2,
          rationale: 'Bedtime administration minimizes CNS side effects (vivid dreams, dizziness, confusion). These effects are most prominent in the first few weeks and often improve over time.',
        },
        {
          stem: 'HAART therapy requires a minimum of how many drugs?',
          options: [
            '1 drug',
            '2 drugs from the same class',
            '3 or more drugs from at least 2 different classes',
            '5 drugs from 5 different classes',
          ],
          correct: 2,
          rationale: 'HAART uses 3+ drugs from 2+ different classes to attack HIV at multiple points in its lifecycle. Using fewer drugs or drugs from the same class leads to resistance. "Highly Active" = multiple drugs working together.',
        },
        {
          stem: 'Enfuvirtide is unique among HIV drugs because:',
          options: [
            'It\'s the only oral HIV medication',
            'It\'s given by subcutaneous injection (not oral)',
            'It cures HIV completely',
            'It has no side effects',
          ],
          correct: 1,
          rationale: 'Enfuvirtide is a fusion inhibitor given SubQ (subcutaneous injection). Most other HIV drugs are oral. Injection site reactions are the most common side effect. Patients need proper injection technique teaching.',
        },
      ],
      r: [
        {
          stem: 'HAART stands for:',
          options: [
            'Highly Active Antiviral Recovery Therapy',
            'Highly Active Antiretroviral Therapy',
            'HIV Accelerated Antiviral Response Treatment',
            'High-dose Antibiotic Replacement Therapy',
          ],
          correct: 1,
          rationale: 'Highly Active Antiretroviral Therapy — a combination of 3+ drugs from 2+ classes used to suppress HIV viral load to undetectable levels. HAART transformed HIV from a death sentence to a manageable chronic condition.',
        },
        {
          stem: 'AZT (Zidovudine) is primarily used in pregnancy to prevent:',
          options: [
            'Preterm labor',
            'Gestational diabetes',
            'Vertical (mother-to-child) HIV transmission',
            'Preeclampsia',
          ],
          correct: 2,
          rationale: 'AZT is the go-to NRTI for preventing vertical transmission of HIV during pregnancy and delivery. It significantly reduces the risk of the baby being born HIV-positive.',
        },
        {
          stem: 'PCP prophylaxis with TMP-SMX should be started when CD4 count drops below:',
          options: [
            '500 cells/mm3',
            '350 cells/mm3',
            '200 cells/mm3',
            '100 cells/mm3',
          ],
          correct: 2,
          rationale: 'CD4 below 200 = start PCP prophylaxis. This is a key threshold to memorize. Below 200, the immune system is severely compromised and opportunistic infections become likely.',
        },
      ],
    },
  },

  'Oseltamivir (Tamiflu)': {
    details: [
      'Antiviral for Influenza A and B',
      'MUST start within 48 hours of symptom onset — ineffective after that',
      'Reduces duration of illness by ~1-2 days',
      'Available as PO capsules or oral suspension',
      'Does NOT replace the flu vaccine — used for treatment, not prevention',
      'Common side effects: nausea, vomiting (take with food)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient presents to the clinic 3 days after flu symptoms started and requests Tamiflu. The nurse should:',
          options: [
            'Administer Tamiflu — it works at any point during the illness',
            'Explain that Tamiflu is most effective within 48 hours of symptom onset and discuss supportive care',
            'Give Tamiflu at double the dose to compensate for the late start',
            'Administer the flu vaccine instead',
          ],
          correct: 1,
          rationale: 'The 48-hour window is critical — oseltamivir is most effective when started within 48 hours of symptom onset. At 72 hours, the benefit is significantly reduced. Focus on supportive care (fluids, rest, fever management). The flu vaccine is prevention, not treatment.',
        },
      ],
      y: [
        {
          stem: 'Oseltamivir must be started within what timeframe of symptom onset?',
          options: [
            '12 hours',
            '24 hours',
            '48 hours',
            '72 hours',
          ],
          correct: 2,
          rationale: '48 hours is the magic number for Tamiflu. After 48 hours, the viral replication has progressed too far for the drug to significantly help. This is one of the most tested facts about oseltamivir.',
        },
      ],
      r: [
        {
          stem: 'Oseltamivir (Tamiflu) is used to treat:',
          options: [
            'Herpes simplex virus',
            'Influenza A and B',
            'HIV/AIDS',
            'Hepatitis C',
          ],
          correct: 1,
          rationale: 'Tamiflu treats influenza A and B. It\'s not effective against other viruses. HSV = acyclovir. HIV = HAART. Hepatitis C = direct-acting antivirals (DAAs).',
        },
      ],
    },
  },

  'Ganciclovir (Antiviral)': {
    details: [
      'Used for CMV (cytomegalovirus) — common in immunocompromised patients',
      'HANDLE LIKE CHEMOTHERAPY — teratogenic, mutagenic, carcinogenic',
      'Bone marrow suppression — monitor CBC (neutropenia, thrombocytopenia)',
      'Healthcare workers must wear gloves when handling',
      'Patients should use contraception during AND 90 days after treatment',
      'Nephrotoxicity — maintain hydration',
    ],
    questions: {
      g: [
        {
          stem: 'A nurse is preparing to administer IV ganciclovir. Which precaution is ESSENTIAL?',
          options: [
            'Wear sunscreen while handling the medication',
            'Wear gloves and handle the drug like a chemotherapy agent (teratogenic)',
            'Administer on an empty stomach for better absorption',
            'Give the medication through a peripheral IV only',
          ],
          correct: 1,
          rationale: 'Ganciclovir is teratogenic, mutagenic, and carcinogenic — handle it like chemo. Wear gloves, avoid skin contact, and follow hazardous drug handling protocols. This is a critical safety question that distinguishes ganciclovir from other antivirals.',
        },
      ],
      y: [
        {
          stem: 'A patient on ganciclovir has an ANC (absolute neutrophil count) of 400. The nurse should:',
          options: [
            'Continue the medication and monitor',
            'Hold ganciclovir and notify the provider — severe neutropenia',
            'Increase the dose to fight the infection faster',
            'Add an antibiotic to prevent secondary infections',
          ],
          correct: 1,
          rationale: 'ANC below 500 = severe neutropenia (normal 2,500-7,000). Ganciclovir causes bone marrow suppression. Hold the drug — continuing it at this ANC level is dangerous. The patient is at extreme risk for infection.',
        },
        {
          stem: 'Which lab should be monitored MOST frequently during ganciclovir therapy?',
          options: [
            'Blood glucose',
            'CBC (complete blood count)',
            'Thyroid function',
            'Lipid panel',
          ],
          correct: 1,
          rationale: 'CBC monitors for bone marrow suppression — the hallmark toxicity of ganciclovir. Watch for neutropenia (low WBC/neutrophils) and thrombocytopenia (low platelets). Check CBC at least twice weekly during induction therapy.',
        },
      ],
      r: [
        {
          stem: 'Ganciclovir is primarily used to treat:',
          options: [
            'Influenza',
            'Cytomegalovirus (CMV)',
            'Herpes simplex',
            'Hepatitis B',
          ],
          correct: 1,
          rationale: 'Ganciclovir targets CMV — a virus that causes serious infections in immunocompromised patients (transplant recipients, HIV/AIDS). Influenza = oseltamivir. HSV = acyclovir. Hepatitis B = tenofovir/entecavir.',
        },
        {
          stem: 'Ganciclovir must be handled like a chemotherapy agent because it is:',
          options: [
            'Very expensive',
            'Teratogenic, mutagenic, and carcinogenic',
            'Given only by IV push',
            'An extremely strong antibiotic',
          ],
          correct: 1,
          rationale: 'Ganciclovir can cause birth defects (teratogenic), genetic mutations (mutagenic), and cancer (carcinogenic). Both patients and healthcare workers need protection. Patients need contraception during and 90 days after therapy.',
        },
      ],
    },
  },

};
