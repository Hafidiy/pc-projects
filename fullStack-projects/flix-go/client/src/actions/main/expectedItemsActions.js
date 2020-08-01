import { EXPECTED_ITEMS } from '../../constants'

export const loadExpectedItems = (length) => ({
    type: EXPECTED_ITEMS.LOAD_ITEMS,
    payload: { length }
})

export const setExpectedItems = items => ({
    type: EXPECTED_ITEMS.SET_ITEMS,
    payload: { items }
})

export const clearExpectedItems = () => ({
    type: EXPECTED_ITEMS.CLEAR_ITEMS
})