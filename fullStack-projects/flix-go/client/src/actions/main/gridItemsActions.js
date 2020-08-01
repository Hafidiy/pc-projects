import { GRID_ITEMS } from '../../constants'

export const loadGridItems = () => ({
    type: GRID_ITEMS.LOAD_ITEMS
})

export const setGridItems = items => ({
    type: GRID_ITEMS.SET_ITEMS,
    payload: { items }
})

export const clearGridItems = () => ({
    type: GRID_ITEMS.CLEAR_ITEMS
})