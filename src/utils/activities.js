import { api } from '../config/restApi'
import Trekking from '../assets/trekking.svg';
import Hiking from '../assets/hiking.svg';
import Offroad from '../assets/off_road.svg';
import Camping from '../assets/camping.svg';
import Shopping from '../assets/belanja.svg';

const activityType = [
  {
    name: 'Trekking',
    value: 'trekking',
    img: Trekking,
  },
  {
    name: 'Camping',
    value: 'camping',
    img: Camping,
  },
  {
    name: 'Off-Road',
    value: 'off-road',
    img: Offroad,
  },
  {
    name: 'Rekreasi Olahraga',
    value: 'rekreasi',
    img: Hiking,
  },
  {
    name: 'Berbelanja',
    value: 'berbelanja',
    img: Shopping,
  },
];

const activityTypeOption = [
  {
    name: 'Semua',
    value: '',
  },
  ...activityType
];

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

export { activityType, activityTypeOption, getAllActivites, getActivityByID }