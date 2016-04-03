import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment } from '../AC/counter'

class CounterContainer extends Component {
    static propTypes = {
        count: PropTypes.number,
        increment: PropTypes.func.isRequired
    };

    render() {
        const { count, increment } = this.props
        return (
            <div>
                <h1>{count}</h1>
                <h3 onClick = {increment}>Increment me</h3>
            </div>
        )
    }
}

export default connect((state) => {
    const { count } = state
    return { count }
}, {
    increment
})(CounterContainer)