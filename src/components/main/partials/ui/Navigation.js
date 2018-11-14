import React, {Component} from 'react'
import styled from 'styled-components'

export default class Navigation extends Component {
  constructor(props) {
    super(props)
    this.state = {
      menu: this.props.nav_menu
    }
  }

  render() {
    return(
      <Container>
        {
          this.state.menu.map((menu, id) => {
            return (
              <Menu key={id}>{menu.title}</Menu>
            )
          })
        }
      </Container>
    )
  }
}

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  background: black;
  color: white;
`

const Menu = styled.p`
  &:hover {
    color: blue;
  }
`
