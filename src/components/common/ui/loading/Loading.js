import React, {Component} from 'react'
import Lottie from 'react-lottie'
import Animation from 'react-lottie'
// import * as animationData from '../../../../static/lottie/pinjump.json'

const width = document.body.clientWidth
const height = document.body.clientHeight
const max_offset_width = 400
const max_offset_height = 400

const offset_width = width > max_offset_width ? max_offset_width : width / 2
const offset_height = height > max_offset_height ? max_offset_height : height / 2

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
          height={offset_height}
          width={offset_width}
          isStopped={this.state.isStopped}
          isPaused={this.state.isPaused}
        />
      </div>
    )
  }
}