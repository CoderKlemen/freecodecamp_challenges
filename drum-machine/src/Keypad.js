import React, {Component} from 'react';
import './Keypad.css'
import Drumpad from './Drumpad'
import { keys } from './Variables'


class Keypad extends Component {
    render() {

        const drumpadKeys = keys.map( item => <Drumpad key={item} value={item} handleText={this.props.handleText} onOff={this.props.onOff}/>)
        
        return (
            <div className="keypad">
                {drumpadKeys}
            </div>
        );
    }
}


export default Keypad;