// @flow

import React, { Component } from 'react'

import { Checkbox, Button, Input } from '../../elements/Field/Field'

import s from './LoginView.scss'

export default class LoginView extends Component {
  render () {
    return (
      <div className={s.root}>
        <h1 className={s.heading}>Login</h1>
        <form>
          <Input label='Username or Email' id='username' name='username' />
          <Input label='Password' id='password' name='password' type='password' />
          <div className={s.row}>
            <Checkbox label='Keep me logged in' />
            <a className={s.link}>Forget your password?</a>
          </div>
          <Button text='Login' />
        </form>
        <div className={s.logo}>
          Swan CMS
        </div>
      </div>
    )
  }
}
