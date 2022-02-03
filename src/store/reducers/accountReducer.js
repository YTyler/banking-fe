import { GET_ACCOUNT } from "../types";

const initialState = {
  accounts: [],
  account: {},
  loading: true,
};

function accountReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACCOUNT:
      return {
        ...state,
				account: action.payload,
        loading: false,
      };
    default:
      return state;
  }
}

export default accountReducer;
