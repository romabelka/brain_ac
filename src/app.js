import React from 'react'
import {render} from 'react-dom'
//import Router from './Router'
import store from './store'
import Counter from './components/Counter'

function rerender () {
    render(<Counter {...store.getState()}/>, document.getElementById('container'))
}

rerender()

store.subscribe(rerender)


