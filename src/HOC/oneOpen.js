import React, { Component as ReactComponent} from 'react'

export default (Component) => class extends ReactComponent {
    state = {
        openedId: null
    }

    open = id => ev => {
        this.setState({
            openedId: id
        })
    }

    isOpen = id => this.state.openedId == id

    render() {
        return <Component {...this.props} {...this.state} open = {this.open} isOpen = {this.isOpen}/>
    }
}