import { GET_CUSTOMER } from "../types";
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
