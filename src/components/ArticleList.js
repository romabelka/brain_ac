import React, { Component, PropTypes } from 'react'

class ArticleList extends Component {
    static propTypes = {

    };

    render() {
        return (
            <ul>
                {this.getArticles()}
            </ul>
        )
    }

    getArticles() {
        const { articles: { entities } } = this.props

        return entities.map(article => <li key = {article.id}>
            {article.title} | <a href = "#" onClick ={this.handleDelete(article.id)}>delete article</a>
        </li>)
    }

    handleDelete = (id) => (ev) => {
        ev.preventDefault()
        this.props.deleteArticle(id)
    }
}

export default ArticleList