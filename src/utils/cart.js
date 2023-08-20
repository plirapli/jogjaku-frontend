import { authApi } from '../config/restApi'

// POST User Cart
const addToCartDestination = async (ticket) =>
  authApi
    .post('/add-to-cart?type=destination', ticket)
    .then((data) => data)
    .catch(({ response }) => Promise.reject(response));

const getUserCart = async () =>
  authApi
    .get('/cart')
    .then(({ data }) => data.data)
    .catch(({ response }) => Promise.reject(response));

export { addToCartDestination, getUserCart }