import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.div`
  margin: 1rem 0;
  position: relative;
`

const Label = styled.label`
  display: block;
  font-size: .75rem;
`

const Error = styled.div`
  color: ${p => p.theme.colors.red};
  font-size: .75rem;
`

const FieldWrapper = ({ children, error, label, htmlFor }) => {
  return (
    <Wrapper>
      {label ? <Label htmlFor={htmlFor}>{label}:</Label> : null}
      {children}
      {error ? <Error>{error}</Error> : null}
    </Wrapper>
  )
}

FieldWrapper.propTypes = {
  children: PropTypes.node.isRequired,
  error: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  htmlFor: PropTypes.string,
  label: PropTypes.string
}

export default FieldWrapper
