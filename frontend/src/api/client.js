/**
 * Bhoomi Sakha - Core API Client
 * Handles communication with the FastAPI backend.
 */

export const getApiBaseUrl = () => {
  const envUrl = typeof import.meta !== 'undefined' ? import.meta.env?.VITE_API_URL : null;
  if (typeof window !== 'undefined') {
    const isLocal = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
    if (!isLocal) {
      // In production (Vercel, custom domain), never call localhost
      if (!envUrl || envUrl.includes('localhost') || envUrl.includes('127.0.0.1')) {
        return 'https://sih-26017-prototype.onrender.com';
      }
      return envUrl;
    }
  }
  return envUrl || 'http://127.0.0.1:8000';
};

export const API_BASE_URL = getApiBaseUrl();

export class ApiError extends Error {
  constructor(message, status = null, details = null) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.details = details;
  }
}

/**
 * Execute HTTP request with timeout and structured error handling.
 */
async function request(endpoint, options = {}) {
  const url = `${API_BASE_URL}${endpoint}`;
  const controller = new AbortController();
  const timeoutId = setTimeout(() => controller.abort(), options.timeout || 15000);

    const defaultHeaders = {
      'Accept': 'application/json',
    };

    // Only set application/json if body is not FormData
    if (!(options.body instanceof FormData)) {
      defaultHeaders['Content-Type'] = 'application/json';
    }

    const token = typeof window !== 'undefined' ? localStorage.getItem('bs_token') : null;
    if (token) {
      defaultHeaders['Authorization'] = `Bearer ${token}`;
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers: {
          ...defaultHeaders,
          ...(options.headers || {}),
        },
        signal: controller.signal,
      });

      clearTimeout(timeoutId);

      const contentType = response.headers.get('content-type') || '';
      let data = null;
      if (contentType.includes('application/json')) {
        data = await response.json();
      } else {
        data = await response.text();
      }

      if (!response.ok) {
        const errorDetail = data && typeof data === 'object' && data.detail 
          ? data.detail 
          : `Request failed with status ${response.status}`;
        throw new ApiError(errorDetail, response.status, data);
      }

      return data;
    } catch (error) {
      clearTimeout(timeoutId);

      if (error instanceof ApiError) {
        throw error;
      }

      if (error.name === 'AbortError') {
        throw new ApiError('Request timed out while contacting Bhoomi Sakha prediction engine.', 408);
      }

      console.debug(`[ApiClient] Network request failed for ${endpoint}:`, error);
      throw new ApiError(
        'Service is temporarily unavailable. Please try again.',
        0,
        error
      );
    }
  }

  export const apiClient = {
    baseUrl: API_BASE_URL,

    get(endpoint, options = {}) {
      return request(endpoint, { ...options, method: 'GET' });
    },

    post(endpoint, body, options = {}) {
      return request(endpoint, {
        ...options,
        method: 'POST',
        body: JSON.stringify(body),
      });
    },

    upload(endpoint, formData, options = {}) {
      return request(endpoint, {
        ...options,
        method: 'POST',
        body: formData,
      });
    },

    patch(endpoint, body, options = {}) {
      return request(endpoint, {
        ...options,
        method: 'PATCH',
        body: JSON.stringify(body),
      });
    },

    put(endpoint, body, options = {}) {
      return request(endpoint, {
        ...options,
        method: 'PUT',
        body: JSON.stringify(body),
      });
    },

    delete(endpoint, options = {}) {
      return request(endpoint, { ...options, method: 'DELETE' });
    },
  };
