import { api } from '../config/restApi'

const regencyOption = [
  {
    name: 'Semua Lokasi',
    value: '',
  },
  {
    name: 'Sleman',
    value: 'sleman',
  },
  {
    name: 'Kota Yogyakarta',
    value: 'kota yogyakarta',
  },
  {
    name: 'Gunung Kidul',
    value: 'gunung kidul',
  },
  {
    name: 'Bantul',
    value: 'bantul',
  },
  {
    name: 'Kulon Progo',
    value: 'kulon progo',
  },
];

// GET All Destinations
const getAllDestinations = async () =>
  api
    .get('/destinations')
    .then((data) => data.data)
    .catch(({ response }) => Promise.reject(response));

const getAllDestinationsPerRegion = async () => {
  return api
    .get('/destinations')
    .then((data) => {
      const { destinations } = data.data
      const sleman = destinations.filter((destination) => destination.regency === 'Sleman')
      const yogyakarta = destinations.filter((destination) => destination.regency === 'Kota Yogyakarta')
      const gk = destinations.filter((destination) => destination.regency === 'Gunung Kidul')
      const kp = destinations.filter((destination) => destination.regency === 'Kulon Progo')
      const bantul = destinations.filter((destination) => destination.regency === 'Bantul')
      const allDestinations = {
        semua: [...destinations],
        yogyakarta: [...yogyakarta],
        sleman: [...sleman],
        kp: [...kp],
        bantul: [...bantul],
        gk: [...gk],
      }
      return allDestinations
    })
    .catch(({ response }) => Promise.reject(response));
}

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

export { regencyOption, getAllDestinations, getAllDestinationsPerRegion, getDestinationByID, getDestinationTicket }