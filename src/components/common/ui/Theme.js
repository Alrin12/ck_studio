import {Motion, spring} from 'react-motion'
import React, {Component} from 'react'
import styled from "styled-components"

export const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
`

export const RowContainer = styled.div`
  display: flex;
`

export class SlideDownContainer extends Component {
  render() {
    return(
      <Motion
        defaultStyle={{y: -500, opacity: 0}}
        style={{
          y: spring(0),
          opacity: spring(1)
        }}
      >
        {
          style => (
            <div
              style={{
                transform: `translateY(${style.y}px)`,
                opacity: style.opacity,
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                height: '100%',
                flexWrap: 'wrap'
              }}
            >
              {this.props.children}
            </div>
          )
        }
      </Motion>
    )
  }
}

