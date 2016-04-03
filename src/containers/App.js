import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { increment } from '../AC/counter'
import { deleteArticle, loadArticles } from '../AC/articles'
import { addComment } from '../AC/comments'
import Counter from '../components/Counter'
import ArticleList from '../components/ArticleList'

class App extends Component {
    static propTypes = {
        count: PropTypes.number,
        increment: PropTypes.func.isRequired
    };

    render() {
        return (
            <div>
                <Counter {...this.props}/>
                <ArticleList {...this.props}/>
            </div>
        )
    }
}

export default connect((state) => {
    const { count, articles } = state
    return { count, articles }
}, {
    increment, deleteArticle, loadArticles, addComment
})(App)