import { CHANGE_AUTH, SHOW_TIMED } from './types'


export function authenticate(isLoggedIn){
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  };
}

export function show(isShowing){
  return {
    type: SHOW_TIMED,
    payload: isShowing
  };
}
