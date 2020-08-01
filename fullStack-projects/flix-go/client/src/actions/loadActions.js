import { LOAD } from '../constants'

export const loading = (type) => ({
    type: LOAD.LOADING,
    payload: { type }
})

export const loadSuccess = () => ({
    type: LOAD.SUCCESS
})

export const loadFail = () => ({
    type: LOAD.FAIL
})