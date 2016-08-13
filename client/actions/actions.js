
import request from 'superagent'
import { APPID } from '../../api.js'

let url = 'http://api.openweathermap.org/data/2.5/weather'
let city = '2193734'
/*
 * action types
 */

export const RECEIVE_INITIAL_WIND = 'RECEIVE_INITIAL_WIND'
export const GETTING_WIND_IN_PROGRESS = 'GETTING_WIND_IN_PROGRESS'

/*
 * other constants
 */

export const ShowFetchingWindStatus = {
  SHOW_FETCHING: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_FAIL: 'SHOW_FAIL'
}

/*
  * action creators
*/

 const receiveInitialWind = (wind) => {
   return {
     type: RECEIVE_INITIAL_WIND,
     wind: wind
   }
 }

 const gettingWindInProgress = () => {
   return {
     type: GETTING_WIND_IN_PROGRESS
   }
 }

/*
  * async action creators
*/

export const getInitialWind = () => {
  return (dispatch) => {
    dispatch(gettingWindInProgress)
    request
      .get(url)
      .query({ APPID: APPID, id: city})
      .end((err, res) => {
        if (err) {
          console.log(err.message);
        }
        dispatch(receiveInitialWind(res.body.wind))
      }
    )
  }
}
