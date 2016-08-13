import React, { Component } from 'react';
import { connect } from 'react-redux';
import { signupUser } from '../actions';
import { Link } from 'react-router';

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
    };

    this.emailWasChanged = this.emailWasChanged.bind(this);
    this.passwordWasChanged = this.passwordWasChanged.bind(this);
    this.signUserUp = this.signUserUp.bind(this);
  }

  emailWasChanged(event) {
    this.setState({
      email: event.target.value,
    });
  }

  passwordWasChanged(event) {
    this.setState({
      password: event.target.value,
    });
  }

  signUserUp() {
    this.props.signupUser({
      email: this.state.email,
      password: this.state.password,
    });
  }

  render() {
    return (
      <div className="signup">
        <h1> Sign Up! </h1>

        <div id="email">
          <input placeholder="Enter your email" value={this.state.email} onChange={this.emailWasChanged} />
        </div>
        <div id="password">
          <input placeholder="Enter your password" value={this.state.password} onChange={this.passwordWasChanged} />
        </div>

        <div id="buttons">
          <div id="signup" onClick={this.signUserIn}>
            Sign Up
          </div>
          <Link to="/">Cancel</Link>
        </div>
      </div>
    );
  }

}
const mapDispatchToProps = (state) => (
  {
    authenticated: state.auth.authenticated,
  }
);

export default connect(mapDispatchToProps, signupUser)(SignUp);
