import React, {Component} from 'react'
import Banner from './partials/ui/Banner'
import ProfileCard from '../common/ui/profile-card/ProfileCard'
import Navigation from './partials/ui/Navigation'
import Loading from '../common/ui/loading/Loading'
import {ColumnContainer} from "../common/ui/Theme"
import Typographic from './partials/ui/Typographic'
import Logo from './partials/ui/Logo'
import FountainDots from '../common/ui/effect/FountainDots'
import ProjectProgress from './partials/ui/ProjectProgress'
import ParallaxImage from './partials/ui/ParallaxImage'
import ScrollAnim from 'rc-scroll-anim'
import styled from 'styled-components'
import ProfileStats from "../common/ui/profile-card/ProfileStats";

const ScrollParallax = ScrollAnim.Parallax
const ScrollElement = ScrollAnim.Element

export default class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      nav_menu: [
        {id: 1, title: 'CK Studio', hover: false},
        {id: 2, title: 'Visions', hover: false},
        {id: 3, title: 'Projects', hover: false},
        {id: 4, title: 'Recruit', hover: false},
        {id: 5, title: 'E-mail', hover: false},
      ],

      animation_timer: 0,
      intervalId: null,
    }
  }

  componentDidMount() {
    const intervalId = setInterval(this.updateAnimationTimer, 1000)
    window.addEventListener('scroll', this.handleScroll)
    this.setState((state) => {
      return {intervalId: intervalId}
    })
  }

  handleScroll = (event) => {

  }

  updateAnimationTimer = () => {
    if (this.state.animation_timer < 4) {
      this.setState((prevState) => {
        return {animation_timer: prevState.animation_timer + 1}
      })
    } else {
      clearInterval(this.state.intervalId)
      this.setState(() => {
        return {intervalId: null}
      })
    }
  }

  render() {
    const AnimationWrapper = this.props.wrapper
    return (
      // this.state.intervalId ? <Loading/> :
      <AnimationWrapper>
        <Logo/>
        <Navigation
          nav_menu={this.state.nav_menu}
        />
        <FountainDots>
          <Typographic
            title={'.Big Idea'}
            subtitle={'세상을 바꾸는 방법'}
            subtitleColor={'skyblue'}
          />
        </FountainDots>
        <br/>
        <br/>
        <br/>
        <ParallaxImage
          image={'Work-culture.jpg'}
          type={'dynamicBlur'}
          min_blur={-10}
          max_blur={30}
        >
          <Typographic
            title={'결과로 보여드립니다.'}
            subtitle={'-CK Studio'}
            titleColor={'#2b2929'}
            subtitleColor={'#ff4a75'}
          />
        </ParallaxImage>
        <br/>
        <br/>
        <br/>
        <br/>
        <ScrollParallax
          animation={{blur: '0px', playScale: [0, 0.5], opacity: 1}}
          style={{filter: 'blur(20px)', opacity: 0, color: '#ffffff'}}
          className={'parallax-shape'}
        >
          <ProjectProgress/>
        </ScrollParallax>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <ScrollParallax
          animation={{x: 0, backgroundColor: '#00ffc6', playScale: [0.3, 0.8], opacity: 1}}
          style={{transform:'translateX(-300px)', opacity:0, filter: 'blur(0px)'}}
        >
          <Typographic
            title={`About CK-Studio`}
            titleColor={'cornsilk'}
            article={`
          '불가능 한 일은 없다'는 모토로 세상에 만연해 있는 불편함들을 해결하는 '해결사'입니다.br
          _yellow 문제 해결_을 위한 _deepskyblue 근본적인 문제 인식_과 설계, 끊임없는 연구를 통해 어떠한 솔루션보다br
          완벽한 결과물을 선사해드립니다.
          `}
            articleColor={'white'}
          />
        </ScrollParallax>
        <br/>
        <br/>
        <ProfileCard
          cardClass={'float'}
          name={'test'}
          positionName={'Engineer'}
          stats={[
            {name: 'test1', value: 350},
            {name: 'test1', value: 350},
            {name: 'test1', value: 350},
          ]}
        />
        <ParallaxImage
          image={'work2.jpeg'}
          strength={500}
          type={'renderProp'}
        >
          <br/>
          <br/>
          <br/>
          <br/>
          <Typographic
            title={'무엇이든 말씀하세요.'}
            subtitle={'-Developer CK-'}
            titleColor={'white'}
            subtitleColor={'#c3873e'}
          />
          <br/>
          <br/>
          <br/>
          <br/>
        </ParallaxImage>
        <br/>
        <br/>
        <br/>
        <br/>
        <Banner/>
        <div style={{height: '300px'}}/>
        <div style={{height: '300px'}}/>
        <div style={{height: '300px'}}/>
      </AnimationWrapper>
    )
  }
}

const ComponentWrapper = styled.div`
  height: 100vh;
`

const ContentWrapper = styled.div`
  flex: ${props => props.flex};
`