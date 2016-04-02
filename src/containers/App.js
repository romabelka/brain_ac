import React, { Component, PropTypes } from 'react'
import { userStore } from '../stores'
import { authenticate } from '../AC/user'

class App extends Component {
    constructor(props) {
        super()
        this.state = this.getState()
    }

    componentDidMount() {
        userStore.addChangeListener(this.userChanged)
    }

    componentWillUnmount() {
        userStore.removeAllListeners(this.userChanged)
    }

    userChanged = () => this.setState(this.getState())

    getState = () => {
        return {
            user: userStore.currentUser
        }
    }

    getChildContext() {
        return this.state
    }

    static childContextTypes = {
        user: PropTypes.string
    }


    render() {
        return (
            <div>
                <h1>News App!</h1>
                <a href="#" onClick = {this.handleAuth}>authenticate me</a>
                {this.props.children}
            </div>
        )
    }

    handleAuth = (ev) => {
        authenticate('student')
    }
}

export default App