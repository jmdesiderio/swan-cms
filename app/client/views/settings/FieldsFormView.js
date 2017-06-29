import React, { Component } from 'react'
import FieldsForm from './forms/FieldsForm'
import PageHeader from '../../components/PageHeader'
import PageBodyWrapper from '../../components/PageBodyWrapper'
import PageFooter from '../../components/PageFooter'

class SettingsFieldsFormView extends Component {
  render () {
    const showButton = true

    return (
      <div>
        <PageHeader
          title='Fields Settings'
          buttonText='New Field'
          buttonLink={'/admin/config/settings/fields/new'}
          showButton={showButton}
        />
        <PageBodyWrapper>
          <FieldsForm />
        </PageBodyWrapper>
        <PageFooter helpUrl={'TODO: add help link'} />
      </div>
    )
  }
}

export default SettingsFieldsFormView
