import React, { Component, PropTypes } from 'react'
import ArticleList from './../components/ArticleList'
import { articleStore } from '../stores'

class App extends Component {
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
            <ArticleList articles = {articles}/>
        )
    }
}

export default App