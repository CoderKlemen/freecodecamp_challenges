import React, {Component} from 'react';
import './Keypad.css'
import Drumpad from './Drumpad'


class Keypad extends Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                <Drumpad />

            </div>
        );
    }
}


export default Keypad;