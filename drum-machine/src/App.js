import React, { Component } from 'react';
import Controls from './Controls';
import './App.css';
import Keypad from './Keypad';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="drum-machine">
        <Keypad />
        <Controls />
      </div>
    );
  }
}

export default App;
