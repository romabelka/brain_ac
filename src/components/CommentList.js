import React, { Component, PropTypes } from 'react'
import toggleOpen from './../HOC/toggleOpen'
import { loadCommentsForArticle, addComment } from '../AC/comments'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    };

    static contextTypes = {
        router: PropTypes.object
    }

    state = {
        newComment: ''
    }

    componentWillReceiveProps(nextProps) {
        const { article } = nextProps
        if (article.loadedComments || article.loadingComments) return
        if (nextProps.isOpen && !this.props.isOpen) loadCommentsForArticle({articleId: article.id})
    }


    render() {
//        console.log('---', this.context);
        return (
            <div>
                {this.getActionLink()}
                {this.getComments()}
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.props.toggleOpen()
    }

    getActionLink() {
        const {toggleOpen, isOpen } = this.props
        const action = isOpen ? 'hide comments' : 'show comments'
        return <a href="#" onClick={this.handleClick}>{action}</a>

    }

    getComments() {
        const { isOpen, article } = this.props
        if (!isOpen) return null
        if (article.loadingComments) return <h3>Loading comments...</h3>
        if (!article.loadedComments) return null

        const commentComponents = article.getRelation('comments')
            .map((comment) => <li key={comment.id}>{comment.text} <b> by {comment.user}</b></li>)

        return (
            <ul>
                {commentComponents}
                <li>
                    <input type="text" value={this.state.newComment} onChange = {this.handleChange} onBlur = {this.handleAddComment}/>
                </li>
            </ul>
        )
    }

    handleChange = (ev) => {
        this.setState({
            newComment: ev.target.value
        })
    }

    handleAddComment = (ev) => {
        addComment({
            text: this.state.newComment,
            user: undefined
        }, this.props.article.id)

        this.setState({
            newComment: ''
        })
    }
}

export default toggleOpen(CommentList)