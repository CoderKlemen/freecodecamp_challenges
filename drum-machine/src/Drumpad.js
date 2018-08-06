import React, {Component} from 'react';
import './Drumpad.css'
import { sounds } from './Variables'


class Drumpad extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="drum-pad" id={sounds[this.props.value].name}>
                <button >{this.props.value}</button>
                <audio className="clip" id={this.props.value} src={sounds[this.props.value].link} preload="auto" type="audio/mpeg"/>
            </div>
        );
    }
}


export default Drumpad;