import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: black;
  margin: 2rem auto;
  max-width: 100vh;
  max-height: 100vh;
  color: white;
  border-radius: 5px;
  transform: ${props => `scale(${props.scale})`};
`;

const After = styled.div`
  background: black;
  width: 300px;
  height: 300px;
`

//max-height: ${props => `height(${props.height})`};

export default class CircleLoader extends Component {
  render() {
    const {scale} = this.props
    console.log(this.props)
    return (
      <Container scale={scale}>
        <div className="card">
          <span>CK Studio present</span>
        </div>
      </Container>
    );
  }
}


