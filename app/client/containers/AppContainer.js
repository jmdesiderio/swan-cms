import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import ConfigContainer from './ConfigContainer'
import LoginContainer from './LoginContainer'
import LogoutContainer from './LogoutContainer'

const Wrapper = styled.div`
  height: 100%;
`

const AppContainer = () => (
  <Wrapper>
    <Helmet title='Swan CMS Admin' />
    <Switch>
      <Route path='/admin/config' component={ConfigContainer} />
      <Route exact path='/admin/login' component={LoginContainer} />
      <Route exact path='/admin/logout' component={LogoutContainer} />
      <Redirect to='/admin/login' />
    </Switch>
  </Wrapper>
)

export default AppContainer
