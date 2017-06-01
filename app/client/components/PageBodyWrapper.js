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

const PageBodyWrapper = ({ children, sidebar }) => {
  return (
    <Wrapper hasSidebar={Boolean(sidebar)}>
      {sidebar}
      <Content>
        {children}
      </Content>
    </Wrapper>
  )
}

PageBodyWrapper.propTypes = {
  children: PropTypes.node,
  sidebar: PropTypes.element
}

export default PageBodyWrapper
