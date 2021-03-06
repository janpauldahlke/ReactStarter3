import React, { Component } from 'react';

//  create a higher order component
//  follow this pattern

/*
    1.  do not export a class, but wrap it
    2. in the function create a class
    3. render it in the return
    4. spread ...this.props on component to make props accsible also to the inner component
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

//in other file .. not this file
// we want to use it like this

//import Authentication;
//component that is to be wr^apped
//import Ressources
//const ComposedComponent = Authentication(Ressources);
//in some render method ...
//<ComposedComponent />

//connect to redux-store
import { connect } from 'react-redux';

export default function (ComposedComponent) {
  class Authentication extends Component{
    //how to access context on a component
    //static calls a class Level Property
    //will show in the entire project as
    // Authentication.contextTypes binds OBject to the class and not the instance
    static contextTypes = {
      router : React.PropTypes.object
    }

    /* experimenting with the router object
    componentWillMount() {
      this.context.router.push('/');
    }
    */

    componentWillMount(){
      if(!this.props.authenticated) {
        this.context.router.push('/');
      }
    }

    componentWillUpdate(nextProps){
      if(!nextProps.authenticated) {
        this.context.router.push('/');
      }
    }

    render() {
      //console.log(this.context);
      //console.log(this.props.authenticated);
      //console.log('rendering: ', ComposedComponent);
      return <ComposedComponent {...this.props}/>
    }
  }

  function mapStateToProps(state){
    return{
      authenticated : state.authenticated
    }
  }
  return connect(mapStateToProps)(Authentication);
}
