// @flow
import React, { PropTypes } from 'react'

import Sidebar from '../../components/Sidebar/Sidebar'

import s from './MainLayout.scss'

function MainLayout ({ children }) {
  return (
    <div className={s.root}>
      <Sidebar />
      <main className={s.main}>
        {children}
      </main>
    </div>
  )
}

MainLayout.propTypes = {
  children: PropTypes.element
}

export default MainLayout
