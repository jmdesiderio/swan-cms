import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100%;
`

function LoginLayout ({ children }) {
  return (
    <Wrapper>
      {children}
    </Wrapper>
  )
}

LoginLayout.propTypes = {
  children: PropTypes.element
}

export default LoginLayout
