import AppDispatcher from '../dispatcher'
import { EventEmitter } from 'events'
import { DELETE_ARTICLE } from '../AC/constants'

class SimpleStore extends EventEmitter {
    constructor(initialState) {
        super()
        this.__items = initialState
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
        return this.__items.slice()
    }

    getById(id) {
        return this.__items.filter(item => item.id == id)[0]
    }

    __add(item) {
        this.__items.push(item)
    }

    __delete(id) {
        this.__items = this.__items.filter(item => item.id != id)
    }
}

export default SimpleStore