// require('dotenv').config();

// console.log(process.env.API_ACESSS_TOKEN);
import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'

import { createStore, applyMiddleware, compose } from 'redux'

import todoApp from './reducers/index.js'

import { addTodo, toggleTodo, setVisibilityFilter, VisibilityFilters, getInitialWind } from './actions/actions.js'

import App from './components/App.jsx'
import Hello from './components/Hello.jsx'
import World from './components/World.jsx'

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
