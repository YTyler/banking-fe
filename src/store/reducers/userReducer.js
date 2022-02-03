import { GET_USERS, LOGIN_USER } from "../types";

const initialState = {
  users: [],
  currentUser: {},
  loading: true,
};

function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case LOGIN_USER:
      return {
        ...state,
        currentUser: action.payload,
        loading: false,
      };

    default:
      return state;
  }
}

export default userReducer;
