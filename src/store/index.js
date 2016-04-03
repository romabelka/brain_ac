import { createStore, applyMiddleware, compose } from 'redux'
import reducer from '../reducer'
//import logger from '../middlewares/logger'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import api from '../middlewares/api'
import DevTools from '../containers/DevTools'

const enhancer = compose(
    applyMiddleware(thunk, api, createLogger()),
    DevTools.instrument()
)

const store = createStore(reducer, {}, enhancer)
window.store = store

if (module.hot) {
    module.hot.accept('../reducer', () =>
        store.replaceReducer(require('../reducer').default)
    );
}

export default store