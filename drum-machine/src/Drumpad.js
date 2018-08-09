import React, {Component} from 'react';
import './Drumpad.css'
import { sounds } from './Variables'


class Drumpad extends Component {
    constructor(props) {
        super(props);
        
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(event) {
        event.preventDefault();
        // console.log(this.props.value);
        let audio = new Audio(sounds[this.props.value].link);
        audio.load();
        audio.play();
    }

    render() {
        return (
            <div className="drum-pad" id={sounds[this.props.value].name}>
                <button onClick={this.handleClick}><strong>{this.props.value}</strong></button>
                <audio  className="clip" 
                        id={this.props.value} 
                        preload="auto" 
                        src={sounds[this.props.value].link} 
                        type="audio/mpeg">                   
                </audio>
            </div>
        );
    }
}


export default Drumpad;