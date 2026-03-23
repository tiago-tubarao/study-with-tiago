// ══════════════════════════════════════════════
// DRUG DEEP — Master merge file
// Combines all question groups into one DRUG_DEEP object
// Load AFTER the individual question files
// ══════════════════════════════════════════════

window.DRUG_DEEP = Object.assign({},
  window.DRUG_DEEP_INSULINS || {},
  window.DRUG_DEEP_ORALS || {},
  window.DRUG_DEEP_EMERGENCIES || {},
  window.DRUG_DEEP_ENDOCRINE || {},
  window.DRUG_DEEP_HEMATOLOGY || {},
  window.DRUG_DEEP_ANTIBIOTICS || {},
  window.DRUG_DEEP_ANTIMICROBIALS_SPECIAL || {}
);

// Log for debugging
console.log('DRUG_DEEP loaded:', Object.keys(window.DRUG_DEEP).length, 'drugs with questions');
