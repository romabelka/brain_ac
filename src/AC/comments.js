import { LOAD_COMMENTS_FOR_ARTICLE, ADD_COMMENT } from './constants'
import { loadForArticle } from './api/comments'
import { asyncAC } from './utils'
import AppDispatcher from '../dispatcher'

export const loadCommentsForArticle = asyncAC(loadForArticle, LOAD_COMMENTS_FOR_ARTICLE)

export function addComment(comment, articleId) {
    AppDispatcher.dispatch({
        type: ADD_COMMENT,
        data: {
            comment: Object.assign(comment, {id: Date.now()}),
            articleId
        }
    })
}