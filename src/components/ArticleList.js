import React, { Component, PropTypes } from 'react'
import Article from './Article'
import JqueryComponent from './JqueryComponent'
import { findDOMNode } from 'react-dom'

class ArticleList extends Component {

/*
    static propTypes = {
        articles: PropTypes.array.isRequired
    }
*/

    state = {
        selected: {},
        openedArticle: null
    }

/*
    constructor(props) {
        super(props)
        this.state = {
            selected: {
                [props.articles[0]]: true
            }
        }
    }
*/

    render() {
        const articleComponents = this.props.articles.map((article, index) =>
            <li key={index}>
                <Article article = {article}
                         isOpen = {this.state.openedArticle === article.id}
                         open = {this.openArticle(article.id)}
                         onClick = {this.selectArticle(article.id)}
                         isSelected={this.state.selected[article.id]} />
            </li>
        )
        return (
            <div>
                <ul>{articleComponents}</ul>
                <JqueryComponent ref = "customComponent" />
            </div>
        )
    }

    openArticle = id => ev => {
        if (ev) ev.preventDefault()
        this.setState({
            openedArticle: id
        })
    }

    selectArticle = (id) => (ev) => {
        this.setState({
            selected: {...this.state.selected, [id]: true} //Object.assign({}, this.state.selected, {[id]: true})
        })
    }

    componentDidMount() {
        //console.log('---', 123, findDOMNode(this.refs.customComponent));
    }
}

ArticleList.propTypes = {
    articles: PropTypes.array.isRequired,
    options: PropTypes.shape({
        selected: PropTypes.object.isRequired,
        color: PropTypes.string.isRequired
    })
}

export default ArticleList