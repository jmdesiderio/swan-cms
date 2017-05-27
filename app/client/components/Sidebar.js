// @flow
import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link, NavLink } from 'react-router-dom'

import { Icon } from '../elements/Icon/Icon'
import s from './Sidebar.scss'

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

  renderLink (link, index) {
    return (
      <li key={index}>
        <NavLink className={s.link}
          activeClassName={s.activeLink}
          to={link.to}>
          {link.text}
        </NavLink>
      </li>
    )
  }

  render () {
    const { currentUser } = this.props.data

    return (
      <header className={s.root}>
        <div className={s.top}>
          SITENAME
        </div>
        <nav className={s.nav}>
          <ul>
            {this.state.links.map(this.renderLink)}
          </ul>
        </nav>
        <div className={s.bottom}>
          <Icon className={s.userIcon} type='user' />
          <div className={s.user}>
            <div>{currentUser.getName}</div>
            <Link to='/admin/logout'>Logout</Link>
          </div>
        </div>
      </header>
    )
  }
}

Sidebar.propTypes = {
  data: PropTypes.object
}

export default Sidebar
