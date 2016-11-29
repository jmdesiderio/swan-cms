// @flow

import { combineReducers } from 'redux'
import { routerReducer as routing } from 'react-router-redux'
import { reducer as form } from 'redux-form'

import client from '../api'

export default combineReducers({
  apollo: client.reducer(),
  form,
  routing
})
