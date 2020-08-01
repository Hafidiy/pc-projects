import { MAIN_PARAMS } from '../../constants'

const defaultState = { genre: 'Action/Adventure', quality: 'FullHD', rates: [2.5, 8.5], year: [2004, 2014], page: 1, pagesCount: null }

const mainParamsReducer = (state = defaultState, action) => {
    switch(action.type){
        case MAIN_PARAMS.CHANGE_PARAM:
            {
                state[action.payload.keyType] = action.payload.newValue
                return state
            }

        case MAIN_PARAMS.SET_DEFAULT:
            {
                state.genre = 'Action/Adventure'
                state.quality = 'FullHD'
                state.rates = [2.5, 8.5]
                state.year = [2004, 2014]
                state.page = 1
                return state
            }

        default:
            return state
    }
}

export default mainParamsReducer