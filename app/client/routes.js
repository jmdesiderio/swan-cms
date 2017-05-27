// @flow
import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import AppContainer from './containers/AppContainer'
import ConfigContainer from './containers/ConfigContainer'
import LoginContainer from './containers/LoginContainer'
import LogoutContainer from './containers/LogoutContainer'

import NoMatchView from './views/NoMatchView/NoMatchView'

export default (history) => (
  <ConnectedRouter history={history}>
    <AppContainer>
      <Switch>
        <Route path='/admin/config' component={ConfigContainer} />
        <Route path='/admin/login' component={LoginContainer} />
        <Route path='/admin/logout' component={LogoutContainer} />
        <Route exact path='/admin' component={() => <Redirect to='/admin/login' />} />
        <Route component={NoMatchView} />
      </Switch>
    </AppContainer>
  </ConnectedRouter>
)
