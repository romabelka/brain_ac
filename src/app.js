import React from 'react'
import {render} from 'react-dom'
import router from './router'

render(router, document.getElementById('container'))

/*
function dispatchIncrement() {
    store.dispatch(increment())
}

function rerender () {
    render(<Counter {...store.getState()} increment = {dispatchIncrement}/>, document.getElementById('container'))
}

rerender()

store.subscribe(rerender)


*/
