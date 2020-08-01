import { returnErrors } from './errorActions'
import {
  USER_LOADED,
  USER_LOADING,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_SUCCESS,
  REGISTER_FAIL
} from './types'

// Check token & load user
export const loadUser = () => async (dispatch, getState) => {
  // User loading
  dispatch({ type: USER_LOADING })

  try{
    let res = await fetch('/api/auth/user', tokenConfig(getState))
    const tmpStatus = res.status
    res = await res.json()

    if(tmpStatus >= 400) {
      dispatch(returnErrors(res.msg, tmpStatus))
      dispatch({ type: AUTH_ERROR })
      return 0
    } else {
      dispatch({
      type: USER_LOADED,
      payload: res
    })
    }
  } catch(err){
    dispatch({ type: AUTH_ERROR })    
  }
}

// Login User
export const login = ({ email, password }) => async dispatch => {
  // Headers
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // Request body
  config.body = JSON.stringify({ email, password })

  // Fetch request
  try{
    let res = await fetch('/api/auth', config)
    const tmpStatus = res.status
    res = await res.json()

    if(tmpStatus >= 400){
      dispatch(returnErrors(res.msg, tmpStatus, 'LOGIN_FAIL'))
      dispatch({ type: LOGIN_FAIL })
      return 0
    } else {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: res
      })
    }
  } catch(err) {
    dispatch({ type: LOGIN_FAIL })
  }
}

// Register User
export const register = ({ name, email, password }) => async dispatch => {
  // Headers
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // Request body
  config.body = JSON.stringify({ name, email, password })

  // Fetch request
  try{
    let res = await fetch('/api/users', config)
    const tmpStatus = res.status
    res = await res.json()

    if(tmpStatus >= 400){
      dispatch(returnErrors(res.msg, tmpStatus, 'REGISTER_FAIL'))
      dispatch({ type: REGISTER_FAIL })
      return 0
    } else {
      dispatch({
        type: REGISTER_SUCCESS,
        payload: res
      })
    }
  } catch(err) {
    dispatch({ type: REGISTER_FAIL })
  }
}

// Logout User
export const logout = () => {
  return {
    type: LOGOUT_SUCCESS
  }
}

// Setup config/headers and token
export const tokenConfig = getState => {
  // Get token from localStorage
  const token = getState().auth.token

  // Headers
  let config = {
    withCredentials: true,
    headers: {"Content-Type": "application/json"}
  }

  // If token, add to headers
  if (token) {
    config.headers['x-auth-token'] = token
  }

  return config
}