import React from 'react'
import { Route, IndexRedirect } from 'react-router'

import CoreLayout from './layouts/CoreLayout/CoreLayout'
import DashboardView from './views/DashboardView/DashboardView'
import SettingsView from './views/SettingsView/SettingsView'

export default (
  <Route path='/admin' component={CoreLayout}>
    <IndexRedirect to='dashboard' />
    <Route path='dashboard' component={DashboardView} />
    <Route path='settings' component={SettingsView} />
  </Route>
)
