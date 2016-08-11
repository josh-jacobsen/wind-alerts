import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, compose } from 'redux'

import todoApp from './reducers/index.js'

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters, getInitialWind } from './actions/actions.js'

import App from './components/App.jsx'

let store = createStore(
  todoApp, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

store.dispatch(getInitialWind())

ReactDOM.render(
  <App/>,
  document.getElementById('app')
)

// checking git
