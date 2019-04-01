import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import Profile from './Profile';
import PostsList from './PostsList';
import config from './config/config';

class Main extends Component {
  constructor() {
    super();
    this.initializeFirebase = this.initializeFirebase.bind(this);
  }

  initializeFirebase() {
    firebase.initializeApp(config);
  }

  render() {
    this.initializeFirebase();
    console.log("FIREBASE: ", firebase);
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
