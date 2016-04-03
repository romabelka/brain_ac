import React, { Component, PropTypes } from 'react'
import { authenticate } from '../AC/user'

class AuthPage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h1>Sign in</h1>
                <a href="#" onClick = {this.handleAuth}>authenticate me</a>
            </div>
        )
    }

    handleAuth = (ev) => {
        authenticate('student')
    }
}

export default AuthPage