// @flow
import React from 'react'
import PropTypes from 'prop-types'

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
