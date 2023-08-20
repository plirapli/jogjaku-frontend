import { api } from '../config/restApi'

const getLocalAccessToken = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user?.token;
};

const setLocalAccessToken = (token) => {
  const user = JSON.parse(localStorage.getItem('user'));
  user.token = token;
  localStorage.setItem('user', JSON.stringify(user));
};

// Send Login
const sendLogin = async (userData) =>
  api
    .post('/login', userData)
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response));

const sendRegister = async (userData) =>
  api
    .post('/register', userData)
    .then(({ data }) => data.message)
    .catch(({ response }) => Promise.reject(response));

const logoutHandler = () => localStorage.removeItem('user');

export {
  getLocalAccessToken,
  setLocalAccessToken,
  sendLogin,
  sendRegister,
  logoutHandler,
};
