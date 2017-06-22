import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Header extends Component {

    constructor(props){
      super(props);
      this.hideHeadline = this.hideHeadline.bind(this);
    }

    componentDidMount () {
      this.timeoutId = setTimeout(function () {
          this.setState({show: true});
      }.bind(this), 1000);
    }

    componentWillUnmount () {
      if (this.timeoutId) {
          clearTimeout(this.timeoutId);
      }
    }
    //https://stackoverflow.com/questions/30803440/delayed-rendering-of-react-components
  hideHeadline(){
    function setTimeout(){function(){
      return <div>show magic</div>
    }, 10000}
  }

  authButton(){

    //refers to reducer key field

    console.log(this.props.authenticated);
    if (this.props.authenticated) {

      // refers to function name of exported func in index.js
      return <button onClick={() => this.props.authenticate(false)} className="btn">Sign out</button>;
    }
    return <button onClick={() => this.props.authenticate(true)} className="btn">Sign In</button>;
  }

  render() {
    return (
      <nav className="navbar navbar-ligth">
        {this.hideHeadline()}
        <ul className="navbar navbar-nav">
          <li className="nav-item">
            <Link to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/ressources">Ressources</Link>
          </li>
          <li className="nav-item {this.timerHide()}">
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
  return { authenticated : state.authenticated};
}

//through this we can refer to this.props.authenticated props are bind to state
//also pass actions as nd arg in connect (1)
export default connect(mapStateToProps, actions)(Header);
