import React, {Component} from 'react'
import {Stage, Layer, Rect, Text} from 'react-konva'
import Konva from 'konva'
import styled from 'styled-components'

const client_width = window.innerWidth
const client_height = window.innerHeight

export class Drawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'green'
    }
  }

  handleClick = () => {
    this.setState(() => {
      return {color: Konva.Util.getRandomColor()}
    })
  }

  render() {
    return (
      <Stage
        width={client_width}
        height={client_height / 5}
      >
        <Layer>
          <Text text={"Try click on rect"}/>
          <Rect
            x={20}
            y={20}
            width={50}
            height={50}
            fill={this.state.color}
            shadowBlur={5}
            onClick={this.handleClick}
          />
        </Layer>
      </Stage>
    )
  }
}