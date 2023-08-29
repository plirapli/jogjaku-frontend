import { authApi } from '../config/restApi'

// POST User Destination Cart
const addToCartDestination = async (ticket) =>
  authApi
    .post('/add-to-cart?type=destination', ticket)
    .then((data) => data)
    .catch(({ response }) => Promise.reject(response));

// POST User Event Cart
const addToCartEvent = async (ticket) =>
  authApi
    .post('/add-to-cart?type=event', ticket)
    .then((data) => data)
    .catch(({ response }) => Promise.reject(response));

// GET User Cart
const getUserCart = async () =>
  authApi
    .get('/cart')
    .then(({ data }) => data.data)
    .catch(({ response }) => Promise.reject(response));

// DELETE User Cart
const deleteCartByID = async (cartId) =>
  authApi
    .delete('/delete-cart-item', {
      data: {
        cartId
      }
    })
    .then((data) => data)
    .catch(({ response }) => Promise.reject(response));

export { addToCartDestination, addToCartEvent, getUserCart, deleteCartByID }