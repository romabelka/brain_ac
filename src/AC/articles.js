import AppDispatcher from '../dispatcher'
import { DELETE_ARTICLE, LOAD_ALL_ARTICLES_START, LOAD_ALL_ARTICLES_SUCCESS, LOAD_ALL_ARTICLES_FAIL } from './constants'
import $ from 'jquery'

export function deleteArticle(id) {
    AppDispatcher.dispatch({
        type: DELETE_ARTICLE,
        data: { id }
    })
}

export function loadAllArticles() {
    AppDispatcher.dispatch({
        type: LOAD_ALL_ARTICLES_START
    })

    $.get('/api/article')
        .done(response => AppDispatcher.dispatch({
            type: LOAD_ALL_ARTICLES_SUCCESS,
            response
        }))
        .fail(error => AppDispatcher.dispatch({
            type: LOAD_ALL_ARTICLES_FAIL,
            error
        }))
}