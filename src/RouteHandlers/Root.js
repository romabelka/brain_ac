import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import DevTools from './../containers/DevTools'
import store from '../store'

class Root extends Component {
    render() {
        return (
            <Provider store = {store}>
                <div>
                    {this.props.children}
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

export default Root