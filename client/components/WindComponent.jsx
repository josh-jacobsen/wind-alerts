import React from 'react'
import ReactDOM from 'react-dom'
import { Grid, Row, Col } from 'react-bootstrap';


export default (props) => {
  const weather = props.weather
  const success = props.status === 'success'
  if (weather) {
    const wind = props.weather.wind.speed
    const conversion = 1.94384;
    const knots = Math.round((wind * conversion) * 100) / 100
    return (

      <Grid>
        <Row className="show-grid">
          <Col xs={12} sm={4}><p>All the stuff on the left</p></Col>
          <Col xs={12} sm={8}>
              <h4>Report current at: {weather.dt}</h4>
              <h4>Temperature: {weather.main.temp} degrees Celcius</h4>
              <h4>Speed: {knots} knots</h4>
              <h4>Direction: {weather.wind.deg} degrees</h4>
          </Col>
        </Row>
      </Grid>
    )
  } else {
    return (
      <div>
        <h4>Loading.....</h4>
      </div>
    )
  }
}
