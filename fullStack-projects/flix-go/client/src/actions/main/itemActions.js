import { MAIN_ITEM } from '../../constants'

export const loadMainItem = id => ({
    type: MAIN_ITEM.LOAD_ITEM,
    payload: { id }
})

export const setMainItem = item => ({
    type: MAIN_ITEM.SET_ITEM,
    payload: { item }
})

export const clearMainItem = () => ({
    type: MAIN_ITEM.CLEAR_ITEM
})