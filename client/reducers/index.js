import { combineReducers } from 'redux'

import { RECEIVE_INITIAL_WIND } from '../actions/actions'

function wind(state = '', action) {
  switch (action.type) {
    case RECEIVE_INITIAL_WIND:
      return action.wind

    default:
      return state
  }
}

const todoApp = combineReducers({
  wind: wind
})

export default todoApp
