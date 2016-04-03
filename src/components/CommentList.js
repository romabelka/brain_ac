import React, { Component, PropTypes } from 'react'
import { getRelation } from '../utils'

class CommentList extends Component {
    static propTypes = {
        article: PropTypes.object,
        addComment: PropTypes.func
    };

    state = {
        text: ''
    };

    render() {
        const { article, addComment } = this.props
        const comments = getRelation(article, 'comments').map(comment =>
            <li key={comment.id}>{comment.text}</li>
        )
        return (
            <ul>
                {comments}
                <input type="text" value={this.state.text} onChange = {this.handleChange} onBlur={this.submitComment}/>
            </ul>
        )
    }

    handleChange =(ev) => {
        this.setState({
            text: ev.target.value
        })
    }

    submitComment = () => {
        const { addComment, article } = this.props
        addComment(this.state.text, article.id)

        this.setState({
            text: ''
        })
    }
}

export default CommentList