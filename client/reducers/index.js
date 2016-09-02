import { combineReducers } from 'redux'

import { RECEIVE_INITIAL_WIND, GETTING_WIND_IN_PROGRESS, GET_WIND_SUCCESSFUL } from '../actions/actions'

function status (state = '', action ) {
  switch (action.type) {
    case GETTING_WIND_IN_PROGRESS:
      return 'loading'

    case GET_WIND_SUCCESSFUL:
      return 'success'

    default:
      return state
  }
}

function weather (state = '', action) {
  switch (action.type) {
    case RECEIVE_INITIAL_WIND:
      return action.weather

    default:
      return state
  }
}

const todoApp = combineReducers({
  status: status,
  weather: weather
})

export default todoApp
