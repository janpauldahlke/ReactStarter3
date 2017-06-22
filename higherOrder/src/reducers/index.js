import { combineReducers } from 'redux';
import authenticationReducer from './authentication_reducer';
import showReducer from './show_reducer';

const rootReducer = combineReducers({
  authenticated : authenticationReducer,
  shown : showReducer
});

export default rootReducer;
