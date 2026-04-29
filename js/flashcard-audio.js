// ══════════════════════════════════════════════
// Flashcard Audio — Podcast + Read Card (both pre-recorded Edge TTS)
// Podcast = two-host discussion | Read Card = Ava reads the 12-point framework
// ══════════════════════════════════════════════

(function() {
  var AUDIO_BASE = 'audio/';

  // Drug name → podcast file (two-host discussion or pronunciation)
  var podcastMap = {
    'Acarbose': 'acarbose_podcast.mp3',
    'Acetylcysteine': 'acetylcysteine_podcast.mp3',
    'Alendronate': 'alendronate_podcast.mp3',
    'Allopurinol': 'allopurinol_podcast.mp3',
    'Argatroban': 'argatroban_podcast.mp3',
    'Bivalirudin': 'bivalirudin_podcast.mp3',
    'Calcium Gluconate': 'calcium_gluconate_podcast.mp3',
    'Canagliflozin': 'canagliflozin_podcast.mp3',
    'Capsaicin': 'capsaicin_podcast.mp3',
    'Cinacalcet': 'cinacalcet_podcast.mp3',
    'Cyanocobalamin': 'cyanocobalamin_podcast.mp3',
    'Cyclosporine': 'cyclosporine_podcast.mp3',
    'Deferoxamine': 'deferoxamine_podcast.mp3',
    'Demeclocycline': 'demeclocycline_podcast.mp3',
    'Desmopressin': 'desmopressin_podcast.mp3',
    'Digibind': 'digibind_podcast.mp3',
    'Emicizumab': 'emicizumab_podcast.mp3',
    'Enoxaparin': 'enoxaparin_podcast.mp3',
    'Epinephrine': 'epinephrine_podcast.mp3',
    'Epoetin Alfa': 'epoetin_podcast.mp3',
    'Ferrous Sulfate': 'ferrous_sulfate_podcast.mp3',
    'Fludrocortisone': 'fludrocortisone_podcast.mp3',
    'Flumazenil': 'flumazenil_podcast.mp3',
    'Folic Acid': 'folic_acid_podcast.mp3',
    'Furosemide': 'furosemide_podcast.mp3',
    'Glipizide': 'glipizide_podcast.mp3',
    'Glargine': 'insulin_glargine_podcast.mp3',
    'Heparin': 'heparin_podcast.mp3',
    'Hydrocortisone': 'hydrocortisone_podcast.mp3',
    'Hydroxyurea': 'hydroxyurea_podcast.mp3',
    'Imatinib': 'imatinib_podcast.mp3',
    'Iron Dextran': 'iron_dextran_podcast.mp3',
    'Ketoconazole': 'ketoconazole_podcast.mp3',
    'Leucovorin': 'leucovorin_podcast.mp3',
    'Levothyroxine': 'levothyroxine_podcast.mp3',
    'Lispro': 'insulin_lispro_podcast.mp3',
    'Mannitol': 'mannitol_podcast.mp3',
    'Metformin': 'metformin_podcast.mp3',
    'Methimazole': 'methimazole_podcast.mp3',
    'Mifepristone': 'mifepristone_podcast.mp3',
    'Mitotane': 'mitotane_podcast.mp3',
    'Naloxone': 'naloxone_podcast.mp3',
    'NPH Insulin': 'nph_insulin_podcast.mp3',
    'Phytonadione': 'phytonadione_podcast.mp3',
    'Pioglitazone': 'pioglitazone_podcast.mp3',
    'Pramlintide': 'pramlintide_podcast.mp3',
    'Propranolol': 'propranolol_podcast.mp3',
    'Protamine Sulfate': 'protamine_sulfate_podcast.mp3',
    'PTU': 'ptu_podcast.mp3',
    'Radioactive Iodine': 'radioactive_iodine_podcast.mp3',
    'Regular Insulin': 'insulin_regular_podcast.mp3',
    'Repaglinide': 'repaglinide_podcast.mp3',
    'Rituximab': 'rituximab_podcast.mp3',
    'Sitagliptin': 'sitagliptin_podcast.mp3',
    'Sodium Zirconium': 'sodium_zirconium_podcast.mp3',
    'Somatropin': 'somatropin_podcast.mp3',
    'Spironolactone': 'spironolactone_podcast.mp3',
    'SSKI': 'sski_podcast.mp3',
    'Tacrolimus': 'tacrolimus_podcast.mp3',
    'Tolvaptan': 'tolvaptan_podcast.mp3',
    'Warfarin': 'warfarin_podcast.mp3',
    'Aspart': 'aspart_podcast.mp3',
    'Glulisine': 'glulisine_podcast.mp3',
    'Afrezza': 'afrezza_podcast.mp3',
    'Degludec': 'degludec_podcast.mp3',
    'Detemir': 'detemir_podcast.mp3',
    'Glyburide': 'glyburide_podcast.mp3',
    'Exenatide': 'exenatide_podcast.mp3',
    'Liraglutide': 'liraglutide_podcast.mp3',
    'Glucagon': 'glucagon_podcast.mp3',
    'Dextrose 50%': 'dextrose50_podcast.mp3',
    'Dexamethasone': 'dexamethasone_podcast.mp3',
    'Octreotide': 'octreotide_podcast.mp3',
    'Pamidronate': 'pamidronate_podcast.mp3',
    'Phenoxybenzamine': 'phenoxybenzamine_podcast.mp3',
    'Phentolamine': 'phentolamine_podcast.mp3',
    'Eplerenone': 'eplerenone_podcast.mp3',
    'Metoclopramide': 'metoclopramide_podcast.mp3',
    'HCTZ': 'hctz_podcast.mp3',
    'Kayexalate': 'kayexalate_podcast.mp3',
    'Patiromer': 'patiromer_podcast.mp3',
    'Mycophenolate': 'mycophenolate_podcast.mp3',
    'Magnesium Sulfate': 'magnesium_sulfate_podcast.mp3',
    'Ketorolac': 'ketorolac_podcast.mp3',
    'Morphine': 'morphine_podcast.mp3',
    'DDAVP': 'ddavp_podcast.mp3'
  };

  // Drug name → read card file (Ava reads the 8 categories)
  var readMap = {
    'Acarbose': 'acarbose_read.mp3',
    'Acetylcysteine': 'acetylcysteine_read.mp3',
    'Afrezza': 'afrezza_read.mp3',
    'Alendronate': 'alendronate_read.mp3',
    'Allopurinol': 'allopurinol_read.mp3',
    'Argatroban': 'argatroban_read.mp3',
    'Aspart': 'aspart_read.mp3',
    'Bivalirudin': 'bivalirudin_read.mp3',
    'Calcium Gluconate': 'calcium_gluconate_read.mp3',
    'Canagliflozin': 'canagliflozin_read.mp3',
    'Capsaicin': 'capsaicin_read.mp3',
    'Cinacalcet': 'cinacalcet_read.mp3',
    'Cyanocobalamin': 'cyanocobalamin_read.mp3',
    'Cyclosporine': 'cyclosporine_read.mp3',
    'DDAVP': 'ddavp_read.mp3',
    'Deferoxamine': 'deferoxamine_read.mp3',
    'Degludec': 'degludec_read.mp3',
    'Demeclocycline': 'demeclocycline_read.mp3',
    'Desmopressin': 'desmopressin_read.mp3',
    'Detemir': 'detemir_read.mp3',
    'Dexamethasone': 'dexamethasone_read.mp3',
    'Dextrose 50%': 'dextrose_50_read.mp3',
    'Digibind': 'digibind_read.mp3',
    'Emicizumab': 'emicizumab_read.mp3',
    'Enoxaparin': 'enoxaparin_read.mp3',
    'Eplerenone': 'eplerenone_read.mp3',
    'Epinephrine': 'epinephrine_read.mp3',
    'Epoetin Alfa': 'epoetin_alfa_read.mp3',
    'Exenatide': 'exenatide_read.mp3',
    'Ferrous Sulfate': 'ferrous_sulfate_read.mp3',
    'Fludrocortisone': 'fludrocortisone_read.mp3',
    'Flumazenil': 'flumazenil_read.mp3',
    'Folic Acid': 'folic_acid_read.mp3',
    'Furosemide': 'furosemide_read.mp3',
    'Glargine': 'glargine_read.mp3',
    'Glipizide': 'glipizide_read.mp3',
    'Glucagon': 'glucagon_read.mp3',
    'Glulisine': 'glulisine_read.mp3',
    'Glyburide': 'glyburide_read.mp3',
    'HCTZ': 'hctz_read.mp3',
    'Heparin': 'heparin_read.mp3',
    'Hydrocortisone': 'hydrocortisone_read.mp3',
    'Hydroxyurea': 'hydroxyurea_read.mp3',
    'Imatinib': 'imatinib_read.mp3',
    'Iron Dextran': 'iron_dextran_read.mp3',
    'Kayexalate': 'kayexalate_read.mp3',
    'Ketoconazole': 'ketoconazole_read.mp3',
    'Ketorolac': 'ketorolac_read.mp3',
    'Leucovorin': 'leucovorin_read.mp3',
    'Levothyroxine': 'levothyroxine_read.mp3',
    'Liraglutide': 'liraglutide_read.mp3',
    'Lispro': 'lispro_read.mp3',
    'Magnesium Sulfate': 'magnesium_sulfate_read.mp3',
    'Mannitol': 'mannitol_read.mp3',
    'Metformin': 'metformin_read.mp3',
    'Methimazole': 'methimazole_read.mp3',
    'Metoclopramide': 'metoclopramide_read.mp3',
    'Mifepristone': 'mifepristone_read.mp3',
    'Mitotane': 'mitotane_read.mp3',
    'Morphine': 'morphine_read.mp3',
    'Mycophenolate': 'mycophenolate_read.mp3',
    'Naloxone': 'naloxone_read.mp3',
    'NPH Insulin': 'nph_insulin_read.mp3',
    'Octreotide': 'octreotide_read.mp3',
    'Pamidronate': 'pamidronate_read.mp3',
    'Patiromer': 'patiromer_read.mp3',
    'Phenoxybenzamine': 'phenoxybenzamine_read.mp3',
    'Phentolamine': 'phentolamine_read.mp3',
    'Phytonadione': 'phytonadione_read.mp3',
    'Pioglitazone': 'pioglitazone_read.mp3',
    'Pramlintide': 'pramlintide_read.mp3',
    'Propranolol': 'propranolol_read.mp3',
    'Protamine Sulfate': 'protamine_sulfate_read.mp3',
    'PTU': 'ptu_read.mp3',
    'Radioactive Iodine': 'radioactive_iodine_read.mp3',
    'Regular Insulin': 'regular_insulin_read.mp3',
    'Repaglinide': 'repaglinide_read.mp3',
    'Rituximab': 'rituximab_read.mp3',
    'Sitagliptin': 'sitagliptin_read.mp3',
    'Sodium Zirconium': 'sodium_zirconium_read.mp3',
    'Somatropin': 'somatropin_read.mp3',
    'Spironolactone': 'spironolactone_read.mp3',
    'SSKI': 'sski_read.mp3',
    'Tacrolimus': 'tacrolimus_read.mp3',
    'Tolvaptan': 'tolvaptan_read.mp3',
    'Warfarin': 'warfarin_read.mp3'
  };

  var currentAudio = null;
  var activeBtn = null;
  var podcastBtn = document.getElementById('fcPodcastBtn');
  var readBtn = document.getElementById('fcReadBtn');

  function setAudioStatus(message) {
    var status = document.getElementById('fcAudioStatus');
    if (status) status.textContent = message || '';
  }

  function playFile(file, btn, icon, label) {
    stopAll();
    currentAudio = new Audio(AUDIO_BASE + file);
    activeBtn = btn;
    btn.classList.add('playing');
    btn.querySelector('.fc-audio-icon').textContent = '\u23F9';
    setAudioStatus('Playing ' + label + '...');
    currentAudio.play().catch(function() {
      btn.querySelector('.fc-audio-icon').textContent = '\u274C';
      setAudioStatus('Audio could not play. Try again after the page finishes loading.');
      setTimeout(function() { btn.querySelector('.fc-audio-icon').textContent = icon; }, 1500);
    });
    currentAudio.addEventListener('ended', function() {
      btn.classList.remove('playing');
      btn.querySelector('.fc-audio-icon').textContent = icon;
      currentAudio = null;
      activeBtn = null;
      setAudioStatus('');
    });
  }

  function stopAll() {
    if (currentAudio) {
      currentAudio.pause();
      currentAudio.currentTime = 0;
      currentAudio = null;
    }
    if (activeBtn) {
      activeBtn.classList.remove('playing');
      activeBtn = null;
    }
    podcastBtn.classList.remove('playing');
    podcastBtn.querySelector('.fc-audio-icon').textContent = '\uD83C\uDF99';
    readBtn.classList.remove('playing');
    readBtn.querySelector('.fc-audio-icon').textContent = '\uD83D\uDD0A';
    setAudioStatus('');
  }

  // ── Podcast Button (toggle) ──
  podcastBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentAudio && activeBtn === podcastBtn) { stopAll(); return; }
    var drugName = document.getElementById('fcDrugName').textContent;
    var file = podcastMap[drugName];
    if (!file) {
      podcastBtn.querySelector('.fc-audio-icon').textContent = '\u274C';
      setAudioStatus('Podcast audio is not available for this card yet.');
      setTimeout(function() { podcastBtn.querySelector('.fc-audio-icon').textContent = '\uD83C\uDF99'; }, 1500);
      return;
    }
    playFile(file, podcastBtn, '\uD83C\uDF99', 'podcast audio');
  });

  // ── Read Card Button (toggle) ──
  readBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    if (currentAudio && activeBtn === readBtn) { stopAll(); return; }
    var drugName = document.getElementById('fcDrugName').textContent;
    var file = readMap[drugName];
    if (!file) {
      readBtn.querySelector('.fc-audio-icon').textContent = '\u274C';
      setAudioStatus('Read-card audio is not available for this card yet.');
      setTimeout(function() { readBtn.querySelector('.fc-audio-icon').textContent = '\uD83D\uDD0A'; }, 1500);
      return;
    }
    playFile(file, readBtn, '\uD83D\uDD0A', 'read-card audio');
  });

  // Stop audio when navigating to a new card
  var observer = new MutationObserver(function() { stopAll(); });
  var drugNameEl = document.getElementById('fcDrugName');
  if (drugNameEl) observer.observe(drugNameEl, { childList: true, characterData: true, subtree: true });

})();
