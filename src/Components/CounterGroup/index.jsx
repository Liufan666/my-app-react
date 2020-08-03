import React, { Component } from 'react'
import Counter from '../Counter'
class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            totalNumber: 0,
            sizeTime: 0
        }
    }

    handleResize = (event) => {
        if (event.target.value != this.state.size) {
            this.setState({
                size: event.target.value ? parseInt(event.target.value) : 0,
                totalNumber: 0
            });
        }
    }

    handleIncrease = (event) => {
        this.setState((prevState) => ({
            totalNumber: prevState.totalNumber + 1
        }));
    }

    handleDecrease = (event) => {
        this.setState((prevState) => ({
            totalNumber: prevState.totalNumber - 1
        }));

    }

    render() {
        const intArray = [...Array(this.state.size).keys()]

        return <div>
            <label>
                Group Size
                <input onBlur={this.handleResize} ></input>
            </label>
            <label>
                Total Number:{this.state.totalNumber}
            </label>
            {
                intArray.map(key => <Counter onIncrease={this.handleIncrease} onDecrease={this.handleDecrease} groupSize={this.state.size} key={key} />)
            }
        </div>
    }
}

export default CounterGroup;