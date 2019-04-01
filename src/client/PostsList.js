import React, { Component } from 'react';

import NewPostForm from './NewPostForm';
import Post from './Post';
import { data } from '../../data';
import firebase from 'firebase';
import { transform } from './utils/utils';

function PostsList( posts ) {
  const postMap = transform(posts);
  return (
    <div id="posts">
      <NewPostForm />
      <h3>Ash's posts:</h3>
      {postMap.map(post => (
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
  }

  componentDidMount() { // listener for updates
    const postRef = firebase.database().ref('posts/');
    postRef.on('value', (snapshot) => {
      const posts = transform(snapshot.val());
      this.setState({posts});
    });
  }

  render() {
    console.log("STATEEE", this.state);
    return this.state.posts ? <PostsList {...this.state.posts} /> : <p>No available posts</p>;
  }
}