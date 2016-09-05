import React from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap';

export default React.createClass({
  render () {
    return (
      <div>
      <Grid>
        <Row className="show-grid">
          <Col xs={12} sm={12} md={12} lg={12} className=""><h4>WindyR is a wind alert service</h4></Col>
        </Row>
        <Row className="show-grid">
          <Col xs={12} sm={12} md={12} lg={12} className=""><p>When the wind is strong enough, and blowing from the appropriate direction, WindyR will send push notifcations to a mobile device</p></Col>
        </Row>
      </Grid>

      </div>
    )
  }

  }
)
