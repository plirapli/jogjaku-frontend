import { authApi } from "../config/restApi";

// POST Order
const addOrder = async () =>
  authApi
    .post('/order')
    .then((data) => data)
    .catch(({ response }) => Promise.reject(response));

// GET Order History
const getOrderHistory = async () =>
  authApi
    .get('/order-history')
    .then(({ data }) => data.historyPayment)
    .catch(({ response }) => Promise.reject(response));

export { addOrder, getOrderHistory }