import React from 'react'
import ReactDOM from 'react-dom'

export default (props) => {
  const wind = props.wind
  const success = props.status === 'success'

  if (success) {
    return (
      <div>
      <h4 className="fick">Speed: {wind.speed}</h4>
      <h4>Direction (degrees): {wind.deg}</h4>
      <h4>Gust: {wind.gust}</h4>
      </div>
    )
  } else {
    return (
      <div>
        <h4>Loading.....</h4>
      </div>
    )
  }


}
