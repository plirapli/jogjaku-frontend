import { api } from '../config/restApi'

// GET All Destinations
const getAllEvents = async () =>
  api
    .get('/events')
    .then(({ data }) => data.events)
    .catch(({ response }) => Promise.reject(response));

// GET Destination by ID
const getEventByID = async (id) =>
  api
    .get(`/event/${id}`)
    .then((data) => data.data)
    .catch(({ response }) => Promise.reject(response));

const getEventTicket = async (id) =>
  api
    .get(`/destination/${id}`)
    .then(({ data }) => data.event.eventTickets)
    .catch(({ response }) => Promise.reject(response));

export { getAllEvents, getEventByID, getEventTicket }