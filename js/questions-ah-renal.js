// ══════════════════════════════════════════════
// ADULT HEALTH — Renal & Urologic Questions
// Source: nurs327_exam3_renal_vA.js
// ══════════════════════════════════════════════

window.DRUG_DEEP_AH_RENAL = {

  'Acute Kidney Injury — Classification': {
    details: [
      'Three types: prerenal (before kidney), intrarenal (kidney itself), postrenal (after kidney)',
      'Prerenal: low blood flow — dehydration, hemorrhage, heart failure. Urine SG HIGH, urine Na LOW',
      'Intrarenal: kidney damage — ATN, nephrotoxins, glomerulonephritis. Urine SG LOW, urine Na HIGH',
      'Postrenal: obstruction — BPH, stones, tumor blocking outflow',
      'Key lab differentiator: urine sodium and specific gravity distinguish prerenal from intrarenal',
      'Treatment for prerenal: restore volume with IV fluids — kidneys are still working, just underperfused',
    ],
    questions: {
      g: [
        {
          stem: 'A patient admitted after 3 days of vomiting has: BP 88/52, HR 112, urine output 15 mL/hr, BUN 38, creatinine 2.4, urine SG 1.038, urine sodium 8 mEq/L. Which type of AKI does the nurse suspect?',
          options: [
            'Prerenal AKI from hypovolemia',
            'Intrarenal AKI from acute tubular necrosis',
            'Postrenal AKI from urinary obstruction',
            'Chronic kidney disease exacerbation',
          ],
          correct: 0,
          rationale: 'HIGH urine SG (1.038 = kidneys concentrating urine to conserve fluid) and LOW urine sodium (8 = kidneys reabsorbing sodium to retain volume) = the kidneys are WORKING but starved of blood flow. This is prerenal AKI from hypovolemia (vomiting x 3 days). In intrarenal AKI, damaged tubules CANNOT concentrate urine (low SG) or reabsorb sodium (high urine Na >20). No history suggests obstruction (postrenal). Acute onset with clear cause = AKI, not CKD.',
        },
        {
          stem: 'A patient\'s AKI progresses from oliguric to diuretic phase with urine output of 4 L/day. Which is the nurse\'s GREATEST concern during the diuresis phase?',
          options: [
            'Fluid overload and pulmonary edema',
            'Hyperkalemia and metabolic acidosis',
            'Dehydration and electrolyte imbalances from massive fluid loss',
            'Urinary tract infection from high urine output',
          ],
          correct: 2,
          rationale: 'The diuretic phase of AKI is when the kidneys begin recovering and produce large volumes of dilute urine (up to 3-5 L/day). The danger is DEHYDRATION and life-threatening electrolyte losses (hypokalemia, hyponatremia) as the kidneys cannot yet concentrate urine. The nurse must monitor I&O closely and replace fluids/electrolytes. Fluid overload and hyperkalemia are concerns during the oliguric phase, not the diuretic phase.',
        },
      ],
      y: [
        {
          stem: 'Which finding differentiates prerenal AKI from intrarenal AKI?',
          options: [
            'Prerenal has elevated BUN; intrarenal does not',
            'Prerenal has concentrated urine with low sodium; intrarenal has dilute urine with high sodium',
            'Prerenal occurs only in elderly patients; intrarenal occurs in young patients',
            'Prerenal is always caused by medications; intrarenal is caused by dehydration',
          ],
          correct: 1,
          rationale: 'The key lab differentiator: In prerenal AKI, functioning kidneys compensate for low blood flow by concentrating urine (HIGH specific gravity) and retaining sodium (LOW urine sodium <20). In intrarenal AKI, damaged tubules cannot concentrate or reabsorb sodium — urine is dilute (LOW SG) with HIGH urine sodium (>20). Both can have elevated BUN/creatinine. Prerenal is from poor perfusion; intrarenal is from direct kidney damage.',
        },
      ],
      r: [
        {
          stem: 'A patient with prerenal AKI from dehydration is started on IV normal saline. The nurse expects that with adequate fluid resuscitation:',
          options: [
            'The kidneys will not recover — dialysis is needed',
            'Urine output will increase as renal perfusion improves',
            'The patient will need a kidney transplant',
            'BUN and creatinine will continue to rise despite treatment',
          ],
          correct: 1,
          rationale: 'Prerenal AKI is the most reversible type — the kidneys themselves are healthy, just underperfused. When volume is restored with IV fluids, renal blood flow improves, and urine output increases. BUN and creatinine should begin to normalize. The key is early treatment before prolonged ischemia causes intrarenal damage (ATN). This is why distinguishing prerenal from intrarenal is clinically important.',
        },
      ],
    },
  },

  'Chronic Kidney Disease': {
    details: [
      'Progressive, irreversible loss of kidney function — staged by GFR (Stage 1-5)',
      'Stage 5 (ESRD): GFR <15 mL/min — requires dialysis or transplant',
      'Uremic syndrome: fatigue, nausea, pruritus, uremic frost, pericarditis, encephalopathy',
      'Electrolytes: HIGH potassium, HIGH phosphorus, LOW calcium, metabolic acidosis',
      'Anemia from decreased erythropoietin (EPO) production — treated with epoetin alfa',
      'Diet: restrict protein, potassium, phosphorus, sodium, and fluids',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with CKD Stage 3 has labs: K+ 5.8, PO4 6.2, Ca 7.8, bicarb 18. Which lab requires the MOST immediate action?',
          options: [
            'Potassium 5.8 mEq/L — risk of fatal cardiac arrhythmias',
            'Phosphorus 6.2 mg/dL — risk of renal osteodystrophy',
            'Calcium 7.8 mg/dL — risk of tetany',
            'Bicarbonate 18 mEq/L — metabolic acidosis',
          ],
          correct: 0,
          rationale: 'K+ 5.8 is critically elevated (normal 3.5-5.0) and can cause fatal arrhythmias (peaked T waves, widened QRS, V-fib). This requires STAT ECG, cardiac monitoring, and emergency treatment (IV calcium gluconate for cardiac protection, insulin + D50 to shift K+ intracellularly, kayexalate, or dialysis). The other abnormalities are expected in CKD and need treatment but are not immediately life-threatening like hyperkalemia.',
        },
        {
          stem: 'A patient with CKD is prescribed a nephrotoxic antibiotic. Which medication combination should the nurse QUESTION?',
          options: [
            'Erythropoietin + iron supplement',
            'Gentamicin + ibuprofen',
            'Calcium acetate + vitamin D supplement',
            'Sodium bicarbonate + furosemide',
          ],
          correct: 1,
          rationale: 'Gentamicin (aminoglycoside antibiotic) is nephrotoxic. Ibuprofen (NSAID) is ALSO nephrotoxic — it reduces renal blood flow by blocking prostaglandins. Combining two nephrotoxic agents in a patient with CKD dramatically increases the risk of acute kidney injury. The nurse should question this combination and suggest a non-nephrotoxic pain alternative (acetaminophen). Other nephrotoxins to avoid in CKD: IV contrast, ACE inhibitors (monitor closely), certain chemotherapy agents.',
        },
      ],
      y: [
        {
          stem: 'A patient with Stage 4 CKD (GFR 22) reports fatigue, nausea, and generalized itching, with yellowish-brown skin. Which finding is MOST characteristic of uremic syndrome?',
          options: [
            'Spider angiomas on the chest',
            'Uremic frost — white crystalline deposits on the skin',
            'Janeway lesions on the palms',
            'Erythema migrans with central clearing',
          ],
          correct: 1,
          rationale: 'Uremic frost occurs when BUN is extremely high and urea crystals deposit on the skin through sweat — a late sign of uremia in advanced CKD. The constellation of fatigue (anemia from low EPO), nausea (GI irritation), and pruritus (phosphate/uremia) fit uremic syndrome. Spider angiomas = liver disease. Janeway lesions = endocarditis. Erythema migrans = Lyme disease.',
        },
        {
          stem: 'A nurse is planning the diet for a patient with CKD. Which dietary modifications are appropriate?',
          options: [
            'High protein, high potassium, high phosphorus',
            'Restrict protein, potassium, phosphorus, sodium, and fluids',
            'No dietary restrictions needed until dialysis begins',
            'High sodium diet to replace renal sodium losses',
          ],
          correct: 1,
          rationale: 'CKD diet restricts: protein (reduces BUN), potassium (prevent hyperkalemia), phosphorus (prevent renal osteodystrophy), sodium (prevent fluid retention/HTN), and fluids (prevent overload). High-potassium foods to avoid: bananas, oranges, potatoes, tomatoes. Phosphorus binders (calcium acetate) taken WITH meals to bind dietary phosphorus.',
        },
      ],
      r: [
        {
          stem: 'A patient asks why they are so tired despite sleeping well. The nurse explains that CKD causes fatigue because:',
          options: [
            'The kidneys produce toxins that make you sleepy',
            'Damaged kidneys produce less erythropoietin, causing anemia',
            'CKD patients cannot absorb nutrients from food',
            'Kidney disease directly affects the brain\'s sleep center',
          ],
          correct: 1,
          rationale: 'Healthy kidneys produce erythropoietin (EPO), the hormone that stimulates red blood cell production in the bone marrow. In CKD, damaged kidneys produce less EPO, causing anemia (low hemoglobin → less oxygen delivery → fatigue). Treatment: synthetic EPO (epoetin alfa) injections + iron supplements if iron stores are low. This is one of the most common and earliest symptoms of CKD.',
        },
      ],
    },
  },

  'Hemodialysis — AV Fistula': {
    details: [
      'AV fistula: surgical connection between artery and vein — preferred long-term access',
      'Assess for thrill (palpable buzzing) and bruit (audible swishing) — indicates patency',
      'NO thrill + NO bruit = CLOTTED — emergency, report immediately',
      'NEVER: take BP, draw blood, or start IV on the fistula arm',
      'Maturation takes 2-3 months before use (AV graft: 2-3 weeks)',
      'Elevate arm post-surgery to reduce swelling; hand exercises strengthen the fistula',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with a left forearm AV fistula has absence of both bruit and thrill. Which action should the nurse take?',
          options: [
            'Document as a normal finding and reassess next shift',
            'Report to the provider IMMEDIATELY — fistula may be thrombosed',
            'Apply warm compresses to restore blood flow',
            'Take blood pressure on the left arm to check circulation',
          ],
          correct: 1,
          rationale: 'A patent AV fistula has a palpable thrill and audible bruit from turbulent blood flow. Absence of BOTH = thrombosis (clotted). This is an emergency — the patient\'s dialysis access is compromised. Report immediately for possible thrombectomy. NEVER take BP on the fistula arm (compression can damage it). Warm compresses will not dissolve a clot.',
        },
        {
          stem: 'A nurse is teaching a patient with a new AV fistula about self-care. Which instruction should the nurse include?',
          options: [
            '"Wear tight-fitting sleeves on the fistula arm to support it."',
            '"Do not let anyone take blood pressure, draw blood, or start an IV on the fistula arm."',
            '"You can use the fistula for dialysis immediately after surgery."',
            '"Sleep on the fistula arm to keep pressure on it."',
          ],
          correct: 1,
          rationale: 'The fistula arm must be protected from compression. No BP cuffs (can collapse the fistula), no blood draws (risk infection and damage), no IV starts (potential infiltration). Also avoid: tight clothing, jewelry, sleeping on the arm, carrying heavy objects with that arm. The fistula needs 2-3 months to mature before first use. Report any changes in thrill/bruit to the provider immediately.',
        },
      ],
      y: [
        {
          stem: 'A nurse assesses an AV fistula and feels a buzzing vibration over the site. This finding is called a:',
          options: [
            'Bruit — and it indicates the fistula is clotted',
            'Thrill — and it indicates the fistula is patent and functioning',
            'Crepitus — and it indicates air in the tissue',
            'Pulse — and it is not related to the fistula',
          ],
          correct: 1,
          rationale: 'A thrill is a palpable buzzing vibration felt over a patent AV fistula, caused by turbulent blood flow through the arteriovenous connection. A bruit is the AUDIBLE equivalent (heard with a stethoscope). Both indicate the fistula is working. Absence of thrill and bruit suggests clotting. These assessments should be performed every shift.',
        },
      ],
      r: [
        {
          stem: 'A patient with an AV fistula in the left arm needs blood pressure taken. The nurse should:',
          options: [
            'Take the blood pressure on the left arm since the fistula provides a strong pulse',
            'Take the blood pressure on the RIGHT arm — never use the fistula arm',
            'Take the blood pressure on the left leg instead',
            'Skip the blood pressure measurement entirely',
          ],
          correct: 1,
          rationale: 'NEVER take blood pressure on the arm with an AV fistula. The BP cuff compresses the vessel and can damage or thrombose the fistula. Always use the opposite arm. If both arms are unavailable (bilateral fistulas, which is rare), use the leg with an appropriately sized cuff. The fistula arm must be protected from any form of compression.',
        },
      ],
    },
  },

  'Peritoneal Dialysis': {
    details: [
      'Uses the peritoneal membrane as the dialysis filter — catheter in the abdomen',
      'Dialysate is instilled, dwells, then drains — toxins cross the peritoneal membrane',
      'Peritonitis: cloudy effluent is the #1 sign — fever, abdominal pain, rebound tenderness',
      'Strict aseptic technique for exchanges — most important nursing intervention',
      'Advantages: can be done at home, gentler hemodynamic changes than hemodialysis',
      'Monitor: cloudy effluent (infection), poor drainage (kinked catheter, constipation), weight gain (fluid retention)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on peritoneal dialysis reports abdominal pain and the effluent appears cloudy. Temperature is 100.8°F. The nurse suspects peritonitis. Which action is the PRIORITY?',
          options: [
            'Send a sample of the cloudy effluent for culture and Gram stain',
            'Discontinue peritoneal dialysis permanently and prepare for hemodialysis',
            'Administer oral antibiotics and instruct the patient to continue exchanges',
            'Apply warm compresses to the abdomen for comfort',
          ],
          correct: 0,
          rationale: 'Cloudy effluent + abdominal pain + fever = peritonitis until proven otherwise. The PRIORITY is collecting the effluent for culture and Gram stain to identify the causative organism and guide antibiotic therapy. Peritonitis does NOT automatically require switching to hemodialysis — most cases resolve with intraperitoneal antibiotics. The catheter may be preserved if infection responds to treatment. Oral antibiotics are not the preferred route — intraperitoneal is standard.',
        },
      ],
      y: [
        {
          stem: 'What is the MOST important nursing intervention to prevent peritonitis in a patient receiving peritoneal dialysis?',
          options: [
            'Administering prophylactic antibiotics before each exchange',
            'Using strict aseptic technique during all catheter connections and exchanges',
            'Restricting the patient\'s fluid intake to less than 500 mL/day',
            'Changing the peritoneal catheter every 30 days',
          ],
          correct: 1,
          rationale: 'Strict aseptic technique is the single most important intervention to prevent peritonitis. Touch contamination during catheter connections is the leading cause of peritonitis in PD patients. This includes: hand hygiene, mask use during exchanges, sterile technique for connections, and keeping the catheter exit site clean and dry. Prophylactic antibiotics are not routine. The catheter is not changed routinely.',
        },
      ],
      r: [
        {
          stem: 'The nurse notes cloudy peritoneal dialysis effluent. This finding is MOST concerning for:',
          options: [
            'Normal dialysis fluid after a dwell period',
            'Peritonitis — infection of the peritoneal cavity',
            'Adequate toxin removal during dialysis',
            'Dehydration from excessive fluid removal',
          ],
          correct: 1,
          rationale: 'Normal peritoneal dialysis effluent should be CLEAR to pale yellow. Cloudy effluent is the hallmark sign of peritonitis (infection of the peritoneal membrane). Other signs include abdominal pain, fever, and rebound tenderness. This requires immediate assessment, effluent culture, and likely intraperitoneal antibiotic therapy. Never ignore cloudy effluent — early treatment prevents catheter loss and serious complications.',
        },
      ],
    },
  },

  'Kidney Stones (Urolithiasis)': {
    details: [
      'Most common type: calcium oxalate stones (80%)',
      'Classic presentation: severe flank pain radiating to groin (renal colic), hematuria, nausea',
      'Pain is described as "worst pain ever" — colicky (comes and goes with ureteral spasm)',
      'Diagnosis: CT scan without contrast (gold standard), urinalysis shows hematuria',
      'Treatment: hydration (2-3 L/day), strain all urine, pain management, alpha-blockers for passage',
      'Prevention depends on stone type: limit oxalate foods for calcium oxalate, limit purines for uric acid',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with a 4mm ureteral stone is being managed conservatively. Which combination of interventions should the nurse anticipate?',
          options: [
            'Fluid restriction, bed rest, and ice packs to the flank',
            'IV fluids 2-3 L/day, strain all urine, NSAIDs or opioids for pain, tamsulosin (Flomax)',
            'Immediate surgical intervention for all stones',
            'Antibiotic therapy and urinary catheterization',
          ],
          correct: 1,
          rationale: 'Stones <5mm usually pass spontaneously. Conservative management: aggressive hydration (2-3 L/day to flush the stone), strain ALL urine (catch the stone for composition analysis), pain management (NSAIDs are first-line; opioids for severe pain), and tamsulosin (alpha-blocker that relaxes the ureter to facilitate passage). Fluid restriction would be harmful. Surgery is for stones >10mm or those causing obstruction/infection.',
        },
      ],
      y: [
        {
          stem: 'A patient presents with sudden severe left flank pain radiating to the groin, nausea, and hematuria. The nurse suspects:',
          options: [
            'Appendicitis',
            'Kidney stone (renal colic)',
            'Urinary tract infection',
            'Abdominal aortic aneurysm',
          ],
          correct: 1,
          rationale: 'The classic triad of renal colic: (1) sudden severe flank pain radiating to the groin (stone moving through ureter), (2) hematuria (stone scraping the ureteral lining), and (3) nausea/vomiting (from severe pain and shared nerve pathways). The pain is often described as the worst pain imaginable and is colicky (waxes and wanes with ureteral spasm).',
        },
      ],
      r: [
        {
          stem: 'A patient with kidney stones asks what they can do to prevent recurrence. The nurse should recommend:',
          options: [
            'Restrict fluid intake to reduce urine production',
            'Drink at least 2-3 liters of water daily to keep urine dilute',
            'Increase calcium and oxalate intake',
            'Avoid all physical activity',
          ],
          correct: 1,
          rationale: 'Adequate hydration (2-3 L/day) is the single most important prevention strategy for ALL types of kidney stones. Dilute urine prevents mineral concentration and crystal formation. Fluid restriction would concentrate the urine and INCREASE stone risk. Dietary modifications depend on stone composition (analyzed after straining). Activity does not cause stones.',
        },
      ],
    },
  },

  'Pyelonephritis': {
    details: [
      'Kidney infection — usually ascending from lower UTI',
      'Signs: fever, chills, flank pain (costovertebral angle tenderness), dysuria, pyuria',
      'CVA tenderness: pain with fist percussion over the kidney area — classic pyelonephritis finding',
      'Treatment: antibiotics (often fluoroquinolones or cephalosporins), hydration',
      'Can progress to urosepsis if untreated — monitor for signs of sepsis',
      'More common in women, pregnancy, urinary obstruction, catheter use',
    ],
    questions: {
      g: [
        {
          stem: 'A patient treated for pyelonephritis with IV antibiotics for 48 hours still has fever of 101.2°F and flank pain. The nurse should be MOST concerned about:',
          options: [
            'Normal antibiotic response — antibiotics take 5-7 days to work',
            'Development of a perinephric abscess or antibiotic resistance — notify provider',
            'The patient needs to switch to oral antibiotics',
            'The fever is from the IV site, not the kidney infection',
          ],
          correct: 1,
          rationale: 'Persistent fever and symptoms after 48-72 hours of appropriate IV antibiotics suggests treatment failure. Possible causes: perinephric abscess (walled-off infection requiring drainage), antibiotic resistance (need culture-guided therapy change), urinary obstruction (stone blocking drainage), or incorrect diagnosis. The provider should be notified for imaging (CT scan) and possible antibiotic adjustment. Antibiotics should show improvement within 48-72 hours.',
        },
      ],
      y: [
        {
          stem: 'Which assessment finding is MOST specific for pyelonephritis rather than a lower UTI?',
          options: [
            'Burning with urination (dysuria)',
            'Costovertebral angle (CVA) tenderness with fever',
            'Urinary frequency and urgency',
            'Cloudy, foul-smelling urine',
          ],
          correct: 1,
          rationale: 'CVA tenderness (pain with fist percussion over the flank/kidney area) combined with fever is the hallmark of pyelonephritis — it indicates the infection has ascended to the kidney. Lower UTI symptoms (dysuria, frequency, urgency, cloudy urine) can be present in both conditions, but flank pain with fever specifically indicates upper urinary tract involvement.',
        },
      ],
      r: [
        {
          stem: 'A patient diagnosed with pyelonephritis is prescribed a 14-day course of antibiotics. On day 5, the patient reports feeling much better and asks if they can stop the medication early. The nurse should advise:',
          options: [
            '"Yes, if you feel better, you can stop the antibiotics."',
            '"Complete the full 14-day course even if you feel better — stopping early can cause the infection to return or become antibiotic-resistant."',
            '"Switch to an over-the-counter UTI remedy instead."',
            '"Cut the dose in half for the remaining days."',
          ],
          correct: 1,
          rationale: 'Completing the full antibiotic course is essential for pyelonephritis. Feeling better does not mean the infection is fully eradicated — bacteria may still be present in the kidney tissue. Stopping early allows surviving bacteria to multiply and potentially develop antibiotic resistance, leading to a more difficult-to-treat recurrence. Pyelonephritis requires longer treatment (10-14 days) than simple lower UTIs (3-5 days).',
        },
      ],
    },
  },

};

console.log('DRUG_DEEP_AH_RENAL loaded:', Object.keys(window.DRUG_DEEP_AH_RENAL).length, 'topics with questions');
