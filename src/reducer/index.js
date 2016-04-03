import { combineReducers } from 'redux'
import counter from './counter'
import articles from './articles'
import comments from './comments'

export default combineReducers({
    count: counter,
    articles,
    comments
})

