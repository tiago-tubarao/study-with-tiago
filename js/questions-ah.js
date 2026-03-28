// ══════════════════════════════════════════════
// ADULT HEALTH — DRUG_DEEP Master Merge
// Combines all Adult Health question groups into one object
// Load AFTER the individual question files
// ══════════════════════════════════════════════

window.DRUG_DEEP_AH = Object.assign({},
  window.DRUG_DEEP_AH_HEMATOLOGY || {},
  window.DRUG_DEEP_AH_HEMATOLOGY_V2 || {},
  window.DRUG_DEEP_AH_DIABETES || {},
  window.DRUG_DEEP_AH_DIABETES_V2 || {},
  window.DRUG_DEEP_AH_ENDOCRINE || {},
  window.DRUG_DEEP_AH_ENDOCRINE_V2 || {},
  window.DRUG_DEEP_AH_RENAL || {},
  window.DRUG_DEEP_AH_RENAL_V2 || {},
  window.DRUG_DEEP_AH_CLINICAL || {}
);

console.log('DRUG_DEEP_AH loaded:', Object.keys(window.DRUG_DEEP_AH).length, 'topics with questions');
