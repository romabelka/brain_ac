import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, LOAD_ARTICLE, LOAD_COMMENTS_FOR_ARTICLE, SUCCESS, START, FAIL } from '../AC/constants'
import SimpleStore from './SimpleStore'
import { loadAllArticles, loadArticleById } from '../AC/articles'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response, error } = action
            //AppDispatcher.waitFor([someStore.dispatchToken])
            switch (type) {
                case DELETE_ARTICLE:
                    this.__delete(data.id)
                    break;

                case LOAD_ALL_ARTICLES + START:
                    this.loading = true
                    break;

                case LOAD_ALL_ARTICLES + SUCCESS:
                    this.loading = false
                    this.loaded = true
                    response.forEach(this.__update)
                    break;

                case LOAD_ARTICLE + START:
                    if (!this.getById(data.id)) this.__add({ id: data.id })
                    this.getById(data.id).loading = true
                    break;

                case LOAD_ARTICLE + SUCCESS:
                    this.__update({...response, loading: false, loaded: true})
                    break;

                case LOAD_COMMENTS_FOR_ARTICLE + START:
                    this.getById(data.articleId).loadingComments = true
                    break

                case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
                    AppDispatcher.waitFor([this.getStores().comments.dispatchToken])
                    this.getById(data.articleId).loadingComments = false
                    this.getById(data.articleId).loadedComments = true
                    break

                default: return
            }

            this.emitChange()
        })
    }

    getOrLoadAll() {
        if (!this.loaded && !this.loading) loadAllArticles()
        return this.getAll()
    }

    getOrLoadById(id) {
        const article = this.getById(id)
//        if (!article.loaded && !article.loading) setTimeout(() => loadArticleById({id}), 0)
        if (!article || (!article.loaded && !article.loading)) loadArticleById({ id })
        return article
    }
}

export default ArticleStore