import React from 'react'
import ReactDOM from 'react-dom'

export default (props) => {
  const weather = props.weather
  const success = props.status === 'success'

  if (weather) {
    return (
      <div>
      <h4>Report current at: {weather.dt}</h4>
      <h4>Temperature: {weather.main.temp}</h4>

      <h4>Speed: {weather.wind.speed}</h4>
      <h4>Direction (degrees): {weather.wind.deg}</h4>
      </div>
    )
  } else {
    return (
      <div>
        <h4>Loading.....</h4>
      </div>
    )
  }


}
