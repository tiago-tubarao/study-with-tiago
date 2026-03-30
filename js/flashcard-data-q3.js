// ══════════════════════════════════════════════
// Flashcard Data — 28 Visual Cards for NURS 210 Quiz 3
// CNS / Neuro / Opioids — Chapters 46-53
// ADHD-optimized: emoji front connects to visual back
// Back = Gemini image + teaching notes that explain what you SEE
// Based on Dr. Barkley's dual coding + externalized WM research
// ══════════════════════════════════════════════

window.FLASHCARD_DATA_Q3 = {
  sections: [
    { id: 'autonomic', label: 'Autonomic NS', icon: '\u26A1', color: '#2A9D8F' },
    { id: 'cholinergic', label: 'Cholinergics', icon: '\uD83D\uDCAA', color: '#5F3DC4' },
    { id: 'parkinsons', label: "Parkinson's", icon: '\uD83E\uDDE0', color: '#E67700' },
    { id: 'opioids', label: 'Opioids', icon: '\uD83D\uDC8A', color: '#C92A2A' },
    { id: 'anesthetics', label: 'Anesthetics', icon: '\uD83D\uDE34', color: '#1971C2' },
    { id: 'migraines', label: 'Migraines', icon: '\uD83E\uDD15', color: '#862E9C' },
    { id: 'seizures', label: 'Seizures', icon: '\u26A1', color: '#D9480F' },
    { id: 'bonus', label: 'Quick Reference', icon: '\uD83D\uDEA8', color: '#495057' },
  ],
  cards: [
    // ═══ AUTONOMIC NS (2 cards) ═══
    {
      section: 'autonomic',
      front: { icon: '\uD83C\uDFC3\u200D\u2642\uFE0F\uD83E\uDDD8', title: 'SNS vs PNS', subtitle: 'Two sides of the same nervous system' },
      image: 'quiz3-images/01_SNS_vs_PNS.png',
      notes: [
        'LEFT side (red) = Sympathetic = Fight or Flight. See the kid running with wide eyes? That\'s your SNS firing. HR goes UP, BP goes UP, pupils dilate, bronchi open, glucose rises. The body is prepping to survive.',
        'RIGHT side (blue) = Parasympathetic = Rest & Digest. Same kid, now relaxed and eating. HR slows DOWN, pupils constrict, digestion kicks in, bladder contracts. This is your vagus nerve running the show (75% of PNS).',
        'EXAM TIP: If a drug is "sympathomimetic" it MIMICS the left side (fight). If it\'s "parasympathomimetic" it mimics the right side (rest). Adrenergic = SNS. Cholinergic = PNS.'
      ]
    },
    {
      section: 'autonomic',
      front: { icon: '\uD83D\uDD10', title: 'Know Your Receptors!', subtitle: '5 locks, 5 keys — where drugs work' },
      image: 'quiz3-images/02_receptors.png',
      notes: [
        'See the 5 castle locks? Each one is a receptor type that drugs can activate (agonist) or block (antagonist). This is HOW drugs work in the autonomic NS.',
        'Alpha (red lock) = blood vessels. Stimulate alpha = vasoconstriction + pupil dilation. Block alpha = vasodilation (BP drops).',
        'Beta-1 (heart lock) = "B1 = 1 heart." Stimulate = HR up, force up. Beta-blockers block this.',
        'Beta-2 (lung lock) = "B2 = 2 lungs." Stimulate = bronchodilation. Albuterol works here.',
        'Muscarinic (green) = PNS effects on heart, smooth muscle, glands. Anticholinergics BLOCK this.',
        'Nicotinic (muscle) = skeletal muscle + ganglia. Succinylcholine (paralytic) works here.'
      ]
    },

    // ═══ CHOLINERGICS (3 cards) ═══
    {
      section: 'cholinergic',
      front: { icon: '\uD83D\uDE29\uD83D\uDCAA', title: 'Myasthenia Gravis', subtitle: 'When your immune system attacks your muscles' },
      image: 'quiz3-images/03_myasthenia_gravis.png',
      notes: [
        'See the kid with droopy eyes struggling to hold a cup? That\'s MG. Autoimmune antibodies are destroying ACh receptors at the neuromuscular junction (zoom circle shows this).',
        'KEY PATTERN: weakness gets WORSE with activity, BETTER with rest. This is how you differentiate MG from other muscle diseases on the exam.',
        'The pill at the bottom = Pyridostigmine (Mestinon). It inhibits the enzyme that breaks down ACh, so MORE ACh stays at the junction. Give it ON TIME — timing is critical. 30 min before meals if they have trouble swallowing.',
        'If they overdose on Mestinon = cholinergic crisis. Antidote = ATROPINE (blocks all that excess ACh).'
      ]
    },
    {
      section: 'cholinergic',
      front: { icon: '\u2696\uFE0F', title: 'Crisis Comparison', subtitle: 'Too little med vs too much med — both can kill' },
      image: 'quiz3-images/04_cholinergic_vs_myasthenic_crisis.png',
      notes: [
        'LEFT character gasping = Myasthenic Crisis. NOT ENOUGH medication. The MG is winning. Muscles are too weak to breathe.',
        'RIGHT character drooling/cramping = Cholinergic Crisis. TOO MUCH medication. Flooded with ACh. Everything is overstimulated — secretions, cramping, sweating.',
        'BOTH cause respiratory distress! That\'s the red warning at the bottom of both sides. The danger is the same — it\'s the CAUSE that\'s different.',
        'CENTER arrow = Edrophonium (Tensilon) Test. Give a short-acting AChE inhibitor. If they get BETTER = myasthenic crisis (needed more med). If they get WORSE = cholinergic crisis (had too much). This is a classic exam question.'
      ]
    },
    {
      section: 'cholinergic',
      front: { icon: '\uD83E\uDDE0\uD83D\uDC8A', title: "Alzheimer's Drugs", subtitle: 'Slow the decline — never cure' },
      image: 'quiz3-images/05_alzheimers_drugs.png',
      notes: [
        'See the cute brain in the center? It\'s losing neurons. Two drugs try to help, shown on each side.',
        'LEFT (pink pill) = Donepezil (Aricept) for MILD-MODERATE. It\'s an AChE inhibitor — same concept as MG drugs but for the BRAIN. More ACh = better cognition temporarily. Give at BEDTIME (reduces GI side effects). Watch for BRADYCARDIA.',
        'RIGHT (blue pill) = Memantine (Namenda) for MODERATE-SEVERE. Different mechanism — blocks NMDA glutamate receptors to reduce excitotoxicity (brain cells dying from overstimulation).',
        'CENTER note says it all: "Both SLOW decline — neither cures." This is what the exam will test. Don\'t promise families a cure.'
      ]
    },

    // ═══ PARKINSON'S (3 cards) ═══
    {
      section: 'parkinsons',
      front: { icon: '\u2696\uFE0F\uD83E\uDDE0', title: "Parkinson's Disease", subtitle: 'The balance is broken' },
      image: 'quiz3-images/06_parkinsons_balance.png',
      notes: [
        'See the SEESAW? That\'s the whole disease. Dopamine is DOWN (small, on the high side) and ACh is UP (big blob, weighing it down). The imbalance causes all the symptoms.',
        'The character on the right shows the 4 cardinal signs: pill-rolling tremor (hands), rigidity (stiff posture), bradykinesia (slow movement), postural instability (leaning). Know all 4.',
        'Treatment strategy is simple: either INCREASE dopamine (Levodopa, bromocriptine, amantadine) OR DECREASE ACh (benztropine, trihexyphenidyl). Both restore the balance.',
        'EXAM TIP: The tremor in Parkinson\'s is a RESTING tremor — it stops when they move intentionally. If tremor gets worse with movement, it\'s something else.'
      ]
    },
    {
      section: 'parkinsons',
      front: { icon: '\uD83E\uDDE0\uD83D\uDEA7', title: 'Levodopa-Carbidopa (Sinemet)', subtitle: 'The blood-brain barrier trick' },
      image: 'quiz3-images/07_levodopa_carbidopa.png',
      notes: [
        'See the wall in the center? That\'s the blood-brain barrier (BBB). Dopamine itself CAN\'T cross it. So we give Levodopa — a precursor that CAN cross, then converts to dopamine inside the brain.',
        'The little shield character (Carbidopa) stays OUTSIDE the wall. Its job: block peripheral conversion so the Levodopa doesn\'t turn into dopamine before it reaches the brain. Less side effects, more drug gets through.',
        'See the WARNING icons around the edges? These are your exam traps: NO MAOIs (hypertensive crisis). NO high-protein meals (amino acids compete for absorption). NO high-dose vitamin B6 (reduces effectiveness). NEVER stop abruptly (can cause NMS-like syndrome).',
        'Dark urine = harmless. Patients freak out — reassure them.'
      ]
    },
    {
      section: 'parkinsons',
      front: { icon: '\uD83D\uDE48\uD83D\uDEBD', title: 'Anticholinergic Effects', subtitle: 'The classic mnemonic you\'ll never forget' },
      image: 'quiz3-images/08_anticholinergic_effects.png',
      notes: [
        'This image IS the mnemonic: "Can\'t see, can\'t pee, can\'t spit, can\'t poop." Look at each body part on the character — eyes blurred, legs crossed, desert mouth, belly bloated.',
        'Plus: tachycardia (fast heart) and confusion/dizziness (stars around head). These happen because blocking ACh in the PNS removes the "brakes" — heart speeds up, brain gets confused.',
        'Drugs that cause this: Benztropine (Cogentin) for Parkinson\'s, Oxybutynin for overactive bladder, Diphenhydramine (Benadryl), basically any drug ending in "-pine" or first-gen antihistamine.',
        'Red box at bottom = CONTRAINDICATIONS: narrow-angle glaucoma (can\'t see gets worse), BPH (can\'t pee gets worse), GI obstruction (can\'t poop gets worse). The drug makes existing problems WORSE.'
      ]
    },

    // ═══ OPIOIDS (6 cards) ═══
    {
      section: 'opioids',
      front: { icon: '\uD83E\uDEDC', title: 'Opioid Potency Ladder', subtitle: 'From weakest to strongest — know the steps' },
      image: 'quiz3-images/09_opioid_potency_ladder.png',
      notes: [
        'The staircase shows potency from bottom to top. Each step = a different opioid. The characters get BIGGER as you go up = more powerful.',
        'Bottom steps: Codeine (1/6x morphine, weakest, also cough suppressant), Tramadol (weak + also SNRI = seizure risk + serotonin syndrome risk).',
        'DANGER step: Meperidine with the skull icon. 1/10x potency but has a TOXIC metabolite (normeperidine) that causes SEIZURES. Avoid in elderly. Short-term only.',
        'Middle: Hydrocodone (often with acetaminophen — monitor total daily APAP, max 4000mg). Morphine at the standard (1x, prototype, starred).',
        'Top steps: Oxycodone (~1x but HIGH abuse), and Fentanyl at the very top with the patch icon = 50-100x stronger than morphine.',
        'Bottom right box = universal rule: ALL opioids — hold if RR < 12, naloxone at bedside.'
      ]
    },
    {
      section: 'opioids',
      front: { icon: '\uD83D\uDC9C\uD83E\uDE7A', title: 'Morphine Nursing Card', subtitle: '6 colored bubbles = 6 things to remember' },
      image: 'quiz3-images/10_morphine_nursing.png',
      notes: [
        'The cute nurse pill in the center = Morphine, Mu Agonist, Schedule II. The 6 colored bubbles around it are your nursing priorities:',
        'RED bubble = Hold if RR < 12. This is your #1 safety check. Respiratory depression is the MOST SERIOUS side effect. Always check RR before giving.',
        'BLUE bubble = Naloxone (Narcan) at bedside. The antidote must be available. If RR drops, you need it NOW.',
        'GREEN bubble = Assess pain BEFORE giving + 30 min AFTER. This proves the drug worked. Document both.',
        'ORANGE bubble = Start bowel regimen immediately. Constipation ALWAYS happens with opioids — it\'s the one side effect patients DON\'T develop tolerance to.',
        'PURPLE bubble = Don\'t crush extended-release (MS Contin). Crushing = dose dumping = potentially fatal overdose.',
        'YELLOW bubble = Pinpoint pupils (miosis) = sign of opioid use. This is an assessment finding, not something to teach patients.'
      ]
    },
    {
      section: 'opioids',
      front: { icon: '\uD83E\uDE79\uD83D\uDD25', title: 'Fentanyl Patch Rules', subtitle: '7 rules that save lives' },
      image: 'quiz3-images/11_fentanyl_patch_rules.png',
      notes: [
        'Center character = cute patch with "50-100x stronger than morphine!" banner. Each numbered icon around it is a rule:',
        '(1) Scissors with X = NEVER cut or fold. Cutting exposes the drug reservoir = overdose and death.',
        '(2) Sun/flame = NO heat sources. Heat increases absorption rate. No heating pads, hot baths, saunas, even fever.',
        '(3) Thermometer = NO fever. Same reason — increased skin temp = faster absorption = overdose.',
        '(4) Clock with 72 = Change every 72 hours. Not sooner, not later.',
        '(5) Body outline = Clean, dry, HAIRLESS skin. Rotate sites each change.',
        '(6) 12-24 clock = Takes 12-24 hours to reach steady state. Don\'t expect immediate pain relief from a new patch.',
        '(7) Star = Opioid-TOLERANT patients ONLY. Never start someone on fentanyl patches who hasn\'t been on opioids before.'
      ]
    },
    {
      section: 'opioids',
      front: { icon: '\uD83E\uDDB8', title: 'Naloxone (Narcan)', subtitle: 'The superhero that saves overdose patients' },
      image: 'quiz3-images/12_naloxone.png',
      notes: [
        'See the superhero with the "NARCAN" cape rescuing the sleepy patient? That\'s the visual. Naloxone literally displaces opioids from their receptors.',
        'It\'s a COMPETITIVE antagonist at mu/kappa/delta receptors. It kicks the opioid off the receptor and takes its place. Pain returns, breathing returns.',
        'CRITICAL concept (purple bubble): Naloxone has a SHORTER half-life (60-90 min) than most opioids. The opioid will outlast the Narcan. You MAY NEED TO REDOSE. Keep monitoring — respiratory depression can RETURN.',
        'Green bubble: Can cause acute withdrawal — sweating, vomiting, tachycardia. Unpleasant but NOT life-threatening. Don\'t let withdrawal scare you away from giving it.',
        'IV dose: 0.4-2 mg, repeat every 2-3 min. Also available IM and intranasal.'
      ]
    },
    {
      section: 'opioids',
      front: { icon: '\u2B1B\u2620\uFE0F', title: 'BLACK BOX WARNING', subtitle: 'The deadliest drug combination' },
      image: 'quiz3-images/13_opioid_benzo_blackbox.png',
      notes: [
        'The black box with red background = FDA\'s most serious warning. This image is designed to be SCARY because the combination IS deadly.',
        'Two sad pills holding hands with a skull between them: an opioid + a benzodiazepine. Both cause CNS depression. Together = profound respiratory depression, coma, DEATH.',
        'Why it matters: patients getting morphine for pain AND lorazepam for anxiety are at risk. Patients on oxycodone for chronic pain AND alprazolam for panic attacks are at risk.',
        'Bottom line for the exam: "If unavoidable: LOWEST doses, close monitoring, naloxone at bedside." But the best answer is AVOID the combination entirely.'
      ]
    },
    {
      section: 'opioids',
      front: { icon: '\u2620\uFE0F\uD83D\uDC8A', title: 'Meperidine (Demerol)', subtitle: 'The one opioid that\'s more dangerous than helpful' },
      image: 'quiz3-images/14_meperidine_danger.png',
      notes: [
        'The angry red pill character surrounded by red bubbles = this drug is TROUBLE. Know it as the "dangerous opioid" on the exam.',
        'The skull/crossbones = Normeperidine, a TOXIC metabolite. Unlike other opioids where the metabolite is harmless, meperidine\'s metabolite accumulates and causes SEIZURES, tremors, and psychosis.',
        '"AVOID in elderly" appears twice in the image — that\'s intentional. Elderly have reduced renal clearance = normeperidine builds up faster.',
        'The crossed-out calendar = SHORT-TERM USE ONLY. Never prescribe this for chronic pain. The toxic metabolite needs time to accumulate — short-term use limits exposure.',
        'Serotonin syndrome with SSRIs/MAOIs = another unique danger. Most opioids don\'t have this interaction. Meperidine does.'
      ]
    },

    // ═══ ANESTHETICS (2 cards) ═══
    {
      section: 'anesthetics',
      front: { icon: '\uD83D\uDC89\uD83D\uDE34', title: 'Local vs General Anesthesia', subtitle: 'Numb a spot vs shut down the whole system' },
      image: 'quiz3-images/15_local_vs_general.png',
      notes: [
        'LEFT side = Local. Character is AWAKE but has numb spots. Lidocaine is the prototype. It blocks Na+ channels so nerves can\'t fire. If too much enters the bloodstream = LAST (Local Anesthetic Systemic Toxicity): seizures then CV collapse.',
        'Amides are metabolized by the LIVER. Esters by plasma cholinesterases. Esters have higher allergy risk. Memory trick: amIdes have an I, lIver has an I.',
        'RIGHT side = General. Character is completely unconscious. 4 goals shown as icons: (1) Amnesia (brain X), (2) Analgesia (no pain), (3) Hypnosis (sleep Zzz), (4) Muscle relaxation.',
        'KEY EXAM TRAP: Propofol (IV) provides amnesia + hypnosis but NO ANALGESIA. You still need an opioid for pain! This is a commonly tested fact.',
        'Bottom banner: Malignant Hyperthermia → DANTROLENE. This connects to the next card.'
      ]
    },
    {
      section: 'anesthetics',
      front: { icon: '\uD83C\uDF21\uFE0F\uD83D\uDD34', title: 'Malignant Hyperthermia', subtitle: 'Temperature skyrocketing = DANTROLENE NOW' },
      image: 'quiz3-images/16_malignant_hyperthermia.png',
      notes: [
        'The red emergency banner + character with a rising thermometer = this is a LIFE-THREATENING emergency in the OR. You need to recognize it and act immediately.',
        'Trigger: inhalation anesthetics (isoflurane, sevoflurane, desflurane) + succinylcholine. These are the ONLY drugs that cause it. Genetic predisposition.',
        'Signs in the red box: rapidly rising temperature (can hit 104-108\u00B0F), muscle RIGIDITY (skeletal muscles lock up), tachycardia, hyperkalemia (potassium floods out of rigid muscles).',
        'Green treatment box: DANTROLENE IV immediately + cooling measures (ice packs, cold IV fluids, cooling blanket). Dantrolene is the ONLY peripheral-acting muscle relaxant — it works directly on skeletal muscle to block Ca2+ release.',
        'EXAM CONNECTION: Dantrolene also treats NMS (neuroleptic malignant syndrome from antipsychotics). Same mechanism, similar presentation.'
      ]
    },

    // ═══ MIGRAINES (1 card) ═══
    {
      section: 'migraines',
      front: { icon: '\u26A1\uD83E\uDD2F', title: 'Sumatriptan (Imitrex)', subtitle: 'The triptan that constricts cranial vessels' },
      image: 'quiz3-images/17_sumatriptan.png',
      notes: [
        'See the character with lightning bolts and pounding headache? That\'s the migraine. The superhero pill (Sumatriptan) swoops in and CONSTRICTS the dilated cranial blood vessels (shown in the brain diagram).',
        'MOA: 5-HT1D serotonin receptor agonist. It binds serotonin receptors on cranial blood vessels causing vasoconstriction. Less blood pounding = less pain.',
        'Key fact: Take at ONSET of migraine. It\'s an ABORTIVE therapy (stops the attack), not preventive.',
        'WARNING box (bottom right): NO with MAOIs/SSRIs because serotonin syndrome risk. NO in coronary artery disease, stroke, or uncontrolled HTN because vasoconstriction + already narrowed vessels = dangerous.',
        'Side effects: chest pressure/tightness (vasoconstriction affecting chest vessels), tingling, flushing. If patient reports chest pain → assess for cardiac event.'
      ]
    },

    // ═══ SEIZURES (8 cards) ═══
    {
      section: 'seizures',
      front: { icon: '\uD83E\uDDE0\u26A1', title: 'Seizure Types', subtitle: '6 brain characters showing 6 seizure types' },
      image: 'quiz3-images/18_seizure_types.png',
      notes: [
        'Each brain character demonstrates a different seizure type. The exam tests whether you know the KEY DIFFERENCE between them:',
        '(1) Simple Partial: brain is ALERT, one area lit up. Consciousness INTACT. Patient remembers everything. Only one part of the brain is affected.',
        '(2) Complex Partial: brain has question marks = confusion. Consciousness IMPAIRED. Patient does repetitive movements (automatisms) like lip-smacking or picking at clothes.',
        '(3) Tonic-Clonic: shaking brain with full progression arrow. LOC + aura (warning) → tonic phase (stiffening) → clonic phase (rhythmic jerking). The "classic" seizure.',
        '(4) Absence: staring brain with clock = BRIEF (seconds only), just staring blankly. Common in children. No convulsions. Teacher notices "daydreaming."',
        '(5) Myoclonic: jerking brain = brief muscle jerks. Quick, shock-like movements.',
        '(6) Akinetic: falling brain = sudden loss of muscle tone. Drop attacks. Patient just collapses.'
      ]
    },
    {
      section: 'seizures',
      front: { icon: '\uD83D\uDEA8\u23F1\uFE0F', title: 'Status Epilepticus', subtitle: 'The seizure that doesn\'t stop = EMERGENCY' },
      image: 'quiz3-images/19_status_epilepticus.png',
      notes: [
        'Center: brain character seizing continuously with ">5 MINUTES" alarm clock. If a seizure lasts more than 5 minutes OR they seize repeatedly without waking up between = status epilepticus. Life-threatening.',
        'CAUSES box (left): abruptly stopping AEDs (#1 cause!), brain trauma, infections, alcohol withdrawal. The BIGGEST cause = patients who stop taking their seizure meds.',
        'Treatment STEPS with arrows (right): Step 1 = IV Lorazepam or Diazepam FIRST (fast-acting benzos stop the seizure). Step 2 = THEN Phenytoin or Fosphenytoin IV (longer-acting, prevents recurrence).',
        'Red banner at bottom: "NEVER STOP AEDs ABRUPTLY." This is both a cause of status epilepticus AND a common exam distractor. If a question asks what caused a patient\'s status epilepticus, look for "stopped taking medication."'
      ]
    },
    {
      section: 'seizures',
      front: { icon: '\uD83D\uDE2C\uD83E\uDDB7', title: 'Phenytoin (Dilantin)', subtitle: 'The AED with the most side effects to memorize' },
      image: 'quiz3-images/20_phenytoin.png',
      notes: [
        'The pill character in the center has swollen gums (gingival hyperplasia — happens in 50%!) and wobbly eyes (nystagmus). These are the visual cues to remember.',
        'Target on the left = therapeutic level 10-20 mcg/mL. Below 10 = not working. Above 20 = toxic. First sign of toxicity = NYSTAGMUS (wobbly eyes), then ataxia, then diplopia.',
        'Zero-order kinetics bubble: unlike most drugs, phenytoin doesn\'t clear proportionally. A SMALL dose increase can cause a HUGE jump in blood levels → toxicity. This is heavily tested.',
        'CYP450 INDUCER: it speeds up metabolism of other drugs, making them LESS effective. Oral contraceptives fail (pregnancy risk!), warfarin levels drop (clot risk!).',
        'Rash warning: any rash could be Stevens-Johnson Syndrome → STOP immediately. Baby bottle icon = teratogenic (fetal hydantoin syndrome). Never in pregnancy.',
        'Hair growth (hirsutism) = another unique side effect. Reversible.'
      ]
    },
    {
      section: 'seizures',
      front: { icon: '\uD83D\uDCCA\uD83D\uDC8A', title: 'AED Comparison Chart', subtitle: '5 drugs, 5 levels, 5 unique features' },
      image: 'quiz3-images/21_AED_comparison.png',
      notes: [
        'This image is your cheat sheet for the AED comparison question. Each colored pill has its level number and key distinguishing feature:',
        'Phenytoin (10-20): gum teeth icon = gingival hyperplasia. CYP inducer. See the dentures? That\'s your visual cue.',
        'Carbamazepine (4-12): water droplet = HYPONATREMIA from SIADH. This is the MOST specific side effect to this drug. If the exam says "low sodium + seizure med" = carbamazepine.',
        'Valproic Acid (50-100): liver icon = hepatotoxicity + scale = weight gain + "TERATOGENIC" in red. The most dangerous side effect profile.',
        'Ethosuximide (40-100): staring eyes = absence seizures ONLY. If the exam says "drug of choice for absence" = ethosuximide.',
        'Phenobarbital (15-40): sleepy face = oldest AED, very sedating, CYP inducer.',
        'Bottom line in green: Levetiracetam (Keppra) = NO CYP interactions = SAFEST for drug interactions. If the exam asks "which AED has fewest interactions" = Keppra.'
      ]
    },
    {
      section: 'seizures',
      front: { icon: '\uD83C\uDF4E\u26A0\uFE0F', title: 'Valproic Acid (Depakote)', subtitle: 'Broad spectrum but HIGHLY dangerous in pregnancy' },
      image: 'quiz3-images/22_valproic_acid.png',
      notes: [
        'The pill character is surrounded by warning icons — this drug has MORE serious side effects than almost any other AED:',
        'Liver icon with exclamation = HEPATOTOXICITY, especially in first 6 months. Monitor LFTs monthly for 6 months. This is the #1 concern.',
        'Pancreas icon = pancreatitis (rare but serious). If patient gets severe abdominal pain, check amylase/lipase.',
        'Hair falling out = alopecia (reversible when stopped). Weight scale going up = weight gain. These are quality-of-life issues patients ask about.',
        'Pregnant woman with X = HIGHLY TERATOGENIC. Causes neural tube defects. Women of childbearing age need birth control counseling + folic acid supplementation.',
        'Key facts on the right: BROAD spectrum means it treats almost everything (absence, tonic-clonic, myoclonic, partial, bipolar, migraines). Level 50-100. NO aspirin (increases valproate levels). Can sprinkle capsule contents on applesauce if patient can\'t swallow.'
      ]
    },
    {
      section: 'seizures',
      front: { icon: '\uD83D\uDC0C\uD83D\uDD34', title: 'Lamotrigine (Lamictal)', subtitle: 'ANY rash = STOP IMMEDIATELY' },
      image: 'quiz3-images/23_lamotrigine_rash.png',
      notes: [
        'The pill character examining skin with a magnifying glass = the KEY concept: watch for rash. The giant red warning says it all: "RASH = STOP IMMEDIATELY — may progress to Stevens-Johnson Syndrome!"',
        'The turtle and snail icons = SLOW titration required. You start LOW and increase SLOWLY. Rushing the dose increase dramatically raises rash risk.',
        'Critical interaction: Valproate DOUBLES lamotrigine levels. If a patient is on both, titrate lamotrigine even MORE slowly.',
        'Rash risk is highest in the first 8 weeks of treatment. After that, risk decreases but never goes to zero.',
        'Despite the rash risk, lamotrigine is valuable because it\'s BROAD SPECTRUM (partial, generalized, absence, bipolar) and doesn\'t cause weight gain or cognitive dulling like other AEDs.'
      ]
    },
    {
      section: 'seizures',
      front: { icon: '\uD83D\uDCA4\uD83D\uDCCF', title: 'Benzodiazepines for Seizures', subtitle: 'Shortest to longest — and which one is preferred' },
      image: 'quiz3-images/24_benzo_comparison.png',
      notes: [
        'The timeline from left to right shows duration. Each pill character gets BIGGER as duration increases:',
        '(1) Midazolam (Versed) = SHORTEST acting. Used pre-op for sedation/amnesia. HIGH respiratory depression risk — always have resuscitation equipment ready.',
        '(2) Diazepam (Valium) = status epilepticus, muscle spasms, alcohol withdrawal. The "versatile" benzo.',
        '(3) Lorazepam (Ativan) = has a STAR because it\'s PREFERRED for status epilepticus. Why? Because it uses conjugation metabolism (NOT CYP450) = safer in liver disease. If the exam asks "best benzo for status epilepticus" = Lorazepam.',
        '(4) Clonazepam (Klonopin) = LONGEST acting (18-50 hours!). Used for seizures + panic disorder. Long half-life means fewer doses per day but harder to stop.',
        'Bottom banner: Antidote = FLUMAZENIL (but giving it can cause seizures — ironic). NEVER stop benzos abruptly — TAPER to prevent withdrawal seizures.'
      ]
    },
    {
      section: 'seizures',
      front: { icon: '\uD83D\uDCAA\uD83E\uDDB8', title: 'Muscle Relaxants', subtitle: '4 drugs, 4 different mechanisms' },
      image: 'quiz3-images/25_muscle_relaxants.png',
      notes: [
        'Four characters, each with a visual cue for their unique mechanism:',
        'Baclofen (brain icon) = GABA-B agonist, works CENTRALLY. Used for MS spasticity and spinal cord injury. NEVER stop abruptly — can cause seizures. Severe cases get intrathecal pump.',
        'Dantrolene (superhero cape!) = the only one that works PERIPHERALLY — directly on muscle. Blocks Ca2+ release from sarcoplasmic reticulum. This is why it\'s the ANTIDOTE for malignant hyperthermia AND neuroleptic malignant syndrome. Monitor LFTs (hepatotoxicity).',
        'Cyclobenzaprine (clock icon) = SHORT-TERM use only for acute muscle spasms. Has anticholinergic effects (dry mouth, drowsiness). Avoid with MAOIs.',
        'Tizanidine (BP cuff) = alpha-2 agonist (centrally acting). Watch for HYPOTENSION and bradycardia. CYP1A2 interactions — no ciprofloxacin or fluvoxamine.'
      ]
    },

    // ═══ BONUS (3 cards) ═══
    {
      section: 'bonus',
      front: { icon: '\uD83E\uDDB8\u200D\u2642\uFE0F\uD83D\uDC89', title: 'ANTIDOTE CHEAT SHEET', subtitle: '5 emergencies — match each one to its antidote' },
      image: 'quiz3-images/26_antidotes.png',
      notes: [
        'Five superhero characters, each rescuing a different emergency. The exam WILL ask you to match at least one of these:',
        'Opioid overdose → NALOXONE (Narcan). Remember the superhero from card 12. May need to REDOSE because naloxone wears off before the opioid does.',
        'Benzo overdose → FLUMAZENIL. WARNING: giving flumazenil can cause SEIZURES (especially in benzo-dependent patients or those on seizure-lowering benzos). Use cautiously.',
        'Cholinergic crisis (organophosphate poisoning) → ATROPINE (blocks muscarinic effects) + PRALIDOXIME (reverses nicotinic effects at NMJ). DECONTAMINATE the patient FIRST before treating.',
        'Malignant hyperthermia → DANTROLENE IV + cooling measures. The superhero cape drug from the muscle relaxants card.',
        'Myasthenic crisis → ventilatory support + increase AChE inhibitor dose. This one ISN\'T a single antidote — it\'s supportive care + medication adjustment.'
      ]
    },
    {
      section: 'bonus',
      front: { icon: '\u26A1\uD83E\uDD12', title: 'Serotonin Syndrome', subtitle: '3 drug combos that can kill' },
      image: 'quiz3-images/27_serotonin_syndrome.png',
      notes: [
        'Three dangerous pairs with lightning bolts between them. Each one floods the brain with serotonin:',
        'Pair 1: Tramadol + SSRIs/SNRIs/MAOIs. Tramadol is a weak opioid that ALSO blocks serotonin reuptake (SNRI effect). Combined with an antidepressant = too much serotonin.',
        'Pair 2: Meperidine + MAOIs/SSRIs. Meperidine also has serotonergic properties. This is another reason meperidine is "the dangerous opioid."',
        'Pair 3: Sumatriptan + MAOIs/SSRIs. Sumatriptan is a serotonin agonist (5-HT1D). Adding more serotonin = syndrome.',
        'The character on the right shows the symptoms: agitation, hyperthermia (high fever), muscle rigidity, clonus (rhythmic twitching), diaphoresis (sweating). TOO MUCH serotonin overstimulates everything.',
        'Bottom line: "These combinations can be FATAL." If you see any of these pairs on the exam, it\'s the wrong answer choice — never combine them.'
      ]
    },
    {
      section: 'bonus',
      front: { icon: '\uD83D\uDC4A\uD83D\uDC8A', title: 'CYP450 Inducers', subtitle: 'The bullies that wreck other drugs' },
      image: 'quiz3-images/28_cyp450_inducers.png',
      notes: [
        'See the three bully pill characters pushing down the other drugs? That\'s exactly what CYP450 INDUCERS do. They speed up the liver\'s metabolism of other drugs, making them LESS effective.',
        'The three bullies: Phenytoin, Carbamazepine, Phenobarbital. All three are AEDs (anti-epileptic drugs). All three are CYP450 inducers.',
        'Their victims (being pushed down): oral contraceptives (pregnancy!), warfarin (clots!), corticosteroids (disease flare!). If your patient starts one of these AEDs, their OTHER medications may stop working.',
        'The angel with the halo on the right = Levetiracetam (Keppra). NO CYP450 interactions. The safest choice when a patient is on multiple medications.',
        'EXAM APPLICATION: If a question says "patient on warfarin starts phenytoin, what happens?" → warfarin levels DROP → increased clot risk → monitor INR closely.'
      ]
    }
  ]
};
