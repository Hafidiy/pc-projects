import { ERROR } from '../constants'

const errorReducer = (state = null, action) => {
    switch(action.type){
        case ERROR.SET_ERROR:
            return action.error
        case ERROR.CLEAR_ERROR:
            return null

        default:
            return state
    }
}

export default errorReducer