// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

import Sidebar from '../components/Sidebar'

const Wrapper = styled.div`
  display: flex;
  min-height: 100%
`

const Main = styled.main`
  padding: 1.5rem;
`

class MainLayout extends Component {
  render () {
    return (this.props.data.loading) ? null : (
      <Wrapper>
        <Sidebar data={this.props.data} />
        <Main>
          {this.props.children}
        </Main>
      </Wrapper>
    )
  }
}

MainLayout.propTypes = {
  children: PropTypes.node,
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
