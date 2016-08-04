import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Main from './containers/main.js';
import App from './components/app.js';
import NewPost from './containers/create-post.js';
import ShowPost from './containers/display-post.js';

export default(
  <Route path="/" component={App}>
    <IndexRoute component={Main} />
    <Route path="posts/new" component={NewPost} />
    <Route path="posts/:id" component={ShowPost} />
  </Route>
);
