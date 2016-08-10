import React from 'react'

import Wind from './WindComponent.jsx'
import World from './World.jsx'

const hello = "Wind forecast:"
const world = "Strong"

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Wind message={hello}/>
        <World message={world}/>
      </div>
    )
  }
}
