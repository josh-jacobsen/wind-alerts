import React from 'react'
import ReactDOM from 'react-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import { Router, Route, IndexRoute, hashHistory} from 'react-router'

import todoApp from './reducers/index.js'

import { getInitialWind } from './actions/actions.js'

import App from './components/App.jsx'
import Home from './components/Home.jsx'
import Wind from './containers/windContainer.js'
import Site from './components/Site.jsx'
import Cheltenham from './components/Cheltenham.jsx'
import ShoalBay from './components/ShoalBay.jsx'

let store = createStore(
  todoApp, compose(
    applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
))

store.dispatch(getInitialWind())

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="/cheltenham" component={Cheltenham}>
          <Route path="/cheltenham/wind" component={Wind} />
          </Route>
        <Route path="/shoalbay" component={ShoalBay}>
          <Route path="/shoalbay/wind" component={Wind} />
        </Route>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('app')
)
