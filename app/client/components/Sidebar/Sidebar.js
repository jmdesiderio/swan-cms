// @flow
import React, { Component } from 'react'
import { Link } from 'react-router'

import s from './Sidebar.scss'

export default class Sidebar extends Component {
  render () {
    return (
      <header className={s.root}>
        <nav className={s.nav}>
          <ul>
            <li>
              <Link className={s.link}
                activeClassName={s.activeLink}
                to='/admin/dashboard'>
                Dashboard
              </Link>
            </li>
            <li>
              <Link className={s.link}
                activeClassName={s.activeLink}
                to='/admin/entries'>
                Entries
              </Link>
            </li>
            <li>
              <Link className={s.link}
                activeClassName={s.activeLink}
                to='/admin/globals'>
                Globals
              </Link>
            </li>
            <li>
              <Link className={s.link}
                activeClassName={s.activeLink}
                to='/admin/categories'>
                Categories
              </Link>
            </li>
            <li>
              <Link className={s.link}
                activeClassName={s.activeLink}
                to='/admin/assets'>
                Assets
              </Link>
            </li>
            <li>
              <Link className={s.link}
                activeClassName={s.activeLink}
                to='/admin/settings'>
                Settings
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    )
  }
}
