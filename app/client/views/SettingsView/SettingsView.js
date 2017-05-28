import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class SettingsView extends Component {
  render () {
    return (
      <div>
        <h1>Settings View</h1>
        <h2>System</h2>
        <ul>
          <li>
            <Link to='/admin/config/settings/general'>General</Link>
            <Link to='/admin/config/settings/sites'>Sites</Link>
            <Link to='/admin/config/settings/routes'>Routes</Link>
            <Link to='/admin/config/settings/users'>Users</Link>
            <Link to='/admin/config/settings/email'>Email</Link>
            <Link to='/admin/config/settings/plugins'>Plugins</Link>
          </li>
        </ul>
        <h2>Content</h2>
        <ul>
          <li>
            <Link to='/admin/config/settings/fields'>Fields</Link>
            <Link to='/admin/config/settings/sections'>Sections</Link>
            <Link to='/admin/config/settings/assets'>Assets</Link>
            <Link to='/admin/config/settings/globals'>Globals</Link>
            <Link to='/admin/config/settings/categories'>Categories</Link>
            <Link to='/admin/config/settings/tags'>Tags</Link>
          </li>
        </ul>
      </div>
    )
  }
}

export default SettingsView
