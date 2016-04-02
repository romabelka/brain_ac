import React from 'react'
import { Router, Route, hashHistory, browserHistory } from 'react-router'
import App from './containers/App'
import ArticleIndex from './containers/Article'
import ArticlePage from './containers/Article/Page'

export default (
    <Router history = {browserHistory}>
        <Route path="/" component = {App}>
            <Route path = "articles" component = {ArticleIndex}>
                <Route path = ":id" component = {ArticlePage} />
            </Route>
        </Route>
    </Router>
)