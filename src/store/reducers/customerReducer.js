import { GET_CUSTOMER } from "../types";

const initialState = {
  customers: [],
  customer: {},
  loading: true,
};

function customerReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CUSTOMER:
      return {
        ...state,
        customer: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default customerReducer;
