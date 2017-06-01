import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.footer`
  color: ${p => p.theme.colors.aluminum};
  font-size: .75rem;
  padding: 2rem;
  text-align: center;
`

const MainFooter = () => (
  <Wrapper>
    Swan CMS - Copyright 2017
  </Wrapper>
)

export default MainFooter
