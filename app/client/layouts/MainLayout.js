import React from 'react'
import PropTypes from 'prop-types'
import { compose } from 'redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'

import Sidebar from '../components/Sidebar'

const Wrapper = styled.div`
  display: flex;
  min-height: 100%;
  min-width: 100%;
`

const Main = styled.main`
  padding: 1.5rem;
  width: 100%;
`

const MainLayout = props => {
  if (props.data.loading) return null

  return (
    <Wrapper>
      <Sidebar data={props.data} />
      <Main>
        {props.children}
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
