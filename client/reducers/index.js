import { combineReducers } from 'redux'

import { RECEIVE_INITIAL_WIND, GETTING_WIND_IN_PROGRESS } from '../actions/actions'

function status (state = '', action ) {
  switch (action.type) {
    case GETTING_WIND_IN_PROGRESS:
      return 'loading'

    default:
      return state
  }
}

function wind (state = '', action) {
  switch (action.type) {
    case RECEIVE_INITIAL_WIND:
      return action.wind

    default:
      return state
  }
}

const todoApp = combineReducers({
  status: status,
  wind: wind
})

export default todoApp
