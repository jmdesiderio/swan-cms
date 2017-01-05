// @flow
import React, { Component, PropTypes } from 'react'
import { withRouter } from 'react-router'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import { Checkbox, Button, Input } from '../../elements/Field/Field'
import { Errors } from '../../elements/Errors/Errors'
import s from './LoginForm.scss'

class LoginForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      errors: [],
      isResetPasswordForm: false
    }

    this.resetPasswordLinkHandler = this.resetPasswordLinkHandler.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  resetPasswordLinkHandler () {
    this.setState({
      isResetPasswordForm: true
    })
  }

  submitHandler (input) {
    return this.props.mutate({
      variables: input
    }).then(({ data }) => {
      this.props.router.push('/admin/dashboard')
    }).catch(err => {
      this.setState({ errors: [err.message] })
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
            {'Forget your password?'}
          </a>
        </div>
      </div>
    )
  }

  render () {
    const { handleSubmit, invalid, pristine, submitting } = this.props
    const { errors } = this.state
    const { isResetPasswordForm } = this.state
    const label = (isResetPasswordForm) ? 'Reset Password' : 'Login'

    return (
      <form onSubmit={handleSubmit(this.submitHandler)}>
        {(errors.length) ? <Errors list={errors} /> : null}
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
  mutate: PropTypes.func,
  pristine: PropTypes.bool,
  router: PropTypes.object,
  submitting: PropTypes.bool
}

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

const mutation = gql`
  mutation loginAuth($username: String!, $password: String!) {
    loginAuth(
      username: $username
      password: $password
    ) {
      id
    }
  }
`

export default compose(
  graphql(mutation),
  reduxForm({ form: 'LoginForm', validate }),
  withRouter
)(LoginForm)
