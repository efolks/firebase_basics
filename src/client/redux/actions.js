import axios from 'axios';

export const ADD_POST = 'ADD_POST';
export const RECEIVE_POSTS = 'RECEIVE_POSTS';

export function addPost(post) {
  return {
    type: ADD_POST,
    payload: post,
  };
}

export function createPost(newPost) {
  return async function(dispatch) {
    const response = await axios.post('/api/posts', newPost);
    const createdPost = response.data;
    const reduxAction = addPost(createdPost);
    dispatch(reduxAction);
  };
}

export function receivePosts(posts) {
  return {
    type: RECEIVE_POSTS,
    payload: posts,
  };
}

export function fetchPosts() {
  return async function(dispatch) {
    const responseFromServer = await axios.get('/api/posts');
    const posts = responseFromServer.data;
    const action = receivePosts(posts);
    dispatch(action);
  };
}
