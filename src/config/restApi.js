import axios from 'axios';
import { getLocalAccessToken } from '../utils/auth';

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
    if (!(window.location.href).includes('/login') && err.response.status === 400) {
      window.location.replace('/login')
    }
    return Promise.reject(err);
  }
);

export { api, authApi };
