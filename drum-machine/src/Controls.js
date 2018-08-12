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
            <div className="controls">
                <div>
                    <h6>ON / OFF</h6>
                    <button onClick={this.handleButton} className={btnClass}></button>
                </div>                
                <input id="display" value={inputValue} className={inputClass}/>
                {/* zamenjaj input z nekim drugim elementom.. zgleda da testi na FCC ne znajo prebrat value na inputu... zato en test sfali...*/}
            </div>
        );
    }
}

export default Controls;