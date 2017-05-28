import React, { Component } from 'react'
import SettingsGeneralForm from './forms/SettingsGeneralForm'

class SettingsGeneral extends Component {
  render () {
    return (
      <div>
        <h1>General Settings</h1>
        <SettingsGeneralForm />
      </div>
    )
  }
}

export default SettingsGeneral
