import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'
import { compose } from 'redux'
import { graphql } from 'react-apollo'
import gql from 'graphql-tag'
import styled from 'styled-components'
import { transparentize } from 'polished'

import Icon from '../../elements/Icon/Icon'

const Header = styled.header`
  background: ${p => p.theme.colors.oil};
  bottom: 0;
  color: ${p => p.theme.colors.gainsboro};
  display: flex;
  flex-direction: column;
  left: 0;
  overflow: auto;
  position: fixed;
  top: 0;
  width: ${p => p.theme.sizes.sidebarWidth};
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
    background: ${p => transparentize(0.95, p.theme.colors.white)};
    border: 0;
  }

  &:focus {
    background: ${p => transparentize(0.9, p.theme.colors.white)};
  }

  &.${p => p.activeClassName} {
    background: ${p => transparentize(0.9, p.theme.colors.white)};
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
  static propTypes = {
    data: PropTypes.object
  }

  state = {
    links: [
      { text: 'Dashboard', to: '/admin/config/dashboard' },
      { text: 'Entries', to: '/admin/config/entries' },
      { text: 'Globals', to: '/admin/config/globals' },
      { text: 'Categories', to: '/admin/config/categories' },
      { text: 'Assets', to: '/admin/config/assets' },
      { text: 'Settings', to: '/admin/config/settings' }
    ]
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
    const { data } = this.props

    if (data.loading) return null

    return (
      <Header>
        <Top>SITENAME</Top>
        <NavList>
          {this.state.links.map(this.renderLink)}
        </NavList>
        <Bottom>
          <UserIcon type='user' />
          <User>
            <div>{data.currentUser.getName}</div>
            <Link to='/admin/logout'>Logout</Link>
          </User>
        </Bottom>
      </Header>
    )
  }
}

const query = gql`
  query {
    currentUser {
      getName
    }
  }
`

export default compose(graphql(query))(Sidebar)
