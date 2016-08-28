import React from 'react'
import { Link } from 'react-router'

import Wind from '../containers/windContainer.js'

export default class App extends React.Component {
  render () {
    return (
      <div>
        <div>
          <h5><Link to="/wind">Show Wind</Link></h5>
        </div>
        {this.props.children}
      </div>
    )
  }
}
