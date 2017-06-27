import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  ${p => (p.hasSidebar ? 'display: flex;' : null)}
`

const Content = styled.div`
  background-color: ${p => p.theme.colors.white};
  flex-grow: 1;
  padding: 1rem;
`

const PageBodyWrapper = ({ children, Sidebar }) => {
  return (
    <Wrapper hasSidebar={Boolean(Sidebar)}>
      {Sidebar}
      <Content>
        {children}
      </Content>
    </Wrapper>
  )
}

PageBodyWrapper.propTypes = {
  children: PropTypes.node,
  Sidebar: PropTypes.element
}

export default PageBodyWrapper
