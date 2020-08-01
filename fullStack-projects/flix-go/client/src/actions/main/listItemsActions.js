import { LIST_ITEMS } from '../../constants'

export const loadListItems = () => ({
    type: LIST_ITEMS.LOAD_ITEMS
})

export const setListItems = items => ({
    type: LIST_ITEMS.SET_ITEMS,
    payload: { items }
})

export const clearListItems = () => ({
    type: LIST_ITEMS.CLEAR_ITEMS
})