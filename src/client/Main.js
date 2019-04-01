import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import axios from 'axios';

import Profile from './Profile';
import PostsList from './PostsList';

class Main extends Component {
  render() {
    return (
      <div className="flex-container">
        <Profile />
        <PostsList />
      </div>
    );
  }
}

ReactDOM.render(
  <Provider store={store}>
    <Main />
  </Provider>,
  document.getElementById('app')
);
