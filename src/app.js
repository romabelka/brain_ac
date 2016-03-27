import ArticleList from './ArticleList'
import React from 'react'
import {render} from 'react-dom'
import {articles} from './fixtures'

render(<ArticleList articles = {articles} options = {{color: 'red'}} />, document.getElementById('container'))

