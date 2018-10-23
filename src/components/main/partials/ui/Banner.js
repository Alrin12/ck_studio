import React, {Component} from 'react'
import Swiper from 'react-id-swiper'

export default class Banner extends Component {
  constructor(props) {
    super(props)
    this.slideToRight = this.slideToRight.bind(this)
    this.slideToLeft = this.slideToLeft.bind(this)
    this.swiper = null
    this.state = {

    }
  }

  componentDidMount() {

  }

  slideToRight() {
    if (this.swiper) {
      this.swiper.slideNext()
    }
  }

  slideToLeft() {
    if (this.swiper) {
      this.swiper.slidePrev()
    }
  }

  render() {
    const params = {
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: false
      },
      navigatiohn: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      }
    }

    return(
      <div>
        <Swiper {...params} ref={node => if(node) this.swiper = node.swiper}>

        </Swiper>
      </div>
    )
  }
}