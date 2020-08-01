import { ADMIN_ITEM_STATUS } from '../../constants'

export const adminLoadItemStatus = (id, index, cb) => ({
    type: ADMIN_ITEM_STATUS.LOAD,
    payload: {
        id, index, cb
    }
})

export const adminSetItemStatus = () => ({
    type: ADMIN_ITEM_STATUS.LOAD_SUCCESS
})

export const adminSetItemStatusError = () => ({
    type: ADMIN_ITEM_STATUS.LOAD_FAIL
})

export const adminClearItemStatusError = () => ({
    type: ADMIN_ITEM_STATUS.CLEAR_STATUS
})