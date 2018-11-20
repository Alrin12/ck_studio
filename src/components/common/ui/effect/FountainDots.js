import React, {Component} from 'react'
import Konva from 'konva'
import {Stage, Layer, Text} from 'react-konva'
import {Motion, StaggeredMotion, spring} from 'react-motion'
import styled from 'styled-components'

export default class FountainDots extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clientWidth: window.innerWidth,
      clientHeight: window.innerHeight / 2.5,
      canvasCtx: null,
      me: {
        draw: null,
      },
      colors: [
        '#029DAF',
        '#E5D599',
        '#FFC219',
        '#F07C19',
        '#E32551',
      ],
      particles: [],
      particleAmount: 150,
      gravity: 0.5,
      shootPower: 10
    }
  }

  componentDidMount() {
    const self = this
    const canvas = document.getElementsByClassName('fountain-dots')
    canvas.width = this.state.clientWidth
    canvas.height = this.state.clientHeight
    const me = {}
    // let halfOfWidth = canvas.width / 2;
    // let halfOfHeight = canvas.height / 2;
    const particles = []

    const ctx = canvas[0].getContext('2d')

    this.setState((state) => {
      return {canvasCtx: ctx}
    })

    ctx.fillStyle = "white"
    ctx.fillRect(0, 0, canvas.width, canvas.height)
    // ctx.translate(halfOfWidth, halfOfHeight);

    for (let i = 0; i < this.state.particleAmount; i++) {
      const velocity_x = this.generateRandomVelocityX()
      const velocity_y = this.generateRandomVelocityY()
      const particle_x = -(this.state.clientWidth / 2) + Math.floor(Math.random() * 50)
      const particle_y = Math.floor(Math.random() * 10) + 100
      const velocity = this.velocity(velocity_x, velocity_y)
      const particle = this.dot(particle_x, particle_y, velocity)
      particles.push(particle)
    }

    this.setState((state) => {
      return {
        particles: particles
      }
    })

    me.draw = function () {
      // const particles = self.state.particles
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.fillStyle = 'rgba(255,255,255,1)'
      ctx.fillRect(0, 0, self.state.clientWidth, self.state.clientHeight)
      ctx.translate(self.state.clientWidth, self.state.clientHeight)

      for (let i = 0; i < particles.length; i++) {
        const currentDot = particles[i]
        ctx.beginPath()
        ctx.arc(currentDot.x, currentDot.y, currentDot.size, 10, 1 * Math.PI, true)
        ctx.fillStyle = currentDot.color
        ctx.fill()
        currentDot.life--

        if (currentDot.life === 0) {
          self.reset(currentDot)
        }
        currentDot.v.addVelocity(currentDot)
      }
      window.requestAnimationFrame(me.draw)
    }

    window.requestAnimationFrame(me.draw)

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      self.setState((state) => {
        return {
          clientWidth: window.innerWidth,
          clientHeight: window.innerHeight / 2.5
        }
      })
      // halfOfWidth = canvas.width / 2;
      // halfOfHeight = canvas.height / 2;
    })
  }

  velocity = (x, y) => {
    return {
      x: y,
      y: y,
      addVelocity: (dot) => {
        dot.x += x
        dot.y += y + ((dot.givenLife - dot.life) / 10) + this.state.gravity / 2
      }
    }
  }

  dot = (x, y, v) => {
    return {
      x: x,
      y: y,
      v: v,
      color: this.generateColor(),
      givenLife: 100,
      life: 20,
    }
  }

  reset = (dot) => {
    const vx = this.generateRandomVelocityX()
    const vy = this.generateRandomVelocityY()

    // dot.v.x = vx
    // dot.v.y = vy
    // dot.x = -(this.state.clientWidth / 2) + Math.floor(Math.random() * 50)
    // dot.y = Math.floor(Math.random() * 10) + 100
    dot.color = this.generateColor()
    dot.life = Math.floor(Math.random() * 200) + 1
    dot.givenLife = dot.life
    dot.size = Math.random() * 3 + 2
  }

  generateColor = () => {
    // const hue = Math.floor(Math.random() * 360);
    // return 'hsla(' + hue + ', 100%, 50%, 1)';
    const index = Math.floor(Math.random() * 4);
    return this.state.colors[index]
  }

  generateRandomVelocityX = () => {
    return Math.floor(Math.random() * 6) - 3
  }

  generateRandomVelocityY = () => {
    return Math.floor(Math.random() * this.state.shootPower) - 12
  }

  render() {
    return (
      <Container
        width={this.state.clientWidth}
        height={this.state.clientHeight}
      >
        <CanvasWrapper>
          <Canvas
            className={'fountain-dots'}
            width={this.state.clientWidth}
            height={this.state.clientHeight}
          />
        <PropWrapper>
          {this.props.children}
        </PropWrapper>
        </CanvasWrapper>
      </Container>
    )
  }
}

const Container = styled.div`
  position: relative;
  width: ${props => props.width}px;
`

const CanvasWrapper = styled.div`
  display: flex;
  position: relative;
  justify-content: center;
`
const PropWrapper = styled.div`
  position: relative;
  opacity: 1;
  transform: scale(1);
  animation-name: fadeIn;
  animation-iteration-count: 1;
  animation-timing-function: ease-in;
  animation-duration: 1.2s;
  background-color: rgba(255,255,255,0);
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`

const Canvas = styled.canvas`
  position: absolute;
  width: 100%;
`