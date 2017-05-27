// @flow

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import '../styles/style.scss'
import s from './AppContainer.scss'

class AppContainer extends Component {
  render () {
    return (
      <div className={s.root}>
        <Helmet title='Swan CMS Admin' />
        {this.props.children}
      </div>
    )
  }
}

AppContainer.propTypes = {
  children: PropTypes.node
}

export default AppContainer
