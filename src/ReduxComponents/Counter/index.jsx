import React, { Component } from 'react'
import PropTypes from 'prop-types'
import store from '../../Redux/store'
import {increaseAction,reduceAction} from '../../Redux/action'

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

    // render() {
    //     const { value, onIncrement, onDecrement } = this.props
    //     return (
    //         <p>
    //             Clicked: {value} times
    //             {' '}
    //             <button onClick={onIncrement}>
    //                 +
    //     </button>
    //             {' '}
    //             <button onClick={onDecrement}>
    //                 -
    //     </button>
    //         </p>
    //     )
    // }
}

Counter.propTypes = {
    value: PropTypes.number.isRequired,
    onIncrement: PropTypes.func.isRequired,
    onDecrement: PropTypes.func.isRequired
}

export default Counter