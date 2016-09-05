import React from 'react'
import ReactDOM from 'react-dom'
import { Grid, Row, Col } from 'react-bootstrap';


export default (props) => {
  const weather = props.weather

  if (weather) {
    const knots = Math.round((props.weather.wind.speed * 1.94384) * 100) / 100

    // Multiply by 1000 so for milliseconds (not seconds)
    var date = new Date(weather.dt * 1000)
    var hours = date.getHours()
    var minutes = "0" + date.getMinutes()
    var seconds = "0" + date.getSeconds()

    var formattedTime = hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);

    return (
      <Col xs={12} sm={8} md={8} lg={9} className="border">
        <h4>Report current at: {formattedTime}</h4>
        <h4>Temperature: {weather.main.temp} degrees Celcius</h4>
        <h4>Speed: {knots} knots</h4>
        <h4>Direction: {weather.wind.deg} degrees</h4>
      </Col>
    )
  } else {
    return (
      <div>
        <h4>Loading.....</h4>
      </div>
    )
  }
}
