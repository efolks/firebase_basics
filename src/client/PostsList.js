import React, { Component } from 'react';

import NewPostForm from './NewPostForm';
import Post from './Post';
import firebase from 'firebase';
import { transform } from './utils/utils';

function PostsList(posts) {
  const postMap = transform(posts);
  return (
    <div id="posts">
      <NewPostForm />
      <h3>Ash's posts:</h3>
      {
        postMap.map(post => (
          <Post
            key={post.id}
            text={post.text}
          />
        ))
      }
    </div>
  );
}

export default class PostsListContainer extends Component {
  constructor() {
    super();
    this.state = {};
    this.ref = firebase.database().ref('posts/')
  }

  componentDidMount() { // listener for updates
    this.ref.on('value', (snapshot) => {
      const posts = transform(snapshot.val());
      this.setState({ posts });
    });
  }

  componentWillUnmount() {
    this.ref.off('value')
  }

  render() {
    console.log("STATEEE", this.state);
    return this.state.posts ? <PostsList {...this.state.posts} /> : <p>No available posts</p>;
  }
}