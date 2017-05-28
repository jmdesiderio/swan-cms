import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

import { Button, Checkbox, Password, Text } from '../elements/Fields'
import { Errors } from '../elements/Errors/Errors'

const Row = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const Link = styled.a`
  font-size: .75rem;
`

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
    return this.props
      .mutate({
        variables: input
      })
      .then(({ data }) => {
        this.props.history.push('/admin/config')
      })
      .catch(err => {
        this.setState({ errors: [err.message] })
      })
  }

  renderLoginFormBottom () {
    return (
      <div>
        <Field component={Password} label='Password' name='password' />
        <Row>
          <Field component={Checkbox} label='Keep me logged in' name='keepLoggedIn' />
          <Link onClick={this.resetPasswordLinkHandler}>
            Forget your password?
          </Link>
        </Row>
      </div>
    )
  }

  render () {
    const { handleSubmit, invalid, pristine, submitting } = this.props
    const { errors, isResetPasswordForm } = this.state
    const buttonText = isResetPasswordForm ? 'Reset Password' : 'Login'

    return (
      <form onSubmit={handleSubmit(this.submitHandler)}>
        {errors.length ? <Errors list={errors} /> : null}
        <Field component={Text} label='Username or Email' name='username' />
        {isResetPasswordForm ? null : this.renderLoginFormBottom()}
        <Button disabled={invalid || pristine || submitting} text={buttonText} />
      </form>
    )
  }
}

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  history: PropTypes.object,
  invalid: PropTypes.bool,
  mutate: PropTypes.func,
  pristine: PropTypes.bool,
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
    )
  }
`

export default compose(graphql(mutation), reduxForm({ form: 'LoginForm', validate }), withRouter)(LoginForm)
