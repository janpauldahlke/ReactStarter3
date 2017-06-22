import React, { Component } from 'react';
import { Link } from 'react-router';

class Header extends Component {

  authButton(){
    return <button className="btn">Sign In</button>;
  }

  render() {
    return (
      <nav className="navbar navbar-ligth">
        <ul className="navbar navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/resssources">Ressources</Link>
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


export default Header;
