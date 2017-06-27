import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Helmet from 'react-helmet'
import styled from 'styled-components'

import ConfigContainer from './ConfigContainer'
import LoginContainer from './LoginContainer'
import LogoutContainer from './LogoutContainer'

const URL_PREFIX = '/admin'

const Wrapper = styled.div`
  height: 100%;
`

const AppContainer = () =>
  <Wrapper>
    <Helmet title='Swan CMS Admin' />
    <Switch>
      <Route path={`${URL_PREFIX}/config`} component={ConfigContainer} />
      <Route exact path={`${URL_PREFIX}/login`} component={LoginContainer} />
      <Route exact path={`${URL_PREFIX}/logout`} component={LogoutContainer} />
      <Redirect to={`${URL_PREFIX}/login`} />
    </Switch>
  </Wrapper>

export default AppContainer
