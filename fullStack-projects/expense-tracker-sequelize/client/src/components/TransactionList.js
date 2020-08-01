import React, { useContext, useEffect } from 'react'
import { GlobalContext } from '../context/GlobalState'

import { Transaction } from './Transaction'

export const TransactionList = () => {
  const { transactions, getTransactions } = useContext(GlobalContext)

  useEffect(() => {
    getTransactions()
  }, [])

  return (
    <>
      <h3>History</h3>
      <ul className='list'>
        {transactions.length > 0 ? transactions.map(item => (
          <Transaction item={item} key={item.id} />
        )) : null}
      </ul>
    </>
  )
}
