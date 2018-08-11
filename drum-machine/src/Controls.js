import React, {Component} from 'react';
import './Controls.css'



class Controls extends Component {
    constructor(props) {
        super(props);
    }

    handleButton = (event) => {
        event.preventDefault();
        this.props.handleButtonOnOff();
    }

    

    render() {
        const text = this.props.onOff ? 'ON' : 'OFF';

        return (
            <div className="controls">
                <div>
                    <h6>ON / OFF</h6>
                    <button onClick={this.handleButton}></button>
                </div>                
                <input id="display" value={this.props.pressed}/>
            </div>
        );
    }
}

export default Controls;