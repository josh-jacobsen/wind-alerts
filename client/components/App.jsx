import React from 'react'
import { Link } from 'react-router'


import Wind from '../containers/windContainer.js'
import NavbarInstance from './NavbarInstance.jsx'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <NavbarInstance />
        {this.props.children}
      </div>
    )
  }
}
