import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactModal from 'react-modal'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { transitions } from '../styles/theme'

class Modal extends Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string.isRequired,
    contentLabel: PropTypes.string.isRequired,
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired
  }

  render () {
    const { children, className, ...rest } = this.props

    return (
      <ReactModal
        closeTimeoutMS={transitions.defaultDurationMS}
        className='Modal-content'
        overlayClassName={className}
        {...rest}
      >
        {children}
      </ReactModal>
    )
  }
}

const StyledModal = styled(Modal)`
  align-items: center;
  bottom: 0;
  display: flex;
  justify-content: center;
  left: 0;
  opacity: 0;
  position: fixed;
  right: 0;
  top: 0;
  transition: opacity ${p => p.theme.transitions.default};

  &.ReactModal__Overlay--after-open {
    opacity: 1;
  }

  &.ReactModal__Overlay--before-close {
    opacity: 0;
  }

  & .ReactModal__Content {
    -webkit-overflow-scrolling: touch;
    background: ${p => p.theme.colors.whiteSmoke};
    border: 1px solid #ccc;
    border-radius: 2px;
    box-shadow: 0 4px 33px rgba(0,0,0,.22), 0 0 0 1px rgba(0,0,0,.04);
    outline: none;
    overflow: auto;
    transform: scale(.95);
    transition: transform ${p => p.theme.transitions.default};
  }

  & .ReactModal__Content--after-open {
    transform: scale(1);
  }

  & .ReactModal__Content--before-close {
    transform: scale(.95);
  }
`

export default StyledModal
