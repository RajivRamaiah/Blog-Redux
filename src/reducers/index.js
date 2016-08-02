import { combineReducers } from 'redux';

import PostsReducer from './posts-reducer';

const rootReducer = combineReducers({
  posts: {
    all: [],
    post: null,
  },
});

export default rootReducer;
