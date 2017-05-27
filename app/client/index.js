// @flow
import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import createHistory from 'history/createBrowserHistory'
import { routerMiddleware } from 'react-router-redux'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'

import apolloClient from './api'
import rootReducer from './reducers'
import routes from './routes'

import theme from './styles/theme'
import './styles/normalize'
import './styles/base'

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
    <ThemeProvider theme={theme}>
      {routes(history)}
    </ThemeProvider>
  </ApolloProvider>,
  document.getElementById('root')
)
