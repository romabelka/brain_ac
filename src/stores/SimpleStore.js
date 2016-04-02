import AppDispatcher from '../dispatcher'
import { EventEmitter } from 'events'
import { DELETE_ARTICLE } from '../AC/constants'
import DataModel from './DataModel'

class SimpleStore extends EventEmitter {
    constructor(stores, initialState) {
        super()
        this.__stores = stores
        this.__items = {}
        if (initialState) initialState.forEach(this.__add)
    }

    emitChange() {
        this.emit('CHANGE_EVENT')
    }

    addChangeListener(callback) {
        this.on('CHANGE_EVENT', callback)
    }

    removeChangeListener(callback) {
        this.removeListener('CHANGE_EVENT', callback)
    }

    getAll() {
        return Object.keys(this.__items).map(id => this.__items[id])
    }

    getById = (id) => {
        return this.__items[id.toString()]
    }

    getStores() {
        return this.__stores
    }

    __add = (item) => {
        this.__items[item.id] = new DataModel(item, this)
    }

    __update = (item) => {
        const storeItem = this.getById(item.id)
        if (!storeItem) return this.__add(item)
        Object.assign(storeItem, item)
    }

    __delete(id) {
        delete this.__items[id]
    }
}

export default SimpleStore