// @flow
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const ErrorList = styled.ul`
  background-color: ${p => p.theme.colors.pinkLight};
  border: 1px solid transparent;
  border-color: ${p => p.theme.colors.pink};
  border-radius: 4px;
  color: ${p => p.theme.colors.red};
  font-size: .875rem;
  margin-bottom: 1.75rem;
  padding: .75rem;
  text-align: center;
`

export const Errors = ({ list }) => (
  <ErrorList>
    {list.map((error, index) => {
      return <li key={index}>{error}</li>
    })}
  </ErrorList>
)

Errors.propTypes = {
  list: PropTypes.array.isRequired
}
