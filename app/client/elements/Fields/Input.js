import React from 'react'
import PropTypes from 'prop-types'
import Color from 'color'
import styled from 'styled-components'

import { FieldWrapper } from './'

const InputElement = styled.input`
  border: 1px solid ${p => (p.hasError) ? p.theme.colors.red : p.theme.colors.gainsboro};
  border-radius: .25rem;
  margin: .25rem 0;
  padding: .75rem .875rem;
  width: 100%;

  &:focus {
    border-color: ${p => p.theme.colors.blue};
    box-shadow: 0 0 5px ${p => Color(p.theme.colors.blue).lighten(0.08).string()};
    outline: 0;
  }
`

const Input = ({ input, meta: { touched, error }, ...custom }) => (
  <FieldWrapper error={touched && error}
    label={custom.label}
    htmlFor={custom.id}>
    <InputElement hasError={(touched && error)}
      {...input}
      {...custom} />
  </FieldWrapper>
)

Input.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.string,
  type: PropTypes.string
}

Input.defaultProps = {
  type: 'text'
}

export default Input
