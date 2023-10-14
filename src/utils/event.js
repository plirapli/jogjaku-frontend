import { api } from '../config/restApi'

// GET All Events
const getAllEvents = async () =>
  api
    .get('/events')
    .then(({ data }) => data.events)
    .catch((response) => Promise.reject(response));

// GET All Events (Filtered lol)
const getAllEventsFiltered = async () =>
  api
    .get('/events')
    .then(({ data }) => {
      const forbID = [3, 4, 5, 6, 8, 11]
      const filtered = (data.events).filter(event => !forbID.includes(event.id))
      return filtered
    })
    .catch((response) => Promise.reject(response));

// GET 3 Events
const getAllEventsLimit = async () =>
  api
    .get('/events')
    .then(({ data }) => (data.events).slice(0, 3))
    .catch((response) => Promise.reject(response));

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

export { getAllEvents, getAllEventsFiltered, getAllEventsLimit, getAllEventsCalendar, getEventByID, getEventTicket }