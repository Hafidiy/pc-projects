import { LOAD } from '../constants'

const loadingReducer = (state = false, action) => {
    switch(action.type){
        case LOAD.LOADING:
            return true
        case LOAD.SUCCESS:
        case LOAD.FAIL:
            return false

        default:
            return state
    }
}

export default loadingReducer