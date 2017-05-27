// @flow
import React, { Component } from 'react'
import styled from 'styled-components'

import LoginForm from '../../forms/LoginForm'

const Wrapper = styled.div`
  max-width: 18rem;
  width: 100%;
`

const Heading = styled.h1`
  margin: 0 0 1.75rem;
  text-align: center;
`

const Logo = styled.div`
  margin: 2rem 0;
  text-align: center;
`

class LoginView extends Component {
  render () {
    return (
      <Wrapper>
        <Heading>Site Name</Heading>
        <LoginForm />
        <Logo>Swan CMS</Logo>
      </Wrapper>
    )
  }
}

export default LoginView
