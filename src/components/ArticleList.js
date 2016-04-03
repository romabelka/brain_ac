import React, { Component, PropTypes } from 'react'

class ArticleList extends Component {
    static propTypes = {

    };

    render() {
        if (this.props.articles.loading) return <h1>Loading...</h1>
        return (
            <ul>
                {this.getArticles()}
            </ul>
        )
    }

    componentDidMount() {
        this.props.loadArticles()
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