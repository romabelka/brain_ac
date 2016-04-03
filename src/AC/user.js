import { AUTHENTICATE } from './constants'
import AppDispatcher from '../dispatcher'
import history from '../history'

export function authenticate(user) {
    AppDispatcher.dispatch({
        type: AUTHENTICATE,
        data: { user }
    })

    history.push('/articles/new')
}