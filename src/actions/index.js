import axios from 'axios';
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
    axios.get(`${BASE_URL}/posts?key=${API_KEY}`).then(response => {
      dispatch({ type: ActionTypes.FETCH_POSTS, payload: { posts: response.data } });
      // do something with response.data  (some json)
    }).catch(error => {
      // hit an error do something else!
      console.log(error);
    });
  };
}

//  https://cs52-blog.herokuapp.com/api/posts/POSTID?key=YOURKEY
export function getPost(id) {
  return (dispatch) => {
    axios.get(`${BASE_URL}/posts/${id}?key=${API_KEY}`).then(response => {
      dispatch({
        type: ActionTypes.FETCH_POSTS,
        payload: { posts: response.data } });
      // do something with response.data  (some json)
    }).catch(error => {
      // hit an error do something else!
      console.log(error);
    });
  };
}

//  https://cs52-blog.herokuapp.com/api/posts/POSTID?key=YOURKEY
export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${BASE_URL}/posts/${id}?key=${API_KEY}`).then(response => {
      dispatch({
        type: ActionTypes.FETCH_POSTS,
        payload: { posts: response.data } });
      // do something with response.data  (some json)
    }).catch(error => {
      // hit an error do something else!
      console.log(error);
    });
  };
}

//  https://cs52-blog.herokuapp.com/api/posts/POSTID?key=YOURKEY
export function updatePost(id, post) {
  const parameters = { title: post.title, tags: post.tags, content: post.content };
  return (dispatch) => {
    axios.post(`${BASE_URL}/posts/${id}?key=${API_KEY}`, parameters).then(response => {
      dispatch({
        type: ActionTypes.FETCH_POSTS,
        payload: { posts: response.data } });
      // do something with response.data  (some json)
    }).catch(error => {
      // hit an error do something else!
      console.log(error);
    });
  };
}

//  https://cs52-blog.herokuapp.com/api/posts/?key=YOURKEY
export function createPost(post) {
  const parameters = { title: post.title, tags: post.tags, content: post.content };
  return (dispatch) => {
    axios.put(`${BASE_URL}/posts?key=${API_KEY}`, parameters).then(response => {
      dispatch({
        type: ActionTypes.FETCH_POSTS,
        payload: { posts: response.data } });
      // do something with response.data  (some json)
    }).catch(error => {
      // hit an error do something else!
      console.log(error);
    });
  };
}
