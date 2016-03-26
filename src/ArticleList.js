import React, { Component, PropTypes } from 'react'
import Article from './Article'
import JqueryComponent from './JqueryComponent'
import { findDOMNode } from 'react-dom'

class ArticleList extends Component {
    render() {
        const articleComponents = this.props.articles.map((article, index) =>
            <li key={index}><Article article = {article} /></li>
        )
        return (
            <div>
                <ul>{articleComponents}</ul>
                <JqueryComponent ref = "customComponent" />
            </div>
        )
    }

    componentDidMount() {
        console.log('---', 123, findDOMNode(this.refs.customComponent));
    }
}

export default ArticleList