export default {
    getInitialState() {
        return {
            isOpen: false
        }
    },

    toggleOpen(ev) {
        this.setState({
            isOpen: !this.state.isOpen
        })
    },

    open() {
        this.setState({
            isOpen: true
        })
    },

    close() {
        this.setState({
            isOpen: false
        })
    }

}