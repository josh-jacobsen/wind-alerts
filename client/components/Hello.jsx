import React from 'react'
import ReactDOM from 'react-dom'

export default class Hello extends React.Component {
  render () {
    return (
      <div>
        <h4>{this.props.message}</h4>
      </div>
    )
  }
}
