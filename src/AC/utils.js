import AppDispatcher from '../dispatcher'
import { START, SUCCESS, FAIL } from './constants'

export function asyncAC(loadAll, type) {
    return () => {
        AppDispatcher.dispatch({
            type: type + START
        })

        loadAll()
            .done(response => AppDispatcher.dispatch({
                type: type + SUCCESS,
                response
            }))
            .fail(error => AppDispatcher.dispatch({
                type: type + FAIL,
                error
            }))

    }
}