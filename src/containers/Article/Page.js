import React, { Component, PropTypes } from 'react'
import { deleteArticle, loadArticleById } from '../../AC/articles'
import { articleStore } from '../../stores'
import Body from '../../components/Body'

class ArticlePage extends Component {
    constructor(props) {
        super()
        this.state = {
            article: articleStore.getById(props.params.id),
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
            article: articleStore.getById(this.props.params.id),
            loading: articleStore.loading
        })
    }

    render() {
        const { article } = this.state
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