import React from 'react'
import { Route, IndexRoute } from 'react-router'

import CoreLayout from './layouts/CoreLayout/CoreLayout'
import HomeView from './views/HomeView/HomeView'
import AdminView from './views/AdminView/AdminView'

export default (
  <Route path='/admin' component={CoreLayout}>
    <IndexRoute component={HomeView} />
    <Route path='test' component={AdminView} />
  </Route>
)
