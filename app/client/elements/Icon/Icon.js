// @flow
import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Svg = styled.svg`
  fill: currentColor;
  vertical-align: middle;
`

const renderIcon = {
  user: () => (
    <path d='M0,245c0,135.1,109.9,245,245,245s245-109.9,245-245S380.1,0,245,0S0,109.9,0,245z M245,41.6
      c112.2,0,203.4,91.2,203.4,203.4c0,50.4-18.5,96.5-48.9,132.1c-42-32.2-83.8-53.4-93-57.8c-1.1-0.6-1.8-1.7-1.8-3
      c0-4.8,0-17.3,0-30.5c4.5-9.4,7.3-19.5,8.9-28.6c4.1,2.8,10.9,1.3,
      18.4-25.1c6.1-21.5,2.4-28.7-2.9-30.5c17.1-81.9-22-84.6-22-84.6
      s-5.9-11.3-21.4-19.9c-10.4-6.2-24.9-10.9-44-9.3c-6.2,0.3-12,1.5-17.5,3.3l0,0c-7,2.4-13.4,5.8-19.3,9.9
      c-7.1,4.5-13.9,10.1-19.8,16.4c-9.4,9.6-17.8,22.1-21.4,37.6c-3.5,13.2-3.4,27.4,1.8,41.9c-7-0.7-15.3,3.4-7.5,31
      c5.7,20.2,11,25.8,15,26.1c1.8,11.5,5.4,24.4,12.3,36v26.4c0,1.3-0.7,2.4-1.8,3c-9.1,4.5-51,25.6-93,57.8
      C60.1,341.5,41.6,295.4,41.6,245C41.6,132.8,132.8,41.6,245,41.6z' />
  )
}

export const Icon = ({ className, type, ...props }) => (
  <Svg className={className}
    viewBox='0 0 490 490'
    preserveAspectRatio='xMidYMid meet'
    {...props}>
    {renderIcon[type]()}
  </Svg>
)

Icon.propTypes = {
  className: PropTypes.string,
  type: PropTypes.oneOf(Object.keys(renderIcon)).isRequired
}
