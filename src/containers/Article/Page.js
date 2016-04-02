import React, { Component, PropTypes } from 'react'

class ArticlePage extends Component {
    static propTypes = {

    };

    render() {
        return (
            <div>
                <h2>Article page {this.props.params.id}</h2>
            </div>
        )
    }
}

export default ArticlePage