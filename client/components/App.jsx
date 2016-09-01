import React from 'react'
import { Link } from 'react-router'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';


import Wind from '../containers/windContainer.js'
import NavbarInstance from './NavbarInstance.jsx'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <NavbarInstance />
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/wind">Wind</Link></li>
          <li><Link to="/">About</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
}
