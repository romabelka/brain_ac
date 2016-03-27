import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES, SUCCESS, START, FAIL } from '../AC/constants'
import SimpleStore from './SimpleStore'
import { loadAllArticles } from '../AC/articles'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        AppDispatcher.register((action) => {
            const { type, data, response, error } = action

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
                    response.forEach(this.__add)
                    break;

                default: return
            }

            this.emitChange()
        })
    }

    getOrLoadAll() {
        if (!this.loaded && !this.loading) loadAllArticles()
        return this.getAll()
    }
}

export default ArticleStore