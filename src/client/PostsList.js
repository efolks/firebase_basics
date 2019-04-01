import React, { Component } from 'react';

import NewPostForm from './NewPostForm';
import Post from './Post';

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
             altText={post.altText}
           />
          ))
      }
    </div>
  );
}

export default class PostsListContainer extends Component {
  constructor() {
    super();
    this.state = {
      posts: [
        {
          id: 1,
          text: "Hey check me outttt",
          altText: "Here's some alt text"
        },
        {
          id: 2,
          text: "I love this song",
          altText: "Here's some alt text"
        }
      ]
    }
  }

  render() {
    console.log("STATEEE", this.state);
    return <PostsList {...this.state} />;
  }
}