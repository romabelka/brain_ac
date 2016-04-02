import { LOAD_COMMENTS_FOR_ARTICLE } from './constants'
import { loadForArticle } from './api/comments'
import { asyncAC } from './utils'

export const loadCommentsForArticle = asyncAC(loadForArticle, LOAD_COMMENTS_FOR_ARTICLE)