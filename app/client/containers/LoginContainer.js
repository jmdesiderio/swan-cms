import React from 'react'
import { Redirect } from 'react-router-dom'
import styled from 'styled-components'

import { isAuthorized } from '../auth'

import LoginForm from '../forms/LoginForm'

const Wrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100%;
`

const Container = styled.div`
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

const LoginContainer = () => {
  if (isAuthorized()) return <Redirect to='/admin/config' />

  return (
    <Wrapper>
      <Container>
        <Heading>Site Name</Heading>
        <LoginForm />
        <Logo>Swan CMS</Logo>
      </Container>
    </Wrapper>
  )
}

export default LoginContainer
