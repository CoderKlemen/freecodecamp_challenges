import React, { Component } from 'react';
import './App.css';
import Keypad from './Keypad';
import Controls from './Controls';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: ''
    }
  }

  handleText = (dp) => {
    this.setState({
      pressed: dp,
    });
  };

  render() {
    return (
      <div id="drum-machine">
          <Keypad handleText={this.handleText}/>
          <Controls pressed={this.state.pressed}/>       
      </div>
    );
  }
}

export default App;
