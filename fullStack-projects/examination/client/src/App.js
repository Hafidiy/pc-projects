import React from 'react'
import { Exam } from './components/exam'
import { Home } from './components/home'
// import { Admin } from './components/admin'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Route path='/' exact component={Home} />
      <Route path='/exam' component={Exam} />
      {/* <Route path='/admin' component={Admin} /> */}
    </BrowserRouter>
  )
}

export default App;
