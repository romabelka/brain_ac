import React, { Component, PropTypes } from 'react'
import Body from './Body'
import toggleOpen from './../HOC/toggleOpen'
import { deleteArticle } from '../AC/articles'

class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        isSelected: PropTypes.bool
    }

    render() {
        const {article : { title, text }, isOpen, toggleOpen, isSelected} = this.props
        const comments = this.props.article.getRelation('comments')
        const style = isSelected ? {color: 'red'} : null
        return (
            <div style = {style}>
                <h3 onClick = {toggleOpen}>{title} | <a href="#" onClick = {this.handleDelete}>delete this article</a></h3>
                <a href="#" onClick={this.handleClick}>select this article</a>
                <Body text = {text} isOpen = {isOpen} comments = {comments}/>
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

export default toggleOpen(Article)