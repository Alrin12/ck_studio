import {Motion, spring} from 'react-motion'
import React, {Component} from 'react'
import styled from "styled-components"

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  color: white;
`

export class SlideDownContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const Wrapper = this.props.wrapper

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
            <Wrapper
              style={{
                transform: `translateY(${style.y}px)`,
                opacity: style.opacity
              }}
            >
              {this.props.children}
            </Wrapper>
          )
        }
      </Motion>
    )
  }
}

