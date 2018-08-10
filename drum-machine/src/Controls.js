import React, {Component} from 'react';
import './Controls.css'



class Controls extends Component {
    constructor(props) {
        super(props);
    }

    handleButton = (event) => {
        event.preventDefault();
    }

    render() {
        return (
            <div className="controls">
                <button onClick={this.handleButton}>ON / OFF</button>
                <input id="display" value={this.props.pressed}/>
            </div>
        );
    }
}

export default Controls;