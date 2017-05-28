import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'
import { reducer as form } from 'redux-form'

import api from '../api'

export default combineReducers({
  apollo: api.reducer(),
  form,
  router
})
