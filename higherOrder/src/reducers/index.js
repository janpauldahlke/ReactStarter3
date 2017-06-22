import { combineReducers } from 'redux';
import authenticationReducer from './authentication_reducer';

const rootReducer = combineReducers({
  autenticated : authenticationReducer
});

export default rootReducer;
