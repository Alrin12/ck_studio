import React, {Fragment, Component} from 'react'
import {Motion, StaggeredMotion, spring} from 'react-motion'
import {Stage, Layer, Circle, Text} from 'react-konva'
import Konva from 'konva'
import styled from 'styled-components'


// export class FountainDots extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       ctx: undefined,
//       width: window.innerWidth,
//       height: window.innerHeight,
//       particles: [],
//       colors: [
//         '#029DAF',
//         '#E5D599',
//         '#FFC219',
//         '#F07C19',
//         '#E32551'
//       ],
//       gravity: 0.04,
//       amountDots: 200,
//       test: 1,
//     }
//   }
//
//
//   componentDidMount() {
//     window.addEventListener('resize', this.resize)
//     let i = 0
//     while (i < 200) {
//       setTimeout(this.createParticle, 20 * i, i);
//       i++;
//     }
//     this.renderEffect()
//   }
//
//   getContext = () => {
//     const canvas = document.getElementsByClassName("fountain-dot")
//   }
//
//   initComponent = (canvas) => {
//     const ctx = canvas[0].getContext("2d")
//     const width = this.state.width
//     const height = this.state.height
//     ctx.fillStyle = 'white'
//     ctx.clearRect(0, 0, width, height)
//
//     console.log('h', this.state.ctx, this.state.test)
//     for (let i = 0; i < this.state.amountDots; ++i) {
//       this.createParticle(i)
//     }
//     this.renderEffect(ctx)
//   }
//
//   resize = () => {
//     const width = window.innerWidth
//     const height = window.innerHeight
//     this.setState((state) => {
//       return {
//         width: width,
//         height: height
//       }
//     })
//   }
//
//   createParticle = (i) => {
//     // const particles = []
//
//     const x = this.state.width * 0.5
//     const y = this.state.height * 0.5
//     const vx = -2 + Math.random() * 4
//     const vy = Math.random() * -3
//     const size = 5 + Math.random() * 5
//     const color = this.state.colors[i]
//     const opacity = 0.5 + Math.random() * 0.5
//     const particle = this.newParticle(x, y, vx, vy, size, color, opacity)
//     // particles.push(particle)
//     return particle
//   }
//
//   newParticle = (x, y, vx, vy, size, color, opacity) => {
//     return {
//       x: x,
//       y: y,
//       vx: vx,
//       vy: vy,
//       size: size,
//       color: color,
//       opacity: opacity,
//     }
//   }
//
//   resetDot = (dot) => {
//     const reset_width = this.state.width * 0.5
//     const reset_height = this.state.height * 0.5
//     const reset_opacity = 0.5 + Math.random() * 0.5
//     const reset_vx = -2 + Math.random() * 4
//     const reset_vy = Math.random() * -3
//
//     dot.x = reset_width
//     dot.y = reset_height
//     dot.opacity = reset_opacity
//     dot.vx = reset_vx
//     dot.vy = reset_vy
//     return dot
//   }
//
//   updateDot = (dot, vx, vy) => {
//     let currentDot = dot
//     if (currentDot.opacity - 0.005 > 0) {
//       currentDot.opacity -= 0.005
//     } else {
//
//       currentDot = this.resetDot(dot)
//     }
//     currentDot.vy += this.state.gravity
//     currentDot.x += vx
//     currentDot.y += vy
//     return currentDot
//   }
//
//   renderEffect = () => {
//     const canvas = document.getElementsByClassName("fountain-dot")
//     const ctx = canvas[0].getContext("2d")
//     const width = this.state.width
//     const height = this.state.height
//     const particles = []
//     ctx.fillStyle = 'white'
//     ctx.clearRect(0, 0, width, height)
//
//     for (let i = 0; i < this.state.amountDots; ++i) {
//       const particle = this.createParticle(i)
//       particles.push(particle)
//     }
//     ctx.clearRect(0, 0, width, height)
//
//     for (let i = 0; i < particles.length; ++i) {
//       let currentDot = particles[i]
//       currentDot = this.updateDot(currentDot)
//       draw(currentDot)
//     }
//
//     function draw(particle) {
//         ctx.globalAlpha = particle.opacity
//         ctx.fillStyle = particle.color
//         ctx.fillRect(particle.x, particle.y, particle.size, particle.size)
//     }
//     window.requestAnimationFrame(this.renderEffect)
//   }
//
//   render() {
//     return (
//       <canvas
//         className={"fountain-dot"}
//         width={this.state.width}
//         height={this.state.height}
//       >
//       </canvas>
//     )
//   }
// }

export class Drawer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clientWidth: window.innerWidth,
      clientHeight: window.innerHeight,
      canvasCtx: null,
      intervalTracker: null,
    }
  }

  componentDidMount() {
    const canvas = document.getElementsByClassName("snow-effect")
    const ctx = canvas[0].getContext("2d")
    const client_width = this.state.clientWidth
    const client_height = this.state.clientHeight
    const max_particles = 25
    const particles = []

    this.setState(state => {
      return {canvasCtx: ctx}
    })

    for (let i = 0; i < max_particles; ++i) {
      particles.push({
        x: Math.random() * client_width,
        y: Math.random() * (client_height / 5),
        radius: Math.random() * 4 + 1,
        density: Math.random() * max_particles
      })
    }

    function draw() {
      const color = '#0996ff'
      ctx.clearRect(0, 0, client_width, client_height)
      ctx.fillStyle = color
      ctx.beginPath()

      for (let i = 0; i < max_particles; ++i) {
        const particle = particles[i]
        ctx.moveTo(particle.x, particle.y)
        ctx.arc(particle.x, particle.y, particle.radius, Math.PI * 2, true)
      }
      ctx.fill()
      update()
    }

    let angle = 0

    function update() {
      angle += 0.01
      for (let i = 0; i < max_particles; ++i) {
        const particle = particles[i]
        particle.x += Math.sin(angle) * 2
        particle.y += Math.cos(angle + particle.density) + 1 + particle.radius / 2

        if (particle.x > client_width + 5 || particle.x < -5 || particle.y > client_height) {
          if (i % 3 > 0) {
            particles[i] = {x: Math.random() * client_width, y: -10, radius: particle.radius, density: particle.density}
          } else {
            if (Math.sin(angle) > 0) {
              particles[i] = {
                x: -5,
                y: Math.random() * client_height,
                radius: particle.radius,
                density: particle.density
              }
            } else {
              particle[i] = {
                x: client_width + 5,
                y: Math.random() * client_height,
                radius: particle.radius,
                density: particle.density
              }
            }
          }
        }
      }
    }

    this.setState({intervalTracker: setInterval(draw, 33)})
  }

  componentWillUnmount() {
    this.state.canvasCtx.clearRect(0, 0, this.state.clientWidth, this.state.clientHeight)
    clearInterval(this.state.intervalTracker)
  }

  render() {
    const snowStyle = {
      margin: 0,
      padding: 0,
      pointerEvents: 'none',
      position: 'fixed',
      top: 0,
      zIndex: 1
    }
    return (
      <canvas
        className={"snow-effect"}
        width={this.state.clientWidth}
        height={this.state.clientHeight}
        style={snowStyle}
      >
        <Layer>
          {this.props.children}
        </Layer>
      </canvas>
    )
  }
}