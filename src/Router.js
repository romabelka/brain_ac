import React from 'react'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import App from './containers/App'

export default (
    <Router history = {browserHistory}>
        <Route path="/articles" component = {App}/>
    </Router>
)