import React, { Component, PropTypes } from 'react'
import ArticleList from './ArticleList'
import { articleStore } from '../stores'

class App extends Component {
    constructor() {
        super()
        this.state = {
            articles: articleStore.getAll()
        }
    }

    render() {
        return (
            <ArticleList articles = {this.state.articles}/>
        )
    }
}

export default App