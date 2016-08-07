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


// store.dispatch(addTodo('Learn about actions'))
// store.dispatch(addTodo('Learn about reducers'))
// store.dispatch(addTodo('Learn about store'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED))

  // Stop listening to state updates
  // unsubscribe()


ReactDOM.render(
  <App/>,
  document.getElementById('app')
)
