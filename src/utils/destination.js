import { api } from '../config/restApi'

// GET Destination
const getAllDestinations = async () =>
  api
    .get('/destinations')
    .then((data) => data.data)
    .catch(({ response }) => Promise.reject(response));

export { getAllDestinations }