// @flow

import React, { PropTypes } from 'react'
import Helmet from 'react-helmet'

function LoginLayout ({ children }) {
  return (
    <div>
      {children}
    </div>
  )
}

LoginLayout.propTypes = {
  children: PropTypes.element
}

export default LoginLayout
