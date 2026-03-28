// ══════════════════════════════════════════════
// ADULT HEALTH — RENAL V2 (Missing Conditions)
// 29 conditions × 5 questions = 145 questions
// Keys match exam3/renal.html name fields EXACTLY
// ══════════════════════════════════════════════

window.DRUG_DEEP_AH_RENAL_V2 = {

  'AKI Types': {
    details: [
      'Three types based on WHERE the problem is: Prerenal (before kidney), Intrarenal (inside kidney), Postrenal (after kidney)',
      'Prerenal: blood flow problem — reduced perfusion, kidney tissue NOT damaged yet, GFR improves with fluid',
      'Intrarenal: actual kidney tissue damage (ATN) — GFR does NOT improve with fluid restoration',
      'Postrenal: outflow obstruction — retrograde pressure damages nephrons; BOTH ureters must be blocked',
      'AKI = sudden decrease in kidney function measured by rising creatinine and falling GFR'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with AKI receives aggressive IV fluid resuscitation and GFR improves significantly. This response is MOST consistent with:',
          options: [
            'Intrarenal AKI from ATN',
            'Prerenal AKI — the kidney was underperfused but tissue was not yet damaged',
            'Postrenal AKI from obstruction',
            'Chronic kidney disease'
          ],
          correct: 1,
          rationale: 'Prerenal AKI is caused by decreased blood flow TO the kidneys. The kidney tissue is not damaged — it is just underperfused. When perfusion is restored (fluids, treat underlying cause), GFR improves. In intrarenal AKI (ATN), the tubules are damaged and GFR does NOT improve with fluids alone. This distinction guides treatment.'
        },
        {
          stem: 'A nurse is differentiating AKI types using urine sodium. Prerenal AKI shows LOW urine sodium while intrarenal ATN shows HIGH urine sodium. This is because:',
          options: [
            'Prerenal patients have a sodium-restricted diet.',
            'In prerenal AKI, intact tubules avidly reabsorb sodium to conserve volume; in ATN, damaged tubules cannot reabsorb sodium.',
            'Intrarenal patients receive more IV sodium.',
            'Urine sodium is the same in both conditions.'
          ],
          correct: 1,
          rationale: 'In prerenal AKI, the kidneys are functioning normally but underperfused — the intact tubules respond by aggressively reabsorbing sodium and water (trying to restore volume), resulting in LOW urine sodium. In ATN, the tubules are damaged and CANNOT reabsorb sodium, so it spills into the urine (HIGH urine sodium). This lab difference helps distinguish the two types.'
        }
      ],
      y: [
        {
          stem: 'Which are the THREE types of acute kidney injury?',
          options: [
            'Mild, moderate, and severe',
            'Prerenal, intrarenal, and postrenal',
            'Acute, subacute, and chronic',
            'Glomerular, tubular, and vascular'
          ],
          correct: 1,
          rationale: 'AKI is classified by WHERE the problem originates: Prerenal (before the kidney — perfusion problem), Intrarenal (inside the kidney — tissue damage), Postrenal (after the kidney — outflow obstruction). Each type has different causes, lab findings, and treatments.'
        },
        {
          stem: 'AKI is diagnosed primarily by:',
          options: [
            'Patient symptoms alone',
            'Rising serum creatinine and falling GFR',
            'Urine color changes',
            'Blood pressure changes'
          ],
          correct: 1,
          rationale: 'AKI is defined by a sudden increase in serum creatinine (reflecting waste accumulation) and a decrease in GFR (reflecting reduced filtration). These lab changes may precede symptoms. IMPORTANT: conventional markers (creatinine, BUN) may not manifest for 1-2 days after injury begins.'
        }
      ],
      r: [
        {
          stem: 'Prerenal AKI is caused by:',
          options: [
            'Kidney stone obstruction',
            'Decreased blood flow to the kidneys',
            'Nephrotoxic drugs',
            'Glomerulonephritis'
          ],
          correct: 1,
          rationale: 'Prerenal AKI results from decreased blood flow (perfusion) TO the kidneys — from hypovolemia, heart failure, hemorrhage, or sepsis. The kidney tissue is not yet damaged. Treatment: restore perfusion. Kidney stones cause postrenal. Nephrotoxic drugs and glomerulonephritis cause intrarenal.'
        }
      ]
    }
  },

  'Pre-renal AKI': {
    details: [
      'Caused by decreased blood flow TO the kidney: hypovolemia, hemorrhage, heart failure, sepsis, dehydration',
      'Kidney tissue is NOT damaged — just underperfused',
      'KEY: GFR improves when perfusion is restored (give fluids, treat underlying cause)',
      'Labs: LOW urine sodium (kidneys avidly reabsorb), concentrated urine, BUN:creatinine ratio >20:1',
      'Most common type of AKI in hospitalized patients'
    ],
    questions: {
      g: [
        {
          stem: 'A post-surgical patient has urine output of 15 mL/hr, BUN 42 mg/dL, creatinine 1.8 mg/dL (BUN:Cr ratio 23:1), and urine sodium of 8 mEq/L. These findings are MOST consistent with:',
          options: [
            'Intrarenal AKI from surgical nephrotoxins',
            'Prerenal AKI from hypovolemia — intact tubules are conserving sodium and water',
            'Postrenal AKI from catheter obstruction',
            'Chronic kidney disease'
          ],
          correct: 1,
          rationale: 'Low urine output, elevated BUN:Cr ratio >20:1, and very low urine sodium (8 mEq/L) = prerenal AKI. The kidneys are responding appropriately to reduced perfusion by reabsorbing sodium and water aggressively. This means the tubules are INTACT (not damaged). In ATN, urine sodium would be >20 and BUN:Cr ratio closer to 10:1. Post-surgical patients are at risk for hypovolemia.'
        },
        {
          stem: 'The MOST important initial treatment for prerenal AKI is:',
          options: [
            'Dialysis',
            'Restoring renal perfusion with IV fluids and treating the underlying cause',
            'Nephrotoxic drug administration',
            'Urinary catheter placement'
          ],
          correct: 1,
          rationale: 'Prerenal AKI is caused by insufficient blood flow. Treatment is to RESTORE perfusion: IV fluids for hypovolemia, vasopressors for septic shock, optimize cardiac output for heart failure. If treated early (before tubular damage occurs), kidney function recovers quickly. Dialysis is reserved for intrarenal AKI that does not respond to treatment.'
        }
      ],
      y: [
        {
          stem: 'Which condition is the MOST common cause of prerenal AKI?',
          options: [
            'Kidney stones',
            'Hypovolemia (dehydration, hemorrhage, fluid loss)',
            'Aminoglycoside use',
            'Autoimmune glomerulonephritis'
          ],
          correct: 1,
          rationale: 'Hypovolemia is the most common cause of prerenal AKI — from hemorrhage, severe dehydration, burns, excessive diuresis, or third-spacing. Any condition that reduces blood flow to the kidneys without directly damaging them causes prerenal AKI. Kidney stones cause postrenal. Aminoglycosides and glomerulonephritis cause intrarenal.'
        },
        {
          stem: 'In prerenal AKI, why is the BUN:creatinine ratio typically elevated (>20:1)?',
          options: [
            'The kidneys are producing excess creatinine.',
            'Reduced flow allows more urea (but not creatinine) to be reabsorbed by the tubules.',
            'BUN drops while creatinine rises.',
            'Both BUN and creatinine are equally elevated.'
          ],
          correct: 1,
          rationale: 'In prerenal states, slow tubular flow allows increased passive reabsorption of urea back into the blood, disproportionately elevating BUN compared to creatinine (which is not significantly reabsorbed). This creates a BUN:Cr ratio >20:1, which helps distinguish prerenal from intrarenal AKI (where the ratio is closer to 10-15:1).'
        }
      ],
      r: [
        {
          stem: 'Prerenal AKI is reversible if:',
          options: [
            'Dialysis is started immediately',
            'Renal perfusion is restored before tubular damage occurs',
            'Antibiotics are given within 24 hours',
            'The obstruction is removed'
          ],
          correct: 1,
          rationale: 'Prerenal AKI is reversible if perfusion is restored BEFORE the kidneys sustain actual tissue damage. Once ischemia persists long enough to cause ATN (intrarenal), the damage requires time to heal and may not be fully reversible. Early recognition and treatment are critical.'
        }
      ]
    }
  },

  'Intrarenal AKI': {
    details: [
      'Actual kidney tissue damage — most commonly acute tubular necrosis (ATN)',
      'Two sub-types: Ischemic ATN (prolonged prerenal → tissue death) and Nephrotoxic ATN (drugs, contrast dye)',
      'KEY: GFR does NOT improve with restoration of blood flow — tubules are already damaged',
      'Common nephrotoxins: aminoglycosides, NSAIDs, contrast dye (especially in elderly with low GFR), cisplatin',
      'Labs: HIGH urine sodium (>20, damaged tubules can\'t reabsorb), BUN:Cr ratio ~10:1'
    ],
    questions: {
      g: [
        {
          stem: 'An elderly patient receives IV contrast dye for a CT scan. Two days later, creatinine rises from 1.1 to 3.4 mg/dL. The nurse recognizes this as:',
          options: [
            'Normal response to contrast dye that will resolve spontaneously.',
            'Contrast-induced nephrotoxic ATN — a form of intrarenal AKI.',
            'Prerenal AKI from dehydration during the CT prep.',
            'Chronic kidney disease newly discovered.'
          ],
          correct: 1,
          rationale: 'Contrast-induced nephropathy is a form of nephrotoxic ATN (intrarenal AKI). The contrast dye causes renal vasoconstriction and direct tubular damage, especially in elderly patients with pre-existing reduced GFR. The creatinine rise typically occurs 1-3 days after contrast exposure. Prevention includes adequate hydration before and after contrast, using low-osmolar contrast, and holding nephrotoxic medications.'
        },
        {
          stem: 'A patient on gentamicin (aminoglycoside) develops AKI. Which lab finding differentiates this intrarenal AKI from prerenal?',
          options: [
            'Urine sodium <10 mEq/L',
            'Urine sodium >20 mEq/L — damaged tubules cannot reabsorb sodium',
            'BUN:Cr ratio >20:1',
            'Concentrated urine with high specific gravity'
          ],
          correct: 1,
          rationale: 'In intrarenal AKI (ATN), the damaged tubules cannot reabsorb sodium, so urine sodium is HIGH (>20 mEq/L). In prerenal AKI, intact tubules avidly reabsorb sodium (urine Na <10). High BUN:Cr ratio and concentrated urine suggest prerenal. Low specific gravity in ATN reflects the damaged tubules\' inability to concentrate urine. This lab distinction is a key exam concept.'
        }
      ],
      y: [
        {
          stem: 'Which medications are known nephrotoxins that can cause intrarenal AKI?',
          options: [
            'Acetaminophen and ibuprofen only',
            'Aminoglycosides, NSAIDs, contrast dye, and cisplatin',
            'Beta-blockers and ACE inhibitors only',
            'Antibiotics and antifungals only'
          ],
          correct: 1,
          rationale: 'Major nephrotoxins include: aminoglycosides (gentamicin, tobramycin), NSAIDs (reduce renal blood flow), IV contrast dye (especially in elderly/CKD), and cisplatin (chemotherapy). These drugs cause direct tubular damage (nephrotoxic ATN). Monitoring renal function during use of these drugs is essential.'
        },
        {
          stem: 'Why does GFR NOT improve with fluids in intrarenal AKI (ATN)?',
          options: [
            'The patient is fluid-overloaded already.',
            'The tubular cells are already damaged — restoring blood flow cannot fix dead/injured tissue.',
            'Fluids worsen the toxin exposure.',
            'GFR always improves with fluids in all types of AKI.'
          ],
          correct: 1,
          rationale: 'In intrarenal AKI, the tubular cells have been damaged (necrosis from ischemia or toxins). Unlike prerenal AKI where underperfused but intact kidneys respond to fluids, damaged tubules need TIME to regenerate. Fluids can\'t repair dead cells. This is the critical distinction that determines whether treatment is supportive (intrarenal) or restorative (prerenal).'
        }
      ],
      r: [
        {
          stem: 'The most common form of intrarenal AKI is:',
          options: [
            'Glomerulonephritis',
            'Acute tubular necrosis (ATN)',
            'Polycystic kidney disease',
            'Renal artery stenosis'
          ],
          correct: 1,
          rationale: 'Acute tubular necrosis (ATN) is the most common form of intrarenal AKI. It results from either ischemia (prolonged prerenal state) or nephrotoxin exposure. The tubular epithelial cells die, leading to loss of reabsorptive capacity and decreased GFR.'
        }
      ]
    }
  },

  'Post-renal AKI': {
    details: [
      'Caused by obstruction of urine OUTFLOW: kidney stones, BPH (most common in men), tumors, strictures',
      'BOTH ureters must be blocked to cause renal failure (one functioning kidney is sufficient)',
      'Exception: patient with only one kidney or pre-existing kidney damage',
      'Retrograde pressure backs up into nephrons → damages them if not relieved promptly',
      'Treatment: REMOVE the obstruction BEFORE permanent nephron damage occurs'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with a single kidney develops a ureteral stone. The nurse understands this patient is at HIGHER risk for AKI than a patient with two kidneys because:',
          options: [
            'Single kidneys are more susceptible to stone formation.',
            'Normally BOTH ureters must be blocked for renal failure, but with one kidney, a single obstruction can cause complete renal failure.',
            'The remaining kidney always has pre-existing damage.',
            'Stone composition is different in patients with one kidney.'
          ],
          correct: 1,
          rationale: 'Normally, postrenal AKI requires BOTH ureters to be obstructed because one functioning kidney can maintain adequate GFR. However, in a patient with a single kidney (or if the other kidney is already damaged), obstruction of the SOLE ureter causes complete renal failure. This makes prompt intervention critical.'
        },
        {
          stem: 'An elderly male patient presents with overflow incontinence, distended bladder, and rising creatinine. The MOST likely cause of postrenal AKI in this patient is:',
          options: [
            'Kidney stones in both ureters',
            'Benign prostatic hyperplasia (BPH) obstructing the bladder outlet',
            'Dehydration from inadequate fluid intake',
            'Nephrotoxic medication use'
          ],
          correct: 1,
          rationale: 'BPH is the MOST COMMON cause of postrenal obstruction in older men. The enlarged prostate compresses the urethra, preventing bladder emptying. Urine backs up → bladder distension → overflow incontinence → retrograde pressure to kidneys → AKI. Treatment: relieve the obstruction (catheterization, then address BPH). Bilateral ureteral stones are possible but much less common.'
        }
      ],
      y: [
        {
          stem: 'Postrenal AKI is caused by:',
          options: [
            'Decreased blood flow to the kidneys',
            'Obstruction of urine outflow from the kidneys',
            'Direct toxin damage to the tubules',
            'Autoimmune destruction of glomeruli'
          ],
          correct: 1,
          rationale: 'Postrenal AKI is caused by obstruction of urine outflow at any level: ureters (stones, tumors), bladder (neurogenic bladder), or urethra (BPH, strictures). The obstruction causes retrograde pressure that damages nephrons. Decreased blood flow = prerenal. Toxin damage = intrarenal.'
        },
        {
          stem: 'The priority treatment for postrenal AKI is:',
          options: [
            'Aggressive IV fluid resuscitation',
            'Removing the obstruction before permanent nephron damage',
            'Dialysis',
            'Nephrotoxic drug discontinuation'
          ],
          correct: 1,
          rationale: 'The priority in postrenal AKI is removing the obstruction as quickly as possible — before the retrograde pressure permanently damages the nephrons. This may involve catheterization (for BPH), ureteral stenting (for stones), or surgery. Fluids treat prerenal. Dialysis is for renal failure. Stopping drugs treats nephrotoxic ATN.'
        }
      ],
      r: [
        {
          stem: 'For postrenal AKI to cause renal failure, typically ____ must be obstructed.',
          options: [
            'One ureter',
            'Both ureters',
            'The renal artery',
            'The bladder sphincter'
          ],
          correct: 1,
          rationale: 'Both ureters must be obstructed to cause renal failure from postrenal AKI because one functioning kidney can maintain adequate GFR. The exception is a patient with only one kidney or one already-damaged kidney, where single-sided obstruction causes failure.'
        }
      ]
    }
  },

  'AKI Phase 1: Initiation': {
    details: [
      'Duration: hours to days from the precipitating event',
      'Starts with the ischemic or toxic insult until tubular injury actually occurs',
      'Window of opportunity to PREVENT injury if the cause is identified and treated quickly',
      'Clinical: nothing dramatic yet — may be clinically silent',
      'Intervention: identify and treat the cause (restore perfusion, stop nephrotoxins) before damage occurs'
    ],
    questions: {
      g: [
        {
          stem: 'A patient is admitted with sepsis and the nurse notices a slight rise in creatinine over 6 hours. The patient is in the initiation phase of AKI. Why is this the MOST critical time for intervention?',
          options: [
            'The patient needs immediate dialysis.',
            'This is the window to prevent tubular injury — once ATN develops, the damage is done.',
            'The patient needs diuretics to increase urine output.',
            'The creatinine rise is not significant and no action is needed.'
          ],
          correct: 1,
          rationale: 'The initiation phase is the window of opportunity to PREVENT progression to ATN. If the cause (sepsis → renal hypoperfusion) is treated aggressively NOW (fluids, vasopressors, antibiotics), tubular injury may be averted. Once ATN develops (oliguric phase), the damage requires time to heal. Early intervention changes outcomes dramatically.'
        },
        {
          stem: 'During the initiation phase of AKI, the nurse\'s PRIMARY focus is:',
          options: [
            'Preparing for dialysis',
            'Identifying and eliminating the precipitating cause before tubular damage occurs',
            'Restricting all fluids and potassium',
            'Obtaining a renal biopsy'
          ],
          correct: 1,
          rationale: 'The initiation phase is the PREVENTION window. The nurse should focus on identifying the cause (ischemia? nephrotoxin? obstruction?) and eliminating it. Restore perfusion for prerenal causes, discontinue nephrotoxic drugs, relieve obstructions. Dialysis and fluid/K+ restriction are for later phases. Biopsy is not emergent.'
        }
      ],
      y: [
        {
          stem: 'The initiation phase of AKI lasts:',
          options: [
            '8-14 days',
            'Hours to days',
            '2-4 weeks',
            '6 months'
          ],
          correct: 1,
          rationale: 'The initiation phase lasts hours to days — from the precipitating event (ischemia, toxin) until tubular injury occurs. This is the shortest phase but the most critical for intervention. If the cause is treated during this window, progression to ATN may be prevented.'
        },
        {
          stem: 'What characterizes the initiation phase of AKI?',
          options: [
            'Massive urine output with electrolyte depletion',
            'Clinically silent period — the insult has occurred but damage is not yet established',
            'Severe oliguria with hyperkalemia',
            'Return of normal kidney function'
          ],
          correct: 1,
          rationale: 'The initiation phase is often clinically SILENT — the kidney is being injured but dramatic symptoms have not yet appeared. This is why it is the window for prevention. Once the oliguric phase begins, tubular damage is established and treatment becomes supportive.'
        }
      ],
      r: [
        {
          stem: 'The initiation phase of AKI represents:',
          options: [
            'The period of maximum urine output',
            'The window of opportunity to prevent kidney damage',
            'The recovery period after dialysis',
            'The chronic phase of kidney disease'
          ],
          correct: 1,
          rationale: 'The initiation phase is the window to prevent kidney damage. The insult (ischemia, toxin) has started but tubular injury is not yet established. Quick intervention (restore perfusion, stop toxins) can prevent progression to ATN.'
        }
      ]
    }
  },

  'AKI Phase 2: Oliguric': {
    details: [
      'Duration: 8-14 days (can be longer); urine output SEVERELY decreased',
      'Nitrogenous wastes accumulate: rising BUN, creatinine, potassium, sulfate',
      'HYPERKALEMIA is the most dangerous complication — asymptomatic until K+ reaches 6-6.5 mEq/L, then EKG changes + fatal arrhythmia',
      'Other complications: hypertension, uremia, metabolic acidosis, fluid overload',
      'Neurologic progression if untreated: irritability → seizures → somnolence → coma → death'
    ],
    questions: {
      g: [
        {
          stem: 'A patient in the oliguric phase of AKI has a K+ of 6.7 mEq/L. The EKG shows peaked T waves. Which intervention is the HIGHEST priority?',
          options: [
            'Administer oral kayexalate and recheck potassium in 4 hours.',
            'Administer IV calcium gluconate IMMEDIATELY to stabilize the myocardium, then insulin/dextrose to shift K+ into cells.',
            'Restrict dietary potassium and monitor.',
            'Prepare for immediate hemodialysis only.'
          ],
          correct: 1,
          rationale: 'K+ of 6.7 with EKG changes (peaked T waves) is a cardiac emergency. IV calcium gluconate is given FIRST to stabilize the myocardium and prevent fatal arrhythmia (it does NOT lower K+, just protects the heart). Then IV insulin + dextrose shifts potassium into cells. Kayexalate is too slow for this emergency. Dialysis may be needed but calcium gluconate is the immediate priority.'
        },
        {
          stem: 'A nurse is monitoring a patient in the oliguric phase of AKI. Which finding requires IMMEDIATE intervention?',
          options: [
            'BUN of 45 mg/dL',
            'Potassium of 6.8 mEq/L with muscle weakness',
            'Urine output of 150 mL in 8 hours',
            'Creatinine of 2.8 mg/dL'
          ],
          correct: 1,
          rationale: 'Potassium of 6.8 with symptoms (muscle weakness) is a life-threatening emergency — fatal cardiac arrhythmia can occur at any moment. EKG changes appear at K+ >6-6.5. This requires IMMEDIATE treatment: calcium gluconate (cardiac protection), insulin/glucose (K+ shift into cells), and possibly emergency dialysis. Elevated BUN and creatinine need monitoring but are not immediately lethal.'
        }
      ],
      y: [
        {
          stem: 'The oliguric phase of AKI typically lasts:',
          options: [
            '1-2 days',
            '8-14 days',
            '1-2 months',
            '6 months'
          ],
          correct: 1,
          rationale: 'The oliguric phase typically lasts 8-14 days but can be longer. During this time, urine output is severely decreased, nitrogenous wastes accumulate, and electrolyte imbalances (especially hyperkalemia) are the primary threat. The nurse must monitor electrolytes, fluid balance, and cardiac rhythm closely.'
        },
        {
          stem: 'The MOST dangerous electrolyte imbalance during the oliguric phase is:',
          options: [
            'Hyponatremia',
            'Hyperkalemia',
            'Hypocalcemia',
            'Hyperphosphatemia'
          ],
          correct: 1,
          rationale: 'Hyperkalemia is the most dangerous complication because the kidneys cannot excrete potassium. K+ accumulates and at levels >6-6.5 mEq/L causes EKG changes (peaked T waves, widened QRS, sine wave) that can lead to fatal cardiac arrhythmia. Potassium must be monitored frequently during this phase.'
        }
      ],
      r: [
        {
          stem: 'During the oliguric phase of AKI, urine output is:',
          options: [
            'Increased (polyuria)',
            'Severely decreased (oliguria)',
            'Normal',
            'Absent initially then excessive'
          ],
          correct: 1,
          rationale: 'The oliguric phase is characterized by severely decreased urine output (oliguria, typically <400 mL/day). The kidneys cannot filter waste or excrete fluid, leading to accumulation of nitrogenous wastes, electrolyte imbalances, and fluid overload.'
        }
      ]
    }
  },

  'AKI Phase 3: Diuretic': {
    details: [
      'Kidneys begin to heal — urine output INCREASES but tubular function is still impaired',
      'TRAP: Labs may STILL be elevated or CONTINUE TO RISE even though urine output is increasing',
      'Risk: electrolyte DEPLETION (water and osmotic effects of high BUN cause electrolyte loss)',
      'GFR increases, urine output may reach >400 mL/day',
      'Nursing: don\'t assume recovery just because urine output improves — monitor labs closely'
    ],
    questions: {
      g: [
        {
          stem: 'A patient in the diuretic phase of AKI has urine output of 3 L/day. The BUN and creatinine are STILL rising. A new nurse says the patient must be getting worse. The experienced nurse explains:',
          options: [
            '"You\'re right — we need to prepare for dialysis."',
            '"In the diuretic phase, urine output increases BEFORE full tubular function returns — labs may still rise even though healing has begun."',
            '"The labs are wrong — reorder them."',
            '"The patient must have developed a new kidney problem."'
          ],
          correct: 1,
          rationale: 'This is a classic NCLEX trap: in the diuretic phase, diuresis occurs BEFORE full renal function returns. The tubules can make urine (output increases) but cannot yet fully filter/reabsorb efficiently. BUN/creatinine may continue to rise initially. The nurse should NOT assume the patient is worsening just because labs are still elevated — this is expected during early recovery.'
        },
        {
          stem: 'During the diuretic phase of AKI, the nurse\'s PRIMARY concern shifts to:',
          options: [
            'Hyperkalemia from continued potassium retention',
            'Electrolyte depletion and dehydration from excessive urine output',
            'Fluid overload from oliguria',
            'Hyperglycemia from steroid use'
          ],
          correct: 1,
          rationale: 'In the diuretic phase, massive urine output can cause dangerous electrolyte depletion (hypokalemia, hyponatremia) and dehydration. The osmotic diuresis from elevated BUN pulls water and electrolytes with it. The concern shifts from the oliguric problems (hyperkalemia, fluid overload) to diuretic problems (hypokalemia, volume depletion). Careful monitoring and replacement are essential.'
        }
      ],
      y: [
        {
          stem: 'What is the key nursing consideration during the diuretic phase of AKI?',
          options: [
            'Restrict all fluids to prevent overload.',
            'Monitor for electrolyte depletion despite improving urine output.',
            'Discontinue all medications since the kidneys are recovering.',
            'Encourage high-potassium foods to prevent hypokalemia.'
          ],
          correct: 1,
          rationale: 'During the diuretic phase, the primary concern shifts to electrolyte DEPLETION from massive urine output. Potassium, sodium, and water can be lost excessively. The nurse must monitor electrolytes closely and replace as needed. Fluids may need to be replaced (not restricted). Dietary changes should be based on lab values, not assumptions.'
        },
        {
          stem: 'Why might BUN and creatinine still be elevated during the diuretic phase?',
          options: [
            'The kidneys have permanently failed.',
            'Tubular function is still recovering — diuresis begins before full filtration capacity returns.',
            'The patient is still accumulating toxins.',
            'Lab error is the most common explanation.'
          ],
          correct: 1,
          rationale: 'In the diuretic phase, the tubules begin producing urine again (output increases) but full filtration and reabsorption capacity takes longer to recover. There is a lag between urine output improvement and lab normalization. This is expected and NOT a sign of treatment failure.'
        }
      ],
      r: [
        {
          stem: 'The diuretic phase of AKI is characterized by:',
          options: [
            'Severely decreased urine output',
            'Increasing urine output as kidneys begin to heal',
            'No urine output (anuria)',
            'Return to completely normal kidney function'
          ],
          correct: 1,
          rationale: 'The diuretic phase marks the beginning of kidney recovery — urine output increases (sometimes dramatically) as the tubules begin to function again. However, full recovery takes time, and this phase carries its own risks (electrolyte depletion, dehydration).'
        }
      ]
    }
  },

  'AKI Phase 4: Recovery': {
    details: [
      'Tubular edema resolves, renal function improves over weeks to months',
      'BUN and creatinine return toward normal',
      'GFR returns to 70-80% of normal (may not fully recover to baseline)',
      'Fluid and electrolyte balance normalizes',
      'Mild-to-moderate kidney damage may persist permanently in some patients'
    ],
    questions: {
      g: [
        {
          stem: 'A patient recovering from AKI has GFR that stabilizes at 75% of their pre-illness baseline. The nurse explains to the patient:',
          options: [
            '"Your kidneys have completely recovered and there\'s nothing to worry about."',
            '"Most patients recover to 70-80% of normal GFR. Some mild residual damage is possible — regular follow-up and avoiding nephrotoxins is important."',
            '"You will need dialysis for the rest of your life."',
            '"The remaining 25% will recover over the next year."'
          ],
          correct: 1,
          rationale: 'GFR typically recovers to 70-80% of normal after AKI — full recovery to 100% is not always achieved. Some patients retain mild-to-moderate residual kidney damage. The patient should have regular follow-up, avoid nephrotoxic drugs and contrast dye, stay hydrated, and monitor kidney function. Most patients do NOT need dialysis but should be aware of their increased CKD risk.'
        },
        {
          stem: 'During the recovery phase, which lab trends indicate improvement?',
          options: [
            'Rising BUN and creatinine with decreasing urine output',
            'BUN and creatinine trending downward toward normal with stable urine output',
            'Stable BUN with increasing potassium',
            'Decreasing GFR with increasing urine output'
          ],
          correct: 1,
          rationale: 'Recovery is indicated by: BUN and creatinine trending DOWN toward normal, stable/appropriate urine output, normalizing electrolytes, and improving GFR. Rising BUN/creatinine or decreasing GFR would suggest ongoing or worsening kidney injury, not recovery.'
        }
      ],
      y: [
        {
          stem: 'How long does the recovery phase of AKI typically take?',
          options: [
            '24-48 hours',
            'Weeks to months',
            'Exactly 14 days',
            '1-2 years'
          ],
          correct: 1,
          rationale: 'The recovery phase takes weeks to months as tubular edema resolves and kidney function gradually improves. The timeline varies by the severity of injury and the patient\'s overall health. Complete recovery may not occur — some patients have permanent residual damage.'
        },
        {
          stem: 'After AKI recovery, GFR typically returns to:',
          options: [
            '100% of normal',
            '70-80% of normal',
            '50% of normal',
            '25% of normal'
          ],
          correct: 1,
          rationale: 'GFR typically recovers to 70-80% of the patient\'s pre-illness normal. Complete recovery to 100% is possible but not guaranteed. The extent of recovery depends on the severity and duration of the AKI episode, the patient\'s age, and pre-existing kidney function.'
        }
      ],
      r: [
        {
          stem: 'The recovery phase of AKI is characterized by:',
          options: [
            'Worsening kidney function',
            'Gradual improvement in BUN, creatinine, and GFR',
            'Need for permanent dialysis',
            'Increasing fluid overload'
          ],
          correct: 1,
          rationale: 'The recovery phase shows gradual improvement: BUN and creatinine decrease toward normal, GFR improves, and fluid/electrolyte balance normalizes. Most patients recover enough function to avoid dialysis, though some residual damage may persist.'
        }
      ]
    }
  },

  'AKI Labs': {
    details: [
      'Serum creatinine: RISES (normally 0.6-1.2 mg/dL) — reflects decreased filtration',
      'BUN: RISES (normally ~20 mg/dL, can reach 800 in failure) — reflects nitrogenous waste accumulation',
      'Potassium: RISES (hyperkalemia) — kidneys cannot excrete K+; dangerous at >6-6.5 mEq/L',
      'Urine osmolality: EARLIEST sign of tubular damage is inability to concentrate urine',
      'CRITICAL: Conventional markers (creatinine, BUN) lag 1-2 days AFTER injury begins — early urine tests detect sooner'
    ],
    questions: {
      g: [
        {
          stem: 'A patient develops AKI but the serum creatinine doesn\'t rise until 48 hours after the injury. The nurse understands this is because:',
          options: [
            'The lab equipment was malfunctioning initially.',
            'Serum creatinine is a LAGGING indicator — it takes 1-2 days to accumulate to detectable levels after kidney injury begins.',
            'The patient was taking medications that mask creatinine elevation.',
            'Creatinine only rises after dialysis is started.'
          ],
          correct: 1,
          rationale: 'Conventional markers (serum creatinine, BUN) do NOT manifest for 1-2 days AFTER acute renal failure begins. Creatinine must accumulate in the blood before levels rise above normal. This lag means AKI may be present before lab changes appear. Earlier indicators include urine osmolality (inability to concentrate = first sign of tubular damage) and urine sodium.'
        },
        {
          stem: 'Which is the EARLIEST laboratory sign of acute tubular damage?',
          options: [
            'Elevated serum creatinine',
            'Elevated BUN',
            'Inability to concentrate urine (decreased urine osmolality)',
            'Hyperkalemia'
          ],
          correct: 2,
          rationale: 'The inability to concentrate urine (decreased urine osmolality/low specific gravity) is the EARLIEST sign of tubular damage. The tubules\' ability to concentrate urine is one of the first functions lost when they are injured. Serum creatinine and BUN are lagging indicators that take 1-2 days to rise. Hyperkalemia develops as filtration progressively fails.'
        }
      ],
      y: [
        {
          stem: 'In AKI, serum potassium is dangerous because:',
          options: [
            'It causes liver failure.',
            'The kidneys cannot excrete it, leading to accumulation that causes fatal cardiac arrhythmias.',
            'It causes massive urine output.',
            'It destroys red blood cells.'
          ],
          correct: 1,
          rationale: 'The kidneys are the primary route for potassium excretion. In AKI, K+ accumulates in the blood (hyperkalemia). At levels >6-6.5 mEq/L, EKG changes appear (peaked T waves, widened QRS) and fatal cardiac arrhythmia can occur. This is the most immediately life-threatening electrolyte abnormality in AKI.'
        },
        {
          stem: 'Normal serum creatinine is:',
          options: [
            '0.6-1.2 mg/dL',
            '5-10 mg/dL',
            '20-40 mg/dL',
            '100-200 mg/dL'
          ],
          correct: 0,
          rationale: 'Normal serum creatinine is 0.6-1.2 mg/dL. Creatinine is a waste product of muscle metabolism filtered by the kidneys. When kidney function declines, creatinine accumulates. IMPORTANT in elderly: creatinine may be falsely normal despite low GFR due to reduced muscle mass.'
        }
      ],
      r: [
        {
          stem: 'In AKI, BUN and creatinine levels:',
          options: [
            'Decrease',
            'Rise because the kidneys cannot filter waste',
            'Stay normal',
            'Fluctuate randomly'
          ],
          correct: 1,
          rationale: 'BUN and creatinine RISE in AKI because the kidneys cannot adequately filter nitrogenous waste from the blood. Rising creatinine is a hallmark diagnostic marker of AKI. BUN can rise to extremely high levels (up to 800 mg/dL in severe failure).'
        }
      ]
    }
  },

  'AKI Priority: Hyperkalemia': {
    details: [
      'Hyperkalemia (K+ >5.0 mEq/L) — the #1 life-threatening emergency in AKI',
      'Asymptomatic until K+ reaches 6-6.5 mEq/L, then EKG changes: peaked T waves → widened QRS → sine wave → cardiac arrest',
      'Emergency treatment: (1) IV calcium gluconate (stabilize heart), (2) IV insulin + dextrose (shift K+ into cells), (3) Kayexalate (remove K+ from body), (4) Dialysis',
      'Calcium gluconate does NOT lower K+ — it protects the myocardium from arrhythmia',
      'Monitor: continuous telemetry, EKG, potassium levels q1-2h during treatment'
    ],
    questions: {
      g: [
        {
          stem: 'A patient in AKI has K+ of 7.1 mEq/L. The EKG shows widened QRS complexes. The nurse administers IV calcium gluconate. A student asks why calcium is given for a potassium problem. The nurse explains:',
          options: [
            '"Calcium gluconate lowers potassium levels directly."',
            '"Calcium gluconate stabilizes the cardiac cell membrane, protecting the heart from fatal arrhythmia while other treatments lower the potassium."',
            '"Calcium gluconate converts potassium to a less dangerous form."',
            '"Calcium and potassium are the same electrolyte in different forms."'
          ],
          correct: 1,
          rationale: 'Calcium gluconate does NOT lower potassium — it stabilizes the myocardial cell membrane, raising the threshold for cardiac arrhythmia. This BUYS TIME while other treatments work to lower K+ (insulin/dextrose shifts K+ into cells, kayexalate removes K+ from the body via the GI tract, dialysis directly removes K+). Calcium is the first drug given because it acts fastest to protect the heart.'
        },
        {
          stem: 'Place these hyperkalemia treatments in the correct priority order: (A) Kayexalate, (B) IV calcium gluconate, (C) IV insulin + dextrose, (D) Dialysis.',
          options: [
            'A → B → C → D',
            'B → C → A → D',
            'C → B → D → A',
            'D → C → B → A'
          ],
          correct: 1,
          rationale: 'Correct order: (B) Calcium gluconate FIRST — immediate cardiac protection. (C) Insulin + dextrose — shifts K+ into cells (works within 15-30 min). (A) Kayexalate — removes K+ from the body via GI tract (slower, works over hours). (D) Dialysis — definitive removal if other measures fail. Each step serves a different purpose: protect → shift → remove → remove definitively.'
        }
      ],
      y: [
        {
          stem: 'At what potassium level do EKG changes typically appear?',
          options: [
            '4.0-5.0 mEq/L',
            '5.0-5.5 mEq/L',
            '6.0-6.5 mEq/L',
            '8.0-9.0 mEq/L'
          ],
          correct: 2,
          rationale: 'EKG changes (peaked T waves, widened QRS, loss of P waves) typically appear when K+ exceeds 6.0-6.5 mEq/L. However, hyperkalemia can be ASYMPTOMATIC before this level — which is why regular potassium monitoring is critical in AKI. Fatal arrhythmia can occur suddenly once EKG changes develop.'
        },
        {
          stem: 'IV insulin is given for hyperkalemia because it:',
          options: [
            'Directly removes potassium from the blood',
            'Drives potassium from the blood INTO cells, temporarily lowering serum levels',
            'Stimulates the kidneys to excrete more potassium',
            'Converts potassium to a non-toxic form'
          ],
          correct: 1,
          rationale: 'Insulin activates the Na+/K+ ATPase pump, driving potassium from the extracellular space (blood) into cells. This temporarily LOWERS serum potassium. Dextrose is given WITH insulin to prevent hypoglycemia. This is a temporizing measure — it does not remove K+ from the body (kayexalate and dialysis do that).'
        }
      ],
      r: [
        {
          stem: 'The FIRST medication given for life-threatening hyperkalemia with EKG changes is:',
          options: [
            'Insulin',
            'Kayexalate',
            'Calcium gluconate',
            'Sodium bicarbonate'
          ],
          correct: 2,
          rationale: 'IV calcium gluconate is given FIRST because it works immediately to stabilize the cardiac cell membrane and prevent fatal arrhythmia. It does not lower potassium — it protects the heart while other treatments (insulin, kayexalate, dialysis) work to lower K+.'
        }
      ]
    }
  },

  'CKD 5 Stages': {
    details: [
      'Stage 1: GFR ≥90 — kidney damage with normal GFR',
      'Stage 2: GFR 60-89 — mild decrease',
      'Stage 3: GFR 30-59 — moderate decrease',
      'Stage 4: GFR 15-29 — severe decrease',
      'Stage 5: GFR <15 — kidney failure (dialysis or transplant needed)',
      'CKD defined as: kidney damage OR GFR <60 for ≥3 months'
    ],
    questions: {
      g: [
        {
          stem: 'A patient has a GFR of 22 mL/min/1.73 m² that has been stable for 6 months. The nurse identifies this as CKD Stage:',
          options: ['Stage 2', 'Stage 3', 'Stage 4', 'Stage 5'],
          correct: 2,
          rationale: 'GFR 15-29 = Stage 4 CKD (severe decrease). This patient needs preparation for renal replacement therapy (dialysis or transplant). Stage 5 is GFR <15. Stage 3 is 30-59. Stage 2 is 60-89. The ≥3 month duration confirms this is CHRONIC, not acute.'
        },
        {
          stem: 'A patient asks the difference between Stage 3 CKD (GFR 45) and Stage 5 (GFR 12). Which response is MOST accurate?',
          options: [
            '"Both stages require dialysis."',
            '"Stage 3 means moderate kidney damage managed with medications and lifestyle changes. Stage 5 is kidney failure requiring dialysis or transplant."',
            '"Stage 3 will always progress to Stage 5."',
            '"There is no significant clinical difference between the stages."'
          ],
          correct: 1,
          rationale: 'CKD stages represent progressively worsening kidney function. Stage 3 (GFR 30-59) is moderate — managed with BP control, diet, avoiding nephrotoxins. Stage 5 (GFR <15) is kidney failure — kidneys cannot sustain life, requiring dialysis or transplant. Not all Stage 3 patients progress to Stage 5 with proper management.'
        }
      ],
      y: [
        {
          stem: 'At which CKD stage does the patient typically need dialysis or transplant?',
          options: ['Stage 2', 'Stage 3', 'Stage 4', 'Stage 5'],
          correct: 3,
          rationale: 'Stage 5 CKD (GFR <15) is kidney failure — the kidneys cannot maintain homeostasis, and the patient needs renal replacement therapy (dialysis or transplant). Stage 4 patients should begin preparation and education for dialysis/transplant.'
        },
        {
          stem: 'CKD is defined as kidney damage or GFR <60 for at least:',
          options: ['1 week', '1 month', '3 months', '1 year'],
          correct: 2,
          rationale: 'CKD is defined as kidney damage OR GFR <60 mL/min/1.73 m² for 3 months or longer. The 3-month criterion distinguishes chronic kidney disease from acute kidney injury (AKI), which is a sudden, potentially reversible decline.'
        }
      ],
      r: [
        {
          stem: 'Which GFR value indicates Stage 5 CKD (kidney failure)?',
          options: ['Less than 60', 'Less than 30', 'Less than 15', 'Less than 90'],
          correct: 2,
          rationale: 'GFR <15 mL/min/1.73 m² = Stage 5 CKD (kidney failure). At this level, the kidneys cannot sustain life and renal replacement therapy (dialysis or transplant) is needed. Normal GFR is 120-130.'
        }
      ]
    }
  },

  'Uremic Syndrome': {
    details: [
      'Clinical syndrome of kidney failure — "urine in the blood" — appears when ≥2/3 of nephrons destroyed',
      'Manifests across ALL body systems: neurologic, cardiovascular, GI, skin, hematologic, immune',
      'Neurologic: encephalopathy (confusion, seizures), peripheral neuropathy',
      'Skin: pruritus (from phosphate crystals), pale/sallow color, uremic frost (white crust from urea crystals — late sign)',
      'GI: nausea, vomiting, anorexia, metallic taste, uremic fetor (ammonia breath)'
    ],
    questions: {
      g: [
        {
          stem: 'A CKD patient develops confusion, asterixis (flapping tremor), and a metallic taste. The nurse recognizes these as signs of:',
          options: [
            'Hypoglycemia',
            'Uremic encephalopathy — nitrogenous waste accumulation affecting the brain',
            'Diabetic ketoacidosis',
            'Medication side effects'
          ],
          correct: 1,
          rationale: 'Confusion, asterixis (liver flap/flapping tremor), and metallic taste are classic signs of uremic encephalopathy — the CNS effects of nitrogenous waste accumulation in CKD. Uremia affects the brain, causing irritability, confusion, seizures, and eventually coma if untreated. Dialysis removes the accumulated toxins and improves symptoms.'
        },
        {
          stem: 'At what point does uremic syndrome typically become clinically apparent?',
          options: [
            'When 10% of nephrons are damaged',
            'When at least 2/3 of nephrons are destroyed',
            'Immediately with any kidney injury',
            'Only in Stage 5 CKD'
          ],
          correct: 1,
          rationale: 'Uremic syndrome does NOT appear until at least 2/3 (approximately 67%) of nephrons are destroyed. The kidneys have remarkable compensatory ability — remaining nephrons hypertrophy and increase their workload. This is why CKD can be "silent" until significant damage has occurred.'
        }
      ],
      y: [
        {
          stem: 'Which skin finding indicates severe, untreated uremia?',
          options: [
            'Jaundice',
            'Uremic frost — white/gray crystalline deposits on the skin from urea',
            'Petechiae',
            'Erythema'
          ],
          correct: 1,
          rationale: 'Uremic frost is a white/gray crust that forms on the skin from urea crystals deposited when BUN levels are extremely high. It is a LATE sign of severe, untreated uremia and indicates the patient needs urgent dialysis. It is rarely seen today due to early dialysis initiation.'
        },
        {
          stem: 'Which GI symptoms are associated with uremia?',
          options: [
            'Increased appetite and weight gain',
            'Nausea, vomiting, anorexia, metallic taste, and ammonia breath',
            'Diarrhea only',
            'No GI effects'
          ],
          correct: 1,
          rationale: 'Uremia causes significant GI symptoms: nausea, vomiting, anorexia (lack of appetite), metallic taste (from urea in saliva), and uremic fetor (ammonia-like breath odor from urea breakdown). These contribute to malnutrition in CKD patients.'
        }
      ],
      r: [
        {
          stem: 'Uremic syndrome affects:',
          options: [
            'Only the kidneys',
            'Only the brain',
            'All body systems',
            'Only the cardiovascular system'
          ],
          correct: 2,
          rationale: 'Uremia is a systemic syndrome affecting ALL body systems: neurologic (encephalopathy, neuropathy), cardiovascular (hypertension, heart failure), GI (nausea, anorexia), skin (pruritus, uremic frost), hematologic (anemia, bleeding), and immune (infection susceptibility). It results from accumulation of toxins that the failing kidneys cannot clear.'
        }
      ]
    }
  },

  'CKD Electrolytes': {
    details: [
      'Hyperkalemia: kidneys cannot excrete K+ — dangerous cardiac effects at >6 mEq/L',
      'Hyperphosphatemia: kidneys cannot excrete phosphate → triggers calcium-PTH cascade',
      'Hypocalcemia: phosphate binds calcium + impaired vitamin D activation → LOW calcium',
      'Metabolic acidosis: kidneys cannot excrete hydrogen ions or regenerate bicarbonate',
      'Hypernatremia or hyponatremia depending on fluid status'
    ],
    questions: {
      g: [
        {
          stem: 'A CKD patient has: phosphate 7.8 mg/dL, calcium 7.2 mg/dL, PTH elevated. The nurse understands the hypocalcemia is caused by:',
          options: [
            'The patient is not eating enough calcium-rich foods.',
            'Elevated phosphate binds calcium (inverse relationship) AND failing kidneys cannot activate vitamin D for calcium absorption.',
            'The parathyroid glands are failing.',
            'Dialysis is removing too much calcium.'
          ],
          correct: 1,
          rationale: 'In CKD, the cascade is: (1) kidneys cannot excrete phosphate → hyperphosphatemia, (2) high phosphate binds calcium → hypocalcemia, (3) kidneys cannot activate vitamin D → decreased calcium absorption from gut, (4) low calcium stimulates PTH → secondary hyperparathyroidism → bone resorption. The elevated PTH is COMPENSATORY (trying to raise calcium), not a parathyroid problem.'
        },
        {
          stem: 'Which electrolyte abnormality in CKD is MOST immediately life-threatening?',
          options: [
            'Hyperphosphatemia',
            'Hypocalcemia',
            'Hyperkalemia',
            'Metabolic acidosis'
          ],
          correct: 2,
          rationale: 'Hyperkalemia is the most immediately life-threatening electrolyte abnormality in CKD because it can cause fatal cardiac arrhythmia with minimal warning. While hyperphosphatemia, hypocalcemia, and metabolic acidosis all cause significant problems, they develop more gradually. K+ >6-6.5 mEq/L can kill within minutes.'
        }
      ],
      y: [
        {
          stem: 'In CKD, phosphate and calcium have what relationship?',
          options: [
            'Both increase together',
            'They have an INVERSE relationship — when phosphate rises, calcium falls',
            'Both decrease together',
            'They are unrelated'
          ],
          correct: 1,
          rationale: 'Phosphate and calcium have an inverse relationship. In CKD, rising phosphate binds calcium, lowering serum calcium levels. This triggers the PTH cascade (secondary hyperparathyroidism) that leads to bone resorption and renal osteodystrophy.'
        },
        {
          stem: 'Metabolic acidosis in CKD occurs because:',
          options: [
            'The kidneys produce too much acid.',
            'The kidneys cannot excrete hydrogen ions or regenerate bicarbonate.',
            'The patient eats too many acidic foods.',
            'Dialysis causes acid production.'
          ],
          correct: 1,
          rationale: 'The kidneys normally maintain acid-base balance by excreting hydrogen ions and regenerating bicarbonate. In CKD, this function is impaired, leading to metabolic acidosis (low pH, low bicarb). Treatment includes oral sodium bicarbonate supplementation and dialysis.'
        }
      ],
      r: [
        {
          stem: 'In CKD, potassium levels are typically:',
          options: [
            'Low (hypokalemia)',
            'High (hyperkalemia)',
            'Normal',
            'Unaffected by kidney function'
          ],
          correct: 1,
          rationale: 'The kidneys are the primary route for potassium excretion. In CKD, impaired potassium excretion leads to hyperkalemia (elevated K+), which is dangerous due to cardiac effects. Patients must limit dietary potassium (bananas, oranges, potatoes, tomatoes).'
        }
      ]
    }
  },

  'CKD Anemia': {
    details: [
      'Most profound hematologic complication of CKD — caused primarily by decreased EPO production',
      'Defined: Hgb <13 g/dL in men, <12 g/dL in women',
      'Additional causes: chronic blood loss, hemolysis, bone marrow suppression from uremic toxins, iron deficiency',
      'Treatment: Erythropoiesis-stimulating agents (ESAs) — epoetin alfa, darbepoetin alfa',
      'ESA risks: hypertension, thrombosis (from increased blood viscosity); target Hgb 10-12 g/dL (not higher)'
    ],
    questions: {
      g: [
        {
          stem: 'A CKD patient on epoetin alfa has hemoglobin rise from 9.5 to 13.8 g/dL. The nurse is concerned because:',
          options: [
            'The hemoglobin is now normal and the medication can be stopped.',
            'Over-correction (Hgb >12-13) increases thrombosis and cardiovascular risk — the dose needs to be reduced.',
            'This rapid rise indicates the patient no longer has CKD.',
            'ESAs should always raise hemoglobin above 14 g/dL.'
          ],
          correct: 1,
          rationale: 'The target Hgb for ESA therapy in CKD is 10-12 g/dL. Over-correction (>12-13) increases blood viscosity, raising the risk of thrombosis (DVT, PE, stroke) and cardiovascular events. The FDA has black box warnings about this. The dose must be reduced or held. The goal is to treat symptoms of anemia, not normalize hemoglobin completely.'
        },
        {
          stem: 'Before starting an ESA for CKD anemia, the nurse should ensure:',
          options: [
            'The patient has received a blood transfusion first.',
            'Iron stores are adequate — ESAs cannot work without sufficient iron.',
            'The patient\'s blood type has been confirmed.',
            'The patient is on a high-protein diet.'
          ],
          correct: 1,
          rationale: 'ESAs stimulate the bone marrow to produce RBCs, but this process requires IRON. If iron stores are depleted, ESAs are ineffective (the marrow cannot make hemoglobin without iron). Iron studies (ferritin, TSAT) should be checked and iron supplemented if needed BEFORE or concurrent with ESA therapy.'
        }
      ],
      y: [
        {
          stem: 'The PRIMARY cause of anemia in CKD is:',
          options: [
            'Chronic blood loss from dialysis',
            'Decreased erythropoietin (EPO) production by the failing kidneys',
            'Vitamin B12 deficiency',
            'Bone marrow cancer'
          ],
          correct: 1,
          rationale: 'The primary cause of CKD anemia is decreased EPO production. The kidneys produce EPO in response to hypoxia, stimulating bone marrow to make RBCs. As kidney function declines, EPO production drops and anemia develops. Other contributing factors include blood loss, hemolysis, and uremic suppression of marrow.'
        },
        {
          stem: 'The target hemoglobin for ESA therapy in CKD is:',
          options: [
            '8-9 g/dL',
            '10-12 g/dL',
            '14-16 g/dL',
            '16-18 g/dL'
          ],
          correct: 1,
          rationale: 'The target Hgb for ESA therapy is 10-12 g/dL. Raising Hgb above 12-13 increases cardiovascular and thrombotic risk (FDA black box warning). The goal is to improve quality of life and reduce transfusion needs, not to normalize hemoglobin completely.'
        }
      ],
      r: [
        {
          stem: 'CKD anemia is treated with:',
          options: [
            'Blood transfusions only',
            'Erythropoiesis-stimulating agents (ESAs) such as epoetin alfa',
            'Vitamin C supplements',
            'Increased dietary iron alone'
          ],
          correct: 1,
          rationale: 'ESAs (epoetin alfa, darbepoetin alfa) are the primary treatment for CKD anemia. They replace the EPO that failing kidneys can no longer produce, stimulating the bone marrow to make RBCs. Iron supplementation is usually needed alongside ESAs. Transfusions are reserved for severe or symptomatic anemia.'
        }
      ]
    }
  },

  'Renal Osteodystrophy': {
    details: [
      'CKD-Mineral Bone Disorder — bone disease from the calcium-phosphate-PTH cascade in CKD',
      'High-turnover (osteitis fibrosa): secondary hyperparathyroidism → increased bone resorption',
      'Low-turnover (adynamic osteodystrophy): especially common in DIABETES; from excessive PTH suppression',
      'Adynamic osteodystrophy = HIGH risk for fractures and bone pain',
      'Treatment: phosphate binders, vitamin D analogs, calcimimetics (cinacalcet), calcium/vitamin D supplements'
    ],
    questions: {
      g: [
        {
          stem: 'A CKD patient with diabetes develops bone pain and a pathologic fracture. PTH is suppressed (low). The nurse suspects:',
          options: [
            'Osteoporosis from aging',
            'Adynamic osteodystrophy — low bone turnover from excessive PTH suppression, especially common in diabetic CKD patients',
            'Secondary hyperparathyroidism with high bone turnover',
            'Multiple myeloma'
          ],
          correct: 1,
          rationale: 'Adynamic osteodystrophy is characterized by LOW bone turnover (low PTH, low osteoblast/osteoclast activity) and is especially common in diabetic CKD patients. It results from over-suppression of PTH (often from calcitriol therapy) and leads to weak, brittle bones prone to fractures. This is different from the high-turnover bone disease of secondary hyperparathyroidism.'
        },
        {
          stem: 'Which medication class helps control hyperphosphatemia in CKD to prevent renal osteodystrophy?',
          options: [
            'NSAIDs',
            'Phosphate binders (taken WITH meals)',
            'Calcium channel blockers',
            'Loop diuretics'
          ],
          correct: 1,
          rationale: 'Phosphate binders (calcium carbonate, sevelamer, lanthanum) are taken WITH MEALS to bind dietary phosphate in the gut, preventing its absorption. This controls hyperphosphatemia, which drives the entire calcium-PTH-bone cascade. Taking them without food is ineffective — they must be present when phosphate from food enters the gut.'
        }
      ],
      y: [
        {
          stem: 'Renal osteodystrophy is caused by:',
          options: [
            'Excess calcium intake',
            'The calcium-phosphate-PTH cascade triggered by failing kidneys',
            'Excessive exercise',
            'Vitamin A toxicity'
          ],
          correct: 1,
          rationale: 'In CKD: kidneys cannot excrete phosphate → hyperphosphatemia → hypocalcemia → elevated PTH → bone resorption → bone disease. Additionally, impaired vitamin D activation worsens calcium absorption. This cascade drives renal osteodystrophy (CKD-MBD).'
        },
        {
          stem: 'Phosphate binders should be taken:',
          options: [
            'On an empty stomach first thing in the morning',
            'WITH meals to bind dietary phosphate',
            'At bedtime only',
            'Only when phosphate levels are checked'
          ],
          correct: 1,
          rationale: 'Phosphate binders must be taken WITH meals because they work by binding phosphate from food in the GI tract, preventing absorption. Taking them without food is ineffective. They also should be separated from other medications (can reduce absorption of other drugs).'
        }
      ],
      r: [
        {
          stem: 'In CKD, elevated phosphate leads to:',
          options: [
            'Elevated calcium',
            'Decreased calcium (hypocalcemia) and bone disease',
            'Normal calcium levels',
            'Improved bone density'
          ],
          correct: 1,
          rationale: 'Elevated phosphate in CKD binds calcium (inverse relationship), causing hypocalcemia. The body compensates by releasing PTH, which pulls calcium from bones, leading to bone disease (renal osteodystrophy). This cascade is the foundation of CKD mineral bone disorder.'
        }
      ]
    }
  },

  'CKD Diet': {
    details: [
      'Restrict: potassium (bananas, oranges, potatoes, tomatoes), phosphorus (dairy, processed foods), sodium, protein (pre-dialysis)',
      'Adequate calories to prevent muscle wasting (but not excess protein)',
      'Fluid restriction may be needed depending on output and edema',
      'On dialysis: protein needs INCREASE (dialysis removes protein) — different from pre-dialysis restriction',
      'Monitor: daily weights, I&O, electrolyte levels to guide dietary adjustments'
    ],
    questions: {
      g: [
        {
          stem: 'A pre-dialysis CKD patient asks for a snack. Which option is MOST appropriate?',
          options: [
            'A banana and a glass of orange juice',
            'Apple slices with a small portion of unsalted crackers',
            'A baked potato with cheese',
            'A yogurt parfait with granola'
          ],
          correct: 1,
          rationale: 'Apple slices and unsalted crackers are low in potassium, phosphorus, and sodium — appropriate for CKD. Bananas and orange juice are HIGH in potassium. Baked potatoes are high in potassium. Yogurt and cheese are high in phosphorus (dairy). Dietary choices in CKD focus on limiting K+, phosphorus, and sodium.'
        },
        {
          stem: 'A CKD patient starts hemodialysis and asks if they can now eat more protein. The nurse explains:',
          options: [
            '"No — protein restriction continues on dialysis."',
            '"Yes — dialysis removes protein, so your protein needs actually INCREASE to prevent muscle wasting."',
            '"Protein intake has no relationship to dialysis."',
            '"You should eliminate protein completely."'
          ],
          correct: 1,
          rationale: 'Pre-dialysis CKD patients restrict protein to reduce nitrogenous waste (BUN). However, once dialysis starts, protein is lost during the dialysis process, and needs INCREASE to prevent muscle wasting and malnutrition. This dietary shift is important patient teaching when transitioning to dialysis.'
        }
      ],
      y: [
        {
          stem: 'Which foods should CKD patients LIMIT due to high potassium content?',
          options: [
            'Rice, pasta, and bread',
            'Bananas, oranges, potatoes, and tomatoes',
            'Chicken, fish, and eggs',
            'Apples, grapes, and berries'
          ],
          correct: 1,
          rationale: 'High-potassium foods to limit in CKD: bananas, oranges, potatoes, tomatoes, avocados, beans, nuts, and chocolate. These can worsen hyperkalemia. Low-potassium alternatives include apples, berries, grapes, rice, and pasta.'
        },
        {
          stem: 'CKD patients should limit phosphorus intake. Which food group is HIGHEST in phosphorus?',
          options: [
            'Fresh fruits and vegetables',
            'Dairy products and processed foods',
            'Whole grains and rice',
            'Lean meats only'
          ],
          correct: 1,
          rationale: 'Dairy products (milk, cheese, yogurt) and processed foods (containing phosphate additives) are the highest sources of dietary phosphorus. Limiting these helps control hyperphosphatemia and the calcium-PTH-bone disease cascade. Phosphate binders are taken WITH meals as additional protection.'
        }
      ],
      r: [
        {
          stem: 'The CKD diet restricts all of the following EXCEPT:',
          options: [
            'Potassium',
            'Sodium',
            'Phosphorus',
            'Adequate calories'
          ],
          correct: 3,
          rationale: 'CKD patients should restrict potassium, sodium, phosphorus, and protein (pre-dialysis). However, adequate CALORIE intake is important to prevent muscle wasting and malnutrition. The diet is restrictive but must provide enough energy for daily needs.'
        }
      ]
    }
  },

  'CKD + NSAIDs': {
    details: [
      'NSAIDs are nephrotoxic and should be AVOIDED in CKD patients',
      'NSAIDs block prostaglandin synthesis → constrict afferent arteriole → reduce renal blood flow → worsen kidney function',
      'Even OTC NSAIDs (ibuprofen, naproxen) are dangerous in CKD',
      'Safe alternative for pain: acetaminophen (does not affect kidneys at appropriate doses)',
      'Patient teaching: read all OTC labels — NSAIDs are in many combination products'
    ],
    questions: {
      g: [
        {
          stem: 'A CKD patient with knee pain asks the nurse if they can take ibuprofen. The nurse responds:',
          options: [
            '"Ibuprofen is safe as long as you take it with food."',
            '"NSAIDs like ibuprofen are AVOIDED in CKD because they reduce kidney blood flow and can worsen your kidney function. Acetaminophen is a safer alternative."',
            '"You can take ibuprofen but only for 3 days."',
            '"Take a lower dose of ibuprofen than the bottle recommends."'
          ],
          correct: 1,
          rationale: 'NSAIDs (ibuprofen, naproxen, aspirin in analgesic doses) are AVOIDED in CKD because they inhibit prostaglandin synthesis, which constricts the afferent arteriole and reduces renal blood flow. This can worsen kidney function, even to the point of precipitating AKI. Acetaminophen (at appropriate doses) is the safe alternative for pain in CKD.'
        },
        {
          stem: 'NSAIDs damage CKD kidneys by:',
          options: [
            'Directly toxic to tubular cells.',
            'Blocking prostaglandin-mediated vasodilation of the afferent arteriole, reducing renal perfusion.',
            'Increasing potassium excretion too rapidly.',
            'Causing kidney stones.'
          ],
          correct: 1,
          rationale: 'Prostaglandins maintain vasodilation of the afferent arteriole, ensuring adequate blood flow to the kidneys (especially important when perfusion is already compromised in CKD). NSAIDs block prostaglandin synthesis, causing vasoconstriction that reduces renal blood flow and GFR. This is the primary mechanism of NSAID nephrotoxicity.'
        }
      ],
      y: [
        {
          stem: 'Which pain medication is SAFE for CKD patients?',
          options: ['Ibuprofen (Advil)', 'Naproxen (Aleve)', 'Acetaminophen (Tylenol)', 'Aspirin (Bayer)'],
          correct: 2,
          rationale: 'Acetaminophen is the safe analgesic for CKD patients — it does not affect renal blood flow or prostaglandin synthesis at appropriate doses. All NSAIDs (ibuprofen, naproxen, aspirin in analgesic doses) should be avoided in CKD.'
        },
        {
          stem: 'Why should CKD patients read OTC medication labels carefully?',
          options: [
            'To check for sugar content.',
            'Many OTC products contain hidden NSAIDs that could worsen kidney function.',
            'To verify the medication is not expired.',
            'OTC medications are always safe in CKD.'
          ],
          correct: 1,
          rationale: 'Many OTC combination products (cold medications, headache remedies, sleep aids) contain NSAIDs that CKD patients may not recognize. Reading labels is essential to avoid inadvertent NSAID exposure. Patients should be taught to look for ibuprofen, naproxen, and aspirin in ingredient lists.'
        }
      ],
      r: [
        {
          stem: 'NSAIDs should be AVOIDED in CKD because they:',
          options: [
            'Cause liver damage',
            'Reduce kidney blood flow and worsen kidney function',
            'Increase blood glucose',
            'Cause bone marrow suppression'
          ],
          correct: 1,
          rationale: 'NSAIDs reduce renal blood flow by blocking prostaglandin-mediated vasodilation in the kidneys. In CKD patients who already have compromised kidney function, this can cause further decline, AKI, or accelerated progression of CKD.'
        }
      ]
    }
  },

  'CKD + Metformin': {
    details: [
      'Metformin is contraindicated or requires dose adjustment in CKD due to risk of LACTIC ACIDOSIS',
      'Not cleared by failing kidneys → accumulates → promotes lactic acid production',
      'Generally contraindicated when GFR <30 mL/min; dose reduction when GFR 30-45',
      'Must be held before contrast dye procedures (contrast + metformin = additive nephrotoxic risk)',
      'Resume only when kidney function is confirmed stable after contrast'
    ],
    questions: {
      g: [
        {
          stem: 'A diabetic patient with CKD (GFR 25) is on metformin. The nurse should anticipate:',
          options: [
            'Continuing metformin at the current dose.',
            'Discontinuing metformin — it is contraindicated at GFR <30 due to lactic acidosis risk.',
            'Increasing the metformin dose to better control glucose.',
            'Switching to IV metformin for better absorption.'
          ],
          correct: 1,
          rationale: 'Metformin is generally contraindicated when GFR drops below 30 mL/min. The failing kidneys cannot clear metformin, causing it to accumulate and promote lactic acid production (lactic acidosis — rare but potentially fatal). Alternative diabetic medications must be used. Metformin does not come in IV form.'
        },
        {
          stem: 'A CKD patient on metformin is scheduled for a CT with IV contrast. Which instruction is MOST important?',
          options: [
            '"Take extra metformin before the scan to stabilize blood sugar."',
            '"Hold metformin before and after the contrast procedure. Resume only after kidney function is confirmed stable."',
            '"Metformin protects the kidneys from contrast damage."',
            '"No special precautions are needed."'
          ],
          correct: 1,
          rationale: 'Metformin must be HELD before IV contrast procedures because contrast dye is nephrotoxic, and if kidney function worsens, metformin accumulates and causes lactic acidosis. Metformin is held for 48 hours after contrast and resumed ONLY after kidney function (GFR/creatinine) is confirmed to be at baseline. This is a standard safety protocol.'
        }
      ],
      y: [
        {
          stem: 'Why is metformin dangerous in CKD?',
          options: [
            'It causes hyperglycemia in CKD patients.',
            'Failing kidneys cannot clear it, leading to accumulation and risk of lactic acidosis.',
            'It directly damages the kidneys.',
            'It increases potassium levels.'
          ],
          correct: 1,
          rationale: 'Metformin is primarily renally excreted. In CKD, impaired excretion causes metformin to accumulate, which promotes anaerobic metabolism and lactic acid production. Lactic acidosis is rare but has a high mortality rate. This is why metformin requires dose adjustment or discontinuation as GFR declines.'
        },
        {
          stem: 'Metformin is generally contraindicated when GFR falls below:',
          options: ['60 mL/min', '45 mL/min', '30 mL/min', '15 mL/min'],
          correct: 2,
          rationale: 'Metformin is generally contraindicated at GFR <30 mL/min. Dose reduction is recommended at GFR 30-45. Above 45, metformin can usually be used at full dose. These thresholds reflect the kidney\'s decreasing ability to clear the drug.'
        }
      ],
      r: [
        {
          stem: 'The dangerous complication of metformin accumulation in CKD is:',
          options: ['Hyperkalemia', 'Lactic acidosis', 'Hepatic failure', 'Pancreatitis'],
          correct: 1,
          rationale: 'Lactic acidosis is the most dangerous complication of metformin accumulation. When the kidneys cannot excrete metformin, it builds up and promotes lactic acid production. Lactic acidosis has a high mortality rate and requires emergency treatment.'
        }
      ]
    }
  },

  'CKD Medications to Avoid': {
    details: [
      'NSAIDs: reduce renal blood flow → worsen CKD',
      'Metformin: accumulates → lactic acidosis (contraindicated GFR <30)',
      'Aminoglycosides (gentamicin): directly nephrotoxic to tubules',
      'IV contrast dye: nephrotoxic, especially in elderly/CKD — hydrate before and after',
      'All drug doses need assessment/adjustment in CKD — decreased albumin means more free drug, slower clearance means accumulation'
    ],
    questions: {
      g: [
        {
          stem: 'A nurse is reviewing a CKD patient\'s medication list and finds: metformin, ibuprofen PRN, and lisinopril. Which medications concern the nurse?',
          options: [
            'All three should be discontinued.',
            'Metformin (lactic acidosis risk) and ibuprofen (nephrotoxic) — both should be reviewed with the provider. Lisinopril is actually renoprotective.',
            'Only lisinopril is concerning in CKD.',
            'None are concerning — all are safe in CKD.'
          ],
          correct: 1,
          rationale: 'Metformin and ibuprofen are both problematic in CKD: metformin accumulates (lactic acidosis risk at GFR <30) and ibuprofen (NSAID) reduces renal blood flow. Both should be reviewed with the provider. HOWEVER, lisinopril (ACE inhibitor) is actually recommended in CKD — it reduces intraglomerular pressure, slows CKD progression, and controls hypertension. ACE inhibitors are renoprotective despite a slight initial creatinine rise.'
        },
        {
          stem: 'Why do ALL medications need dose assessment in CKD patients?',
          options: [
            'CKD patients are allergic to standard doses.',
            'Decreased renal clearance causes drug accumulation, and low albumin increases free drug levels — both increase toxicity risk.',
            'CKD patients metabolize drugs faster than normal.',
            'Only nephrotoxic drugs need adjustment.'
          ],
          correct: 1,
          rationale: 'In CKD: (1) decreased renal clearance causes drugs to accumulate (longer half-life), (2) decreased albumin means more unbound (free) drug in circulation (stronger effect), and (3) some drug metabolites that are normally renally excreted can accumulate and be toxic. ALL medications — not just nephrotoxins — need assessment for dose adjustment in CKD.'
        }
      ],
      y: [
        {
          stem: 'Which class of medications is RENOPROTECTIVE and recommended in CKD?',
          options: ['NSAIDs', 'ACE inhibitors/ARBs', 'Aminoglycosides', 'Corticosteroids'],
          correct: 1,
          rationale: 'ACE inhibitors (lisinopril, enalapril) and ARBs (losartan, valsartan) are renoprotective — they reduce intraglomerular pressure and slow CKD progression. They also control hypertension (a major CKD progression factor). The nurse should monitor for hyperkalemia (ACE/ARBs raise K+ in CKD) and a slight initial creatinine rise (expected).'
        },
        {
          stem: 'Before a CKD patient receives IV contrast dye, the nurse should ensure:',
          options: [
            'The patient has fasted for 24 hours.',
            'Adequate hydration before and after the procedure to prevent contrast-induced nephropathy.',
            'The patient takes extra metformin for stress.',
            'No special precautions are needed.'
          ],
          correct: 1,
          rationale: 'IV contrast dye is nephrotoxic, especially in patients with pre-existing CKD and in elderly patients. Adequate hydration (IV NS) before and after the procedure helps flush the contrast through the kidneys and reduces nephrotoxicity risk. Nephrotoxic medications (metformin, NSAIDs) should be held.'
        }
      ],
      r: [
        {
          stem: 'Which drug class is nephrotoxic and should be avoided in CKD?',
          options: ['ACE inhibitors', 'Beta-blockers', 'NSAIDs', 'Calcium channel blockers'],
          correct: 2,
          rationale: 'NSAIDs are nephrotoxic — they reduce renal blood flow by blocking prostaglandin-mediated vasodilation. In CKD, this can worsen kidney function and precipitate AKI. ACE inhibitors are actually renoprotective in CKD.'
        }
      ]
    }
  },

  'Hemodialysis': {
    details: [
      'Blood flows through a semipermeable membrane in a dialyzer; waste/excess electrolytes diffuse into dialysate',
      'Access: AV fistula (preferred — surgically created artery-vein connection), AV graft, or central venous catheter',
      'Typically 3-4 hours per session, 3 times per week',
      'Complications: hypotension (most common), disequilibrium syndrome (headache, seizures from rapid urea removal), infection',
      'AV fistula needs 4-6 weeks to mature before use; assess for bruit and thrill daily'
    ],
    questions: {
      g: [
        {
          stem: 'During hemodialysis, a patient develops a severe headache, nausea, and confusion. The nurse suspects disequilibrium syndrome. This occurs because:',
          options: [
            'The patient is dehydrated from fluid removal.',
            'Rapid removal of urea creates an osmotic gradient that draws fluid into brain cells, causing cerebral edema.',
            'The dialysis machine malfunctioned.',
            'The patient had an allergic reaction to the dialysate.'
          ],
          correct: 1,
          rationale: 'Disequilibrium syndrome occurs when urea is removed rapidly from the blood during dialysis. Since urea is removed faster from blood than from brain tissue, an osmotic gradient develops — water shifts into the brain cells, causing cerebral edema. This manifests as headache, nausea, confusion, and potentially seizures. Prevention: slower dialysis rates, especially in first sessions.'
        },
        {
          stem: 'The MOST common complication during hemodialysis is:',
          options: [
            'Infection',
            'Hypotension',
            'Stroke',
            'Cardiac arrest'
          ],
          correct: 1,
          rationale: 'Hypotension is the most common complication during hemodialysis, occurring when fluid is removed faster than the cardiovascular system can compensate. Management: Trendelenburg position, slow/stop ultrafiltration, administer NS bolus. The nurse monitors BP frequently during treatment and adjusts fluid removal rate accordingly.'
        }
      ],
      y: [
        {
          stem: 'The preferred vascular access for long-term hemodialysis is:',
          options: [
            'Central venous catheter',
            'AV fistula',
            'Peripheral IV',
            'PICC line'
          ],
          correct: 1,
          rationale: 'The AV fistula (surgically created arteriovenous connection, usually in the forearm) is the preferred long-term access for hemodialysis. It has the lowest infection rate and longest lifespan of all access types. It needs 4-6 weeks to mature before first use. AV grafts and central venous catheters are alternatives but have higher complication rates.'
        },
        {
          stem: 'How often is hemodialysis typically performed?',
          options: [
            'Once a week for 1 hour',
            'Three times a week for 3-4 hours each session',
            'Daily for 30 minutes',
            'Once a month for 8 hours'
          ],
          correct: 1,
          rationale: 'Standard hemodialysis is performed 3 times per week, with each session lasting 3-4 hours. This schedule provides adequate waste removal and fluid management for most patients. Some patients may benefit from more frequent or longer sessions (nocturnal or daily dialysis).'
        }
      ],
      r: [
        {
          stem: 'Hemodialysis removes waste from the blood by:',
          options: [
            'Filtering blood through the kidneys',
            'Diffusion across a semipermeable membrane in a dialyzer',
            'Adding medications to the blood',
            'Centrifuging the blood to separate waste'
          ],
          correct: 1,
          rationale: 'Hemodialysis works by diffusion — blood flows through capillary tubes inside a dialyzer while dialysate flows in the opposite direction on the outside. Waste products and excess electrolytes move from the blood (high concentration) into the dialysate (low concentration) across the semipermeable membrane.'
        }
      ]
    }
  },

  'AV Fistula Care': {
    details: [
      'NEVER take BP, draw blood, or start an IV in the fistula arm',
      'NEVER compress or constrict the fistula arm (no tight clothing, watches, bracelets)',
      'Assess for BRUIT (whooshing sound with stethoscope) and THRILL (vibration felt on palpation) daily — absence = clotted',
      'Teach patient: no sleeping on the fistula arm, no carrying heavy objects with that arm',
      'Absence of bruit/thrill = medical emergency — notify provider immediately (may need declotting)'
    ],
    questions: {
      g: [
        {
          stem: 'A nurse assesses an AV fistula and finds no bruit or thrill. The site is cool to touch. Which action is MOST appropriate?',
          options: [
            'Document the finding and reassess in 4 hours.',
            'Notify the provider IMMEDIATELY — absence of bruit/thrill indicates fistula clotting, requiring urgent intervention.',
            'Apply warm compresses to the area.',
            'Elevate the arm above the heart.'
          ],
          correct: 1,
          rationale: 'Absence of bruit (sound) and thrill (vibration) indicates the fistula has CLOTTED — this is a medical emergency because it is the patient\'s dialysis lifeline. Immediate provider notification is needed for potential declotting procedures or thrombolytic therapy. Warm compresses and elevation will not resolve a clotted fistula. Do not delay — time-sensitive.'
        },
        {
          stem: 'A new CNA attempts to take blood pressure on a patient\'s left arm, which has an AV fistula. The nurse intervenes because:',
          options: [
            'Blood pressure cuffs don\'t work on arms with fistulas.',
            'BP cuff compression can damage or clot the fistula, which is the patient\'s dialysis access lifeline.',
            'The reading would be inaccurate but harmless.',
            'It is only a problem if the BP cuff is inflated too high.'
          ],
          correct: 1,
          rationale: 'Blood pressure cuff compression can damage the fistula or cause clotting by constricting blood flow. The AV fistula is the patient\'s lifeline for dialysis — protecting it is a top nursing priority. NEVER: take BP, draw blood, start IVs, or apply tourniquets to the fistula arm. All healthcare team members must be educated about this.'
        }
      ],
      y: [
        {
          stem: 'Which assessment confirms a functioning AV fistula?',
          options: [
            'Redness and warmth at the site',
            'Presence of a bruit (whooshing sound) and thrill (palpable vibration)',
            'Absence of any sensation at the site',
            'Cool, pale skin over the fistula'
          ],
          correct: 1,
          rationale: 'A functioning AV fistula has a bruit (turbulent blood flow creates a whooshing sound heard with a stethoscope) and a thrill (vibration felt on palpation). These confirm blood is flowing through the fistula. Absence of either suggests clotting — a medical emergency.'
        },
        {
          stem: 'Which activities should a patient with an AV fistula AVOID?',
          options: [
            'Light walking and stretching',
            'Sleeping on the fistula arm, carrying heavy objects, and wearing tight jewelry on that arm',
            'Taking showers',
            'Eating with the fistula arm'
          ],
          correct: 1,
          rationale: 'Patients should avoid anything that compresses or constricts the fistula arm: sleeping on it (prolonged compression), carrying heavy objects (strains the access), tight clothing/jewelry/watches (constricts flow). These can damage the fistula or promote clotting.'
        }
      ],
      r: [
        {
          stem: 'Which action is NEVER done on the arm with an AV fistula?',
          options: [
            'Washing the arm',
            'Taking blood pressure or drawing blood',
            'Gentle exercise of the arm',
            'Palpating the fistula for thrill'
          ],
          correct: 1,
          rationale: 'NEVER take blood pressure, draw blood, or start an IV in the fistula arm. These can compress, damage, or clot the fistula. The fistula is the patient\'s lifeline for dialysis and must be protected at all costs. Use the non-fistula arm for all procedures.'
        }
      ]
    }
  },

  'AV Fistula Assessment': {
    details: [
      'Bruit: whooshing/buzzing sound heard with stethoscope over the fistula — indicates blood flow',
      'Thrill: continuous palpable vibration/buzzing felt when touching the fistula — indicates blood flow',
      'Both should be present at ALL times — absence = fistula clotted = notify provider STAT',
      'Also assess: signs of infection (redness, warmth, swelling, drainage), steal syndrome (hand ischemia)',
      'AV fistula needs 4-6 weeks maturation before first use (allow vessel walls to thicken)'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with a newly created AV fistula reports numbness and pallor in the fingers of the fistula hand. The nurse suspects:',
          options: [
            'Normal findings after fistula creation.',
            'Steal syndrome — the fistula is "stealing" blood flow from the hand, causing ischemia.',
            'Carpal tunnel syndrome unrelated to the fistula.',
            'Hyperkalemia affecting the peripheral nerves.'
          ],
          correct: 1,
          rationale: 'Steal syndrome occurs when the AV fistula diverts too much blood from the arterial system, "stealing" blood flow from the hand distal to the fistula. Signs include numbness, pallor, pain, and coolness in the affected fingers/hand. This is a complication requiring provider notification — may need surgical revision. It is NOT normal.'
        },
        {
          stem: 'How long must a newly created AV fistula mature before it can be used for hemodialysis?',
          options: [
            '24-48 hours',
            '1 week',
            '4-6 weeks',
            '6 months'
          ],
          correct: 2,
          rationale: 'A new AV fistula needs 4-6 weeks to mature (allow the venous wall to thicken and the vessel to enlarge enough to accommodate dialysis needles). During this maturation period, a temporary access (central venous catheter) is used for dialysis. Using the fistula too early risks damage and failure.'
        }
      ],
      y: [
        {
          stem: 'A bruit over an AV fistula is assessed by:',
          options: [
            'Visual inspection of the arm',
            'Listening with a stethoscope over the fistula',
            'Measuring the arm circumference',
            'Checking capillary refill in the fingers'
          ],
          correct: 1,
          rationale: 'A bruit is a sound — specifically a whooshing/buzzing sound created by turbulent blood flow through the fistula. It is assessed by placing a stethoscope over the fistula site. A thrill (vibration) is assessed by palpation. Both should be checked at least daily.'
        },
        {
          stem: 'Signs of AV fistula infection include:',
          options: [
            'Bruit and thrill at the site',
            'Redness, warmth, swelling, and drainage at the access site',
            'Cool, pale skin over the fistula',
            'Numbness in the fingertips'
          ],
          correct: 1,
          rationale: 'Infection signs at the AV fistula include redness, warmth, swelling, tenderness, and purulent drainage. Vascular access infections can lead to sepsis and are a major cause of morbidity in dialysis patients. Meticulous hand hygiene and aseptic technique during cannulation are essential prevention measures.'
        }
      ],
      r: [
        {
          stem: 'A thrill over an AV fistula is:',
          options: [
            'A sound heard with a stethoscope',
            'A vibration felt when touching the fistula site',
            'A visual pulsation seen on the skin',
            'A temperature difference between the arms'
          ],
          correct: 1,
          rationale: 'A thrill is a continuous palpable vibration (buzzing sensation) felt when touching the AV fistula site. It is caused by turbulent blood flow from the artery into the vein. The thrill is assessed by palpation, while the bruit is assessed by auscultation (stethoscope). Both indicate patent (open) blood flow.'
        }
      ]
    }
  },

  'Peritoneal Dialysis (PD)': {
    details: [
      'Uses the peritoneal membrane as the dialysis filter — dialysate instilled into abdomen, dwells, then drains',
      'Access: Silastic catheter surgically placed below the umbilicus',
      'Process: instill 1-3 L dialysate → dwell for prescribed time → drain by gravity into sterile bag',
      'Can be done at HOME by the patient (advantage over hemodialysis)',
      'Most serious complication: PERITONITIS (cloudy drainage, abdominal pain, fever)'
    ],
    questions: {
      g: [
        {
          stem: 'A patient on peritoneal dialysis notes the effluent (drainage) is CLOUDY. The nurse should:',
          options: [
            'Document and continue the next exchange — slight cloudiness is normal.',
            'Suspect peritonitis — obtain a sample for culture, notify the provider, and assess for abdominal pain and fever.',
            'Increase the dwell time to clear the cloudiness.',
            'Flush the catheter with heparin.'
          ],
          correct: 1,
          rationale: 'CLOUDY effluent in peritoneal dialysis is the hallmark sign of PERITONITIS — the most serious complication of PD. Normal effluent is clear/straw-colored. The nurse should obtain a sample for culture and sensitivity, notify the provider, and assess for other peritonitis signs (abdominal pain, fever, rebound tenderness). Antibiotics are usually added to the dialysate. This is never normal.'
        },
        {
          stem: 'A key advantage of peritoneal dialysis over hemodialysis is:',
          options: [
            'It removes waste more efficiently.',
            'It can be performed at home by the patient, allowing greater independence.',
            'It has no risk of infection.',
            'It does not require any access device.'
          ],
          correct: 1,
          rationale: 'PD can be performed at home (including overnight while sleeping = continuous ambulatory or automated PD), giving patients more independence and flexibility. Hemodialysis typically requires travel to a dialysis center 3x/week. PD does carry infection risk (peritonitis) and requires a catheter, but the home-based advantage significantly improves quality of life.'
        }
      ],
      y: [
        {
          stem: 'The most serious complication of peritoneal dialysis is:',
          options: [
            'Hypotension',
            'Peritonitis',
            'Disequilibrium syndrome',
            'AV fistula clotting'
          ],
          correct: 1,
          rationale: 'Peritonitis is the most serious complication of PD. It occurs when bacteria enter the peritoneal cavity through the catheter. Signs: cloudy effluent, abdominal pain, fever, rebound tenderness. Strict aseptic technique during exchanges is the primary prevention measure. AV fistula issues are related to hemodialysis, not PD.'
        },
        {
          stem: 'Where is the peritoneal dialysis catheter placed?',
          options: [
            'In the forearm vein',
            'Below the umbilicus into the peritoneal cavity',
            'In the jugular vein',
            'In the thigh'
          ],
          correct: 1,
          rationale: 'The PD catheter (Silastic/Tenckhoff) is surgically placed through the abdominal wall below the umbilicus, tunneled through subcutaneous tissue into the peritoneal cavity. This placement allows dialysate to fill the peritoneal space where the peritoneal membrane serves as the dialysis filter.'
        }
      ],
      r: [
        {
          stem: 'Peritoneal dialysis uses which structure as the dialysis membrane?',
          options: [
            'An artificial dialyzer machine',
            'The peritoneal membrane in the abdominal cavity',
            'The skin',
            'The blood vessel walls'
          ],
          correct: 1,
          rationale: 'PD uses the body\'s own peritoneal membrane (lining of the abdominal cavity) as the semipermeable filter. Dialysate is instilled into the peritoneal cavity, waste products diffuse from the blood (in peritoneal capillaries) into the dialysate, and the used dialysate is drained out.'
        }
      ]
    }
  },

  'Hemodialysis Complications': {
    details: [
      'Hypotension: MOST COMMON — from rapid fluid removal; treat with Trendelenburg, NS bolus, slow/stop ultrafiltration',
      'Disequilibrium syndrome: headache, nausea, confusion, seizures from rapid urea removal (osmotic brain edema)',
      'Infection: vascular access is a portal of entry — especially central venous catheters',
      'Muscle cramps: from rapid fluid/electrolyte shifts',
      'Air embolism: rare but life-threatening — clamp tubing, position patient on LEFT SIDE with head DOWN (Durant maneuver)'
    ],
    questions: {
      g: [
        {
          stem: 'During hemodialysis, the machine alarm sounds and the nurse sees air bubbles in the tubing. The FIRST action is:',
          options: [
            'Continue dialysis and monitor the patient.',
            'Clamp the tubing immediately to prevent air from entering the patient\'s bloodstream.',
            'Increase the blood flow rate.',
            'Call the dialysis technician.'
          ],
          correct: 1,
          rationale: 'Air in the dialysis tubing can cause air embolism — a life-threatening emergency. The FIRST action is to CLAMP the tubing immediately to prevent air from entering the patient\'s bloodstream. Then position the patient on their LEFT SIDE with head DOWN (Durant maneuver — traps air in the right atrium). Notify the provider immediately.'
        },
        {
          stem: 'A patient becomes hypotensive (BP 80/50) during hemodialysis with complaints of dizziness. Which action should the nurse take FIRST?',
          options: [
            'Continue dialysis at the current rate.',
            'Place the patient in Trendelenburg position and slow/stop the ultrafiltration rate.',
            'Administer a vasopressor.',
            'Disconnect the patient from the machine immediately.'
          ],
          correct: 1,
          rationale: 'Hypotension is the MOST COMMON hemodialysis complication. First: Trendelenburg position (legs elevated to promote venous return), slow or stop fluid removal (ultrafiltration), and administer a NS bolus if needed. Vasopressors are rarely needed. Do not disconnect — the blood in the circuit needs to be returned to the patient.'
        }
      ],
      y: [
        {
          stem: 'Disequilibrium syndrome during hemodialysis presents with:',
          options: [
            'Fever and chills',
            'Headache, nausea, confusion, and potential seizures',
            'Chest pain and shortness of breath',
            'Pruritus and skin rash'
          ],
          correct: 1,
          rationale: 'Disequilibrium syndrome presents with headache, nausea, vomiting, confusion, restlessness, and potentially seizures. It occurs from rapid removal of urea during dialysis, creating an osmotic gradient that draws fluid into brain cells. Prevention: slower initial dialysis sessions, shorter treatment times for first treatments.'
        },
        {
          stem: 'Which type of dialysis access has the HIGHEST infection rate?',
          options: [
            'AV fistula',
            'AV graft',
            'Central venous catheter',
            'All have equal infection rates'
          ],
          correct: 2,
          rationale: 'Central venous catheters (CVCs) have the highest infection rate of all dialysis accesses because they provide a direct portal of entry into the bloodstream. AV fistulas have the lowest infection rate and are preferred. AV grafts have intermediate rates. CVCs are used temporarily while fistulas mature.'
        }
      ],
      r: [
        {
          stem: 'The MOST common complication during hemodialysis is:',
          options: [
            'Air embolism',
            'Hypotension',
            'Stroke',
            'Cardiac arrest'
          ],
          correct: 1,
          rationale: 'Hypotension is the most common complication during hemodialysis, caused by rapid fluid removal exceeding the cardiovascular system\'s ability to compensate. Treatment: Trendelenburg, slow ultrafiltration, NS bolus. Frequent BP monitoring during dialysis helps detect early drops.'
        }
      ]
    }
  },

  'Kidney Stones': {
    details: [
      'Calcium oxalate/phosphate: 75-80% of all stones (MOST COMMON)',
      'Pain: renal colic — acute, episodic, EXCRUCIATING; flank + radiates to groin/testicle/labia',
      'Stone size: 1-5 mm stones move into ureter causing colicky pain; larger stones stay in pelvis causing dull ache',
      'Diagnosis: non-contrast CT scan (gold standard), UA (hematuria common), strain all urine to collect stone for analysis',
      'Treatment: hydration (flush stone), pain management, alpha-blockers (tamsulosin to relax ureter), lithotripsy, surgery for large stones'
    ],
    questions: {
      g: [
        {
          stem: 'A patient presents with sudden-onset severe left flank pain radiating to the groin, rated 10/10, that comes in waves. The nurse anticipates:',
          options: [
            'Appendicitis',
            'Renal colic from a kidney stone moving through the ureter',
            'Pyelonephritis',
            'Abdominal aortic aneurysm'
          ],
          correct: 1,
          rationale: 'Sudden, severe flank pain radiating to the groin that is COLICKY (comes in waves) is the classic presentation of renal colic — a kidney stone (1-5 mm) moving through the ureter. The waves correspond to peristaltic contractions of the ureter around the stone. Pyelonephritis has fever and CVA tenderness. Appendicitis is RLQ pain. AAA is pulsatile abdominal mass.'
        },
        {
          stem: 'A patient with a kidney stone asks why they need to strain all urine. The nurse explains:',
          options: [
            '"We need to check for blood in your urine."',
            '"We need to catch the stone for laboratory analysis to determine its composition and guide prevention."',
            '"It helps us measure your urine output accurately."',
            '"Straining prevents the stone from blocking the urine flow."'
          ],
          correct: 1,
          rationale: 'Straining all urine allows collection of the passed stone for laboratory analysis. Stone composition (calcium oxalate, uric acid, struvite, cystine) determines the underlying cause and guides specific dietary and medication prevention strategies. Different stone types require different prevention approaches. This is a critical patient teaching point.'
        }
      ],
      y: [
        {
          stem: 'The MOST common type of kidney stone is:',
          options: [
            'Uric acid',
            'Calcium oxalate/phosphate',
            'Struvite',
            'Cystine'
          ],
          correct: 1,
          rationale: 'Calcium oxalate/phosphate stones account for 75-80% of all kidney stones. Risk factors include hypercalciuria, immobility, hyperparathyroidism, and high-oxalate foods (spinach, nuts, chocolate). Uric acid stones (7%) are associated with gout. Struvite stones form with certain infections.'
        },
        {
          stem: 'The priority nursing intervention for a patient with acute renal colic is:',
          options: [
            'Force fluids immediately',
            'Pain management — renal colic is one of the most painful conditions',
            'Insert a urinary catheter',
            'Apply ice to the flank'
          ],
          correct: 1,
          rationale: 'Pain management is the immediate priority — renal colic is one of the most excruciating types of pain. NSAIDs (ketorolac) or opioids are used. IV fluids help flush the stone and prevent dehydration. Alpha-blockers (tamsulosin) may be given to relax the ureter and facilitate stone passage.'
        }
      ],
      r: [
        {
          stem: 'Kidney stone pain is typically described as:',
          options: [
            'Constant dull ache only',
            'Acute, episodic, colicky pain that comes in waves',
            'Burning pain with urination only',
            'Painless — kidney stones don\'t cause pain'
          ],
          correct: 1,
          rationale: 'Renal colic is acute, episodic pain that comes in waves — caused by the ureter contracting (peristalsis) around the stone as it moves. The pain is often described as the worst pain the patient has ever experienced. Larger stones in the renal pelvis may cause a constant dull ache rather than colic.'
        }
      ]
    }
  },

  'Calcium Oxalate Stones': {
    details: [
      '75-80% of all kidney stones — the MOST COMMON type',
      'Risk factors: hypercalciuria, immobility, hyperparathyroidism, high-oxalate diet',
      'High-oxalate foods to LIMIT: spinach, rhubarb, nuts, chocolate, tea, beets',
      'Prevention: increase fluid intake (>2.5 L/day), limit oxalate-rich foods, thiazide diuretics (decrease urinary calcium)',
      'Calcium intake should be MODERATE (not eliminated) — dietary calcium actually binds oxalate in the gut, reducing absorption'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with recurrent calcium oxalate stones asks if they should eliminate all calcium from their diet. The nurse responds:',
          options: [
            '"Yes — eliminating calcium will prevent more stones."',
            '"No — moderate dietary calcium actually helps because it binds oxalate in the gut, reducing the oxalate absorbed and excreted by the kidneys."',
            '"Calcium supplements are better than dietary calcium for stone prevention."',
            '"Calcium has no relationship to oxalate stones."'
          ],
          correct: 1,
          rationale: 'Counterintuitively, moderate dietary calcium REDUCES calcium oxalate stone risk. Calcium binds oxalate in the GI tract, preventing oxalate absorption into the blood and excretion by the kidneys. Eliminating calcium increases free oxalate absorption and actually INCREASES stone risk. However, calcium supplements taken between meals may increase risk. Dietary calcium WITH meals is the recommendation.'
        },
        {
          stem: 'Which dietary teaching is appropriate for preventing calcium oxalate stones?',
          options: [
            'Increase intake of spinach, nuts, and chocolate.',
            'Drink >2.5 liters of fluid daily and limit high-oxalate foods (spinach, nuts, chocolate, tea).',
            'Follow a high-sodium diet to increase urine volume.',
            'Restrict all fluids to concentrate the urine.'
          ],
          correct: 1,
          rationale: 'Prevention: (1) increase fluid intake >2.5 L/day (dilutes urine, prevents crystal formation), (2) limit high-oxalate foods (spinach, rhubarb, nuts, chocolate, beets, tea), (3) maintain moderate dietary calcium (binds oxalate in gut), (4) limit sodium (high sodium increases urinary calcium). High sodium and fluid restriction would INCREASE stone risk.'
        }
      ],
      y: [
        {
          stem: 'Which foods are HIGH in oxalate and should be limited for calcium oxalate stone prevention?',
          options: [
            'Chicken, rice, and apples',
            'Spinach, nuts, chocolate, and tea',
            'Dairy products and eggs',
            'Bananas and oranges'
          ],
          correct: 1,
          rationale: 'High-oxalate foods include spinach, rhubarb, nuts, chocolate, tea, and beets. These contribute to urinary oxalate excretion, promoting calcium oxalate stone formation. Patients with recurrent stones should limit these foods and increase fluid intake.'
        },
        {
          stem: 'The MOST important prevention measure for all kidney stones is:',
          options: [
            'Eliminating all calcium from the diet',
            'Increasing fluid intake to >2.5 liters per day',
            'Taking antibiotics daily',
            'Restricting protein intake'
          ],
          correct: 1,
          rationale: 'Adequate hydration (>2.5 L/day) is the single most important prevention measure for ALL types of kidney stones. Dilute urine prevents crystal supersaturation and stone formation. Patients should aim for pale yellow urine as an indicator of adequate hydration.'
        }
      ],
      r: [
        {
          stem: 'Calcium oxalate stones are the:',
          options: [
            'Rarest type of kidney stone',
            'Most common type, accounting for 75-80% of all stones',
            'Only type found in children',
            'Only type caused by infection'
          ],
          correct: 1,
          rationale: 'Calcium oxalate/phosphate stones are the most common type, making up 75-80% of all kidney stones. They form when calcium and oxalate concentrations in the urine exceed solubility. Risk factors include dehydration, high-oxalate diet, immobility, and hyperparathyroidism.'
        }
      ]
    }
  },

  'UTI': {
    details: [
      'More common in WOMEN (shorter urethra = less resistance to ascending bacteria)',
      'Most common organism: E. coli (ascending from GI tract/perineum)',
      'Lower UTI (cystitis): frequency, urgency, dysuria, cloudy/foul urine — NO systemic signs (no fever)',
      'Upper UTI (pyelonephritis): flank/CVA pain, fever, chills, nausea — systemic signs present',
      'Prevention: adequate hydration, front-to-back wiping, void after intercourse, avoid holding urine'
    ],
    questions: {
      g: [
        {
          stem: 'A patient presents with dysuria, urgency, frequency, and suprapubic discomfort but NO fever. The nurse differentiates this from pyelonephritis because:',
          options: [
            'Pyelonephritis does not cause urinary symptoms.',
            'Cystitis is a lower UTI without systemic signs; pyelonephritis is an upper UTI with fever, flank/CVA pain, and systemic symptoms.',
            'They are the same condition with different names.',
            'Cystitis only occurs in men.'
          ],
          correct: 1,
          rationale: 'Lower UTI (cystitis) presents with LOCAL symptoms: dysuria, frequency, urgency, suprapubic discomfort, cloudy/foul urine — WITHOUT fever or systemic signs. Upper UTI (pyelonephritis) has all the above PLUS systemic signs: fever, chills, flank/CVA tenderness, nausea/vomiting. The presence of fever and flank pain differentiates upper from lower UTI.'
        },
        {
          stem: 'Why are women more susceptible to UTIs than men?',
          options: [
            'Women have weaker immune systems.',
            'Women have a shorter urethra, providing less resistance to ascending bacteria from the perineum.',
            'Women produce more acidic urine.',
            'Men are immune to UTIs.'
          ],
          correct: 1,
          rationale: 'Women have a significantly shorter urethra (~4 cm vs ~20 cm in men), which provides less distance for bacteria to travel from the perineal area to the bladder. Additionally, the female urethra is closer to the vagina and rectum (GI flora). Men have added protection from their longer urethra and antibacterial properties of prostatic fluid.'
        }
      ],
      y: [
        {
          stem: 'The MOST common causative organism for UTIs is:',
          options: [
            'Staphylococcus aureus',
            'Escherichia coli (E. coli)',
            'Streptococcus pneumoniae',
            'Candida albicans'
          ],
          correct: 1,
          rationale: 'E. coli is the most common cause of UTIs, accounting for ~80% of uncomplicated infections. It ascends from the GI tract/perineum into the urethra and bladder. Other organisms include Proteus, Klebsiella, and Enterobacter. S. aureus is notable because it reaches the kidneys via the BLOODSTREAM (hematogenous), not ascending.'
        },
        {
          stem: 'Which patient teaching helps prevent UTIs?',
          options: [
            'Limit fluid intake to reduce urination.',
            'Wipe front-to-back, drink adequate fluids, and void after intercourse.',
            'Take prophylactic antibiotics daily.',
            'Avoid bathing to keep the perineal area dry.'
          ],
          correct: 1,
          rationale: 'UTI prevention: front-to-back wiping (prevents GI flora from reaching urethra), adequate hydration (dilutes and flushes bacteria), voiding after intercourse (expels bacteria pushed into urethra), avoiding prolonged holding of urine, and cotton underwear. Daily antibiotics are not recommended for prevention in most patients.'
        }
      ],
      r: [
        {
          stem: 'Symptoms of a lower UTI (cystitis) include:',
          options: [
            'Flank pain, high fever, and chills',
            'Frequency, urgency, dysuria, and cloudy urine',
            'Chest pain and shortness of breath',
            'Joint pain and rash'
          ],
          correct: 1,
          rationale: 'Lower UTI (cystitis) presents with frequency (frequent urination), urgency (sudden need to void), dysuria (painful urination), and cloudy/foul-smelling urine. There are typically NO systemic signs (no fever). Flank pain and fever indicate upper UTI (pyelonephritis).'
        }
      ]
    }
  },

  'CAUTI Prevention': {
    details: [
      'CAUTI = catheter-associated urinary tract infection — major hospital-acquired infection',
      'Prevention: use catheters ONLY when necessary, remove as soon as possible',
      'Sterile technique during insertion; maintain closed drainage system',
      'Keep drainage bag BELOW bladder level (gravity drainage prevents backflow)',
      'Do NOT routinely irrigate; do NOT clean periurethral area with antiseptic (soap and water sufficient)'
    ],
    questions: {
      g: [
        {
          stem: 'Which action is the MOST effective intervention to prevent CAUTI?',
          options: [
            'Changing the catheter every 48 hours.',
            'Removing the catheter as soon as it is no longer clinically necessary.',
            'Irrigating the catheter daily with antibiotic solution.',
            'Applying antibiotic ointment to the catheter insertion site.'
          ],
          correct: 1,
          rationale: 'The MOST effective CAUTI prevention is removing the catheter as soon as it is no longer needed. Every additional day with a catheter increases infection risk. Nurse-driven catheter removal protocols have significantly reduced CAUTI rates. Routine irrigation is NOT recommended. Antibiotic ointment at the site is NOT recommended. Changing catheters on a schedule is NOT evidence-based.'
        },
        {
          stem: 'A nurse notices the catheter drainage bag is hanging on the bed rail ABOVE the level of the patient\'s bladder. Which action is needed?',
          options: [
            'This position is fine as long as the bag is not full.',
            'Lower the bag below the bladder level immediately to prevent urine backflow and infection risk.',
            'Raise the bag higher to increase flow.',
            'Clamp the tubing until the bag can be repositioned.'
          ],
          correct: 1,
          rationale: 'The drainage bag must ALWAYS be below the level of the bladder to allow gravity drainage and prevent urine reflux (backflow) into the bladder, which introduces bacteria and increases CAUTI risk. This is a basic catheter care principle. The bag should never touch the floor either.'
        }
      ],
      y: [
        {
          stem: 'The catheter drainage bag should be positioned:',
          options: [
            'Above the bladder level on the IV pole',
            'Below the bladder level and off the floor',
            'At the same level as the bladder',
            'On the floor for maximum drainage'
          ],
          correct: 1,
          rationale: 'The drainage bag must be below the bladder (gravity drainage prevents backflow/reflux) but NOT on the floor (contamination risk). It is typically secured to the bed frame below mattress level. Keeping the system closed and below the bladder are the two most important catheter care principles.'
        },
        {
          stem: 'Which is a nursing priority for CAUTI prevention?',
          options: [
            'Use the largest catheter size available.',
            'Maintain a closed drainage system and sterile technique during insertion.',
            'Irrigate the catheter every 8 hours with sterile water.',
            'Clean the insertion site with betadine three times daily.'
          ],
          correct: 1,
          rationale: 'Maintaining a closed drainage system (do not disconnect tubing unnecessarily) and using sterile technique during insertion are key CAUTI prevention strategies. Use the smallest catheter that drains effectively. Routine irrigation is NOT recommended. Daily cleansing with soap and water (not antiseptics) is sufficient for meatal care.'
        }
      ],
      r: [
        {
          stem: 'CAUTI stands for:',
          options: [
            'Community-Acquired Urinary Tract Infection',
            'Catheter-Associated Urinary Tract Infection',
            'Chronic Acute Urinary Tract Infection',
            'Complicated Antibiotic-resistant UTI'
          ],
          correct: 1,
          rationale: 'CAUTI = Catheter-Associated Urinary Tract Infection. It is one of the most common hospital-acquired infections and is largely preventable through proper catheter care and early removal. Minimizing catheter use is the single best prevention strategy.'
        }
      ]
    }
  },

  'Autonomic Dysreflexia': {
    details: [
      'Life-threatening hypertensive emergency in patients with spinal cord injury at T6 or ABOVE',
      'Triggered by noxious stimulus below the level of injury: distended bladder (most common), constipation, tight clothing, skin irritation',
      'Massive sympathetic response: severe hypertension (up to 300 mmHg systolic), pounding headache, bradycardia, flushing/sweating above injury',
      'FIRST action: sit the patient UP (lowers BP with gravity) and identify/remove the trigger',
      'Check bladder FIRST (most common cause) — straight catheterize if indwelling is kinked/blocked'
    ],
    questions: {
      g: [
        {
          stem: 'A patient with a T4 spinal cord injury suddenly develops BP of 240/130, pounding headache, and facial flushing. The nurse\'s FIRST action is:',
          options: [
            'Administer IV antihypertensives.',
            'Sit the patient up immediately and check for a distended bladder.',
            'Place the patient flat and call a code.',
            'Administer oxygen and monitor.'
          ],
          correct: 1,
          rationale: 'Autonomic dysreflexia is a medical emergency. FIRST: sit the patient UP (gravity helps lower BP). THEN: identify and remove the trigger. Check the bladder FIRST (most common cause — kinked catheter, full bag, urinary retention). If the patient has an indwelling catheter, check for kinks/obstruction. If no catheter, straight catheterize. Also check for constipation, tight clothing, skin breakdown. Antihypertensives are used if trigger removal doesn\'t resolve the crisis.'
        },
        {
          stem: 'The MOST common trigger for autonomic dysreflexia is:',
          options: [
            'Pain from a fracture',
            'A full/distended bladder or blocked urinary catheter',
            'Emotional stress',
            'Cold environmental temperature'
          ],
          correct: 1,
          rationale: 'A distended bladder is the MOST COMMON trigger for autonomic dysreflexia. The full bladder sends a noxious stimulus through the spinal cord, but the injury blocks the normal response, causing an uncontrolled massive sympathetic discharge below the injury and parasympathetic response above it. Always check the bladder FIRST — this is the #1 priority in assessment.'
        }
      ],
      y: [
        {
          stem: 'Autonomic dysreflexia occurs in patients with spinal cord injuries at:',
          options: [
            'Any spinal level',
            'T6 or ABOVE',
            'Below T12 only',
            'Only cervical injuries'
          ],
          correct: 1,
          rationale: 'Autonomic dysreflexia occurs in patients with spinal cord injuries at T6 or ABOVE. At this level, the major splanchnic outflow (which controls blood vessel tone in a large vascular bed) is below the injury. A noxious stimulus below the injury triggers massive, uncontrolled sympathetic vasoconstriction that the brain cannot regulate through the damaged cord.'
        },
        {
          stem: 'Besides a distended bladder, which can trigger autonomic dysreflexia?',
          options: [
            'Eating a large meal',
            'Constipation/fecal impaction, tight clothing, or skin irritation below the injury',
            'Watching television',
            'Taking prescribed medications'
          ],
          correct: 1,
          rationale: 'Any noxious stimulus below the level of injury can trigger autonomic dysreflexia: constipation/fecal impaction (second most common), tight clothing/shoes, skin breakdown/pressure injury, ingrown toenails, temperature extremes, and urinary retention. After checking the bladder, check for bowel distension and skin/clothing issues.'
        }
      ],
      r: [
        {
          stem: 'The FIRST nursing action for autonomic dysreflexia is:',
          options: [
            'Lay the patient flat',
            'Sit the patient up',
            'Administer IV medications',
            'Call a code blue'
          ],
          correct: 1,
          rationale: 'Sit the patient UP immediately — this uses gravity to help lower the dangerously high blood pressure. Then identify and remove the noxious stimulus (check bladder first, then bowel, clothing, skin). Laying flat would worsen the hypertension. Medications are used if trigger removal doesn\'t resolve the crisis.'
        }
      ]
    }
  }

};

console.log('DRUG_DEEP_AH_RENAL_V2 loaded:', Object.keys(window.DRUG_DEEP_AH_RENAL_V2).length, 'topics');
