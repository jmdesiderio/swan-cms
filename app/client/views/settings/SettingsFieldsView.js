import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Modal from '../../components/Modal'
import PageHeader from '../../components/PageHeader'
import PageBodyWrapper from '../../components/PageBodyWrapper'
import PageSidebar from '../../components/PageSidebar'
import PageFooter from '../../components/PageFooter'

class SettingsFieldsView extends Component {
  static propTypes = {
    data: PropTypes.object,
    match: PropTypes.object
  }

  state = {
    isNewFieldDialogOpen: false
  }

  openNewFieldDialog = () => this.setState({ isNewFieldDialogOpen: true })

  closeNewFieldDialog = () => this.setState({ isNewFieldDialogOpen: false })

  getFieldGroupItems () {
    const { getFieldGroups } = this.props.data

    return getFieldGroups.map(({ id, name }) => ({
      id,
      name,
      linkUrl: '/admin/config/settings/fields/' + id
    }))
  }

  renderSidebar () {
    const { match } = this.props

    const items = [
      {
        name: 'All Fields',
        linkUrl: '/admin/config/settings/fields',
        id: 'ALL'
      },
      ...this.getFieldGroupItems()
    ]

    const selectedMenu = !match.params.id
      ? null
      : [
        {
          name: 'Rename selected group',
          action: () => {}
        },
        {
          name: 'Delete selected group',
          action: () => {}
        }
      ]

    const props = {
      items,
      selectedId: match.params.id || 'ALL',
      selectedMenu: selectedMenu,
      buttonText: 'New Group',
      buttonAction: this.openNewFieldDialog
    }

    return <PageSidebar {...props} />
  }

  render () {
    const { data } = this.props

    if (data.loading) return null

    const { isNewFieldDialogOpen } = this.state
    const hasFieldGroups = data.getFieldGroups.length > 0
    const sidebar = this.renderSidebar()

    return (
      <div>
        <PageHeader
          title='Fields Settings'
          buttonText='New Field'
          buttonLink={'/admin/config/settings/fields/new'}
          showButton={hasFieldGroups}
        />
        <PageBodyWrapper sidebar={sidebar}>
          {!hasFieldGroups && 'No Fields Exist Yet'}
        </PageBodyWrapper>
        <PageFooter helpUrl={'TODO: add help link'} />
        <Modal contentLabel='New Field' isOpen={isNewFieldDialogOpen} onRequestClose={this.closeNewFieldDialog}>
          Hi
        </Modal>
      </div>
    )
  }
}

const query = gql`
  query {
    getFieldGroups {
      id,
      name
    }
  }
`

export default compose(graphql(query))(SettingsFieldsView)
