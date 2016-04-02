import AppDispatcher from '../dispatcher'
import { AUTHENTICATE } from '../AC/constants'
import SimpleStore from './SimpleStore'

class UserStore extends SimpleStore {
    constructor(...args) {
        super(...args)

        this.dispatchToken = AppDispatcher.register((action) => {
            const { type, data, response, error } = action
            //AppDispatcher.waitFor([someStore.dispatchToken])
            switch (type) {
                case AUTHENTICATE:
                    this.currentUser = data.user
                    break;

                default: return
            }

            this.emitChange()
        })
    }
}

export default UserStore