import Color from 'color'
import styled from 'styled-components'
import { Button } from './'

const ButtonSecondary = styled(Button)`
  background-image: linear-gradient(
      ${p => p.theme.colors.whiteSmoke}, 
      ${p => Color(p.theme.colors.whiteSmoke).darken(0.06).string()}
    );
  border: 1px solid ${p => p.theme.colors.gainsboro};
  color: ${p => p.theme.colors.steel};
  font-size: .75rem;

  &:hover {
    background-image: linear-gradient(
        ${p => Color(p.theme.colors.whiteSmoke).darken(0.06).string()}, 
        ${p => Color(p.theme.colors.whiteSmoke).darken(0.12).string()}
      );
  }

  &:active {
    background-image: linear-gradient(
        ${p => Color(p.theme.colors.whiteSmoke).darken(0.18).string()}, 
        ${p => Color(p.theme.colors.whiteSmoke).darken(0.12).string()}
      );
    outline: 0;
  }
`

export default ButtonSecondary
