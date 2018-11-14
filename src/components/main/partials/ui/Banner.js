import React, {Component} from 'react'
import Swiper from 'react-id-swiper'
import './Banner.css'
import styled from 'styled-components'


export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.slideToRight = this.slideToRight.bind(this)
    this.slideToLeft = this.slideToLeft.bind(this)
    this.swiper = null
    this.state = {
      advertise: [
        {
          id: 1,
          content: '2018년도 얼마 안남았네요',
          textColor: '#ff7fc7',
          backgroundColor: '#ffffff',
          image: require('../../../../static/images/adios.png')
        },
        {id: 2, content: 'Test #2', textColor: 'yellow', backgroundColor: 'skyblue', image: ''},
        {
          id: 3,
          content: 'Test #3',
          textColor: 'pink',
          backgroundColor: 'white',
          image: require('../../../../static/images/travel.jpg')
        },
        {id: 4, content: 'Test #4', textColor: 'skyblue', backgroundColor: 'pink', image: ''},
        {
          id: 5,
          content: 'Test #5',
          textColor: 'skyblue',
          backgroundColor: 'pink',
          image: require('../../../../static/images/question.jpg')
        },
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
        el: ['.swiper-pagination', '.swiper-container'],
        type: 'bullets',
      },
      navigation: {
        // nextEl: '.swiper-button-next',
        // prevEl: '.swiper-button-prev'

      },
      autoplay: {
        delay: 3000
      },

      spaceBetween: 10,

    }


    return (
      <Container>
        <Swiper {...params} containerClass={'swipe-container'}>
          {
            this.state.advertise.map((item, id) => {
              return (
                <AdvertiseWrapper
                  key={id}
                  background={item.backgroundColor}
                  color={item.textColor}
                  style={{backgroundImage: `url(${item.image})`}}
                >
                  <Title>{item.content}</Title>
                </AdvertiseWrapper>
              )
            })
          }
        </Swiper>
      </Container>
    )
  }
}


const Container = styled.div`
  display: flex;
`

const AdvertiseWrapper = styled.div`
  background: ${props => props.background} no-repeat;
  color: ${props => props.color};
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 100%;
`

const Title = styled.p`
  position: relative;
  color: inherit;
  font-size: 4rem;
  font-weight: 700;
  z-index: 2;
`