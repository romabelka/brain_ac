import React from 'react'
import {render} from 'react-dom'
//import Router from './Router'
import store from './store'
import Root from './containers/Root'

render(<Root store = {store} />, document.getElementById('container'))

function wrapp (ac) {
    return store.dispatch(ac())
}

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
