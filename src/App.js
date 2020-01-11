import React from 'react';
import './App.css';
import BTNS from "./BTNS";
import Value from "./Value";


class App extends React.Component {

    state={
      count_start:0
    };

    count_value = (newValue) => {
        if (this.state.count_start < 5) {
            this.setState({
                    count_start: this.state.count_start + 1
                }
            )
        }
    };

    setToZero = ()=> {
            this.setState({
                    count_start: 0
                }
            )
    };


    render = () => {
        return (
            <div className='counter_box'>
                <div className='counters'>
                    <div className='center'>
                        <Value count_start={this.state.count_start}/>
                        <BTNS count_value={this.count_value}
                              setToZero={this.setToZero}
                              count_start={this.state.count_start}/>
                    </div>
                </div>
            </div>
        )
    }
}
export default App;

