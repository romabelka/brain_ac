import React, { Component, PropTypes } from 'react'
import toggleOpen from './../HOC/toggleOpen'

class CommentList extends Component {
    static propTypes = {
        comments: PropTypes.array
    };

    render() {
        const { comments } = this.props
        if (!comments) return null
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
        const { isOpen, comments } = this.props
        if (!isOpen) return null
        const commentComponents = comments.map((comment) => <li key={comment.id}>{comment.text}</li>)
        return (
            <ul>
                {commentComponents}
            </ul>
        )
    }
}

export default toggleOpen(CommentList)