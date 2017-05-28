import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { Button, Switch, Text } from '../../../elements/Fields'
import { Errors } from '../../../elements/Errors/Errors'

class SettingsGeneralForm extends Component {
  constructor (props) {
    super(props)

    this.state = {
      errors: []
    }
  }

  submitHandler (input) {}

  render () {
    const { handleSubmit, invalid, pristine, submitting } = this.props
    const { errors } = this.state

    return (
      <form onSubmit={handleSubmit(this.submitHandler)}>
        {errors.length ? <Errors list={errors} /> : null}
        <Field component={Text} label='System Name' id='systemName' name='systemName' />
        <Field component={Switch} label='System Status' id='systemStatus' name='systemStatus' />
        <Button disabled={invalid || pristine || submitting} text='Save' />
      </form>
    )
  }
}

SettingsGeneralForm.propTypes = {
  handleSubmit: PropTypes.func,
  invalid: PropTypes.bool,
  mutate: PropTypes.func,
  pristine: PropTypes.bool,
  submitting: PropTypes.bool
}

const validate = values => {
  const errors = {}
  if (!values.systemName) {
    errors.systemName = 'System Name cannot be empty'
  }
  return errors
}

export default compose(reduxForm({ form: 'SettingsGeneralForm', validate }))(SettingsGeneralForm)
