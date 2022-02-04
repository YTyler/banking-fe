import { combineReducers } from "redux";
import userReducer from "./userReducer";
import accountReducer from "./accountReducer";
import customerReducer from "./customerReducer";

export default combineReducers({
  userState: userReducer,
  accountState: accountReducer,
  customerState: customerReducer,
});
