import { GRID_ITEMS } from '../../constants'

const gridItemsReducer = (state = [], action) => {
    switch(action.type){
        case GRID_ITEMS.LOAD_ITEMS:
            return state

        case GRID_ITEMS.SET_ITEMS:
            return [...state, ...action.payload.items]
        
        case GRID_ITEMS.CLEAR_ITEMS:
            return []

        default:
            return state
    }
}

export default gridItemsReducer