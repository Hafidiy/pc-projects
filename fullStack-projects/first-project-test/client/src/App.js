import React from 'react'
import { BrowserRouter, Route, Redirect } from 'react-router-dom'

import { Login } from './views/login'
import { Dash } from './views/dash/index'

function App() {
  return (
    <BrowserRouter>
      {localStorage.getItem('token')
        ? <Redirect to='/student/dashboard' />
        : <Redirect to='/login'/>
      }
      <Route path='/login' component={Login} />
      <Route path='/student/dashboard' component={Dash} />
    </BrowserRouter>  
  )
}

export default App;
