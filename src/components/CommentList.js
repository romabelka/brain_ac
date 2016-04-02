import React, { Component, PropTypes } from 'react'
import toggleOpen from './../HOC/toggleOpen'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object.isRequired
    };

    componentWillReceiveProps(nextProps) {
        const { comments } = nextProps
//        if (comments.loaded || comments.loading) return
//        if (nextProps.isOpen && !this.props.isOpen) loadArticleById({id: article.id})
    }


    render() {
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
            .map((comment) => <li key={comment.id}>{comment.text}</li>)

        return (
            <ul>
                {commentComponents}
            </ul>
        )
    }
}

export default toggleOpen(CommentList)