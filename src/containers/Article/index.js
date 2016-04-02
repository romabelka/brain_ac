import React, { Component, PropTypes } from 'react'
import ArticlesMenu from './../../components/ArticlesMenu'
import { articleStore } from '../../stores'

class ArticleIndex extends Component {
    constructor() {
        super()
        this.state = {
            articles: articleStore.getOrLoadAll(),
            loading: articleStore.loading
        }
    }

    componentDidMount() {
        articleStore.addChangeListener(this.articlesChanged)
    }

    componentWillUnmount() {
        articleStore.removeAllListeners(this.articlesChanged)
    }

    articlesChanged = () => {
        this.setState({
            articles: articleStore.getOrLoadAll(),
            loading: articleStore.loading
        })
    }

    render() {
        const { loading, articles } = this.state
        if (loading) return <h1>Loading...</h1>
        return (
            <div>
                <ArticlesMenu articles = {articles}/>
                {this.props.children}
            </div>
        )
    }
}

export default ArticleIndex