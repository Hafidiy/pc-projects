import { ADMIN_ITEM_STATUS } from '../../constants'

const itemStatusReducer = (state = {}, action) => {
    switch(action.type){
        case ADMIN_ITEM_STATUS.LOAD:
            return {
                ...state,
                isLoading: true,
                success: false,
                error: false
            }
        case ADMIN_ITEM_STATUS.LOAD_SUCCESS:
            return {
                ...state,
                isLoading: false,
                success: true,
                error: false
            }
        case ADMIN_ITEM_STATUS.LOAD_FAIL:
            return {
                ...state,
                isLoading: false,
                success: false,
                error: true
            }
        case ADMIN_ITEM_STATUS.CLEAR_STATUS:
            return {}
        
        default:
            return state
    }
}

export default itemStatusReducer