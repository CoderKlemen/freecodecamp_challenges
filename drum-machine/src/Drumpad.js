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
            document.getElementById(this.props.value).play();
            document.getElementById('display').innerHTML = sounds[this.props.value].name;
            // this.props.handleText(sounds[this.props.value].name);                      
            /*const audio = new Audio(sounds[this.props.value].link);          
            audio.load();
            audio.play();*/
        }    
    }

    render() {
        const btnClass = this.props.onOff ? 'button-on' : 'button-off';

        return (
            <div className="drum-pad" id={sounds[this.props.value].name} onClick={this.handleClick}>
                <button className={btnClass}><strong>{this.props.value}</strong></button>
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