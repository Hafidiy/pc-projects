import { SWIPE_ITEMS } from '../../constants'

const swipeItemsReducer = (state = [], action) => {
    switch(action.type){
        case SWIPE_ITEMS.LOAD_ITEMS:
            return state

        case SWIPE_ITEMS.SET_ITEMS:
            return [...state, ...action.payload.items]
        
        case SWIPE_ITEMS.CLEAR_ITEMS:
            return []

        default:
            return state
    }
}

export default swipeItemsReducer