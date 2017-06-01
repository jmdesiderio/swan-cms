import React, { Component } from 'react'
import SettingsFieldsForm from './forms/SettingsFieldsForm'
import PageHeader from '../../components/PageHeader'
import PageBodyWrapper from '../../components/PageBodyWrapper'
import PageSidebar from '../../components/PageSidebar'

class SettingsFieldsView extends Component {
  createSidebar () {
    return <PageSidebar />
  }

  render () {
    return (
      <div>
        <PageHeader
          title='Fields Settings'
          buttonText='New Field'
          buttonLink={'/admin/config/settings/fields/new'}
          showButton
        />
        <PageBodyWrapper sidebar={this.createSidebar()}>
          <SettingsFieldsForm />
        </PageBodyWrapper>
      </div>
    )
  }
}

export default SettingsFieldsView
