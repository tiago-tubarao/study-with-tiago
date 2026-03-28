// ══════════════════════════════════════════════
// ADULT HEALTH — Hematology & Blood Disorders Questions
// Grouped by condition, 3 tiers: g=green(hardest), y=yellow(moderate), r=red(foundational)
// Source: nurs327_exam3_hematology_vA.js + nurs327_exam3_questions_vA.js
// ══════════════════════════════════════════════

window.DRUG_DEEP_AH_HEMATOLOGY = {

  'Sickle Cell Disease': {
    details: [
      'HbS polymerizes under low O2, dehydration, cold, infection, stress — causing RBCs to sickle',
      'Vaso-occlusive crisis is the MOST COMMON type — sickled cells block small vessels causing ischemic pain',
      'Acute chest syndrome is the #1 cause of death in adult sickle cell patients',
      'Cold is CONTRAINDICATED — causes vasoconstriction and worsens sickling. Use WARM compresses only',
      'Management: IV fluids (dilute blood), O2 (prevent further sickling), PCA opioids (pain is real and severe), incentive spirometry (prevent ACS)',
      'Hydroxyurea increases fetal hemoglobin (HbF) which does not sickle — reduces crisis frequency',
    ],
    questions: {
      g: [
        {
          stem: 'A nurse is planning care for a patient admitted in sickle cell vaso-occlusive crisis with severe bone pain and SpO2 of 91%. Which intervention is CONTRAINDICATED?',
          options: [
            'Aggressive IV fluid hydration with 0.9% normal saline',
            'Application of cold packs to the painful extremities',
            'Patient-controlled analgesia (PCA) with hydromorphone',
            'Incentive spirometry every 2 hours while awake',
          ],
          correct: 1,
          rationale: 'Cold application is CONTRAINDICATED in sickle cell crisis. Cold causes vasoconstriction, which worsens vaso-occlusion and increases sickling. WARM compresses may be used for comfort. IV fluids (dilute blood, prevent further sickling), PCA opioids (severe pain requires aggressive management), and incentive spirometry (prevents acute chest syndrome) are all essential interventions.',
        },
        {
          stem: 'A patient with sickle cell disease develops sudden severe chest pain, fever of 102.4°F, and SpO2 drops from 96% to 88% on room air. The chest X-ray shows a new pulmonary infiltrate. Which complication should the nurse suspect?',
          options: [
            'Vaso-occlusive crisis affecting the ribs',
            'Acute chest syndrome',
            'Splenic sequestration crisis',
            'Pulmonary embolism from DVT',
          ],
          correct: 1,
          rationale: 'Acute chest syndrome (ACS) is defined by a NEW pulmonary infiltrate on chest X-ray plus at least one of: chest pain, fever, or respiratory symptoms. ACS is the #1 cause of death in adult sickle cell patients. It can result from infection, fat embolism from bone marrow infarction, or direct sickling in pulmonary vessels. Treatment: exchange transfusion, antibiotics, O2, incentive spirometry. Rib pain alone without infiltrate would be vaso-occlusive; sequestration involves the spleen, not lungs.',
        },
      ],
      y: [
        {
          stem: 'A 22-year-old patient with sickle cell disease is admitted with severe bilateral leg and back pain rated 9/10, low-grade fever of 100.8°F, and reports the pain started after being outside in cold weather. SpO2 is 94% on room air. Which type of sickle cell crisis should the nurse suspect?',
          options: [
            'Aplastic crisis',
            'Vaso-occlusive (pain) crisis',
            'Sequestration crisis',
            'Hemolytic crisis',
          ],
          correct: 1,
          rationale: 'Vaso-occlusive crisis is the MOST COMMON type. Sickled RBCs block blood flow in small vessels, causing tissue ischemia and intense pain. Classic triggers: cold exposure, dehydration, infection, hypoxia, stress. Aplastic crisis is triggered by parvovirus B19 (severe anemia, low reticulocytes). Sequestration = blood pools in spleen (children). Hemolytic = worsening jaundice and dark urine.',
        },
        {
          stem: 'A patient with sickle cell disease asks the nurse what triggers a sickle cell crisis. Which response by the nurse is MOST accurate?',
          options: [
            '"Crises occur randomly and cannot be predicted or prevented."',
            '"Dehydration, cold exposure, infection, and high altitude can trigger sickling."',
            '"Only strenuous physical exercise triggers a crisis."',
            '"Crises are triggered by eating foods high in iron."',
          ],
          correct: 1,
          rationale: 'Sickle cell crises are triggered by conditions that reduce oxygen delivery or increase oxygen demand: dehydration (concentrates blood), cold (vasoconstriction), infection (increases metabolic demand), high altitude/hypoxia (low O2 saturation), and stress. Patient education about avoiding triggers is a key nursing intervention. Crises are NOT random — they are often preventable with proper self-management.',
        },
      ],
      r: [
        {
          stem: 'A nurse is caring for a patient with sickle cell disease. Which assessment finding requires IMMEDIATE intervention?',
          options: [
            'Pain rated 6/10 in the lower back',
            'Temperature of 99.8°F',
            'SpO2 of 86% on room air',
            'Dark-colored urine',
          ],
          correct: 2,
          rationale: 'SpO2 of 86% is critically low and requires immediate oxygen therapy. Hypoxia is both a trigger and consequence of sickling — low oxygen causes more cells to sickle, which further reduces oxygen delivery, creating a dangerous cycle. While pain, low-grade fever, and dark urine all need attention, maintaining oxygenation is the immediate life-saving priority.',
        },
      ],
    },
  },

  'Iron Deficiency Anemia': {
    details: [
      'Most common anemia worldwide — caused by blood loss, poor dietary intake, or malabsorption',
      'Lab triad: LOW ferritin (most sensitive), LOW MCV (<80 fL = microcytic), ELEVATED TIBC',
      'Treatment: oral ferrous sulfate — take on empty stomach with vitamin C (enhances absorption)',
      'Antacids, calcium, dairy, tetracycline all BLOCK iron absorption',
      'Black/dark green stools are NORMAL with oral iron — NOT a sign of GI bleeding',
      'Continue iron 2-3 MONTHS after hemoglobin normalizes to replenish stores (monitor ferritin)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with microcytic anemia has the following labs: ferritin 8 ng/mL (low), MCV 68 fL (low), TIBC 480 mcg/dL (elevated). A second patient also has microcytic anemia with: ferritin 220 ng/mL (high), MCV 64 fL (low), TIBC 180 mcg/dL (low). Which interpretation is correct?',
          options: [
            'Both patients have iron deficiency anemia',
            'Patient 1 has iron deficiency; Patient 2 has thalassemia',
            'Patient 1 has thalassemia; Patient 2 has iron deficiency',
            'Both patients have thalassemia',
          ],
          correct: 1,
          rationale: 'Both are microcytic (low MCV), but the ferritin and TIBC differentiate them. Patient 1: low ferritin + high TIBC = body is iron-depleted and trying to absorb more. Patient 2: HIGH ferritin + low TIBC = iron stores are full (or overloaded) — the problem is defective hemoglobin synthesis, not iron shortage. This is the classic IDA-vs-thalassemia trap. NEVER give iron to thalassemia patients — they already have iron overload.',
        },
      ],
      y: [
        {
          stem: 'A nurse is reviewing laboratory results for a patient with suspected iron deficiency anemia. Which combination of lab findings is MOST consistent with this diagnosis?',
          options: [
            'Low ferritin, low MCV, elevated TIBC',
            'Elevated ferritin, low MCV, low TIBC',
            'Low ferritin, elevated MCV, normal TIBC',
            'Normal ferritin, low MCV, elevated reticulocyte count',
          ],
          correct: 0,
          rationale: 'Iron deficiency anemia classic lab triad: LOW ferritin (depleted stores — most sensitive indicator), LOW MCV (<80 fL = microcytic cells), and ELEVATED TIBC (body upregulates transferrin to scavenge available iron). Option B describes thalassemia. Option C (elevated MCV) suggests B12/folate deficiency. Option D (elevated reticulocytes) suggests hemolytic anemia.',
        },
      ],
      r: [
        {
          stem: 'A nurse is teaching a patient prescribed ferrous sulfate for iron deficiency anemia. Which statement by the patient requires FURTHER TEACHING?',
          options: [
            '"I will take my iron tablet with a glass of orange juice."',
            '"I should take the iron with my antacid to prevent stomach upset."',
            '"My stools may turn black or dark green, and that is normal."',
            '"I should take the iron on an empty stomach, between meals."',
          ],
          correct: 1,
          rationale: 'Antacids DECREASE iron absorption by raising gastric pH. Iron needs an acidic environment for absorption. Taking iron with vitamin C (orange juice) enhances absorption. Black stools are normal and expected. Empty stomach maximizes absorption. If the patient has GI intolerance, iron can be taken with food (reduced but still some absorption) — but never with antacids specifically.',
        },
      ],
    },
  },

  'DIC (Disseminated Intravascular Coagulation)': {
    details: [
      'DIC is ALWAYS secondary — never occurs on its own. Treat the underlying cause FIRST',
      'Classic lab pattern: prolonged PT/aPTT, LOW platelets, LOW fibrinogen, HIGH D-dimer',
      'Paradox: clots AND bleeds simultaneously — microthrombi consume clotting factors',
      'Common triggers: sepsis (#1), abruptio placentae, trauma, burns, malignancy',
      'Treatment priority: treat the cause, then replace factors (FFP, cryo, platelets)',
      'Heparin is controversial in acute DIC — rarely used in active bleeding',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with sepsis develops oozing from IV sites, petechiae, and hematuria. Labs show: PT 22 sec, aPTT 58 sec, platelets 42,000/mm3, fibrinogen 88 mg/dL, D-dimer 4,200 ng/mL. Which condition do these findings MOST strongly support?',
          options: [
            'Immune thrombocytopenic purpura (ITP)',
            'Heparin-induced thrombocytopenia (HIT)',
            'Disseminated intravascular coagulation (DIC)',
            'Vitamin K deficiency',
          ],
          correct: 2,
          rationale: 'Classic DIC lab pattern: prolonged PT AND aPTT (factors consumed), low platelets (consumed in microthrombi), low fibrinogen (consumed), and markedly elevated D-dimer (fibrin degradation products). Sepsis + simultaneous bleeding confirms DIC. ITP = isolated low platelets with NORMAL PT/aPTT/fibrinogen. HIT = thrombocytopenia + paradoxical clotting, not consumption coagulopathy. Vitamin K deficiency = prolonged PT but normal platelets and fibrinogen.',
        },
        {
          stem: 'A patient with abruptio placentae develops DIC with active bleeding. Multiple blood products are ordered. Which nursing intervention is the HIGHEST priority?',
          options: [
            'Administer cryoprecipitate to replace fibrinogen',
            'Treat the underlying cause — facilitate emergent delivery',
            'Administer heparin to interrupt the clotting cascade',
            'Prepare aminocaproic acid to stop fibrinolysis',
          ],
          correct: 1,
          rationale: 'DIC is ALWAYS secondary. The single most important intervention is treating the underlying cause (deliver the placenta). Replacing factors without addressing the cause is temporary — the DIC cycle consumes them again. Cryoprecipitate IS appropriate but secondary to treating the trigger. Heparin is controversial and rarely used in acute bleeding DIC. Aminocaproic acid (antifibrinolytic) is CONTRAINDICATED in DIC — it would stabilize microthrombi and worsen organ damage.',
        },
      ],
      y: [
        {
          stem: 'A nurse suspects DIC in a critically ill patient. Which set of lab results would the nurse expect to find?',
          options: [
            'Elevated platelets, elevated fibrinogen, normal D-dimer',
            'Low platelets, low fibrinogen, elevated D-dimer',
            'Normal platelets, normal PT, elevated D-dimer only',
            'Low platelets, elevated fibrinogen, normal PT',
          ],
          correct: 1,
          rationale: 'DIC causes consumption of clotting factors AND platelets in widespread microthrombi, with subsequent fibrinolysis. This produces: LOW platelets (consumed), LOW fibrinogen (consumed), and HIGH D-dimer (fibrin breakdown products from dissolving the microthrombi). PT and aPTT are also prolonged because the clotting factors are consumed faster than they can be replaced.',
        },
      ],
      r: [
        {
          stem: 'A patient is diagnosed with DIC. The nurse knows the MOST important principle of DIC treatment is:',
          options: [
            'Administer heparin to stop the clotting cascade',
            'Treat the underlying cause that triggered the DIC',
            'Administer vitamin K to restore clotting factors',
            'Perform plasmapheresis to remove fibrin degradation products',
          ],
          correct: 1,
          rationale: 'DIC is ALWAYS secondary to another condition (sepsis, trauma, obstetric complications, malignancy). Treating the underlying cause stops the trigger for the DIC cycle. Without addressing the cause, replacing factors is futile — they will be consumed again immediately. This is the most fundamental concept in DIC management.',
        },
      ],
    },
  },

  'ITP (Immune Thrombocytopenic Purpura)': {
    details: [
      'ITP = autoimmune destruction of platelets — ONLY platelets are low, everything else normal',
      'Differentiator from DIC: PT, aPTT, fibrinogen are all NORMAL in ITP',
      'Wet purpura (blood blisters on mucous membranes) = RED FLAG for imminent hemorrhage',
      'Treatment ladder: corticosteroids (1st line) → IVIG → splenectomy (refractory)',
      'Platelet count <20,000 = spontaneous bleeding risk',
      'Avoid IM injections, aspirin, NSAIDs — anything that increases bleeding risk',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with ITP has platelets of 18,000/mm3 and wet purpura on the buccal mucosa. Which action should the nurse prioritize FIRST?',
          options: [
            'Administer prescribed corticosteroids to suppress antibody production',
            'Notify provider — anticipate platelet transfusion',
            'Apply ice packs to the oral mucosa to control bleeding',
            'Schedule the patient for an emergent splenectomy',
          ],
          correct: 1,
          rationale: 'Wet purpura (blood blisters on mucous membranes) is a RED FLAG indicating active mucosal bleeding and high risk for life-threatening hemorrhage including intracranial bleeding. With platelets at 18,000 (below 20,000 threshold) AND wet purpura, the patient needs immediate platelet transfusion. Corticosteroids are first-line maintenance but take days to work. Ice is a minor local measure. Splenectomy is planned, not emergent.',
        },
      ],
      y: [
        {
          stem: 'How does the nurse differentiate ITP from DIC when both patients have low platelet counts?',
          options: [
            'ITP causes elevated D-dimer; DIC has normal D-dimer',
            'In ITP, PT, aPTT, and fibrinogen are NORMAL; in DIC, they are all abnormal',
            'ITP occurs only in children; DIC occurs only in adults',
            'ITP causes prolonged bleeding time; DIC does not',
          ],
          correct: 1,
          rationale: 'The KEY differentiator: ITP is isolated thrombocytopenia from immune-mediated platelet destruction — coagulation factors are NOT affected, so PT, aPTT, and fibrinogen remain NORMAL. DIC causes consumption of BOTH platelets AND clotting factors, producing prolonged PT/aPTT, low fibrinogen, and elevated D-dimer. Both cause low platelets, but the coagulation panel tells you which one.',
        },
      ],
      r: [
        {
          stem: 'A patient with ITP is receiving discharge teaching. Which instruction should the nurse include?',
          options: [
            '"Take aspirin for any headaches you experience."',
            '"Avoid contact sports, use a soft toothbrush, and avoid aspirin/NSAIDs."',
            '"You can resume all normal activities immediately."',
            '"Take iron supplements daily to replace blood loss."',
          ],
          correct: 1,
          rationale: 'ITP patients have low platelets and are at increased bleeding risk. Key safety teaching: avoid contact sports and activities with injury risk, use a soft toothbrush (prevent gum bleeding), use an electric razor (not a blade), and avoid aspirin/NSAIDs which impair platelet function and worsen bleeding risk. Iron supplements are not indicated unless there is documented iron deficiency from chronic blood loss.',
        },
      ],
    },
  },

  'Heparin & Warfarin': {
    details: [
      'Heparin: monitors aPTT (therapeutic 1.5-2.5x normal). Antidote = protamine sulfate',
      'Warfarin: monitors INR (therapeutic 2-3 for most conditions). Antidote = vitamin K',
      'NEVER confuse antidotes — protamine for heparin, vitamin K for warfarin',
      'Active bleeding + elevated INR = IV vitamin K + FFP (immediate factor replacement)',
      'HIT: paradoxical clotting 5-10 days after heparin start — stop ALL heparin products',
      'DOACs (dabigatran, rivaroxaban, apixaban): no routine monitoring, specific reversal agents',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on warfarin with atrial fibrillation presents after a fall with a scalp laceration that is actively bleeding. INR is 5.8. The provider orders immediate reversal. Which combination does the nurse anticipate?',
          options: [
            'Protamine sulfate IV and hold the next warfarin dose',
            'Vitamin K (phytonadione) IV and fresh frozen plasma (FFP)',
            'Vitamin K (phytonadione) PO and recheck INR in 24 hours',
            'Aminocaproic acid IV and apply direct pressure',
          ],
          correct: 1,
          rationale: 'Emergency warfarin reversal with active bleeding requires BOTH: (1) IV vitamin K for definitive reversal (takes 6-24 hours to restore factor production), and (2) FFP for IMMEDIATE factor replacement (bridges the gap). Protamine reverses HEPARIN, not warfarin — this is the #1 antidote swap trap. Oral vitamin K alone is too slow for active head bleeding. Aminocaproic acid does not address depleted clotting factors.',
        },
        {
          stem: 'A patient who started heparin 7 days ago for DVT prophylaxis develops a new DVT in the opposite leg. Platelet count has dropped from 220,000 to 85,000/mm3. Which action should the nurse take FIRST?',
          options: [
            'Increase the heparin dose since the DVT is progressing',
            'Stop ALL heparin immediately and notify the provider',
            'Administer protamine sulfate to reverse the heparin',
            'Continue heparin and add warfarin for dual anticoagulation',
          ],
          correct: 1,
          rationale: 'This is HIT (heparin-induced thrombocytopenia): platelet drop >50% from baseline + NEW thrombosis + 5-10 days after heparin start. HIT causes paradoxical clotting (not bleeding). The FIRST action is to stop ALL heparin products immediately (including heparin flushes). The provider will switch to a direct thrombin inhibitor (argatroban or bivalirudin). Increasing heparin would worsen HIT. Protamine is not indicated — the problem is immune-mediated, not dose-related.',
        },
      ],
      y: [
        {
          stem: 'A nurse is teaching a patient about warfarin therapy. Which statement indicates correct understanding?',
          options: [
            '"I need to have my aPTT checked regularly to monitor this medication."',
            '"I should eat consistent amounts of vitamin K-rich foods each week."',
            '"If I miss a dose, I should double the next dose to catch up."',
            '"I can safely take aspirin with warfarin for headaches."',
          ],
          correct: 1,
          rationale: 'Warfarin works by inhibiting vitamin K-dependent clotting factors. Patients should eat CONSISTENT amounts of vitamin K (not avoid it entirely) — sudden changes in vitamin K intake cause INR fluctuations. Warfarin is monitored by INR (not aPTT — that monitors heparin). Never double a dose. Aspirin + warfarin dramatically increases bleeding risk.',
        },
      ],
      r: [
        {
          stem: 'A patient receiving IV heparin has an aPTT result of 120 seconds (therapeutic range: 60-80 seconds). Which action should the nurse take?',
          options: [
            'Continue the current heparin rate — this is therapeutic',
            'Stop the heparin infusion and notify the provider',
            'Administer vitamin K to reverse the heparin',
            'Increase the heparin rate to achieve better anticoagulation',
          ],
          correct: 1,
          rationale: 'An aPTT of 120 seconds is well above the therapeutic range (60-80 sec), indicating the patient is over-anticoagulated and at high risk for bleeding. The nurse should stop the infusion and notify the provider for dose adjustment. Vitamin K reverses WARFARIN, not heparin — protamine sulfate is the heparin antidote. Increasing the rate would be dangerous.',
        },
      ],
    },
  },

  'Leukemia': {
    details: [
      '4 types: ALL (children), CLL (older adults), AML (acute myeloid), CML (Philadelphia chromosome)',
      'Tumor lysis syndrome (TLS): K+ HIGH, PO4 HIGH, Ca LOW, uric acid HIGH — from rapid cell death',
      'TLS prevention sequence: baseline labs → aggressive hydration → allopurinol → monitor I&O',
      'Neutropenic precautions when ANC <1500: no fresh flowers, no raw foods, private room',
      'CML: Philadelphia chromosome, BCR-ABL fusion → treated with imatinib (Gleevec)',
      'Leukostasis: WBC clogs vessels causing organ ischemia — medical emergency',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with AML is about to begin induction chemotherapy. To prevent tumor lysis syndrome, which nursing action should be performed FIRST?',
          options: [
            'Administer allopurinol as prescribed',
            'Initiate aggressive IV hydration (2-3 L/day)',
            'Verify baseline labs: potassium, phosphorus, calcium, uric acid, creatinine',
            'Monitor strict intake and output during chemotherapy',
          ],
          correct: 2,
          rationale: 'Baseline labs must be verified FIRST — you need starting values to detect changes. Then: aggressive hydration (most important prevention — flushes out cellular debris), then allopurinol (blocks uric acid formation), then ongoing I&O monitoring. The sequence matters: labs → hydrate → allopurinol → monitor.',
        },
      ],
      y: [
        {
          stem: 'A patient undergoing chemotherapy has an ANC (absolute neutrophil count) of 800/mm3. Which precaution is MOST important?',
          options: [
            'Place the patient in protective (neutropenic) isolation',
            'Encourage visitors to bring fresh fruit and flowers',
            'Administer live vaccines to boost immunity',
            'Allow the patient to share a room with a stable patient',
          ],
          correct: 0,
          rationale: 'ANC <1000 = severe neutropenia requiring strict neutropenic precautions: private room, no fresh flowers or plants (harbor mold/bacteria), no raw/uncooked foods, meticulous hand hygiene, and monitoring for signs of infection. The first sign of infection may be fever alone — neutropenic patients cannot mount a normal inflammatory response. Live vaccines are absolutely contraindicated in immunosuppressed patients.',
        },
      ],
      r: [
        {
          stem: 'A nurse is reviewing labs for a patient receiving chemotherapy. Which finding indicates tumor lysis syndrome?',
          options: [
            'Low potassium, low phosphorus, high calcium',
            'High potassium, high phosphorus, low calcium, high uric acid',
            'Normal electrolytes with elevated WBC count',
            'Low potassium, high sodium, metabolic alkalosis',
          ],
          correct: 1,
          rationale: 'TLS occurs when massive tumor cell death releases intracellular contents: potassium (HIGH — cells are rich in K+), phosphorus (HIGH — from DNA/RNA breakdown), uric acid (HIGH — from purine metabolism), and calcium drops LOW (binds to excess phosphorus). This can cause fatal cardiac arrhythmias (hyperkalemia), renal failure (uric acid crystals), and tetany (hypocalcemia).',
        },
      ],
    },
  },

  'B12 Deficiency / Pernicious Anemia': {
    details: [
      'Caused by lack of intrinsic factor (pernicious anemia) or dietary deficiency',
      'MACROCYTIC anemia — MCV >100 fL (large immature megaloblasts)',
      'KEY differentiator from folate deficiency: B12 causes NEUROLOGIC symptoms (paresthesias, ataxia)',
      'Folate deficiency does NOT cause neurologic symptoms',
      'Treatment: IM cyanocobalamin (B12) injections — lifelong if pernicious anemia',
      'Monitor response: reticulocyte count rises first (within 1 week), then MCV normalizes',
    ],
    questions: {
      g: [
        {
          stem: 'Two patients both have macrocytic anemia (MCV >100). Patient A reports numbness and tingling in the feet and has difficulty with balance. Patient B has no neurologic symptoms. Which interpretation is MOST accurate?',
          options: [
            'Both patients have B12 deficiency',
            'Patient A likely has B12 deficiency; Patient B likely has folate deficiency',
            'Patient A has folate deficiency; Patient B has B12 deficiency',
            'Both patients have folate deficiency with different presentations',
          ],
          correct: 1,
          rationale: 'The KEY differentiator between B12 and folate deficiency: both cause macrocytic anemia, but ONLY B12 deficiency causes neurologic symptoms (peripheral neuropathy, paresthesias, ataxia, cognitive changes). This is because B12 is essential for myelin synthesis. Folate deficiency affects DNA synthesis in rapidly dividing cells but does NOT affect the nervous system. Numbness/tingling + ataxia = B12. No neuro symptoms = folate.',
        },
      ],
      y: [
        {
          stem: 'A patient with pernicious anemia has been receiving IM cyanocobalamin (B12) weekly for 4 weeks. Which finding indicates the treatment is MOST effective?',
          options: [
            'MCV has decreased from 118 fL to 92 fL',
            'Serum iron level has increased to 150 mcg/dL',
            'WBC count has increased from 4,500 to 8,000/mm3',
            'Platelet count has increased from 180,000 to 280,000/mm3',
          ],
          correct: 0,
          rationale: 'Pernicious anemia causes MACROCYTIC anemia (high MCV). An MCV dropping from 118 (macrocytic) to 92 (normal: 80-100) shows B12 replacement is enabling normal RBC maturation. Serum iron is unrelated to B12 deficiency. Both WBC and platelet values given are within normal range and do not specifically indicate B12 response. The reticulocyte count would also rise within 1 week as the earliest response indicator.',
        },
      ],
      r: [
        {
          stem: 'A patient diagnosed with pernicious anemia asks the nurse, "How long will I need these B12 injections?" Which response is MOST accurate?',
          options: [
            '"Only until your hemoglobin returns to normal, usually 2-3 months."',
            '"You will need B12 injections for the rest of your life."',
            '"You can switch to oral B12 supplements once your levels improve."',
            '"Most patients only need injections for about 1 year."',
          ],
          correct: 1,
          rationale: 'Pernicious anemia is caused by the permanent loss of intrinsic factor (an autoimmune destruction of gastric parietal cells). Without intrinsic factor, the GI tract cannot absorb B12 from food or oral supplements. IM B12 injections bypass the GI tract and are required for LIFE. Stopping injections will result in B12 deficiency recurring, with potentially irreversible neurologic damage.',
        },
      ],
    },
  },

  'Thalassemia': {
    details: [
      'Genetic defect in hemoglobin chain synthesis — produces microcytic, hypochromic RBCs',
      'Iron is NOT deficient — iron overload is the problem from chronic transfusions',
      'NEVER give iron supplements to thalassemia patients — worsens organ damage',
      'Treatment: regular transfusions + iron chelation therapy (deferoxamine/deferasirox)',
      'Lab clue: microcytic anemia with HIGH ferritin and LOW TIBC (opposite of IDA)',
      'Facial bone deformities (chipmunk face) from extramedullary hematopoiesis in severe cases',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with thalassemia major (Hgb 5.8 g/dL) is ordered a blood transfusion. The nurse reviews additional orders. Which order should the nurse QUESTION?',
          options: [
            'Administer deferoxamine (Desferal) after the transfusion',
            'Administer ferrous sulfate 325 mg PO daily',
            'Obtain a type and crossmatch before transfusion',
            'Monitor serum ferritin levels',
          ],
          correct: 1,
          rationale: 'Iron supplementation is CONTRAINDICATED in thalassemia. These patients have iron OVERLOAD from chronic transfusions and ineffective erythropoiesis. The anemia looks like iron deficiency (microcytic, hypochromic) but the cause is defective hemoglobin synthesis, NOT iron shortage. Adding iron worsens organ damage (liver, heart). Deferoxamine is an iron CHELATOR — correct therapy. Type and crossmatch and ferritin monitoring are both appropriate.',
        },
      ],
      y: [
        {
          stem: 'A nurse is differentiating between iron deficiency anemia and thalassemia. Both present with microcytic anemia. Which lab finding distinguishes thalassemia from iron deficiency?',
          options: [
            'Elevated reticulocyte count in thalassemia',
            'Elevated ferritin and low TIBC in thalassemia',
            'Elevated MCV in thalassemia',
            'Low hemoglobin in thalassemia only',
          ],
          correct: 1,
          rationale: 'The key lab differentiator: In thalassemia, ferritin is HIGH (iron stores are full/overloaded) and TIBC is LOW (body is not trying to absorb more iron). In IDA, ferritin is LOW (depleted stores) and TIBC is HIGH (body is desperately trying to absorb iron). Both have low MCV and low hemoglobin — but the iron studies tell you which condition.',
        },
      ],
      r: [
        {
          stem: 'A patient with thalassemia major asks why they need deferoxamine injections. The nurse explains that this medication:',
          options: [
            'Replaces the iron that is lost during blood transfusions',
            'Removes excess iron from the body to prevent organ damage',
            'Stimulates the bone marrow to produce more red blood cells',
            'Prevents the immune system from destroying transfused blood',
          ],
          correct: 1,
          rationale: 'Deferoxamine is an iron chelation agent — it binds excess iron and removes it from the body through urine and stool. Thalassemia patients who receive regular transfusions accumulate dangerous amounts of iron in the liver, heart, and endocrine organs. Without chelation therapy, iron overload leads to cirrhosis, heart failure, and endocrine dysfunction. Chelation is essential for long-term survival in chronically transfused patients.',
        },
      ],
    },
  },

  'Transfusion Reactions': {
    details: [
      'STOP the transfusion FIRST for any suspected reaction — maintain IV access with NS',
      'Acute hemolytic: fever, flank pain, hemoglobinuria — most dangerous, ABO incompatibility',
      'Febrile non-hemolytic: fever + chills without hemolysis — most common reaction',
      'Allergic: urticaria/hives — mild allergic, may continue with antihistamine if mild',
      'TACO (transfusion-associated circulatory overload): fluid overload, JVD, crackles, hypertension',
      'TRALI (transfusion-related acute lung injury): sudden dyspnea, bilateral infiltrates, hypoxia — NO diuretics (not fluid overload)',
    ],
    questions: {
      g: [
        {
          stem: 'During a blood transfusion, a patient develops sudden dyspnea, bilateral pulmonary infiltrates on chest X-ray, and SpO2 of 82%. Blood pressure is 90/60 mmHg. The reaction began within 2 hours of starting the transfusion. Which complication does the nurse suspect, and what differentiates it from TACO?',
          options: [
            'TRALI — distinguished by hypotension and lack of fluid overload signs',
            'TACO — distinguished by bilateral infiltrates and hypoxia',
            'Acute hemolytic reaction — distinguished by pulmonary symptoms',
            'Anaphylaxis — distinguished by rapid onset of respiratory distress',
          ],
          correct: 0,
          rationale: 'TRALI (transfusion-related acute lung injury) presents with acute respiratory distress, bilateral infiltrates, and hypoxia within 6 hours of transfusion. The KEY differentiator from TACO: TRALI causes HYPOTENSION (non-cardiogenic pulmonary edema), while TACO causes HYPERTENSION (fluid overload with JVD and elevated BNP). TRALI treatment is supportive (O2, ventilation) — do NOT give diuretics (the lungs are not fluid-overloaded, they are inflamed).',
        },
      ],
      y: [
        {
          stem: 'A patient receiving a blood transfusion develops fever, chills, flank pain, and dark-colored urine 15 minutes after the transfusion began. Which type of reaction does the nurse suspect?',
          options: [
            'Febrile non-hemolytic reaction',
            'Acute hemolytic transfusion reaction',
            'Mild allergic reaction',
            'Transfusion-associated circulatory overload (TACO)',
          ],
          correct: 1,
          rationale: 'Fever + flank pain + hemoglobinuria (dark urine) = acute hemolytic reaction from ABO incompatibility. This is the most DANGEROUS transfusion reaction. The immune system attacks the incompatible RBCs, causing massive hemolysis. Actions: STOP the transfusion immediately, maintain NS, send blood bank samples, monitor for DIC and renal failure. Febrile non-hemolytic causes fever/chills but NOT flank pain or hemoglobinuria.',
        },
      ],
      r: [
        {
          stem: 'A patient develops urticaria (hives) during a blood transfusion. What should the nurse do FIRST?',
          options: [
            'Stop the transfusion and do not restart',
            'Stop the transfusion, administer diphenhydramine as ordered, and notify the provider',
            'Continue the transfusion at a slower rate and monitor',
            'Administer epinephrine immediately',
          ],
          correct: 1,
          rationale: 'Urticaria (hives) alone indicates a mild allergic reaction. The nurse should stop the transfusion, administer an antihistamine (diphenhydramine), and notify the provider. For mild allergic reactions (hives only, no respiratory distress), the transfusion may be restarted after symptoms resolve with antihistamine treatment. Epinephrine is reserved for anaphylaxis (respiratory distress, hypotension). If the reaction involves only hives with no other symptoms, it is manageable.',
        },
      ],
    },
  },

};

console.log('DRUG_DEEP_AH_HEMATOLOGY loaded:', Object.keys(window.DRUG_DEEP_AH_HEMATOLOGY).length, 'topics with questions');
