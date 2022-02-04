import { CREATE_CUSTOMER, CUSTOMER_ERROR, GET_CUSTOMER } from "../types";
import axios from "../../axios/axiosConfig";

export const getCustomerByPan = (pan) => async (dispatch) => {
  try {
    const res = await axios.get(`/customers/pan/${pan}`);
    dispatch({
      type: GET_CUSTOMER,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: GET_CUSTOMER,
      payload: {},
    });
  }
};

export const createCustomer = (customer, user) => async (dispatch) => {
  try {
    const res = await axios.post("/customers", {
      ...customer,
      user: {
        ...user,
      },
    });
    dispatch({
      type: CREATE_CUSTOMER,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: CUSTOMER_ERROR,
      payload: console.log(e),
    });
  }
};
