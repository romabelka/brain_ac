import AppDispatcher from '../dispatcher'

class ArticleStore {
    constructor(initialState) {
        this.__items = initialState

        AppDispatcher.register((action) => {
            const { type, data } = action

            switch (type) {
                case 'DELETE_ARTICLE':
                    this.__delete(data.id)
                    break;
            }
        })
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