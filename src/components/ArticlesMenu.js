import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

class ArticlesMenu extends Component {
    static propTypes = {
        articles: PropTypes.array.isRequired
    };

    render() {
        const articles = this.props.articles.map(article =>
            <li key={article.id}>
                <Link to={`/articles/${article.id}`}
                                       activeClassName="active"
                                       activeStyle = {{color: 'red'}}
                >
                    {article.title}
                </Link>
            </li>
        )
        return (
            <ul>
                {articles}
            </ul>
        )
    }
}

export default ArticlesMenu