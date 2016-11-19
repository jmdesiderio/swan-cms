import React, { PropTypes } from 'react'

import s from './Field.scss'

export const FieldWrapper = ({ children, label, htmlFor }) => {
  const labelElement = (label)
    ? <label className={s.label} htmlFor={htmlFor}>{label}:</label>
    : null

  return (
    <div className={s.fieldWrapper}>
      {labelElement}
      {children}
    </div>
  )
}

FieldWrapper.propTypes = {
  children: PropTypes.element.isRequired,
  htmlFor: PropTypes.string,
  label: PropTypes.string
}

export const Button = ({ disabled, text }) => (
  <button className={s.button}
    disabled={disabled}>
    {text}
  </button>
)

Button.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string
}
Button.defaultProps = {
  text: 'Submit'
}

export const Input = props => (
  <FieldWrapper label={props.label} htmlFor={props.id}>
    <input {...props} />
  </FieldWrapper>
)

Input.propTypes = {
  className: PropTypes.string,
  defaultValue: PropTypes.string,
  disabled: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  value: PropTypes.string
}
Input.defaultProps = {
  className: s.input,
  type: 'text'
}

export const Select = () => (
  <select>
    <option selected>Choose an item...</option>
    <option value='1'>One</option>
    <option value='2'>Two</option>
    <option value='3'>Three</option>
  </select>
)

export const Checkbox = props => (
  <FieldWrapper htmlFor={props.id}>
    <label className={s.label}>
      <input {...props} />
      {props.label}
    </label>
  </FieldWrapper>
)

Checkbox.propTypes = {
  checked: PropTypes.bool,
  className: PropTypes.string,
  defaultChecked: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string
}
Checkbox.defaultProps = {
  className: s.checkbox,
  type: 'checkbox'
}

export const Radio = () => (
  <input type='radio' />
)

export const Switch = () => (
  <input type='checkbox' />
)

export const TextArea = () => (
  <textarea>Textarea input</textarea>
)

export const FileUpload = () => (
  <input type='file' />
)
