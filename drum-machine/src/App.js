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
        <div className="keypad">  {/* component */}
          <div className="drum-pad">  {/* component */}
            <button id="">Q</button>
            <audio className="clip" id="Q" src=""></audio>
            {/* 
              Properties:
                - button ID
                - audio ID
                - src
            */}
          </div>
          <Keypad />
          <div className="drum-pad">
            <button id="">W</button>
            <audio className="clip" id="W" src=""></audio>
          </div>
          <div className="drum-pad">
            <button id="">E</button>
            <audio className="clip" id="E" src=""></audio>
          </div>
          <div className="drum-pad">
            <button id="">A</button>
            <audio className="clip" id="A" src=""></audio>
          </div>
          <div className="drum-pad">
            <button id="">S</button>
            <audio className="clip" id="S" src=""></audio>
          </div>
          <div className="drum-pad">
            <button id="">D</button>
            <audio className="clip" id="D" src=""></audio>
          </div>
          <div className="drum-pad">
            <button id="">Z</button>
            <audio className="clip" id="Z" src=""></audio>
          </div>
          <div className="drum-pad">
            <button id="">X</button>
            <audio className="clip" id="X" src=""></audio>
          </div>
          <div className="drum-pad">
            <button id="">Y</button>
            <audio className="clip" id="Y" src=""></audio>
          </div>
        </div>
        <Controls />
      </div>
    );
  }
}

export default App;
