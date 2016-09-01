import React from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const NavbarInstance = React.createClass({
  render () {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">WindyR</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavDropdown eventKey={3} title="Locations" id="basic-nav-dropdown">
            <LinkContainer to="/wind">
              <MenuItem eventKey={3.1}>Cheltenham</MenuItem>
            </LinkContainer>
            <LinkContainer to="/wind">
            <MenuItem eventKey={3.2}>Takapuna</MenuItem>
            </LinkContainer>
            <LinkContainer to="/wind">
            <MenuItem eventKey={3.3}>Shoal Bay</MenuItem>
            </LinkContainer>
            <MenuItem divider />
            <MenuItem eventKey={3.3}>All locations</MenuItem>
          </NavDropdown>
          <NavItem eventKey={1} href="#">Forecast</NavItem>
          <NavItem eventKey={2} href="#">About</NavItem>
        </Nav>
      </Navbar>
    )
  }
})

export default NavbarInstance;
