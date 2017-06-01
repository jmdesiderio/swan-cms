import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

import MainSidebar from './components/MainSidebar'
import Breadcrumbs from './components/Breadcrumbs'
import MainFooter from './components/MainFooter'

const Wrapper = styled.div`
  display: flex;
  min-height: 100%;
  min-width: 100%;
`

const Main = styled.main`
  padding-left: ${p => p.theme.sizes.mainSidebarWidth};
  width: 100%;
`

const MainLayout = props => {
  if (props.data.loading) return null

  return (
    <Wrapper>
      <MainSidebar data={props.data} />
      <Main>
        <Breadcrumbs />
        {props.children}
        <MainFooter />
      </Main>
    </Wrapper>
  )
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

export default compose(graphql(query))(MainLayout)
