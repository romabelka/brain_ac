export default (state = 0, action) => {
    const { type, data } = action
    switch (type) {
        case 'increment': return state + 1
    }
    return state
}
