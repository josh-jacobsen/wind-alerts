import React from 'react'
import ReactDOM from 'react-dom'

var request = require('superagent')

request
  .get('https://api.github.com/repos/visionmedia/superagent')
  .end(function(err, res){
    console.log(res)

  });


export default class Hello extends React.Component {
  render () {
    return (
      <div>
        <h4>{this.props.message}</h4>
      </div>
    )
  }
}
