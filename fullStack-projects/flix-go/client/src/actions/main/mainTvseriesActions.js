import { MAIN_TVSERIES } from '../../constants'

export const loadMainTvseries = () => ({
    type: MAIN_TVSERIES.LOAD_ITEMS
})

export const setMainTvseries = items => ({
    type: MAIN_TVSERIES.SET_ITEMS,
    payload: { items }
})

export const clearMainTvseries = () => ({
    type: MAIN_TVSERIES.CLEAR_ITEMS
})