

import request from 'superagent'

/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

/*
 * action creators
 */

export function addTodo(text) {
  return { type: ADD_TODO, text }
}

export function toggleTodo(index) {
  return { type: TOGGLE_TODO, index }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}

///////////

export const RECEIVE_INITIAL_WIND = 'RECEIVE_INITIAL_WIND'

const receiveInitialWind = (wind) => {
  return {
    type: RECEIVE_INITIAL_WIND,
    wind: wind
  }
}

export const getInitialWind = () => {
  return (dispatch) => {
    request
      .get('https://api.github.com/repos/visionmedia/superagent')
      .end(function(err, res){
        console.log(res.body.name)
        dispatch(receiveInitialWind(res.body.name))
      }
    )
  }
}
