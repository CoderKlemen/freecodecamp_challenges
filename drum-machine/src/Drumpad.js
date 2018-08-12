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
        if (this.props.onOff) {
            let audio = new Audio(sounds[this.props.value].link);
            audio.load();
            audio.play();
            this.props.handleText(sounds[this.props.value].name);
        }    
    }

    render() {
        const btnClass = this.props.onOff ? 'button-on' : 'button-off';

        return (
            <div className="drum-pad" id={sounds[this.props.value].name}>
                <button onClick={this.handleClick} className={btnClass}><strong>{this.props.value}</strong></button>
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