import { DELETE_ARTICLE, LOAD_ARTICLES, SUCCESS, START, FAIL } from '../constants'
import { articles } from '../fixtures'

const defaultArticles = {
    loading: false,
    loaded: false,
    entities: []
}

export default (articles = defaultArticles, action) => {
    const { type, data, response } = action

    switch (type) {
        case DELETE_ARTICLE:
            return Object.assign({}, articles, {entities: articles.entities.filter(article => article.id != data.id)})

        case LOAD_ARTICLES + START:
            return {...articles, loading: true}

        case LOAD_ARTICLES + SUCCESS:
            return {...articles, loading: false, loaded: true, entities: response}
    }

    return articles
}