import React, { Component, PropTypes } from 'react'
import Body from './Body'
import toggleOpen from './HOC/toggleOpen'

class Article extends Component {
    render() {
        const {article : { title, text }, isOpen, toggleOpen, isSelected} = this.props
        const style = isSelected ? {color: 'red'} : null
        return (
            <div style = {style}>
                <h3 onClick = {toggleOpen}>{title}</h3>
                <a href="#" onClick={this.handleClick}>select this article</a>
                <Body text = {text} isOpen = {isOpen}/>
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.props.onClick()
    }
}

export default toggleOpen(Article)