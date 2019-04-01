import React, { Component } from 'react';

import NewPostForm from './NewPostForm';
import Post from './Post';
import { data } from '../../../data';

function PostsList({ posts }) {
  console.log("POSTS", posts)
  return (
    <div id="posts">
      <NewPostForm />
      <h3>Ash's posts:</h3>
      {posts.map(post => (
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
    this.state = data;
  }

  render() {
    console.log("STATEEE", this.state);
    return <PostsList {...this.state} />;
  }
}