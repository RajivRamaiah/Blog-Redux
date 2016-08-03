import React from 'react';
import Controls from '../containers/controls';
import Counter from '../containers/counter';
import NavBar from './navbar.js';


// function based "dumb" component with no state
const Welcome = () => {
  return (
    <div>
      react+redux+react-router+webpack+babel+eslint starter
      <NavBar />
      <Counter />
      <Controls />
    </div>
  );
};


export default Welcome;
