import { ADMIN_ITEM } from '../../constants'

export const adminLoadItemOne = (id, cb) => ({
    type: ADMIN_ITEM.LOAD_ITEM,
    payload: { id, cb }
})

export const adminSetItemOne = (item) => ({
    type: ADMIN_ITEM.SET_ITEM,
    payload: { item }
})

export const adminChangeItemOne = (keyType, value) => ({
    type: ADMIN_ITEM.CHANGE_ITEM,
    payload: { keyType, value }
})

export const adminClearItemOne = () => ({
    type: ADMIN_ITEM.CLEAR_ITEM
})

export const adminSendItemOne = (item, type, cb1, cb2) => ({
    type: ADMIN_ITEM.SEND_ITEM,
    payload: { item, type, cb1, cb2 }
})

export const adminDeleteKeyOne = (keyType) => ({
    type: ADMIN_ITEM.DELETE_KEY,
    payload: { keyType }
})