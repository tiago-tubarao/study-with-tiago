// ══════════════════════════════════════════════
// NCLEX Questions — ANTIBIOTICS GROUP (8 drugs × 9 questions = 72 total)
// 3 difficulty levels: g=green(hardest), y=yellow(moderate), r=red(foundational)
// ══════════════════════════════════════════════

window.DRUG_DEEP_ANTIBIOTICS = {

  'Amoxicillin (Penicillin)': {
    details: [
      'Most prescribed antibiotic — broad-spectrum penicillin',
      'MOA: Inhibits cell wall synthesis (bactericidal)',
      'Cross-reactivity: ~1% with cephalosporins (low risk)',
      'Mono rash trap: If given to patient with mononucleosis, causes widespread maculopapular rash — NOT a true allergy',
      'Allergy assessment is CRITICAL — anaphylaxis risk with true PCN allergy',
      'Safe in pregnancy — Category B',
    ],
    questions: {
      g: [
        {
          stem: 'A patient prescribed amoxicillin develops a diffuse maculopapular rash on day 3. The patient also has a positive monospot test. The nurse should:',
          options: [
            'Stop the amoxicillin and document a penicillin allergy',
            'Administer epinephrine 0.3mg IM for anaphylaxis',
            'Recognize this as a mono-related rash, not a true allergy, and notify the provider',
            'Switch to azithromycin and add the allergy to the patient\'s chart',
          ],
          correct: 2,
          rationale: 'The trap: a rash during amoxicillin looks like an allergy, but with mononucleosis it\'s a predictable drug-disease interaction — NOT a true PCN allergy. Documenting it as an allergy would deny the patient penicillins for life. Option A is the most common mistake on exams.',
        },
        {
          stem: 'A patient with a documented penicillin anaphylaxis allergy has a severe gram-negative infection. The provider orders ceftriaxone. The nurse should:',
          options: [
            'Administer the ceftriaxone — cephalosporins are safe with PCN allergy',
            'Question the order due to cross-reactivity risk, but recognize that 3rd-gen cephalosporins have very low (~1%) cross-reactivity',
            'Refuse to give any beta-lactam antibiotic and request aztreonam instead',
            'Give a test dose of penicillin first to confirm the allergy',
          ],
          correct: 1,
          rationale: 'Cross-reactivity between PCN and 3rd/4th gen cephalosporins is very low (~1%), but with anaphylaxis history the nurse should still question it. The provider may proceed with monitoring, or switch to aztreonam (ZERO cross-reactivity). Option A is too casual for anaphylaxis history. Option C is overly cautious — aztreonam is an option but the nurse should discuss, not refuse.',
        },
        {
          stem: 'A patient with a PCN allergy (hives only, no anaphylaxis) needs prophylaxis before a dental procedure. Which drug is the safest alternative?',
          options: [
            'Cefazolin IV',
            'Azithromycin PO',
            'Vancomycin IV',
            'Metronidazole PO',
          ],
          correct: 1,
          rationale: 'For patients with mild PCN allergy (hives, not anaphylaxis), azithromycin is a standard alternative for dental prophylaxis. Cefazolin has some cross-reactivity risk. Vancomycin is overkill for prophylaxis. Metronidazole covers anaerobes but isn\'t first-line for dental prophylaxis.',
        },
      ],
      y: [
        {
          stem: 'Before administering amoxicillin, the nurse should FIRST:',
          options: [
            'Check the patient\'s renal function',
            'Assess for penicillin allergy history',
            'Obtain a culture and sensitivity',
            'Verify the patient has eaten recently',
          ],
          correct: 1,
          rationale: 'Allergy assessment is ALWAYS first before any antibiotic, especially penicillins — anaphylaxis can be fatal. C&S should be collected before starting antibiotics, but it\'s ordered by the provider, not the nurse\'s first action before giving the dose.',
        },
        {
          stem: 'A nurse is teaching about amoxicillin. Which patient statement requires further teaching?',
          options: [
            '"I should take the full course even if I feel better."',
            '"I can stop taking it once my symptoms go away."',
            '"I should report any rash or difficulty breathing."',
            '"I can take it with or without food."',
          ],
          correct: 1,
          rationale: 'Stopping antibiotics early promotes antibiotic resistance and incomplete treatment. Patients must complete the FULL course. This is a universal antibiotic teaching point — expect it on the exam.',
        },
        {
          stem: 'Which assessment finding in a patient receiving amoxicillin should the nurse report to the provider immediately?',
          options: [
            'Mild nausea after taking the medication',
            'Throat tightness and tongue swelling 10 minutes after the dose',
            'Loose stools on day 2 of therapy',
            'Metallic taste while taking the medication',
          ],
          correct: 1,
          rationale: 'Throat tightness + tongue swelling = early anaphylaxis. This is an emergency — stop the drug, call the provider, prepare epinephrine. Nausea and loose stools are common GI side effects. Metallic taste is associated with metronidazole, not amoxicillin.',
        },
      ],
      r: [
        {
          stem: 'Penicillins kill bacteria by:',
          options: [
            'Inhibiting protein synthesis at the 30S ribosome',
            'Inhibiting cell wall synthesis',
            'Inhibiting folic acid synthesis',
            'Disrupting the cell membrane',
          ],
          correct: 1,
          rationale: 'All beta-lactams (penicillins, cephalosporins, carbapenems) work by inhibiting cell wall synthesis. This is bactericidal — the bacteria can\'t maintain their wall and die. 30S ribosome = aminoglycosides/tetracyclines. Folic acid = sulfonamides. Cell membrane = amphotericin B.',
        },
        {
          stem: 'Amoxicillin belongs to which antibiotic class?',
          options: [
            'Macrolides',
            'Fluoroquinolones',
            'Penicillins (beta-lactams)',
            'Aminoglycosides',
          ],
          correct: 2,
          rationale: 'Amoxicillin is a penicillin — part of the beta-lactam family. Beta-lactams include penicillins, cephalosporins, carbapenems, and aztreonam. They all share the beta-lactam ring structure.',
        },
        {
          stem: 'A patient asks if amoxicillin is safe during pregnancy. The nurse\'s best response is:',
          options: [
            '"No, all antibiotics are contraindicated in pregnancy."',
            '"Yes, penicillins are generally considered safe in pregnancy."',
            '"Only if you\'re in the third trimester."',
            '"You should avoid all medications during pregnancy."',
          ],
          correct: 1,
          rationale: 'Penicillins (including amoxicillin) are Category B — generally considered safe in pregnancy. Contrast with tetracyclines (contraindicated — tooth/bone damage), fluoroquinolones (contraindicated — cartilage damage), and sulfonamides (avoid in 3rd trimester — kernicterus risk).',
        },
      ],
    },
  },

  'Vancomycin': {
    details: [
      'Drug of choice for MRSA infections',
      'IV administration — infuse over at least 60 minutes (1g/hr rule)',
      'Red Man Syndrome: flushing, rash on face/neck/torso from too-rapid infusion — NOT an allergy',
      'Treatment for Red Man Syndrome: SLOW the infusion rate (do NOT stop it)',
      'Monitor trough levels: 10-20 mcg/mL (draw 30 min before next dose)',
      'Nephrotoxicity and ototoxicity are major adverse effects',
    ],
    questions: {
      g: [
        {
          stem: 'During a vancomycin infusion, the patient develops flushing and a red rash on the face and neck. The nurse should FIRST:',
          options: [
            'Stop the infusion and administer epinephrine',
            'Slow the infusion rate and monitor the patient',
            'Document an allergy to vancomycin in the medical record',
            'Administer diphenhydramine and discontinue the drug permanently',
          ],
          correct: 1,
          rationale: 'This is Red Man Syndrome — a histamine-mediated reaction from too-rapid infusion. It is NOT an allergy. The treatment is to SLOW the rate, not stop it. The deadly trap: Option A treats this like anaphylaxis, which it isn\'t. Option C would falsely label the patient allergic and deny them a critical MRSA drug.',
        },
        {
          stem: 'A nurse draws a vancomycin trough level and the result is 25 mcg/mL. The next dose is due in 30 minutes. The nurse should:',
          options: [
            'Administer the dose on time — the level is therapeutic',
            'Hold the dose and notify the provider — the level is supratherapeutic',
            'Give half the dose and recheck in 4 hours',
            'Administer the dose and request a peak level after',
          ],
          correct: 1,
          rationale: 'Therapeutic trough is 10-20 mcg/mL. A trough of 25 is TOO HIGH — supratherapeutic. Giving more vancomycin risks nephrotoxicity and ototoxicity. Hold the dose and notify the provider for dose adjustment. The trap: Option A — students who don\'t know the range will just give it.',
        },
        {
          stem: 'A patient on vancomycin reports new onset tinnitus (ringing in the ears). The nurse\'s priority action is:',
          options: [
            'Document and continue — tinnitus is a common side effect that resolves',
            'Hold the next dose and notify the provider immediately',
            'Administer acetaminophen for the discomfort',
            'Reassure the patient that this is temporary',
          ],
          correct: 1,
          rationale: 'Tinnitus = early sign of ototoxicity. Vancomycin-induced ototoxicity can become IRREVERSIBLE if the drug isn\'t stopped. This is not "just a side effect" — it\'s a warning sign that requires immediate intervention. Hold the dose and notify.',
        },
      ],
      y: [
        {
          stem: 'When should a vancomycin trough level be drawn?',
          options: [
            '30 minutes after the infusion ends',
            '1 hour before the next scheduled dose',
            '30 minutes before the next scheduled dose',
            'At the midpoint between two doses',
          ],
          correct: 2,
          rationale: 'Trough levels are drawn 30 minutes BEFORE the next dose — this captures the lowest drug level. Peaks are drawn 30-60 min after infusion ends. Drawing at the wrong time gives inaccurate results.',
        },
        {
          stem: 'The therapeutic trough range for vancomycin is:',
          options: [
            '5-10 mcg/mL',
            '10-20 mcg/mL',
            '20-30 mcg/mL',
            '30-40 mcg/mL',
          ],
          correct: 1,
          rationale: '10-20 mcg/mL is the standard therapeutic trough range. Below 10 = subtherapeutic (won\'t work). Above 20 = increased risk of nephrotoxicity and ototoxicity.',
        },
        {
          stem: 'A patient on vancomycin has a BUN of 35 and creatinine of 2.1. The nurse should:',
          options: [
            'Continue the vancomycin — these labs are normal',
            'Notify the provider — elevated BUN/creatinine may indicate nephrotoxicity',
            'Increase IV fluids and continue the vancomycin',
            'Switch to an oral formulation of vancomycin',
          ],
          correct: 1,
          rationale: 'Elevated BUN (normal 10-20) and creatinine (normal 0.7-1.3) suggest kidney impairment — a known vancomycin adverse effect. Notify the provider for possible dose adjustment or drug change. Monitor renal function throughout vancomycin therapy.',
        },
      ],
      r: [
        {
          stem: 'Vancomycin is the drug of choice for:',
          options: [
            'E. coli UTI',
            'MRSA infections',
            'Tuberculosis',
            'Viral pneumonia',
          ],
          correct: 1,
          rationale: 'Vancomycin is the go-to drug for MRSA (Methicillin-Resistant Staph Aureus). It works on gram-positive organisms, especially resistant strains. E. coli = gram-negative (different drugs). TB = RIPE regimen. Viral = antivirals, not antibiotics.',
        },
        {
          stem: 'Red Man Syndrome from vancomycin is caused by:',
          options: [
            'A true allergic reaction (IgE-mediated)',
            'Too-rapid infusion causing histamine release',
            'Drug interaction with another medication',
            'An overdose of vancomycin',
          ],
          correct: 1,
          rationale: 'Red Man Syndrome is NOT an allergy — it\'s a direct histamine release from rapid infusion. The fix is to SLOW the rate. This is one of the most tested concepts in pharm — know the difference between Red Man Syndrome and true anaphylaxis.',
        },
        {
          stem: 'Vancomycin should be infused over at least:',
          options: [
            '15 minutes',
            '30 minutes',
            '60 minutes',
            '4 hours',
          ],
          correct: 2,
          rationale: 'Vancomycin should infuse over at least 60 minutes (the "1 gram per hour" rule). Faster infusion = Red Man Syndrome. Some sources say even slower for larger doses.',
        },
      ],
    },
  },

  'Gentamicin (Aminoglycoside)': {
    details: [
      'MOA: Inhibits protein synthesis at 30S ribosome (bactericidal)',
      'AT 30 mnemonic: Aminoglycosides and Tetracyclines target 30S',
      'Nephrotoxicity: REVERSIBLE — monitor BUN/creatinine',
      'Ototoxicity: IRREVERSIBLE — monitor for tinnitus, hearing loss, vertigo',
      'Monitor peak (5-10) and trough (less than 2) levels',
      'Contraindicated in myasthenia gravis (increases neuromuscular blockade)',
      'Pregnancy risk — ototoxicity to fetus',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on gentamicin reports dizziness and difficulty hearing. The serum creatinine is 1.0 mg/dL. The nurse is MOST concerned about:',
          options: [
            'Nephrotoxicity — the creatinine needs to be rechecked',
            'Ototoxicity — this may be irreversible, hold the drug and notify the provider',
            'A common side effect that will resolve after the course is complete',
            'Drug interaction with another medication causing these symptoms',
          ],
          correct: 1,
          rationale: 'The trap: creatinine is normal, so students might dismiss it. But dizziness + hearing loss = ototoxicity, which is IRREVERSIBLE. The creatinine being normal means kidneys are fine — the ears are the problem. This is the #1 aminoglycoside exam question: nephrotoxicity is reversible, ototoxicity is NOT.',
        },
        {
          stem: 'A patient with myasthenia gravis is prescribed gentamicin for a wound infection. The nurse should:',
          options: [
            'Administer the gentamicin as ordered — wound infections are serious',
            'Question the order — aminoglycosides are contraindicated in myasthenia gravis',
            'Give the gentamicin with pyridostigmine to prevent complications',
            'Request a lower dose of gentamicin for this patient',
          ],
          correct: 1,
          rationale: 'Aminoglycosides potentiate neuromuscular blockade — in myasthenia gravis (already weakened NMJ), this can cause respiratory failure. This is an absolute contraindication. The nurse should question the order and suggest an alternative antibiotic.',
        },
        {
          stem: 'A nurse is comparing two patients on gentamicin. Patient A has elevated BUN/creatinine. Patient B has tinnitus and vertigo. Which patient has the more concerning finding?',
          options: [
            'Patient A — nephrotoxicity is the more dangerous adverse effect',
            'Patient B — ototoxicity is irreversible, while nephrotoxicity is reversible',
            'Both are equally concerning and require the same intervention',
            'Neither is concerning — these are expected side effects',
          ],
          correct: 1,
          rationale: 'Both are serious, but ototoxicity (Patient B) is IRREVERSIBLE. Nephrotoxicity (Patient A) is typically reversible if caught early and the drug is stopped. This distinction is a high-yield aminoglycoside safety point.',
        },
      ],
      y: [
        {
          stem: 'Which lab values should the nurse monitor for a patient receiving gentamicin? (Select the most important)',
          options: [
            'CBC and platelets',
            'BUN and creatinine',
            'Liver enzymes (AST/ALT)',
            'Blood glucose levels',
          ],
          correct: 1,
          rationale: 'BUN and creatinine monitor for nephrotoxicity — the most important labs for aminoglycosides. Also monitor drug levels (peak and trough) and assess hearing/balance regularly.',
        },
        {
          stem: 'Aminoglycosides target which ribosomal subunit?',
          options: [
            '50S subunit',
            '30S subunit',
            'Both 30S and 50S',
            'They don\'t target ribosomes',
          ],
          correct: 1,
          rationale: 'Remember: "AT 30" — Aminoglycosides and Tetracyclines target the 30S ribosomal subunit. "MAC-C-L at 50" — Macrolides, Aminoglycosides (50S too for some), Chloramphenicol, Clindamycin, Linezolid target 50S.',
        },
        {
          stem: 'A patient on gentamicin has a trough level of 3.5 mcg/mL. The nurse should:',
          options: [
            'Give the next dose — this is within normal range',
            'Hold the dose — the trough is elevated, increasing toxicity risk',
            'Double the next dose to achieve higher peak levels',
            'Draw a peak level to compare',
          ],
          correct: 1,
          rationale: 'Normal trough for gentamicin is less than 2 mcg/mL. A trough of 3.5 means the drug isn\'t being cleared fast enough — increased toxicity risk. Hold and notify the provider.',
        },
      ],
      r: [
        {
          stem: 'The two major toxicities of aminoglycosides are:',
          options: [
            'Hepatotoxicity and cardiotoxicity',
            'Nephrotoxicity and ototoxicity',
            'Neurotoxicity and hepatotoxicity',
            'Pulmonary toxicity and nephrotoxicity',
          ],
          correct: 1,
          rationale: 'Nephro (kidney) and oto (ear) toxicity are the hallmarks of aminoglycosides. Remember: aminoglycosides are "hard on the kidneys and ears." Nephrotoxicity is reversible, ototoxicity is IRREVERSIBLE.',
        },
        {
          stem: 'Which aminoglycoside adverse effect is irreversible?',
          options: [
            'Nephrotoxicity',
            'Ototoxicity',
            'GI upset',
            'Rash',
          ],
          correct: 1,
          rationale: 'Ototoxicity (hearing loss, tinnitus, vertigo) is IRREVERSIBLE. Nephrotoxicity is typically reversible if the drug is stopped. This distinction is one of the most commonly tested aminoglycoside facts.',
        },
        {
          stem: 'A patient on gentamicin is also pregnant. The nurse is concerned because aminoglycosides can cause:',
          options: [
            'Neural tube defects in the fetus',
            'Ototoxicity in the fetus',
            'Hyperglycemia in the mother',
            'No specific pregnancy concerns exist',
          ],
          correct: 1,
          rationale: 'Aminoglycosides cross the placenta and can cause ototoxicity (hearing damage) in the fetus. Gentamicin is listed as a pregnancy-risk antimicrobial on the blueprint.',
        },
      ],
    },
  },

  'Doxycycline (Tetracycline)': {
    details: [
      'MOA: Inhibits protein synthesis at 30S ribosome (bacteriostatic)',
      'PCD mnemonic: Pregnancy (contraindicated), Children under 8 (tooth discoloration), Dairy chelation (avoid calcium/antacids)',
      'Photosensitivity — avoid sun exposure, wear sunscreen',
      'Take with full glass of water, sit upright for 30 min (esophageal irritation risk)',
      'Do NOT take with dairy, antacids, or iron — chelation reduces absorption',
      'Pregnancy Category D — causes permanent tooth staining and bone growth issues in fetus',
    ],
    questions: {
      g: [
        {
          stem: 'A 6-year-old child with a tick-borne illness requires antibiotic therapy. The provider orders doxycycline. The nurse should:',
          options: [
            'Refuse to give the medication — tetracyclines are contraindicated in children under 8',
            'Recognize that doxycycline is the exception for life-threatening tick-borne illness in young children and administer as ordered',
            'Request an alternative antibiotic like amoxicillin',
            'Give the doxycycline but at a reduced pediatric dose',
          ],
          correct: 1,
          rationale: 'The trap: while tetracyclines are generally avoided in children under 8 (tooth discoloration), the CDC recommends doxycycline for Rocky Mountain Spotted Fever regardless of age because the disease is life-threatening and doxycycline is the only effective treatment. Short courses have minimal tooth staining risk. This is an advanced application question.',
        },
        {
          stem: 'A patient on doxycycline takes their morning dose with a glass of milk and a calcium supplement, then lies back down in bed. How many errors occurred?',
          options: [
            'One — taking it with milk',
            'Two — milk and lying down',
            'Three — milk, calcium supplement, and lying down',
            'None — this is appropriate administration',
          ],
          correct: 2,
          rationale: 'THREE errors: (1) Milk contains calcium = chelation, reduced absorption. (2) Calcium supplement = same chelation problem. (3) Lying down after taking doxycycline = esophageal irritation/ulceration risk. Patient should take with WATER only, avoid dairy/antacids/iron, and sit upright for 30 minutes.',
        },
        {
          stem: 'A pregnant patient at 20 weeks gestation has chlamydia. The provider considers doxycycline. The nurse should:',
          options: [
            'Administer as ordered — the benefit outweighs the risk',
            'Question the order — tetracyclines are contraindicated in pregnancy (Category D)',
            'Give the doxycycline but only for 3 days instead of 7',
            'Suggest doxycycline but add a calcium supplement to protect the fetus',
          ],
          correct: 1,
          rationale: 'Tetracyclines are Category D in pregnancy — they cause permanent tooth discoloration and inhibit bone growth in the fetus. For chlamydia in pregnancy, azithromycin is the alternative. Option D makes no sense — calcium would chelate the drug AND wouldn\'t protect the fetus.',
        },
      ],
      y: [
        {
          stem: 'What does the "D" in the PCD mnemonic for doxycycline stand for?',
          options: [
            'Diarrhea risk',
            'Dairy chelation — avoid calcium, antacids, and iron',
            'Dose adjustment needed for renal impairment',
            'Double the dose on day one',
          ],
          correct: 1,
          rationale: 'PCD = Pregnancy (contraindicated), Children under 8 (tooth staining), Dairy chelation (calcium, antacids, iron reduce absorption). Dairy and minerals bind to tetracyclines and make them useless.',
        },
        {
          stem: 'A patient on doxycycline develops a severe sunburn after 15 minutes of outdoor exposure. This is most likely due to:',
          options: [
            'An allergic reaction to doxycycline',
            'Photosensitivity — a known side effect of tetracyclines',
            'A drug interaction with sunscreen',
            'Unrelated to the medication',
          ],
          correct: 1,
          rationale: 'Tetracyclines cause photosensitivity — the skin burns much more easily with sun exposure. Patients should avoid prolonged sun, wear protective clothing, and use high-SPF sunscreen.',
        },
        {
          stem: 'Which instruction is most important for a patient taking doxycycline?',
          options: [
            '"Take it with a full glass of milk to prevent stomach upset."',
            '"Take it with a full glass of water and remain upright for 30 minutes."',
            '"Take it with food to improve absorption."',
            '"Take it at bedtime for best absorption."',
          ],
          correct: 1,
          rationale: 'Water (not milk — chelation!), and stay upright for 30 min to prevent esophageal irritation/ulceration. Taking it at bedtime and lying down is dangerous. Milk would reduce absorption.',
        },
      ],
      r: [
        {
          stem: 'Tetracyclines are contraindicated in children under age:',
          options: [
            '2',
            '5',
            '8',
            '12',
          ],
          correct: 2,
          rationale: 'Under age 8 — tetracyclines cause permanent tooth discoloration (yellow-gray-brown staining) and can affect bone growth in developing children.',
        },
        {
          stem: 'Which substance should a patient on doxycycline AVOID taking at the same time?',
          options: [
            'Vitamin C',
            'Dairy products',
            'Acetaminophen',
            'Cranberry juice',
          ],
          correct: 1,
          rationale: 'Dairy products contain calcium, which chelates (binds to) tetracyclines and prevents absorption. Also avoid antacids, iron supplements, and calcium supplements within 2 hours of the dose.',
        },
        {
          stem: 'Doxycycline is classified as what type of antibiotic?',
          options: [
            'Penicillin',
            'Aminoglycoside',
            'Tetracycline',
            'Macrolide',
          ],
          correct: 2,
          rationale: 'Doxycycline is a tetracycline antibiotic. Tetracyclines work by inhibiting protein synthesis at the 30S ribosome. They are bacteriostatic (stop bacteria from growing, don\'t kill them directly).',
        },
      ],
    },
  },

  'Aztreonam': {
    details: [
      'Monobactam — beta-lactam with ZERO cross-reactivity with penicillins',
      'The go-to drug for gram-negative infections in patients with severe PCN allergy',
      'Only covers gram-negative organisms (no gram-positive coverage)',
      'Safe in PCN anaphylaxis — this is the key exam fact',
      'Part of the beta-lactam family but structurally different enough to avoid cross-reactivity',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with a documented anaphylactic reaction to penicillin needs treatment for a severe gram-negative infection. Which antibiotic has ZERO cross-reactivity with penicillin?',
          options: [
            'Ceftriaxone (3rd-gen cephalosporin)',
            'Imipenem (carbapenem)',
            'Aztreonam (monobactam)',
            'Amoxicillin-clavulanate',
          ],
          correct: 2,
          rationale: 'Aztreonam is the ONLY beta-lactam with ZERO cross-reactivity with penicillin. It\'s safe even with anaphylaxis history. Cephalosporins have ~1% cross-reactivity. Carbapenems have some cross-reactivity. Amoxicillin-clavulanate IS a penicillin — never give to PCN-allergic patients.',
        },
      ],
      y: [
        {
          stem: 'Aztreonam is effective against which type of bacteria?',
          options: [
            'Gram-positive only',
            'Gram-negative only',
            'Both gram-positive and gram-negative',
            'Anaerobes only',
          ],
          correct: 1,
          rationale: 'Aztreonam only covers gram-negative organisms. It has no gram-positive or anaerobic activity. This limits its use but makes it valuable for specific gram-negative infections in PCN-allergic patients.',
        },
        {
          stem: 'Which statement about aztreonam is correct?',
          options: [
            'It has high cross-reactivity with penicillin',
            'It is a monobactam with zero cross-reactivity with penicillin',
            'It is a cephalosporin alternative',
            'It covers gram-positive MRSA infections',
          ],
          correct: 1,
          rationale: 'Aztreonam is a monobactam — structurally different from other beta-lactams despite being in the same family. Zero cross-reactivity with penicillin is its most important clinical feature.',
        },
      ],
      r: [
        {
          stem: 'A patient with a severe penicillin allergy needs a beta-lactam antibiotic. The safest choice is:',
          options: [
            'Cefazolin',
            'Ampicillin',
            'Aztreonam',
            'Piperacillin',
          ],
          correct: 2,
          rationale: 'Aztreonam has ZERO cross-reactivity with penicillin — it\'s the only safe beta-lactam for severe PCN allergy. Ampicillin and piperacillin ARE penicillins. Cefazolin (1st-gen cephalosporin) has higher cross-reactivity than 3rd-gen cephalosporins.',
        },
      ],
    },
  },

  'TMP-SMX (Bactrim)': {
    details: [
      'Combination: trimethoprim + sulfamethoxazole',
      'MOA: Inhibits folic acid synthesis (bacteriostatic)',
      'Used for: UTI, PCP prophylaxis (HIV patients with CD4 below 200), MRSA skin infections',
      'Stevens-Johnson Syndrome (SJS) — life-threatening skin reaction, STOP immediately',
      'Crystalluria — force fluids, maintain hydration',
      'Contraindicated in 3rd trimester pregnancy (kernicterus risk)',
      'Sulfonamide allergy — cross-check with sulfa drug allergies',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on TMP-SMX develops a spreading rash with blistering, mucosal involvement, and fever on day 5 of therapy. The nurse should FIRST:',
          options: [
            'Apply topical corticosteroid cream to the affected areas',
            'Discontinue the medication immediately — this suggests Stevens-Johnson Syndrome',
            'Administer diphenhydramine and continue the medication',
            'Obtain a wound culture from the blistered areas',
          ],
          correct: 1,
          rationale: 'Spreading blistering rash + mucosal involvement + fever = Stevens-Johnson Syndrome (SJS), a life-threatening reaction. STOP the drug immediately. SJS can progress to TEN (toxic epidermal necrolysis) and is fatal if not caught early. This is NOT a simple rash — topical cream won\'t help.',
        },
        {
          stem: 'A patient with HIV has a CD4 count of 180. The provider starts TMP-SMX prophylaxis. The patient asks why. The nurse\'s best response is:',
          options: [
            '"Your CD4 is low, so you need antibiotics to prevent bacterial pneumonia."',
            '"When CD4 drops below 200, you\'re at high risk for PCP (Pneumocystis pneumonia), and TMP-SMX prevents it."',
            '"This antibiotic will help boost your immune system."',
            '"TMP-SMX treats your HIV infection directly."',
          ],
          correct: 1,
          rationale: 'CD4 below 200 = start PCP prophylaxis with TMP-SMX. PCP (Pneumocystis jirovecii pneumonia) is an opportunistic infection that occurs when the immune system is severely compromised. TMP-SMX does NOT treat HIV or boost immunity — it prevents a specific opportunistic infection.',
        },
        {
          stem: 'A pregnant patient at 36 weeks gestation is prescribed TMP-SMX for a UTI. The nurse should:',
          options: [
            'Administer as ordered — UTIs must be treated during pregnancy',
            'Question the order — sulfonamides are contraindicated in the 3rd trimester due to kernicterus risk',
            'Give the TMP-SMX but at a lower dose',
            'Substitute with doxycycline instead',
          ],
          correct: 1,
          rationale: 'Sulfonamides in the 3rd trimester can cause kernicterus (bilirubin encephalopathy) in the newborn by displacing bilirubin from albumin. Use nitrofurantoin or cephalexin instead. Option D is wrong — doxycycline is also contraindicated in pregnancy (tooth/bone damage).',
        },
      ],
      y: [
        {
          stem: 'Which side effect of TMP-SMX requires the nurse to encourage increased fluid intake?',
          options: [
            'Nausea',
            'Crystalluria',
            'Headache',
            'Photosensitivity',
          ],
          correct: 1,
          rationale: 'Crystalluria (crystals forming in urine) is a known risk with sulfonamides. Force fluids to at least 1.5L/day to flush the kidneys and prevent crystal formation. Adequate hydration is essential.',
        },
        {
          stem: 'TMP-SMX works by inhibiting:',
          options: [
            'Cell wall synthesis',
            'Protein synthesis at the ribosome',
            'Folic acid synthesis',
            'DNA gyrase',
          ],
          correct: 2,
          rationale: 'TMP-SMX inhibits folic acid (folate) synthesis — bacteria need to make their own folic acid, and both drugs block different steps in that pathway. This is why it\'s a bacteriostatic antibiotic.',
        },
        {
          stem: 'A patient with a documented sulfa allergy is prescribed TMP-SMX. The nurse should:',
          options: [
            'Administer as ordered — TMP-SMX is not a sulfa drug',
            'Question the order — TMP-SMX contains sulfamethoxazole (a sulfonamide)',
            'Give a test dose first',
            'Premedicate with diphenhydramine before administration',
          ],
          correct: 1,
          rationale: 'TMP-SMX contains sulfamethoxazole — a SULFONAMIDE. Patients with sulfa allergy should NOT receive it. The "SMX" in TMP-SMX = sulfamethoxazole. Always cross-check sulfa allergies.',
        },
      ],
      r: [
        {
          stem: 'TMP-SMX (Bactrim) is commonly used for:',
          options: [
            'MRSA pneumonia',
            'Urinary tract infections',
            'Tuberculosis',
            'Fungal infections',
          ],
          correct: 1,
          rationale: 'TMP-SMX is a first-line drug for uncomplicated UTIs. It\'s also used for PCP prophylaxis (HIV), MRSA skin infections, and some respiratory infections. Not used for TB (RIPE regimen) or fungal infections.',
        },
        {
          stem: 'The most serious skin reaction associated with TMP-SMX is:',
          options: [
            'Urticaria (hives)',
            'Contact dermatitis',
            'Stevens-Johnson Syndrome (SJS)',
            'Acne',
          ],
          correct: 2,
          rationale: 'SJS is a life-threatening skin reaction with blistering, mucosal involvement, and skin detachment. It requires immediate drug discontinuation and often ICU-level care. Sulfonamides are one of the most common drug causes of SJS.',
        },
        {
          stem: 'Sulfonamides should be avoided in the third trimester of pregnancy because of the risk of:',
          options: [
            'Neural tube defects',
            'Kernicterus in the newborn',
            'Preterm labor',
            'Gestational diabetes',
          ],
          correct: 1,
          rationale: 'Sulfonamides displace bilirubin from albumin in the fetus/newborn, causing kernicterus (bilirubin deposits in the brain). This is why they\'re contraindicated in the 3rd trimester.',
        },
      ],
    },
  },

  'Fluoroquinolones (Ciprofloxacin)': {
    details: [
      'MOA: Inhibits DNA gyrase (bactericidal)',
      'FOUR Black Box Warnings: tendon rupture, peripheral neuropathy, CNS effects, myasthenia gravis exacerbation',
      'Tendon rupture risk — especially Achilles tendon, increased with steroids and age over 60',
      'Stop immediately if patient reports tendon pain',
      'Avoid in children (cartilage damage in growing joints)',
      'Contraindicated in myasthenia gravis — can cause fatal respiratory failure',
    ],
    questions: {
      g: [
        {
          stem: 'A 68-year-old patient on ciprofloxacin and prednisone reports sudden pain in the back of the ankle while walking. The nurse should FIRST:',
          options: [
            'Apply ice and elevate the foot',
            'Stop the ciprofloxacin immediately and notify the provider — tendon rupture risk',
            'Encourage the patient to rest and take acetaminophen',
            'Continue the antibiotic and schedule an X-ray for tomorrow',
          ],
          correct: 1,
          rationale: 'Age over 60 + concurrent steroids + fluoroquinolone + sudden Achilles area pain = HIGH risk for tendon rupture (BBW #1). Stop the drug immediately. Don\'t wait for imaging — the risk of complete rupture increases if the drug is continued. This is a classic NCLEX scenario.',
        },
        {
          stem: 'A patient with myasthenia gravis is prescribed levofloxacin for pneumonia. The nurse should:',
          options: [
            'Administer as ordered with careful monitoring',
            'Question the order — fluoroquinolones are contraindicated in myasthenia gravis (BBW)',
            'Give the levofloxacin but hold the patient\'s pyridostigmine',
            'Administer at a reduced dose',
          ],
          correct: 1,
          rationale: 'Fluoroquinolones can worsen neuromuscular weakness and are CONTRAINDICATED in myasthenia gravis — this is Black Box Warning #4. Can cause fatal respiratory failure. Request an alternative antibiotic.',
        },
        {
          stem: 'How many Black Box Warnings do fluoroquinolones carry?',
          options: [
            '1 — tendon rupture',
            '2 — tendon rupture and neuropathy',
            '3 — tendon rupture, neuropathy, and CNS effects',
            '4 — tendon rupture, peripheral neuropathy, CNS effects, and myasthenia gravis exacerbation',
          ],
          correct: 3,
          rationale: 'Fluoroquinolones have FOUR BBWs — the most of almost any antibiotic class. Know all four: (1) Tendon rupture, (2) Peripheral neuropathy, (3) CNS effects (seizures, confusion), (4) Myasthenia gravis exacerbation. This is a high-yield fluoroquinolone safety point.',
        },
      ],
      y: [
        {
          stem: 'Which patient is at HIGHEST risk for fluoroquinolone-related tendon rupture?',
          options: [
            'A 25-year-old athlete',
            'A 70-year-old patient on chronic prednisone',
            'A 40-year-old with diabetes',
            'A 30-year-old pregnant woman',
          ],
          correct: 1,
          rationale: 'Risk factors for tendon rupture: age over 60, concurrent corticosteroid use, kidney/heart/lung transplant recipients. A 70-year-old on prednisone hits two major risk factors.',
        },
        {
          stem: 'Fluoroquinolones work by inhibiting:',
          options: [
            'Cell wall synthesis',
            'Protein synthesis at 30S ribosome',
            'DNA gyrase (DNA replication)',
            'Folic acid synthesis',
          ],
          correct: 2,
          rationale: 'Fluoroquinolones inhibit DNA gyrase (topoisomerase II), preventing DNA replication. This makes them bactericidal. Cell wall = beta-lactams. 30S ribosome = aminoglycosides/tetracyclines. Folic acid = sulfonamides.',
        },
        {
          stem: 'A patient on ciprofloxacin reports numbness and tingling in both feet. The nurse should:',
          options: [
            'Document and continue — this is a common side effect',
            'Notify the provider — this may indicate peripheral neuropathy (BBW)',
            'Check the patient\'s blood glucose',
            'Apply warm compresses to the feet',
          ],
          correct: 1,
          rationale: 'Numbness/tingling = peripheral neuropathy, one of the 4 BBWs. Can be irreversible if the drug is continued. Notify the provider immediately to consider stopping the fluoroquinolone.',
        },
      ],
      r: [
        {
          stem: 'Fluoroquinolones should be avoided in children because of the risk of:',
          options: [
            'Liver damage',
            'Cartilage damage in growing joints',
            'Tooth discoloration',
            'Kidney failure',
          ],
          correct: 1,
          rationale: 'Fluoroquinolones can damage cartilage in weight-bearing joints of growing children. Generally avoided in patients under 18. Tooth discoloration = tetracyclines (different drug class).',
        },
        {
          stem: 'A patient on ciprofloxacin should be taught to report which symptom immediately?',
          options: [
            'Mild headache',
            'Tendon pain or swelling',
            'Slight nausea',
            'Dry mouth',
          ],
          correct: 1,
          rationale: 'Tendon pain = early warning of possible tendon rupture (BBW). Patient should stop activity, stop the drug, and contact the provider immediately. Don\'t "walk it off."',
        },
        {
          stem: 'Which is a Black Box Warning for fluoroquinolones?',
          options: [
            'Red Man Syndrome',
            'Stevens-Johnson Syndrome',
            'Tendon rupture',
            'Ototoxicity',
          ],
          correct: 2,
          rationale: 'Tendon rupture is BBW #1. Red Man Syndrome = vancomycin. SJS = sulfonamides (not a BBW for FQs specifically). Ototoxicity = aminoglycosides.',
        },
      ],
    },
  },

  'Metronidazole (Flagyl)': {
    details: [
      'Drug of choice for C. difficile (C. diff) infections',
      'ABSOLUTE no alcohol during treatment AND for 48-72 hours AFTER last dose',
      'Disulfiram-like reaction with alcohol: severe nausea, vomiting, cramping, flushing',
      'This includes alcohol-containing mouthwash, cough syrup, and cooking extracts',
      'Also used for: H. pylori (part of triple therapy), anaerobic infections, trichomoniasis',
      'Metallic taste is a common side effect',
      'Dark/red-brown urine — expected, not harmful',
    ],
    questions: {
      g: [
        {
          stem: 'A patient finished metronidazole therapy yesterday (last dose 24 hours ago). The patient asks if they can have a glass of wine tonight. The nurse\'s best response is:',
          options: [
            '"Yes, since your last dose was 24 hours ago, you\'re fine."',
            '"No — you must wait at least 48-72 hours after your LAST dose before consuming any alcohol."',
            '"Yes, but limit yourself to one drink only."',
            '"No, you can never drink alcohol again after taking metronidazole."',
          ],
          correct: 1,
          rationale: 'The 48-72 hour window AFTER the last dose is the most commonly missed fact. The drug is still being metabolized — alcohol during this window causes the same disulfiram reaction. 24 hours is NOT enough. This is the exact scenario from the pinned comment on your video.',
        },
        {
          stem: 'A patient on metronidazole for C. diff is using an alcohol-based mouthwash twice daily. The nurse should:',
          options: [
            'Continue — the amount of alcohol in mouthwash is negligible',
            'Instruct the patient to switch to an alcohol-free mouthwash immediately',
            'Have the patient rinse with the mouthwash but not swallow',
            'Apply the mouthwash only once daily',
          ],
          correct: 1,
          rationale: 'Even alcohol-containing mouthwash can cause a disulfiram reaction with metronidazole. The alcohol absorbs through oral mucosa. Switch to alcohol-free mouthwash. Also check cough syrups, vanilla extract, and any other hidden alcohol sources.',
        },
        {
          stem: 'A patient on metronidazole reports dark red-brown urine AND a metallic taste. The nurse should:',
          options: [
            'Stop the medication — these are signs of toxicity',
            'Reassure the patient — both are expected side effects of metronidazole',
            'Send a urinalysis to rule out hematuria',
            'Reduce the dose and notify the provider',
          ],
          correct: 1,
          rationale: 'Both dark/red-brown urine AND metallic taste are EXPECTED side effects of metronidazole — not harmful. The trap: students see "dark urine" and think kidney problem. Metronidazole metabolites cause harmless color changes. Teach patients to expect both.',
        },
      ],
      y: [
        {
          stem: 'How long after the last dose of metronidazole must the patient avoid alcohol?',
          options: [
            '12 hours',
            '24 hours',
            '48-72 hours',
            '1 week',
          ],
          correct: 2,
          rationale: '48-72 hours after the LAST dose. This is longer than most students expect. The drug\'s metabolites are still active and will cause a disulfiram reaction with alcohol during this window.',
        },
        {
          stem: 'Metronidazole is the drug of choice for which infection?',
          options: [
            'MRSA',
            'Clostridioides difficile (C. diff)',
            'Tuberculosis',
            'Urinary tract infections',
          ],
          correct: 1,
          rationale: 'Metronidazole (or oral vancomycin) is first-line for C. diff. C. diff often occurs after broad-spectrum antibiotic use destroys normal gut flora, allowing C. diff overgrowth. Also used for H. pylori, anaerobic infections, and trichomoniasis.',
        },
        {
          stem: 'The reaction between metronidazole and alcohol is called a:',
          options: [
            'Serotonin syndrome',
            'Disulfiram-like reaction',
            'Red Man Syndrome',
            'Neuroleptic malignant syndrome',
          ],
          correct: 1,
          rationale: 'Disulfiram-like reaction — named after the drug disulfiram (Antabuse), which is given to alcoholics to make drinking unpleasant. Metronidazole causes the same severe nausea, vomiting, flushing, and cramping when combined with alcohol.',
        },
      ],
      r: [
        {
          stem: 'A patient on metronidazole should avoid:',
          options: [
            'Dairy products',
            'Alcohol in any form',
            'Sunlight exposure',
            'Grapefruit juice',
          ],
          correct: 1,
          rationale: 'Alcohol is absolutely contraindicated with metronidazole — causes disulfiram-like reaction. This includes beer, wine, liquor, alcohol-containing mouthwash, cough syrup, and cooking extracts. Dairy avoidance = tetracyclines. Sunlight = tetracyclines/fluoroquinolones.',
        },
        {
          stem: 'A common side effect of metronidazole is:',
          options: [
            'Tendon rupture',
            'Metallic taste',
            'Hearing loss',
            'Tooth discoloration',
          ],
          correct: 1,
          rationale: 'Metallic taste is one of the most common side effects of metronidazole. It\'s harmless but unpleasant. Dark red-brown urine is also expected.',
        },
        {
          stem: 'Metronidazole is classified as which type of antibiotic?',
          options: [
            'Beta-lactam',
            'Aminoglycoside',
            'Nitroimidazole (anti-anaerobic)',
            'Macrolide',
          ],
          correct: 2,
          rationale: 'Metronidazole is a nitroimidazole — effective against anaerobic bacteria and certain parasites. It\'s unique in its class and not related to beta-lactams, aminoglycosides, or macrolides.',
        },
      ],
    },
  },

  'Cephalosporins (Cefazolin/Ceftriaxone)': {
    details: [
      'Beta-lactam antibiotics — MOA: inhibit cell wall synthesis (bactericidal)',
      '4 generations: 1st (cefazolin) → 4th (cefepime)',
      'As generation increases: more gram-negative coverage, less gram-positive',
      '1st gen (cefazolin): surgical prophylaxis, gram-positive focus',
      '3rd gen (ceftriaxone): meningitis, gonorrhea, broad gram-negative coverage',
      'Cross-reactivity with penicillin: ~1% (low but not zero)',
      'Generally safe in mild PCN allergy (hives), use caution with anaphylaxis history',
    ],
    questions: {
      g: [
        {
          stem: 'A patient is scheduled for a knee replacement surgery. The provider orders cefazolin 2g IV as surgical prophylaxis. When should the nurse administer this?',
          options: [
            'At the time of the first incision',
            'Within 60 minutes before surgical incision',
            'After the surgery is complete',
            'The evening before surgery',
          ],
          correct: 1,
          rationale: 'Surgical prophylaxis antibiotics should be given within 60 minutes before incision to ensure peak drug levels during the procedure. Giving it too early, too late, or after surgery misses the protective window.',
        },
      ],
      y: [
        {
          stem: 'As cephalosporin generations increase (1st to 4th), what happens to gram-negative coverage?',
          options: [
            'It decreases',
            'It stays the same',
            'It increases',
            'It becomes gram-positive only',
          ],
          correct: 2,
          rationale: 'Higher generations = more gram-negative coverage, less gram-positive. 1st gen (cefazolin) is mostly gram-positive. 3rd gen (ceftriaxone) has strong gram-negative coverage. This is a classic exam comparison.',
        },
        {
          stem: 'Cefazolin (1st generation cephalosporin) is primarily used for:',
          options: [
            'Meningitis',
            'Surgical prophylaxis',
            'Tuberculosis',
            'HIV treatment',
          ],
          correct: 1,
          rationale: 'Cefazolin is the go-to drug for surgical prophylaxis. It provides good gram-positive coverage, which covers most surgical site infections (Staph/Strep). 3rd gen ceftriaxone is used for meningitis.',
        },
      ],
      r: [
        {
          stem: 'Cephalosporins belong to which antibiotic family?',
          options: [
            'Macrolides',
            'Beta-lactams',
            'Aminoglycosides',
            'Fluoroquinolones',
          ],
          correct: 1,
          rationale: 'Cephalosporins are beta-lactams — same family as penicillins, carbapenems, and aztreonam. They all work by inhibiting cell wall synthesis.',
        },
        {
          stem: 'The cross-reactivity rate between penicillins and cephalosporins is approximately:',
          options: [
            '50%',
            '25%',
            '10%',
            '1%',
          ],
          correct: 3,
          rationale: 'Cross-reactivity is approximately 1% — much lower than previously thought. This is why cephalosporins can often be used cautiously in patients with mild PCN allergy (hives). Anaphylaxis history requires more caution.',
        },
      ],
    },
  },

};
