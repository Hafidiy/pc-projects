import { ADMIN_ITEMS } from '../../constants'

const itemsReducer = (state = [], action) => {
    switch(action.type) {
        case ADMIN_ITEMS.SET_ITEMS:
            return [
                ...state,
                ...action.items
            ]

        case ADMIN_ITEMS.CHANGE_ITEM_BY:
            {
                state[action.payload.index][action.payload.keyType] = action.payload.newValue
                return [...state]
            }
        
        case ADMIN_ITEMS.CHANGE_ITEM:
            {
                state[action.payload.index] = action.payload.item
                return [...state]
            }

        case ADMIN_ITEMS.DELETE_ITEM:
            {
                state.splice(action.payload.index, 1)
                return [...state]
            }

        default:
            return state
    }
}

export default itemsReducer