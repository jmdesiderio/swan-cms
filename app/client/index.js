// @flow
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { browserHistory } from 'react-router'
import { routerMiddleware, syncHistoryWithStore } from 'react-router-redux'
import ApolloClient from 'apollo-client'
import { ApolloProvider } from 'react-apollo'

import routes from './routes'
import rootReducer from './reducers'

let middleware = applyMiddleware(thunk, routerMiddleware(browserHistory))
if (__DEV__ && window.devToolsExtension) {
  middleware = compose(middleware, window.devToolsExtension())
}

const initialState = window.__INITIAL_STATE__ || {}
const store = createStore(rootReducer, initialState, middleware)
const history = syncHistoryWithStore(browserHistory, store)
const client = new ApolloClient()

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      {routes(history)}
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
)
