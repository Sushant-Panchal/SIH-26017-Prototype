/**
 * Bhoomi Sakha - Prediction Service
 * High-level service for health checks, metadata, and ML risk prediction.
 */

import { apiClient } from './client.js';

export const predictionService = {
  /**
   * Check if backend and model are active
   */
  async checkHealth() {
    try {
      const data = await apiClient.get('/health', { timeout: 4000 });
      return {
        online: data.status === 'healthy',
        modelLoaded: Boolean(data.model_loaded),
        featureCount: data.features || 76,
        raw: data,
      };
    } catch (err) {
      return {
        online: false,
        modelLoaded: false,
        featureCount: 0,
        error: err.message,
      };
    }
  },

  /**
   * Retrieve valid category lists, stages, and model info
   */
  async getMetadata() {
    return apiClient.get('/meta');
  },

  /**
   * Predict project delay risk using XGBoost binary classifier
   * @param {Object} snapshot - ProjectInput schema matching backend
   */
  async predictRisk(snapshot) {
    return apiClient.post('/predict', snapshot);
  },
};
