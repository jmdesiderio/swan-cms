import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import ButtonLink from '../elements/Fields/ButtonLink'

const Wrapper = styled.div`
  border-bottom: 1px solid ${p => p.theme.colors.gainsboro};
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`

const PageHeader = ({ title, buttonText, buttonLink, showButton }) => (
  <Wrapper>
    <h1>{title}</h1>
    {showButton && <ButtonLink to={buttonLink}>{buttonText}</ButtonLink>}
  </Wrapper>
)

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  buttonText: PropTypes.string,
  buttonLink: PropTypes.string,
  showButton: PropTypes.bool
}

PageHeader.defaultProps = {
  showButton: false
}

export default PageHeader
