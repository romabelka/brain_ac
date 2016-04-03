import {  } from '../constants'
import { comments } from '../fixtures'

const defaultComments = {
    loading: false,
    loaded: false,
    entities: comments
}


export default (comments = defaultComments, action) => {
    const { type, data } = action

    switch (type) {

    }

    return comments
}