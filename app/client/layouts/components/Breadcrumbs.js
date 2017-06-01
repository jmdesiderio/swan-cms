import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  border-bottom: 1px solid ${p => p.theme.colors.gainsboro};
  padding: 1rem;
`

const Breadcrumbs = () => <Wrapper>Breadcrumbs</Wrapper>

export default Breadcrumbs
