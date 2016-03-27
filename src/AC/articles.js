import AppDispatcher from '../dispatcher'

export function deleteArticle(id) {
    AppDispatcher.dispatch({
        type: 'DELETE_ARTICLE',
        data: { id }
    })
}