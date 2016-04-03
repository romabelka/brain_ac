import { DELETE_ARTICLE, LOAD_ARTICLES, START, SUCCESS, FAIL } from '../constants'
import $ from 'jquery'

export function deleteArticle(id) {
    return {
        type: DELETE_ARTICLE,
        data: { id }
    }
}

/*
export function loadArticles() {
    return {
        type: LOAD_ARTICLES,
        callAPI: '/api/article'
    }
}
*/

export function loadArticles() {
    return (dispatch, store) => {
        dispatch({type: LOAD_ARTICLES + START})

        setTimeout(() =>
                $.get('/api/article')
                    .done((response) => dispatch({response, type: LOAD_ARTICLES + SUCCESS}))
                    .fail((error) => dispatch({error, type: LOAD_ARTICLES + FAIL}))
            , 1000)

    }
}