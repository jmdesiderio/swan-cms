import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import PageHeader from '../../components/PageHeader'
import PageBodyWrapper from '../../components/PageBodyWrapper'
import PageSidebar from '../../components/PageSidebar'
import PageFooter from '../../components/PageFooter'
import FieldsGroupFormModal from './forms/FieldsGroupFormModal'

class SettingsFieldsView extends Component {
  static propTypes = {
    data: PropTypes.object,
    match: PropTypes.object
  }

  state = {
    isNewFieldModalOpen: false
  }

  openNewFieldModal = () => this.setState({ isNewFieldModalOpen: true })

  closeNewFieldModal = () => this.setState({ isNewFieldModalOpen: false })

  getFieldGroupItems () {
    const { getFieldGroups } = this.props.data
    const url = '/admin/config/settings/fields'

    return [
      {
        id: 'ALL',
        name: 'All Fields',
        linkUrl: url
      },
      ...getFieldGroups.map(({ id, name }) => ({ id, name, linkUrl: `${url}/${id}` }))
    ]
  }

  getDropdownMenuItems () {
    return [
      {
        name: 'Rename selected group',
        action: () => {}
      },
      {
        name: 'Delete selected group',
        action: () => {}
      }
    ]
  }

  renderSidebar () {
    const { params } = this.props.match

    const props = {
      items: this.getFieldGroupItems(),
      selectedId: params.id || 'ALL',
      selectedMenu: !params.id ? null : this.getDropdownMenuItems(),
      buttonText: 'New Group',
      buttonAction: this.openNewFieldModal
    }

    return <PageSidebar {...props} />
  }

  render () {
    const { data } = this.props

    if (data.loading) return null

    const { isNewFieldModalOpen } = this.state
    const hasFieldGroups = data.getFieldGroups.length > 0
    const Sidebar = this.renderSidebar()

    return (
      <div>
        <PageHeader
          title='Fields Settings'
          buttonText='New Field'
          buttonLink={'/admin/config/settings/fields/new'}
          showButton={hasFieldGroups}
        />
        <PageBodyWrapper Sidebar={Sidebar}>
          {!hasFieldGroups && 'No Fields Exist Yet'}
        </PageBodyWrapper>
        <PageFooter helpUrl={'TODO: add help link'} />
        <FieldsGroupFormModal isOpen={isNewFieldModalOpen} onClose={this.closeNewFieldModal} />
      </div>
    )
  }
}

export const getFieldGroupsQuery = gql`
  query {
    getFieldGroups {
      id
      name
    }
  }
`

export default compose(graphql(getFieldGroupsQuery))(SettingsFieldsView)
