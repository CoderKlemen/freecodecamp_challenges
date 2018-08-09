import React, { Component } from 'react';
import Controls from './Controls';
import './App.css';
import Keypad from './Keypad';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Q: false,
      W: false,
      E: false,
      A: false,
      S: false,
      d: false,
      Z: false,
      X: false,
      C: false
    }
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
