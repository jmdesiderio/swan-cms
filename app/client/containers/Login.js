// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

import { isAuthorized } from '../auth'

import LoginLayout from '../layouts/LoginLayout'

import LoginView from '../views/LoginView/LoginView'

export default class Config extends Component {
  render () {
    if (isAuthorized()) return <Redirect to='/admin/config' />

    return (
      <LoginLayout>
        <LoginView />
      </LoginLayout>
    )
  }
}

Config.propTypes = {
  children: PropTypes.node
}
