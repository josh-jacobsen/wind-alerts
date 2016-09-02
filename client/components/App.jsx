import React from 'react'
import { Link } from 'react-router'
import { Grid, Row, Col } from 'react-bootstrap';


import Wind from '../containers/windContainer.js'
import NavbarInstance from './NavbarInstance.jsx'


const gridInstance = (
  <Grid>
    <Row className="show-grid">
      <Col xs={6} md={4}><p>All the stuff on the left</p></Col>
      <Col xs={12} md={8}><p>All the stuff on the right</p></Col>
    </Row>
  </Grid>
);



export default class App extends React.Component {
  render () {
    return (
      <div>
        <NavbarInstance />
        <gridInstance />
        {this.props.children}
      </div>
    )
  }
}
