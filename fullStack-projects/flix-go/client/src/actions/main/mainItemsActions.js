import { MAIN_ITEMS } from '../../constants'

export const loadMainItems = () => ({
    type: MAIN_ITEMS.LOAD_ITEMS
})

export const setMainItems = items => ({
    type: MAIN_ITEMS.SET_ITEMS,
    payload: { items }
})

export const clearMainItems = () => ({
    type: MAIN_ITEMS.CLEAR_ITEMS
})