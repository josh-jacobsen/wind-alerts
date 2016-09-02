
import request from 'superagent'
import { APPID } from '../../api.js'

let url = 'http://api.openweathermap.org/data/2.5/weather'
let city = '2193734'
/*
 * action types
 */

export const RECEIVE_INITIAL_WIND = 'RECEIVE_INITIAL_WIND'
export const GETTING_WIND_IN_PROGRESS = 'GETTING_WIND_IN_PROGRESS'
export const GET_WIND_SUCCESSFUL = 'GET_WIND_SUCCESSFUL'


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

 const receiveInitialWind = (weather) => {
   return {
     type: RECEIVE_INITIAL_WIND,
     weather: weather
   }
 }

 const gettingWindInProgress = () => {
   return {
     type: GETTING_WIND_IN_PROGRESS
   }
 }

 const getWindSuccessful = () => {
   return {
     type: GET_WIND_SUCCESSFUL
   }
 }

/*
  * async action creators
*/

export const getInitialWind = () => {
  return (dispatch) => {
    dispatch(gettingWindInProgress())
    request
      .get(url)
      .query({ APPID: APPID, id: city})
      .end((err, res) => {
        if (err) {
          console.log(err.message);
        }
        dispatch(getWindSuccessful())
        dispatch(receiveInitialWind(res.body))
      }
    )
  }
}
