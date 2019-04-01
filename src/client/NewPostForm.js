import React, { Component } from 'react';
import firebase from 'firebase';

export default class NewPostForm extends Component {
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
    // write to our firebase
    const database = firebase.database();
    const newPostKey = database.ref().child('posts').push().key;
    database.ref(`posts/${newPostKey}`).set({
      text: this.state.postText,
      id: newPostKey
    });
    this.setState({postText: ''})
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
