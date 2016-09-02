import { connect } from 'react-redux'

import Wind from '../components/WindComponent.jsx'

const mapStateToProps = (state) => {
  return {
    weather: state.weather,
    status: state.status
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wind)
