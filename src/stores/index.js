import { articles, comments } from '../fixtures'
import ArticleStore from './ArticleStore'
import CommentStore from './CommentStore'
import SimpleStore from './SimpleStore'

const stores = {}

Object.assign(stores, {
    articles: new ArticleStore(stores),
    comments: new CommentStore(stores)
})

//for debug only, can remove any time
window.stores = stores

export const articleStore = stores.articles
export const commentStore = stores.comments