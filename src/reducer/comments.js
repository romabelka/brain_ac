import { ADD_COMMENT } from '../constants'
import { comments } from '../fixtures'

const defaultComments = {
    loading: false,
    loaded: false,
    entities: comments
}


export default (comments = defaultComments, action) => {
    const { type, data, randomId } = action

    switch (type) {
        case ADD_COMMENT:
            return {...comments, entities: comments.entities.concat({text: data.text, id: randomId})}
    }

    return comments
}