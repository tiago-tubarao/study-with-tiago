// Adult Health Final GI flashcards.
// Public-safe companion deck for the two GI final-review videos.
window.FLASHCARD_DATA_FINAL_GI = {
  sections: [
    { id: 'upper', label: 'Upper GI', icon: '🍔', color: '#2A9D8F' },
    { id: 'lower', label: 'Lower GI', icon: '🫘', color: '#5F3DC4' },
    { id: 'liver', label: 'Liver', icon: '🧪', color: '#E67700' },
    { id: 'pancreas_gallbladder', label: 'Pancreas + Gallbladder', icon: '🔥', color: '#C92A2A' }
  ],
  cards: [
    {
      section: 'upper',
      drugName: 'GERD Core Pattern',
      brandName: 'Weak LES + acid moving upward',
      drugClass: 'Upper GI',
      purpose: 'Recognize reflux by timing, position, and relief.',
      facts: [
        'Burning after meals + worse lying flat points toward reflux.',
        'Upright position, head-of-bed elevation, and avoiding late meals reduce acid exposure.',
        'Chronic reflux can lead to esophagitis, narrowing, Barrett changes, and aspiration risk.',
        'Lifestyle teaching is not extra; it is first-line care for uncomplicated reflux.'
      ],
      mnemonic: 'GERD = Gravity Either Rescues or Drops it.',
      icon: '⬆️'
    },
    {
      section: 'upper',
      drugName: 'GERD vs Cardiac Chest Pain',
      brandName: 'Safety differential',
      drugClass: 'Assess-first trap',
      purpose: 'Do not dismiss new chest pain as reflux.',
      facts: [
        'GERD pain is more likely burning, meal-related, positional, and relieved by antacids.',
        'Cardiac pain may feel like pressure, radiate, pair with shortness of breath, or not improve with antacids.',
        'New or concerning chest pain needs cardiac causes considered before routine reflux teaching.',
        'The safe move is assessment first, not guessing from one symptom.'
      ],
      mnemonic: 'Chest pain gets respect before reflux gets blame.',
      icon: '⚠️'
    },
    {
      section: 'upper',
      drugName: 'PUD Cause Lock',
      brandName: 'H. pylori vs NSAIDs',
      drugClass: 'Ulcer logic',
      purpose: 'Treat the cause, not just the acid.',
      facts: [
        'H. pylori damages the mucosal barrier and can drive duodenal ulcers.',
        'NSAIDs reduce prostaglandin protection so acid can injure stomach lining.',
        'Duodenal ulcer pain may improve with food, then return later.',
        'Gastric ulcer pain is more likely to worsen with meals.'
      ],
      mnemonic: 'H. pylori is the intruder; NSAIDs remove the raincoat.',
      icon: '🦠'
    },
    {
      section: 'upper',
      drugName: 'H. pylori Treatment Teaching',
      brandName: 'Finish the full regimen',
      drugClass: 'Medication teaching',
      purpose: 'Prevent recurrence and resistance.',
      facts: [
        'Symptoms can improve before bacteria are cleared.',
        'Stopping early can lead to recurrence and harder treatment later.',
        'Teach the patient to finish every prescribed antibiotic dose unless told otherwise.',
        'Alcohol restrictions matter with metronidazole-containing regimens.'
      ],
      mnemonic: 'Do not pull the top off the weed and leave the root.',
      icon: '💊'
    },
    {
      section: 'upper',
      drugName: 'PUD Complication Chain',
      brandName: 'Bleed, perforate, obstruct',
      drugClass: 'Emergency chain',
      purpose: 'Spot when ulcer pain becomes danger.',
      facts: [
        'Bleeding may show as black stools, vomiting blood, dizziness, or dropping blood pressure.',
        'Perforation can cause sudden severe abdominal pain, rigidity, and peritonitis.',
        'Chronic swelling or scarring near the pylorus can cause obstruction and vomiting.',
        'Worsening pain on therapy means reassess for cause and complications.'
      ],
      mnemonic: 'Ulcer danger has three doors: bleed, burst, block.',
      icon: '🚨'
    },
    {
      section: 'upper',
      drugName: 'Gastritis Quick Lock',
      brandName: 'Inflamed stomach lining',
      drugClass: 'Upper GI',
      purpose: 'Connect trigger removal to healing.',
      facts: [
        'NSAIDs, alcohol, smoking, stress injury, and infection can irritate the stomach lining.',
        'Nausea, epigastric discomfort, bloating, vomiting, or bleeding may appear.',
        'The high-value action is removing the trigger, then using ordered acid suppression or antibiotics.',
        'If the trigger continues, medication alone may not fix the problem.'
      ],
      mnemonic: 'Gastritis care starts by removing the irritant.',
      icon: '🔥'
    },
    {
      section: 'upper',
      drugName: 'Hiatal Hernia Red Flags',
      brandName: 'Sliding vs paraesophageal',
      drugClass: 'Upper GI emergency clue',
      purpose: 'Separate reflux-like care from strangulation concern.',
      facts: [
        'Sliding hernia often uses GERD-style teaching: small meals, avoid lying flat, elevate head of bed.',
        'Severe pain, dysphagia, retching, or inability to vomit can suggest a dangerous complication.',
        'Paraesophageal hernia has higher strangulation risk than simple sliding hernia.',
        'Do not treat severe obstructive symptoms like routine reflux.'
      ],
      mnemonic: 'Sliding teaches like GERD; strangling escalates.',
      icon: '🕳️'
    },
    {
      section: 'upper',
      drugName: 'Dumping Syndrome Diet',
      brandName: 'After gastric surgery',
      drugClass: 'Teaching pattern',
      purpose: 'Slow rapid gastric emptying.',
      facts: [
        'Early dumping can bring cramping, diarrhea, weakness, palpitations, or sweating after meals.',
        'Teach small frequent meals and avoid drinking fluids with meals if that is the plan.',
        'Lying down after meals may reduce symptoms for some patients.',
        'Diet changes come before jumping to medication for stable symptoms.'
      ],
      mnemonic: 'Dumping care slows the slide.',
      icon: '⏱️'
    },
    {
      section: 'lower',
      drugName: 'IBS vs IBD',
      brandName: 'Functional vs inflammatory',
      drugClass: 'Lower GI comparison',
      purpose: 'Use objective inflammation clues.',
      facts: [
        'IBS is real symptoms without visible inflammatory damage.',
        'IBD has structural inflammation and includes ulcerative colitis and Crohn disease.',
        'Normal labs and normal scope lean IBS; bleeding, fever, weight loss, elevated markers, or ulcers lean IBD.',
        'IBS is symptom control; IBD needs inflammation and complication control.'
      ],
      mnemonic: 'IBS irritates; IBD inflames.',
      icon: '🔍'
    },
    {
      section: 'lower',
      drugName: 'Ulcerative Colitis vs Crohn Disease',
      brandName: 'Continuous colon vs skip lesions',
      drugClass: 'IBD memory lock',
      purpose: 'Separate the two IBD siblings quickly.',
      facts: [
        'Ulcerative colitis is colon and rectum, continuous, mucosal, and can be surgically cured by colectomy.',
        'Crohn disease can be mouth to anus, patchy, transmural, and can recur after surgery.',
        'UC clues: bloody diarrhea, rectal involvement, continuous inflammation.',
        'Crohn clues: skip lesions, terminal ileum, fistulas, strictures, abscess, malabsorption.'
      ],
      mnemonic: 'UC is one colon line; Crohn skips around.',
      icon: '🧩'
    },
    {
      section: 'lower',
      drugName: 'Toxic Megacolon',
      brandName: 'IBD emergency',
      drugClass: 'Do-not-slow-the-bowel trap',
      purpose: 'Recognize severe colitis with dilation risk.',
      facts: [
        'A severely inflamed colon can dilate, perforate, and become septic.',
        'Warning pattern: fever, tachycardia, abdominal distention, worsening pain, toxicity.',
        'Antidiarrheals and opioids can worsen dilation during severe active colitis.',
        'Nursing focus is recognition, monitoring, NPO as ordered, labs, and urgent escalation.'
      ],
      mnemonic: 'Megacolon = do not slow an already dangerous colon.',
      icon: '🚫'
    },
    {
      section: 'lower',
      drugName: 'IBD Medication Ladder',
      brandName: 'Inflammation control',
      drugClass: 'Lower GI medication map',
      purpose: 'Know why each layer exists.',
      facts: [
        'Aminosalicylates help reduce bowel-lining inflammation in some ulcerative colitis plans.',
        'Steroids calm flares but are not the long-term maintenance answer.',
        'Immunomodulators and biologics may be used when inflammation needs stronger control.',
        'Teach infection awareness when immune-targeting therapy is used.'
      ],
      mnemonic: 'IBD meds climb from local fire control to bigger fire control.',
      icon: '🪜'
    },
    {
      section: 'lower',
      drugName: 'Diverticulitis Care',
      brandName: 'LLQ pain + fever pattern',
      drugClass: 'Lower GI',
      purpose: 'Differentiate inflammation from uncomplicated pockets.',
      facts: [
        'Diverticulosis means pockets; diverticulitis means inflamed or infected pockets.',
        'Common pattern is left lower quadrant pain, fever, nausea, and bowel changes.',
        'Acute care may include bowel rest, fluids, antibiotics, pain control, and monitoring.',
        'Worsening pain, guarding, fever, or instability raises concern for perforation or sepsis.'
      ],
      mnemonic: 'Pockets are quiet until they get hot.',
      icon: '🌡️'
    },
    {
      section: 'lower',
      drugName: 'Small vs Large Bowel Obstruction',
      brandName: 'Vomiting vs distention clue',
      drugClass: 'Obstruction comparison',
      purpose: 'Use pattern recognition without overguessing.',
      facts: [
        'Small bowel obstruction often brings earlier vomiting and high-pitched bowel sounds at first.',
        'Large bowel obstruction often brings bigger distention and later vomiting.',
        'Both can progress to ischemia, perforation, peritonitis, and sepsis.',
        'Assess pain, distention, vomiting, bowel sounds, last stool or flatus, and stability.'
      ],
      mnemonic: 'Small vomits earlier; large swells bigger.',
      icon: '🚧'
    },
    {
      section: 'lower',
      drugName: 'Obstruction Emergency Chain',
      brandName: 'Pressure → ischemia → perforation',
      drugClass: 'Domino chain',
      purpose: 'Know when obstruction stops being routine.',
      facts: [
        'Blocked bowel builds pressure behind the obstruction.',
        'Pressure can reduce blood flow, causing ischemia and tissue death.',
        'Dead or pressured bowel can perforate, spilling contents into the abdomen.',
        'Peritonitis and sepsis are the danger endings.'
      ],
      mnemonic: 'Block, pressure, no blood, hole, sepsis.',
      icon: '⛓️'
    },
    {
      section: 'lower',
      drugName: 'Colorectal Cancer Screening + Clues',
      brandName: 'Right vs left colon patterns',
      drugClass: 'Lower GI',
      purpose: 'Connect screening and symptom pattern.',
      facts: [
        'Colonoscopy can screen, diagnose, biopsy, and remove polyps.',
        'Right-sided lesions may hide longer and show anemia or fatigue.',
        'Left-sided lesions may cause stool caliber change, obstruction signs, or visible bleeding.',
        'Unexplained weight loss, bleeding, anemia, or bowel-habit change needs follow-up.'
      ],
      mnemonic: 'Right hides as anemia; left announces with stool changes.',
      icon: '🔬'
    },
    {
      section: 'liver',
      drugName: 'Cirrhosis CAVE',
      brandName: 'Coagulopathy, ascites, varices, encephalopathy',
      drugClass: 'Liver framework',
      purpose: 'Organize liver failure complications.',
      facts: [
        'Scarred liver loses jobs: clotting, fluid balance, filtering, metabolism, and bile handling.',
        'Coagulopathy increases bleeding risk.',
        'Ascites creates abdominal fluid, discomfort, and breathing strain.',
        'Varices and encephalopathy are high-yield emergency pathways.'
      ],
      mnemonic: 'Cirrhosis lives in a CAVE.',
      icon: '🏔️'
    },
    {
      section: 'liver',
      drugName: 'Ascites Nursing Watch',
      brandName: 'Fluid in the abdomen',
      drugClass: 'Liver complication',
      purpose: 'Track fluid burden and breathing.',
      facts: [
        'Ascites can cause abdominal distention, discomfort, early satiety, and shortness of breath.',
        'Monitor daily weight, abdominal girth, respiratory status, edema, and skin integrity.',
        'Sudden pain, fever, confusion, or worsening condition can suggest infection or decompensation.',
        'Paracentesis requires monitoring for fluid shift, bleeding, and symptom relief.'
      ],
      mnemonic: 'Ascites is belly fluid that can squeeze breathing.',
      icon: '💧'
    },
    {
      section: 'liver',
      drugName: 'Variceal Bleed Priority',
      brandName: 'Cirrhosis + hematemesis',
      drugClass: 'Liver emergency',
      purpose: 'Stabilize before teaching.',
      facts: [
        'Portal hypertension can create fragile esophageal or gastric varices.',
        'Vomiting blood in a patient with cirrhosis is an emergency until proven otherwise.',
        'Priorities include airway awareness, vital signs, IV access, labs, blood products as ordered, and urgent intervention.',
        'Octreotide may be ordered to reduce portal pressure during acute bleeding.'
      ],
      mnemonic: 'Bleeding varices are a stabilize-and-stop-the-bleed moment.',
      icon: '🩸'
    },
    {
      section: 'liver',
      drugName: 'Hepatic Encephalopathy',
      brandName: 'Ammonia affecting the brain',
      drugClass: 'Liver-brain chain',
      purpose: 'Trend mentation and find triggers.',
      facts: [
        'Confusion, sleepiness, personality change, asterixis, or falls can signal encephalopathy.',
        'Assess glucose, oxygenation, neuro status, medication use, bleeding, infection, constipation, and electrolytes.',
        'Do not assume every confused patient is simply tired or anxious.',
        'Severe decreased consciousness can become an airway and ICU-level concern.'
      ],
      mnemonic: 'Liver cannot clear; brain starts to fog.',
      icon: '🧠'
    },
    {
      section: 'liver',
      drugName: 'Lactulose Stool Goal',
      brandName: '2-3 soft stools/day',
      drugClass: 'Hepatic encephalopathy drug',
      purpose: 'Lower ammonia without overdoing it.',
      facts: [
        'Lactulose traps ammonia in the gut and moves it out through stool.',
        'The common goal is 2-3 soft stools per day, unless the plan says otherwise.',
        'Too little may not improve mentation; too much can cause dehydration and electrolyte problems.',
        'Monitor mental status, stool frequency, hydration, and potassium.'
      ],
      mnemonic: 'Lactulose clears ammonia, not just constipation.',
      icon: '🚽'
    },
    {
      section: 'liver',
      drugName: 'Cirrhosis Labs',
      brandName: 'Clot, bile, brain, kidney',
      drugClass: 'Monitoring map',
      purpose: 'Connect labs to lost liver jobs.',
      facts: [
        'INR or PT can rise when clotting factor production falls.',
        'Bilirubin can rise when bile handling fails, causing jaundice clues.',
        'Albumin can fall, worsening fluid shift and edema.',
        'Ammonia, sodium, creatinine, platelets, and bleeding markers help show decompensation risk.'
      ],
      mnemonic: 'Clot, bile, fluid, brain, kidney.',
      icon: '🧾'
    },
    {
      section: 'liver',
      drugName: 'Hepatitis A/B/C Teaching',
      brandName: 'Spread pattern matters',
      drugClass: 'Liver infection map',
      purpose: 'Match teaching to transmission.',
      facts: [
        'Hepatitis A spreads mainly fecal-oral: hand hygiene, food, water, and exposure guidance matter.',
        'Hepatitis B spreads through blood and body fluids: vaccination and exposure precautions matter.',
        'Hepatitis C is strongly blood exposure linked: screening, follow-up, and treatment adherence matter.',
        'All liver inflammation teaching includes avoiding alcohol and protecting the liver.'
      ],
      mnemonic: 'A = appetite/food route; B = body fluids; C = blood contact.',
      icon: '🛡️'
    },
    {
      section: 'liver',
      drugName: 'Liver Old-Teaching Trap',
      brandName: 'Avoid blanket protein restriction',
      drugClass: 'Teaching nuance',
      purpose: 'Do not turn one liver fact into a universal rule.',
      facts: [
        'Nutrition plans in liver disease depend on the patient, labs, and current care plan.',
        'Do not casually teach every patient with encephalopathy to avoid protein forever.',
        'Protecting nutrition matters because malnutrition worsens outcomes.',
        'Follow the prescribed plan and monitor mental status, ammonia-related symptoms, and tolerance.'
      ],
      mnemonic: 'Nuance beats blanket rules in liver teaching.',
      icon: '🍽️'
    },
    {
      section: 'pancreas_gallbladder',
      drugName: 'Acute Pancreatitis Pattern',
      brandName: 'Pain to the back + elevated lipase',
      drugClass: 'Pancreas emergency',
      purpose: 'Recognize pancreatic inflammation fast.',
      facts: [
        'Classic pain is severe epigastric or left upper abdominal pain radiating to the back.',
        'Nausea, vomiting, fever, tachycardia, tenderness, and distress often appear.',
        'Lipase is more pancreas-specific than amylase and stays elevated longer.',
        'Gallstones and alcohol are common trigger patterns.'
      ],
      mnemonic: 'Pancreas pain punches through to the back.',
      icon: '🔥'
    },
    {
      section: 'pancreas_gallbladder',
      drugName: 'Pancreatitis Priority Care',
      brandName: 'Fluids + NPO + pain control',
      drugClass: 'Nursing priority',
      purpose: 'Stabilize the acute phase.',
      facts: [
        'Aggressive ordered IV fluids support perfusion during third spacing.',
        'NPO or diet restriction may be used to rest the pancreas during the acute phase.',
        'Pain control, oxygenation, glucose, calcium, kidney function, and urine output need monitoring.',
        'Do not make diet teaching the priority when the patient is acute or unstable.'
      ],
      mnemonic: 'Rest the pancreas, fill the tank, watch the crash signs.',
      icon: '💧'
    },
    {
      section: 'pancreas_gallbladder',
      drugName: 'Pancreatitis Danger Signs',
      brandName: 'Shock, hypocalcemia, respiratory changes',
      drugClass: 'Complication watch',
      purpose: 'Know what makes pancreatitis scary.',
      facts: [
        'Third spacing can lead to hypovolemia, poor urine output, and shock.',
        'Hypocalcemia signs like tingling, tetany, or spasms can signal severe disease.',
        'Respiratory changes can occur in severe systemic inflammation.',
        'Grey Turner or Cullen signs suggest severe bleeding and need urgent attention.'
      ],
      mnemonic: 'Pancreatitis can leave the belly and become whole-body.',
      icon: '🚨'
    },
    {
      section: 'pancreas_gallbladder',
      drugName: 'Chronic Pancreatitis Teaching',
      brandName: 'PERT + low-fat + no alcohol',
      drugClass: 'Long-term pancreas care',
      purpose: 'Support digestion and prevent flares.',
      facts: [
        'Chronic damage can cause pain, steatorrhea, weight loss, and diabetes risk.',
        'Pancreatic enzymes are taken with meals and snacks when prescribed.',
        'Low-fat choices and alcohol avoidance are key teaching points.',
        'If enzymes are not helping, assess timing with meals before assuming the dose is wrong.'
      ],
      mnemonic: 'Enzymes work when they arrive with the food.',
      icon: '🍽️'
    },
    {
      section: 'pancreas_gallbladder',
      drugName: 'Cholecystitis Pattern',
      brandName: 'RUQ pain + fever + Murphy sign',
      drugClass: 'Gallbladder inflammation',
      purpose: 'Separate biliary colic from infection concern.',
      facts: [
        'Gallstones can block bile flow and inflame the gallbladder.',
        'Right upper quadrant pain after fatty meals, nausea, vomiting, fever, and Murphy sign point to cholecystitis.',
        'Biliary colic can be self-limited pain without infection; cholecystitis is sustained inflammation.',
        'Worsening fever, guarding, jaundice, or instability raises concern.'
      ],
      mnemonic: 'Bile blockage plus fever is not just a stomachache.',
      icon: '🟡'
    },
    {
      section: 'pancreas_gallbladder',
      drugName: 'Cholecystitis Priority Care',
      brandName: 'Antibiotics, fluids, NPO, surgery consult',
      drugClass: 'Nursing priority',
      purpose: 'Move early when infection is suspected.',
      facts: [
        'Acute cholecystitis can progress to gangrene, perforation, peritonitis, and sepsis.',
        'Care often includes IV access, fluids, labs, imaging, pain control, NPO, and ordered antibiotics.',
        'Surgical consultation may be needed for cholecystectomy timing.',
        'Do not wait for pain to magically improve if infection signs are present.'
      ],
      mnemonic: 'Hot gallbladder gets fluids, antibiotics, and a plan.',
      icon: '🏥'
    },
    {
      section: 'pancreas_gallbladder',
      drugName: 'Post-Chole Teaching',
      brandName: 'After gallbladder removal',
      drugClass: 'Discharge teaching',
      purpose: 'Help the patient restart safely.',
      facts: [
        'Low-fat foods at first may reduce discomfort or loose stools after surgery.',
        'Ambulation supports recovery and lowers complication risk.',
        'Report fever, worsening pain, jaundice, drainage, or signs of infection.',
        'Some temporary loose stools can happen as bile flow changes.'
      ],
      mnemonic: 'No gallbladder means bile still flows, just less stored.',
      icon: '🧑‍⚕️'
    },
    {
      section: 'pancreas_gallbladder',
      drugName: 'Bile vs Back-Pain Differential',
      brandName: 'Cholecystitis vs pancreatitis',
      drugClass: 'Look-alike trap',
      purpose: 'Use location, labs, and pattern.',
      facts: [
        'Cholecystitis leans right upper quadrant, fatty-meal trigger, fever, and Murphy sign.',
        'Pancreatitis leans epigastric or left upper pain radiating to the back with elevated lipase.',
        'Bilirubin and cholestatic labs can rise when bile flow is blocked.',
        'Gallstones can connect the two by triggering gallstone pancreatitis.'
      ],
      mnemonic: 'Bile is RUQ; pancreas punches to the back.',
      icon: '🔄'
    }
  ]
};
