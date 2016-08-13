//  Rajiv Ramaiah, CS52, Summer '16
//  Looked through React-Youtube project from SA4 to refresh
import { Link } from 'react-router';
import React from 'react';
import { connect } from 'react-redux';
import { signoutUser } from '../actions';

const NavBar = (props) => {
  if (props.authenticated) {
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
  } else {
    return (
      <div className="NavBar">
        <Link to="/signin">
          <div id="Sign-In">
            Sign In
          </div>
        </Link>
        <Link to="/signup">
          <div id="Sign-Up">
            Sign Up
          </div>
        </Link>
      </div>
    );
  }
};

const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, { signoutUser })(NavBar);
