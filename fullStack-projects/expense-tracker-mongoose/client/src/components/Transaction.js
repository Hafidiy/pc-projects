import React, { useContext } from 'react'

import { numberWithCommas } from '../utils/format'
import { GlobalContext } from '../context/GlobalState'

export const Transaction = ({ item }) => {
  const { deleteTransaction, error } = useContext(GlobalContext)

  const sign = item.amount < 0 ? '-' : '+'

  if(error) {
    alert(error)
  }

  return (
    <li className={sign === '-' ? 'minus' : 'plus'}>
      {item.text}
      <span>{`${sign}$${numberWithCommas(Math.abs(item.amount))}`}</span>
      <button className='delete-btn' onClick={() => deleteTransaction(item._id)}>x</button>
    </li>
  )
}
