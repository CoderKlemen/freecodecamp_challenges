import React, { Component } from 'react';
import './App.css';
import Keypad from './Keypad';
import Controls from './Controls';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: '',
      on: true,
    }
  }

  handleText = (dp) => {
    this.setState({
      pressed: dp,
    });
  };

  handleButtonOnOff = () => {
    this.setState({
      on: !this.state.on,
    })
  }

  render() {
    return (
      <div id="drum-machine">
          <Keypad handleText={this.handleText}/>
          <Controls pressed={this.state.pressed} handleButtonOnOff={this.handleButtonOnOff} onOff={this.state.on}/>       
      </div>
    );
  }
}

export default App;
