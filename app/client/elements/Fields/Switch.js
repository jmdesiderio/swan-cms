import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { lighten } from 'polished'

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

const Switch = ({ input, meta: { touched, error }, id, ...custom }) =>
  <div>
    {custom.label}
    <InputElement id={id || input.name} type='checkbox' {...input} {...custom} />
  </div>

Switch.propTypes = {
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  placeholder: PropTypes.string
}

export default Switch
