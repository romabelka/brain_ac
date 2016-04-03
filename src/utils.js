import store from './store'

export function getRelation(entity, relation) {
    const state = store.getState()
    if (!entity[relation] || !state[relation]) return []

    return state[relation].entities.filter(item => entity[relation].includes(item.id))
}