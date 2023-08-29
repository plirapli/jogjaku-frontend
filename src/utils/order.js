import { authApi } from "../config/restApi";
import { sortDateObject } from "./dateConverter";

// POST Order
const addOrder = async () =>
  authApi
    .post('/order')
    .then((data) => data)
    .catch(({ response }) => Promise.reject(response));

// GET All Order History
const getOrderHistory = async () =>
  authApi
    .get('/order-history')
    .then(({ data }) => sortDateObject(data.historyPayment))
    .catch(({ response }) => Promise.reject(response));

// GET Order Pending
const getOrderPending = async () =>
  authApi
    .get('/order-history')
    .then(({ data }) => sortDateObject(data.pendingPayment))
    .catch(({ response }) => Promise.reject(response));

// GET Active Ticket
const getActiveTicket = async () =>
  authApi
    .get('/order-history')
    .then(({ data }) => data.activeTicket)
    .catch(({ response }) => Promise.reject(response));

export { addOrder, getOrderHistory, getOrderPending, getActiveTicket }