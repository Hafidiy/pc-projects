import React from 'react'

import AppNavbar from './components/AppNavbar'
import ItemModal from './components/ItemModal'
import ShoppingList from './components/ShoppingList'

import store from './store'
import { Provider } from 'react-redux'
import { loadUser } from './actions/authActions'

import './App.css'
import { Container } from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'

class App extends React.Component {

  componentDidMount = () => store.dispatch(loadUser())
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <AppNavbar />
          <Container>
            <ItemModal />
            <ShoppingList />
          </Container>
        </div>
      </Provider>
    )
  }
}

export default App;
