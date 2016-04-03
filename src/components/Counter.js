import React, { Component, PropTypes } from 'react'

class Counter extends Component {
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

export default Counter