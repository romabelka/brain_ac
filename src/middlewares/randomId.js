export default store => next => action => {
    if (!action.withRandomId) return next(action)
    const {...rest, withRandomId} = action

    next({...rest, randomId: Date.now()})
}