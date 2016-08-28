import React from 'react'
import { Link } from 'react-router'

import Wind from '../containers/windContainer.js'

export default class App extends React.Component {
  render () {
    return (
      <div>
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
