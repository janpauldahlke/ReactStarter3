import { combineReducers } from 'redux';
import CommentsReducer from './comments';

const rootReducer = combineReducers({
  //fighting errors on missing state
  comments : CommentsReducer
  //original
  //state: (state = {}) => state
});

export default rootReducer;
