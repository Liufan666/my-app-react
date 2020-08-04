import React, { Component } from 'react'
import Counter from '../Counter'
import store from '../../Redux/store'
import {initAction} from '../../Redux/action'
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
            store.dispatch(initAction())
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
                Total Number:{store.state}
            </label>
            {
                intArray.map(key => <Counter  groupSize={this.state.size} key={key} />)
            }
        </div>
    }
}

export default CounterGroup;