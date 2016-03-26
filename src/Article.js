import React, { Component, PropTypes } from 'react'
import Body from './Body'
import toggleOpen from './HOC/toggleOpen'

class Article extends Component {
    render() {
        const {article : { title, text }, isOpen, toggleOpen} = this.props
        return (
            <div>
                <h3 onClick = {toggleOpen}>{title}</h3>
                <Body text = {text} isOpen = {isOpen}/>
            </div>
        )
    }
}

export default toggleOpen(Article)