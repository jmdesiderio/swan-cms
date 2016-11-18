import React, { PropTypes } from 'react'

import Sidebar from '../../components/Sidebar/Sidebar'

function CoreLayout ({ children }) {
  return (
    <div className='page-container'>
      <Sidebar />
      <div className='view-container'>
        {children}
      </div>
    </div>
  )
}

CoreLayout.propTypes = {
  children: PropTypes.element
}

export default CoreLayout
