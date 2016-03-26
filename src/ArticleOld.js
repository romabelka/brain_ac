import React, { Component, PropTypes } from 'react'
import Body from './Body'
import toggleOpen from './mixins/toggleOpen'

const Article = React.createClass({
    mixins: [toggleOpen],

    render() {
        const {article : { title, text }} = this.props
        return (
            <div>
                <h3 onClick = {this.toggleOpen}>{title}</h3>
                <Body text = {text} isOpen = {this.state.isOpen}/>
            </div>
        )
    },

})

export default Article