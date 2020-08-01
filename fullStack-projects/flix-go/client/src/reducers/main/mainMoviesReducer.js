import { MAIN_MOVIES } from '../../constants'

const mainMoviesReducer = (state = [], action) => {
    switch(action.type){
        case MAIN_MOVIES.LOAD_ITEMS:
            return state

        case MAIN_MOVIES.SET_ITEMS:
            return [...state, ...action.payload.items]
        
        case MAIN_MOVIES.CLEAR_ITEMS:
            return []

        default:
            return state
    }
}

export default mainMoviesReducer