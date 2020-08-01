import { MAIN_MOVIES } from '../../constants'

export const loadMainMovies = () => ({
    type: MAIN_MOVIES.LOAD_ITEMS
})

export const setMainMovies = items => ({
    type: MAIN_MOVIES.SET_ITEMS,
    payload: { items }
})

export const clearMainMovies = () => ({
    type: MAIN_MOVIES.CLEAR_ITEMS
})