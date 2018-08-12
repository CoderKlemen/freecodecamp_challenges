import React, { Component } from 'react';
import './App.css';
import Keypad from './Keypad';
import Controls from './Controls';
import { sounds } from './Variables'

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pressed: '',
      on: false,
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
      pressed: this.state.on ? this.state.pressed : '',
    })
  }

  handleKeyDown = (event) => {
    event.preventDefault();
    const buttonPressed = event.key;
    const drumKeys = ['q','w','e','a','s','d','z','x','c','Q','W','E','A','S','D','Z','X','C'];
    if (this.state.on && drumKeys.includes(buttonPressed)) {
        let audio = new Audio(sounds[buttonPressed.toUpperCase()].link);
        audio.load();
        audio.play();
        this.handleText(sounds[buttonPressed.toUpperCase()].name);
    }
  }

  componentWillMount(){
    document.addEventListener("keydown", this.handleKeyDown.bind(this));
  };


  componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyDown.bind(this));
  };


  render() {
    return (
      <div id="drum-machine">
          <Keypad handleText={this.handleText} 
                  onOff={this.state.on}
          />
          <Controls pressed={this.state.pressed} 
                    handleButtonOnOff={this.handleButtonOnOff} 
                    onOff={this.state.on}
          />       
      </div>
    );
  }
}

export default App;
