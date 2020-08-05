import React, { Component } from 'react'
import Counter from '../Counter'
import store from '../../Redux/store'
import { initAction } from '../../Redux/action'
class CounterGroup extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            totalNumber: store.getState()

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

    render() {
        store.subscribe(() => {
            console.log("hello");
            this.setState({
                value: store.getState()
            })
        })
        const intArray = [...Array(this.state.size).keys()]

        return <div>
            <label>
                Group Size
                <input onBlur={this.handleResize} ></input>
            </label>
            <label>
                Total Number:{store.getState()}
            </label>
            {
                intArray.map(key => <Counter groupSize={this.state.size} key={key} />)
            }
        </div>
    }
}

export default CounterGroup;