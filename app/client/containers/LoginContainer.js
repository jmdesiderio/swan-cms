import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

import { isAuthorized } from '../auth'

import LoginLayout from '../layouts/LoginLayout'

import LoginView from '../views/LoginView/LoginView'

class LoginContainer extends Component {
  render () {
    if (isAuthorized()) return <Redirect to='/admin/config' />

    return (
      <LoginLayout>
        <LoginView />
      </LoginLayout>
    )
  }
}

export default LoginContainer
