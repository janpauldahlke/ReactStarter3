import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  //fighting errors on missing state
  comments : (state = []) => state

  //original
  //state: (state = {}) => state
});

export default rootReducer;
