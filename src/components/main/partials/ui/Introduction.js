import React, {Component} from 'react'
import styled from 'styled-components'
import {Motion, spring} from 'react-motion'
import {ColumnContainer} from "../../../common/ui/Theme";

export default class Introduction extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <ColumnContainer>
        <p style={{color: '#ffffff'}}>
          testestesettstse
        </p>
      </ColumnContainer>
    )
  }
}

