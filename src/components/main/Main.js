import React, {Component} from 'react'
import Banner from './partials/ui/Banner'
import ProfileCard from '../common/ui/profile-card/ProfileCard'
import Loading from '../common/ui/loading/Loading'
import styled from 'styled-components'

export default class Main extends Component {
  constructor(props) {
    super(props);
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
    this.setState((state) => {
      return {intervalId: intervalId}
    })
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
    console.log(this.state.animation_timer)
    return (
      this.state.intervalId ? <Loading/> :
      <Container>
        <Navigation>
          {
            this.state.nav_menu.map((menu, id) => {
              return (
                <Menu key={id}>{menu.title}</Menu>
              )
            })
          }
        </Navigation>
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
        <Banner/>
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: black;
  color: white;
`

const Navigation = styled.div`
  display: flex;
  justify-content: space-around;
  text-align: center;
`

const Menu = styled.p`
  &:hover {
    color: blue;
  }
`