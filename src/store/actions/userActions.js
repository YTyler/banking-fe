import { GET_USERS, LOGIN_USER, USERS_ERROR } from "../types";
import axios from "../../axios/axiosConfig";

export const getUsers = () => async (dispatch) => {
  try {
    const res = await axios.get("/users");
    dispatch({
      type: GET_USERS,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e),
    });
  }
};

export const loginUser = (username, password) => async (dispatch) => {
  try {
    const res = await axios.post(`/users/login`, { username, password });
    dispatch({
      type: LOGIN_USER,
      payload: res.data,
    });
  } catch (e) {
    dispatch({
      type: USERS_ERROR,
      payload: console.log(e),
    });
  }
};
