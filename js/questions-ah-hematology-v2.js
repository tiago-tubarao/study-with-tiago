// ══════════════════════════════════════════════
// ADULT HEALTH — HEMATOLOGY V2 (Missing Conditions)
// 23 conditions × 5 questions = 115 questions
// Keys match exam3/hematology.html name fields EXACTLY
// ══════════════════════════════════════════════

window.DRUG_DEEP_AH_HEMATOLOGY_V2 = {

  'Erythropoiesis & RBC Development': {
    details: [
      'RBCs develop from normoblast → reticulocyte → mature RBC, accumulating hemoglobin and losing the nucleus',
      'Until age 5, almost ALL bones produce RBCs; after age 20, mainly vertebrae, sternum, ribs, and pelvis',
      'Inactive red marrow is replaced by fatty yellow bone marrow with aging',
      'Erythropoietin (EPO) from the kidneys stimulates RBC production in response to hypoxia',
      'Age-related decline in hematopoietic reserve means elderly patients recover from anemia more slowly'
    ],
    questions: {
      g: [
        {
          stem: 'A nurse is caring for a 78-year-old patient with chronic kidney disease whose hemoglobin is 9.2 g/dL. The patient asks why the kidneys affect blood counts. Which response by the nurse is MOST accurate?',
          options: [
            'The kidneys filter old red blood cells out of the circulation.',
            'The kidneys produce erythropoietin, which stimulates the bone marrow to make red blood cells.',
            'The kidneys store iron needed for hemoglobin production.',
            'The kidneys activate vitamin B12 needed for RBC maturation.'
          ],
          correct: 1,
          rationale: 'The kidneys produce erythropoietin (EPO) in response to hypoxia, which stimulates the bone marrow to produce RBCs. In CKD, EPO production decreases, leading to anemia. The spleen (not kidneys) filters old RBCs. Iron is stored in the liver, and B12 requires intrinsic factor from the stomach.'
        },
        {
          stem: 'A nurse is reviewing labs on a patient receiving erythropoietin therapy. Which finding indicates the treatment is effective?',
          options: [
            'Reticulocyte count increases from 0.5% to 2.8%',
            'White blood cell count increases from 5,000 to 8,000/mm³',
            'Platelet count increases from 150,000 to 250,000/mm³',
            'Serum iron level increases from 60 to 120 mcg/dL'
          ],
          correct: 0,
          rationale: 'An increased reticulocyte count (immature RBCs) indicates the bone marrow is responding to EPO by producing more red blood cells. This is the earliest marker of effective erythropoietin therapy. WBCs and platelets are not directly stimulated by EPO. Serum iron reflects iron stores, not EPO response.'
        }
      ],
      y: [
        {
          stem: 'A nursing student asks where red blood cells are primarily produced in a healthy 30-year-old adult. Which response by the nurse is correct?',
          options: [
            'The liver and spleen',
            'All bones throughout the body equally',
            'Flat bones such as the vertebrae, sternum, ribs, and pelvis',
            'The long bones of the arms and legs'
          ],
          correct: 2,
          rationale: 'After age 20, RBC production (erythropoiesis) occurs mainly in flat bones: vertebrae, sternum, ribs, and pelvis. Until age 5, almost all bones produce RBCs. With aging, inactive red marrow in long bones is replaced by fatty yellow marrow. The liver and spleen are sites of fetal hematopoiesis, not adult.'
        },
        {
          stem: 'Which finding is expected during the normal maturation of a red blood cell?',
          options: [
            'The cell gains a nucleus as it matures.',
            'The cell loses its nucleus and accumulates hemoglobin.',
            'The cell develops granules for immune defense.',
            'The cell increases in size to carry more oxygen.'
          ],
          correct: 1,
          rationale: 'During normal RBC maturation (normoblast → reticulocyte → mature RBC), the cell loses its nucleus and accumulates hemoglobin. This allows maximum space for hemoglobin, which carries oxygen. Granules are features of WBCs (granulocytes). Mature RBCs are actually smaller than their precursors.'
        }
      ],
      r: [
        {
          stem: 'Which organ is the PRIMARY site of erythropoietin (EPO) production?',
          options: [
            'Liver',
            'Spleen',
            'Kidneys',
            'Bone marrow'
          ],
          correct: 2,
          rationale: 'The kidneys are the primary site of erythropoietin production. EPO is released in response to hypoxia and stimulates the bone marrow to produce RBCs. The liver produces a small amount of EPO. The spleen filters blood, and bone marrow is the site where EPO acts, not where it is produced.'
        }
      ]
    }
  },

  'Hemoglobin Structure': {
    details: [
      'Hemoglobin consists of two pairs of polypeptide chains (globin) — each chain has a heme unit with an iron atom',
      'Each iron atom binds one molecule of oxygen, so one hemoglobin molecule carries up to 4 oxygen molecules',
      'Hemoglobin makes up ~90% of the RBC dry weight',
      'Hemoglobin increases the oxygen-carrying capacity of blood by 100-fold compared to plasma alone',
      'Normal Hgb: Males 14-18 g/dL, Females 12-16 g/dL'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with iron deficiency anemia has a hemoglobin of 8.2 g/dL. The nurse understands that the reduced hemoglobin PRIMARILY affects the patient by which mechanism?',
          options: [
            'Decreased ability of blood to fight infection',
            'Impaired oxygen-carrying capacity of the blood',
            'Reduced ability to form blood clots',
            'Decreased blood viscosity leading to bleeding'
          ],
          correct: 1,
          rationale: 'Hemoglobin is the oxygen-carrying molecule in RBCs. Each hemoglobin molecule contains iron atoms that bind oxygen. Reduced hemoglobin directly decreases the blood\'s oxygen-carrying capacity, leading to tissue hypoxia. WBCs fight infection, platelets form clots, and blood viscosity is related to RBC count (polycythemia), not hemoglobin alone.'
        },
        {
          stem: 'A nurse is teaching a patient about anemia labs. The patient asks why the hemoglobin level is more important than the RBC count. Which response is BEST?',
          options: [
            'The hemoglobin level is easier to measure accurately than the RBC count.',
            'Hemoglobin directly reflects the blood\'s ability to carry oxygen to tissues.',
            'The RBC count is only useful in diagnosing polycythemia.',
            'Hemoglobin measures both red and white blood cell function.'
          ],
          correct: 1,
          rationale: 'Hemoglobin directly reflects oxygen-carrying capacity because it is the molecule that binds and transports oxygen. RBC count tells you the number of cells but not how much hemoglobin each contains. A patient could have a normal RBC count but low hemoglobin (as in iron deficiency). Hemoglobin does not measure WBC function.'
        }
      ],
      y: [
        {
          stem: 'A patient asks the nurse how hemoglobin carries oxygen. Which explanation is MOST accurate?',
          options: [
            'Hemoglobin dissolves oxygen in the plasma for transport.',
            'Each hemoglobin molecule has iron atoms that bind oxygen molecules.',
            'Hemoglobin stores oxygen inside the red blood cell nucleus.',
            'Hemoglobin converts oxygen to carbon dioxide for transport.'
          ],
          correct: 1,
          rationale: 'Hemoglobin contains heme groups, each with an iron atom that reversibly binds one oxygen molecule. Since each hemoglobin has 4 heme groups, it can carry up to 4 oxygen molecules. Oxygen is not dissolved in plasma (that accounts for a tiny fraction). RBCs have no nucleus. Hemoglobin carries both O2 and CO2, but does not convert one to the other.'
        },
        {
          stem: 'Which statement about hemoglobin is correct?',
          options: [
            'Hemoglobin accounts for about 10% of the RBC dry weight.',
            'Hemoglobin increases the oxygen-carrying capacity of blood by approximately 100-fold.',
            'Normal hemoglobin for adult females is 14-18 g/dL.',
            'Hemoglobin is produced primarily in the spleen.'
          ],
          correct: 1,
          rationale: 'Hemoglobin increases the oxygen-carrying capacity of blood by approximately 100-fold compared to plasma alone. Hemoglobin makes up ~90% (not 10%) of RBC dry weight. Normal Hgb for females is 12-16 g/dL (14-18 is males). Hemoglobin is produced in the bone marrow during erythropoiesis, not the spleen.'
        }
      ],
      r: [
        {
          stem: 'What is the normal hemoglobin range for an adult male?',
          options: [
            '10-12 g/dL',
            '12-16 g/dL',
            '14-18 g/dL',
            '18-22 g/dL'
          ],
          correct: 2,
          rationale: 'Normal hemoglobin for adult males is 14-18 g/dL. Normal for adult females is 12-16 g/dL. Below these ranges indicates anemia. 10-12 g/dL would be mild anemia. 18-22 g/dL would suggest polycythemia.'
        }
      ]
    }
  },

  'Bilirubin Metabolism': {
    details: [
      'RBCs are broken down in the spleen after ~120-day lifespan; heme is converted to bilirubin',
      'Unconjugated bilirubin is NOT water-soluble and binds to albumin for transport to the liver',
      'The liver conjugates bilirubin with glucuronide, making it water-soluble (conjugated bilirubin)',
      'Conjugated bilirubin is excreted in bile; jaundice results from bilirubin retention',
      'Causes of jaundice: hemolysis (pre-hepatic), liver failure (hepatic), or bile duct obstruction (post-hepatic)'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with hemolytic anemia develops jaundice. The nurse understands that the jaundice is caused by which mechanism?',
          options: [
            'Obstruction of the common bile duct by gallstones',
            'Excessive RBC destruction releasing bilirubin faster than the liver can conjugate it',
            'Liver failure preventing all protein synthesis',
            'Kidney failure preventing bilirubin excretion in urine'
          ],
          correct: 1,
          rationale: 'In hemolytic anemia, RBCs are destroyed faster than normal, releasing excessive amounts of heme that is converted to unconjugated bilirubin. The liver cannot conjugate it fast enough, causing pre-hepatic (hemolytic) jaundice. Gallstone obstruction causes post-hepatic jaundice. Bilirubin is excreted in bile, not primarily in urine.'
        },
        {
          stem: 'A nurse is caring for a jaundiced patient. Which lab finding would indicate the jaundice is caused by bile duct obstruction rather than hemolysis?',
          options: [
            'Elevated unconjugated (indirect) bilirubin',
            'Elevated conjugated (direct) bilirubin',
            'Decreased reticulocyte count',
            'Elevated lactate dehydrogenase (LDH)'
          ],
          correct: 1,
          rationale: 'Bile duct obstruction (post-hepatic jaundice) causes elevated conjugated (direct) bilirubin because the liver can conjugate it, but it cannot be excreted into the intestine. Hemolysis causes elevated unconjugated (indirect) bilirubin. Elevated LDH and low haptoglobin indicate hemolysis, not obstruction.'
        }
      ],
      y: [
        {
          stem: 'Where are aged red blood cells primarily broken down?',
          options: [
            'Liver',
            'Kidneys',
            'Spleen',
            'Bone marrow'
          ],
          correct: 2,
          rationale: 'Aged RBCs (after ~120-day lifespan) are primarily broken down in the spleen, where macrophages phagocytize them. The heme portion is converted to bilirubin. The liver conjugates bilirubin for excretion. The kidneys and bone marrow are not primary sites of RBC destruction.'
        },
        {
          stem: 'A nurse is explaining jaundice to a patient\'s family. Which statement is correct about bilirubin metabolism?',
          options: [
            'Unconjugated bilirubin is water-soluble and excreted by the kidneys.',
            'The liver converts unconjugated bilirubin to conjugated bilirubin for excretion in bile.',
            'Bilirubin is produced when white blood cells are destroyed.',
            'Conjugated bilirubin binds to albumin for transport in the blood.'
          ],
          correct: 1,
          rationale: 'The liver conjugates bilirubin with glucuronide, making it water-soluble (conjugated bilirubin) for excretion in bile. Unconjugated bilirubin is NOT water-soluble and binds to albumin for transport to the liver. Bilirubin comes from heme in RBCs, not WBCs.'
        }
      ],
      r: [
        {
          stem: 'Jaundice is caused by an accumulation of which substance?',
          options: [
            'Hemoglobin',
            'Bilirubin',
            'Albumin',
            'Iron'
          ],
          correct: 1,
          rationale: 'Jaundice is the yellow discoloration of skin and sclera caused by retention/accumulation of bilirubin in the blood and tissues. Bilirubin is a breakdown product of heme from RBCs. Hemoglobin, albumin, and iron do not cause jaundice.'
        }
      ]
    }
  },

  'Folate Deficiency': {
    details: [
      'Most common cause of folate deficiency is alcoholism; also poor diet, malabsorption, and pregnancy',
      'Causes megaloblastic anemia (large, immature RBCs) similar to B12 deficiency',
      'KEY difference from B12: folate deficiency does NOT cause neurological symptoms',
      'High-dose folate can MASK B12 deficiency — blood count improves but neurological damage continues',
      'Treatment: oral folic acid supplementation (unlike B12 pernicious anemia which requires IM injection)'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with chronic alcohol use disorder presents with megaloblastic anemia. Before starting folic acid supplementation, the nurse should ensure which action is taken?',
          options: [
            'Obtain a serum iron level to rule out iron deficiency.',
            'Check vitamin B12 level to prevent masking B12 deficiency.',
            'Perform a bone marrow biopsy to rule out leukemia.',
            'Start parenteral iron therapy before oral folate.'
          ],
          correct: 1,
          rationale: 'High-dose folic acid can mask B12 deficiency by correcting the megaloblastic anemia (improving blood counts) while allowing neurological damage from B12 deficiency to continue unchecked. Always check B12 level before starting folate alone. Alcoholism is the most common cause of folate deficiency, but B12 must be ruled out first.'
        },
        {
          stem: 'A nurse is differentiating between folate deficiency and B12 deficiency in two patients with megaloblastic anemia. Which assessment finding is UNIQUE to B12 deficiency?',
          options: [
            'Fatigue and pallor',
            'Glossitis and sore tongue',
            'Paresthesia and ataxia',
            'Elevated MCV on CBC'
          ],
          correct: 2,
          rationale: 'Neurological symptoms (paresthesia, ataxia, impaired cognition, weakness) are UNIQUE to B12 deficiency and do NOT occur in folate deficiency. Both cause fatigue, pallor, glossitis, sore tongue, and elevated MCV (megaloblastic anemia). This neurological distinction is the key exam differentiator.'
        }
      ],
      y: [
        {
          stem: 'Which patient is at HIGHEST risk for folate deficiency?',
          options: [
            'A 65-year-old with chronic alcohol use disorder',
            'A 25-year-old strict vegetarian',
            'A 50-year-old taking levothyroxine daily',
            'A 30-year-old with type 1 diabetes'
          ],
          correct: 0,
          rationale: 'Alcoholism is the MOST COMMON cause of folate deficiency due to poor dietary intake and impaired absorption. Strict vegetarians are at risk for B12 deficiency (not folate, which is found in green leafy vegetables). Levothyroxine and diabetes are not directly associated with folate deficiency.'
        },
        {
          stem: 'A patient with folate deficiency asks why oral supplements will work. Which response by the nurse is MOST accurate?',
          options: [
            'Folate can be absorbed orally because it does not require intrinsic factor.',
            'Folate is given by injection because oral absorption is always impaired.',
            'Folate requires intrinsic factor, but oral supplements bypass this need.',
            'Folate is stored in the bone marrow and released when oral supplements are taken.'
          ],
          correct: 0,
          rationale: 'Folate is absorbed in the small intestine and does NOT require intrinsic factor (unlike B12). Therefore, oral supplementation is effective for folate deficiency. B12 in pernicious anemia requires IM injection because intrinsic factor is absent. Folate is not stored in bone marrow.'
        }
      ],
      r: [
        {
          stem: 'Which is the MOST common cause of folate deficiency?',
          options: [
            'Pernicious anemia',
            'Strict vegetarian diet',
            'Alcoholism',
            'Chronic kidney disease'
          ],
          correct: 2,
          rationale: 'Alcoholism is the most common cause of folate deficiency due to poor nutritional intake and impaired intestinal absorption. Pernicious anemia is a cause of B12 deficiency (lack of intrinsic factor). Vegetarian diet can cause B12 deficiency. CKD primarily affects EPO production.'
        }
      ]
    }
  },

  'G6PD Deficiency': {
    details: [
      'Glucose-6-phosphate dehydrogenase deficiency — hereditary enzyme defect in RBCs',
      'RBCs are vulnerable to oxidative stress and undergo hemolysis when exposed to triggers',
      'Triggers include: certain medications (sulfonamides, antimalarials, aspirin), fava beans, infections',
      'Most common in African American males, Mediterranean, and Asian populations (X-linked recessive)',
      'CRITICAL: Must check G6PD status before giving rasburicase for tumor lysis syndrome'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with newly diagnosed leukemia is about to start chemotherapy. The provider orders rasburicase for tumor lysis syndrome prevention. Which assessment is ESSENTIAL before administering this medication?',
          options: [
            'Liver function tests',
            'Glucose-6-phosphate dehydrogenase (G6PD) level',
            'Prothrombin time (PT/INR)',
            'Serum calcium level'
          ],
          correct: 1,
          rationale: 'G6PD status MUST be checked before administering rasburicase (used for hyperuricemia in TLS). Rasburicase causes severe hemolysis in patients with G6PD deficiency, as their RBCs cannot protect against the oxidative stress generated by the drug. This is a critical safety check. LFTs, PT/INR, and calcium are monitored in TLS but are not specific contraindications for rasburicase.'
        },
        {
          stem: 'A nurse is teaching a patient newly diagnosed with G6PD deficiency about triggers to avoid. Which statement by the patient indicates CORRECT understanding?',
          options: [
            '"I should avoid all dairy products and calcium supplements."',
            '"I need to avoid fava beans, certain antibiotics like sulfonamides, and aspirin."',
            '"I should take iron supplements daily to prevent anemia."',
            '"I can eat anything but need to avoid all physical exercise."'
          ],
          correct: 1,
          rationale: 'G6PD-deficient patients must avoid oxidative triggers: fava beans, certain medications (sulfonamides, antimalarials, aspirin, nitrofurantoin), and infections that cause oxidative stress. Dairy and calcium are unrelated. Iron supplements are for iron deficiency anemia, not G6PD. Physical exercise is not restricted.'
        }
      ],
      y: [
        {
          stem: 'Which patient population is MOST likely to have G6PD deficiency?',
          options: [
            'Caucasian females over age 60',
            'African American males',
            'Asian females under age 20',
            'Hispanic females with diabetes'
          ],
          correct: 1,
          rationale: 'G6PD deficiency is an X-linked recessive disorder most prevalent in African American males, as well as Mediterranean and Asian populations. Being X-linked means males are more commonly affected than females (who have a second X chromosome as backup).'
        },
        {
          stem: 'A patient with G6PD deficiency develops dark urine and jaundice after taking a new medication. The nurse recognizes these as signs of:',
          options: [
            'Iron overload from excess supplementation',
            'Acute hemolytic episode triggered by oxidative stress',
            'Allergic reaction to the medication',
            'Dehydration from inadequate fluid intake'
          ],
          correct: 1,
          rationale: 'Dark urine (hemoglobinuria) and jaundice indicate hemolysis — RBC destruction. In G6PD deficiency, oxidative stress from certain medications triggers acute hemolytic episodes because the RBCs lack the enzyme needed to protect against oxidative damage. This is not an allergic reaction or iron overload.'
        }
      ],
      r: [
        {
          stem: 'G6PD deficiency makes red blood cells vulnerable to destruction by:',
          options: [
            'Bacterial infections only',
            'Oxidative stress',
            'Cold temperatures',
            'High altitude'
          ],
          correct: 1,
          rationale: 'G6PD deficiency makes RBCs unable to protect against oxidative stress, leading to hemolysis when exposed to oxidative triggers (certain drugs, fava beans, infections). Cold temperatures trigger sickle cell crisis. High altitude triggers secondary polycythemia.'
        }
      ]
    }
  },

  'Polycythemia (3 Types)': {
    details: [
      'Polycythemia = too many RBCs — blood becomes thick (hyperviscosity) increasing clot and stroke risk',
      'Relative polycythemia: caused by dehydration (hemoconcentration) — treat with fluids',
      'Primary/Polycythemia Vera: bone marrow proliferation disorder — treat with phlebotomy',
      'Secondary polycythemia: high EPO from chronic hypoxia (COPD, high altitude) — treat underlying cause',
      'Signs: hypertension, headache, dizziness, red face, thrombophlebitis, splenomegaly'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with polycythemia vera is scheduled for a therapeutic phlebotomy. The patient asks why blood is being removed. Which response by the nurse is MOST accurate?',
          options: [
            '"We need to test your blood for cancer markers."',
            '"Removing blood reduces the thickness and volume, lowering your risk of blood clots and stroke."',
            '"The extra blood is causing your spleen to enlarge, so we need to remove it."',
            '"Phlebotomy stimulates the bone marrow to produce healthier red blood cells."'
          ],
          correct: 1,
          rationale: 'In polycythemia vera, the bone marrow overproduces RBCs, causing hyperviscosity (thick blood) and hypervolemia (high blood volume). This increases the risk of thrombosis (blood clots) and stroke. Phlebotomy directly reduces blood volume and viscosity. While splenomegaly occurs, it is not the primary reason for phlebotomy.'
        },
        {
          stem: 'A nurse is differentiating between types of polycythemia. A patient with severe COPD has an elevated RBC count. Which type of polycythemia does the nurse suspect?',
          options: [
            'Relative polycythemia from dehydration',
            'Primary polycythemia vera from bone marrow disorder',
            'Secondary polycythemia from chronic hypoxia',
            'Iatrogenic polycythemia from EPO therapy'
          ],
          correct: 2,
          rationale: 'Secondary polycythemia occurs when chronic hypoxia (as in COPD) stimulates excessive EPO production, which increases RBC production as a compensatory mechanism. Relative polycythemia is from dehydration. Polycythemia vera is a primary bone marrow disorder unrelated to hypoxia. The treatment is to address the underlying cause (COPD management, oxygen therapy).'
        }
      ],
      y: [
        {
          stem: 'Which assessment finding is MOST consistent with polycythemia?',
          options: [
            'Pallor, fatigue, and tachycardia',
            'Hypertension, headache, and red facial complexion',
            'Petechiae, purpura, and prolonged bleeding',
            'Fever, night sweats, and weight loss'
          ],
          correct: 1,
          rationale: 'Polycythemia causes hyperviscosity and hypervolemia, leading to hypertension, headache, visual changes, dizziness, and a red/ruddy facial complexion. Pallor and fatigue indicate anemia (opposite). Petechiae suggest thrombocytopenia. Fever, night sweats, and weight loss (B symptoms) suggest lymphoma.'
        },
        {
          stem: 'A patient with polycythemia from dehydration is admitted. Which treatment does the nurse anticipate?',
          options: [
            'Therapeutic phlebotomy',
            'IV fluid replacement',
            'Chemotherapy',
            'Erythropoietin injections'
          ],
          correct: 1,
          rationale: 'Relative polycythemia is caused by dehydration (hemoconcentration — less plasma, same RBCs = elevated hematocrit). Treatment is fluid replacement to restore plasma volume. Phlebotomy is for polycythemia vera. Chemotherapy may be used for polycythemia vera in some cases. EPO would worsen polycythemia.'
        }
      ],
      r: [
        {
          stem: 'Which is the PRIMARY risk of polycythemia?',
          options: [
            'Severe bleeding',
            'Blood clots and stroke',
            'Overwhelming infection',
            'Bone marrow failure'
          ],
          correct: 1,
          rationale: 'The primary risk of polycythemia is thrombosis (blood clots) and stroke due to hyperviscosity (thick blood). Too many RBCs make the blood thick, increasing clot risk. Bleeding can occur paradoxically, but clotting is the primary concern. Infection and bone marrow failure are not primary complications of polycythemia.'
        }
      ]
    }
  },

  'Blood Typing (ABO & Rh)': {
    details: [
      'Type A: A antigens present; Type B: B antigens present; Type AB: both (universal RECIPIENT); Type O: neither (universal DONOR)',
      'Rh-positive: D antigen present; Rh-negative: D antigen absent',
      'Rh-negative patient receiving Rh-positive blood develops antibodies → hemolytic reaction on second exposure',
      'ABO incompatibility causes the most severe acute hemolytic transfusion reactions',
      'Two-nurse verification of blood type and patient identity is required before transfusion'
    ],
    questions: {
      g: [
        {
          stem: 'A trauma patient with unknown blood type needs an emergency transfusion. Which blood type should the nurse anticipate the provider will order?',
          options: [
            'Type A negative',
            'Type AB positive',
            'Type O negative',
            'Type B negative'
          ],
          correct: 2,
          rationale: 'Type O negative is the universal donor — it has no A, B, or Rh(D) antigens, so it will not trigger a hemolytic reaction in any recipient. In emergencies when blood type is unknown, O negative is given. AB positive is the universal recipient (can receive any type). Types A and B would cause hemolysis in incompatible recipients.'
        },
        {
          stem: 'An Rh-negative patient received Rh-positive blood during a previous hospitalization. The nurse understands that the PRIMARY concern with a second Rh-positive transfusion is:',
          options: [
            'The patient will develop iron overload.',
            'The patient\'s antibodies will destroy the transfused Rh-positive RBCs, causing a hemolytic reaction.',
            'The patient will become Rh-positive permanently.',
            'The Rh factor will suppress the patient\'s immune system.'
          ],
          correct: 1,
          rationale: 'After first exposure to Rh-positive blood, an Rh-negative patient develops anti-D antibodies (sensitization). On SECOND exposure, these antibodies attack and destroy the Rh-positive RBCs, causing a hemolytic transfusion reaction. The patient does not become Rh-positive. Iron overload is a concern with repeated transfusions in thalassemia, not Rh incompatibility.'
        }
      ],
      y: [
        {
          stem: 'Which blood type is considered the universal recipient?',
          options: [
            'Type O negative',
            'Type O positive',
            'Type AB positive',
            'Type A positive'
          ],
          correct: 2,
          rationale: 'Type AB positive is the universal recipient because it has both A and B antigens and the Rh(D) antigen — so the patient has no antibodies against any of these antigens and can receive any blood type. Type O negative is the universal DONOR (no antigens to trigger reactions).'
        },
        {
          stem: 'Before starting a blood transfusion, which safety measure is REQUIRED?',
          options: [
            'One nurse verifies the blood type with the patient\'s armband.',
            'Two nurses independently verify the blood product, patient identity, and blood type compatibility.',
            'The patient signs a separate consent form for each unit of blood.',
            'The blood is warmed to body temperature before infusion.'
          ],
          correct: 1,
          rationale: 'Two-nurse verification of the blood product, patient identity (using two identifiers), blood type, and compatibility is REQUIRED before starting any transfusion. This prevents potentially fatal ABO-incompatible transfusions. While consent is needed, verification by two nurses is the critical safety step.'
        }
      ],
      r: [
        {
          stem: 'Which blood type is considered the universal donor?',
          options: [
            'Type AB positive',
            'Type A negative',
            'Type O negative',
            'Type B positive'
          ],
          correct: 2,
          rationale: 'Type O negative is the universal donor because it has no A, B, or Rh antigens on the RBC surface, meaning it will not trigger an immune reaction in any recipient regardless of their blood type.'
        }
      ]
    }
  },

  'Transfusion Components': {
    details: [
      'PRBCs: given when Hgb <6 g/dL; increases oxygen-carrying capacity',
      'Platelets: given when <20,000/mm³; infused over 15-30 minutes; pooled from up to 10 donors; rigors (NOT a true reaction)',
      'FFP (Fresh Frozen Plasma): contains ALL clotting factors; infuse as quickly as tolerated (factors degrade); used for DIC, warfarin reversal',
      'Cryoprecipitate: contains Factors VIII, XIII, von Willebrand factor, fibrinogen; given IV bolus over 3 minutes; transfuse when fibrinogen <100 mg/dL',
      'All blood products use 0.9% NaCl ONLY — NEVER dextrose (causes hemolysis); use 18-gauge angiocatheter in large vein'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with DIC has a fibrinogen level of 85 mg/dL. Which blood product should the nurse anticipate administering?',
          options: [
            'Packed red blood cells (PRBCs)',
            'Fresh frozen plasma (FFP)',
            'Cryoprecipitate',
            'Platelets'
          ],
          correct: 2,
          rationale: 'Cryoprecipitate is indicated when fibrinogen is <100 mg/dL. It contains concentrated Factors VIII, XIII, von Willebrand factor, and fibrinogen. It is given as an IV bolus over 3 minutes. While FFP also contains clotting factors, cryoprecipitate is the specific choice for low fibrinogen. PRBCs address anemia, and platelets address thrombocytopenia.'
        },
        {
          stem: 'A nurse is infusing platelets and the patient develops rigors (shaking chills). Which action should the nurse take FIRST?',
          options: [
            'Stop the infusion immediately and disconnect the tubing.',
            'Recognize this as a common side effect of pooled platelets and continue monitoring.',
            'Administer epinephrine for anaphylaxis.',
            'Notify the provider of a hemolytic reaction.'
          ],
          correct: 1,
          rationale: 'Rigors (shaking chills) during platelet transfusion are a common side effect of pooled platelets (from up to 10 donors) and are NOT a true transfusion reaction. The patient can be premedicated. However, the nurse should continue monitoring and report if other reaction signs develop (fever, SOB, hypotension). This is different from a hemolytic or anaphylactic reaction.'
        }
      ],
      y: [
        {
          stem: 'Which IV solution is compatible with blood product transfusion?',
          options: [
            'Dextrose 5% in water (D5W)',
            '0.9% normal saline (NS)',
            'Lactated Ringer\'s solution',
            'Dextrose 5% in 0.45% NaCl'
          ],
          correct: 1,
          rationale: '0.9% normal saline is the ONLY IV solution used with blood products. Dextrose solutions cause hemolysis (destruction of RBCs). Lactated Ringer\'s contains calcium, which can cause clotting in the tubing. Always use NS with blood tubing that has a filter.'
        },
        {
          stem: 'A patient needs rapid replacement of ALL clotting factors. Which blood product does the nurse anticipate?',
          options: [
            'Cryoprecipitate',
            'Platelets',
            'Fresh frozen plasma (FFP)',
            'Packed red blood cells (PRBCs)'
          ],
          correct: 2,
          rationale: 'FFP contains ALL coagulation factors and is used when rapid replacement of multiple clotting factors is needed (DIC, warfarin overdose with active bleeding, liver failure). It should be infused as quickly as tolerated because factors degrade over time. Cryoprecipitate contains only specific factors (VIII, XIII, vWF, fibrinogen).'
        }
      ],
      r: [
        {
          stem: 'At what hemoglobin level is a PRBC transfusion typically indicated?',
          options: [
            'Less than 10 g/dL',
            'Less than 8 g/dL',
            'Less than 6 g/dL',
            'Less than 4 g/dL'
          ],
          correct: 2,
          rationale: 'PRBCs are most commonly indicated when hemoglobin drops below 6 g/dL, which represents severe anemia with significant risk of tissue hypoxia. The exact threshold may vary by clinical situation, but <6 g/dL is the standard transfusion trigger taught for NCLEX.'
        }
      ]
    }
  },

  'Reticulocyte Count': {
    details: [
      'Reticulocytes are immature RBCs released from bone marrow — normal is approximately 1%',
      'HIGH reticulocyte count = bone marrow is actively compensating (e.g., after blood loss, hemolysis)',
      'LOW reticulocyte count = bone marrow failure or suppression (e.g., aplastic anemia, chemotherapy)',
      'Used to assess bone marrow response to anemia and effectiveness of treatment',
      'In aplastic anemia: reticulocyte count is LOW despite anemia (marrow not producing)'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with anemia has a reticulocyte count of 0.3%. The nurse understands this finding is MOST consistent with:',
          options: [
            'Acute blood loss with appropriate marrow response',
            'Hemolytic anemia with compensatory RBC production',
            'Bone marrow failure or suppression',
            'Iron deficiency with adequate iron supplementation'
          ],
          correct: 2,
          rationale: 'A LOW reticulocyte count (0.3%, below normal ~1%) in the presence of anemia indicates the bone marrow is NOT responding appropriately — suggesting bone marrow failure or suppression (aplastic anemia, chemotherapy, nutritional deficiency). In blood loss or hemolysis, the reticulocyte count should be HIGH (marrow compensating). Adequate iron supplementation would increase reticulocytes.'
        },
        {
          stem: 'A patient started on iron supplementation for iron deficiency anemia one week ago. Which lab finding BEST indicates the treatment is working?',
          options: [
            'Hemoglobin increases from 8 to 10 g/dL',
            'Reticulocyte count increases from 0.8% to 3.5%',
            'Serum ferritin increases from 10 to 25 ng/mL',
            'MCV increases from 72 to 78 fL'
          ],
          correct: 1,
          rationale: 'An increase in reticulocyte count is the EARLIEST indicator that anemia treatment is working. Reticulocytes (immature RBCs) increase within 1 week of effective treatment, well before hemoglobin normalizes (which takes weeks). Ferritin reflects iron stores but not immediate marrow response. MCV changes are slow.'
        }
      ],
      y: [
        {
          stem: 'What does an elevated reticulocyte count in a patient with anemia indicate?',
          options: [
            'The bone marrow has failed and cannot produce RBCs.',
            'The bone marrow is actively producing new RBCs to compensate for the anemia.',
            'The patient has a vitamin B12 deficiency.',
            'The patient is developing leukemia.'
          ],
          correct: 1,
          rationale: 'An elevated reticulocyte count indicates the bone marrow is actively producing and releasing immature RBCs (reticulocytes) to compensate for the anemia. This is an appropriate response seen in blood loss and hemolytic anemias. Bone marrow failure would show a LOW reticulocyte count.'
        },
        {
          stem: 'Which reticulocyte count is considered normal in a healthy adult?',
          options: [
            'Approximately 0.1%',
            'Approximately 1%',
            'Approximately 5%',
            'Approximately 10%'
          ],
          correct: 1,
          rationale: 'The normal reticulocyte count is approximately 1% of circulating RBCs. Above 1% suggests increased RBC production (compensatory response to anemia or blood loss). Below 1% suggests inadequate marrow response.'
        }
      ],
      r: [
        {
          stem: 'Reticulocytes are:',
          options: [
            'Mature red blood cells at the end of their lifespan',
            'Immature red blood cells recently released from bone marrow',
            'White blood cells that fight infection',
            'Platelet precursors from the bone marrow'
          ],
          correct: 1,
          rationale: 'Reticulocytes are immature RBCs that have been recently released from the bone marrow into the bloodstream. They mature into fully functional RBCs within 1-2 days. Their count reflects bone marrow activity and production capacity.'
        }
      ]
    }
  },

  'WBC Basics': {
    details: [
      'Normal WBC count: 4,000-10,000/mm³; elevated (leukocytosis) = infection/inflammation; decreased (leukopenia) = immunosuppression',
      'Neutrophils: most abundant WBC, first responders to bacterial infection (60-70% of WBCs)',
      'Lymphocytes: T cells (cell-mediated immunity) and B cells (antibody production)',
      'Monocytes: become macrophages in tissues; phagocytize pathogens and debris',
      'Absolute Neutrophil Count (ANC) <1000 = neutropenia; <500 = severe neutropenia (high infection risk)'
    ],
    questions: {
      g: [
        {
          stem: 'A patient\'s lab results show: WBC 12,500/mm³ with 80% neutrophils and 10% bands. The nurse interprets this as:',
          options: [
            'Normal WBC differential with no clinical concern',
            'Left shift indicating acute bacterial infection — the body is releasing immature neutrophils',
            'Chronic viral infection with lymphocyte predominance',
            'Bone marrow suppression requiring protective isolation'
          ],
          correct: 1,
          rationale: 'Elevated WBC with high neutrophils AND elevated bands (immature neutrophils) represents a "left shift" — the bone marrow is releasing immature cells to fight an acute bacterial infection. Normal bands are 0-5%. Elevated bands indicate the body is using neutrophils faster than mature ones can be produced. This is a classic indicator of acute bacterial infection.'
        },
        {
          stem: 'A nurse is reviewing the WBC differential for a patient on chemotherapy. The ANC is calculated at 450/mm³. Which nursing action is PRIORITY?',
          options: [
            'Encourage increased dietary iron intake.',
            'Initiate neutropenic precautions including strict hand hygiene, no fresh flowers or raw foods.',
            'Prepare for platelet transfusion.',
            'Administer vitamin B12 injection.'
          ],
          correct: 1,
          rationale: 'An ANC of 450/mm³ indicates severe neutropenia (<500), placing the patient at HIGH risk for life-threatening infection. Neutropenic precautions are the priority: strict hand hygiene, private room, no fresh flowers/plants (harbor fungi), no fresh fruits/raw foods, avoid rectal temperatures, and monitor for fever (may be ONLY sign of infection). Iron and B12 address anemia, not neutropenia.'
        }
      ],
      y: [
        {
          stem: 'Which type of white blood cell is the FIRST responder to bacterial infections?',
          options: [
            'Lymphocytes',
            'Monocytes',
            'Neutrophils',
            'Eosinophils'
          ],
          correct: 2,
          rationale: 'Neutrophils are the most abundant WBCs (60-70%) and are the first responders to bacterial infection. They are phagocytic cells that engulf and destroy bacteria. Lymphocytes handle viral infections and adaptive immunity. Monocytes arrive later and become macrophages. Eosinophils respond to parasites and allergic reactions.'
        },
        {
          stem: 'A patient\'s WBC count is 2,800/mm³. The nurse recognizes this as:',
          options: [
            'Normal white blood cell count',
            'Leukocytosis indicating infection',
            'Leukopenia indicating immunosuppression risk',
            'Thrombocytopenia requiring bleeding precautions'
          ],
          correct: 2,
          rationale: 'Normal WBC is 4,000-10,000/mm³. A count of 2,800 is below normal (leukopenia), indicating decreased immune function and increased infection risk. Leukocytosis is elevated WBC (>10,000). Thrombocytopenia refers to low platelets, not WBCs.'
        }
      ],
      r: [
        {
          stem: 'What is the normal white blood cell count range?',
          options: [
            '1,000-3,000/mm³',
            '4,000-10,000/mm³',
            '15,000-25,000/mm³',
            '100,000-300,000/mm³'
          ],
          correct: 1,
          rationale: 'Normal WBC count is 4,000-10,000/mm³. Below 4,000 is leukopenia (increased infection risk). Above 10,000 is leukocytosis (suggests infection, inflammation, or leukemia). 100,000-300,000 range would suggest a hematologic malignancy.'
        }
      ]
    }
  },

  'Neutropenia / Leukopenia': {
    details: [
      'Neutropenia = decreased neutrophils; ANC <1000 = neutropenic; ANC <500 = severe neutropenia',
      'FEVER is often the FIRST and ONLY sign of infection in neutropenic patients — treat as a MEDICAL EMERGENCY',
      'Action: obtain pan cultures (blood, urine, sputum, wound) FIRST, then start antibiotics immediately',
      'Hand hygiene is the #1 infection prevention measure',
      'Precautions: private room, no fresh flowers/plants, no raw fruits/vegetables, avoid rectal temps, limit visitors'
    ],
    questions: {
      g: [
        {
          stem: 'A patient receiving chemotherapy develops a temperature of 100.6°F (38.1°C). The ANC is 380/mm³. Which action should the nurse take FIRST?',
          options: [
            'Administer acetaminophen and recheck the temperature in 1 hour.',
            'Obtain pan cultures (blood, urine, sputum) and notify the provider for immediate antibiotics.',
            'Apply cooling blankets and increase IV fluid rate.',
            'Place the patient on contact isolation precautions.'
          ],
          correct: 1,
          rationale: 'Fever in a neutropenic patient (ANC <500) is a MEDICAL EMERGENCY. The nurse should obtain pan cultures FIRST (to identify the organism) and then notify the provider for immediate broad-spectrum antibiotics. Do NOT wait for culture results to start antibiotics. Acetaminophen alone is insufficient. Neutropenic patients need protective (not contact) isolation.'
        },
        {
          stem: 'Which precaution is MOST important for a patient with an ANC of 200/mm³?',
          options: [
            'Fall precautions with bed alarm and non-skid socks',
            'Bleeding precautions with soft toothbrush and electric razor',
            'Strict hand hygiene by ALL persons entering the room',
            'DVT precautions with sequential compression devices'
          ],
          correct: 2,
          rationale: 'With an ANC of 200 (severe neutropenia), infection prevention is the HIGHEST priority, and hand hygiene is the SINGLE most effective infection prevention measure. The patient is critically immunocompromised. While other precautions may be appropriate for other conditions, preventing infection is life-or-death in severe neutropenia.'
        }
      ],
      y: [
        {
          stem: 'A neutropenic patient\'s family brings fresh flowers to the hospital room. Which action should the nurse take?',
          options: [
            'Place the flowers on the windowsill away from the patient.',
            'Remove the flowers from the room and explain they can harbor mold and bacteria.',
            'Allow the flowers but change the water daily.',
            'Place the flowers in a sealed container near the door.'
          ],
          correct: 1,
          rationale: 'Fresh flowers and live plants are prohibited in neutropenic patients\' rooms because standing water and soil harbor bacteria and mold (especially Aspergillus), which can cause life-threatening infections in immunocompromised patients. The nurse should kindly remove them and explain the rationale to the family.'
        },
        {
          stem: 'Which diet restriction applies to a neutropenic patient?',
          options: [
            'Low sodium, low potassium diet',
            'No raw fruits, raw vegetables, or uncooked foods',
            'High protein, high calorie diet only',
            'Clear liquid diet until WBC recovers'
          ],
          correct: 1,
          rationale: 'Neutropenic patients should avoid raw/uncooked foods (raw fruits, raw vegetables, sushi, rare meat, unpasteurized dairy) because these can harbor bacteria that the patient cannot fight. Cooked foods are safe. This is called a neutropenic or low-microbial diet.'
        }
      ],
      r: [
        {
          stem: 'In a neutropenic patient, fever is significant because it may be:',
          options: [
            'A normal response to chemotherapy with no clinical concern',
            'The first and possibly ONLY sign of a life-threatening infection',
            'An indication that the bone marrow is recovering',
            'A sign of dehydration requiring oral fluids'
          ],
          correct: 1,
          rationale: 'In neutropenic patients, fever may be the FIRST and ONLY sign of infection because the patient lacks adequate neutrophils to mount a typical inflammatory response (no pus formation, no localized swelling). Fever in neutropenia is a medical emergency requiring immediate cultures and antibiotics.'
        }
      ]
    }
  },

  'Infectious Mononucleosis (EBV)': {
    details: [
      'Caused by Epstein-Barr virus (EBV) — a B-lymphocyte tropic herpesvirus',
      'Transmitted through saliva ("kissing disease"); most common in adolescents and young adults',
      'Signs: fever, generalized lymphadenopathy, sore throat, fatigue, atypical lymphocytes on blood smear',
      'Treatment: symptomatic and supportive — no specific antiviral; rest and fluids',
      'CRITICAL: avoid contact sports due to risk of SPLENIC RUPTURE if splenomegaly present'
    ],
    questions: {
      g: [
        {
          stem: 'A college student diagnosed with infectious mononucleosis and splenomegaly asks the nurse when they can return to playing football. Which response is MOST appropriate?',
          options: [
            '"You can return to sports once your fever resolves."',
            '"Contact sports must be avoided until your spleen returns to normal size due to the risk of splenic rupture."',
            '"You can play with a protective abdominal guard."',
            '"Mild exercise like football is fine as long as you stay hydrated."'
          ],
          correct: 1,
          rationale: 'Patients with mononucleosis and splenomegaly MUST avoid contact sports due to the risk of splenic rupture, which is a life-threatening emergency. The spleen is enlarged and fragile. Return to sports should not occur until the spleen has returned to normal size, confirmed by the provider. Protective equipment is not sufficient.'
        },
        {
          stem: 'A nurse is reviewing labs on a patient suspected of having infectious mononucleosis. Which finding is MOST characteristic?',
          options: [
            'Elevated neutrophil count with left shift',
            'Atypical lymphocytes on peripheral blood smear',
            'Thrombocytopenia with prolonged bleeding time',
            'Elevated reticulocyte count with low haptoglobin'
          ],
          correct: 1,
          rationale: 'Atypical lymphocytes on peripheral blood smear are the hallmark lab finding of infectious mononucleosis (EBV infection). These are reactive T lymphocytes responding to EBV-infected B cells. Elevated neutrophils suggest bacterial infection. Thrombocytopenia suggests ITP or DIC. Elevated reticulocytes with low haptoglobin suggest hemolytic anemia.'
        }
      ],
      y: [
        {
          stem: 'Which mode of transmission is associated with infectious mononucleosis?',
          options: [
            'Fecal-oral route',
            'Contact with saliva (kissing disease)',
            'Airborne droplet nuclei',
            'Blood transfusion'
          ],
          correct: 1,
          rationale: 'EBV (the cause of infectious mononucleosis) is transmitted primarily through saliva, earning it the nickname "kissing disease." It most commonly affects adolescents and young adults. It is not transmitted fecal-orally, by airborne route, or typically by blood transfusion.'
        },
        {
          stem: 'What is the primary treatment for infectious mononucleosis?',
          options: [
            'Antiviral medication (acyclovir)',
            'Antibiotics for the sore throat',
            'Supportive care with rest and fluids',
            'Corticosteroids to reduce lymph node swelling'
          ],
          correct: 2,
          rationale: 'Treatment for mononucleosis is symptomatic and supportive: rest, adequate fluids, and antipyretics for fever/discomfort. There is no specific antiviral that treats EBV effectively. Antibiotics are not indicated (viral, not bacterial). Corticosteroids may be used in severe cases but are not first-line treatment.'
        }
      ],
      r: [
        {
          stem: 'Infectious mononucleosis is caused by:',
          options: [
            'Group A Streptococcus',
            'Epstein-Barr virus (EBV)',
            'Cytomegalovirus (CMV)',
            'Human immunodeficiency virus (HIV)'
          ],
          correct: 1,
          rationale: 'Infectious mononucleosis is caused by the Epstein-Barr virus (EBV), a herpesvirus that infects B lymphocytes. It is transmitted through saliva and most commonly affects adolescents and young adults. While CMV can cause a mono-like illness, EBV is the classic cause.'
        }
      ]
    }
  },

  'Hodgkin Disease': {
    details: [
      'Originates from a single lymph node or chain; spreads in a CONTIGUOUS (orderly) pattern',
      'Diagnosed by presence of REED-STERNBERG cells on lymph node BIOPSY (pathognomonic)',
      'B symptoms (40% of patients): fever, night sweats, weight loss >10%, pruritus',
      'Treatment: radiation + chemotherapy; highly curable especially in early stages',
      'CSF exam is NOT done for Hodgkin (unlike NHL)'
    ],
    questions: {
      g: [
        {
          stem: 'A patient has a lymph node biopsy showing large binucleated cells with prominent nucleoli. The nurse recognizes these as:',
          options: [
            'Blast cells consistent with acute leukemia',
            'Reed-Sternberg cells diagnostic of Hodgkin disease',
            'Atypical lymphocytes consistent with EBV infection',
            'Plasma cells consistent with multiple myeloma'
          ],
          correct: 1,
          rationale: 'Reed-Sternberg cells are the pathognomonic (definitive diagnostic) finding for Hodgkin disease. They are large, binucleated cells of B lymphocyte origin found on lymph node biopsy. Blast cells indicate leukemia. Atypical lymphocytes suggest mono. Plasma cells suggest myeloma.'
        },
        {
          stem: 'A patient newly diagnosed with Hodgkin disease reports drenching night sweats, unintentional 15-pound weight loss, and intermittent fevers. The nurse documents these as:',
          options: [
            'Side effects of the disease treatment',
            'B symptoms indicating more advanced disease and worse prognosis',
            'Signs of a concurrent bacterial infection',
            'Normal findings in patients with lymphadenopathy'
          ],
          correct: 1,
          rationale: 'Fever, night sweats, and weight loss >10% body weight are called "B symptoms" in Hodgkin disease. They are present in ~40% of patients and indicate more advanced or aggressive disease with a worse prognosis. These are not treatment side effects (treatment hasn\'t started) or signs of infection — they are directly caused by the lymphoma.'
        }
      ],
      y: [
        {
          stem: 'Which characteristic distinguishes Hodgkin disease from non-Hodgkin lymphoma?',
          options: [
            'Hodgkin disease starts in extranodal sites.',
            'Hodgkin disease contains Reed-Sternberg cells and spreads in a contiguous pattern.',
            'Hodgkin disease requires CSF examination for diagnosis.',
            'Hodgkin disease is treated only with monoclonal antibodies.'
          ],
          correct: 1,
          rationale: 'Hodgkin disease is distinguished by Reed-Sternberg cells on biopsy and contiguous (orderly) spread from one lymph node group to the next. NHL starts in extranodal sites, spreads non-contiguously, and does NOT have Reed-Sternberg cells. CSF exam is done for NHL, not Hodgkin. NHL uses monoclonal antibodies in treatment.'
        },
        {
          stem: 'The definitive diagnostic test for Hodgkin disease is:',
          options: [
            'CT scan of the chest and abdomen',
            'Complete blood count with differential',
            'Lymph node biopsy showing Reed-Sternberg cells',
            'PET scan showing areas of increased uptake'
          ],
          correct: 2,
          rationale: 'Lymph node biopsy showing Reed-Sternberg cells is the gold standard for diagnosing Hodgkin disease. CT and PET scans are used for staging but not diagnosis. CBC may show abnormalities but is not diagnostic. The biopsy provides the definitive tissue diagnosis.'
        }
      ],
      r: [
        {
          stem: 'Hodgkin disease typically spreads in which pattern?',
          options: [
            'Random spread to distant organs',
            'Contiguous (orderly) spread from one lymph node group to the next',
            'Direct invasion through the bloodstream',
            'Non-contiguous spread to extranodal sites'
          ],
          correct: 1,
          rationale: 'Hodgkin disease characteristically spreads in a contiguous (orderly) pattern — from one lymph node group to adjacent lymph node groups in a predictable sequence. This is a key distinction from non-Hodgkin lymphoma, which spreads non-contiguously.'
        }
      ]
    }
  },

  'Non-Hodgkin Lymphoma (NHL)': {
    details: [
      'Originates from EXTRANODAL sites; spreads in a NON-CONTIGUOUS pattern (unlike Hodgkin)',
      'Reed-Sternberg cells are ABSENT — key difference from Hodgkin disease',
      'Treatment includes radiation + chemotherapy + MONOCLONAL ANTIBODIES (e.g., rituximab)',
      'CSF examination IS performed for NHL (unlike Hodgkin)',
      'More common than Hodgkin disease; can involve any organ'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with non-Hodgkin lymphoma is started on rituximab. The nurse understands this medication works by:',
          options: [
            'Blocking DNA replication in rapidly dividing cells',
            'Targeting and destroying CD20-positive B lymphocytes',
            'Suppressing the production of all white blood cells from bone marrow',
            'Stimulating the patient\'s T cells to attack cancer cells'
          ],
          correct: 1,
          rationale: 'Rituximab is a monoclonal antibody that targets CD20, a protein found on the surface of B lymphocytes. It marks these cells for destruction by the immune system. This is a key difference in NHL treatment compared to Hodgkin disease, which does not use monoclonal antibodies as a primary treatment.'
        },
        {
          stem: 'A nurse is differentiating NHL from Hodgkin disease. Which finding is unique to NHL?',
          options: [
            'Reed-Sternberg cells on biopsy',
            'B symptoms including night sweats and fever',
            'Extranodal origin with non-contiguous spread',
            'Contiguous spread along lymph node chains'
          ],
          correct: 2,
          rationale: 'NHL originates from extranodal sites and spreads in a non-contiguous (unpredictable) pattern — unlike Hodgkin, which starts in a single node and spreads contiguously. Reed-Sternberg cells are found in Hodgkin disease (absent in NHL). B symptoms can occur in both types. Contiguous spread is characteristic of Hodgkin.'
        }
      ],
      y: [
        {
          stem: 'Which diagnostic test is performed for non-Hodgkin lymphoma but NOT for Hodgkin disease?',
          options: [
            'Lymph node biopsy',
            'PET/CT scan',
            'CSF (cerebrospinal fluid) examination',
            'Complete blood count with differential'
          ],
          correct: 2,
          rationale: 'CSF examination is performed for NHL to check for CNS involvement, but is NOT done for Hodgkin disease. Both conditions use lymph node biopsy, PET/CT, and CBC in their workup. NHL can involve the CNS, making CSF analysis important.'
        },
        {
          stem: 'Which statement about non-Hodgkin lymphoma is correct?',
          options: [
            'It is less common than Hodgkin disease.',
            'It contains Reed-Sternberg cells on biopsy.',
            'It spreads in a predictable, contiguous pattern.',
            'It is more common than Hodgkin disease and can involve any organ.'
          ],
          correct: 3,
          rationale: 'NHL is more common than Hodgkin disease and can involve virtually any organ due to its non-contiguous spread pattern. Reed-Sternberg cells are ABSENT in NHL (present in Hodgkin). NHL spreads unpredictably, not contiguously.'
        }
      ],
      r: [
        {
          stem: 'Which type of therapy is used for non-Hodgkin lymphoma but typically NOT for Hodgkin disease?',
          options: [
            'Radiation therapy',
            'Chemotherapy',
            'Monoclonal antibody therapy (e.g., rituximab)',
            'Bone marrow transplant'
          ],
          correct: 2,
          rationale: 'Monoclonal antibodies such as rituximab are a hallmark of NHL treatment. Hodgkin disease is primarily treated with radiation and chemotherapy. While radiation, chemotherapy, and bone marrow transplant can be used in both conditions, monoclonal antibodies are a distinguishing feature of NHL treatment.'
        }
      ]
    }
  },

  'Tumor Lysis Syndrome (TLS)': {
    details: [
      'Occurs when large numbers of cancer cells die rapidly (often after starting chemotherapy)',
      'Electrolyte emergency: hyperkalemia (HIGH K+), hyperphosphatemia, hypocalcemia (LOW Ca²+), hyperuricemia',
      'Hyperkalemia is the most dangerous — can cause fatal cardiac arrhythmias',
      'Prevention: aggressive IV hydration + allopurinol (or rasburicase — check G6PD first!)',
      'Nursing: monitor electrolytes q4-6h, telemetry monitoring, strict I&O'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with acute leukemia begins chemotherapy. Two days later, labs show: K+ 6.8 mEq/L, phosphate 7.2 mg/dL, calcium 7.0 mg/dL, uric acid 12 mg/dL. Which action is the HIGHEST priority?',
          options: [
            'Administer allopurinol for elevated uric acid.',
            'Assess the EKG for cardiac arrhythmias related to hyperkalemia.',
            'Administer calcium gluconate for hypocalcemia.',
            'Increase IV fluids to flush phosphate.'
          ],
          correct: 1,
          rationale: 'Hyperkalemia (K+ 6.8) is the most immediately life-threatening component of TLS because it can cause fatal cardiac arrhythmias. The FIRST action is to assess the EKG for peaked T waves, widened QRS, or sine wave pattern. Then treat emergently (calcium gluconate to stabilize myocardium, insulin/dextrose, kayexalate). All other electrolyte abnormalities need treatment, but hyperkalemia kills first.'
        },
        {
          stem: 'A nurse is preparing to administer rasburicase to a patient with tumor lysis syndrome. Which assessment must be completed BEFORE administration?',
          options: [
            'Serum potassium level',
            'G6PD (glucose-6-phosphate dehydrogenase) status',
            'Prothrombin time (PT/INR)',
            'Blood type and crossmatch'
          ],
          correct: 1,
          rationale: 'G6PD status MUST be checked before giving rasburicase because it causes severe hemolytic anemia in G6PD-deficient patients. Rasburicase converts uric acid to allantoin (treating hyperuricemia in TLS) but generates hydrogen peroxide as a byproduct, which G6PD-deficient RBCs cannot neutralize. Allopurinol is the alternative for G6PD-deficient patients.'
        }
      ],
      y: [
        {
          stem: 'Which electrolyte pattern is characteristic of tumor lysis syndrome?',
          options: [
            'Hyperkalemia, hyperphosphatemia, hypocalcemia, hyperuricemia',
            'Hypokalemia, hypophosphatemia, hypercalcemia, hypouricemia',
            'Hypernatremia, hyperkalemia, hypercalcemia, elevated BUN',
            'Hyponatremia, hypokalemia, hypocalcemia, elevated creatinine'
          ],
          correct: 0,
          rationale: 'TLS causes: hyperKalemia (K+ released from dying cells), hyperPhosphatemia (phosphate released), hypOcalcemia (calcium binds to excess phosphate), and hyperUricemia (nucleic acid breakdown). Remember: everything released from cells goes UP (K+, phosphate, uric acid), and calcium goes DOWN (binds to phosphate).'
        },
        {
          stem: 'Which medication is used to PREVENT tumor lysis syndrome before starting chemotherapy?',
          options: [
            'Calcium gluconate',
            'Allopurinol',
            'Potassium chloride',
            'Sodium bicarbonate'
          ],
          correct: 1,
          rationale: 'Allopurinol is given prophylactically before chemotherapy to prevent hyperuricemia in TLS. It inhibits xanthine oxidase, blocking uric acid formation from the nucleic acids released by dying cancer cells. Combined with aggressive IV hydration, it is standard TLS prevention. Calcium gluconate treats hypocalcemia, not prevention.'
        }
      ],
      r: [
        {
          stem: 'Tumor lysis syndrome most commonly occurs after:',
          options: [
            'Blood transfusion',
            'Starting chemotherapy',
            'Prolonged bed rest',
            'Antibiotic administration'
          ],
          correct: 1,
          rationale: 'TLS occurs when large numbers of cancer cells are destroyed rapidly, most commonly after starting chemotherapy (especially for leukemia and lymphoma with high tumor burden). The intracellular contents flood the bloodstream, causing dangerous electrolyte imbalances.'
        }
      ]
    }
  },

  'Multiple Myeloma': {
    details: [
      'Plasma cell cancer — single clone of immunoglobulin-producing plasma cells expands in bone marrow',
      'M-protein (monoclonal immunoglobulin) elevated in serum — diagnostic marker',
      'Bone destruction causes: pathologic fractures, bone pain (especially back), hypercalcemia',
      'Complications: renal failure (light chain deposition), recurrent infections (normal immunoglobulins suppressed)',
      'Classic triad: bone pain + anemia + recurrent infections; "punched-out" lytic lesions on skeletal X-ray'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with multiple myeloma reports severe back pain and the nurse notes a serum calcium of 12.8 mg/dL. The nurse understands these findings are related because:',
          options: [
            'The cancer has metastasized to the spinal cord.',
            'Myeloma cells activate osteoclasts, causing bone destruction that releases calcium into the blood.',
            'The patient has developed secondary hyperparathyroidism.',
            'Chemotherapy has caused osteoporosis.'
          ],
          correct: 1,
          rationale: 'In multiple myeloma, malignant plasma cells in the bone marrow activate osteoclasts, leading to bone resorption and destruction. This releases calcium into the blood (hypercalcemia) and causes pathologic fractures with bone pain. The back pain is from vertebral bone destruction. This is a direct effect of the disease, not metastasis or hyperparathyroidism.'
        },
        {
          stem: 'A nurse is planning care for a patient with multiple myeloma. Which intervention is MOST important for preventing complications?',
          options: [
            'Encouraging weight-bearing exercise to strengthen bones',
            'Maintaining adequate hydration to prevent renal damage',
            'Restricting calcium intake to prevent hypercalcemia',
            'Administering iron supplements to treat anemia'
          ],
          correct: 1,
          rationale: 'Adequate hydration is critical in multiple myeloma to prevent renal failure from light chain (Bence Jones protein) deposition in the kidneys. Dehydration concentrates these proteins and accelerates kidney damage. Weight-bearing exercise is risky due to pathologic fracture risk. Dietary calcium restriction does not significantly affect hypercalcemia from bone destruction. Anemia in myeloma is from marrow crowding, not iron deficiency.'
        }
      ],
      y: [
        {
          stem: 'Which lab finding is a diagnostic marker for multiple myeloma?',
          options: [
            'Reed-Sternberg cells on biopsy',
            'Philadelphia chromosome (BCR-ABL)',
            'M-protein (monoclonal immunoglobulin) in serum',
            'Atypical lymphocytes on blood smear'
          ],
          correct: 2,
          rationale: 'M-protein (monoclonal immunoglobulin) in the serum is the characteristic marker of multiple myeloma. It is produced by the single clone of malignant plasma cells. Reed-Sternberg cells indicate Hodgkin disease. Philadelphia chromosome indicates CML. Atypical lymphocytes suggest mono.'
        },
        {
          stem: 'Which X-ray finding is characteristic of multiple myeloma?',
          options: [
            'Pathologic fractures with new bone formation',
            '"Punched-out" lytic lesions in the skull and long bones',
            'Diffuse osteoporosis without focal lesions',
            'Calcified nodules in the lungs'
          ],
          correct: 1,
          rationale: '"Punched-out" lytic lesions on skeletal X-ray are characteristic of multiple myeloma. These discrete areas of bone destruction result from osteoclast activation by myeloma cells. Unlike metastatic bone disease, myeloma lesions are purely lytic (destructive) without new bone formation (blastic activity).'
        }
      ],
      r: [
        {
          stem: 'The classic presentation of multiple myeloma includes:',
          options: [
            'Painless lymphadenopathy and night sweats',
            'Bone pain, anemia, and recurrent infections',
            'Petechiae, purpura, and easy bruising',
            'Fever, rash, and joint pain'
          ],
          correct: 1,
          rationale: 'The classic triad of multiple myeloma is bone pain (especially back pain from vertebral destruction), anemia (marrow crowding by plasma cells), and recurrent infections (normal immunoglobulins suppressed). Painless lymphadenopathy suggests lymphoma. Petechiae suggest thrombocytopenia/ITP.'
        }
      ]
    }
  },

  'Hemophilia A & B': {
    details: [
      'Hemophilia A: Factor VIII deficiency (most common); Hemophilia B (Christmas disease): Factor IX deficiency',
      'Both are X-linked recessive — primarily affects males; females are carriers',
      'Manifests as prolonged bleeding, hemarthrosis (bleeding into joints), deep tissue bleeding',
      'Treatment: Factor VIII concentrates (Hemophilia A) or Factor IX concentrates (Hemophilia B); cryoprecipitate also contains Factor VIII',
      'Monitor aPTT (intrinsic pathway affected); PT/INR is typically normal'
    ],
    questions: {
      g: [
        {
          stem: 'A male patient with hemophilia A develops acute hemarthrosis of the knee. Which intervention is the PRIORITY?',
          options: [
            'Apply heat to the joint and encourage range of motion exercises.',
            'Administer Factor VIII concentrate and immobilize the affected joint.',
            'Administer aspirin for pain management.',
            'Perform joint aspiration to remove the blood.'
          ],
          correct: 1,
          rationale: 'For acute hemarthrosis in hemophilia A, the priority is Factor VIII replacement to stop the bleeding, followed by immobilization (RICE: rest, ice, compression, elevation). Heat and ROM exercises would increase bleeding. Aspirin is CONTRAINDICATED (antiplatelet effect worsens bleeding). Joint aspiration is not first-line and risks further bleeding.'
        },
        {
          stem: 'A nurse is reviewing coagulation studies on a patient with hemophilia A. Which lab pattern is expected?',
          options: [
            'Prolonged PT/INR with normal aPTT',
            'Prolonged aPTT with normal PT/INR',
            'Both PT and aPTT prolonged',
            'Normal PT and aPTT with low platelet count'
          ],
          correct: 1,
          rationale: 'Hemophilia A (Factor VIII deficiency) affects the INTRINSIC coagulation pathway, which is measured by aPTT. Therefore, aPTT is prolonged while PT/INR (extrinsic pathway) remains normal. Both prolonged would suggest DIC or severe liver disease. Low platelets with normal coagulation suggests thrombocytopenia, not hemophilia.'
        }
      ],
      y: [
        {
          stem: 'Hemophilia primarily affects which gender, and why?',
          options: [
            'Females, because it is autosomal dominant',
            'Males, because it is X-linked recessive and males have only one X chromosome',
            'Both genders equally, because it is autosomal recessive',
            'Males, because testosterone inhibits clotting factor production'
          ],
          correct: 1,
          rationale: 'Hemophilia is X-linked recessive. Males have only one X chromosome (XY), so one defective copy causes the disease. Females have two X chromosomes (XX) — they are typically carriers with the normal X compensating. A female would need two defective copies to have hemophilia, which is extremely rare.'
        },
        {
          stem: 'Which blood product contains Factor VIII and can be used in hemophilia A treatment?',
          options: [
            'Fresh frozen plasma (FFP)',
            'Platelets',
            'Cryoprecipitate',
            'Packed red blood cells (PRBCs)'
          ],
          correct: 2,
          rationale: 'Cryoprecipitate contains concentrated Factors VIII, XIII, von Willebrand factor, and fibrinogen. It can be used to treat hemophilia A (Factor VIII deficiency). While FFP also contains Factor VIII, cryoprecipitate has a higher concentration. Platelets and PRBCs do not contain clotting factors.'
        }
      ],
      r: [
        {
          stem: 'What is the deficient clotting factor in Hemophilia A?',
          options: [
            'Factor IX',
            'Factor VIII',
            'Factor XII',
            'Von Willebrand factor'
          ],
          correct: 1,
          rationale: 'Hemophilia A is caused by deficiency of Factor VIII (the most common hemophilia). Hemophilia B (Christmas disease) is Factor IX deficiency. Von Willebrand disease involves both Factor VIII and platelet function defects.'
        }
      ]
    }
  },

  'von Willebrand Disease': {
    details: [
      'Deficiency of BOTH Factor VIII AND von Willebrand factor — causes both clotting factor deficiency AND poor platelet function',
      'Most common inherited bleeding disorder (more common than hemophilia)',
      'Causes mucocutaneous bleeding: nosebleeds, heavy menstrual bleeding, easy bruising, prolonged bleeding from cuts',
      'Treatment: desmopressin (DDAVP) stimulates vWF release; Factor VIII/vWF concentrates for severe cases',
      'Unlike hemophilia, both bleeding time AND aPTT may be prolonged'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with von Willebrand disease is scheduled for a dental extraction. The provider orders desmopressin (DDAVP) before the procedure. The nurse understands this medication works by:',
          options: [
            'Directly replacing the missing von Willebrand factor.',
            'Stimulating the release of stored von Willebrand factor from endothelial cells.',
            'Inhibiting fibrinolysis to maintain clot stability.',
            'Activating the extrinsic coagulation pathway.'
          ],
          correct: 1,
          rationale: 'Desmopressin (DDAVP) stimulates the release of stored von Willebrand factor (vWF) from endothelial cells and increases Factor VIII levels. This provides temporary hemostasis for minor procedures. It does not directly replace vWF (that requires Factor VIII/vWF concentrates). DDAVP works for mild-to-moderate vWD but not severe cases.'
        },
        {
          stem: 'Which assessment finding differentiates von Willebrand disease from hemophilia A?',
          options: [
            'Hemarthrosis (joint bleeding) is common in both conditions equally.',
            'Von Willebrand disease causes mucocutaneous bleeding (nosebleeds, heavy periods), while hemophilia A causes deep tissue/joint bleeding.',
            'Hemophilia A affects both males and females equally.',
            'Von Willebrand disease only affects Factor IX.'
          ],
          correct: 1,
          rationale: 'Von Willebrand disease affects both vWF AND Factor VIII, causing mucocutaneous bleeding (nosebleeds, heavy menses, bruising, prolonged bleeding from cuts) because vWF is needed for platelet adhesion. Hemophilia A primarily causes deep tissue and joint bleeding (hemarthrosis). vWD is autosomal and affects both genders; hemophilia is X-linked (males).'
        }
      ],
      y: [
        {
          stem: 'Von Willebrand disease involves deficiency of which components?',
          options: [
            'Factor IX and platelets',
            'Factor VIII and von Willebrand factor',
            'Fibrinogen and Factor XIII',
            'Protein C and Protein S'
          ],
          correct: 1,
          rationale: 'Von Willebrand disease involves deficiency of BOTH von Willebrand factor (vWF) AND Factor VIII. vWF is needed for platelet adhesion to injured vessels, and it also carries/protects Factor VIII in the blood. This dual deficiency causes both platelet dysfunction AND coagulation factor deficiency.'
        },
        {
          stem: 'A patient with von Willebrand disease reports frequent nosebleeds and heavy menstrual periods. The nurse recognizes these as:',
          options: [
            'Signs of thrombocytopenia requiring platelet transfusion',
            'Typical mucocutaneous bleeding from impaired platelet adhesion and Factor VIII deficiency',
            'Symptoms of iron deficiency anemia',
            'Side effects of anticoagulant therapy'
          ],
          correct: 1,
          rationale: 'Mucocutaneous bleeding (nosebleeds, heavy menses, easy bruising, prolonged bleeding from cuts) is the hallmark of von Willebrand disease. VWF is needed for platelets to adhere to injured vessels, and its deficiency causes surface/mucosal bleeding. This is different from deep tissue bleeding seen in hemophilia.'
        }
      ],
      r: [
        {
          stem: 'Von Willebrand disease is the:',
          options: [
            'Most common inherited bleeding disorder',
            'Rarest bleeding disorder known',
            'Only bleeding disorder that affects women',
            'Same condition as hemophilia B'
          ],
          correct: 0,
          rationale: 'Von Willebrand disease is the MOST COMMON inherited bleeding disorder, more common than hemophilia. It is autosomal (affects both males and females), unlike hemophilia which is X-linked. It involves deficiency of vWF and Factor VIII.'
        }
      ]
    }
  },

  'DOACs': {
    details: [
      'Direct Oral Anticoagulants: rivaroxaban (Xarelto), apixaban (Eliquis), dabigatran (Pradaxa), edoxaban (Savaysa)',
      'Factor Xa inhibitors: rivaroxaban, apixaban, edoxaban; Direct thrombin inhibitor: dabigatran',
      'Advantages over warfarin: fixed dosing, no routine lab monitoring, fewer drug/food interactions, rapid onset',
      'Do NOT require INR monitoring (unlike warfarin) or aPTT monitoring (unlike heparin)',
      'Reversal agents: idarucizumab (Praxbind) for dabigatran; andexanet alfa (Andexxa) for Factor Xa inhibitors'
    ],
    questions: {
      g: [
        {
          stem: 'A patient on dabigatran (Pradaxa) is brought to the emergency department with a GI hemorrhage. Which reversal agent should the nurse anticipate?',
          options: [
            'Vitamin K (phytonadione)',
            'Protamine sulfate',
            'Idarucizumab (Praxbind)',
            'Fresh frozen plasma (FFP)'
          ],
          correct: 2,
          rationale: 'Idarucizumab (Praxbind) is the specific reversal agent for dabigatran (a direct thrombin inhibitor). Vitamin K reverses warfarin. Protamine sulfate reverses heparin. FFP replaces all clotting factors but is not the specific antidote for dabigatran. Knowing which reversal agent matches which anticoagulant is a critical NCLEX concept.'
        },
        {
          stem: 'A patient asks why they don\'t need regular blood tests while taking apixaban (Eliquis) like their neighbor on warfarin does. Which response is MOST accurate?',
          options: [
            '"Apixaban does not thin your blood, so monitoring isn\'t needed."',
            '"Apixaban has a predictable dose-response, so routine coagulation monitoring is not required."',
            '"Your blood tests are done once a year instead of monthly."',
            '"Apixaban only works when you have a clot, not all the time."'
          ],
          correct: 1,
          rationale: 'DOACs like apixaban have a predictable dose-response relationship (fixed dosing works consistently across patients), unlike warfarin which varies widely based on diet, genetics, and drug interactions. This eliminates the need for routine INR monitoring. Apixaban IS an anticoagulant that works continuously, not just during clots.'
        }
      ],
      y: [
        {
          stem: 'Which advantage do DOACs have over warfarin?',
          options: [
            'They are safer to use during pregnancy.',
            'They require weekly INR monitoring.',
            'They have fixed dosing with fewer food and drug interactions.',
            'They have specific antidotes while warfarin does not.'
          ],
          correct: 2,
          rationale: 'DOACs offer fixed dosing, no routine lab monitoring, rapid onset, and fewer drug/food interactions compared to warfarin. Warfarin requires regular INR monitoring and dietary consistency (vitamin K). DOACs are NOT safe in pregnancy. Both DOACs and warfarin have reversal agents.'
        },
        {
          stem: 'Which lab test is used to monitor the therapeutic effect of DOACs?',
          options: [
            'PT/INR',
            'aPTT',
            'Anti-Xa level',
            'Routine monitoring is not required'
          ],
          correct: 3,
          rationale: 'DOACs do NOT require routine coagulation monitoring — this is a major advantage over warfarin (PT/INR) and heparin (aPTT). Anti-Xa levels CAN be measured in emergencies but are not used for routine monitoring. The predictable pharmacokinetics of DOACs make routine monitoring unnecessary.'
        }
      ],
      r: [
        {
          stem: 'Which of the following is a direct oral anticoagulant (DOAC)?',
          options: [
            'Warfarin (Coumadin)',
            'Heparin',
            'Rivaroxaban (Xarelto)',
            'Enoxaparin (Lovenox)'
          ],
          correct: 2,
          rationale: 'Rivaroxaban (Xarelto) is a DOAC — specifically a Factor Xa inhibitor. Warfarin is a vitamin K antagonist. Heparin is an injectable anticoagulant (enhances antithrombin III). Enoxaparin is a low-molecular-weight heparin (LMWH). DOACs are oral agents with fixed dosing and no routine monitoring.'
        }
      ]
    }
  },

  'HIT (Heparin-Induced Thrombocytopenia)': {
    details: [
      'PARADOX: heparin (given to prevent clots) triggers antibodies that ACTIVATE platelets → platelet aggregation → NEW CLOTS form',
      'Platelet count drops 50%+ from baseline while patient develops new thrombus (DVT, PE, arterial clot)',
      'Typically occurs 5-10 days after starting heparin',
      'Action: STOP ALL heparin (including flushes and heparin-coated lines); use alternative anticoagulant (argatroban)',
      'Do NOT switch directly to warfarin alone — warfarin initially depletes Protein C, worsening clotting'
    ],
    questions: {
      g: [
        {
          stem: 'A patient on heparin therapy for 7 days has a platelet count that dropped from 280,000 to 120,000/mm³ and develops sudden leg swelling. The nurse suspects HIT. Which action is MOST important?',
          options: [
            'Increase the heparin dose to treat the new clot.',
            'Stop ALL heparin including IV flushes, and notify the provider for an alternative anticoagulant.',
            'Switch from heparin to warfarin immediately.',
            'Administer protamine sulfate to reverse the heparin.'
          ],
          correct: 1,
          rationale: 'In HIT, ALL heparin must be stopped immediately — including IV line flushes and heparin-coated catheters. An alternative anticoagulant (direct thrombin inhibitor like argatroban) is started. Increasing heparin would worsen clotting. Switching directly to warfarin is dangerous because warfarin initially depletes Protein C, which can worsen the hypercoagulable state. Protamine reverses heparin but does not treat the underlying antibody problem.'
        },
        {
          stem: 'A nurse is educating nursing students about HIT. Which statement BEST explains the paradox of this condition?',
          options: [
            '"HIT causes severe bleeding because platelets are consumed in the process."',
            '"In HIT, heparin triggers antibodies that activate platelets, causing clot formation despite low platelet counts."',
            '"HIT occurs because heparin destroys platelets directly, causing hemorrhage."',
            '"HIT happens when patients are allergic to heparin, causing anaphylaxis."'
          ],
          correct: 1,
          rationale: 'The paradox of HIT is that heparin (given to PREVENT clots) triggers formation of antibodies that ACTIVATE platelets, causing them to aggregate and form NEW clots — even though the platelet count drops. The danger in HIT is THROMBOSIS (clotting), not bleeding. HIT is not a simple allergy or direct destruction of platelets.'
        }
      ],
      y: [
        {
          stem: 'HIT should be suspected when a patient on heparin develops:',
          options: [
            'Elevated liver enzymes after 24 hours',
            'A platelet drop of 50% or more from baseline with a new blood clot after 5-10 days',
            'Severe nausea and vomiting after the first dose',
            'An aPTT that is below the therapeutic range'
          ],
          correct: 1,
          rationale: 'HIT is suspected when: (1) patient has been on heparin 5-10 days, (2) platelet count drops 50%+ from baseline, (3) a NEW thrombus develops despite heparin therapy, and (4) no other explanation for thrombocytopenia. The timing and combination of thrombocytopenia + new clot are the hallmarks.'
        },
        {
          stem: 'Why should warfarin NOT be started alone when HIT is diagnosed?',
          options: [
            'Warfarin interacts with heparin antibodies.',
            'Warfarin initially depletes Protein C, which can worsen the clotting in HIT.',
            'Warfarin takes too long to work (2-5 days) and the patient needs immediate treatment.',
            'Warfarin is contraindicated in all patients with low platelet counts.'
          ],
          correct: 1,
          rationale: 'Warfarin initially depletes Protein C (an anticoagulant protein) before depleting clotting factors, creating a brief period of INCREASED clotting risk. In HIT, where the patient already has pathologic clotting, this can be catastrophic — causing skin necrosis or limb gangrene. An alternative anticoagulant (argatroban) must be started first.'
        }
      ],
      r: [
        {
          stem: 'In HIT, the primary danger to the patient is:',
          options: [
            'Severe hemorrhage',
            'New blood clot formation (thrombosis)',
            'Anaphylactic shock',
            'Bone marrow failure'
          ],
          correct: 1,
          rationale: 'The primary danger in HIT is THROMBOSIS (new clot formation) — DVT, PE, arterial clots, stroke. Despite low platelet counts, the antibodies activate remaining platelets causing aggregation and clotting. The risk is clotting, NOT bleeding. This is the central paradox of HIT.'
        }
      ]
    }
  },

  'Antiplatelets': {
    details: [
      'Aspirin: irreversibly inhibits cyclooxygenase (COX) → blocks thromboxane A2 → prevents platelet aggregation for the LIFE of the platelet (7-10 days)',
      'Clopidogrel (Plavix): blocks ADP receptors on platelets → prevents platelet activation and aggregation',
      'Used for: prevention of MI, stroke, stent thrombosis; often combined ("dual antiplatelet therapy")',
      'Hold before surgery: aspirin 7-10 days; clopidogrel 5-7 days (irreversible effects)',
      'No specific reversal agent — platelet transfusion if life-threatening bleeding'
    ],
    questions: {
      g: [
        {
          stem: 'A patient on clopidogrel (Plavix) after coronary stent placement is scheduled for elective knee surgery. The nurse should anticipate which preoperative instruction?',
          options: [
            'Continue clopidogrel through the day of surgery.',
            'Discontinue clopidogrel 5-7 days before surgery per provider order.',
            'Switch to aspirin the day before surgery.',
            'Take a double dose of clopidogrel the morning of surgery to prevent stent thrombosis.'
          ],
          correct: 1,
          rationale: 'Clopidogrel irreversibly inhibits platelet function, so it must be stopped 5-7 days before elective surgery to allow new platelets to form. However, this decision must be made by the provider, balancing surgical bleeding risk against stent thrombosis risk. The nurse anticipates this but does not independently stop the medication.'
        },
        {
          stem: 'A patient taking daily aspirin for cardiovascular prevention develops a GI bleed. Why can\'t the antiplatelet effect be immediately reversed?',
          options: [
            'There is no antidote available for aspirin.',
            'Aspirin irreversibly inhibits platelets, so affected platelets cannot recover function; only new platelets will work normally.',
            'Aspirin permanently destroys all platelets in circulation.',
            'The GI bleed is unrelated to aspirin\'s antiplatelet effect.'
          ],
          correct: 1,
          rationale: 'Aspirin IRREVERSIBLY inhibits COX in platelets, blocking thromboxane A2 production for the entire lifespan of the platelet (7-10 days). Since platelets have no nucleus, they cannot synthesize new COX. The effect persists until NEW platelets are produced by the bone marrow. Aspirin does not destroy platelets — it disables their aggregation function.'
        }
      ],
      y: [
        {
          stem: 'What is the mechanism of action of aspirin as an antiplatelet agent?',
          options: [
            'It enhances antithrombin III activity.',
            'It irreversibly inhibits COX, blocking thromboxane A2 and preventing platelet aggregation.',
            'It blocks vitamin K-dependent clotting factor synthesis.',
            'It directly dissolves existing blood clots.'
          ],
          correct: 1,
          rationale: 'Aspirin irreversibly inhibits cyclooxygenase (COX), which blocks the production of thromboxane A2 — a potent platelet aggregator. This prevents platelets from clumping together. Antithrombin III enhancement is heparin\'s mechanism. Vitamin K blockade is warfarin. Clot dissolution is thrombolytics (tPA).'
        },
        {
          stem: 'A patient with a recent cardiac stent asks why they are taking both aspirin and clopidogrel. The nurse explains:',
          options: [
            '"Both medications dissolve clots that may form inside the stent."',
            '"Together they block two different pathways of platelet activation, providing stronger protection against stent thrombosis."',
            '"Aspirin prevents bleeding while clopidogrel prevents clotting."',
            '"One medication works during the day and the other works at night."'
          ],
          correct: 1,
          rationale: 'Dual antiplatelet therapy (aspirin + clopidogrel) blocks two different platelet activation pathways: aspirin inhibits COX/thromboxane, while clopidogrel blocks ADP receptors. Together, they provide more complete platelet inhibition to prevent stent thrombosis. Neither dissolves clots — that is the role of thrombolytics.'
        }
      ],
      r: [
        {
          stem: 'Antiplatelet medications like aspirin work by:',
          options: [
            'Dissolving existing blood clots',
            'Preventing platelets from clumping together',
            'Increasing the production of clotting factors',
            'Strengthening blood vessel walls'
          ],
          correct: 1,
          rationale: 'Antiplatelet medications prevent platelets from aggregating (clumping together), which is the first step in clot formation. They do NOT dissolve existing clots (that is thrombolytics). They do not affect clotting factor production or vessel walls.'
        }
      ]
    }
  },

  'Thrombolytics (Alteplase)': {
    details: [
      'Alteplase (tPA): converts plasminogen to plasmin, which dissolves fibrin clots — the only drug class that DISSOLVES existing clots',
      'Used for: acute MI (within 12 hours), acute ischemic stroke (within 3-4.5 hours), massive PE',
      'CRITICAL time window for stroke: must be given within 3-4.5 hours of symptom onset ("time is brain")',
      'Major risk: hemorrhage (intracranial bleeding is most feared); no specific antidote — aminocaproic acid may help',
      'Contraindications: active bleeding, recent surgery, history of hemorrhagic stroke, uncontrolled hypertension'
    ],
    questions: {
      g: [
        {
          stem: 'A patient presents to the ED at 2 hours after symptom onset with right-sided weakness and slurred speech. CT scan rules out hemorrhagic stroke. The nurse anticipates preparation for:',
          options: [
            'Heparin infusion for anticoagulation',
            'Alteplase (tPA) administration within the 3-4.5 hour window',
            'Emergency craniotomy',
            'Aspirin 325 mg and observation'
          ],
          correct: 1,
          rationale: 'For acute ischemic stroke, alteplase (tPA) must be given within 3-4.5 hours of symptom onset after hemorrhagic stroke is ruled out by CT. At 2 hours, the patient is within the treatment window. tPA dissolves the clot blocking cerebral blood flow. "Time is brain" — every minute of delay increases brain damage. Heparin is not used for acute stroke thrombolysis.'
        },
        {
          stem: 'A patient receiving alteplase for acute MI begins to have blood oozing from their IV sites and a severe headache. Which action should the nurse take FIRST?',
          options: [
            'Increase the alteplase infusion rate to dissolve the clot faster.',
            'Stop the alteplase infusion and notify the provider immediately.',
            'Apply pressure to the IV sites and continue the infusion.',
            'Administer protamine sulfate to reverse the alteplase.'
          ],
          correct: 1,
          rationale: 'Bleeding from IV sites combined with severe headache (possible intracranial hemorrhage) during tPA administration requires IMMEDIATE cessation of the drug. Intracranial hemorrhage is the most feared complication of thrombolytic therapy. The nurse must stop the infusion, notify the provider, and prepare for emergent head CT. Protamine reverses heparin, not alteplase. Aminocaproic acid (antifibrinolytic) may be used.'
        }
      ],
      y: [
        {
          stem: 'Which is the critical time window for administering alteplase (tPA) in acute ischemic stroke?',
          options: [
            'Within 1 hour of symptom onset',
            'Within 3-4.5 hours of symptom onset',
            'Within 12 hours of symptom onset',
            'Within 24 hours of symptom onset'
          ],
          correct: 1,
          rationale: 'Alteplase for acute ischemic stroke must be given within 3-4.5 hours of symptom onset. Beyond this window, the risk of hemorrhage outweighs the benefit. For acute MI, the window extends to 12 hours. "Time is brain" emphasizes the urgency of rapid treatment.'
        },
        {
          stem: 'Which is a contraindication for alteplase (tPA) administration?',
          options: [
            'Elevated blood glucose',
            'Active internal bleeding',
            'History of type 2 diabetes',
            'Mild hypertension (140/90)'
          ],
          correct: 1,
          rationale: 'Active internal bleeding is an absolute contraindication for tPA because the drug dissolves fibrin clots and would worsen hemorrhage. Other contraindications include recent surgery, hemorrhagic stroke, and uncontrolled severe hypertension. Diabetes and mild hypertension are not contraindications.'
        }
      ],
      r: [
        {
          stem: 'Alteplase (tPA) is unique among anticoagulants because it:',
          options: [
            'Prevents new clots from forming',
            'Dissolves existing blood clots',
            'Strengthens existing blood clots',
            'Increases platelet production'
          ],
          correct: 1,
          rationale: 'Alteplase is a thrombolytic (clot buster) — the ONLY drug class that actively dissolves existing blood clots by converting plasminogen to plasmin, which breaks down fibrin. Anticoagulants (heparin, warfarin) PREVENT new clots but do not dissolve existing ones. Antiplatelets prevent platelet aggregation.'
        }
      ]
    }
  },

  'Growth Factors': {
    details: [
      'Erythropoietin (EPO/Epoetin alfa): stimulates RBC production — used for CKD anemia, chemo-induced anemia',
      'Filgrastim (Neupogen/G-CSF): stimulates neutrophil production — used for chemotherapy-induced neutropenia',
      'Oprelvekin (Neumega/IL-11): stimulates platelet production — used for chemo-induced thrombocytopenia',
      'EPO risks: hypertension, thrombosis (from increased blood viscosity with more RBCs)',
      'Filgrastim SE: bone pain (from marrow expansion), fever, fatigue — given until ANC recovers'
    ],
    questions: {
      g: [
        {
          stem: 'A patient receiving chemotherapy has an ANC of 300/mm³ and the provider orders filgrastim (Neupogen). The patient reports severe bone pain after the first injection. The nurse should:',
          options: [
            'Hold the medication and report a possible allergic reaction.',
            'Recognize bone pain as an expected side effect from bone marrow stimulation and administer ordered analgesics.',
            'Discontinue filgrastim and switch to erythropoietin.',
            'Reduce the dose by half and monitor for improvement.'
          ],
          correct: 1,
          rationale: 'Bone pain is a common and expected side effect of filgrastim (G-CSF) caused by the stimulation and expansion of bone marrow to produce more neutrophils. It is managed with analgesics (acetaminophen, NSAIDs if not contraindicated) and is NOT a reason to stop the medication. Erythropoietin stimulates RBCs, not WBCs.'
        },
        {
          stem: 'A CKD patient on epoetin alfa (Procrit) has a hemoglobin that rose from 9.0 to 13.5 g/dL over 4 weeks. The nurse is MOST concerned about:',
          options: [
            'Iron deficiency from rapid RBC production',
            'Increased risk of thrombosis from over-correction of anemia',
            'Bone marrow suppression from prolonged EPO use',
            'Allergic reaction requiring drug discontinuation'
          ],
          correct: 1,
          rationale: 'Rapid over-correction of anemia with EPO increases the risk of thrombosis (blood clots), hypertension, and cardiovascular events. Target Hgb is generally 10-12 g/dL in CKD — going above 13 is dangerous. The dose should be reduced or held. While iron stores should also be monitored (EPO needs iron to work), thrombosis risk is the most urgent concern.'
        }
      ],
      y: [
        {
          stem: 'Which growth factor stimulates neutrophil production in patients with chemotherapy-induced neutropenia?',
          options: [
            'Epoetin alfa (Procrit)',
            'Oprelvekin (Neumega)',
            'Filgrastim (Neupogen)',
            'Iron dextran'
          ],
          correct: 2,
          rationale: 'Filgrastim (Neupogen/G-CSF) stimulates the bone marrow to produce neutrophils (white blood cells), used for chemotherapy-induced neutropenia. Epoetin alfa stimulates RBC production. Oprelvekin stimulates platelet production. Iron dextran replaces iron stores.'
        },
        {
          stem: 'A patient on erythropoietin therapy asks why their blood pressure is being monitored more closely. The nurse explains:',
          options: [
            '"EPO can lower your blood pressure to dangerous levels."',
            '"As your red blood cell count increases, blood becomes thicker, which can raise blood pressure."',
            '"EPO directly stimulates the heart to beat faster."',
            '"Blood pressure monitoring is routine and not related to your EPO."'
          ],
          correct: 1,
          rationale: 'As EPO increases RBC production, blood viscosity increases (thicker blood), which can raise blood pressure. Hypertension is a significant side effect of EPO therapy. Blood pressure should be monitored regularly, especially during dose titration. EPO does not directly affect heart rate.'
        }
      ],
      r: [
        {
          stem: 'Erythropoietin (EPO) stimulates the production of:',
          options: [
            'White blood cells',
            'Platelets',
            'Red blood cells',
            'Plasma proteins'
          ],
          correct: 2,
          rationale: 'Erythropoietin (EPO) specifically stimulates the bone marrow to produce red blood cells (erythropoiesis). It is used for anemia in CKD and chemotherapy-induced anemia. Filgrastim (G-CSF) stimulates WBCs. Oprelvekin (IL-11) stimulates platelets.'
        }
      ]
    }
  }

};

console.log('DRUG_DEEP_AH_HEMATOLOGY_V2 loaded:', Object.keys(window.DRUG_DEEP_AH_HEMATOLOGY_V2).length, 'topics');
