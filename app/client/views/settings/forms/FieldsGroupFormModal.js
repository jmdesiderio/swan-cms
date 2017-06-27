import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Modal from '../../../components/Modal'
import Confirmation from '../../../components/Confirmation'
import { Button, Text } from '../../../elements/Fields'
import { Errors } from '../../../elements/Errors/Errors'

import { getFieldGroupsQuery } from '../FieldsView'

class SettingsFieldsFormModal extends Component {
  static propTypes = {
    dirty: PropTypes.bool,
    handleSubmit: PropTypes.func,
    invalid: PropTypes.bool,
    isOpen: PropTypes.bool.isRequired,
    mutate: PropTypes.func,
    onClose: PropTypes.func.isRequired,
    pristine: PropTypes.bool,
    reset: PropTypes.func.isRequired,
    submitting: PropTypes.bool
  }

  state = {
    errors: [],
    isConfirmationOpen: false
  }

  onFormSubmit = input => {
    const { mutate } = this.props

    return mutate({ refetchQueries: [{ query: getFieldGroupsQuery }], variables: input })
      .then(this.onCloseAndReset)
      .catch(err => this.setState({ errors: [err.message] }))
  }

  onRequestClose = () => {
    if (this.props.dirty) return this.openConfirmation()
    this.onCloseAndReset()
  }

  onCloseAndReset = () => {
    this.closeConfirmation()
    this.props.reset()
    this.props.onClose()
  }

  openConfirmation = () => this.setState({ isConfirmationOpen: true })

  closeConfirmation = () => this.setState({ isConfirmationOpen: false })

  renderConfirmation () {
    return (
      <Confirmation
        isOpen={this.state.isConfirmationOpen}
        onRequestCancel={this.closeConfirmation}
        onRequestConfirm={this.onCloseAndReset}
      >
        You have unsaved changes that will be lost.
      </Confirmation>
    )
  }

  render () {
    const { handleSubmit, invalid, isOpen, pristine, submitting } = this.props
    const { errors } = this.state

    return (
      <div>
        <Modal contentLabel='New Group' isOpen={isOpen} onRequestClose={this.onRequestClose}>
          <form onSubmit={handleSubmit(this.onFormSubmit)}>
            {errors.length ? <Errors list={errors} /> : null}
            <Field component={Text} label='Group Name' name='groupName' />
            <Button disabled={invalid || pristine || submitting}>
              Create
            </Button>
          </form>
        </Modal>
        {this.renderConfirmation()}
      </div>
    )
  }
}

const validate = values => {
  const errors = {}
  if (!values.groupName) {
    errors.groupName = 'Group name cannot be empty'
  }
  return errors
}

const mutation = gql`
  mutation createFieldGroup($groupName: String!) {
    createFieldGroup(input: { name: $groupName }) {
      id
    }
  }
`

export default compose(graphql(mutation), reduxForm({ form: 'SettingsFieldsGroupFormModal', validate }))(
  SettingsFieldsFormModal
)
