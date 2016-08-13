import { connect } from 'react-redux'

import Wind from '../components/WindComponent.jsx'

const mapStateToProps = (state) => {
  return {
    wind: state.wind
  }
}

const mapDispatchToProps = () => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Wind)
