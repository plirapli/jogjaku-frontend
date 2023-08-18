import { api } from '../config/restApi'

const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.accessToken;
};

const getLocalRefreshToken = () => {
  const user = localStorage.getItem('user');
  if (user) {
    const { refreshToken } = JSON.parse(user);
    return refreshToken;
  }
  return null;
};

const setLocalAccessToken = (token) => {
  const user = JSON.parse(localStorage.getItem('user'));
  user.accessToken = token;
  localStorage.setItem('user', JSON.stringify(user));
};

// Send refresh token
const getAccessToken = async () =>
  api
    .post('/users/refresh-token', { refreshToken: getLocalRefreshToken() })
    .then(({ data }) => data.data)
    .catch(({ response }) => Promise.reject(response));

// Send Login
const sendLogin = async (userData) =>
  api
    .post('/login', userData)
    .then((data) => data)
    .catch(({ response }) => Promise.reject(response));

const sendRegister = async (userData) =>
  api
    .post('/register', userData)
    .then(({ data }) => data.message)
    .catch(({ response }) => Promise.reject(response));

const logoutHandler = () => localStorage.removeItem('user');

export {
  getLocalAccessToken,
  getLocalRefreshToken,
  setLocalAccessToken,
  getAccessToken,
  sendLogin,
  sendRegister,
  logoutHandler,
};
