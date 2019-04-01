import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import Profile from './Profile';
import PostsList from './PostsList';
import config from './config/config';

class Main extends Component {
  constructor() {
    super();
  }

  initializeFirebase() {
    firebase.initializeApp(config);
  }

  render() {
    this.initializeFirebase();
    return (
      <div className="flex-container">
        <Profile />
        <PostsList />
      </div>
    );
  }
}

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
