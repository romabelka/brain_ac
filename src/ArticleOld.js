import React, { Component, PropTypes } from 'react'
import Body from './Body'

const Article = React.createClass({
    getInitialState() {
        return {
            isOpen: false
        }
    },

    render() {
        const {article : { title, text }} = this.props
        return (
            <div>
                <h3 onClick = {this.handleClick}>{title}</h3>
                <Body text = {text} isOpen = {this.state.isOpen}/>
            </div>
        )
    },

    handleClick(ev) {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
})

export default Article