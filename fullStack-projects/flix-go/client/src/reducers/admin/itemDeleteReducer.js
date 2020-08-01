import { ADMIN_ITEM_DELETE } from '../../constants'

const itemDeleteReducer = (state = {}, action) => {
    switch(action.type){
        case ADMIN_ITEM_DELETE.LOAD:
            return {
                ...state,
                isLoading: true,
                success: false,
                error: false
            }
        case ADMIN_ITEM_DELETE.LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                error: false
            }
        case ADMIN_ITEM_DELETE.LOAD_FAIL:
            return {
                ...state,
                isLoading: false,
                success: false,
                error: true
            }
        case ADMIN_ITEM_DELETE.CLEAR_DELETE:
            return {}
        
        default:
            return state
    }
}

export default itemDeleteReducer