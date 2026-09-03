import axios from 'axios';

const getConfiguredBaseUrls = () => {
  const candidates = [
    import.meta.env.VITE_API_URL_DEV,
    import.meta.env.VITE_API_URL_PROD,
    'http://localhost:5001',
    'http://localhost:5000'
  ].filter(Boolean);

  return [...new Set(candidates)];
};

const baseUrls = getConfiguredBaseUrls();
let currentBaseUrlIndex = 0;

const getBaseUrl = () => baseUrls[Math.min(currentBaseUrlIndex, baseUrls.length - 1)] || 'http://localhost:5001';

const api = axios.create({
  baseURL: getBaseUrl(),
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
});

api.interceptors.response.use(
  (response) => response,
  async (error) => {
    const config = error?.config;
    if (!config || config.__isRetry) {
      return Promise.reject(error);
    }

    const status = error?.response?.status;
    const code = error?.code;
    const isNetworkIssue = !status && ['ERR_NETWORK', 'ECONNABORTED', 'ECONNREFUSED', 'ETIMEDOUT'].includes(code);

    if (!isNetworkIssue) {
      return Promise.reject(error);
    }

    for (let index = 0; index < baseUrls.length; index += 1) {
      if (baseUrls[index] === getBaseUrl()) {
        continue;
      }

      currentBaseUrlIndex = index;
      api.defaults.baseURL = baseUrls[index];

      try {
        return await api.request({ ...config, __isRetry: true, baseURL: baseUrls[index] });
      } catch (retryError) {
        // Continúa intentando con el siguiente candidato.
      }
    }

    return Promise.reject(error);
  }
);

export default api;
