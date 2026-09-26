/**
 * Bhoomi Sakha - Shared Risk Classification Utilities
 * Ensures unified risk classification across the entire frontend.
 *
 * Thresholds:
 * - LOW: probability < 40% (< 0.40)
 * - MEDIUM: 40% <= probability < 60% (0.40 - 0.5999)
 * - HIGH: 60% <= probability < 80% (0.60 - 0.7999)
 * - CRITICAL: probability >= 80% (>= 0.80)
 */

import { t } from '../i18n/index.js';

/**
 * Normalizes input probability to 0..1 scale.
 * Handles inputs given as 0..1 (e.g. 0.8729) or 0..100 (e.g. 87.29).
 */
export function normalizeProbability(prob) {
  if (typeof prob !== 'number' || isNaN(prob)) return 0;
  return prob > 1 ? prob / 100 : Math.max(0, prob);
}

/**
 * Shared risk level calculation.
 * Returns: 'LOW' | 'MEDIUM' | 'HIGH' | 'CRITICAL'
 */
export function getRiskLevel(probability) {
  const p = normalizeProbability(probability);
  if (p >= 0.80) return 'CRITICAL';
  if (p >= 0.60) return 'HIGH';
  if (p >= 0.40) return 'MEDIUM';
  return 'LOW';
}

/**
 * Standardized user-facing risk wording.
 */
export function getRiskWording(levelOrProb) {
  const level = typeof levelOrProb === 'string' ? levelOrProb.toUpperCase() : getRiskLevel(levelOrProb);
  switch (level) {
    case 'CRITICAL':
      return t('risk.criticalWording', 'Critical predicted delay risk');
    case 'HIGH':
      return t('risk.highWording', 'High predicted delay risk');
    case 'MEDIUM':
      return t('risk.mediumWording', 'Moderate predicted delay risk');
    case 'LOW':
    default:
      return t('risk.lowWording', 'Low predicted delay risk');
  }
}

/**
 * Detailed summary statement based on snapshot.
 */
export function getRiskSummary(levelOrProb) {
  const level = typeof levelOrProb === 'string' ? levelOrProb.toUpperCase() : getRiskLevel(levelOrProb);
  switch (level) {
    case 'CRITICAL':
      return t('risk.criticalSummary', 'Critical predicted delay risk based on the current project snapshot.');
    case 'HIGH':
      return t('risk.highSummary', 'High predicted delay risk based on the current project snapshot.');
    case 'MEDIUM':
      return t('risk.mediumSummary', 'Moderate predicted delay risk based on the current project snapshot.');
    case 'LOW':
    default:
      return t('risk.lowSummary', 'Low predicted delay risk based on the current project snapshot.');
  }
}

/**
 * Threshold description string for statutory audit.
 */
export function getRiskThresholdLabel(levelOrProb) {
  const level = typeof levelOrProb === 'string' ? levelOrProb.toUpperCase() : getRiskLevel(levelOrProb);
  switch (level) {
    case 'CRITICAL':
      return t('risk.criticalThreshold', 'Risk Level: CRITICAL (Threshold ≥ 80%)');
    case 'HIGH':
      return t('risk.highThreshold', 'Risk Level: HIGH (Threshold: 60% – 79.9%)');
    case 'MEDIUM':
      return t('risk.mediumThreshold', 'Risk Level: MEDIUM (Threshold: 40% – 59.9%)');
    case 'LOW':
    default:
      return t('risk.lowThreshold', 'Risk Level: LOW (Threshold < 40%)');
  }
}

/**
 * Translated single-word risk level label (e.g. LOW / कम / कमी).
 */
export function getRiskLevelLabel(levelOrProb) {
  const level = typeof levelOrProb === 'string' ? levelOrProb.toUpperCase() : getRiskLevel(levelOrProb);
  switch (level) {
    case 'CRITICAL':
      return t('risk.critical', 'CRITICAL');
    case 'HIGH':
      return t('risk.high', 'HIGH');
    case 'MEDIUM':
      return t('risk.medium', 'MEDIUM');
    case 'LOW':
    default:
      return t('risk.low', 'LOW');
  }
}

/**
 * Translated risk badge label (e.g. CRITICAL RISK / अति-गंभीर जोखिम).
 */
export function getRiskBadgeLabel(levelOrProb) {
  const level = typeof levelOrProb === 'string' ? levelOrProb.toUpperCase() : getRiskLevel(levelOrProb);
  switch (level) {
    case 'CRITICAL':
      return t('risk.criticalRisk', 'CRITICAL RISK');
    case 'HIGH':
      return t('risk.highRisk', 'HIGH RISK');
    case 'MEDIUM':
      return t('risk.mediumRisk', 'MEDIUM RISK');
    case 'LOW':
    default:
      return t('risk.lowRisk', 'LOW RISK');
  }
}

/**
 * Tailwind badge styling matching Bhoomi Sakha civic identity.
 */
export function getRiskBadgeClasses(levelOrProb) {
  const level = typeof levelOrProb === 'string' ? levelOrProb.toUpperCase() : getRiskLevel(levelOrProb);
  switch (level) {
    case 'CRITICAL':
      return 'bg-red-100 text-red-900 border-red-300 dark:bg-red-950/60 dark:text-red-300 dark:border-red-800';
    case 'HIGH':
      return 'bg-orange-100 text-orange-900 border-orange-300 dark:bg-orange-950/60 dark:text-orange-300 dark:border-orange-800';
    case 'MEDIUM':
      return 'bg-amber-100 text-amber-900 border-amber-300 dark:bg-amber-950/60 dark:text-amber-300 dark:border-amber-800';
    case 'LOW':
    default:
      return 'bg-emerald-100 text-emerald-900 border-emerald-300 dark:bg-emerald-950/60 dark:text-emerald-300 dark:border-emerald-800';
  }
}

/**
 * Text color for probability numbers and headings.
 */
export function getRiskTextColor(levelOrProb) {
  const level = typeof levelOrProb === 'string' ? levelOrProb.toUpperCase() : getRiskLevel(levelOrProb);
  switch (level) {
    case 'CRITICAL':
      return 'text-red-600 dark:text-red-400';
    case 'HIGH':
      return 'text-orange-600 dark:text-orange-400';
    case 'MEDIUM':
      return 'text-amber-600 dark:text-amber-400';
    case 'LOW':
    default:
      return 'text-emerald-600 dark:text-emerald-400';
  }
}

/**
 * SVG stroke color for circular gauge.
 */
export function getRiskStrokeColor(levelOrProb) {
  const level = typeof levelOrProb === 'string' ? levelOrProb.toUpperCase() : getRiskLevel(levelOrProb);
  switch (level) {
    case 'CRITICAL':
      return 'text-red-600 dark:text-red-500';
    case 'HIGH':
      return 'text-orange-500 dark:text-orange-400';
    case 'MEDIUM':
      return 'text-amber-500 dark:text-amber-400';
    case 'LOW':
    default:
      return 'text-emerald-500 dark:text-emerald-400';
  }
}
