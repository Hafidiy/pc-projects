import { ADMIN_ITEMS } from '../../constants'

// item actions
export const adminSetItems = items => ({
    type: ADMIN_ITEMS.SET_ITEMS,
    items
})

export const adminChangeItem = (item, index) => ({
    type: ADMIN_ITEMS.CHANGE_ITEM,
    payload: {
        item,
        index
    }
})

export const adminChangeItemBy = (index, keyType, newValue) => ({
    type: ADMIN_ITEMS.CHANGE_ITEM_BY,
    payload: {
        newValue,
        keyType,
        index
    }
})

export const adminDeleteItem = index => ({
    type: ADMIN_ITEMS.DELETE_ITEM,
    payload: {
        index
    }
})