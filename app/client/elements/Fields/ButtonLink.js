import { Link } from 'react-router-dom'
import styled from 'styled-components'
import Button from './Button'

const LinkFromButton = Button.withComponent(Link)

const ButtonLink = styled(LinkFromButton)``

export default ButtonLink
