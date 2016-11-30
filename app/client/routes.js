// @flow
import React from 'react'
import { Router, Route, IndexRedirect } from 'react-router'

import App from './containers/App/App'
import {
  requireAuthOnEnter,
  requireAuthOnChange,
  requireNoAuthOnEnter,
  requireNoAuthOnChange
} from './auth'

import MainLayout from './layouts/MainLayout/MainLayout'
import LoginLayout from './layouts/LoginLayout/LoginLayout'

import DashboardView from './views/DashboardView/DashboardView'
import EntriesView from './views/EntriesView/EntriesView'
import GlobalsView from './views/GlobalsView/GlobalsView'
import CategoriesView from './views/CategoriesView/CategoriesView'
import AssetsView from './views/AssetsView/AssetsView'
import LoginView from './views/LoginView/LoginView'
import SettingsView from './views/SettingsView/SettingsView'
import NoMatchView from './views/NoMatchView/NoMatchView'

const onUpdate = () => window.scroll(0, 0)

export default (history) => (
  <Router history={history} onUpdate={onUpdate}>
    <Route path='/admin' component={App}>
      <Route component={MainLayout}
        onEnter={requireAuthOnEnter}
        onChange={requireAuthOnChange}>
        <IndexRedirect to='dashboard' />
        <Route path='dashboard' component={DashboardView} />
        <Route path='entries' component={EntriesView} />
        <Route path='globals' component={GlobalsView} />
        <Route path='categories' component={CategoriesView} />
        <Route path='assets' component={AssetsView} />
        <Route path='settings' component={SettingsView} />
      </Route>
      <Route component={LoginLayout}
        onEnter={requireNoAuthOnEnter}
        onChange={requireNoAuthOnChange}>
        <Route path='login' component={LoginView} />
      </Route>
      <Route path='*' component={NoMatchView} />
    </Route>
  </Router>
)
