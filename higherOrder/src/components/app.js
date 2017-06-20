import React, { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  render() {
    return (
      <div>React Boilerplate</div>
    );
  }
}

function mapStateToProps(state) {
  return { posts: state.props };
}
export default connect(mapStateToProps)(App);
