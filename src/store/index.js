import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
import logger from '../middlewares/logger'
import DevTools from '../containers/DevTools'

const enhancer = compose(
    applyMiddleware(logger),
    DevTools.instrument()
)

const store = createStore(reducer, {}, enhancer)
window.store = store

export default store