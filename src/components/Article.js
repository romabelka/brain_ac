import React, { Component, PropTypes } from 'react'
import Body from './Body'
import { deleteArticle, loadArticleById } from '../AC/articles'

class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        open: PropTypes.func,
        isSelected: PropTypes.bool
    }

    componentWillReceiveProps(nextProps) {
        const { article } = nextProps
        if (article.loaded || article.loading) return
        if (nextProps.isOpen && !this.props.isOpen) loadArticleById({id: article.id})
    }

    render() {
        const {article, isOpen, open, isSelected} = this.props
        const style = isSelected ? {color: 'red'} : null
        return (
            <div style = {style}>
                <h3 onClick = {open}>{article.title} | <a href="#" onClick = {this.handleDelete}>delete this article</a></h3>
                <a href="#" onClick={this.handleClick}>select this article</a>
                <Body isOpen = {isOpen}article = {article}/>
            </div>
        )
    }

    handleDelete = (ev) => {
        ev.preventDefault()
        deleteArticle(this.props.article.id)
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.props.onClick()
    }
}

export default Article