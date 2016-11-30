// @flow
import React from 'react'
import { Router, Route, IndexRedirect } from 'react-router'

import App from './containers/App/App'
import RequireAuth from './containers/RequireAuth/RequireAuth'

import MainLayout from './layouts/MainLayout/MainLayout'
import LoginLayout from './layouts/LoginLayout/LoginLayout'

import DashboardView from './views/DashboardView/DashboardView'
import LoginView from './views/LoginView/LoginView'
import SettingsView from './views/SettingsView/SettingsView'
import NoMatchView from './views/NoMatchView/NoMatchView'

const onUpdate = () => window.scroll(0, 0)

export default (history) => (
  <Router history={history} onUpdate={onUpdate}>
    <Route path='/admin' component={App}>
      <Route component={RequireAuth}>
        <Route component={MainLayout}>
          <IndexRedirect to='dashboard' />
          <Route path='dashboard' component={DashboardView} />
          <Route path='settings' component={SettingsView} />
        </Route>
      </Route>
      <Route component={LoginLayout}>
        <Route path='login' component={LoginView} />
      </Route>
      <Route path='*' component={NoMatchView} />
    </Route>
  </Router>
)
