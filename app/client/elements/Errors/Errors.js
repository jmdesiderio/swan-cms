import React, { PropTypes } from 'react'

import s from './errors.scss'

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
