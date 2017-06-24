import React, { Component} from 'react';
import { connect } from 'react-redux';

class Userlist extends Component {

  renderUser(user) {
    return (
      <div className="card card-block">
        <h4 className="card-title">{user.name}</h4>
        <h4 className="card-text">OCP</h4>
        <a className="btn btn-primary">mail@ocp.com</a>
      </div>
    );
  }

  render() {
    return (
      <div>
        { this.props.users.map(this.renderUser)}
      </div>
    );
  }
}
