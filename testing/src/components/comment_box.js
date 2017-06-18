import React, { Component} from 'react';

//creation of class based component
export default class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = { comment :''};
  }

  handleChange(event) {
    this.setState({comment : event.target.value});
  }

  render() {
    return (
      <div className="comment-box input-group">
        <textarea
          value = {this.state.comment}
          onChange={this.handleChange.bind(this)}/>
        <button className="btn btn-default">Submit comment</button>
      </div>
    );
  }
}
