import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, hashHistory} from 'react-router'

import todoApp from './reducers/index.js'

import { getInitialWind } from './actions/actions.js'

import App from './components/App.jsx'

let store = createStore(
  todoApp, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

store.dispatch(getInitialWind())

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}/>
    </Router>
  </Provider>,
  document.getElementById('app')
)
