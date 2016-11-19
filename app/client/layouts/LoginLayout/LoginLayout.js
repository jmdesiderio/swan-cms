// @flow

import React, { PropTypes } from 'react'

import s from './LoginLayout.scss'

function LoginLayout ({ children }) {
  return (
    <div className={s.root}>
      {children}
    </div>
  )
}

LoginLayout.propTypes = {
  children: PropTypes.element
}

export default LoginLayout
