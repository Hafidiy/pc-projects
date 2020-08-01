import { MAIN_ITEM } from '../../constants'

const mainItemReducer = (state = {}, action) => {
    switch(action.type){
        case MAIN_ITEM.LOAD_ITEM:
            return state

        case MAIN_ITEM.SET_ITEM:
            return {...action.payload.item}
        
        case MAIN_ITEM.CLEAR_ITEM:
                return {}

        default:
            return state
    }
}

export default mainItemReducer