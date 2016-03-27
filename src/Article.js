import React, { Component, PropTypes } from 'react'
import Body from './Body'
import toggleOpen from './HOC/toggleOpen'

class Article extends Component {

    static propTypes = {
        article: PropTypes.object.isRequired,
        isOpen: PropTypes.bool,
        toggleOpen: PropTypes.func,
        isSelected: PropTypes.bool
    }

    render() {
        const {article : { title, text, comments }, isOpen, toggleOpen, isSelected} = this.props
        const style = isSelected ? {color: 'red'} : null
        return (
            <div style = {style}>
                <h3 onClick = {toggleOpen}>{title}</h3>
                <a href="#" onClick={this.handleClick}>select this article</a>
                <Body text = {text} isOpen = {isOpen} comments = {comments}/>
            </div>
        )
    }

    handleClick = (ev) => {
        ev.preventDefault()
        this.props.onClick()
    }
}

export default toggleOpen(Article)