import React from 'react'
import { Todos } from './todos'
import { Addtodo } from './addtodo'
import { Pagination } from './pagination'


class App extends React.Component{

  render() {
    return (
      <>
        <Addtodo />
        <Pagination />
        <Todos />
      </>  
    )
  }
}

export default App
