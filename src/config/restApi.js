import axios from 'axios';
import {
  getLocalAccessToken,
  setLocalAccessToken,
} from '../utils/auth';

const config = {
  baseURL: 'https://jogjaku-komang-85856.et.r.appspot.com/',
  headers: {
    'Content-Type': 'application/json',
  },
};

// Create instance
const api = axios.create(config);
const authApi = axios.create(config);

// Using default header
authApi.interceptors.request.use(
  (config) => {
    const token = getLocalAccessToken();
    if (token) {
      config.headers['Authorization'] = 'Bearer ' + token;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

authApi.interceptors.response.use(
  (res) => res,
  async (err) => {
    const config = err?.config;

    if (config.url !== '/user/login' && err.response) {
      // Access Token was expired
      if (err.response.status === 400 && !config._retry) {
        config._retry = true;

        try {
          // Get access token from refresh token
          const { token } = await getLocalAccessToken();

          if (token) {
            config.headers = {
              ...config.headers,
              Authorization: `Bearer ${await token}`,
            };
          }

          return authApi(config);
        } catch ({ response }) {
          window.location.replace('/login');
          return Promise.reject(response);
        }
      }
    }

    return Promise.reject(err);
  }
);

export { api, authApi };
