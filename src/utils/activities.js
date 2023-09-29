import { api } from '../config/restApi'

// GET All Destinations
const getAllActivites = async () =>
  api
    .get('/activities')
    .then((data) => data.data)
    .catch(({ response }) => Promise.reject(response));

export { getAllActivites }