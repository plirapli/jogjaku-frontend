import { api } from '../config/restApi'

// GET All Activites
const getAllActivites = async () =>
  api
    .get('/activities')
    .then((data) => data.data)
    .catch(({ response }) => Promise.reject(response));

// GET Activity by ID
const getActivityByID = async (id) =>
  api
    .get(`/activities/${id}`)
    .then((data) => data.data)
    .catch(({ response }) => Promise.reject(response));

export { getAllActivites, getActivityByID }