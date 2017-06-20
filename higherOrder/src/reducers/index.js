import { combineReducers } from 'redux';
import { inviteReducer } from './reducer_invite';

const rootReducer = combineReducers({
  invite : inviteReducer
});

export default rootReducer;
