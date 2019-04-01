import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import Profile from './Profile';
import PostsList from './PostsList';

class Main extends Component {
  constructor() {
    super();
    this.initializeFirebase = this.initializeFirebase.bind(this);
  }

  initializeFirebase() {
    const config = {
      apiKey: "AIzaSyClpKDyBBTrMMItJN-v8UwnJHQzbiPepdA",
      authDomain: "my-awesome-project1-3fbe0.firebaseapp.com",
      databaseURL: "https://my-awesome-project1-3fbe0.firebaseio.com",
      storageBucket: "my-awesome-project1-3fbe0.appspot.com",
    };
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
