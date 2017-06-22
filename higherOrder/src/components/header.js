import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {

  authButton(){

    if (this.props.authenticated) {
      // refers to function name of exported func in index.js
        return <button onClick={() => this.props.authenticate(false)} className="btn">Sign out</button>
    }

    return <button onClick={() => this.props.authenticate(true)} className="btn">Sign In</button>;
  }

  render() {
    return (
      <nav className="navbar navbar-ligth">
        <ul className="navbar navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/ressources">Ressources</Link>
          </li>
          <li className="nav-item">
            <Link to="/"></Link>
              { this.authButton() }
          </li>
        </ul>
      </nav>
    );
  }
}


function mapStateToProps(state){
  //return as * from reducer key field
  return { authenticated : state.authenticated}
}

//through this we can refer to this.props.authenticated props are bind to state
//also pass actions as nd arg in connect (1)
export default connect(mapStateToProps, actions)(Header);
