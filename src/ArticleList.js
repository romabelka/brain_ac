import React, { Component, PropTypes } from 'react'
import Article from './Article'

class ArticleList extends Component {
    render() {
        const articleComponents = this.props.articles.map((article, index) =>
            <li key={index}><Article article = {article} /></li>
        )
        return (
            <div>
                <ul>{articleComponents}</ul>
            </div>
        )
    }
}

export default ArticleLista