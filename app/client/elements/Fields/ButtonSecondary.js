import styled from 'styled-components'
import { darken } from 'polished'
import { Button } from './'

const ButtonSecondary = styled(Button)`
  background-image: linear-gradient(
      ${p => p.theme.colors.whiteSmoke}, 
      ${p => darken(0.06, p.theme.colors.whiteSmoke)}
    );
  border: 1px solid ${p => p.theme.colors.gainsboro};
  color: ${p => p.theme.colors.steel};
  font-size: .75rem;

  &:hover {
    background-image: linear-gradient(
        ${p => darken(0.06, p.theme.colors.whiteSmoke)}, 
        ${p => darken(0.12, p.theme.colors.whiteSmoke)}
      );
  }

  &:active {
    background-image: linear-gradient(
        ${p => darken(0.18, p.theme.colors.whiteSmoke)}, 
        ${p => darken(0.12, p.theme.colors.whiteSmoke)}
      );
    outline: 0;
  }
`

export default ButtonSecondary
