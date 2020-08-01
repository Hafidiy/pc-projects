import { MAIN_PARAMS } from '../../constants'

export const changeMainParams = (keyType, newValue) => ({
    type: MAIN_PARAMS.CHANGE_PARAM,
    payload: { keyType, newValue }
})

export const setMainParamsDefault = () => ({
    type: MAIN_PARAMS.SET_DEFAULT
})