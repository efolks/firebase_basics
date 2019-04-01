import React, { Component } from 'react';
import { connect } from 'react-redux';

import NewPostForm from './NewPostForm';
import Post from './Post';

import { fetchPosts } from './redux/actions';

function PostsList({ posts }) {
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
      ))}
    </div>
  );
}

class PostsListContainer extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }

  render() {
    return <PostsList posts={this.props.posts} />;
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchPosts: () => {
      const thunk = fetchPosts();
      dispatch(thunk);
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsListContainer);
