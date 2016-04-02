import React, { Component, PropTypes } from 'react'
import { deleteArticle, loadArticleById } from '../../AC/articles'
import { articleStore } from '../../stores'
import Body from '../../components/Body'

class ArticlePage extends Component {
    constructor(props) {
        super()
        this.state = this.getState(props)
    }

    componentDidMount() {
        articleStore.addChangeListener(this.articlesChanged)
    }

    componentWillUnmount() {
        articleStore.removeAllListeners(this.articlesChanged)
    }

    componentWillReceiveProps(nextProps) {
        this.setState(this.getState(nextProps))
    }

    getState = (props) => {
        props = props || this.props
        return {
            article: articleStore.getOrLoadById(props.params.id),
            loading: articleStore.loading
        }
    }

    articlesChanged = () => this.setState(this.getState())

    render() {
        const { article } = this.state
        if (!article) return null
        if (article.loading) return <h3>Loading article</h3>
        //const article = articleStore.getById(this.props.params.id) //-baaaad choice, render must be a pure func of props and state
        return (
            <div>
                <h3>{article.title} | <a href="#" onClick = {this.handleDelete}>delete this article</a></h3>
                <Body isOpen = {true} article = {article}/>
            </div>
        )
    }

    handleDelete = (ev) => {
        ev.preventDefault()
        deleteArticle(this.props.params.id)
    }
}

export default ArticlePage