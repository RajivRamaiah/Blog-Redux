//  Rajiv Ramaiah, CS52, Summer '16
//  Looked through React-Youtube project from SA4 to refresh

import React, { Component } from 'react';

class NavBar extends Component {

  constructor(props) {
    super(props);

    this.state = {
      title: '',
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.createStickyNote = this.createStickyNote.bind(this);
  }

  render() {
    return (
      <div className="NavBar">
        <button type="Button"> New </button>
      </div>
    );
  }
}

export default NavBar;
