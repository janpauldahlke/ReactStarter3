import React, { Component } from 'react';

//  create a higher order component
//  follow this pattern

/*
    1.  do not export a class, but wrap it
    2. in the function create a class
    3. render it in the return
    4. spread this.props on component
    5.  return the inner Class within the function
//

export default function (ComposedComponent) {
  class Authentication extends Component{
    render() {
      return <ComposedComponent {...this.props}/>
    }
  }
  return Authentication;
}
*/


export default function (ComposedComponent) {
  class Authentication extends Component{
    render() {
      return <ComposedComponent {...this.props}/>
    }
  }
  return Authentication;
}
