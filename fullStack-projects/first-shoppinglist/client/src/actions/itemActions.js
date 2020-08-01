import { tokenConfig } from './authActions'
import { returnErrors } from './errorActions'
import { GET_ITEMS, ADD_ITEM, DELETE_ITEM, ITEMS_LOADING } from './types'

export const setItemsLoading = () => {
  return {
    type: ITEMS_LOADING,
  }
} 

export const getItems = () => async dispatch => {
  dispatch(setItemsLoading())
  try{
    let res = await fetch('/api/items')
    const tmpStatus = res.status
    res = await res.json()

    if(tmpStatus >= 400){
      dispatch(returnErrors(res.msg, tmpStatus))
    } else {
      dispatch({
        type: GET_ITEMS,
        payload: res
      })
    }
  } catch(err){
    // alert(err)
  }
}

export const addItem = item => async (dispatch, getState) => {
  try{
    let res = await fetch('/api/items', {
      ...tokenConfig(getState),
      method: 'POST',
      body: JSON.stringify(item)
    })
    const tmpStatus = res.status
    res = await res.json()

    if(tmpStatus >= 400){
      dispatch(returnErrors(res.msg, tmpStatus))
    } else {
      dispatch({
        type: ADD_ITEM,
        payload: res
      })
    }
  } catch(err){
    alert(err)
  }
}

export const deleteItem = id => async (dispatch, getState) => {
  try{
    let res = await fetch(`/api/items/${id}`, {
      ...tokenConfig(getState),
      method: 'DELETE'
    })
    const tmpStatus = res.status
    res = await res.json()

    if(tmpStatus >= 400) {
      dispatch(returnErrors(res.msg, tmpStatus))
    } else {
      dispatch({
        type: DELETE_ITEM,
        payload: id
      })
    }
  } catch(err){
    alert(err)
  }
}