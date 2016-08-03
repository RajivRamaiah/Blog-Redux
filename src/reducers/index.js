import { combineReducers } from 'redux';

import PostsReducer from './posts-reducer';

const allReducers = combineReducers({
  posts: {
    all: [],
    post: null,
  },
});

export default allReducers;
