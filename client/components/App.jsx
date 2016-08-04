import React from 'react'

import Hello from './Hello.jsx'
import World from './World.jsx'

const hello = "hello world"
const world = "here I am"

export default class App extends React.Component {
  render () {
    return (
      <div>
        <Hello message={hello}/>
        <World message={world}/>
      </div>
    )
  }
}
