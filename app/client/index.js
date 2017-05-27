// @flow
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { ApolloProvider } from 'react-apollo'

import apolloClient from './api'
import rootReducer from './reducers'
import routes from './routes'

const history = createHistory()

let middleware = applyMiddleware(
  thunk,
  apolloClient.middleware(),
  routerMiddleware(history)
)

if (__DEV__) middleware = compose(middleware, window.devToolsExtension())

const initialState = window.__INITIAL_STATE__ || {}
const store = createStore(rootReducer, initialState, middleware)

ReactDOM.render(
  <ApolloProvider store={store} client={apolloClient}>
    {routes(history)}
  </ApolloProvider>,
  document.getElementById('root')
)
