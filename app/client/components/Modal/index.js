import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ModalPortal from './ModalPortal'

class Modal extends Component {
  componentDidMount () {
    this.node = document.createElement('div')
    document.body.appendChild(this.node)
    this.renderPortal()
  }

  componentWillReceiveProps () {
    this.renderPortal()
  }

  componentWillUnmount () {
    this.removePortal()
  }

  removePortal () {
    ReactDOM.unmountComponentAtNode(this.node)
    this.node.parentNode.removeChild(this.node)
  }

  renderPortal () {
    this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(this, <ModalPortal {...this.props} />, this.node)
  }

  render () {
    return null
  }
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  shouldCloseOnOverlayClick: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func
}

Modal.defaultProps = {
  isOpen: false,
  shouldCloseOnOverlayClick: true
}

export default Modal
