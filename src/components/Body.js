import React, { PropTypes } from 'react'
//import CommentList from './CommentList'

function Body(props) {
    const { article, isOpen } = props
    const loader = article.loading ? <h3>Loading article...</h3> : null
    return isOpen ? <section>
        {loader || article.text}
    </section> : <noscript />
}

Body.propTypes = {
    text: PropTypes.string,
    isOpen: PropTypes.bool
}

export default Body