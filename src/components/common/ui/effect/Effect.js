import React, {Fragment, Component} from 'react'
import {Stage, Layer, Circle, Text} from 'react-konva'
import {Motion, StaggeredMotion, spring} from 'react-motion'
import Konva from 'konva'
import styled from 'styled-components'

class CircleShape extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: 'red'
    }
  }

  setColor = () => {
    this.setState((state) => {
      return {color: Konva.Util.getRandomColor()}
    })
  }

  render() {
    const Wrapper = this.props.wrapper
    return (
      <Wrapper>
      </Wrapper>
    )
  }
}

export class FountainEffects extends Component {
  constructor(props) {
    super(props)
    this.state = {
      clientWidth: window.innerWidth,
      clientHeight: window.innerHeight / 5,
      canvasCtx: null,
      me: {
        draw: null,
      },
      velocity: {
        x: 0,
        y: 0,
      },
      particles: [],
      particleAmount: 100,
      gravity: 0.1,
      shootPower: 10
    }
  }

  componentDidMount() {
    const canvas = document.getElementsByClassName('fountain-dots');
    canvas.width = this.state.clientWidth
    canvas.height = this.state.clientHeight

    const ctx = canvas[0].getContext('2d');
    let halfOfWidth = canvas.width / 2;
    let halfOfHeight = canvas.height / 2;
    const particles = this.state.particles

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.translate(halfOfWidth, halfOfHeight);

    for (let i = 0; i < this.state.particleAmount; i++) {
      const particle = this.dot()
      particles.push(particle)
    }

    this.setState((state) => {
      return {
        particles: particles
      }
    })

    this.draw(ctx, canvas, halfOfWidth, halfOfHeight)

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      halfOfWidth = canvas.width / 2;
      halfOfHeight = canvas.height / 2;
    })
  }

  dot = () => {
    return {
      x: 0,
      y: 0,
      v: {
        x: this.generateRandomVelocityX(),
        y: this.generateRandomVelocityY(),
        addVelocity: this.addVelocity
      },
      size: 1,
      color: this.generateColor(),
      givenLife: 100,
      life: 20,
      reset: this.reset,
    }
  }

  reset = (dot) => {
    dot.x = 0;
    dot.y = 0;

    const vx = this.generateRandomVelocityX();
    const vy = this.generateRandomVelocityY();
    dot.v.x = vx;
    dot.v.y = vy;
    dot.color = this.generateColor();
    dot.life = Math.floor(Math.random() * 200) + 1;
    dot.givenLife = dot.life;
    dot.size = Math.random() * 3 + 1;
  }

  generateColor = () => {
    const hue = Math.floor(Math.random() * 360);
    return 'hsla(' + hue + ', 100%, 50%, 1)';
  }

  velocity = () => {
    const x = this.generateRandomVelocityX()
    const y = this.generateRandomVelocityY()
    return {x, y}
  }

  addVelocity = (dot) => {
    dot.x += this.x
    dot.y += this.y + ((dot.givenLife - dot.life) / 10) + this.state.gravity / 2
  }


  generateRandomVelocityX = () => {
    return Math.floor(Math.random() * 6) - 3;
  }
  generateRandomVelocityY = () => {
    return Math.floor(Math.random() * this.state.shootPower) - this.state.shootPower;
  }


  draw = (ctx, canvas, halfOfWidth) => {
    // Begin clear
    const particles = this.state.particles
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    ctx.fillRect(0, 0, this.state.clientWidth, this.state.clientHeight);
    ctx.translate(halfOfWidth, this.state.clientHeight);

    for (let i = 0; i < particles.length; i++) {
      const currentDot = particles[i];
      ctx.beginPath();

      ctx.arc(currentDot.x, currentDot.y, currentDot.size, 0, 2 * Math.PI, true);
      ctx.fillStyle = currentDot.color;
      ctx.fill();


      currentDot.life--;

      if (currentDot.life === 0) {
        currentDot.reset();
      }

      currentDot.v.addVelocity(currentDot);

    }
    const container = this.particleContainer(ctx)
    window.requestAnimationFrame(container.draw);
  }

  particleContainer = (ctx) => {
    const me = this.state.me;

    me.draw = this.draw(ctx)
    return me;
  }

  render() {
    return (
      <canvas className={'fountain-dots'}>
      </canvas>
    )
  }
}

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