import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  render () {
    return (
      <div>
        <h1>Final check to make sure everything is working</h1>
      </div>
    )
  }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'))
