class DataModel {
    constructor(item, store) {
        Object.assign(this, item)
        this.__store = store
    }

    getRelation(relation) {
        const relStore = this.__store.getStores()[relation]
        if (!this[relation] || !relStore) return []
        return this[relation].map(relStore.getById)
    }
}

export default DataModel