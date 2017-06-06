import React from 'react'
import PropTypes from 'prop-types'
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
  padding-left: ${p => p.theme.sizes.sidebarWidth};
  width: 100%;
`

const MainLayout = props => (
  <Wrapper>
    <MainSidebar />
    <Main>
      <Breadcrumbs />
      {props.children}
      <MainFooter />
    </Main>
  </Wrapper>
)

MainLayout.propTypes = {
  children: PropTypes.node
}

export default MainLayout
