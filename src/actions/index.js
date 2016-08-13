import axios from 'axios';
import { browserHistory } from 'react-router';

// const BASE_URL = 'https://cs52-blog.herokuapp.com/api';
// const BASE_URL = 'https://backend-hw5.herokuapp.com/api';
// const BASE_URL = 'https://backend-hw5pt2.herokuapp.com/api';
const BASE_URL = 'http://localhost:9090/api';

// keys for actiontypes
export const ActionTypes = {
  FETCH_POSTS: 'FETCH_POSTS',
  FETCH_POST: 'FETCH_POST',
  CREATE_POST: 'CREATE_POST',
  UPDATE_POST: 'UPDATE_POST',
  DELETE_POST: 'DELETE_POST',
  AUTH_USER: 'AUTH_USER',
  DEAUTH_USER: 'DEAUTH_USER',
  AUTH_ERROR: 'AUTH_ERROR',
};

// deletes token from localstorage
// and deauths
export function signoutUser() {
  return (dispatch) => {
    localStorage.removeItem('token');
    dispatch({
      type: ActionTypes.DEAUTH_USER,
    });
    browserHistory.push('/');
  };
}

// trigger to deauth if there is error
// can also use in your error reducer if you have one to display an error message
export function authError(error) {
  return {
    type: ActionTypes.AUTH_ERROR,
    message: error,
  };
}

//  https://cs52-blog.herokuapp.com/api/posts?key=YOURKEY
export function getAllPosts() {
  // ActionCreator returns a function
  // that gets called with dispatch
  return (dispatch) => {
    axios.get(`${BASE_URL}/posts/`).then(response => {
      console.log(response.data);
      dispatch({
        type: ActionTypes.FETCH_POSTS,
        payload: response.data,
      });
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
    axios.get(`${BASE_URL}/posts/${id}`).then(response => {
      console.log(response.data);
      dispatch({
        type: ActionTypes.FETCH_POST,
        payload: response.data,
      });
      // do something with response.data  (some json)
    }).catch(error => {
      // hit an error do something else!
      console.log('Error getting post by id');
    });
  };
}

//  https://cs52-blog.herokuapp.com/api/posts/POSTID?key=YOURKEY
export function deletePost(id) {
  return (dispatch) => {
    axios.delete(`${BASE_URL}/posts/${id}`, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      dispatch({
        type: ActionTypes.DELETE_POST,
        payload: null,
      });
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
  return (dispatch) => {
    axios.put(`${BASE_URL}/posts/${id}`, fields, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      console.log(response.data);
      dispatch({
        type: ActionTypes.UPDATE_POST,
        payload: null,
      });
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
    axios.post(`${BASE_URL}/posts`, fields, { headers: { authorization: localStorage.getItem('token') } }).then(response => {
      console.log(response.data);
      dispatch({
        type: ActionTypes.CREATE_POST,
        payload: null,
      });
      browserHistory.push('/');
      // do something with response.data  (some json)
    }).catch(error => {
      // hit an error do something else!
      console.log(error);
    });
  };
}

export function signinUser({ email, password }) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signin endpoint
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign In Failed: ${error.response.data}`));

  return (dispatch) => {
    axios.post(`${BASE_URL}/signin/`, { email, password }).then(response => {
      console.log('sign in called');
      dispatch({
        type: ActionTypes.AUTH_USER,
      });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    })
    .catch((error) => {
      dispatch(authError(`Sign In Failed: ${error.response.data}`));
    });
  };
}

export function signupUser({ email, password, username }) {
  // takes in an object with email and password (minimal user object)
  // returns a thunk method that takes dispatch as an argument (just like our create post method really)
  // does an axios.post on the /signup endpoint (only difference from above)
  // on success does:
  //  dispatch({ type: ActionTypes.AUTH_USER });
  //  localStorage.setItem('token', response.data.token);
  // on error should dispatch(authError(`Sign Up Failed: ${error.response.data}`));

  return (dispatch) => {
    axios.post(`${BASE_URL}/signup/`, { email, password, username }).then(response => {
      console.log('sign up called');
      dispatch({
        type: ActionTypes.AUTH_USER,
      });
      localStorage.setItem('token', response.data.token);
      browserHistory.push('/');
    })
    .catch((error) => {
      dispatch(authError(`Sign Up Failed: ${error.response.data}`));
    });
  };
}
