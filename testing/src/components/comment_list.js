import React, { Component } from 'react';
import { connect } from 'react-redux';

//class based approach
/*
export default class CommentList extends Component{

  render() {
    return (
      <div className="comment-list">
        <h3>Comments List</h3>
        <ul>
          <li></li>
        </ul>
      </div>
    );
  }
}
*/

//functional component approach
//  TODO create a react-container
//  containers have access to app state through redux
//  line 2 import
const CommentList = (props) => {

  return (
    <ul className="comment-list"></ul>
  );
}

//into redux containers
function mapStateToProps(state) {
  //TODO create a reducer for state.comments
  return {comments: state.comments};
}

//
export default connect()(CommentList);
