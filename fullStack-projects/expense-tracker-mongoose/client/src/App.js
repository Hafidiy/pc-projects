import React from 'react'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { AddTransaction} from './components/AddTransaction'
import { AnimationCont } from './components/AnimationCont'
import { IncomeExpenses } from './components/IncomeExpenses'
import { TransactionList } from './components/TransactionList'

import { GlobalProvider } from './context/GlobalState'

import './App.css'

function App() {
  return (
    <GlobalProvider>
      <AnimationCont />
      <div className='container'>
        <Header />
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTransaction />
      </div>
    </GlobalProvider>
  )
}

export default App