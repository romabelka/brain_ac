import { DELETE_ARTICLE, ADD_COMMENT, LOAD_ARTICLES, SUCCESS, START, FAIL } from '../constants'
import { articles } from '../fixtures'

const defaultArticles = {
    loading: false,
    loaded: false,
    entities: []
}

export default (articles = defaultArticles, action) => {
    const { type, data, response, randomId } = action

    switch (type) {
        case DELETE_ARTICLE:
            return Object.assign({}, articles, {entities: articles.entities.filter(article => article.id != data.id)})

        case LOAD_ARTICLES + START:
            return {...articles, loading: true}

        case LOAD_ARTICLES + SUCCESS:
            return {...articles, loading: false, loaded: true, entities: response}

        case ADD_COMMENT:
            return {...articles, entities: addComment(articles.entities, data.articleId, randomId)}
    }

    return articles
}

function addComment(entities, articleId, commentId) {
    return entities.map(article => {
        return article.id == articleId ? {...article, comments: article.comments.concat(commentId)} : article
    })
}