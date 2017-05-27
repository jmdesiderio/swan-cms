// @flow
import React, { Component } from 'react'

import LoginForm from '../../forms/LoginForm'

import s from './LoginView.scss'

class LoginView extends Component {
  render () {
    return (
      <div className={s.root}>
        <h1 className={s.heading}>Site Name</h1>
        <LoginForm />
        <div className={s.logo}>Swan CMS</div>
      </div>
    )
  }
}

export default LoginView
