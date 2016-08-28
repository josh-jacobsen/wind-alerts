import React from 'react'
import ReactDOM from 'react-dom'

export default (props) => {
  const wind = props.wind

    return (
      <div>
      <h4>Speed: {wind.speed}</h4>
      <h4>Direction (degrees): {wind.deg}</h4>
      <h4>Gust: {wind.gust}</h4>
      </div>
    )

}
