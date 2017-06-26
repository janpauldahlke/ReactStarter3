//middleware has always this function signature
//  1. call dispatch
//  2. call next
//  3. call action
//  next calls the next middleware, if there is none pipe to reducer


export default function({ dispatch }){
  return next => action => {
    //action doesnt have a payload or funny way to ask for promise.then prop
    if( !action.payload || !action.payload.then ){
      return next(action);
    }
    //resolve promise
    action.payload
      .then(function(response) {
        //create a new action with the old type
        //but replace the promise with the response data
        const newAction =  {...action, payload:response};
        //return val via dispatch
        dispatch(newAction);
      });
  }

  //vanilla ex5
  /*return function( next ) {
    return function( action ){
      console.log( action );
      next(action);
    }
  }*/
}
