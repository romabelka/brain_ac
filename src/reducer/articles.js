import { DELETE_ARTICLE } from '../constants'
import { articles } from '../fixtures'

const defaultArticles = {
    loading: false,
    loaded: true,
    entities: articles
}

export default (articles = defaultArticles, action) => {
    const { type, data } = action

    switch (type) {
        case DELETE_ARTICLE:
            return Object.assign({}, articles, {entities: articles.entities.filter(article => article.id != data.id)})
    }

    return articles
}