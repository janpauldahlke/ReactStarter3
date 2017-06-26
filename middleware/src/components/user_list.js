import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions'

class Userlist extends Component {

  componentWillMount() {
    this.props.fetchUsers();
  }

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
      <div className="user-list">
        { this.props.users.map(this.renderUser)}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users
  }
}

export default connect(mapStateToProps, actions)(Userlist);
