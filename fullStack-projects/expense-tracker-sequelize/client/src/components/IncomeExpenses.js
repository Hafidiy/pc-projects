import React, { useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'
import { numberWithCommas } from '../utils/format'

export const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext)

  let incomeTotal = 
    transactions.filter(transaction => transaction.amount > 0)
    .reduce((acc, item) => acc + item.amount, 0)
    .toFixed(2)

  let expenseTotal = Math.abs(
    transactions.filter(transaction => transaction.amount <= 0)
    .reduce((acc, item) => acc + item.amount, 0))
    .toFixed(2)

  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>+${numberWithCommas(incomeTotal)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id='money-minus' className='money minus'>-${numberWithCommas(expenseTotal)}</p>
      </div>
    </div>
  )
}
