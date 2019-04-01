import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createPost } from './redux/actions';

class NewPostForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      postText: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(changeEvent) {
    const inputValue = changeEvent.target.value;
    const stateField = changeEvent.target.name;
    this.setState({
      [stateField]: inputValue,
    });
  }

  handleSubmit(submitEvent) {
    submitEvent.preventDefault();
    this.props.createPost({
      text: this.state.postText
    });
    this.setState({
      postText: '',
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Post text:</label>
        <input
          value={this.state.postText}
          onChange={this.handleChange}
          name="postText"
          type="text"
        />
        <br />
        <button type="submit">Post</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createPost: post => {
      dispatch(createPost(post));
    },
  };
}

export default connect(
  null,
  mapDispatchToProps
)(NewPostForm);
