import { MAIN_ITEMS } from '../../constants'

const mainItemsReducer = (state = [], action) => {
    switch(action.type){
        case MAIN_ITEMS.LOAD_ITEMS:
            return state

        case MAIN_ITEMS.SET_ITEMS:
            return [...state, ...action.payload.items]
        
        case MAIN_ITEMS.CLEAR_ITEMS:
            return []

        default:
            return state
    }
}

export default mainItemsReducer