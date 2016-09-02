import React from 'react'
import ReactDOM from 'react-dom'

export default (props) => {
  const weather = props.weather
  const success = props.status === 'success'
  if (weather) {
    const wind = props.weather.wind.speed
    const conversion = 1.94384;
    const knots = Math.round((wind * conversion) * 100) / 100
    return (
      <div>
      <h4>Report current at: {weather.dt}</h4>
      <h4>Temperature: {weather.main.temp} degrees Celcius</h4>

      <h4>Speed: {knots} knots</h4>
      <h4>Direction: {weather.wind.deg} degrees</h4>
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
