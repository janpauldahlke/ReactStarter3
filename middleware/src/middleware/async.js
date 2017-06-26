//middleware has always this function signature
//  1. call dispatch
//  2. call next
//  3. call action


export default function({ dispatch }){
  /*return next => action => {
    console.log(action);
    next(action);
  };*/

  //vanilla ex5
  return function( next ) {
    return function( action ){
      console.log( action );
      next(action);
    }
  }
}
