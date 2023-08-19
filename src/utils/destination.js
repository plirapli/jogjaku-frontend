import { api } from '../config/restApi'

// GET All Destinations
const getAllDestinations = async () =>
  api
    .get('/destinations')
    .then((data) => data.data)
    .catch(({ response }) => Promise.reject(response));

// GET Destination by ID
const getDestinationByID = async (id) =>
  api
    .get(`/destination/${id}`)
    .then((data) => data.data)
    .catch(({ response }) => Promise.reject(response));

const getDestinationTicket = async (id) =>
  api
    .get(`/destination/${id}`)
    .then(({ data }) => data.destination.destinationTickets)
    .catch(({ response }) => Promise.reject(response));

export { getAllDestinations, getDestinationByID, getDestinationTicket }