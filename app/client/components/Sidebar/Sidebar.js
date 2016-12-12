// @flow
import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'

import { Icon } from '../../elements/Icon/Icon'
import s from './Sidebar.scss'

export default class Sidebar extends Component {
  constructor (props) {
    super(props)

    this.state = {
      links: [
        { text: 'Dashboard', to: '/admin/dashboard' },
        { text: 'Entries', to: '/admin/entries' },
        { text: 'Globals', to: '/admin/globals' },
        { text: 'Categories', to: '/admin/categories' },
        { text: 'Assets', to: '/admin/assets' },
        { text: 'Settings', to: '/admin/settings' }
      ]
    }
  }

  renderLink (link, index) {
    return (
      <li key={index}>
        <Link className={s.link}
          activeClassName={s.activeLink}
          to={link.to}>
          {link.text}
        </Link>
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
            <div>{currentUser.username}</div>
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
