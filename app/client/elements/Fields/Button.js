import styled from 'styled-components'
import { darken } from 'polished'

const Button = styled.button`
  background-image: linear-gradient(
      ${p => p.theme.colors.red}, 
      ${p => darken(0.08, p.theme.colors.red)}
    );
  border: 0;
  border-radius: .25rem;
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  font-size: .875rem;
  max-width: 18rem;
  padding: .625rem .875rem;
  white-space: nowrap;

  &:hover {
    background-image: linear-gradient(
        ${p => darken(0.08, p.theme.colors.red)}, 
        ${p => darken(0.16, p.theme.colors.red)}
      );
  }

  &:active {
    background-image: linear-gradient(
        ${p => darken(0.24, p.theme.colors.red)}, 
        ${p => darken(0.16, p.theme.colors.red)}
      );
    outline: 0;
  }

  &[disabled] {
    cursor: default;
    opacity: .25;
  }
`

export default Button
