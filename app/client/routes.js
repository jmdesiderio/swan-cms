// @flow
import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import App from './containers/App'
import Config from './containers/Config'
import Login from './containers/Login'
import Logout from './containers/Logout'

import NoMatchView from './views/NoMatchView/NoMatchView'

export default (history) => (
  <ConnectedRouter history={history}>
    <App>
      <Switch>
        <Route path='/admin/config' component={Config} />
        <Route path='/admin/login' component={Login} />
        <Route path='/admin/logout' component={Logout} />
        <Route component={NoMatchView} />
      </Switch>
    </App>
  </ConnectedRouter>
)
