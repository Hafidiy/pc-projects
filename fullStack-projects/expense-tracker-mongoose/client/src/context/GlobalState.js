import React, { createContext, useReducer } from 'react'
import AppReducer from './AppReducer'

// Initial State
const initialState = {
  transactions: [],
  errors: null,
  loading: true
}

// Create context
export const GlobalContext = createContext(initialState)

// Provider component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  // Action
  const getTransactions = async () => {
    try{
      let res = await fetch('/api/v1/transactions')
      if (res.status >= 400){
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: res.error
        })
        return 0
      }
      res = await res.json()

      dispatch({
        type: 'GET_TRANSACTIONS',
        payload: res.data
      })
    } catch(err){
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.error
      })
    }
  }

  const deleteTransaction = async id => {
    try{
      let res = await fetch(`/api/v1/transactions/${id}`, { method: 'DELETE' })
      if (res.status >= 400){
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: res.error
        })
      }
      res = await res.json()

      dispatch({ type: 'DELETE_TRANSACTION', payload: id })
    } catch(err){
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.error
      })
    }
  }

  const addItem = async item => {
    try{
      let res = await fetch('/api/v1/transactions', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(item)
      })
      if (res.status >= 400){
        dispatch({
          type: 'TRANSACTION_ERROR',
          payload: res.error
        })
        return 0
      }
      res = await res.json()

      dispatch({ type: 'ADD_TRANSACTION', payload: res.data })
    } catch(err){
      dispatch({
        type: 'TRANSACTION_ERROR',
        payload: err.error
      })
    }
  }

  return (
    <GlobalContext.Provider value={{
      addItem,
      error: state.error,
      loading: state.loading,
      deleteTransaction,
      getTransactions,
      transactions: state.transactions,
    }}
    >
      {children}
    </GlobalContext.Provider>
  )
}