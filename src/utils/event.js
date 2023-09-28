import { api } from '../config/restApi'

// GET All Events
const getAllEvents = async () =>
  api
    .get('/events')
    .then(({ data }) => data.events)
    .catch(({ response }) => Promise.reject(response));

// GET All Events Group by Month
const getAllEventsCalendar = async () =>
  api
    .get('/events/calendar')
    .then(({ data }) => data.events2023)
    .catch(({ response }) => Promise.reject(response));

// GET Destination by ID
const getEventByID = async (id) =>
  api
    .get(`/event/${id}`)
    .then(({ data }) => data.event)
    .catch(({ response }) => Promise.reject(response));

const getEventTicket = async (id) =>
  api
    .get(`/destination/${id}`)
    .then(({ data }) => data.event.eventTickets)
    .catch(({ response }) => Promise.reject(response));

export { getAllEvents, getAllEventsCalendar, getEventByID, getEventTicket }