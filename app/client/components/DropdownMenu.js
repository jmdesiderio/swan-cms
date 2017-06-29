import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Modal from './Modal'

class DropdownMenu extends Component {
  static propTypes = {
    anchor: PropTypes.instanceOf(Node),
    isOpen: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    options: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        action: PropTypes.func.isRequired
      })
    ).isRequired
  }

  renderOptions () {
    const { options, onRequestClose } = this.props

    return options.map(({ name, action }) => {
      return (
        <div
          key={name}
          onClick={() => {
            action()
            onRequestClose()
          }}
        >
          {name}
        </div>
      )
    })
  }

  render () {
    const { anchor, isOpen, onRequestClose } = this.props

    return (
      <Modal anchor={anchor} isOpen={isOpen} contentLabel='Menu' onRequestClose={onRequestClose}>
        {this.renderOptions()}
      </Modal>
    )
  }
}

export default DropdownMenu
