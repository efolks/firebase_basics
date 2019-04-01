import { ADD_POST, RECEIVE_POSTS } from './actions';

const initialState = {
  posts: [],
};

export default function reducer(state = initialState, action) {
  const newState = { ...state };
  switch (action.type) {
    case ADD_POST:
      newState.posts = [...state.posts, action.payload];
      return newState;
    case RECEIVE_POSTS:
      newState.posts = action.payload;
      return newState;
    default:
      return state;
  }
}
