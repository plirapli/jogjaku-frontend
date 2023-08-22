import { authApi } from "../config/restApi";

// POST Order
const addOrder = async () =>
  authApi
    .post('/order')
    .then((data) => data)
    .catch(({ response }) => Promise.reject(response));

export { addOrder }