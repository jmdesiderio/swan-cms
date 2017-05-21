// @flow
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { ApolloProvider } from 'react-apollo'

import client from './api'
import routes from './routes'
import rootReducer from './reducers'

const history = createHistory()

let middleware = applyMiddleware(
  thunk,
  client.middleware(),
  routerMiddleware(history)
)

if (__DEV__) middleware = compose(middleware, window.devToolsExtension())

const initialState = window.__INITIAL_STATE__ || {}
const store = createStore(rootReducer, initialState, middleware)

ReactDOM.render(
  <ApolloProvider store={store} client={client}>
    {routes(history)}
  </ApolloProvider>,
  document.getElementById('root')
)
