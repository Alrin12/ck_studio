import React, {Component} from 'react'
import {Progress} from 'react-sweet-progress'
import 'react-sweet-progress/lib/style.css'
import {RowContainer} from "../../../common/ui/Theme";
import styled from 'styled-components'

export default class ProjectProgress extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [
        {id: 1, symbol: 'React-Native', progress: 85, color: '#00c0ff'},
        {id: 2, symbol: 'React', progress: 80, color: '#ffdb1c'},
        {id: 3, symbol: 'Angular', progress: 70, color: '#ff2f5b'},
        {id: 4, symbol: 'Vue', progress: 85, color: '#33ff02'},
      ],
      percentage: 0,
    }
  }

  render() {
    return (
      <div>
        <Title>
          CK's Stack
        </Title>
      <RowContainer
        style={{
          justifyContent: 'space-around'
        }}
      >
        {
          this.state.data.map((item, id) => {

            return (
              <Progress
                key={id}
                type={'circle'}
                percent={item.progress}
                status={'active'}
                theme={{
                  active: {
                    symbol: item.symbol,
                    color: item.color,
                  }
                }}
              />
            )
          })
        }
      </RowContainer>
      </div>
    )
  }
}

const Title = styled.p`
  font-size: 2rem;
  font-weight: 700;
  color: #696c6b;
`