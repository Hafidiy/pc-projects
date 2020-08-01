import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { Index } from './views/index'
import { TmpPage } from './views/admin/tmp-page'
import { Admin } from './views/admin'
import { Users } from './views/admin/users'
import Catalog from './views/admin/catalog'
import { Reviews } from './views/admin/reviews'
import AddItem from './views/admin/add-item'
import EditItem from './views/admin/edit-item'
import { Comments } from './views/admin/comments'
import { EditUser } from './views/admin/edit-user'
import Main from './views/main'
import CatalogGrid from './views/main/catalog-grid'
import CatalogList from './views/main/catalog-list'
import DetailsMovie from './views/main/details-movie'
import DetailsTvSeries from './views/main/details-tvseries'
import Pricing from './views/main/pricing'
import Faq from './views/main/faq'
import About from './views/main/about'
import Profile from './views/main/profile'
import SignIn from './views/main/signin'
import SignUp from './views/main/signup'
import Forgot from './views/main/forgot'
import Privacy from './views/main/privacy'
import Contacts from './views/main/contacts'
import Page404 from './views/main/404'

import configureStore from './store'
const store = configureStore()

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Route path='/' exact component={Main} />
        <Route path='/catalog-grid' component={CatalogGrid} />
        <Route path='/catalog-list' component={CatalogList} />
        <Route path='/details-movie' component={DetailsMovie} />
        <Route path='/details-tvseries' component={DetailsTvSeries} />
        <Route path='/pricing' component={Pricing} />
        <Route path='/faq' component={Faq} />
        <Route path='/about' component={About} />
        <Route path='/profile' component={Profile} />
        <Route path='/signin' component={SignIn} />
        <Route path='/signup' component={SignUp} />
        <Route path='/forgot' component={Forgot} />
        <Route path='/privacy' component={Privacy} />
        <Route path='/contacts' component={Contacts} />
        <Route path='/page-404' component={Page404} />
        <Route path='/index' component={Index} />
        <Route path='/admin' component={Admin} />
        <Route path='/admin-catalog' component={Catalog} />
        <Route path='/admin-comments' component={Comments} />
        <Route path='/admin-users' component={Users} />
        <Route path='/admin-reviews' component={Reviews} />
        <Route path='/edit-user' component={EditUser} />
        <Route path='/add-item' component={AddItem} />
        <Route path='/edit-item' component={EditItem} />
        <Route path='/tmp-page' component={TmpPage} />
      </Router>
    </Provider>
  )
}

export default App
