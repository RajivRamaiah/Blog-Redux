import { combineReducers } from 'redux';
import AuthReducer from './auth-reducer';
import PostsReducer from './posts-reducer';


const allReducers = combineReducers({
  posts: PostsReducer,
  auth: AuthReducer,
});

export default allReducers;
