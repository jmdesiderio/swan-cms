import 'babel-polyfill'

import React from 'react'
import ReactDOM from 'react-dom'

import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'

import createHistory from 'history/createBrowserHistory'

import { routerMiddleware, ConnectedRouter } from 'react-router-redux'
import { ApolloProvider } from 'react-apollo'
import { ThemeProvider } from 'styled-components'

import api from './api'
import rootReducer from './reducers'

import AppContainer from './containers/AppContainer'

import * as theme from './styles/theme'
import './styles/normalize'
import './styles/base'

const initialState = window.__INITIAL_STATE__ || {}
const history = createHistory()

let middleware = applyMiddleware(thunk, api.middleware(), routerMiddleware(history))
if (__DEV__) middleware = compose(middleware, window.devToolsExtension())

const store = createStore(rootReducer, initialState, middleware)

const Root = () => (
  <ApolloProvider store={store} client={api}>
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <AppContainer />
      </ConnectedRouter>
    </ThemeProvider>
  </ApolloProvider>
)

ReactDOM.render(<Root />, document.getElementById('root'))
