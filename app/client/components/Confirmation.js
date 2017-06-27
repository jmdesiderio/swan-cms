import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Modal from './Modal'
import { Button } from '../elements/Fields'

const ButtonsWrapper = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-around;
  padding-top: 20px;
`

const Confirmation = ({ isOpen, title, children, cancelText, onRequestCancel, confirmText, onRequestConfirm }) =>
  <Modal contentLabel={title} isOpen={isOpen} onRequestClose={onRequestCancel}>
    <div>
      <h3>{title}</h3>
      {children}
      <ButtonsWrapper>
        <Button onClick={onRequestCancel}>{cancelText}</Button>
        <Button onClick={onRequestConfirm}>{confirmText}</Button>
      </ButtonsWrapper>
    </div>
  </Modal>

Confirmation.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
  cancelText: PropTypes.string.isRequired,
  onRequestCancel: PropTypes.func.isRequired,
  confirmText: PropTypes.string.isRequired,
  onRequestConfirm: PropTypes.func.isRequired
}

Confirmation.defaultProps = {
  title: 'Are you sure?',
  cancelText: 'Cancel',
  confirmText: 'Confirm'
}

export default Confirmation
