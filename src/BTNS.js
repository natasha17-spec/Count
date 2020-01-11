import React from 'react';
import './App.css';




class BTNS extends React.Component {
    render = () => {
let btnColor= this.props.count_start===5?'disabled':'';

        return (
            <div className='btns'>
            <div className='btn_border'>
                <button className={btnColor} onClick={this.props.count_value} disabled={this.props.count_start===5}>Inc</button>
            </div>
                <div className='btn_border'>
                <button onClick={this.props.setToZero}>Reset</button>
            </div>
            </div>
        )
    }
}
export default BTNS;

