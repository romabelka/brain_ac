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
        selected: {}
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
                         onClick = {this.selectArticle(article.id)}
                         isSelected={this.state.selected[article.id]} />
            </li>
        )
        console.log('---', this.state);
        return (
            <div>
                <ul>{articleComponents}</ul>
                <JqueryComponent ref = "customComponent" />
            </div>
        )
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