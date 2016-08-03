import React, { Component } from 'react';
import NavBar from './navbar.js';
import Main from '../containers/main.js';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div id="Root">
        <NavBar />
        <Main />
        {this.props.children}
      </div>
    );
  }
}

export default App;
