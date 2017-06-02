import React, { Component } from 'react'
import SettingsFieldsForm from './forms/SettingsFieldsForm'
import PageHeader from '../../components/PageHeader'
import PageBodyWrapper from '../../components/PageBodyWrapper'
import PageSidebar from '../../components/PageSidebar'
import PageFooter from '../../components/PageFooter'

class SettingsFieldsNewView extends Component {
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
          <SettingsFieldsForm />
        </PageBodyWrapper>
        <PageFooter helpUrl={'TODO: add help link'} />
      </div>
    )
  }
}

export default SettingsFieldsNewView
