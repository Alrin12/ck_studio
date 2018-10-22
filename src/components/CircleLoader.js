import React, { Component } from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: black;
  color: white;
  max-width: 500px;
  max-height: 200px;
  margin: 2rem auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transform: ${props => `scale(${props.scale})`};
`;


export default class CircleLoader extends Component {
  render() {
    const {scale} = this.props
    return (
      <Container scale={scale}>
        <div className="card">
          <span>CK Studio present</span>
        </div>
      </Container>
    );
  }
}


