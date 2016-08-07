import React from 'react'
import ReactDOM from 'react-dom'

import request from 'superagent'

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



// var UserGist = React.createClass({
//   getInitialState: function() {
//     return {
//       username: '',
//       lastGistUrl: ''
//     };
//   },
//
//   componentDidMount: function() {
//     this.serverRequest = $.get(this.props.source, function (result) {
//       var lastGist = result[0];
//       this.setState({
//         username: lastGist.owner.login,
//         lastGistUrl: lastGist.html_url
//       });
//     }.bind(this));
//   },
//
//   componentWillUnmount: function() {
//     this.serverRequest.abort();
//   },
//
//   render: function() {
//     return (
//       <div>
//         {this.state.username}'s last gist is
//         <a href={this.state.lastGistUrl}>here</a>.
//       </div>
//     );
//   }
// });
//
// ReactDOM.render(
//   <UserGist source="https://api.github.com/users/octocat/gists" />,
//   mountNode
// );
