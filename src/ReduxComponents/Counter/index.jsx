import React, { Component } from 'react'
import store from '../../Redux/store'
import { increaseAction, reduceAction } from '../../Redux/action'

class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            groupSize: 0
        };
    }

    onIncrease = () => {
        this.setState((prevState) => ({
            value: prevState.value + 1
        }))
        store.dispatch(increaseAction())
    }

    onDecrease = () => {
        this.setState((prevState) => ({
            value: prevState.value - 1
        }))
        store.dispatch(reduceAction())
    }


    render() {
        
        const { value, onIncrement, onDecrement } = this.props
        return <div>
            <button onClick={this.onDecrease}>-</button>
            <mark>{this.state.value}</mark>
            <button onClick={this.onIncrease}>+</button>
        </div>
    }

    static getDerivedStateFromProps(props, state) {
        if (props.groupSize !== state.groupSize) {
            return {
                value: 0,
                groupSize: props.groupSize
            }
        }
        return null
    }

}



export default Counter