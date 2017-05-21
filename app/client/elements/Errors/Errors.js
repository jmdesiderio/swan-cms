import React from 'react'
import PropTypes from 'prop-types'

import s from './Errors.scss'

export const Errors = ({ list }) => (
  <ul className={s.root}>
    {list.map((error, index) => {
      return <li key={index}>{error}</li>
    })}
  </ul>
)
Errors.propTypes = {
  list: PropTypes.array.isRequired
}
