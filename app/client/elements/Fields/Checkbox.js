import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { FieldWrapper } from './'

const CheckboxElement = styled.input`
  margin: 0 .5rem 0 0;
`

const Label = styled.label`
  display: block;
  font-size: .75rem;
`

export const Checkbox = ({ input, meta, ...custom }) => (
  <FieldWrapper>
    <Label>
      <CheckboxElement
        {...input}
        {...custom} />
      {custom.label}
    </Label>
  </FieldWrapper>
)

Checkbox.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  id: PropTypes.string,
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  type: PropTypes.string
}

Checkbox.defaultProps = {
  type: 'checkbox'
}

export default Checkbox
