import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import Color from 'color'
import styled from 'styled-components'

import { Icon } from '../elements/Icon/Icon'

const Header = styled.header`
  background: ${p => p.theme.colors.oil};
  color: ${p => p.theme.colors.gainsboro};
  display: flex;
  flex-direction: column;
  width: 13.75rem;
`

const Top = styled.div`
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1;
  padding: 1rem;
`

const NavList = styled.ul`
  flex: 1 1 auto;
  font-size: .875rem;
`

const SectionLink = styled(NavLink).attrs({
  activeClassName: 'activeLink'
})`
  border: 0;
  color: ${p => p.theme.colors.gainsboro};
  display: block;
  padding: .5rem 1rem;

  &:hover {
    background: ${p => Color(p.theme.colors.white).alpha(0.05).string()};
    border: 0;
  }

  &:focus {
    background: ${p => Color(p.theme.colors.white).alpha(0.1).string()};
  }

  &.${p => p.activeClassName} {
    background: ${p => Color(p.theme.colors.white).alpha(0.1).string()};
    color: $white;
  }
`

const Bottom = styled.div`
  display: flex;
  font-size: .875rem;
  margin: 2rem 0 0;
  padding: 1rem;
`

const User = styled.div`
  align-items: center;
  display: flex;
  flex: 1 1 auto;
  justify-content: space-between;
  padding: 0 0 0 1rem;
`

const UserIcon = styled(Icon)`
  height: 2rem;
  width: 2rem;
`

class Sidebar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      links: [
        { text: 'Dashboard', to: '/admin/config/dashboard' },
        { text: 'Entries', to: '/admin/config/entries' },
        { text: 'Globals', to: '/admin/config/globals' },
        { text: 'Categories', to: '/admin/config/categories' },
        { text: 'Assets', to: '/admin/config/assets' },
        { text: 'Settings', to: '/admin/config/settings' }
      ]
    }
  }

  renderLink ({ text, to }) {
    return (
      <li key={text}>
        <SectionLink to={to}>
          {text}
        </SectionLink>
      </li>
    )
  }

  render () {
    const { currentUser } = this.props.data

    return (
      <Header>
        <Top>SITENAME</Top>
        <NavList>
          {this.state.links.map(this.renderLink)}
        </NavList>
        <Bottom>
          <UserIcon type='user' />
          <User>
            <div>{currentUser.getName}</div>
            <Link to='/admin/logout'>Logout</Link>
          </User>
        </Bottom>
      </Header>
    )
  }
}

Sidebar.propTypes = {
  data: PropTypes.object
}

export default Sidebar
