import React, {Component} from 'react';
import './Controls.css'



class Controls extends Component {

    handleButton = (event) => {
        event.preventDefault();
        this.props.handleButtonOnOff();
    }

    render() {
        const btnClass = this.props.onOff ? 'button-on' : 'button-off';
        const inputClass = this.props.onOff ? 'input-on' : 'input-off';

        const inputValue = this.props.onOff ? this.props.pressed : '';

        return (
            <div className="controls" >
                <div>
                    <h6>ON / OFF</h6>
                    <button onClick={this.handleButton}  className={btnClass}></button>
                </div>                
                { /*<input id="display1" value={inputValue} className={inputClass}/> */}
                <p id="display" className={inputClass}>{inputValue}</p>
            </div>
        );
    }
}

export default Controls;