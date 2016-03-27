import React, { Component as ReactComponent } from 'react'

export default (CustomComponent) => {
    return class ToggleOpenDecorator extends ReactComponent {

        state = {
            isOpen: false
        }

        render() {
            return <CustomComponent {...this.props}
                toggleOpen = {this.toggleOpen}
                isOpen = {this.state.isOpen}
            />
        }

        toggleOpen = (ev) => {
            this.setState({
                isOpen: !this.state.isOpen
            })
        }
    }
}
