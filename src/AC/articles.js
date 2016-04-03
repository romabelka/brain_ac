import { DELETE_ARTICLE, LOAD_ARTICLES } from '../constants'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        data: { id }
    }
}

export function loadArticles() {
    return {
        type: LOAD_ARTICLES,
        callAPI: '/api/article'
    }
}