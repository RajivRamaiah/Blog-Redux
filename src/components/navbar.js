//  Rajiv Ramaiah, CS52, Summer '16
//  Looked through React-Youtube project from SA4 to refresh
import { Link } from 'react-router';
import React from 'react';

const NavBar = () => {
  return (
    <div className="NavBar">
      <Link to="/">
        <div id="name">
          Welcome to the Adventures of Rajiv Ramaiah
        </div>
      </Link>
      <Link to="/posts/new">
        <div id="new">
          New Post
        </div>
      </Link>
    </div>
  );
};

export default NavBar;
