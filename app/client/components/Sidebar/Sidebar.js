import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Sidebar extends Component {
  render () {
    return (
      <div>
        <Link to='/admin/dashboard'>Dashboard</Link>
        <Link to='/admin/settings'>Settings</Link>
      </div>
    );
  }
}
