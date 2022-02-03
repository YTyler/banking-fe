import { GET_ACCOUNT, ACCOUNT_ERROR } from "../types";
import axios from "../../axios/axiosConfig";

export const getAccount = (account_number) => async (dispatch) => {
  try {
    const res = await axios.get(`/accounts/${account_number}`);
    dispatch({
      type: GET_ACCOUNT,
      payload: res.data,
    });
  } catch (e) {
    console.log(e);
    dispatch({
      type: GET_ACCOUNT,
      payload: {},
    });
  }
};
