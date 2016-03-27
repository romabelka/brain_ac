import AppDispatcher from '../dispatcher'
import { EventEmitter } from 'events'

class ArticleStore extends EventEmitter {
    constructor(initialState) {
        super()
        this.__items = initialState

        AppDispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case 'DELETE_ARTICLE':
                    this.__delete(data.id)
                    this.emitChange()
                    break;
            }
        })
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

    getById() {

    }

    __add(item) {
        this.__items.push(item)
    }

    __delete(id) {
        this.__items = this.__items.filter(item => item.id != id)
    }
}

export default ArticleStore