// @flow

import React, { Component, PropTypes } from 'react'
import Helmet from 'react-helmet'

import '../../styles/style.scss'
import s from './App.scss'

export default class App extends Component {
  render () {
    return (
      <div className={s.root}>
        <Helmet title='Swan CMS Admin' />
        {this.props.children}
      </div>
    )
  }
}

App.propTypes = {
  children: PropTypes.element
}
