import AppDispatcher from '../dispatcher'
import { LOAD_COMMENTS_FOR_ARTICLE, ADD_COMMENT, SUCCESS, START, FAIL } from '../AC/constants'
import SimpleStore from './SimpleStore'

class CommentStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response, error } = action
            //AppDispatcher.waitFor([someStore.dispatchToken])
            switch (type) {
                case LOAD_COMMENTS_FOR_ARTICLE + SUCCESS:
                    response.forEach(this.__add)
                    break;

                case ADD_COMMENT:
                    this.__add(data.comment)
                    break;

                default: return
            }

            this.emitChange()
        })
    }
}

export default CommentStore