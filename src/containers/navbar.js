//  Rajiv Ramaiah, CS52, Summer '16
//  Looked through React-Youtube project from SA4 to refresh
import { Link } from 'react-router';
import React from 'react';
import { connect } from 'react-redux';
import { signoutUser } from '../actions';

const NavBar = (props) => {
  let main;
  if (!props.authenticated) {
    main = (
      <div className="nav-not-auth">
        <Link to="/signin">
          <div id="signin-button">
            Sign In
          </div>
        </Link>
        <Link to="/signup">
          <div id="signup-button">
            Sign Up
          </div>
        </Link>
      </div>
    );
  } else {
    main = (
      <div className="nav-auth">
        <Link to="/posts/new">
          <div id="new">
            New Post
          </div>
        </Link>
        <Link to="/">
          <div id="signout" onClick={props.signoutUser}>
            Sign Out
          </div>
        </Link>
      </div>
    );
  }

  return (
    <div className="NavBar">
      <Link to="/">
        <div id="name">
          Welcome to the Adventures of Rajiv Ramaiah
        </div>
      </Link>
      {main}
    </div>
  );
};

const mapStateToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default connect(mapStateToProps, { signoutUser })(NavBar);
