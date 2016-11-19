// @flow

import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

import { Checkbox, Button, Input } from '../../elements/Field/Field'

import s from './LoginView.scss'

class LoginView extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isResetPasswordForm: false
    }

    this.linkHandler = this.linkHandler.bind(this)
  }

  linkHandler () {
    this.setState({
      isResetPasswordForm: true
    })
  }

  renderLoginFormBottom () {
    return (
      <div>
        <Field component={Input}
          label='Password'
          id='password'
          name='password'
          type='password' />
        <div className={s.row}>
          <Field component={Checkbox}
            label='Keep me logged in'
            name='keepLoggedIn' />
          <a className={s.link}
            onClick={this.linkHandler}>
            Forget your password
          </a>
        </div>
      </div>
    )
  }

  render () {
    const { handleSubmit, invalid, pristine, submitting } = this.props
    const { isResetPasswordForm } = this.state
    const label = (isResetPasswordForm) ? 'Reset Password' : 'Login'

    return (
      <form className={s.root}
        onSubmit={handleSubmit}>
        <h1 className={s.heading}>{label}</h1>
        <Field component={Input}
          label='Username or Email'
          id='username'
          name='username' />
        {(isResetPasswordForm) ? null : this.renderLoginFormBottom()}
        <Button disabled={invalid || pristine || submitting}
          text={label} />
        <div className={s.logo}>Swan CMS</div>
      </form>
    )
  }
}

LoginView.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
}

export default reduxForm({
  form: 'LoginForm'
})(LoginView)
