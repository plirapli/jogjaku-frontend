import { authApi } from '../config/restApi'

// POST User Cart
const addToCart = async (ticket) =>
  authApi
    .post('/add-to-cart', ticket)
    .then((data) => data)
    .catch(({ response }) => Promise.reject(response));

export { addToCart }