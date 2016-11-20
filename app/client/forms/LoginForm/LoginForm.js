// @flow

import React, { Component, PropTypes } from 'react'
import { Field, reduxForm } from 'redux-form'

import { Checkbox, Button, Input } from '../../elements/Field/Field'

import s from './LoginForm.scss'

const validate = values => {
  const errors = {}
  if (!values.username) {
    errors.username = 'Username is required'
  }
  if (!values.password) {
    errors.password = 'Password is required'
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters'
  }
  return errors
}

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      isResetPasswordForm: false
    }

    this.resetPasswordLinkHandler = this.resetPasswordLinkHandler.bind(this)
  }

  resetPasswordLinkHandler () {
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
            onClick={this.resetPasswordLinkHandler}>
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
      <form onSubmit={handleSubmit}>
        <Field component={Input}
          label='Username or Email'
          id='username'
          name='username' />
        {(isResetPasswordForm) ? null : this.renderLoginFormBottom()}
        <Button disabled={invalid || pristine || submitting}
          text={label} />
      </form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
}

export default reduxForm({
  form: 'LoginForm',
  validate
})(LoginForm)
