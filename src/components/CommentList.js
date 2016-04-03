import React, { Component, PropTypes } from 'react'
import { getRelation } from '../utils'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,
        addComment: PropTypes.func
    };

    render() {
        const { article, addComment } = this.props
        const comments = getRelation(article, 'comments').map(comment =>
            <li key={comment.id}>{comment.text}</li>
        )
        return (
            <ul>
                {comments}
            </ul>
        )
    }
}

export default CommentList