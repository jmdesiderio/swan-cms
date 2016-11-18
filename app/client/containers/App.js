// @flow

import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

export default class App extends Component {
  render () {
    return (
      <div>
        <Helmet title='Swan CMS Admin' />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}
