// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

import { logout } from '../auth'

export default class Logout extends Component {
  componentWillMount () {
    logout()
  }

  render () {
    return (
      <Redirect to='/admin/login' />
    )
  }
}

Logout.propTypes = {
  children: PropTypes.node
}
