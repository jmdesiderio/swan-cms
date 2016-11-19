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
  children: PropTypes.node.isRequired,
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

export const Input = ({ input = {}, meta = {}, ...custom }) => (
  <FieldWrapper label={custom.label} htmlFor={custom.id}>
    <input {...input} {...custom} />
  </FieldWrapper>
)

Input.propTypes = {
  className: PropTypes.string,
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

export const Checkbox = ({ input = {}, meta = {}, ...custom }) => (
  <FieldWrapper>
    <label className={s.label}>
      <input {...input} {...custom} />
      {custom.label}
    </label>
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
