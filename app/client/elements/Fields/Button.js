import Color from 'color'
import styled from 'styled-components'

const Button = styled.button`
  background-image: linear-gradient(
      ${p => p.theme.colors.red}, 
      ${p => Color(p.theme.colors.red).darken(0.08).string()}
    );
  border: 0;
  border-radius: .25rem;
  color: ${p => p.theme.colors.white};
  cursor: pointer;
  font-size: .875rem;
  max-width: 18rem;
  padding: .75rem .875rem;
  white-space: nowrap;

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

export default Button
