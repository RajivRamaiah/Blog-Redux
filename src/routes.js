import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './containers/main.js';
import App from './components/app.js';
import NewPost from './containers/create-post.js';
import ShowPost from './containers/display-post.js';
import SignUp from './components/sign-up';
import SignIn from './components/sign-in';
import RequireAuth from './containers/require-auth';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="posts/new" component={RequireAuth(NewPost)} />
    <Route path="posts/:id" component={ShowPost} />
    <Route path="/signup" component={SignUp} />
    <Route path="/signin" component={SignIn} />
  </Route>
);
