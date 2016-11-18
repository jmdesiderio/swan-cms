// @flow

import React, { PropTypes } from 'react'

import Sidebar from '../../components/Sidebar/Sidebar'

function MainLayout ({ children }) {
  return (
    <div>
      <Sidebar />
      <div>
        {children}
      </div>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.element
}

export default MainLayout
