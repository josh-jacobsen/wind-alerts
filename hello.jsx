import React from 'react'
import ReactDOM from 'react-dom'

class Hello extends React.Component {
  render () {
    return (
      <div>
        <h1>Aw what the fuck. Is this back to. OK, so let me get this right. The webpack entry at publicPath has to be hard coded as a string for it to work properly</h1>
      </div>
    )
  }
}

ReactDOM.render(<Hello/>, document.getElementById('hello'))
