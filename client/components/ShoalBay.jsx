import React from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap';


export default React.createClass({
  render () {
    return (
      <div>
      <Grid>
        <Row className="show-grid">
          <Col xs={12} sm={4} md={4} lg={3}><h4>Shoal Bay</h4></Col>
          {this.props.children}
        </Row>
      </Grid>

      </div>
    )
  }

  }
)
