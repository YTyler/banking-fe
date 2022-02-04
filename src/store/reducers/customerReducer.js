import { GET_CUSTOMER, CREATE_CUSTOMER } from "../types";

const initialState = {
  customers: [],
  customer: {},
  createdCustomer: {},
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
    case CREATE_CUSTOMER:
      return {
        ...state,
        createdCustomer: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default customerReducer;
