import React from 'react'
import { Router, Route, Redirect, IndexRedirect, IndexRoute} from 'react-router'
import history from './history'
import App from './containers/App'
import ArticleIndex from './containers/Article'
import ArticlePage from './containers/Article/Page'
import NewArticle from './containers/Article/NewArticle'
import NotFound from './containers/NotFound'

export default (
    <Router history = {history}>
        <Redirect from = "/" to="/articles" />
        <Route path="/" component = {App}>
            <Route path = "articles" component = {ArticleIndex}>
                {/*<IndexRedirect to = "new"/>*/}
                <IndexRoute component={NewArticle}/>
                <Route path = "new" component = {NewArticle} />
                <Route path = ":id" component = {ArticlePage} />
            </Route>
        </Route>
        <Route path = "*" component = {NotFound} />
    </Router>
)