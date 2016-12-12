// @flow
import React, { Component, PropTypes } from 'react'
import { compose } from 'redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'

import Sidebar from '../../components/Sidebar/Sidebar'
import s from './MainLayout.scss'

class MainLayout extends Component {
  render () {
    return (this.props.data.loading) ? null : (
      <div className={s.root}>
        <Sidebar data={this.props.data} />
        <main className={s.main}>
          {this.props.children}
        </main>
      </div>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.element,
  data: PropTypes.object
}

const query = gql`
  query currentUser {
    currentUser {
      getName
    }
  }
`

export default compose(
  graphql(query)
)(MainLayout)
