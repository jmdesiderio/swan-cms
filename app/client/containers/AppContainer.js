import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import styled from 'styled-components'

const Wrapper = styled.div`
  height: 100%;
`

class AppContainer extends Component {
  render () {
    return (
      <Wrapper>
        <Helmet title='Swan CMS Admin' />
        {this.props.children}
      </Wrapper>
    )
  }
}

AppContainer.propTypes = {
  children: PropTypes.node
}

export default AppContainer
