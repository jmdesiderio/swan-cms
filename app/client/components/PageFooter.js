import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.footer`
  border-bottom: 1px solid ${p => p.theme.colors.gainsboro};
  border-top: 1px solid ${p => p.theme.colors.gainsboro};
  padding: 1rem;
  text-align: center;
`

const PageFooter = ({ helpUrl }) => (
  <Wrapper>
    {helpUrl && <a href={helpUrl}>Help</a>}
  </Wrapper>
)

PageFooter.propTypes = {
  helpUrl: PropTypes.string
}

export default PageFooter
