import {SHOW_TIMED} from '../actions/types'

export default function(state=true, action) {
  switch(action.type) {
    case SHOW_TIMED :
      return action.payload;
  }
  return state;
}
