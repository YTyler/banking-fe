import { combineReducers } from 'redux'
import userReducer from './userReducer'
import accountReducer from './accountReducer'

export default combineReducers({
  userState: userReducer,
  accountState: accountReducer
})