import { authApi } from '../config/restApi';

const url = '/user';

const getAllUsers = async () =>
  authApi
    .get(url)
    .then(({ data }) => data.data)
    .catch(({ response }) => Promise.reject(response));

// Get user by id
const getUserById = async (id) =>
  authApi
    .get(`${url}/${id}`)
    .then(({ data }) => data.data)
    .catch(({ response }) => Promise.reject(response));

const getUserOwnProfile = async () =>
  authApi
    .get(`${url}/`)
    .then(({ data }) => data)
    .catch(({ response }) => Promise.reject(response));

const updateUserProfile = async (data) =>
  authApi
    .put(`/edit-profile`, data, {
      headers: { 'Content-Type': 'multipart/form-data' },
    })
    .then(({ data }) => data.message)
    .catch(({ response }) => Promise.reject(response));

const updatePassword = async (password) =>
  authApi
    .post(`${url}/changepassword`, { password })
    .then(({ data }) => data.message)
    .catch(({ response }) => Promise.reject(response));

const deleteUser = (id) => {
  return authApi
    .delete(`${url}/${id}`)
    .then(({ data }) => data.message)
    .catch(({ response }) => Promise.reject(response));
};

export {
  getAllUsers,
  getUserById,
  getUserOwnProfile,
  updateUserProfile,
  updatePassword,
  deleteUser,
};
