import { articles, comments } from '../fixtures'
import ArticleStore from './ArticleStore'
import SimpleStore from './SimpleStore'

const stores = {}

Object.assign(stores, {
    articles: new ArticleStore(stores, articles),
    comments: new SimpleStore(stores, comments)
})

//for debug only, can remove any time
window.stores = stores

export const articleStore = stores.articles
export const commentStore = stores.comments