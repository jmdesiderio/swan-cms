// @flow
import React, { Component } from 'react'
import { Link } from 'react-router'

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

  renderLink (link) {
    return (
      <li>
        <Link className={s.link}
          activeClassName={s.activeLink}
          to={link.to}>
          {link.text}
        </Link>
      </li>
    )
  }

  render () {
    return (
      <header className={s.root}>
        <nav className={s.nav}>
          <ul>
            {this.state.links.map(this.renderLink)}
          </ul>
        </nav>
      </header>
    )
  }
}
