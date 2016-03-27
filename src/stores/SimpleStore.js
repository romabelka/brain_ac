import AppDispatcher from '../dispatcher'
import { EventEmitter } from 'events'
import { DELETE_ARTICLE } from '../AC/constants'

class SimpleStore extends EventEmitter {
    constructor(initialState) {
        super()
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

    getById(id) {
        return this.__items[id]
    }

    __add = (item) => {
        this.__items[item.id] = item
    }

    __delete(id) {
        delete this.__items[id]
    }
}

export default SimpleStore