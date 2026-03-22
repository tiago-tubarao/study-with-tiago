// ==================================================
// NCLEX Questions — HEMATOLOGY GROUP (15 drugs × 9 questions = 135 total)
// 3 difficulty levels: g=green(hardest), y=yellow(moderate), r=red(foundational)
// Anticoagulants (6) + Antiplatelets (2) + Thrombolytics (1) + Growth Factors (4) + Immunosuppressants (2)
// Generated: 2026-03-22
// ==================================================

window.DRUG_DEEP_HEMATOLOGY = {


  // ============================================================
  // ANTICOAGULANTS
  // ============================================================

  'Heparin (Unfractionated)': {
    details: [
      'IV or SubQ administration — fast-acting anticoagulant, short half-life (~1-2 hours IV)',
      'Monitor aPTT: therapeutic range 60-100 seconds (1.5-2.5x normal of 25-35 seconds)',
      'Antidote: protamine sulfate (1 mg per 100 units of heparin given in last 4 hours)',
      'HIT (Heparin-Induced Thrombocytopenia): platelets drop >50% on days 5-10 — paradoxically causes CLOTTING, not bleeding',
      'HIT management: stop ALL heparin products immediately including flushes and heparin-coated catheters; switch to direct thrombin inhibitor (argatroban)',
      'Weight-based dosing for IV; SubQ for DVT prophylaxis; does NOT cross placenta (safe in pregnancy)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient receiving a continuous heparin IV infusion has an aPTT result of 128 seconds (normal: 25-35 seconds). The patient reports new-onset bleeding from the gums while brushing teeth. Which action should the nurse take FIRST?',
          options: [
            'A) Stop the heparin infusion and notify the provider',
            'B) Administer protamine sulfate as prescribed',
            'C) Administer vitamin K (phytonadione) IV',
            'D) Decrease the infusion rate by 2 units/kg/hour and recheck aPTT in 6 hours',
          ],
          correct: 0,
          rationale: 'A) CORRECT — The aPTT is critically elevated (>3x normal) with active bleeding. The FIRST nursing action is to stop the infusion to prevent further anticoagulation, then notify the provider. Protamine sulfate may be ordered, but stopping the infusion is an independent nursing action that should happen immediately. B) Protamine sulfate is the correct antidote for heparin, but it requires a provider order and the nurse should stop the source of the problem first. C) Vitamin K reverses WARFARIN, not heparin — this is a classic exam trap. D) Simply decreasing the rate is inadequate when the patient is actively bleeding with a critically elevated aPTT.',
        },
        {
          stem: 'A patient has been receiving heparin IV for 7 days for treatment of a pulmonary embolism. The morning labs show: platelet count 68,000/mm3 (baseline on admission was 245,000/mm3). The patient reports new pain and swelling in the right leg. Which interpretation by the nurse is MOST accurate?',
          options: [
            'A) The patient is experiencing expected heparin-induced bleeding and needs protamine sulfate',
            'B) The patient likely has heparin-induced thrombocytopenia (HIT) and is at risk for new thrombus formation',
            'C) The platelet drop is a normal response to heparin therapy and requires no intervention',
            'D) The patient has developed disseminated intravascular coagulation (DIC) from the PE',
          ],
          correct: 1,
          rationale: 'B) CORRECT — This is classic HIT (Type II): platelet drop >50% from baseline (245K to 68K = 72% drop) occurring on day 7 (typical window: days 5-10), with a NEW thrombus (DVT symptoms in the right leg). HIT paradoxically causes CLOTTING, not bleeding. All heparin products must be stopped immediately. A) HIT causes thrombosis, not bleeding — this misses the paradox. Also, protamine reverses heparin\'s anticoagulant effect but does not treat HIT. C) A >50% drop in platelets is NOT normal — this requires immediate evaluation. D) While DIC is possible with PE, the timing (day 7 of heparin), degree of platelet drop, and new DVT formation are textbook HIT presentation.',
        },
        {
          stem: 'A patient diagnosed with heparin-induced thrombocytopenia (HIT) is being transitioned off heparin. The nurse reviews the medication administration record and identifies that the patient has a peripheral IV with heparin flushes ordered every 8 hours. Which action is PRIORITY?',
          options: [
            'A) Continue the heparin flushes since they are a low dose that will not worsen HIT',
            'B) Discontinue the heparin flushes immediately and switch to normal saline flushes',
            'C) Hold the flushes and wait for the provider to change the order during morning rounds',
            'D) Administer the flush with protamine sulfate premedication to prevent a reaction',
          ],
          correct: 1,
          rationale: 'B) CORRECT — In HIT, ALL heparin exposure must be eliminated immediately — this includes IV flushes, heparin-coated catheters, and subcutaneous heparin. Even tiny amounts of heparin can trigger the immune-mediated platelet activation that causes life-threatening thrombosis. Switching to normal saline flushes is the standard replacement. A) DANGEROUS — there is NO safe dose of heparin in a patient with HIT. Even flush doses contain enough heparin to perpetuate the antibody-mediated reaction. C) Waiting for morning rounds delays action on a time-sensitive safety issue. The nurse should act immediately and notify the provider. D) Protamine reverses heparin\'s anticoagulant effect but does not prevent or treat the immune-mediated HIT reaction.',
        },
      ],
      y: [
        {
          stem: 'A nurse is initiating a heparin infusion for a patient with a new deep vein thrombosis. The provider orders: "Heparin 80 units/kg IV bolus, then 18 units/kg/hour continuous infusion." The patient weighs 75 kg. Which assessment should the nurse plan to perform 6 hours after initiating the infusion?',
          options: [
            'A) Prothrombin time (PT) and International Normalized Ratio (INR)',
            'B) Activated partial thromboplastin time (aPTT)',
            'C) Complete blood count with differential',
            'D) Anti-factor Xa level',
          ],
          correct: 1,
          rationale: 'B) CORRECT — aPTT is the standard monitoring test for unfractionated heparin IV therapy. It is typically drawn 6 hours after initiation or any dose change, with a therapeutic goal of 60-100 seconds (1.5-2.5x normal). A) PT/INR monitors WARFARIN, not heparin. This is one of the most commonly tested distinctions. D) Anti-factor Xa levels are used to monitor LOW-molecular-weight heparin (enoxaparin), not unfractionated heparin. C) CBC is important for baseline and monitoring for HIT, but it is not the specific test drawn at 6 hours to assess therapeutic anticoagulation.',
        },
        {
          stem: 'A nurse is caring for a pregnant patient at 28 weeks gestation who has been diagnosed with a deep vein thrombosis. The provider prescribes heparin for anticoagulation. The patient asks, "Why can\'t I just take a blood thinner pill instead?" Which response by the nurse is MOST accurate?',
          options: [
            'A) "Oral blood thinners work too slowly for a DVT during pregnancy."',
            'B) "Heparin does not cross the placenta, so it is safe for your baby, unlike oral blood thinners like warfarin."',
            'C) "Heparin is cheaper than oral medications, so it is preferred during pregnancy."',
            'D) "All blood thinners are equally safe in pregnancy, but your provider prefers heparin."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Heparin (both UFH and LMWH) does not cross the placenta due to its large molecular size, making it the anticoagulant of choice in pregnancy. Warfarin is teratogenic (FDA Category X) — it crosses the placenta and can cause nasal hypoplasia, stippled epiphyses, and CNS abnormalities. A) Speed of onset is not the primary reason heparin is preferred in pregnancy. C) Cost is not the clinical rationale. D) Warfarin is explicitly contraindicated in pregnancy — they are NOT equally safe.',
        },
        {
          stem: 'A patient receiving heparin IV infusion has an aPTT of 42 seconds (therapeutic range: 60-100 seconds). Which action should the nurse take?',
          options: [
            'A) Continue the current infusion rate and recheck the aPTT in 6 hours',
            'B) Notify the provider that the aPTT is subtherapeutic and anticipate a dose increase',
            'C) Hold the infusion for 1 hour, then restart at the current rate',
            'D) Administer protamine sulfate for the elevated aPTT',
          ],
          correct: 1,
          rationale: 'B) CORRECT — An aPTT of 42 seconds is BELOW the therapeutic range of 60-100 seconds, meaning the patient is not adequately anticoagulated and remains at risk for clot extension. The nurse should notify the provider to increase the dose per the heparin protocol. A) Continuing at the current rate leaves the patient subtherapeutic and at risk for thrombosis. C) Holding the infusion would further decrease anticoagulation — the opposite of what is needed. D) Protamine sulfate reverses heparin and would be given for a SUPRATHERAPEUTIC aPTT with bleeding, not a subtherapeutic level. The trap: 42 seconds sounds like it could be "close enough" to normal, but normal (25-35) is NOT the goal — the therapeutic range is 60-100.',
        },
      ],
      r: [
        {
          stem: 'A nursing student asks, "What lab test do we monitor for a patient on a heparin drip?" Which response by the nurse is correct?',
          options: [
            'A) PT/INR',
            'B) aPTT',
            'C) CBC with differential',
            'D) Bleeding time',
          ],
          correct: 1,
          rationale: 'B) CORRECT — aPTT (activated partial thromboplastin time) monitors the intrinsic coagulation pathway affected by heparin. The therapeutic range is 60-100 seconds. A) PT/INR monitors the extrinsic pathway and is used for warfarin monitoring. C) CBC is monitored to detect HIT and anemia, but it is not the specific coagulation test for heparin efficacy. D) Bleeding time is an outdated test rarely used in clinical practice.',
        },
        {
          stem: 'Which medication is the specific antidote for heparin toxicity?',
          options: [
            'A) Vitamin K (phytonadione)',
            'B) Protamine sulfate',
            'C) Aminocaproic acid (Amicar)',
            'D) Idarucizumab (Praxbind)',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Protamine sulfate binds to heparin and neutralizes its anticoagulant effect. Dose: 1 mg protamine per 100 units of heparin administered in the previous 4 hours. A) Vitamin K reverses warfarin, not heparin. C) Aminocaproic acid is an antifibrinolytic used for alteplase (tPA) overdose. D) Idarucizumab (Praxbind) is the specific antidote for dabigatran (Pradaxa).',
        },
        {
          stem: 'A nurse is administering subcutaneous heparin for DVT prophylaxis. Which technique is correct?',
          options: [
            'A) Inject into the deltoid muscle at a 90-degree angle',
            'B) Inject into the abdominal fatty tissue, avoiding the umbilicus by 2 inches, and do NOT aspirate or massage',
            'C) Inject into the vastus lateralis and massage the site to promote absorption',
            'D) Inject into the abdomen and apply firm pressure with an alcohol swab afterward',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Subcutaneous heparin is given in abdominal fatty tissue, at least 2 inches from the umbilicus. Do NOT aspirate (increases bruising risk) and do NOT massage (increases hematoma formation and alters absorption). A) Heparin SubQ is not given intramuscularly — IM injection increases bleeding risk into muscle tissue. C) Massaging after injection causes tissue trauma and hematoma formation. D) Firm pressure with an alcohol swab irritates the injection site and increases bruising.',
        },
      ],
    },
  },

  'Enoxaparin (Lovenox)': {
    details: [
      'Low-molecular-weight heparin (LMWH) — more predictable response than UFH, SubQ only',
      'Weight-based dosing: treatment = 1 mg/kg SubQ q12h; prophylaxis = 30-40 mg SubQ daily',
      'No routine aPTT monitoring needed — monitor anti-factor Xa levels if needed (renal impairment, obesity, pregnancy)',
      'Partial reversal with protamine sulfate (60-75% reversal only — less effective than for UFH)',
      'Injection technique: SubQ into abdomen, do NOT expel air bubble, do NOT rub injection site, rotate sites',
      'Renal dose adjustment: CrCl <30 mL/min — reduce dose or switch to UFH. Accumulates in renal failure.',
    ],
    questions: {
      g: [
        {
          stem: 'A patient receiving enoxaparin (Lovenox) 1 mg/kg SubQ every 12 hours for DVT treatment develops active bleeding from a surgical wound. The provider orders protamine sulfate. The nurse should anticipate that protamine will:',
          options: [
            'A) Fully reverse the anticoagulant effect of enoxaparin within minutes',
            'B) Partially reverse enoxaparin — approximately 60-75% neutralization',
            'C) Have no effect on enoxaparin since protamine only works for unfractionated heparin',
            'D) Require a higher dose than would be used for unfractionated heparin reversal',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Protamine sulfate only partially reverses enoxaparin (approximately 60-75% of the anti-Xa activity). This is because protamine binds to the larger heparin fragments but cannot fully neutralize the smaller fragments unique to LMWH. A) Full reversal does not occur with LMWH — this is a key distinction from UFH, where protamine provides near-complete reversal. C) Protamine DOES have partial effect on LMWH — it is the best available reversal agent, even if incomplete. D) The issue is not dose — it is the molecular structure of LMWH that prevents complete binding. The trap: knowing protamine is the antidote for "heparin" but not understanding the critical difference between UFH and LMWH reversal.',
        },
        {
          stem: 'A nurse is reviewing morning labs for a patient with a creatinine clearance of 22 mL/min who is prescribed enoxaparin (Lovenox) 80 mg SubQ every 12 hours for a PE. Which action is MOST appropriate?',
          options: [
            'A) Administer the enoxaparin as prescribed since the dose is weight-based',
            'B) Hold the dose and notify the provider — the CrCl requires dose adjustment or a switch to UFH',
            'C) Administer the dose with extra monitoring of aPTT levels',
            'D) Administer the dose and request anti-factor Xa levels to be drawn',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Enoxaparin is renally cleared and accumulates in patients with CrCl <30 mL/min, significantly increasing bleeding risk. The dose must be reduced (typically to once daily) or the patient should be switched to UFH, which is hepatically cleared. A) Administering the full dose in renal impairment is dangerous — LMWH accumulation increases hemorrhage risk. C) aPTT does not monitor LMWH — this reflects confusion with UFH monitoring. D) While anti-Xa monitoring is used in renal impairment, the first action is to hold the dose and notify the provider about the CrCl, not to give the dose and then check levels after the fact.',
        },
        {
          stem: 'A postoperative patient receiving enoxaparin (Lovenox) 40 mg SubQ daily for DVT prophylaxis develops sudden-onset dyspnea, tachycardia (HR 118), SpO2 88%, and pleuritic chest pain on postoperative day 3. Which action should the nurse take FIRST?',
          options: [
            'A) Increase the enoxaparin dose since the prophylactic dose appears insufficient',
            'B) Apply supplemental oxygen and notify the provider immediately — suspect PE despite anticoagulation',
            'C) Hold the enoxaparin since the patient may be bleeding internally',
            'D) Administer a bronchodilator for suspected postoperative pneumonia',
          ],
          correct: 1,
          rationale: 'B) CORRECT — The presentation (sudden dyspnea, tachycardia, hypoxia, pleuritic chest pain) is classic for pulmonary embolism. PE can still occur despite prophylactic anticoagulation — prophylaxis reduces risk but does not eliminate it. The first action is to address the ABCs (oxygen for hypoxia) and notify the provider for emergent workup (CT angiography). A) A nurse cannot independently increase the anticoagulant dose. C) These symptoms suggest clot, not bleed — holding anticoagulation would worsen a PE. D) The acute onset and pleuritic nature do not match pneumonia — this presentation is PE until proven otherwise.',
        },
      ],
      y: [
        {
          stem: 'A nurse is teaching a patient who is being discharged on enoxaparin (Lovenox) self-injections for DVT prevention after hip replacement. Which patient statement requires further teaching?',
          options: [
            'A) "I will inject into the fatty area of my abdomen at least 2 inches from my belly button."',
            'B) "I should rub the injection site after giving the shot to help it absorb better."',
            'C) "I will alternate sides of my abdomen with each injection."',
            'D) "I should not expel the small air bubble from the syringe before injecting."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — NEVER rub the injection site after enoxaparin administration. Rubbing increases the risk of bruising and hematoma formation at the injection site. A) Correct technique — abdominal fatty tissue, 2 inches from the umbilicus. C) Correct — rotating injection sites prevents tissue damage and lipodystrophy. D) Correct — the air bubble in prefilled syringes is intentional and should NOT be expelled. It follows the medication and ensures the full dose is delivered.',
        },
        {
          stem: 'A nurse is caring for a patient on enoxaparin (Lovenox) who is scheduled for an elective knee replacement in 5 days. The surgeon requests that the enoxaparin be held preoperatively. When should the nurse anticipate holding the last dose?',
          options: [
            'A) 4 hours before surgery',
            'B) 12 hours before surgery',
            'C) 24 hours before surgery',
            'D) 48 hours before surgery',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Enoxaparin is typically held 24 hours before a surgical procedure to allow adequate clearance and reduce bleeding risk during surgery. A) 4 hours is insufficient clearance time for LMWH. B) 12 hours may be used for prophylactic doses in some protocols, but 24 hours is the standard recommendation for treatment doses. D) 48 hours is excessive for enoxaparin, which has a half-life of approximately 4.5 hours.',
        },
        {
          stem: 'A nurse is caring for a patient receiving both enoxaparin (Lovenox) and warfarin (Coumadin) simultaneously after being diagnosed with a DVT. The patient asks, "Why am I on two blood thinners at the same time?" Which explanation is MOST accurate?',
          options: [
            'A) "We give two blood thinners because your clot is very large and one is not enough."',
            'B) "Enoxaparin works immediately while warfarin takes 3 to 5 days to become effective. Once your INR is therapeutic, the enoxaparin will be stopped."',
            'C) "The enoxaparin prevents new clots while the warfarin dissolves the existing clot."',
            'D) "Both medications must be continued long-term for adequate DVT treatment."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — This describes "bridging therapy." Warfarin takes 3-5 days to reach therapeutic levels (INR 2-3) because it inhibits vitamin K-dependent clotting factor synthesis, and existing factors must be depleted. Enoxaparin provides immediate anticoagulation during this gap. Once INR is 2-3 for at least 24 hours, enoxaparin is discontinued. A) The rationale is not clot size — it is the delayed onset of warfarin. C) Neither enoxaparin nor warfarin dissolves clots — only thrombolytics (alteplase) dissolve existing clots. Anticoagulants prevent clot EXTENSION and NEW clot formation. D) Enoxaparin is a bridge, not a long-term medication in this scenario.',
        },
      ],
      r: [
        {
          stem: 'Which route of administration is correct for enoxaparin (Lovenox)?',
          options: [
            'A) Intravenous (IV) push',
            'B) Intramuscular (IM) injection into the deltoid',
            'C) Subcutaneous (SubQ) injection into the abdomen',
            'D) Oral (PO) tablet with food',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Enoxaparin is given subcutaneously, typically into the abdominal fatty tissue. A) Enoxaparin is not given IV (unlike UFH which can be given IV). B) IM injection is contraindicated for anticoagulants due to risk of intramuscular hematoma. D) Enoxaparin is an injectable medication — it is not available in oral form.',
        },
        {
          stem: 'A nurse is monitoring a patient receiving enoxaparin (Lovenox). Which lab test, if ordered, would the nurse use to assess the therapeutic level of this medication?',
          options: [
            'A) aPTT (activated partial thromboplastin time)',
            'B) PT/INR (prothrombin time/international normalized ratio)',
            'C) Anti-factor Xa level',
            'D) Fibrinogen level',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Anti-factor Xa levels are used to monitor LMWH when monitoring is needed (renal impairment, extremes of body weight, pregnancy). Routine monitoring is generally NOT required for LMWH. A) aPTT monitors unfractionated heparin, not LMWH. B) PT/INR monitors warfarin. D) Fibrinogen level is used to assess DIC or fibrinolytic therapy, not LMWH.',
        },
        {
          stem: 'Enoxaparin (Lovenox) is classified as which type of anticoagulant?',
          options: [
            'A) Direct thrombin inhibitor',
            'B) Vitamin K antagonist',
            'C) Low-molecular-weight heparin (LMWH)',
            'D) Factor Xa inhibitor (oral)',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Enoxaparin is a low-molecular-weight heparin derived from unfractionated heparin. It works primarily by inhibiting factor Xa through antithrombin activation, with less effect on thrombin compared to UFH. A) Direct thrombin inhibitors include dabigatran (Pradaxa) and argatroban. B) Vitamin K antagonist describes warfarin. D) Oral factor Xa inhibitors include rivaroxaban (Xarelto) and apixaban (Eliquis).',
        },
      ],
    },
  },

  'Warfarin (Coumadin)': {
    details: [
      'Vitamin K antagonist — oral anticoagulant with delayed onset (3-5 days for full effect)',
      'Monitor PT/INR: goal INR 2.0-3.0 (standard); 2.5-3.5 (mechanical heart valves)',
      'Antidote: Vitamin K (phytonadione) for slow reversal; Fresh Frozen Plasma (FFP) or PCC for rapid reversal',
      'TERATOGENIC (FDA Category X) — causes nasal hypoplasia, stippled epiphyses, CNS abnormalities. Never in pregnancy.',
      'Vitamin K foods (dark leafy greens) must be eaten CONSISTENTLY — not avoided, just consistent. Changes affect INR.',
      'Highly protein-bound; many drug interactions (NSAIDs, antibiotics, amiodarone, acetaminophen in large doses)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on warfarin (Coumadin) for atrial fibrillation presents to the emergency department with an INR of 8.2 and hematuria. The provider orders vitamin K (phytonadione) 10 mg IV and fresh frozen plasma (FFP). The nurse understands that the REASON for administering BOTH is:',
          options: [
            'A) Vitamin K and FFP work on different parts of the clotting cascade and must be combined',
            'B) FFP provides immediate clotting factors while vitamin K takes 12-24 hours to stimulate new factor production',
            'C) FFP reverses the hematuria while vitamin K reverses the warfarin',
            'D) Vitamin K alone is insufficient to reverse any INR above 5.0',
          ],
          correct: 1,
          rationale: 'B) CORRECT — This patient is actively bleeding (hematuria) with a critically elevated INR. FFP provides pre-formed clotting factors for IMMEDIATE reversal (within minutes). Vitamin K stimulates the liver to produce NEW clotting factors, but this takes 12-24 hours. Both are given because the patient needs immediate protection (FFP) AND sustained reversal (vitamin K). A) Both work on the same vitamin K-dependent factors (II, VII, IX, X) — FFP replaces them, vitamin K enables their production. C) FFP does not specifically target hematuria — it provides systemic clotting factors. D) Vitamin K alone can reverse high INRs, but in the presence of active bleeding, the 12-24 hour delay is too dangerous.',
        },
        {
          stem: 'A patient taking warfarin (Coumadin) 5 mg daily has an INR of 2.4. The patient reports starting a new antibiotic (ciprofloxacin) 3 days ago for a urinary tract infection. The nurse should anticipate which change to the INR at the next lab draw?',
          options: [
            'A) The INR will likely decrease because antibiotics promote vitamin K production',
            'B) The INR will likely increase because ciprofloxacin inhibits warfarin metabolism and reduces gut bacteria that produce vitamin K',
            'C) The INR will remain stable because antibiotics do not interact with warfarin',
            'D) The INR will decrease because ciprofloxacin increases warfarin excretion by the kidneys',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Ciprofloxacin (and many antibiotics) can increase the INR through two mechanisms: (1) inhibiting CYP enzymes that metabolize warfarin, increasing warfarin levels, and (2) killing gut flora that normally produce vitamin K, reducing the vitamin K available to oppose warfarin. The patient will need more frequent INR monitoring and likely a temporary warfarin dose reduction. A) Antibiotics destroy vitamin K-producing gut bacteria — they do not promote production. C) Antibiotic-warfarin interactions are well-documented and clinically significant. D) Ciprofloxacin does not increase renal excretion of warfarin. The trap: the current INR is therapeutic (2.4), so students may think no action is needed. But the antibiotic will SHIFT the INR higher over the next several days.',
        },
        {
          stem: 'A patient newly diagnosed with a DVT is started on both heparin IV and warfarin (Coumadin) 5 mg PO daily. On day 3, the INR is 2.5. The patient asks, "My INR is where it should be — why am I still on the heparin drip?" Which response reflects the BEST understanding of warfarin pharmacology?',
          options: [
            'A) "The heparin will be stopped now that your INR is therapeutic."',
            'B) "Even though the INR looks therapeutic, warfarin initially depletes protein C and S before the full anticoagulant effect occurs, so we need heparin coverage for at least 5 days and 24 hours of therapeutic INR."',
            'C) "The heparin is being continued because warfarin does not work on DVTs."',
            'D) "Your INR is not high enough yet — we need it above 3.5 before stopping heparin."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — This is a critical concept. Warfarin initially causes a TRANSIENT HYPERCOAGULABLE state because it depletes the natural anticoagulants protein C and protein S (short half-lives) before it fully depletes procoagulant factors II, IX, and X (longer half-lives). The early INR rise reflects depletion of factor VII (shortest half-life, 6 hours) but does NOT mean full anticoagulation. Guidelines require overlap for minimum 5 days AND therapeutic INR for at least 24 hours. A) Stopping heparin based on INR alone on day 3 puts the patient at risk during the transient hypercoagulable window. C) Warfarin absolutely is used for DVT treatment. D) INR goal for DVT is 2-3, not above 3.5.',
        },
      ],
      y: [
        {
          stem: 'A nurse is providing discharge teaching to a patient prescribed warfarin (Coumadin) for atrial fibrillation. Which patient statement indicates CORRECT understanding of the diet recommendations?',
          options: [
            'A) "I need to avoid all foods that contain vitamin K, especially green leafy vegetables."',
            'B) "I can eat foods with vitamin K, but I should keep my intake consistent from week to week."',
            'C) "I should eat as many green vegetables as possible to counteract the warfarin."',
            'D) "I only need to worry about vitamin K on the days I take my warfarin."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Patients on warfarin should NOT avoid vitamin K foods — they should eat them CONSISTENTLY. Sudden increases in vitamin K intake will decrease the INR (antagonize warfarin), and sudden decreases will increase the INR (potentiate warfarin). Consistency allows stable dosing. A) This is the most common misconception. Avoiding all vitamin K is unnecessary and deprives the patient of nutritious foods. C) Eating excessive vitamin K would antagonize warfarin and reduce its effectiveness. D) Warfarin is taken daily, and vitamin K intake affects it continuously, not just on dosing days.',
        },
        {
          stem: 'A nurse is reviewing the home medications of a patient on warfarin (Coumadin) who reports taking over-the-counter ibuprofen (Advil) for knee pain. Which action by the nurse is MOST appropriate?',
          options: [
            'A) Instruct the patient that ibuprofen is safe to take with warfarin in low doses',
            'B) Advise the patient to avoid NSAIDs and discuss acetaminophen as an alternative for pain, keeping doses below 2 g/day',
            'C) Tell the patient to double the warfarin dose on days they take ibuprofen',
            'D) Recommend aspirin instead of ibuprofen since aspirin does not affect warfarin',
          ],
          correct: 1,
          rationale: 'B) CORRECT — NSAIDs (ibuprofen, naproxen) increase bleeding risk in patients on warfarin through two mechanisms: they inhibit platelet function AND can cause GI erosion/bleeding. Acetaminophen in moderate doses (<2 g/day) is the preferred analgesic. A) No dose of NSAID is considered "safe" with warfarin — the combination significantly increases hemorrhage risk. C) Adjusting warfarin doses is never appropriate without provider direction and INR monitoring. D) Aspirin is an antiplatelet that would INCREASE bleeding risk even more than ibuprofen.',
        },
        {
          stem: 'A patient on warfarin (Coumadin) has a new INR of 4.8 with no signs of bleeding. Based on current guidelines, the nurse should anticipate which intervention?',
          options: [
            'A) Administer vitamin K 10 mg IV immediately',
            'B) Hold 1-2 doses of warfarin and recheck the INR',
            'C) Administer fresh frozen plasma for rapid reversal',
            'D) Continue the current dose and recheck in 1 week',
          ],
          correct: 1,
          rationale: 'B) CORRECT — For INR 4.5-10 with NO active bleeding, the standard approach is to hold 1-2 doses and recheck the INR. This allows the INR to drift back to therapeutic range without the risks of vitamin K (which can cause warfarin resistance for days). A) IV vitamin K 10 mg is reserved for serious or life-threatening bleeding. Giving it for an elevated INR without bleeding can overcorrect and make the patient hypercoagulable. C) FFP is reserved for active, life-threatening hemorrhage with elevated INR. D) Continuing the dose with an INR of 4.8 puts the patient at significant hemorrhage risk.',
        },
      ],
      r: [
        {
          stem: 'Which lab value does the nurse monitor to assess the therapeutic effect of warfarin (Coumadin)?',
          options: [
            'A) aPTT',
            'B) PT/INR',
            'C) Anti-factor Xa level',
            'D) Platelet count',
          ],
          correct: 1,
          rationale: 'B) CORRECT — PT (prothrombin time) and INR (international normalized ratio) measure the extrinsic pathway affected by warfarin. The INR standardizes results across laboratories. Therapeutic goal: 2.0-3.0 for most indications, 2.5-3.5 for mechanical heart valves. A) aPTT monitors heparin. C) Anti-factor Xa monitors LMWH. D) Platelet count does not measure warfarin effect — it may be monitored for other reasons but is not the therapeutic measure.',
        },
        {
          stem: 'Warfarin (Coumadin) is classified as pregnancy category X. Which statement BEST explains why it is contraindicated in pregnancy?',
          options: [
            'A) It causes maternal hemorrhage during delivery',
            'B) It crosses the placenta and is teratogenic, causing fetal bone and CNS abnormalities',
            'C) It suppresses fetal immune function',
            'D) It causes premature labor by stimulating uterine contractions',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Warfarin crosses the placenta and is teratogenic, particularly during the first trimester. It can cause nasal hypoplasia, stippled epiphyses (bone abnormalities), and CNS malformations. Heparin is the anticoagulant of choice in pregnancy because it does NOT cross the placenta. A) While bleeding is a concern, the primary reason for Category X is teratogenicity. C) Warfarin does not suppress fetal immunity. D) Warfarin has no effect on uterine contractions.',
        },
        {
          stem: 'A patient on warfarin (Coumadin) has an INR of 2.5. The nurse recognizes this as:',
          options: [
            'A) Subtherapeutic — the dose should be increased',
            'B) Within the therapeutic range for most indications',
            'C) Supratherapeutic — the dose should be held',
            'D) A critical value requiring immediate vitamin K administration',
          ],
          correct: 1,
          rationale: 'B) CORRECT — INR 2.0-3.0 is the standard therapeutic range for most warfarin indications (DVT, PE, atrial fibrillation). An INR of 2.5 is squarely within this range. A) 2.5 is therapeutic, not subtherapeutic. C) Supratherapeutic would be above 3.0 (or above 3.5 for mechanical valves). D) An INR of 2.5 is normal for a patient on warfarin and does not require any intervention.',
        },
      ],
    },
  },

  'Dabigatran (Pradaxa)': {
    details: [
      'Direct thrombin (factor IIa) inhibitor — oral anticoagulant for A-fib, DVT/PE',
      'Fixed dosing (150 mg BID), no routine lab monitoring needed',
      'Specific antidote: idarucizumab (Praxbind) — monoclonal antibody fragment, reverses in minutes',
      'Must swallow capsules WHOLE — do not crush, chew, or open (alters drug release, increases blood levels by 75%)',
      'Store in ORIGINAL bottle only — sensitive to moisture; remove from bottle only right before taking',
      'Renal elimination (80% renal) — contraindicated if CrCl <30 mL/min; dose reduction at CrCl 30-50',
    ],
    questions: {
      g: [
        {
          stem: 'A patient on dabigatran (Pradaxa) 150 mg BID for atrial fibrillation is brought to the emergency department after a motor vehicle accident with a large scalp laceration and suspected intracranial hemorrhage. The CT scan is pending. Which action should the nurse anticipate FIRST?',
          options: [
            'A) Administer vitamin K (phytonadione) 10 mg IV',
            'B) Administer fresh frozen plasma (FFP)',
            'C) Administer idarucizumab (Praxbind) 5 g IV',
            'D) Administer aminocaproic acid (Amicar)',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Idarucizumab (Praxbind) is the specific antidote for dabigatran. It is a monoclonal antibody fragment that binds dabigatran with 350x greater affinity than thrombin, providing immediate and complete reversal. Given as 5 g IV (two 2.5 g doses). A) Vitamin K reverses warfarin only — it has no effect on dabigatran, which does not involve vitamin K-dependent factors. B) FFP provides clotting factors depleted by warfarin — it is ineffective against direct thrombin inhibitors. D) Aminocaproic acid is an antifibrinolytic for tPA/alteplase overdose, not for direct thrombin inhibitor reversal.',
        },
        {
          stem: 'A nurse discovers that a patient has been removing dabigatran (Pradaxa) capsules from the original bottle and placing them in a weekly pill organizer for the past month. The patient reports occasional episodes of dark, tarry stools. Which is the nurse\'s MOST important assessment?',
          options: [
            'A) Ask the patient if they have been taking the capsules with food',
            'B) Assess for signs of GI bleeding — the moisture exposure from the pill organizer likely degraded the medication, and the dark stools suggest bleeding',
            'C) Check the patient\'s compliance with twice-daily dosing',
            'D) Assess the patient\'s renal function since dabigatran is renally cleared',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Dabigatran is extremely moisture-sensitive and MUST stay in its original bottle until immediately before administration. Transferring capsules to a pill organizer exposes them to humidity, which can degrade the capsule coating and increase drug release by up to 75%, significantly raising blood levels and bleeding risk. Dark, tarry stools (melena) indicate GI bleeding — a direct consequence of supratherapeutic dabigatran levels. A) While dabigatran can be taken with or without food, this is not the primary concern given the storage issue and bleeding signs. C) Compliance is important but not the priority when there are signs of active bleeding. D) Renal function is relevant but the immediate concern is the likely cause of bleeding (improper storage leading to increased absorption).',
        },
        {
          stem: 'A patient on dabigatran (Pradaxa) is scheduled for an elective hip replacement in 3 days. The patient\'s creatinine clearance is 38 mL/min. The nurse anticipates that dabigatran should be held:',
          options: [
            'A) 24 hours before surgery, same as a patient with normal renal function',
            'B) At least 3-5 days before surgery because reduced renal clearance prolongs the drug effect',
            'C) 12 hours before surgery since the half-life is only 12-17 hours',
            'D) No holding is necessary — the antidote idarucizumab can be given intraoperatively if needed',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Dabigatran is 80% renally eliminated. With a CrCl of 38 mL/min (impaired), the half-life is significantly prolonged, and the drug takes longer to clear. Guidelines recommend holding dabigatran 3-5 days before major surgery in patients with CrCl 30-50 mL/min (vs. 1-2 days with normal renal function). A) 24 hours is insufficient in renal impairment. C) The 12-17 hour half-life applies to normal renal function — it is much longer in impaired kidneys. D) While idarucizumab exists, elective surgery should be planned to avoid the need for emergency reversal — it is not a substitute for proper preoperative preparation.',
        },
      ],
      y: [
        {
          stem: 'A nurse is teaching a patient newly prescribed dabigatran (Pradaxa). Which instruction is MOST important to include?',
          options: [
            'A) "Take this medication with a full glass of grapefruit juice to enhance absorption."',
            'B) "Keep the capsules in the original bottle and do not place them in a pill organizer."',
            'C) "You will need weekly blood tests to monitor your clotting levels."',
            'D) "Crush the capsule and mix it with applesauce if you have trouble swallowing."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Dabigatran is extremely moisture-sensitive. Capsules must remain in the original container with the desiccant until immediately before use. Transferring to pill organizers exposes them to humidity, increasing drug levels by up to 75%. A) Grapefruit juice interacts with CYP3A4 medications — dabigatran is not primarily metabolized by this pathway. C) Dabigatran does not require routine coagulation monitoring — this is an advantage over warfarin. D) Dabigatran capsules must NEVER be crushed, chewed, or opened — this dramatically alters drug release and can cause toxicity.',
        },
        {
          stem: 'A patient asks the nurse, "What is the advantage of dabigatran (Pradaxa) over warfarin (Coumadin)?" Which response by the nurse is MOST accurate?',
          options: [
            'A) "Dabigatran is safer because it has no risk of bleeding."',
            'B) "Dabigatran has fewer food and drug interactions and does not require routine blood monitoring."',
            'C) "Dabigatran works faster than warfarin but must be taken only once daily."',
            'D) "Dabigatran is less expensive and available as a generic medication."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — The major advantages of dabigatran over warfarin include: no routine INR monitoring, fewer drug interactions, no dietary restrictions (no vitamin K concerns), and predictable pharmacokinetics allowing fixed dosing. A) ALL anticoagulants carry bleeding risk — dabigatran is not exempt. C) Dabigatran IS faster-acting than warfarin, but it is taken TWICE daily (BID), not once daily. D) Dabigatran is generally more expensive than warfarin (generic).',
        },
        {
          stem: 'A patient on dabigatran (Pradaxa) reports experiencing frequent heartburn and epigastric discomfort since starting the medication. Which intervention should the nurse suggest?',
          options: [
            'A) "Open the capsule and sprinkle the contents on food to reduce stomach irritation."',
            'B) "Take the medication with food or a full glass of water to minimize GI upset."',
            'C) "Switch to taking it once daily instead of twice daily."',
            'D) "Stop the medication until the heartburn resolves and call your provider."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Dyspepsia (heartburn/GI discomfort) is the most common side effect of dabigatran, occurring in about 11% of patients. Taking it with food or a full glass of water can help minimize GI irritation. A) NEVER open dabigatran capsules — this alters the drug release mechanism and increases absorption by 75%. C) The nurse cannot change the prescribed dosing frequency. D) Stopping an anticoagulant without provider guidance puts the patient at risk for stroke or thrombosis.',
        },
      ],
      r: [
        {
          stem: 'Which medication is the specific antidote for dabigatran (Pradaxa)?',
          options: [
            'A) Protamine sulfate',
            'B) Vitamin K (phytonadione)',
            'C) Idarucizumab (Praxbind)',
            'D) Andexanet alfa (Andexxa)',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Idarucizumab (Praxbind) is the specific reversal agent for dabigatran. It is a monoclonal antibody fragment that binds free and thrombin-bound dabigatran. A) Protamine sulfate reverses heparin. B) Vitamin K reverses warfarin. D) Andexanet alfa (Andexxa) reverses factor Xa inhibitors (rivaroxaban, apixaban).',
        },
        {
          stem: 'Dabigatran (Pradaxa) exerts its anticoagulant effect by inhibiting which clotting factor?',
          options: [
            'A) Factor Xa',
            'B) Thrombin (factor IIa)',
            'C) Vitamin K-dependent factors (II, VII, IX, X)',
            'D) Antithrombin III',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Dabigatran is a direct thrombin (factor IIa) inhibitor. It directly binds to the active site of thrombin, preventing the conversion of fibrinogen to fibrin. A) Factor Xa is inhibited by rivaroxaban and apixaban. C) Vitamin K-dependent factors are inhibited by warfarin. D) Antithrombin III is the protein that heparin enhances — dabigatran works independently of antithrombin.',
        },
        {
          stem: 'Which statement about dabigatran (Pradaxa) administration is correct?',
          options: [
            'A) Capsules may be crushed for patients with dysphagia',
            'B) Capsules may be stored in any pill container for convenience',
            'C) Capsules must be swallowed whole and stored in the original bottle',
            'D) Capsules should be dissolved in water before administration',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Dabigatran capsules must be swallowed whole (not crushed, chewed, or opened) and stored in the original container due to extreme moisture sensitivity. A) Crushing increases drug release by 75%, risking toxicity. B) Pill organizers expose capsules to moisture. D) Dissolving is not appropriate and alters the formulation.',
        },
      ],
    },
  },

  'Rivaroxaban (Xarelto)': {
    details: [
      'Direct factor Xa inhibitor — oral anticoagulant for A-fib, DVT/PE prevention and treatment',
      'Dosing: 20 mg PO once daily with the EVENING MEAL (food increases bioavailability by 39%)',
      'Antidote: andexanet alfa (Andexxa) — recombinant modified factor Xa that acts as decoy',
      'No routine monitoring required — fixed dosing',
      'Renal and hepatic metabolism — avoid in severe hepatic or renal impairment (CrCl <15)',
      'Cannot crush 15 mg or 20 mg tablets (15 mg tabs CAN be crushed and mixed with applesauce for NG tube)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient taking rivaroxaban (Xarelto) 20 mg daily is admitted with hematemesis and a hemoglobin of 7.2 g/dL (baseline 13.1). The provider orders andexanet alfa (Andexxa). The nurse should anticipate which administration concern?',
          options: [
            'A) Andexanet alfa is given orally and may take 24-48 hours to work',
            'B) Andexanet alfa requires an initial IV bolus followed by a 2-hour infusion and carries a risk of thrombotic events after administration',
            'C) Andexanet alfa requires premedication with diphenhydramine to prevent anaphylaxis',
            'D) Andexanet alfa is given intramuscularly and requires cardiac monitoring for 30 minutes',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Andexanet alfa is administered as an IV bolus followed by a 2-hour continuous infusion. A critical consideration is that after reversal, the patient is at increased risk for thrombotic events (DVT, PE, stroke, MI) because the anticoagulant has been removed. Close monitoring for thrombosis is essential in the hours and days following administration. A) Andexanet alfa is IV only and works within minutes. C) Routine premedication is not required for andexanet alfa. D) It is not given IM.',
        },
        {
          stem: 'A nurse is reconciling medications for a patient who reports taking rivaroxaban (Xarelto) 20 mg every morning on an empty stomach because "it is easier to remember before breakfast." The patient\'s recent lab work shows a new DVT in the left popliteal vein despite being on anticoagulation. Which factor MOST likely contributed to treatment failure?',
          options: [
            'A) The patient should have been taking the 20 mg dose with the evening meal to ensure adequate absorption',
            'B) Rivaroxaban is ineffective against DVTs and should have been replaced with warfarin',
            'C) The patient likely has a factor V Leiden mutation that makes all anticoagulants ineffective',
            'D) The 20 mg dose is subtherapeutic and should have been increased to 40 mg',
          ],
          correct: 0,
          rationale: 'A) CORRECT — Rivaroxaban 20 mg MUST be taken with food (specifically the evening meal) because food increases bioavailability by approximately 39%. Taking it on an empty stomach results in significantly lower drug levels, potentially rendering it subtherapeutic. This is a commonly overlooked patient education point. B) Rivaroxaban is FDA-approved for DVT treatment. C) While factor V Leiden can cause hypercoagulability, the more likely explanation is inadequate drug absorption from improper administration. D) 20 mg daily is the standard therapeutic dose — the issue is absorption, not dose.',
        },
        {
          stem: 'A patient on rivaroxaban (Xarelto) is being prepared for emergency surgery after a fall. The last dose was taken 4 hours ago. The surgeon requests immediate reversal. Andexanet alfa is not available in the facility pharmacy. Which alternative should the nurse anticipate?',
          options: [
            'A) Protamine sulfate IV',
            'B) Vitamin K 10 mg IV',
            'C) 4-factor prothrombin complex concentrate (PCC)',
            'D) Aminocaproic acid IV infusion',
          ],
          correct: 2,
          rationale: 'C) CORRECT — When andexanet alfa is unavailable, 4-factor PCC (Kcentra) is the recommended alternative for urgent reversal of factor Xa inhibitors. PCC provides concentrated clotting factors (II, VII, IX, X) to overcome the anticoagulant effect. A) Protamine sulfate reverses heparin only — it has no effect on factor Xa inhibitors. B) Vitamin K reverses warfarin — it does not affect rivaroxaban\'s mechanism. D) Aminocaproic acid is for fibrinolytic reversal (alteplase), not for Xa inhibitor reversal.',
        },
      ],
      y: [
        {
          stem: 'A nurse is providing discharge teaching to a patient prescribed rivaroxaban (Xarelto) 20 mg daily for atrial fibrillation. Which instruction should the nurse include?',
          options: [
            'A) "Take this medication in the morning on an empty stomach for best absorption."',
            'B) "Take this medication with your evening meal every day."',
            'C) "Take this medication twice daily, 12 hours apart."',
            'D) "Take this medication at bedtime with a full glass of milk."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Rivaroxaban 20 mg should be taken with the evening meal. Food increases bioavailability by approximately 39%, which is essential for therapeutic drug levels. A) Taking on an empty stomach significantly reduces absorption. C) Rivaroxaban for A-fib is once daily, not twice daily. D) There is no specific instruction to take with milk — the key is taking with a substantial meal.',
        },
        {
          stem: 'A patient taking rivaroxaban (Xarelto) calls the clinic asking, "I missed my dose last night. Should I take two doses today?" Which response by the nurse is MOST appropriate?',
          options: [
            'A) "Yes, take both doses together this evening with dinner."',
            'B) "Take the missed dose as soon as you remember today, then take tonight\'s dose at the regular time with dinner."',
            'C) "Skip the missed dose and take your regular dose tonight with dinner. Do not double up."',
            'D) "Come to the emergency room for a heparin bridge until you resume your regular dose."',
          ],
          correct: 2,
          rationale: 'C) CORRECT — If a dose is missed and it is close to the next scheduled dose, the patient should skip the missed dose and resume at the regular time. Doubling the dose increases bleeding risk significantly. A) Taking two doses at once doubles the bleeding risk. B) This could result in doses too close together, increasing toxicity risk. D) A single missed dose does not warrant emergency heparin bridging.',
        },
        {
          stem: 'A patient on rivaroxaban (Xarelto) asks, "Do I need to change my diet like people on warfarin do?" Which response is correct?',
          options: [
            'A) "Yes, you must avoid all vitamin K-rich foods just like with warfarin."',
            'B) "No, rivaroxaban does not interact with vitamin K, so there are no dietary restrictions related to vitamin K."',
            'C) "You need to increase your vitamin K intake to counterbalance the rivaroxaban."',
            'D) "You should avoid grapefruit juice because it inactivates rivaroxaban."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Rivaroxaban is a direct factor Xa inhibitor — it does not work through the vitamin K pathway. Therefore, there are no vitamin K dietary restrictions. This is a major advantage over warfarin. A) Vitamin K restrictions apply to warfarin only. C) There is no need to increase vitamin K. D) While grapefruit can affect some medications metabolized by CYP3A4, the key teaching point is the absence of vitamin K dietary restrictions.',
        },
      ],
      r: [
        {
          stem: 'Rivaroxaban (Xarelto) belongs to which drug class?',
          options: [
            'A) Direct thrombin inhibitor',
            'B) Vitamin K antagonist',
            'C) Direct factor Xa inhibitor',
            'D) Low-molecular-weight heparin',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Rivaroxaban directly inhibits factor Xa, blocking the conversion of prothrombin to thrombin in the coagulation cascade. A) Direct thrombin inhibitors include dabigatran. B) Vitamin K antagonist is warfarin. D) LMWH includes enoxaparin.',
        },
        {
          stem: 'Which medication is the specific antidote for rivaroxaban (Xarelto)?',
          options: [
            'A) Protamine sulfate',
            'B) Idarucizumab (Praxbind)',
            'C) Andexanet alfa (Andexxa)',
            'D) Vitamin K (phytonadione)',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Andexanet alfa (Andexxa) is the specific reversal agent for factor Xa inhibitors including rivaroxaban and apixaban. It acts as a decoy receptor that binds the Xa inhibitor. A) Protamine sulfate reverses heparin. B) Idarucizumab reverses dabigatran. D) Vitamin K reverses warfarin.',
        },
        {
          stem: 'A key advantage of rivaroxaban (Xarelto) over warfarin (Coumadin) is:',
          options: [
            'A) It has zero risk of bleeding complications',
            'B) It does not require routine coagulation monitoring',
            'C) It is safe to use during pregnancy',
            'D) It is available as an IV formulation for emergencies',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Rivaroxaban has predictable pharmacokinetics with fixed dosing, eliminating the need for routine lab monitoring (unlike warfarin which requires frequent INR checks). A) ALL anticoagulants carry bleeding risk. C) Rivaroxaban is NOT recommended in pregnancy. D) Rivaroxaban is an oral-only medication.',
        },
      ],
    },
  },

  'Apixaban (Eliquis)': {
    details: [
      'Direct factor Xa inhibitor — oral anticoagulant for A-fib, DVT/PE',
      'Dosing: 5 mg PO BID (reduced to 2.5 mg BID if age >=80, weight <=60 kg, or Cr >=1.5)',
      'Antidote: andexanet alfa (Andexxa) — same reversal agent as rivaroxaban',
      'CAN be crushed and suspended in water or apple juice, or mixed with applesauce (advantage over dabigatran)',
      'Lowest bleeding risk among DOACs in major trials (ARISTOTLE trial)',
      'Dual elimination (25% renal, 75% hepatic) — better option in moderate renal impairment than dabigatran',
    ],
    questions: {
      g: [
        {
          stem: 'An 82-year-old patient weighing 55 kg with a serum creatinine of 1.7 mg/dL is prescribed apixaban (Eliquis) for new-onset atrial fibrillation. The standard dose is 5 mg BID. The nurse reviews the order and should:',
          options: [
            'A) Administer 5 mg BID as ordered since it is the standard dose',
            'B) Question the order — this patient meets criteria for dose reduction to 2.5 mg BID based on age, weight, AND creatinine',
            'C) Hold the medication until a PT/INR is obtained',
            'D) Request anti-factor Xa levels before initiating the medication',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Apixaban requires dose reduction to 2.5 mg BID if the patient meets at least 2 of 3 criteria: age >=80, weight <=60 kg, OR serum creatinine >=1.5 mg/dL. This patient meets ALL THREE (age 82, weight 55 kg, Cr 1.7). Administering the full dose significantly increases bleeding risk. A) Giving the full dose without checking criteria is dangerous in this high-risk patient. C) PT/INR does not monitor apixaban — this test is for warfarin. D) Routine anti-Xa monitoring is not required for apixaban initiation; the priority is ensuring the correct dose.',
        },
        {
          stem: 'A patient who cannot swallow pills is prescribed apixaban (Eliquis) 5 mg BID. The nurse is considering alternative administration methods. Which approach is appropriate?',
          options: [
            'A) Open a dabigatran capsule and administer the contents via NG tube as a substitute',
            'B) Crush the apixaban tablet and suspend it in 60 mL of water or mix with applesauce, then administer via NG tube or orally',
            'C) Switch to IV heparin permanently since oral DOACs cannot be crushed',
            'D) Dissolve the tablet in orange juice and let it sit overnight before administering',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Apixaban tablets CAN be crushed and suspended in water, apple juice, or mixed with applesauce for oral administration or delivery via nasogastric tube. This is a unique advantage of apixaban over dabigatran (which must be swallowed whole). A) Dabigatran capsules must NEVER be opened, and substituting one anticoagulant for another is not appropriate. C) Apixaban CAN be crushed, so this is incorrect. D) Medication stability is not maintained when dissolved and left overnight.',
        },
        {
          stem: 'A patient on apixaban (Eliquis) 5 mg BID presents with a hemoglobin of 6.8 g/dL, melena, and hemodynamic instability (BP 82/48, HR 128). Andexanet alfa is being prepared. While waiting, which action should the nurse take FIRST?',
          options: [
            'A) Start two large-bore IVs and prepare for blood product transfusion',
            'B) Administer oral vitamin K 10 mg',
            'C) Place the patient in Trendelenburg position and administer oral fluids',
            'D) Obtain a stat PT/INR to quantify the degree of anticoagulation',
          ],
          correct: 0,
          rationale: 'A) CORRECT — This patient is in hemorrhagic shock (hypotension, tachycardia, critical anemia). The immediate priority is vascular access and volume resuscitation. Two large-bore IVs (16-18 gauge) enable rapid fluid and blood product administration. B) Vitamin K does not reverse factor Xa inhibitors — it reverses warfarin. C) Oral fluids are inadequate for hemorrhagic shock, and Trendelenburg alone does not address the blood loss. D) PT/INR does not reliably measure apixaban levels and obtaining a lab delays life-saving interventions.',
        },
      ],
      y: [
        {
          stem: 'A nurse is comparing anticoagulant options for a patient with atrial fibrillation and moderate renal impairment (CrCl 35 mL/min). Which statement about apixaban (Eliquis) is correct regarding this patient?',
          options: [
            'A) Apixaban is contraindicated in any degree of renal impairment',
            'B) Apixaban is primarily hepatically eliminated, making it a better option than dabigatran in moderate renal impairment',
            'C) Apixaban requires daily anti-factor Xa monitoring in renal impairment',
            'D) Apixaban dose does not need to be adjusted regardless of renal function',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Apixaban has dual elimination (approximately 75% hepatic, 25% renal), making it a better choice than dabigatran (80% renal) in patients with moderate renal impairment. A) Apixaban can be used in moderate renal impairment with dose adjustment when appropriate. C) Routine monitoring is not required. D) Dose adjustment IS required when patients meet specific criteria (age >=80, weight <=60 kg, Cr >=1.5).',
        },
        {
          stem: 'A patient on apixaban (Eliquis) asks, "How is this different from the warfarin my mother takes?" Which response by the nurse is MOST accurate?',
          options: [
            'A) "Apixaban is safer because it cannot cause bleeding like warfarin can."',
            'B) "Unlike warfarin, apixaban does not require regular blood tests or dietary restrictions, and it has a specific antidote available."',
            'C) "Apixaban works the same way as warfarin but is given twice a day."',
            'D) "Apixaban is only for short-term use, while warfarin is for lifelong therapy."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Key advantages of apixaban over warfarin: no routine coagulation monitoring, no vitamin K dietary restrictions, fewer drug interactions, and a specific antidote (andexanet alfa). A) ALL anticoagulants can cause bleeding. C) They work by completely different mechanisms — warfarin inhibits vitamin K-dependent factor synthesis, apixaban directly inhibits factor Xa. D) Apixaban can be used long-term for A-fib.',
        },
        {
          stem: 'A patient on apixaban (Eliquis) is scheduled for a dental extraction in 1 week. The dentist requests the anticoagulant be held. The nurse anticipates apixaban will be held for:',
          options: [
            'A) 24-48 hours before the procedure',
            'B) 7-10 days before the procedure',
            'C) 12 hours before the procedure',
            'D) No holding is necessary for dental procedures',
          ],
          correct: 0,
          rationale: 'A) CORRECT — For procedures with low-to-moderate bleeding risk, apixaban is typically held for at least 24-48 hours before the procedure. Its half-life is approximately 12 hours, so 24-48 hours allows 2-4 half-lives for clearance. B) 7-10 days is the holding time for antiplatelet agents like clopidogrel, not apixaban. C) 12 hours (one half-life) provides incomplete clearance. D) Dental extractions carry bleeding risk; anticoagulant management is appropriate.',
        },
      ],
      r: [
        {
          stem: 'Which statement about apixaban (Eliquis) administration is correct?',
          options: [
            'A) It must be swallowed whole and cannot be crushed',
            'B) It can be crushed and mixed with water or applesauce',
            'C) It must be taken on an empty stomach',
            'D) It is only available as an IV formulation',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Apixaban tablets can be crushed and suspended in water, D5W, apple juice, or mixed with applesauce. This makes it suitable for patients with swallowing difficulties or NG tube administration. A) This describes dabigatran, not apixaban. C) Apixaban can be taken with or without food. D) Apixaban is an oral-only medication.',
        },
        {
          stem: 'Apixaban (Eliquis) and rivaroxaban (Xarelto) share which common antidote?',
          options: [
            'A) Protamine sulfate',
            'B) Vitamin K (phytonadione)',
            'C) Andexanet alfa (Andexxa)',
            'D) Idarucizumab (Praxbind)',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Andexanet alfa reverses both apixaban and rivaroxaban because both are factor Xa inhibitors. Andexanet acts as a decoy, binding the Xa inhibitors and freeing up native factor Xa. A) Protamine reverses heparin. B) Vitamin K reverses warfarin. D) Idarucizumab reverses dabigatran only.',
        },
        {
          stem: 'The standard dose of apixaban (Eliquis) for atrial fibrillation is:',
          options: [
            'A) 20 mg once daily with the evening meal',
            'B) 150 mg twice daily',
            'C) 5 mg twice daily',
            'D) 10 mg once daily',
          ],
          correct: 2,
          rationale: 'C) CORRECT — The standard dose for A-fib stroke prevention is 5 mg PO BID (reduced to 2.5 mg BID in eligible patients). A) 20 mg daily with evening meal is the rivaroxaban dose. B) 150 mg BID is the dabigatran dose. D) 10 mg once daily is not a standard apixaban regimen for A-fib.',
        },
      ],
    },
  },

  // ============================================================
  // ANTIPLATELETS
  // ============================================================

  'Aspirin (Low-Dose 81 mg)': {
    details: [
      'Irreversible COX-1 inhibitor — prevents thromboxane A2 synthesis, inhibiting platelet aggregation',
      'Antiplatelet effect lasts 7-10 days (lifespan of the platelet) because the inhibition is irreversible',
      'Low-dose (81 mg) for cardiac protection; higher doses (325-650 mg) for pain/fever/inflammation',
      'Reye syndrome: NEVER give to children/adolescents with viral illness (varicella, influenza) — causes hepatic encephalopathy',
      'Tinnitus (ringing in ears) = sign of aspirin toxicity (salicylism)',
      'Antidote for aspirin overdose: sodium bicarbonate (alkalinizes urine to enhance excretion) + activated charcoal if within 1 hour',
    ],
    questions: {
      g: [
        {
          stem: 'A 7-year-old child with a fever of 102.8F (39.3C) and a vesicular rash on the trunk is brought to the clinic. The parent states, "I gave my child some aspirin for the fever about an hour ago." Which action should the nurse take FIRST?',
          options: [
            'A) Reassure the parent that aspirin is safe for children with fevers',
            'B) Notify the provider immediately — the child may have varicella, and aspirin places the child at risk for Reye syndrome',
            'C) Administer activated charcoal to absorb the aspirin',
            'D) Obtain a liver function panel before taking any action',
          ],
          correct: 1,
          rationale: 'B) CORRECT — The vesicular rash is consistent with varicella (chickenpox), a viral illness. Aspirin given to children/adolescents with viral illness (especially varicella and influenza) can trigger Reye syndrome — a life-threatening condition causing acute hepatic encephalopathy and fatty liver degeneration. The provider must be notified immediately to evaluate and monitor. A) DANGEROUS — aspirin is contraindicated in children with viral illness. C) Activated charcoal may be considered in aspirin OVERDOSE within 1 hour, but the priority here is the aspirin-varicella interaction, not overdose. The child took a therapeutic dose. D) Labs may be ordered but should not delay notification of the provider about this critical drug-disease interaction.',
        },
        {
          stem: 'A patient on aspirin 81 mg daily for secondary prevention post-MI is scheduled for a coronary artery bypass graft (CABG) in 10 days. The patient asks, "Should I stop my aspirin before the surgery?" Which response is MOST accurate?',
          options: [
            'A) "Stop the aspirin today — you need a full 10 days for your platelets to recover."',
            'B) "Continue the aspirin right up until the day of surgery since it protects your heart."',
            'C) "Your surgeon will determine the optimal timing. Typically aspirin is held 7-10 days before surgery because it irreversibly inhibits platelets for their entire lifespan."',
            'D) "Switch to clopidogrel instead, since it is safer before surgery."',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Aspirin irreversibly inhibits COX-1 on platelets, and since platelets cannot synthesize new enzyme, the effect lasts for the platelet\'s entire lifespan (7-10 days). The surgeon determines the exact hold time based on the risk-benefit ratio (cardiac protection vs. surgical bleeding). A) While 7-10 days is the standard, the nurse should not independently direct the patient to stop — this is a provider/surgeon decision. B) Continuing aspirin up to surgery increases surgical bleeding risk. D) Clopidogrel also requires a 5-7 day hold before surgery and is not "safer."',
        },
        {
          stem: 'A patient in the emergency department reports taking "a whole bottle" of aspirin tablets approximately 45 minutes ago in a suicide attempt. Vital signs: RR 32 (deep, rapid), pH 7.28, T 101.2F. Which intervention should the nurse anticipate FIRST?',
          options: [
            'A) Administer activated charcoal if the patient can protect their airway',
            'B) Administer sodium bicarbonate IV to alkalinize the urine',
            'C) Administer protamine sulfate for the bleeding risk',
            'D) Prepare for immediate hemodialysis',
          ],
          correct: 0,
          rationale: 'A) CORRECT — Within the first hour of aspirin ingestion, activated charcoal is the FIRST intervention to reduce further absorption (if the patient has a protected airway and can swallow). The deep, rapid breathing (Kussmaul respirations) and pH 7.28 indicate metabolic acidosis from salicylate toxicity. B) Sodium bicarbonate IV is the second critical intervention (alkalinizes blood and urine to enhance salicylate excretion), but charcoal first within the 1-hour window to prevent further absorption. C) Protamine reverses heparin, not aspirin. D) Hemodialysis is reserved for severe, refractory salicylate toxicity — it is not the first-line intervention.',
        },
      ],
      y: [
        {
          stem: 'A patient taking aspirin 81 mg daily for cardiac protection reports new-onset ringing in the ears. The nurse recognizes this as:',
          options: [
            'A) A normal side effect that requires no intervention',
            'B) Tinnitus, which is an early sign of aspirin toxicity (salicylism) — the provider should be notified',
            'C) An allergic reaction requiring epinephrine',
            'D) A sign of inner ear infection unrelated to the aspirin',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Tinnitus (ringing in the ears) is the hallmark early warning sign of salicylate toxicity (salicylism). Even at low doses, some patients can develop toxicity, especially with renal impairment or concurrent medications. The provider should be notified and a salicylate level may be drawn. A) Tinnitus is NOT a normal side effect — it indicates toxicity. C) Aspirin allergy presents as urticaria, bronchospasm, or anaphylaxis, not tinnitus. D) While tinnitus has many causes, in a patient on aspirin it should be presumed to be salicylate-related until proven otherwise.',
        },
        {
          stem: 'A nurse is teaching a patient about the difference between aspirin 81 mg for cardiac protection and aspirin 650 mg for pain relief. Which statement by the nurse is MOST accurate?',
          options: [
            'A) "Both doses work the same way — the higher dose just provides more heart protection."',
            'B) "The low dose (81 mg) primarily prevents platelet clumping to protect against heart attacks and strokes, while the higher dose also reduces pain, fever, and inflammation."',
            'C) "You should always take the higher dose because it provides both pain relief and cardiac protection."',
            'D) "The low dose prevents clots while the high dose dissolves existing clots."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — At low doses (81 mg), aspirin selectively inhibits thromboxane A2 in platelets (antiplatelet effect). At higher doses (325-650+ mg), it also inhibits prostaglandin synthesis throughout the body, providing analgesic, antipyretic, and anti-inflammatory effects. A) Higher doses do not provide more cardiac protection — they increase GI bleeding risk without added cardiac benefit. C) Higher doses increase side effects without additional cardiac benefit. D) Aspirin does not dissolve clots — that is the function of thrombolytics (alteplase).',
        },
        {
          stem: 'A parent brings a 4-year-old child with flu-like symptoms to the clinic and asks, "Can I give my child baby aspirin for the fever?" Which response by the nurse is correct?',
          options: [
            'A) "Yes, baby aspirin is safe for children at any age."',
            'B) "No — aspirin should not be given to children with viral illnesses because it can cause Reye syndrome, a life-threatening liver and brain condition. Use acetaminophen or ibuprofen instead."',
            'C) "Only if the fever is above 104 degrees."',
            'D) "Aspirin is fine for children but should be given with food."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Aspirin is contraindicated in children and adolescents (especially under 18) with viral illness due to the risk of Reye syndrome — acute hepatic encephalopathy with fatty liver degeneration that has a high mortality rate. Acetaminophen (Tylenol) or ibuprofen (Motrin) are safe alternatives. A) DANGEROUS — aspirin is not safe for children with viral illness. C) Temperature does not change the contraindication. D) Food does not prevent Reye syndrome.',
        },
      ],
      r: [
        {
          stem: 'Aspirin exerts its antiplatelet effect by:',
          options: [
            'A) Reversibly blocking ADP receptors on platelets',
            'B) Irreversibly inhibiting cyclooxygenase-1 (COX-1), preventing thromboxane A2 synthesis',
            'C) Directly inhibiting factor Xa in the clotting cascade',
            'D) Enhancing antithrombin III activity',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Aspirin irreversibly acetylates the COX-1 enzyme on platelets, blocking thromboxane A2 production. Since platelets lack a nucleus, they cannot make new COX-1, so the effect lasts 7-10 days (platelet lifespan). A) ADP receptor blockade describes clopidogrel. C) Factor Xa inhibition describes rivaroxaban/apixaban. D) Antithrombin III enhancement describes heparin.',
        },
        {
          stem: 'How long does the antiplatelet effect of a single dose of aspirin last?',
          options: [
            'A) 4-6 hours',
            'B) 24 hours',
            'C) 7-10 days',
            'D) 30 days',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Because aspirin irreversibly inhibits COX-1 on platelets, the effect lasts for the entire lifespan of the platelet (7-10 days). New platelets must be produced to restore normal function. A) 4-6 hours is the analgesic duration, not the antiplatelet duration. B) 24 hours underestimates the antiplatelet effect. D) 30 days exceeds platelet lifespan.',
        },
        {
          stem: 'Which condition is a contraindication for aspirin use in pediatric patients?',
          options: [
            'A) Headache',
            'B) Viral illness (influenza or varicella)',
            'C) Mild dental pain',
            'D) Post-tonsillectomy pain',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Aspirin is contraindicated in children/adolescents with viral illness (influenza, varicella) due to the risk of Reye syndrome. A) Headache alone is not a contraindication (though pediatric aspirin use is generally avoided). C) Dental pain is not a specific contraindication. D) While aspirin would increase bleeding risk post-surgery, the specific and absolute contraindication is viral illness due to Reye syndrome.',
        },
      ],
    },
  },

  'Clopidogrel (Plavix)': {
    details: [
      'ADP receptor (P2Y12) blocker — irreversible antiplatelet agent',
      'Used post-ACS (acute coronary syndrome), post-stent (dual antiplatelet with aspirin), stroke prevention',
      'CYP2C19 polymorphism: "poor metabolizers" cannot convert prodrug to active form — drug is ineffective',
      'Hold 5-7 days before elective surgery (irreversible platelet inhibition, like aspirin)',
      'No specific antidote — platelet transfusion if severe bleeding',
      'Avoid concurrent use of omeprazole/esomeprazole (PPIs reduce conversion to active metabolite via CYP2C19)',
    ],
    questions: {
      g: [
        {
          stem: 'A patient who received a drug-eluting coronary stent 3 months ago is prescribed both aspirin 81 mg daily and clopidogrel (Plavix) 75 mg daily. The patient tells the nurse, "I read online that I only need one blood thinner, so I stopped the clopidogrel last week." Which response by the nurse reflects the GREATEST concern?',
          options: [
            'A) "That is fine — aspirin alone is sufficient after stent placement."',
            'B) "Stopping clopidogrel early after stent placement significantly increases your risk of stent thrombosis, which can cause a heart attack. You need to contact your cardiologist immediately."',
            'C) "You can restart the clopidogrel at your next follow-up appointment."',
            'D) "Since you have been off it for a week, your platelets have recovered and you no longer need it."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Premature discontinuation of clopidogrel after drug-eluting stent (DES) placement is the #1 risk factor for stent thrombosis — a catastrophic, often fatal event. Dual antiplatelet therapy (aspirin + clopidogrel) is required for at least 12 months after DES placement. The patient must contact the cardiologist IMMEDIATELY to restart therapy. A) Aspirin alone is NOT sufficient in the first year after DES. C) Waiting for a follow-up appointment is too late — stent thrombosis can occur within days. D) Platelet recovery after stopping clopidogrel is actually the PROBLEM — uninhibited platelets can form clots on the stent surface.',
        },
        {
          stem: 'A nurse is reviewing the medication list for a patient on clopidogrel (Plavix) who was recently prescribed omeprazole (Prilosec) for GERD. Which action is MOST appropriate?',
          options: [
            'A) Administer both medications as prescribed since there is no interaction',
            'B) Notify the provider — omeprazole inhibits CYP2C19, which reduces clopidogrel activation, and an alternative PPI (pantoprazole) or H2 blocker should be considered',
            'C) Hold the clopidogrel until the GERD is resolved',
            'D) Administer the medications 2 hours apart to avoid the interaction',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Omeprazole and esomeprazole inhibit CYP2C19, the enzyme required to convert clopidogrel (a prodrug) into its active metabolite. This interaction reduces clopidogrel\'s antiplatelet effectiveness by up to 50%. Pantoprazole (Protonix) has minimal CYP2C19 interaction and is preferred. H2 blockers (famotidine) are another alternative. A) This interaction is well-documented and clinically significant. C) Holding an antiplatelet in a cardiac patient is dangerous. D) Separating the doses does NOT resolve a metabolic interaction — the issue is enzyme inhibition, not absorption.',
        },
        {
          stem: 'A patient on clopidogrel (Plavix) who is identified as a CYP2C19 "poor metabolizer" through pharmacogenomic testing has a recurrent TIA. The nurse understands that the MOST likely reason for treatment failure is:',
          options: [
            'A) The patient has been non-compliant with the medication',
            'B) Clopidogrel is a prodrug that requires CYP2C19 for activation — poor metabolizers cannot convert it to the active form, making it ineffective',
            'C) The patient has developed antibodies against clopidogrel',
            'D) CYP2C19 poor metabolizers metabolize clopidogrel too quickly, reducing its duration of action',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Clopidogrel is a prodrug that REQUIRES hepatic conversion via CYP2C19 to its active metabolite. Patients who are CYP2C19 poor metabolizers (approximately 2-15% of the population, depending on ethnicity) cannot effectively activate the drug, resulting in inadequate platelet inhibition and increased cardiovascular events. Alternative agents (prasugrel, ticagrelor) should be considered. A) Non-compliance is always possible but the pharmacogenomic result explains the failure. C) Antibodies against clopidogrel do not develop. D) Poor metabolizers process the drug LESS effectively, not MORE quickly.',
        },
      ],
      y: [
        {
          stem: 'A patient on clopidogrel (Plavix) is scheduled for elective cholecystectomy in 2 weeks. The surgeon requests the medication be held preoperatively. The nurse anticipates holding clopidogrel for:',
          options: [
            'A) 24 hours before surgery',
            'B) 48 hours before surgery',
            'C) 5-7 days before surgery',
            'D) 14 days before surgery',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Clopidogrel irreversibly inhibits ADP receptors on platelets. Like aspirin, the effect lasts for the platelet\'s lifespan. Current guidelines recommend holding clopidogrel 5-7 days before elective surgery to allow adequate platelet recovery. A) 24 hours is insufficient — platelets are still inhibited. B) 48 hours is insufficient for the same reason. D) 14 days is excessive for clopidogrel.',
        },
        {
          stem: 'A nurse is teaching a patient newly prescribed clopidogrel (Plavix) after an acute coronary syndrome. Which teaching point is MOST important?',
          options: [
            'A) "Take this medication with grapefruit juice to enhance absorption."',
            'B) "Do not stop this medication without talking to your cardiologist first — stopping it suddenly can cause a blood clot in your arteries or stent."',
            'C) "This medication will dissolve the existing clots in your arteries."',
            'D) "You need to have weekly blood tests to monitor this medication."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — The single most important teaching point for clopidogrel is to NEVER stop it abruptly without provider guidance, especially after stent placement. Premature discontinuation is the leading cause of stent thrombosis. A) Grapefruit does not enhance clopidogrel absorption. C) Clopidogrel prevents NEW clots — it does not dissolve existing ones (thrombolytics do that). D) Clopidogrel does not require routine lab monitoring.',
        },
        {
          stem: 'A patient taking clopidogrel (Plavix) reports noticing increased bruising and prolonged bleeding from a small cut while shaving. The nurse should:',
          options: [
            'A) Instruct the patient to stop the clopidogrel immediately',
            'B) Reassure the patient that mild bruising and prolonged bleeding from minor cuts is an expected effect of antiplatelet therapy, and teach signs of serious bleeding to report',
            'C) Administer vitamin K to reverse the bleeding',
            'D) Send the patient to the emergency department for a transfusion',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Mild bruising and prolonged bleeding from minor cuts are expected effects of antiplatelet therapy. The nurse should reassure the patient while teaching signs of serious bleeding (melena, hematemesis, hematuria, intracranial bleeding symptoms) that require immediate medical attention. A) Stopping the medication without provider direction risks thrombotic events. C) Vitamin K reverses warfarin, not clopidogrel. D) Minor bruising does not warrant emergency transfusion.',
        },
      ],
      r: [
        {
          stem: 'Clopidogrel (Plavix) prevents platelet aggregation by blocking which receptor?',
          options: [
            'A) Thromboxane A2 receptor',
            'B) ADP (P2Y12) receptor',
            'C) Glycoprotein IIb/IIIa receptor',
            'D) Serotonin (5-HT) receptor',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Clopidogrel irreversibly blocks the ADP P2Y12 receptor on platelets, preventing ADP-mediated platelet activation and aggregation. A) Thromboxane A2 is the target of aspirin. C) GP IIb/IIIa inhibitors include abciximab and eptifibatide (IV medications). D) Serotonin receptors are not the primary target of antiplatelets.',
        },
        {
          stem: 'Which pharmacogenomic consideration is important for patients prescribed clopidogrel (Plavix)?',
          options: [
            'A) HLA-B*5701 testing before starting therapy',
            'B) CYP2C19 genotyping to identify poor metabolizers who may not respond to the drug',
            'C) G6PD testing to prevent hemolytic anemia',
            'D) NAT2 acetylator status to determine dosing',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Clopidogrel is a prodrug requiring CYP2C19 for hepatic conversion to its active metabolite. Poor metabolizers (~2-15% of the population) cannot activate the drug effectively. The FDA includes a black box warning recommending CYP2C19 testing. A) HLA-B*5701 is tested before abacavir (HIV drug). C) G6PD testing relates to drugs causing hemolytic anemia (primaquine, dapsone). D) NAT2 status relates to isoniazid and other drugs.',
        },
        {
          stem: 'A patient on clopidogrel (Plavix) asks what to use for a headache. Which OTC medication should the nurse recommend the patient AVOID?',
          options: [
            'A) Acetaminophen (Tylenol)',
            'B) Ibuprofen (Advil)',
            'C) Calcium carbonate (Tums)',
            'D) Diphenhydramine (Benadryl)',
          ],
          correct: 1,
          rationale: 'B) CORRECT — NSAIDs (ibuprofen, naproxen) should be avoided in patients on antiplatelet therapy because they further inhibit platelet function (via COX-1 inhibition) and increase the risk of GI bleeding. Acetaminophen is the preferred OTC analgesic. A) Acetaminophen is safe in standard doses. C) Antacids do not interact with clopidogrel. D) Diphenhydramine does not affect platelet function.',
        },
      ],
    },
  },

  // ============================================================
  // THROMBOLYTICS
  // ============================================================

  'Alteplase (tPA)': {
    details: [
      'Tissue plasminogen activator — converts plasminogen to plasmin, which dissolves fibrin in clots',
      'NOT a preventive agent — it dissolves EXISTING clots (unlike anticoagulants which prevent new ones)',
      'Stroke: must be given within 3-4.5 hours of symptom onset; STEMI: given ASAP when PCI not available',
      'Antidote: aminocaproic acid (Amicar) — an antifibrinolytic that stops excessive fibrinolysis',
      '#1 risk: HEMORRHAGE (especially intracranial) — monitor neurological status frequently',
      'Contraindications: active internal bleeding, hemorrhagic stroke, recent surgery/trauma (within 2-3 weeks), uncontrolled severe HTN, INR >1.7, platelet count <100,000',
    ],
    questions: {
      g: [
        {
          stem: 'A patient arrives at the emergency department with sudden-onset left-sided weakness, slurred speech, and facial droop. Symptom onset was witnessed 2 hours ago. CT scan shows no hemorrhage. The provider orders alteplase (tPA). Thirty minutes into the infusion, the patient develops a severe headache, vomiting, and a sudden decrease in level of consciousness. Which action should the nurse take FIRST?',
          options: [
            'A) Complete the alteplase infusion and then obtain a stat CT scan',
            'B) Stop the alteplase infusion immediately and notify the provider — suspect intracranial hemorrhage',
            'C) Administer a second bolus of alteplase to dissolve a possible new clot',
            'D) Position the patient flat and administer IV normal saline for suspected hypotension',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Sudden severe headache, vomiting, and decreased LOC during tPA infusion is INTRACRANIAL HEMORRHAGE until proven otherwise — the most feared complication. The infusion must be stopped IMMEDIATELY, the provider notified, and a stat CT scan obtained. Aminocaproic acid (Amicar) should be anticipated for reversal. A) NEVER complete the infusion when hemorrhage is suspected — this worsens the bleed. C) A second bolus would increase the hemorrhage. D) While BP management is important, the first action is to stop the cause of the hemorrhage.',
        },
        {
          stem: 'A patient with STEMI is being evaluated for alteplase (tPA) in a rural hospital without a cardiac catheterization lab. The nurse reviews the patient\'s history and finds: appendectomy 4 days ago, BP 192/110, and platelet count of 88,000/mm3. Which finding would the nurse identify as a contraindication?',
          options: [
            'A) Only the recent surgery is a contraindication',
            'B) Only the blood pressure is a contraindication',
            'C) ALL THREE findings are contraindications — recent surgery within 2-3 weeks, uncontrolled severe hypertension, and platelet count below 100,000',
            'D) None of these are contraindications if the STEMI is confirmed',
          ],
          correct: 2,
          rationale: 'C) CORRECT — ALL three are absolute or relative contraindications for alteplase: (1) Recent surgery within 2-3 weeks increases risk of surgical site hemorrhage, (2) Severe uncontrolled hypertension (>185/110 for stroke, generally >180/110 for STEMI) increases intracranial hemorrhage risk, (3) Platelet count <100,000 impairs clotting ability. The benefit-risk ratio must be carefully evaluated by the provider. A) and B) Identifying only one contraindication misses the full picture. D) A confirmed STEMI does not override absolute contraindications — the risk of fatal hemorrhage may exceed the benefit.',
        },
        {
          stem: 'A nurse is caring for a patient who received alteplase (tPA) for an ischemic stroke 1 hour ago. The patient\'s blood pressure is 198/112 mmHg. The nurse should anticipate which action?',
          options: [
            'A) No intervention — elevated BP is expected after tPA and will resolve on its own',
            'B) Administer IV antihypertensive medication to maintain BP below 180/105 for the first 24 hours post-tPA',
            'C) Administer aspirin 325 mg immediately to prevent re-occlusion',
            'D) Apply ice packs to the forehead to lower blood pressure naturally',
          ],
          correct: 1,
          rationale: 'B) CORRECT — After tPA administration for stroke, BP must be maintained below 180/105 mmHg for the first 24 hours to reduce the risk of intracranial hemorrhage. IV labetalol or nicardipine are commonly used. A) Uncontrolled hypertension post-tPA significantly increases hemorrhage risk. C) Aspirin and other antiplatelets/anticoagulants are typically held for 24 hours after tPA to avoid compounding the bleeding risk. D) Ice packs are not an evidence-based intervention for acute hypertension management.',
        },
      ],
      y: [
        {
          stem: 'A nurse is preparing to administer alteplase (tPA) to a patient with an acute ischemic stroke. Which assessment finding would cause the nurse to HOLD the medication and notify the provider?',
          options: [
            'A) Blood pressure 152/88 mmHg',
            'B) Blood glucose 180 mg/dL',
            'C) Patient reports symptom onset was "yesterday afternoon"',
            'D) History of well-controlled hypertension on lisinopril',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Alteplase for ischemic stroke MUST be administered within 3-4.5 hours of symptom onset. "Yesterday afternoon" far exceeds this window, making tPA contraindicated and dangerous (risk of hemorrhagic conversion without benefit). A) BP 152/88 is below the tPA threshold (<185/110 for eligibility). B) Hyperglycemia should be managed but is not a contraindication. D) A history of treated hypertension is not a contraindication.',
        },
        {
          stem: 'A nurse is monitoring a patient during alteplase (tPA) infusion for an acute STEMI. Which assessment is MOST important for the nurse to perform?',
          options: [
            'A) Assess urine output every hour',
            'B) Perform frequent neurological assessments and monitor all puncture sites for bleeding',
            'C) Monitor serum potassium levels every 30 minutes',
            'D) Assess for signs of allergic reaction such as hives',
          ],
          correct: 1,
          rationale: 'B) CORRECT — The #1 risk of alteplase is hemorrhage. Neurological assessments detect intracranial hemorrhage (the most dangerous complication). Monitoring puncture sites, gums, urine, and stool for bleeding is essential during and after the infusion. A) Urine output monitoring is routine but not the highest priority during tPA. C) Potassium monitoring is not specifically indicated. D) Allergic reactions to tPA are rare; bleeding is the primary concern.',
        },
        {
          stem: 'A nurse is educating a new graduate about the difference between alteplase (tPA) and heparin. Which statement by the new graduate indicates correct understanding?',
          options: [
            'A) "Both medications prevent new clots from forming."',
            'B) "Alteplase dissolves existing clots, while heparin prevents new clots from forming."',
            'C) "Heparin dissolves existing clots, while alteplase prevents new ones."',
            'D) "Both medications dissolve existing clots but work on different pathways."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Alteplase (thrombolytic) activates plasminogen to dissolve existing fibrin clots. Heparin (anticoagulant) prevents formation of NEW clots by enhancing antithrombin III. This is a fundamental pharmacological distinction. A) Alteplase does not just prevent — it actively dissolves. C) Heparin does NOT dissolve clots. D) Heparin does not dissolve clots at all.',
        },
      ],
      r: [
        {
          stem: 'Which medication is the antidote for alteplase (tPA) if life-threatening bleeding occurs?',
          options: [
            'A) Protamine sulfate',
            'B) Vitamin K (phytonadione)',
            'C) Aminocaproic acid (Amicar)',
            'D) Idarucizumab (Praxbind)',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Aminocaproic acid (Amicar) is an antifibrinolytic that inhibits plasminogen activation, directly counteracting the mechanism of alteplase. A) Protamine reverses heparin. B) Vitamin K reverses warfarin. D) Idarucizumab reverses dabigatran.',
        },
        {
          stem: 'The time window for administering alteplase (tPA) for an acute ischemic stroke is:',
          options: [
            'A) Within 30 minutes of symptom onset',
            'B) Within 3 to 4.5 hours of symptom onset',
            'C) Within 12 hours of symptom onset',
            'D) Within 24 hours of symptom onset',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Alteplase for acute ischemic stroke must be administered within 3 hours (standard) to 4.5 hours (extended criteria) of symptom onset. Beyond this window, the risk of hemorrhagic conversion outweighs the benefit of clot dissolution. A) 30 minutes is too narrow. C) and D) These windows far exceed the evidence-based timeframe for stroke tPA.',
        },
        {
          stem: 'The #1 adverse effect the nurse monitors for during alteplase (tPA) administration is:',
          options: [
            'A) Hyperkalemia',
            'B) Hemorrhage',
            'C) Bradycardia',
            'D) Renal failure',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Hemorrhage (bleeding) is the most serious and common adverse effect of thrombolytic therapy. Intracranial hemorrhage is the most feared complication. The nurse monitors for obvious and occult bleeding: neurological changes, gum bleeding, hematuria, melena, bruising, and oozing from IV sites. A) Hyperkalemia is not associated with tPA. C) Bradycardia can occur with reperfusion but is not the #1 concern. D) Renal failure is not a primary adverse effect.',
        },
      ],
    },
  },

  // ============================================================
  // GROWTH FACTORS
  // ============================================================

  'Epoetin Alfa (Procrit/Epogen)': {
    details: [
      'Erythropoiesis-stimulating agent (ESA) — stimulates RBC production in the bone marrow',
      'Used for anemia of CKD, chemotherapy-induced anemia, surgical blood loss reduction',
      'BLACK BOX WARNING: Do NOT exceed hemoglobin 11-12 g/dL — increased risk of thrombosis, MI, stroke, death',
      'Requires adequate iron stores — check iron, ferritin, TIBC before and during therapy (no iron = no response)',
      'Monitor blood pressure — hypertension is a major adverse effect (up to 25% of patients)',
      'Onset: 2-6 weeks for noticeable effect — NOT for acute anemia or blood loss emergencies',
    ],
    questions: {
      g: [
        {
          stem: 'A patient with chronic kidney disease has been receiving epoetin alfa (Procrit) for 8 weeks. The hemoglobin has risen from 8.2 g/dL to 12.8 g/dL. Blood pressure is 168/102 mmHg (baseline 128/78). Which action should the nurse take FIRST?',
          options: [
            'A) Continue the current dose since the hemoglobin is improving',
            'B) Hold the epoetin alfa and notify the provider — the hemoglobin exceeds the safe target and BP is significantly elevated',
            'C) Increase the epoetin alfa dose to maintain the hemoglobin above 13 g/dL',
            'D) Administer IV iron to complement the epoetin alfa',
          ],
          correct: 1,
          rationale: 'B) CORRECT — The hemoglobin of 12.8 g/dL EXCEEDS the black box warning threshold of 11-12 g/dL. Hemoglobin above this level significantly increases the risk of thrombotic events (MI, stroke, DVT, death). The severe hypertension (168/102, up from 128/78) is another major concern — HTN is the most common adverse effect of epoetin alfa and can cause hypertensive crisis. The drug should be held and the provider notified. A) Continuing at the current dose risks fatal thrombotic events. C) DANGEROUS — increasing the dose when Hgb is already above target amplifies the risk. D) Iron supplementation is important when iron is deficient, but the immediate priority is the supratherapeutic hemoglobin and hypertension.',
        },
        {
          stem: 'A patient with chemotherapy-induced anemia has been receiving epoetin alfa (Procrit) for 4 weeks with no increase in hemoglobin (baseline 8.0 g/dL, current 8.1 g/dL). The nurse reviews labs and finds ferritin 8 ng/mL (normal 20-200) and transferrin saturation 12% (normal 20-50%). Which action is MOST appropriate?',
          options: [
            'A) Double the epoetin alfa dose since the current dose is ineffective',
            'B) Notify the provider — iron supplementation is needed before epoetin alfa can be effective, as the patient\'s iron stores are depleted',
            'C) Discontinue epoetin alfa permanently since it is not working',
            'D) Transfuse 2 units of packed RBCs to correct the anemia immediately',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Epoetin alfa stimulates RBC production, but RBC production REQUIRES iron as a building block. With ferritin of 8 (severely depleted iron stores) and transferrin saturation of 12% (insufficient iron availability), the bone marrow cannot produce hemoglobin-containing RBCs despite erythropoietin stimulation. Iron supplementation (oral or IV) is essential for epoetin alfa to work. A) Increasing the dose without addressing iron deficiency is futile — the bone marrow has the signal but not the raw materials. C) The medication may be effective once iron stores are replenished. D) Transfusion addresses the immediate anemia but does not solve the underlying production issue.',
        },
        {
          stem: 'A patient on epoetin alfa (Procrit) calls the clinic reporting sudden onset of severe headache, visual changes, and nosebleed. Blood pressure is 210/118 mmHg at a local pharmacy. Which instruction should the nurse give?',
          options: [
            'A) "Take an extra dose of your blood pressure medication and rest."',
            'B) "Go to the nearest emergency department immediately — these are signs of hypertensive emergency, which is a known complication of epoetin alfa."',
            'C) "This is a normal side effect of epoetin alfa. Take acetaminophen and lie down."',
            'D) "Discontinue the epoetin alfa and schedule a clinic visit for next week."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — BP 210/118 with severe headache, visual changes, and epistaxis constitutes a hypertensive emergency with evidence of end-organ damage. Hypertension is a major adverse effect of epoetin alfa — the drug increases red cell mass, raising blood viscosity and peripheral vascular resistance. This requires immediate emergency evaluation. A) Self-adjusting medications at home is unsafe during a hypertensive emergency. C) A BP of 210/118 is NEVER normal — this is life-threatening. D) Waiting until next week risks stroke, MI, or death.',
        },
      ],
      y: [
        {
          stem: 'A nurse is teaching a patient newly prescribed epoetin alfa (Procrit) for anemia related to chronic kidney disease. Which statement by the patient indicates a need for further teaching?',
          options: [
            'A) "I should keep my follow-up appointments so they can check my hemoglobin levels."',
            'B) "This medication should start working within a couple of days to fix my anemia."',
            'C) "I need to have my blood pressure checked regularly while on this medication."',
            'D) "I should take my iron supplements as prescribed along with this medication."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Epoetin alfa takes 2-6 WEEKS to produce a noticeable increase in hemoglobin. It stimulates the bone marrow to increase RBC production, which is a gradual process. Patients expecting immediate results may become frustrated and non-compliant. A) Correct — regular Hgb monitoring is essential to keep levels in the safe range. C) Correct — BP monitoring is critical due to the hypertension risk. D) Correct — adequate iron stores are required for the medication to work.',
        },
        {
          stem: 'A nurse is assessing a patient on epoetin alfa (Procrit) for chronic kidney disease. Which assessment finding would be MOST concerning to the nurse?',
          options: [
            'A) Mild fatigue and pallor',
            'B) New-onset calf swelling, redness, and warmth in the left leg',
            'C) Slight bruising at the injection site',
            'D) Mild headache after the injection',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Calf swelling, redness, and warmth are signs of DVT (deep vein thrombosis). Thrombotic events are the most serious complication of epoetin alfa, especially when hemoglobin exceeds 11-12 g/dL. This requires immediate evaluation. A) Fatigue and pallor may indicate the anemia is not yet resolved — not an emergency. C) Injection site bruising is a mild, expected reaction. D) Mild headache alone is a common, less-concerning side effect.',
        },
        {
          stem: 'Before initiating epoetin alfa (Procrit), which baseline lab values should the nurse review? Select the BEST answer.',
          options: [
            'A) PT/INR and aPTT',
            'B) Hemoglobin, iron studies (ferritin, TIBC, transferrin saturation), and blood pressure',
            'C) Blood glucose and hemoglobin A1C',
            'D) BUN and creatinine only',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Before starting epoetin alfa, the nurse should verify: hemoglobin (to establish baseline and ensure it is below 10 g/dL for CKD), iron studies (adequate iron stores are essential for RBC production), and blood pressure (baseline for monitoring the hypertension risk). A) Coagulation studies are for anticoagulant monitoring. C) Glucose studies are for diabetes management. D) BUN/creatinine are relevant for CKD staging but are not the key labs for epoetin alfa specifically.',
        },
      ],
      r: [
        {
          stem: 'Epoetin alfa (Procrit) stimulates production of which blood cell type?',
          options: [
            'A) White blood cells (neutrophils)',
            'B) Red blood cells (erythrocytes)',
            'C) Platelets (thrombocytes)',
            'D) Lymphocytes',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Epoetin alfa is a synthetic form of erythropoietin, the hormone produced by the kidneys that stimulates red blood cell production in the bone marrow. A) Neutrophil production is stimulated by filgrastim (G-CSF). C) Platelet production is stimulated by oprelvekin (IL-11). D) Lymphocyte production is not the target of epoetin alfa.',
        },
        {
          stem: 'The hemoglobin target when administering epoetin alfa (Procrit) should NOT exceed:',
          options: [
            'A) 8 g/dL',
            'B) 10 g/dL',
            'C) 11-12 g/dL',
            'D) 15 g/dL',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Per the FDA black box warning, hemoglobin should not exceed 11-12 g/dL with ESA therapy. Levels above this threshold significantly increase the risk of cardiovascular events (MI, stroke) and death. A) 8 g/dL is below most treatment initiation thresholds. B) 10 g/dL is a common treatment target but is not the ceiling. D) 15 g/dL far exceeds the safe limit.',
        },
        {
          stem: 'Which adverse effect is MOST commonly associated with epoetin alfa (Procrit)?',
          options: [
            'A) Hypotension',
            'B) Hypertension',
            'C) Hypoglycemia',
            'D) Bone pain',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Hypertension occurs in up to 25% of patients on epoetin alfa. It results from increased blood viscosity (more RBCs) and direct vascular effects. BP must be monitored closely and treated aggressively. A) Hypertension, not hypotension, is the concern. C) Epoetin alfa does not affect blood glucose. D) Bone pain is the hallmark side effect of filgrastim (G-CSF), not epoetin alfa.',
        },
      ],
    },
  },

  'Filgrastim (Neupogen)': {
    details: [
      'Granulocyte colony-stimulating factor (G-CSF) — stimulates neutrophil production in bone marrow',
      'Used for chemotherapy-induced neutropenia (ANC <1000) to reduce infection risk',
      'Timing: give 24 hours AFTER chemo, stop 24 hours BEFORE next chemo cycle (do not give with chemo)',
      '#1 side effect: bone pain (from rapid marrow expansion) — treat with acetaminophen or NSAIDs',
      'Monitor CBC with differential — watch for leukocytosis (WBC >100,000 = discontinue)',
      'Splenic rupture risk (rare but serious) — teach patients to report left upper quadrant pain',
    ],
    questions: {
      g: [
        {
          stem: 'A patient receiving chemotherapy has an ANC of 450/mm3 and is prescribed filgrastim (Neupogen). The next chemotherapy cycle is scheduled for tomorrow morning. The nurse should:',
          options: [
            'A) Administer the filgrastim now and the chemotherapy as scheduled tomorrow',
            'B) Hold the filgrastim — it should NOT be given within 24 hours of chemotherapy administration',
            'C) Administer both the filgrastim and chemotherapy simultaneously to save time',
            'D) Cancel the chemotherapy permanently since the ANC is too low',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Filgrastim must be stopped at least 24 hours BEFORE the next chemotherapy cycle. Chemotherapy targets rapidly dividing cells — if filgrastim is stimulating rapid neutrophil production when chemo is given, the chemo will destroy the newly produced neutrophils, negating the benefit. Similarly, filgrastim should not be started until 24 hours AFTER chemo. A) Giving filgrastim today when chemo is tomorrow violates the 24-hour rule. C) Simultaneous administration renders both medications counterproductive. D) The chemotherapy may be delayed, not necessarily cancelled — this is a provider decision.',
        },
        {
          stem: 'A patient who has been receiving filgrastim (Neupogen) for 5 days after chemotherapy reports severe left upper quadrant abdominal pain that radiates to the left shoulder. Which action should the nurse take FIRST?',
          options: [
            'A) Administer acetaminophen for the presumed bone pain',
            'B) Discontinue the filgrastim and notify the provider immediately — suspect splenic rupture',
            'C) Position the patient on the left side and apply a heating pad',
            'D) Obtain a stool specimen for occult blood',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Left upper quadrant pain radiating to the left shoulder (Kehr sign) in a patient on filgrastim is SPLENIC RUPTURE until proven otherwise. Filgrastim stimulates massive marrow expansion, and the spleen (which also contains hematopoietic tissue) can enlarge and rupture. This is a rare but life-threatening emergency requiring immediate intervention. A) Bone pain from filgrastim is typically diffuse (back, hips, sternum), not localized LUQ with shoulder radiation. Treating this as simple bone pain delays critical intervention. C) Heating pad application and positioning do not address a surgical emergency. D) While GI assessment is reasonable, the specific location and radiation pattern point to splenic rupture, not GI bleeding.',
        },
        {
          stem: 'A patient receiving filgrastim (Neupogen) has morning labs showing WBC 112,000/mm3 (normal 4,500-11,000). The patient feels well and has no symptoms. Which action should the nurse take?',
          options: [
            'A) Continue the filgrastim since the patient is asymptomatic',
            'B) Hold the filgrastim and notify the provider — leukocytosis above 100,000 requires discontinuation',
            'C) Reduce the filgrastim dose by half and recheck WBC in 24 hours',
            'D) Administer the filgrastim and add aspirin for thrombosis prevention',
          ],
          correct: 1,
          rationale: 'B) CORRECT — A WBC of 112,000 indicates severe leukocytosis. When WBC exceeds 100,000/mm3, filgrastim should be discontinued due to the risk of leukostasis (WBC clumping in blood vessels causing organ damage). The fact that the patient is asymptomatic does not change the need to hold the medication. A) Asymptomatic leukocytosis still requires action — the complications can be sudden. C) The nurse cannot independently adjust the dose. D) This WBC level requires stopping the drug, not continuing with additional medications.',
        },
      ],
      y: [
        {
          stem: 'A patient receiving filgrastim (Neupogen) reports "achy bones in my back and hips." The nurse\'s BEST response is:',
          options: [
            'A) "This pain indicates the medication is not working. I will notify the provider."',
            'B) "Bone pain is the most common side effect and actually indicates the bone marrow is responding. Acetaminophen can help manage the discomfort."',
            'C) "You should stop the filgrastim immediately if you have bone pain."',
            'D) "Bone pain means you are developing osteoporosis from the medication."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Bone pain is the #1 side effect of filgrastim, occurring in up to 30% of patients. It results from rapid expansion of bone marrow as neutrophil production increases. This is actually a sign that the medication IS working. Mild analgesics (acetaminophen, NSAIDs) are the first-line treatment. A) Bone pain does not indicate treatment failure — it indicates marrow response. C) Bone pain alone is not a reason to discontinue. D) Filgrastim does not cause osteoporosis — the pain is from marrow expansion.',
        },
        {
          stem: 'A nurse is reviewing the medication schedule for a patient who received chemotherapy yesterday at 0900. Filgrastim (Neupogen) is ordered to begin. Which time is the EARLIEST appropriate time to administer the first dose?',
          options: [
            'A) Today at 0900 (24 hours after chemo)',
            'B) Yesterday at 1500 (6 hours after chemo)',
            'C) Today at 0100 (16 hours after chemo)',
            'D) Tomorrow at 0900 (48 hours after chemo)',
          ],
          correct: 0,
          rationale: 'A) CORRECT — Filgrastim should be started at least 24 hours after chemotherapy administration. Chemo was given yesterday at 0900, so the earliest appropriate time is today at 0900 (exactly 24 hours later). B) 6 hours is far too early — the chemotherapy is still actively destroying dividing cells. C) 16 hours is insufficient clearance time. D) While 48 hours is safe, unnecessarily delaying filgrastim leaves the patient neutropenic longer.',
        },
        {
          stem: 'Which patient teaching point is essential for a patient starting filgrastim (Neupogen)?',
          options: [
            'A) "Avoid eating iron-rich foods while on this medication."',
            'B) "Report any sudden, severe left-sided abdominal pain immediately, as this could indicate a rare but serious complication."',
            'C) "Your blood pressure will need to be checked daily."',
            'D) "You should limit fluid intake to 1 liter per day."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Patients must be taught to report left upper quadrant pain immediately due to the risk of splenic rupture — a rare but life-threatening complication. Early recognition is critical for survival. A) Iron-rich foods are not restricted with filgrastim. C) Blood pressure monitoring is more relevant for epoetin alfa. D) Fluid restriction is not indicated.',
        },
      ],
      r: [
        {
          stem: 'Filgrastim (Neupogen) stimulates production of which blood cell type?',
          options: [
            'A) Red blood cells (erythrocytes)',
            'B) Platelets (thrombocytes)',
            'C) Neutrophils (granulocytes)',
            'D) Lymphocytes',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Filgrastim is a granulocyte colony-stimulating factor (G-CSF) that specifically stimulates the bone marrow to produce neutrophils. It is used to treat chemotherapy-induced neutropenia. A) RBC production is stimulated by epoetin alfa. B) Platelet production is stimulated by oprelvekin (IL-11). D) Lymphocyte production is not the primary target of G-CSF.',
        },
        {
          stem: 'The #1 side effect of filgrastim (Neupogen) is:',
          options: [
            'A) Hypertension',
            'B) Bone pain',
            'C) Nausea and vomiting',
            'D) Hair loss',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Bone pain (medullary bone pain) is the most common side effect, occurring in up to 30% of patients. It is caused by rapid expansion and stimulation of the bone marrow. Typically affects the back, hips, and sternum. A) Hypertension is the #1 side effect of epoetin alfa, not filgrastim. C) Nausea is more associated with chemotherapy itself. D) Hair loss is caused by chemotherapy, not filgrastim.',
        },
        {
          stem: 'When should filgrastim (Neupogen) be administered in relation to chemotherapy?',
          options: [
            'A) At the same time as chemotherapy',
            'B) 24 hours before chemotherapy',
            'C) 24 hours after chemotherapy, and stopped 24 hours before the next cycle',
            'D) 1 week after chemotherapy completion',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Filgrastim is given 24 hours AFTER chemotherapy (to allow chemo to clear before stimulating marrow) and stopped 24 hours BEFORE the next cycle (to protect newly produced neutrophils from being destroyed by chemo). A) Simultaneous administration is counterproductive. B) Giving before chemo wastes the effect. D) Waiting 1 week unnecessarily prolongs the neutropenic period.',
        },
      ],
    },
  },

  'Oprelvekin (Neumega)': {
    details: [
      'Interleukin-11 (IL-11) — stimulates megakaryocyte growth and platelet production',
      'Used for chemotherapy-induced thrombocytopenia (low platelets)',
      'Major side effects: fluid retention (edema, weight gain, pleural effusions), atrial fibrillation/flutter',
      'Monitor: daily weights, I&O, cardiac rhythm, platelet counts',
      'Timing: start 6-24 hours after chemo, continue until platelets >=50,000; stop 2 days before next chemo cycle',
      'Contraindicated in patients with heart failure due to severe fluid retention',
    ],
    questions: {
      g: [
        {
          stem: 'A patient receiving oprelvekin (Neumega) for chemotherapy-induced thrombocytopenia reports increasing shortness of breath, bilateral ankle edema (3+), and a weight gain of 8 lbs in 3 days. Cardiac monitor shows a new irregular rhythm with absent P waves. Which action should the nurse take FIRST?',
          options: [
            'A) Administer a diuretic and continue the oprelvekin as scheduled',
            'B) Hold the oprelvekin and notify the provider — the patient is exhibiting fluid overload and probable atrial fibrillation, both known adverse effects',
            'C) Elevate the legs and restrict sodium intake',
            'D) Administer oxygen and obtain a chest X-ray only',
          ],
          correct: 1,
          rationale: 'B) CORRECT — This patient is exhibiting TWO of oprelvekin\'s most serious adverse effects: severe fluid retention (8 lb weight gain in 3 days, 3+ edema, dyspnea) and atrial fibrillation (irregular rhythm, absent P waves). The medication should be held and the provider notified for comprehensive management. Continuing the drug will worsen both conditions. A) Administering a diuretic may help the fluid overload, but continuing oprelvekin will perpetuate the problem. The nurse should address the root cause. C) Leg elevation alone is insufficient for this level of fluid overload with cardiac arrhythmia. D) While O2 and CXR are appropriate, the first action is to stop the offending agent.',
        },
        {
          stem: 'A provider orders oprelvekin (Neumega) for a patient with chemotherapy-induced thrombocytopenia. The nurse reviews the patient\'s history and finds a diagnosis of heart failure with ejection fraction of 30%. Which action is MOST appropriate?',
          options: [
            'A) Administer the oprelvekin as ordered since the thrombocytopenia needs treatment',
            'B) Question the order — oprelvekin is contraindicated in heart failure due to severe fluid retention that can worsen cardiac function',
            'C) Administer the oprelvekin with a concurrent diuretic to prevent fluid overload',
            'D) Administer half the prescribed dose to reduce the risk of fluid retention',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Oprelvekin causes significant fluid retention that can worsen heart failure, potentially causing pulmonary edema and cardiac decompensation. It is contraindicated in patients with known heart failure. The nurse must question this order. A) Administering to a patient with HF is dangerous regardless of the thrombocytopenia. C) A concurrent diuretic does not eliminate the risk — the fluid retention from oprelvekin can be severe and unpredictable. D) Dose reduction does not eliminate the contraindication.',
        },
        {
          stem: 'A patient on oprelvekin (Neumega) has a platelet count that has risen from 22,000/mm3 to 62,000/mm3 over 7 days. The next chemotherapy cycle is in 3 days. The nurse should anticipate:',
          options: [
            'A) Continuing oprelvekin through the next chemotherapy cycle for maximum platelet protection',
            'B) Discontinuing oprelvekin now — platelets are above 50,000 and it must be stopped at least 2 days before the next chemo cycle',
            'C) Increasing the oprelvekin dose to push platelets above 150,000 before chemo',
            'D) Switching to filgrastim since the platelets have recovered',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Oprelvekin is discontinued when platelets reach >=50,000/mm3 AND must be stopped at least 2 days before the next chemotherapy cycle. The platelets have recovered to 62,000, and with chemo in 3 days, stopping today provides the required 2-day gap. A) Oprelvekin should not be given concurrently with chemotherapy. C) The goal is not to maximize platelets — it is to reach a safe threshold (>=50,000). D) Filgrastim stimulates neutrophils, not platelets — these are different drugs for different cytopenias.',
        },
      ],
      y: [
        {
          stem: 'A nurse is monitoring a patient receiving oprelvekin (Neumega). Which assessment is MOST important to perform daily?',
          options: [
            'A) Blood glucose level',
            'B) Daily weight and intake and output',
            'C) Visual acuity testing',
            'D) Neurological assessment',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Daily weights and I&O are essential because fluid retention is the most common and potentially dangerous adverse effect of oprelvekin. A weight gain of 2+ lbs/day or significant fluid imbalance should be reported immediately. A) Oprelvekin does not significantly affect blood glucose. C) Visual acuity testing is not specifically indicated. D) While general assessments are important, neurological assessment is not the priority monitoring parameter for oprelvekin.',
        },
        {
          stem: 'A nurse is teaching a patient about oprelvekin (Neumega). Which statement by the patient indicates correct understanding?',
          options: [
            'A) "This medication will increase my white blood cell count."',
            'B) "I should report any sudden weight gain, swelling in my ankles, or shortness of breath right away."',
            'C) "The main side effect is bone pain in my back and hips."',
            'D) "I need to avoid vitamin K-rich foods while taking this medication."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — These are signs of fluid retention (the major adverse effect) that require immediate reporting. Weight gain, edema, and dyspnea can indicate worsening fluid overload or early cardiac complications. A) WBC production is stimulated by filgrastim, not oprelvekin. C) Bone pain is the hallmark of filgrastim, not oprelvekin. D) Vitamin K dietary restrictions relate to warfarin, not oprelvekin.',
        },
        {
          stem: 'Which laboratory value should the nurse monitor to evaluate the effectiveness of oprelvekin (Neumega)?',
          options: [
            'A) Hemoglobin and hematocrit',
            'B) White blood cell count with differential',
            'C) Platelet count',
            'D) PT/INR',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Oprelvekin stimulates platelet production (thrombopoiesis). The platelet count is the direct measure of effectiveness. The goal is to reach >=50,000/mm3. A) Hemoglobin/hematocrit evaluates epoetin alfa effectiveness. B) WBC/differential evaluates filgrastim effectiveness. D) PT/INR monitors warfarin therapy.',
        },
      ],
      r: [
        {
          stem: 'Oprelvekin (Neumega) stimulates production of which blood cell type?',
          options: [
            'A) Red blood cells',
            'B) Neutrophils',
            'C) Platelets',
            'D) Eosinophils',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Oprelvekin (interleukin-11) stimulates megakaryocyte maturation and platelet production (thrombopoiesis). A) RBCs are stimulated by epoetin alfa. B) Neutrophils are stimulated by filgrastim. D) Eosinophils are not the target of oprelvekin.',
        },
        {
          stem: 'The MOST common adverse effect of oprelvekin (Neumega) is:',
          options: [
            'A) Bone pain',
            'B) Hypertension',
            'C) Fluid retention (edema, weight gain)',
            'D) Hyperglycemia',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Fluid retention (peripheral edema, weight gain, pleural effusions) is the hallmark adverse effect of oprelvekin, occurring in the majority of patients. This is due to sodium and water retention. A) Bone pain is the #1 side effect of filgrastim. B) Hypertension is the #1 side effect of epoetin alfa. D) Hyperglycemia is associated with tacrolimus, not oprelvekin.',
        },
        {
          stem: 'Oprelvekin (Neumega) is contraindicated in patients with:',
          options: [
            'A) Diabetes mellitus',
            'B) Heart failure',
            'C) Hypothyroidism',
            'D) Osteoporosis',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Oprelvekin causes significant fluid retention and can precipitate atrial fibrillation, both of which can be fatal in patients with existing heart failure. It is contraindicated in HF. A) Diabetes is not a contraindication. C) Hypothyroidism is not a contraindication. D) Osteoporosis is not a contraindication.',
        },
      ],
    },
  },

  'Sargramostim (Leukine)': {
    details: [
      'Granulocyte-macrophage colony-stimulating factor (GM-CSF) — stimulates granulocytes, monocytes, AND macrophages',
      'Broader stimulation than filgrastim (G-CSF): affects multiple WBC lineages, not just neutrophils',
      'Used for bone marrow transplant (BMT) recovery, myeloid reconstitution, graft failure',
      'Side effects: bone pain, fever, fluid retention, first-dose reaction (flushing, hypotension, dyspnea)',
      'Monitor: CBC with differential, vital signs (especially during first dose), respiratory status',
      'Do not administer within 24 hours of chemo or radiation (same timing rule as filgrastim)',
    ],
    questions: {
      g: [
        {
          stem: 'A nurse is administering the first dose of sargramostim (Leukine) to a bone marrow transplant recipient. Ten minutes into the infusion, the patient develops flushing, hypotension (BP 86/52), tachycardia (HR 124), and dyspnea. Which action should the nurse take FIRST?',
          options: [
            'A) Continue the infusion at a slower rate since this is an expected response',
            'B) Stop the infusion, maintain IV access, and notify the provider — this is a first-dose reaction requiring immediate intervention',
            'C) Administer epinephrine 0.3 mg IM for anaphylaxis',
            'D) Elevate the head of the bed and administer oxygen only',
          ],
          correct: 1,
          rationale: 'B) CORRECT — First-dose reaction to sargramostim is a known complication characterized by flushing, hypotension, tachycardia, and dyspnea. The infusion should be stopped immediately while maintaining IV access for emergency medications. The provider must be notified for further orders (fluids, vasopressors if needed). A) Continuing even at a slower rate perpetuates the reaction. C) While the symptoms overlap with anaphylaxis, this is a first-dose reaction specific to GM-CSF. The provider should differentiate and direct management. D) Supportive measures alone may be insufficient — the infusion must be stopped first.',
        },
        {
          stem: 'A patient is day +14 post-bone marrow transplant, receiving sargramostim (Leukine) for myeloid reconstitution. The morning CBC shows WBC 18,500/mm3 with ANC 12,200/mm3. Yesterday\'s WBC was 14,800/mm3. Which action is MOST appropriate?',
          options: [
            'A) Continue sargramostim at the current dose since the WBC is still within acceptable range',
            'B) Notify the provider — the rapid WBC rise may warrant dose reduction or temporary hold to prevent leukocytosis',
            'C) Administer filgrastim in addition to sargramostim to boost recovery further',
            'D) Discontinue sargramostim permanently since the marrow has engrafted',
          ],
          correct: 1,
          rationale: 'B) CORRECT — A rapidly rising WBC (14,800 to 18,500 in 24 hours) in a patient on sargramostim requires provider notification. While the level is not yet critical (>50,000-100,000), the trajectory suggests the medication may need dose adjustment or temporary hold to prevent dangerous leukocytosis. A) The rapid rate of increase is concerning even if the absolute number is still manageable. C) Adding filgrastim to sargramostim is not indicated and could cause excessive stimulation. D) Premature permanent discontinuation risks graft failure — the decision to stop should be based on sustained engraftment criteria.',
        },
        {
          stem: 'A nurse is comparing sargramostim (Leukine) and filgrastim (Neupogen) for a post-BMT patient. The provider explains that sargramostim was chosen over filgrastim. The nurse understands that the PRIMARY reason is:',
          options: [
            'A) Sargramostim is less expensive than filgrastim',
            'B) Sargramostim stimulates granulocytes, monocytes, AND macrophages, providing broader immune reconstitution than filgrastim (neutrophils only)',
            'C) Sargramostim has fewer side effects than filgrastim',
            'D) Sargramostim can be given simultaneously with chemotherapy',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Sargramostim (GM-CSF) has a BROADER spectrum of action than filgrastim (G-CSF). It stimulates multiple myeloid lineages (granulocytes, monocytes/macrophages), which is particularly beneficial for BMT recovery where comprehensive immune reconstitution is needed. Filgrastim primarily stimulates neutrophils. A) Cost is not the primary clinical rationale. C) Sargramostim actually has additional side effects (first-dose reaction, fluid retention) compared to filgrastim. D) Neither drug should be given within 24 hours of chemotherapy.',
        },
      ],
      y: [
        {
          stem: 'A nurse is preparing to administer sargramostim (Leukine) to a patient 26 hours after their last chemotherapy dose. Is this timing appropriate?',
          options: [
            'A) No — sargramostim should be given at least 48 hours after chemotherapy',
            'B) Yes — sargramostim should be given at least 24 hours after chemotherapy, and 26 hours meets this requirement',
            'C) No — sargramostim should be given simultaneously with chemotherapy',
            'D) Yes — there are no timing restrictions between sargramostim and chemotherapy',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Like filgrastim, sargramostim should not be administered within 24 hours of chemotherapy. At 26 hours post-chemo, the timing requirement is met. A) While some sources recommend 24-48 hours, the minimum is 24 hours, and 26 hours qualifies. C) Simultaneous administration is contraindicated. D) Timing restrictions do exist.',
        },
        {
          stem: 'Which assessment finding should the nurse EXPECT in a patient receiving sargramostim (Leukine)?',
          options: [
            'A) Decreased blood pressure and heart rate',
            'B) Low-grade fever and mild bone pain',
            'C) Significant weight loss',
            'D) Hypoglycemia',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Low-grade fever and bone pain are expected side effects of sargramostim, similar to filgrastim. Fever results from cytokine release during immune stimulation, and bone pain results from marrow expansion. A) Hypotension and tachycardia may occur during the first dose (first-dose reaction) but are not expected ongoing findings. C) Weight GAIN from fluid retention is more likely than weight loss. D) Sargramostim does not affect blood glucose.',
        },
        {
          stem: 'A nurse is monitoring a patient on sargramostim (Leukine) after bone marrow transplant. Which lab finding indicates the medication is EFFECTIVE?',
          options: [
            'A) Hemoglobin rising from 8.0 to 12.0 g/dL',
            'B) Platelet count rising from 20,000 to 150,000/mm3',
            'C) WBC and ANC rising with evidence of myeloid engraftment',
            'D) INR decreasing from 3.5 to 2.0',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Sargramostim\'s primary effect is stimulating granulocyte and monocyte/macrophage production. Rising WBC with improving ANC indicates successful myeloid reconstitution. A) Hemoglobin improvement would indicate epoetin alfa effectiveness. B) Platelet improvement would indicate oprelvekin effectiveness. D) INR changes relate to anticoagulant therapy.',
        },
      ],
      r: [
        {
          stem: 'Sargramostim (Leukine) stimulates production of which blood cell types?',
          options: [
            'A) Red blood cells only',
            'B) Platelets only',
            'C) Granulocytes, monocytes, and macrophages',
            'D) Neutrophils only',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Sargramostim is a GM-CSF (granulocyte-macrophage colony-stimulating factor) that stimulates multiple myeloid cell lines including granulocytes (neutrophils, eosinophils, basophils), monocytes, and macrophages. A) RBCs are stimulated by epoetin alfa. B) Platelets are stimulated by oprelvekin. D) Neutrophils only describes filgrastim (G-CSF). Sargramostim has a broader effect.',
        },
        {
          stem: 'How does sargramostim (Leukine) differ from filgrastim (Neupogen)?',
          options: [
            'A) Sargramostim stimulates only platelets while filgrastim stimulates only RBCs',
            'B) Sargramostim stimulates broader myeloid cell lines (granulocytes + monocytes/macrophages) while filgrastim primarily stimulates neutrophils',
            'C) Sargramostim is an anticoagulant while filgrastim is an antiplatelet',
            'D) There is no difference — they are the same medication',
          ],
          correct: 1,
          rationale: 'B) CORRECT — The key distinction: Sargramostim (GM-CSF) has BROADER stimulation affecting multiple myeloid lineages, while filgrastim (G-CSF) primarily targets neutrophil production. This makes sargramostim preferred for BMT recovery where comprehensive immune reconstitution is needed. A) Neither stimulates platelets or RBCs. C) Neither is an anticoagulant or antiplatelet. D) They are different medications with different scopes of action.',
        },
        {
          stem: 'The primary indication for sargramostim (Leukine) is:',
          options: [
            'A) Treatment of anemia in chronic kidney disease',
            'B) Prevention of DVT after hip replacement',
            'C) Myeloid reconstitution after bone marrow transplant',
            'D) Reversal of warfarin toxicity',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Sargramostim\'s primary FDA-approved indication is to accelerate myeloid recovery after autologous or allogeneic bone marrow transplant, reducing the period of neutropenia and associated infection risk. A) Anemia treatment is epoetin alfa\'s role. B) DVT prevention uses anticoagulants. D) Warfarin reversal uses vitamin K or FFP.',
        },
      ],
    },
  },

  // ============================================================
  // IMMUNOSUPPRESSANTS
  // ============================================================

  'Cyclosporine (Sandimmune/Neoral)': {
    details: [
      'Calcineurin inhibitor — blocks T-cell activation and IL-2 production to prevent transplant rejection',
      'Primary indication: organ transplant rejection prophylaxis (kidney, liver, heart), also autoimmune conditions',
      '#1 toxicity: NEPHROTOXICITY — monitor BUN, creatinine, urine output closely',
      'Other side effects: gingival hyperplasia (overgrowth of gum tissue), hirsutism (excess hair growth), tremors, HTN, hyperlipidemia',
      'GRAPEFRUIT increases cyclosporine levels (inhibits CYP3A4 metabolism) — must avoid',
      'No live vaccines during therapy — immunosuppressed patients cannot mount safe immune response',
      'Therapeutic drug monitoring required — trough levels drawn before the next dose',
    ],
    questions: {
      g: [
        {
          stem: 'A renal transplant patient on cyclosporine (Neoral) presents with a rising serum creatinine (from 1.2 to 2.8 mg/dL over 2 weeks), decreased urine output, and peripheral edema. The nurse must help differentiate between cyclosporine nephrotoxicity and transplant rejection. Which factor MOST helps distinguish nephrotoxicity?',
          options: [
            'A) Nephrotoxicity occurs only in the first week post-transplant, while rejection occurs later',
            'B) A supratherapeutic cyclosporine trough level supports nephrotoxicity, while a therapeutic or subtherapeutic level with fever and graft tenderness supports rejection',
            'C) Nephrotoxicity causes fever and malaise, while rejection does not',
            'D) Nephrotoxicity only affects BUN, while rejection only affects creatinine',
          ],
          correct: 1,
          rationale: 'B) CORRECT — This is a CLASSIC exam distinction. Both nephrotoxicity and rejection present with rising creatinine and decreased output. The key differentiator: if cyclosporine trough levels are HIGH (supratherapeutic), the kidney damage is likely drug toxicity. If levels are therapeutic/low AND the patient has fever, graft tenderness, and malaise, rejection is more likely. A biopsy may be needed for definitive diagnosis. A) Both can occur at any time post-transplant. C) Fever is associated with REJECTION, not nephrotoxicity. D) Both conditions affect BUN AND creatinine.',
        },
        {
          stem: 'A transplant patient on cyclosporine (Neoral) tells the nurse, "My friend told me that drinking grapefruit juice is good for my immune system, so I have been drinking a glass every morning for the past week." The patient\'s most recent cyclosporine trough level is 485 ng/mL (therapeutic range 100-400 ng/mL). Which action should the nurse take FIRST?',
          options: [
            'A) Reassure the patient that grapefruit juice is healthy and will not affect the medication',
            'B) Instruct the patient to stop drinking grapefruit juice immediately and notify the provider — grapefruit inhibits CYP3A4, increasing cyclosporine to toxic levels',
            'C) Tell the patient to increase the grapefruit juice to further boost their immune system',
            'D) Decrease the cyclosporine dose independently to compensate for the grapefruit interaction',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Grapefruit juice inhibits CYP3A4, the primary enzyme that metabolizes cyclosporine. This inhibition decreases drug clearance, causing cyclosporine levels to rise to toxic concentrations (485 ng/mL, well above the 100-400 range). The immediate actions are: (1) stop the grapefruit juice, and (2) notify the provider for level monitoring and possible dose adjustment. A) DANGEROUS — grapefruit juice has a well-documented, clinically significant interaction with cyclosporine. C) This would further increase already toxic levels. D) The nurse cannot independently change the dose of a medication with such a narrow therapeutic index.',
        },
        {
          stem: 'A transplant patient on cyclosporine (Neoral) is due for a flu vaccine. The public health nurse offers the patient the live attenuated influenza vaccine (FluMist nasal spray). Which action by the transplant nurse is MOST appropriate?',
          options: [
            'A) Allow the vaccine since influenza prevention is important for immunocompromised patients',
            'B) REFUSE the live vaccine — immunosuppressed patients must receive the inactivated influenza injection instead, as live vaccines can cause active infection',
            'C) Delay the vaccine until 1 week after the next cyclosporine dose',
            'D) Administer the live vaccine at half the normal dose',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Patients on immunosuppressive therapy (cyclosporine, tacrolimus, etc.) must NEVER receive live vaccines. Live vaccines contain attenuated pathogens that can cause active, potentially fatal infection in immunocompromised patients. The patient should receive the INACTIVATED influenza injection instead. A) Influenza prevention IS important, but with the correct vaccine formulation. C) Timing relative to cyclosporine does not make a live vaccine safe. D) A reduced dose of a live vaccine is still dangerous in immunosuppressed patients.',
        },
      ],
      y: [
        {
          stem: 'A transplant patient on cyclosporine (Neoral) reports embarrassing overgrowth of gum tissue that bleeds when brushing. The nurse recognizes this as:',
          options: [
            'A) Gingivitis from poor oral hygiene unrelated to the medication',
            'B) Gingival hyperplasia, a known side effect of cyclosporine — the patient should maintain meticulous oral hygiene and may need dental referral',
            'C) An allergic reaction to cyclosporine requiring immediate discontinuation',
            'D) A sign of transplant rejection affecting the oral mucosa',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Gingival hyperplasia (overgrowth of gum tissue) is a well-known side effect of cyclosporine, occurring in 25-50% of patients. Meticulous oral hygiene, regular dental visits, and sometimes surgical reduction of the tissue are required. Calcium channel blockers (nifedipine) can worsen this if co-prescribed. A) While oral hygiene is important, the gingival hyperplasia is directly caused by cyclosporine. C) Gingival hyperplasia is a side effect, not an allergy. D) Oral changes are not a sign of transplant rejection.',
        },
        {
          stem: 'A nurse is teaching a transplant patient about cyclosporine (Neoral). Which patient statement requires further teaching?',
          options: [
            'A) "I need to have regular blood tests to check my drug levels."',
            'B) "I should avoid grapefruit and grapefruit juice."',
            'C) "I can get any vaccine I need, including the shingles vaccine, to stay healthy."',
            'D) "I should report any decrease in urine output to my doctor right away."',
          ],
          correct: 2,
          rationale: 'C) CORRECT — This requires further teaching. The shingles vaccine (Shingrix is non-live and may be considered, but Zostavax was live). More importantly, immunosuppressed patients must discuss ALL vaccines with their transplant team — they cannot receive live vaccines (MMR, varicella, live flu nasal spray). A) Correct understanding — therapeutic drug monitoring is essential. B) Correct understanding — grapefruit inhibits CYP3A4. D) Correct understanding — decreased urine output may indicate nephrotoxicity.',
        },
        {
          stem: 'Which lab value should the nurse prioritize monitoring in a patient receiving cyclosporine (Neoral)?',
          options: [
            'A) Hemoglobin A1C',
            'B) Serum creatinine and BUN',
            'C) PT/INR',
            'D) Troponin levels',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Nephrotoxicity is the #1 toxicity of cyclosporine. Serum creatinine and BUN are the primary markers of kidney function that detect early nephrotoxicity. Rising creatinine requires immediate evaluation and possible dose adjustment. A) A1C monitors diabetes — while hyperglycemia can occur, nephrotoxicity is the priority. C) PT/INR monitors anticoagulant therapy. D) Troponin monitors cardiac injury.',
        },
      ],
      r: [
        {
          stem: 'The #1 toxicity associated with cyclosporine (Neoral/Sandimmune) is:',
          options: [
            'A) Hepatotoxicity',
            'B) Nephrotoxicity',
            'C) Cardiotoxicity',
            'D) Pulmonary toxicity',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Nephrotoxicity is the most significant and dose-limiting toxicity of cyclosporine. It occurs in a significant percentage of transplant patients and requires close monitoring of serum creatinine, BUN, and urine output. A) Hepatotoxicity can occur but is not the #1 concern. C) Hypertension is a cardiovascular effect, but nephrotoxicity is the primary toxicity. D) Pulmonary toxicity is not a primary cyclosporine concern.',
        },
        {
          stem: 'Why must patients on cyclosporine (Neoral) avoid grapefruit juice?',
          options: [
            'A) Grapefruit causes cyclosporine to be excreted faster, reducing effectiveness',
            'B) Grapefruit inhibits CYP3A4, increasing cyclosporine blood levels and toxicity risk',
            'C) Grapefruit causes an allergic cross-reaction with cyclosporine',
            'D) Grapefruit blocks cyclosporine absorption in the GI tract',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Grapefruit juice inhibits the CYP3A4 enzyme in the intestinal wall and liver, which is responsible for metabolizing cyclosporine. When CYP3A4 is inhibited, cyclosporine is not broken down as efficiently, leading to elevated blood levels and increased risk of toxicity (especially nephrotoxicity). A) The opposite occurs — grapefruit INCREASES levels, not decreases. C) There is no allergic cross-reaction. D) Grapefruit increases absorption/decreases metabolism, not blocks absorption.',
        },
        {
          stem: 'Cyclosporine (Neoral) prevents organ transplant rejection by:',
          options: [
            'A) Killing all immune cells in the body',
            'B) Inhibiting calcineurin, which blocks T-cell activation and IL-2 production',
            'C) Stimulating B-cell antibody production against the transplanted organ',
            'D) Directly coating the transplanted organ to hide it from the immune system',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Cyclosporine is a calcineurin inhibitor. It blocks the calcineurin enzyme in T-cells, preventing the transcription of interleukin-2 (IL-2) and other cytokines essential for T-cell activation and proliferation. Without activated T-cells, the immune system cannot mount a rejection response. A) Cyclosporine selectively suppresses T-cells, not all immune cells. C) It suppresses immunity, not stimulates antibody production. D) This is not how immunosuppression works.',
        },
      ],
    },
  },

  'Tacrolimus (Prograf)': {
    details: [
      'Calcineurin inhibitor (FK506) — same mechanism as cyclosporine but 10-100x more potent',
      'Primary indication: organ transplant rejection prophylaxis (kidney, liver, heart) — first-line over cyclosporine in many centers',
      '#1 toxicity: NEPHROTOXICITY (same as cyclosporine) + NEUROTOXICITY (tremors, headache, seizures)',
      'Hyperglycemia: can cause new-onset diabetes after transplant (NODAT) — monitor blood glucose',
      'Therapeutic drug monitoring: trough levels required (drawn 30 min before next dose)',
      'Drug interactions: similar to cyclosporine — avoid grapefruit, many CYP3A4 interactions',
      'No live vaccines — same rule as all immunosuppressants',
    ],
    questions: {
      g: [
        {
          stem: 'A liver transplant patient on tacrolimus (Prograf) presents with hand tremors, severe headache, confusion, and a new-onset seizure. The tacrolimus trough level is 22 ng/mL (therapeutic range 5-15 ng/mL). The serum creatinine has risen from 1.0 to 2.4 mg/dL. The nurse recognizes these findings as:',
          options: [
            'A) Normal post-transplant adjustment symptoms that will resolve',
            'B) Tacrolimus toxicity — the supratherapeutic level is causing both neurotoxicity (tremors, headache, seizure) and nephrotoxicity (rising creatinine)',
            'C) Acute liver transplant rejection presenting with neurological symptoms',
            'D) A stroke unrelated to the tacrolimus',
          ],
          correct: 1,
          rationale: 'B) CORRECT — This is classic tacrolimus toxicity. The supratherapeutic trough level (22, therapeutic 5-15) explains BOTH presentations: (1) Neurotoxicity — tremors, headache, confusion, seizures (tacrolimus crosses the blood-brain barrier more readily than cyclosporine), and (2) Nephrotoxicity — rising creatinine. The drug should be held and the provider notified for dose adjustment. A) These are NOT normal — tremors may be mild and expected, but seizures and confusion indicate toxicity. C) Rejection typically presents with fever, graft tenderness, and elevated liver enzymes (for liver transplant), not primarily neurological symptoms. D) While stroke must be ruled out, the supratherapeutic tacrolimus level provides the most likely explanation.',
        },
        {
          stem: 'A kidney transplant patient who has been stable on tacrolimus (Prograf) for 2 years develops a random blood glucose of 286 mg/dL during a routine clinic visit. The patient has no history of diabetes. The nurse should:',
          options: [
            'A) Reassure the patient that this is a one-time finding and schedule a recheck in 3 months',
            'B) Recognize that tacrolimus can cause new-onset diabetes after transplant (NODAT) and notify the provider for evaluation, A1C, and possible treatment',
            'C) Assume the patient ate a large meal before the visit and disregard the value',
            'D) Discontinue the tacrolimus immediately and switch to a non-immunosuppressive regimen',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Tacrolimus is a well-known cause of new-onset diabetes after transplant (NODAT), occurring in 10-30% of patients. It impairs insulin secretion from pancreatic beta cells. A random glucose of 286 mg/dL in a patient with no diabetes history requires immediate evaluation: fasting glucose, hemoglobin A1C, and possibly initiating hypoglycemic therapy. A) A glucose of 286 is significantly elevated and warrants prompt evaluation, not a 3-month delay. C) Even postprandial glucose should not typically reach 286 mg/dL. D) Stopping immunosuppression risks organ rejection, which is life-threatening. The diabetes can usually be managed while continuing tacrolimus.',
        },
        {
          stem: 'A transplant patient is taking tacrolimus (Prograf) and is prescribed a new course of erythromycin for a respiratory infection. The nurse should be MOST concerned about:',
          options: [
            'A) Erythromycin will reduce tacrolimus absorption',
            'B) Erythromycin inhibits CYP3A4, which can significantly increase tacrolimus levels and cause nephrotoxicity and neurotoxicity',
            'C) Erythromycin will mask signs of transplant rejection',
            'D) Erythromycin is contraindicated in transplant patients regardless of other medications',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Erythromycin (and clarithromycin) are potent CYP3A4 inhibitors. Since tacrolimus is metabolized by CYP3A4, concurrent use significantly increases tacrolimus blood levels, raising the risk of nephrotoxicity and neurotoxicity. The provider should be notified, tacrolimus levels monitored more frequently, and an alternative antibiotic (azithromycin has less CYP3A4 interaction) considered. A) Erythromycin INCREASES tacrolimus levels, not decreases them. C) Erythromycin does not mask rejection signs. D) Erythromycin is not absolutely contraindicated — it requires careful monitoring and possible tacrolimus dose adjustment.',
        },
      ],
      y: [
        {
          stem: 'A nurse is comparing tacrolimus (Prograf) and cyclosporine (Neoral) for a nursing student. Which statement is MOST accurate?',
          options: [
            'A) Tacrolimus and cyclosporine work by completely different mechanisms',
            'B) Both are calcineurin inhibitors, but tacrolimus is more potent and more likely to cause neurotoxicity and hyperglycemia, while cyclosporine is more likely to cause gingival hyperplasia and hirsutism',
            'C) Cyclosporine causes nephrotoxicity but tacrolimus does not',
            'D) Tacrolimus is given IV only, while cyclosporine is given orally only',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Both are calcineurin inhibitors (same mechanism), but they have different side effect profiles. Tacrolimus: more neurotoxicity (tremors, seizures), more hyperglycemia (NODAT). Cyclosporine: more gingival hyperplasia and hirsutism. BOTH cause nephrotoxicity. A) They share the same mechanism (calcineurin inhibition). C) BOTH cause nephrotoxicity — this is the #1 toxicity for both drugs. D) Both are available in oral and IV formulations.',
        },
        {
          stem: 'A transplant patient on tacrolimus (Prograf) asks, "When should my blood be drawn to check the drug level?" The nurse responds:',
          options: [
            'A) "Blood should be drawn 2 hours after you take the medication to check the peak level."',
            'B) "Blood should be drawn right before your next dose — this is called a trough level."',
            'C) "Blood can be drawn at any random time during the day."',
            'D) "Blood should be drawn only if you are having side effects."',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Tacrolimus requires trough level monitoring — blood is drawn approximately 30 minutes before the next scheduled dose. Trough levels ensure the drug is maintained within the therapeutic range (typically 5-15 ng/mL) to prevent rejection while minimizing toxicity. A) Peak levels are not routinely used for tacrolimus monitoring. C) Random levels do not accurately reflect the drug\'s pharmacokinetics. D) Monitoring is scheduled routinely, not just when symptoms appear — the goal is to prevent toxicity.',
        },
        {
          stem: 'A nurse is reviewing the lab results for a patient on tacrolimus (Prograf) and notices a fasting blood glucose of 198 mg/dL. The patient has no diabetes history. Which action is MOST appropriate?',
          options: [
            'A) Disregard the finding since the patient is not diabetic',
            'B) Report the finding to the provider — tacrolimus can cause new-onset diabetes after transplant (NODAT), and elevated glucose requires evaluation',
            'C) Administer rapid-acting insulin immediately',
            'D) Discontinue the tacrolimus to resolve the hyperglycemia',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Tacrolimus-induced hyperglycemia/NODAT is a well-documented complication. A fasting glucose of 198 mg/dL (normal <100) in a non-diabetic patient requires provider notification, repeat testing, and possible initiation of glucose-lowering therapy. A) Ignoring hyperglycemia can lead to diabetic complications. C) Administering insulin without a provider order is inappropriate. D) Stopping the immunosuppressant risks organ rejection — glucose management is preferred while continuing tacrolimus.',
        },
      ],
      r: [
        {
          stem: 'The TWO primary toxicities associated with tacrolimus (Prograf) are:',
          options: [
            'A) Hepatotoxicity and cardiotoxicity',
            'B) Nephrotoxicity and neurotoxicity',
            'C) Pulmonary toxicity and ototoxicity',
            'D) Bone marrow suppression and GI toxicity',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Nephrotoxicity (#1, shared with cyclosporine) and neurotoxicity (tremors, headache, seizures — more prominent with tacrolimus than cyclosporine) are the two primary toxicities. A) Hepatotoxicity can occur but is not the primary concern; cardiotoxicity is not a major issue. C) Pulmonary and ototoxicity are not major tacrolimus toxicities. D) Bone marrow suppression is more associated with other immunosuppressants (azathioprine, mycophenolate).',
        },
        {
          stem: 'Tacrolimus (Prograf) can cause which metabolic complication that cyclosporine is less likely to cause?',
          options: [
            'A) Gingival hyperplasia',
            'B) Hirsutism',
            'C) New-onset diabetes (hyperglycemia)',
            'D) Hypercholesterolemia',
          ],
          correct: 2,
          rationale: 'C) CORRECT — Tacrolimus is significantly more likely than cyclosporine to cause new-onset diabetes after transplant (NODAT) due to direct toxic effects on pancreatic beta cells. A) Gingival hyperplasia is MORE associated with cyclosporine, not tacrolimus. B) Hirsutism is a cyclosporine side effect. D) Both can cause hyperlipidemia, but hyperglycemia/NODAT is the distinguishing metabolic concern for tacrolimus.',
        },
        {
          stem: 'Tacrolimus (Prograf) prevents transplant rejection by:',
          options: [
            'A) Directly killing transplant-attacking antibodies',
            'B) Inhibiting calcineurin to block T-cell activation and IL-2 production',
            'C) Stimulating regulatory T-cells to promote tolerance',
            'D) Coating the transplanted organ with a protective barrier',
          ],
          correct: 1,
          rationale: 'B) CORRECT — Tacrolimus is a calcineurin inhibitor (same mechanism as cyclosporine). It binds to FK-binding protein (FKBP-12) to form a complex that inhibits calcineurin, preventing dephosphorylation of NFAT and blocking IL-2 transcription. Without IL-2, T-cells cannot proliferate and mount a rejection response. A) Tacrolimus acts on T-cells, not antibodies directly. C) It suppresses T-cells rather than stimulating regulatory cells. D) This is not how immunosuppression works.',
        },
      ],
    },
  },


};
