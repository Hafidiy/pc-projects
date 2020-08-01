import React, { useState, useContext } from 'react'

import { GlobalContext } from '../context/GlobalState'

export const AddTransaction = () => {
  const { addItem, transactions } = useContext(GlobalContext)
  const [text, setText] = useState('')
  const [amount, setAmount] = useState(0)

  const handleSubmit = e => {
    e.preventDefault()

    const newTransaction = {
      text,
      amount: parseInt(amount)
    }

    addItem(newTransaction)
  }

  return (
    <>
      <h3>Add new transaction</h3>
      <form onSubmit={handleSubmit}>
        <div className='form-control'>
          <label htmlFor="text">Text</label>
          <input
            id='text'
            type="text"
            value={text}
            placeholder='Enter text...'
            onChange={e => setText(e.target.value)}
          />
        </div>
        <div className='form-control'>
          <label htmlFor="amount">
            Amount <br/>
            ( negative - expense , positive - income )
          </label>
          <input
            id='amount'
            type="number"
            value={amount}
            placeholder='Enter amount...'
            onChange={e => setAmount(e.target.value)}
          />
        </div>
        <button className='btn' value='submit'>
          Add transaction
        </button>
      </form>
    </>
  )
}
