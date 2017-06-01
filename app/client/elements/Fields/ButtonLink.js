import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'

const ButtonWithLink = Button.withComponent(Link)

const ButtonLink = styled(ButtonWithLink)`
  &:hover {
    border: 0;
  }
`

export default ButtonLink
