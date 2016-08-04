import axios from 'axios';
import { browserHistory } from 'react-router';

const BASE_URL = 'https://cs52-blog.herokuapp.com/api';
const API_KEY = 'r_ramaiah';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
};

//  https://cs52-blog.herokuapp.com/api/posts?key=YOURKEY
export function getAllPosts() {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    axios.get(`${BASE_URL}/posts/?key=${API_KEY}`).then(response => {
      console.log(response.data);
      dispatch({
        type: ActionTypes.FETCH_POSTS,
        payload: response.data });
      // do something with response.data  (some json)
    }).catch(error => {
      // hit an error do something else!
      console.log('Error getting all posts');
    });
  };
}

//  https://cs52-blog.herokuapp.com/api/posts/POSTID?key=YOURKEY
export function getPost(id) {
  return (dispatch) => {
    axios.get(`${BASE_URL}/posts/${id}?key=${API_KEY}`).then(response => {
      dispatch({
        type: ActionTypes.FETCH_POST,
        payload: response.data });
      // do something with response.data  (some json)
    }).catch(error => {
      // hit an error do something else!
      console.log('Error getting post by id');
    });
  };
}

//  https://cs52-blog.herokuapp.com/api/posts/POSTID?key=YOURKEY
export function deletePost(id) {
  console.log('deleting');
  return (dispatch) => {
    axios.delete(`${BASE_URL}/posts/${id}?key=${API_KEY}`).then(response => {
      dispatch({
        type: ActionTypes.DELETE_POST,
        payload: null });
      browserHistory.push('/');
      // do something with response.data  (some json)
    }).catch(error => {
      // hit an error do something else!
      console.log('Error deleting post by id');
    });
  };
}

//  https://cs52-blog.herokuapp.com/api/posts/POSTID?key=YOURKEY
export function updatePost(id, fields) {
  console.log(`updating ${id}`);
  return (dispatch) => {
    axios.put(`${BASE_URL}/posts/${id}?key=${API_KEY}`, fields).then(response => {
      dispatch({
        type: ActionTypes.UPDATE_POST,
        payload: null });
      // do something with response.data  (some json)
    }).catch(error => {
      // hit an error do something else!
      console.log('Error updating post');
    });
  };
}

//  https://cs52-blog.herokuapp.com/api/posts/?key=YOURKEY
export function createPost(fields) {
  return (dispatch) => {
    axios.post(`${BASE_URL}/posts/?key=${API_KEY}`, fields).then(response => {
      console.log(response.data);
      dispatch({
        type: ActionTypes.CREATE_POST,
        payload: null });
      browserHistory.push('/');
      // do something with response.data  (some json)
    }).catch(error => {
      // hit an error do something else!
      console.log(error);
    });
  };
}
