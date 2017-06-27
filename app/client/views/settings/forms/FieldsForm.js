import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Prompt } from 'react-router-dom'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'

import { Button, Switch, Text } from '../../../elements/Fields'
import { Errors } from '../../../elements/Errors/Errors'

class SettingsFieldsForm extends Component {
  static propTypes = {
    dirty: PropTypes.bool,
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    mutate: PropTypes.func,
    pristine: PropTypes.bool,
    submitting: PropTypes.bool
  }

  state = {
    errors: []
  }

  onFormSubmit (input) {}

  render () {
    const { dirty, handleSubmit, invalid, pristine, submitting } = this.props
    const { errors } = this.state

    return (
      <form onSubmit={handleSubmit(this.onFormSubmit)}>
        {errors.length ? <Errors list={errors} /> : null}
        <Field component={Text} label='System Name' id='systemName' name='systemName' />
        <Field component={Switch} label='System Status' id='systemStatus' name='systemStatus' />
        <Button disabled={invalid || pristine || submitting}>
          Save
        </Button>
        <Prompt when={dirty} message='Are you sure you want to leave? You have unsaved changes that will be lost.' />
      </form>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.systemName) {
    errors.systemName = 'System Name cannot be empty'
  }
  return errors
}

export default compose(reduxForm({ form: 'SettingsFieldsForm', validate }))(SettingsFieldsForm)
