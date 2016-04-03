import React, { Component, PropTypes } from 'react'
import { Provider } from 'react-redux'
import App from './App'
import DevTools from './DevTools'

class Root extends Component {
    static propTypes = {
        store: PropTypes.object.isRequired
    };

    render() {
        return (
            <Provider store = {this.props.store}>
                <div>
                    <App />
                    <DevTools />
                </div>
            </Provider>
        )
    }
}

export default Root