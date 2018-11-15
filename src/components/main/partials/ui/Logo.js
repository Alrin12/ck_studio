import React, {Component} from 'react'
import {RowContainer} from "../../../common/ui/Theme";
import styled from 'styled-components'

export default class Logo extends Component {

  render() {
    return(
      <RowContainer style={{padding: '1rem 0 1rem 1rem'}}>
        <Title style={{color: '#343434'}}>
          CK Studio
        </Title>
      </RowContainer>
    )
  }
}


const Title = styled.span`
  font-size: 5rem;
  font-weight: 700;
`