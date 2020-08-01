import { EXPECTED_ITEMS } from '../../constants'

const expectedItemsReducer = (state = [], action) => {
    switch(action.type){
        case EXPECTED_ITEMS.LOAD_ITEMS:
            return state

        case EXPECTED_ITEMS.SET_ITEMS:
            return [...state, ...action.payload.items]
        
        case EXPECTED_ITEMS.CLEAR_ITEMS:
            return []

        default:
            return state
    }
}

export default expectedItemsReducer