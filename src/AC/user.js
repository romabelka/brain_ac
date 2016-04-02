import { AUTHENTICATE } from './constants'
import AppDispatcher from '../dispatcher'


export function authenticate(user) {
    AppDispatcher.dispatch({
        type: AUTHENTICATE,
        data: { user }
    })
}