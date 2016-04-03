import React from 'react'
import {render} from 'react-dom'
//import Router from './Router'
import store from './store'
import Counter from './components/Counter'
import { increment } from './AC/counter'

function dispatchIncrement() {
    store.dispatch(increment())
}

function rerender () {
    render(<Counter {...store.getState()} increment = {dispatchIncrement}/>, document.getElementById('container'))
}

rerender()

store.subscribe(rerender)


