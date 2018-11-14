import React, {Component} from 'react'
import Swiper from 'react-id-swiper'
import {RowContainer} from "../../../common/ui/Theme";
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
          title: '2018년도 얼마 안남았네요',
          subtitle: '',
          textColor: '#ff7fc7',
          backgroundColor: '#ffffff',
          image: require('../../../../static/images/adios.png')
        },
        {id: 2, title: 'Test #2', subtitle: '', textColor: 'yellow', backgroundColor: 'skyblue', image: ''},
        {
          id: 3,
          title: '여행을 가고싶을땐?',
          subtitle: 'Ck Travel',
          textColor: 'white',
          backgroundColor: 'white',
          image: require('../../../../static/images/travel.jpg')
        },
        {id: 4, title: 'Test #4', subtitle: '', textColor: 'skyblue', backgroundColor: 'pink', image: ''},
        {
          id: 5,
          title: 'Test #5',
          subtitle: '',
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
      <RowContainer>
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
                  <Title>{item.title}</Title>
                  <Subtitle>{item.subtitle}</Subtitle>
                </AdvertiseWrapper>
              )
            })
          }
        </Swiper>
      </RowContainer>
    )
  }
}



const AdvertiseWrapper = styled.div`
  background: ${props => props.background} no-repeat;
  color: ${props => props.color};
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 100%;
`

const Title = styled.p`
  color: inherit;
  font-size: 4rem;
  font-weight: 700;
  z-index: 2;
`

const Subtitle = styled.p`
  color: inherit;
  font-size: 2rem;
  font-weight: 500;
  z-index: 2;
`