import React from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap';


export default React.createClass({
  render () {
    return (
      <div>
      <Grid>
        <Row className="show-grid">
          <Col xs={12} sm={4} md={4} lg={3} className="border"><h4>Shoal Bay</h4><h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</h5></Col>
          {this.props.children}
        </Row>
      </Grid>

      </div>
    )
  }

  }
)
