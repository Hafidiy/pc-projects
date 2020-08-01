import { ADMIN_ITEM_DELETE } from '../../constants'

export const adminLoadItemDelete = (id, index, cb) => ({
    type: ADMIN_ITEM_DELETE.LOAD,
    payload: {
        id, index, cb
    }
})

export const adminSetItemDelete = () => ({
    type: ADMIN_ITEM_DELETE.LOAD_SUCCESS
})

export const adminSetItemDeleteError = () => ({
    type: ADMIN_ITEM_DELETE.LOAD_FAIL
})

export const adminClearItemDeleteError = () => ({
    type: ADMIN_ITEM_DELETE.CLEAR_DELETE
})