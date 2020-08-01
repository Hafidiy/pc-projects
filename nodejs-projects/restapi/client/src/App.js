import React from 'react'
import { Home } from './components/home'
import { Header } from './components/header'
import { TodosApi } from './components/todos-api'
import { PeopleApi } from './components/people-api'
import { BrowserRouter, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Route path='/' exact component={Home} />
      <Route path='/todos' component={TodosApi} />
      <Route path='/people' component={PeopleApi} />
    </BrowserRouter>
  );
}

export default App;
