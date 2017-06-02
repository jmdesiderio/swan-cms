import React, { Component } from 'react'
import PropTypes from 'prop-types'
import PageHeader from '../../components/PageHeader'
import PageBodyWrapper from '../../components/PageBodyWrapper'
import PageSidebar from '../../components/PageSidebar'
import PageFooter from '../../components/PageFooter'

class SettingsFieldsView extends Component {
  renderSidebar () {
    const { match } = this.props

    const items = [
      {
        text: 'All Fields',
        linkUrl: '/admin/config/settings/fields',
        id: 'ALL'
      },
      {
        text: 'Test',
        linkUrl: '/admin/config/settings/fields/1',
        id: 1
      }
    ]

    const selectedMenu = !match.params.id
      ? null
      : [
        {
          text: 'Rename selected group',
          action: () => {}
        },
        {
          text: 'Delete selected group',
          action: () => {}
        }
      ]

    const props = {
      items,
      selectedId: parseInt(match.params.id, 10) || 'ALL',
      selectedMenu: selectedMenu,
      buttonText: 'New Group',
      buttonAction: () => {}
    }

    return <PageSidebar {...props} />
  }

  render () {
    const sidebar = this.renderSidebar()

    return (
      <div>
        <PageHeader
          title='Fields Settings'
          buttonText='New Field'
          buttonLink={'/admin/config/settings/fields/new'}
          showButton
        />
        <PageBodyWrapper sidebar={sidebar}>
          No Fields Exist Yet
        </PageBodyWrapper>
        <PageFooter helpUrl={'TODO: add help link'} />
      </div>
    )
  }
}

SettingsFieldsView.propTypes = {
  match: PropTypes.object
}

export default SettingsFieldsView
