import React, { Component} from 'react';

//creation of class based component
export default class CommentBox extends Component {
  render() {
    return (
      <div className="comment-box">
        <textarea />
        <button>Submit comment</button>
      </div>
    );
  }
}
