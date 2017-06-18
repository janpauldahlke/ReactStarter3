import React, { Component } from 'react';

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

const CommentList = (props) => {
  return (
    <ul className="comment-list"></ul>
  );
}

export default CommentList;
