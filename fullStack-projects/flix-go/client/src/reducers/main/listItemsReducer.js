import { LIST_ITEMS } from '../../constants'

const listItemsReducer = (state = [], action) => {
    switch(action.type){
        case LIST_ITEMS.LOAD_ITEMS:
            return state

        case LIST_ITEMS.SET_ITEMS:
            return [...state, ...action.payload.items]
        
        case LIST_ITEMS.CLEAR_ITEMS:
            return []

        default:
            return state
    }
}

export default listItemsReducer