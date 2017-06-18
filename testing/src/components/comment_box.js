import React, { Component} from 'react';

//creation of class based component
export default class CommentBox extends Component {
  render() {
    return (
      <div className="comment-box input-group">
        <textarea />
        <button className="btn btn-default">Submit comment</button>
      </div>
    );
  }
}
