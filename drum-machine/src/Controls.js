import React, {Component} from 'react';
import './Controls.css'



class Controls extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <button>ON / OFF</button>  {/* own function */}
                <input />
            </div>
        );
    }
}

export default Controls;