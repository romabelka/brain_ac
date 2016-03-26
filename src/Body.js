import React from 'react'

function Body(props) {
    const { text, isOpen } = props
    return isOpen ? <section>{text}</section> : <noscript />
}

export default Body