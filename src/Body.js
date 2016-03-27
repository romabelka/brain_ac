import React, { PropTypes } from 'react'

function Body(props) {
    const { text, isOpen } = props
    return isOpen ? <section>{text}</section> : <noscript />
}

Body.propTypes = {
    text: PropTypes.string,
    isOpen: PropTypes.bool
}

export default Body