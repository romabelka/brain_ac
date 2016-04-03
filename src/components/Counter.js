import React, { Component, PropTypes } from 'react'

class Counter extends Component {
    static propTypes = {
        count: PropTypes.number
    };

    render() {
        return (
            <div>
                <h1>{this.props.count}</h1>
            </div>
        )
    }
}

export default Counter