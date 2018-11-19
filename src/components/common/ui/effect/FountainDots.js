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
      clientHeight: window.innerHeight / 3,
      canvasCtx: null,
      me: {
        draw: null,
      },
      colors: [
        '#029DAF',
        '#E5D599',
        '#FFC219',
        '#F07C19',
        '#E32551'
      ],
      particles: [],
      particleAmount: 150,
      gravity: 0.5,
      shootPower: 10
    }
  }

  componentDidMount() {
    const self = this
    const canvas = document.getElementsByClassName('fountain-dots');
    canvas.width = this.state.clientWidth
    canvas.height = this.state.clientHeight
    const me = {}
    let halfOfWidth = canvas.width / 2;
    let halfOfHeight = canvas.height / 2;
    const particles = []

    const ctx = canvas[0].getContext('2d');

    this.setState((state) => {
      return {canvasCtx: ctx}
    })

    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.translate(halfOfWidth, halfOfHeight);

    for (let i = 0; i < this.state.particleAmount; i++) {
      const x = this.generateRandomVelocityX()
      const y = this.generateRandomVelocityY()
      const velocity = this.velocity(x, y)
      const particle = this.dot(0, 0, velocity)
      particles.push(particle)
    }

    this.setState((state) => {
      return {
        particles: particles
      }
    })

    me.draw = function () {
      // const particles = self.state.particles
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.fillStyle = 'rgba(255,255,255,1)';
      ctx.fillRect(0, 0, self.state.clientWidth, self.state.clientHeight);
      ctx.translate(halfOfWidth, self.state.clientHeight);

      for (let i = 0; i < particles.length; i++) {
        const currentDot = particles[i];
        ctx.beginPath();

        ctx.arc(currentDot.x, currentDot.y, currentDot.size, 0, 9 * Math.PI, true);
        ctx.fillStyle = currentDot.color;
        ctx.fill();
        currentDot.life--;

        if (currentDot.life === 0) {
          self.reset(currentDot)
        }
        currentDot.v.addVelocity(currentDot);
      }
      window.requestAnimationFrame(me.draw)
    }

    window.requestAnimationFrame(me.draw)

    window.addEventListener("resize", () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      self.setState((state) => {
        return {
          clientWidth: window.innerWidth,
          clientHeight: window.innerHeight / 3
        }
      })
      halfOfWidth = canvas.width / 2;
      halfOfHeight = canvas.height / 2;
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

    dot.v.x = vx
    dot.v.y = vy
    // dot.x = 0
    // dot.y = 0
    dot.color = this.generateColor()
    dot.life = Math.floor(Math.random() * 200) + 1
    dot.givenLife = dot.life
    dot.size = Math.random() * 3 + 1
  }

  generateColor = () => {
    // const hue = Math.floor(Math.random() * 360);
    // return 'hsla(' + hue + ', 100%, 50%, 1)';
    const index = Math.floor(Math.random() * 4);
    return this.state.colors[index]
  }

  generateRandomVelocityX = () => {
    return Math.floor(Math.random() * 6) - 3;
  }
  generateRandomVelocityY = () => {
    return Math.floor(Math.random() * this.state.shootPower) - this.state.shootPower;
  }

  render() {
    return (

      <canvas
        className={'fountain-dots'}
        width={this.state.clientWidth}
        height={this.state.clientHeight}
      >
        <Layer>
          <Text>
            {this.props.children}
          </Text>
        </Layer>
      </canvas>
    )
  }
}
