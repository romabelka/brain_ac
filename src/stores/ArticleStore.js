class ArticleStore {
    constructor(initialState) {
        this.__items = initialState
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