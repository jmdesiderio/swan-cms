import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Color from 'color'
import styled from 'styled-components'

const Wrapper = styled.div`
  background-color: ${p => Color(p.theme.colors.steel).fade(0.8).toString()};
  bottom: 0;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
`

const Content = styled.div`
  background-color: ${p => p.theme.colors.white};
  height: 50%;
  left: 25%;
  position: absolute;
  top: 25%;
  width: 50%;
`

class ModalPortal extends Component {
  render () {
    return (
      <Wrapper>
        <Content>
          {this.props.children}
        </Content>
      </Wrapper>
    )
  }
}

ModalPortal.propTypes = {
  children: PropTypes.node
}

export default ModalPortal
