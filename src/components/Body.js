import React, { PropTypes } from 'react'
import CommentList from './CommentList'

function Body(props) {
    const { text, isOpen, comments } = props
    return isOpen ? <section>
        {text}
        <CommentList comments = {comments}/>
    </section> : <noscript />
}

Body.propTypes = {
    text: PropTypes.string,
    isOpen: PropTypes.bool
}

export default Body