import { MAIN_TVSERIES } from '../../constants'

const mainTvseriesReducer = (state = [], action) => {
    switch(action.type){
        case MAIN_TVSERIES.LOAD_ITEMS:
            return state

        case MAIN_TVSERIES.SET_ITEMS:
            return [...state, ...action.payload.items]
        
        case MAIN_TVSERIES.CLEAR_ITEMS:
            return []

        default:
            return state
    }
}

export default mainTvseriesReducer