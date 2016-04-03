import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment } from '../AC/counter'
import Counter from '../components/Counter'

class CounterContainer extends Component {
    static propTypes = {
        count: PropTypes.number,
        increment: PropTypes.func.isRequired
    };

    render() {
        return <Counter {...this.props}/>
    }
}

export default connect((state) => {
    const { count } = state
    return { count }
}, {
    increment
})(CounterContainer)