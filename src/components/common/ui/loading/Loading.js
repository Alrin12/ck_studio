import React, {Component} from 'react'
import Lottie from 'react-lottie'
import Animation from 'react-lottie'
// import * as animationData from '../../../../static/lottie/pinjump.json'

export default class Loading extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isStopped: false,
      isPaused: false
    }
  }

  render() {
    const containerStyle = {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: '0, auto'
    }

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: require('../../../../static/lottie/servishero_loading.json'),
      rendererSettings: {
        preserveAspectRatio: 'xMidYMid slice'
      }
    }

    return(
      <div style={containerStyle}>
        <Lottie
          options={defaultOptions}
          height={500}
          width={500}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    )
  }
}