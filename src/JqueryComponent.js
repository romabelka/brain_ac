import React, { Component, PropTypes } from 'react'

class JqueryComponent extends Component {
    static propTypes = {

    };

    render() {
        return <div ref="jContainer"/>
    }

    componentDidMount() {
        console.log('---', 'use some plugin', this.refs.jContainer);
    }
}

export default JqueryComponent