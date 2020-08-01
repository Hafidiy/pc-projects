import { ADMIN_ITEM } from '../../constants'

const itemReducer = (state = {}, action) => {
    switch(action.type){
        case ADMIN_ITEM.LOAD_ITEM: {
            return state
        }

        case ADMIN_ITEM.SET_ITEM: {
            state = action.payload.item
            return state
        }

        case ADMIN_ITEM.CHANGE_ITEM: {
            state[action.payload.keyType] = action.payload.value
            return state
        }

        case ADMIN_ITEM.CLEAR_ITEM: {
            state = {}
            return state
        }

        case ADMIN_ITEM.SEND_ITEM: {
            state = action.payload.item
            return state
        }

        case ADMIN_ITEM.DELETE_KEY: {
            delete state[action.payload.keyType]
            return state
        }

        default:
            return state
    }
}

export default itemReducer