import React, {Component} from 'react'
import Swiper from 'react-id-swiper'
import styled from 'styled-components'

export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.slideToRight = this.slideToRight.bind(this)
    this.slideToLeft = this.slideToLeft.bind(this)
    this.swiper = null
    this.state = {
      advertise: [
        {id: 1, content: 'Test #1', textColor: '#ffffff', backgroundColor: '#000000'},
        {id: 2, content: 'Test #2', textColor: 'yellow', backgroundColor: 'skyblue'},
        {id: 3, content: 'Test #3', textColor: 'pink', backgroundColor: 'white'},
        {id: 4, content: 'Test #4', textColor: 'skyblue', backgroundColor: 'pink'},
      ]

    }
  }

  componentDidMount() {

  }

  slideToRight() {
    if (this.swiper) {
      this.swiper.slidePrev()
    }
  }

  slideToLeft() {
    if (this.swiper) {
      this.swiper.slideNext()
    }
  }

  renderAdvertise = item => {
    return (
      <div></div>
    )
  }

  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
      },
      navigation: {
        // nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev'

      }
    }


    return(
      <div>
        <Swiper {...params}>
          {
            this.state.advertise.map((item, id) => {
              return (
                <Test key={id} color={item.textColor} background={item.backgroundColor}>
                  <Title>{item.content}</Title>
                </Test>
              )
            })
          }
        </Swiper>
      </div>
    )
  }
}

const Test = styled.div`
  display: flex;
  background: ${props => props.background};
  color: ${props => props.color};
  width: 500px;
  height: 500px;
  align-items: center;
  justify-content: center
`

const Title = styled.p`
  color: inherit;
  font-size: 2rem;
  font-weight: 500;
`