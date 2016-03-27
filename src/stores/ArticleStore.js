import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES_START, LOAD_ALL_ARTICLES_SUCCESS, LOAD_ALL_ARTICLES_FAIL } from '../AC/constants'
import SimpleStore from './SimpleStore'

class ArticleStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        AppDispatcher.register((action) => {
            const { type, data, response, error } = action

            switch (type) {
                case DELETE_ARTICLE:
                    this.__delete(data.id)
                    break;

                case LOAD_ALL_ARTICLES_START:
                    this.loading = true
                    break;

                case LOAD_ALL_ARTICLES_SUCCESS:
                    this.loading = false
                    response.forEach(this.__add)
                    break;

                default: return
            }

            this.emitChange()
        })
    }
}

export default ArticleStore