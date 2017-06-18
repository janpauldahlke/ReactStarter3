import React, { Component} from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

//creation of class based component

//TODO promote class to redux container
class CommentBox extends Component {

  constructor(props) {
    super(props);
    this.state = { comment : '' };
  }

  handleChange(event) {
    this.setState({ comment : event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment : ''});
  }

  render() {
    return (
      <form onSubmit={ this.handleSubmit.bind(this) } className="comment-box input-group">
        <textarea
          value = { this.state.comment }
          onChange={ this.handleChange.bind(this) }/>
        <br/>
        <button type="submit"
          className="btn btn-default">
          Submit comment
        </button>
      </form>
    );
  }
}

//connect (mapsStateToProps= null,)
//due import line 3 we can mapState on actions
export default connect(null,actions)(CommentBox);
