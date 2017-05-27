import React from 'react'
import PropTypes from 'prop-types'
import Color from 'color'
import styled from 'styled-components'

const ButtonElement = styled.button`
  background-image: linear-gradient(
      ${p => p.theme.colors.red}, 
      ${p => Color(p.theme.colors.red).darken(0.08).string()}
    );
  border: 0;
  border-radius: .25rem;
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  padding: .75rem .875rem;
  white-space: nowrap;
  width: 100%;

  &:hover {
    background-image: linear-gradient(
        ${p => Color(p.theme.colors.red).darken(0.08).string()}, 
        ${p => Color(p.theme.colors.red).darken(0.16).string()}
      );
  }

  &:active {
    background-image: linear-gradient(
        ${p => Color(p.theme.colors.red).darken(0.24).string()}, 
        ${p => Color(p.theme.colors.red).darken(0.16).string()}
      );
    outline: 0;
  }

  &[disabled] {
    cursor: default;
    opacity: .25;
  }
`

const Button = ({ disabled, text }) => (
  <ButtonElement disabled={disabled}>
    {text}
  </ButtonElement>
)

Button.propTypes = {
  disabled: PropTypes.bool,
  text: PropTypes.string
}

Button.defaultProps = {
  text: 'Submit'
}

export default Button
