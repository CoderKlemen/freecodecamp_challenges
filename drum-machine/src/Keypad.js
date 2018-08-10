import React, {Component} from 'react';
import './Keypad.css'
import Drumpad from './Drumpad'
import { keys, sounds } from './Variables'


class Keypad extends Component {
    constructor(props) {
        super(props);

    }

    render() {

        const drumpadKeys = keys.map( item => <Drumpad key={item} value={item} handleText={this.props.handleText}/>)
        
        return (
            <div className="keypad">
                {drumpadKeys}
            </div>
        );
    }
}


export default Keypad;