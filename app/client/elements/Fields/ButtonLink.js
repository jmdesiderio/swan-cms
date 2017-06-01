import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'

const LinkFromButton = Button.withComponent(Link)

const ButtonLink = styled(LinkFromButton)`
  &:hover {
    border: 0;
  }
`

export default ButtonLink
