import $ from 'jquery'
import { START, SUCCESS, FAIL} from '../constants'

export default store => next => action => {
    if (!action.callAPI) return next(action)
    const { callAPI, type, ...restAction } = action

    next({...restAction, type: type + START})

    setTimeout(() =>
        $.get(callAPI)
            .done((response) => next({...restAction, response, type: type + SUCCESS}))
            .fail((error) => next({...restAction, error, type: type + FAIL}))
    , 1000)
}
