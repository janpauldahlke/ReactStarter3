import React, { Component } from 'react';
import { connect } from 'react-redux';

//functional component approach
//  TODO create a react-container
//  containers have access to app state through redux
//  line 2 import
//  iterate over comments via props.comments.map()

const CommentList = (props) => {

  const list = props.comments.map(comment =>
    <li key="comment" >{ comment }</li>
  );

  return (
    <ul className="comment-list">{ list }</ul>
  );
}

//into redux containers
function mapStateToProps(state) {
  //TODO create a reducer for state.comments
  return {comments: state.comments};
}

//into redux container
export default connect(mapStateToProps)(CommentList);
