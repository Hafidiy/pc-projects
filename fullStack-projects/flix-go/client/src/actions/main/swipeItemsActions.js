import { SWIPE_ITEMS } from '../../constants'

export const loadSwipeItems = () => ({
    type: SWIPE_ITEMS.LOAD_ITEMS
})

export const setSwipeItems = items => ({
    type: SWIPE_ITEMS.SET_ITEMS,
    payload: { items }
})

export const clearSwipeItems = () => ({
    type: SWIPE_ITEMS.CLEAR_ITEMS
})