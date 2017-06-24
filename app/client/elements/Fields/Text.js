import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'

import { FieldWrapper } from './'

const InputElement = styled.input`
  border: 1px solid ${p => (p.hasError ? p.theme.colors.red : p.theme.colors.gainsboro)};
  border-radius: .25rem;
  margin: .25rem 0;
  padding: .75rem .875rem;
  width: 100%;

  &:focus {
    border-color: ${p => p.theme.colors.blue};
    box-shadow: 0 0 5px ${p => lighten(0.08, p.theme.colors.blue)};
    outline: 0;
  }
`

const Text = ({ input, meta, id, label, ...custom }) => {
  const { touched, error } = meta
  const { name } = input

  return (
    <FieldWrapper error={touched && error} label={label} htmlFor={id || name}>
      <InputElement hasError={touched && error} id={id || name} type='text' {...input} {...custom} />
    </FieldWrapper>
  )
}

Text.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.string
}

export default Text
