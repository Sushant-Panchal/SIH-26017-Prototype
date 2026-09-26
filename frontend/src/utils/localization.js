/**
 * Bhoomi Sakha - Domain Localization & Translation Helpers
 * Provides standardized multilingual translation for dynamic model outputs:
 * - Statutory stage names (preserving official legal designation)
 * - XGBoost risk-increasing & risk-reducing factor titles
 * - Actionable recommendation and mitigation directives
 * - Dynamic categorical telemetry values
 */

import { t } from '../i18n/index.js';

/**
 * Translates statutory stage names, preserving the legal designation.
 * e.g. "Sec 19 Declaration" -> "धारा 19 घोषणा (Sec 19 Declaration)"
 * @param {string} stage
 * @returns {string}
 */
export function getLocalizedStage(stage) {
  if (!stage) return '';
  const key = `stages.${stage}`;
  const translated = t(key);
  if (translated && translated !== key) {
    return translated;
  }

  // Common aliases
  const aliasMap = {
    'Section 19': 'Sec 19 Declaration',
    'Sec 19': 'Sec 19 Declaration',
    '3A Survey': 'Joint Survey 3A',
    'Joint Survey': 'Joint Survey 3A',
    'Section 23': 'Compensation Award',
    'Award': 'Compensation Award',
  };

  if (aliasMap[stage]) {
    const aliasKey = `stages.${aliasMap[stage]}`;
    const aliasTrans = t(aliasKey);
    if (aliasTrans && aliasTrans !== aliasKey) return aliasTrans;
  }

  return stage;
}

/**
 * Translates model-derived factor names into active language.
 * @param {Object|string} driver - Risk driver object or factor name string
 * @returns {string}
 */
export function getLocalizedFactorName(driver) {
  if (!driver) return '';
  const featureKey = typeof driver === 'object' 
    ? (driver.feature || normalizeFactorToKey(driver.factor))
    : normalizeFactorToKey(driver);

  if (featureKey) {
    const directKey = `factors.${featureKey}`;
    const translated = t(directKey);
    if (translated && translated !== directKey) {
      return translated;
    }

    // Try info definition title
    const infoKey = `info.${featureKey}.title`;
    const infoTitle = t(infoKey);
    if (infoTitle && infoTitle !== infoKey) {
      return infoTitle;
    }
  }

  return (typeof driver === 'object' ? driver.factor : driver) || featureKey || '';
}

/**
 * Translates model recommendations & action directives.
 * @param {Object|string} driver - Risk driver object or recommendation string
 * @returns {string}
 */
export function getLocalizedRecommendation(driver) {
  if (!driver) return '';
  
  if (typeof driver === 'object') {
    // Check if it's a risk-reducing factor
    if (driver.direction === 'reduces_risk') {
      return t('recommendations.reducing_risk', 'This factor is currently reducing the predicted delay risk.');
    }

    if (driver.feature) {
      const recKey = `recommendations.${driver.feature}`;
      const translated = t(recKey);
      if (translated && translated !== recKey) {
        return translated;
      }
    }
  }

  const rawRec = typeof driver === 'object' ? driver.recommendation : driver;
  if (!rawRec) {
    return t('recommendations.default', 'Review this factor as part of the project risk assessment.');
  }

  // Check direct recommendation string translation
  const normalizedRec = normalizeTextToKey(rawRec);
  if (normalizedRec) {
    const recKey = `recommendations.${normalizedRec}`;
    const translated = t(recKey);
    if (translated && translated !== recKey) {
      return translated;
    }
  }

  return rawRec;
}

/**
 * Localizes categorical string values, while preserving numbers verbatim.
 * @param {*} value
 * @param {string} featureName
 * @returns {*}
 */
export function getLocalizedValue(value, featureName = '') {
  if (value === null || value === undefined) return '--';
  if (typeof value === 'number') return value;

  const str = String(value).trim();

  // Project Types
  const projectTypes = {
    'Highway': 'dropdown.project_type.highway',
    'Railway': 'dropdown.project_type.railway',
    'Industrial': 'dropdown.project_type.industrial',
    'Metro': 'dropdown.project_type.metro',
    'Irrigation': 'dropdown.project_type.irrigation',
    'Power': 'dropdown.project_type.power',
    'Urban Development': 'dropdown.project_type.urban',
  };
  if (projectTypes[str]) {
    const translated = t(projectTypes[str]);
    if (translated && translated !== projectTypes[str]) return translated;
  }

  // Land Types
  const landTypes = {
    'Agricultural': 'dropdown.land_type.agricultural',
    'Commercial': 'dropdown.land_type.commercial',
    'Industrial': 'dropdown.land_type.industrial',
    'Mixed': 'dropdown.land_type.mixed',
    'Residential': 'dropdown.land_type.residential',
  };
  if (landTypes[str]) {
    const translated = t(landTypes[str]);
    if (translated && translated !== landTypes[str]) return translated;
  }

  // Priority Tiers
  const priorities = {
    'Normal': 'dropdown.priority.normal',
    'High': 'dropdown.priority.high',
    'Critical': 'dropdown.priority.critical',
  };
  if (priorities[str]) {
    const translated = t(priorities[str]);
    if (translated && translated !== priorities[str]) return translated;
  }

  // Stages
  const stageTrans = getLocalizedStage(str);
  if (stageTrans && stageTrans !== str) return stageTrans;

  return str;
}

function normalizeFactorToKey(factorStr) {
  if (!factorStr) return '';
  return String(factorStr)
    .toLowerCase()
    .replace(/^project type:\s*/i, 'project_type_')
    .replace(/^land type:\s*/i, 'land_type_')
    .replace(/^priority:\s*/i, 'priority_')
    .replace(/[^a-z0-9_]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}

function normalizeTextToKey(text) {
  if (!text) return '';
  if (text.includes('reducing the predicted delay risk')) return 'reducing_risk';
  if (text.includes('part of the project risk assessment')) return 'default';
  return String(text)
    .toLowerCase()
    .substring(0, 40)
    .replace(/[^a-z0-9_]/g, '_')
    .replace(/_+/g, '_')
    .replace(/^_|_$/g, '');
}
