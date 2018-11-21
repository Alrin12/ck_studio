import React, {Component} from 'react'
import {Parallax, Background} from 'react-parallax'
import styled from 'styled-components'

export default class ParallaxImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      props: this.props,
      image: `../../../../static/images/Parallax/work2.jpeg`
    }
  }

  renderContent = (props) => {
    switch (props.type) {
      case 'renderProp':
        return (
          <Parallax
            bgImage={require(`../../../../static/images/Parallax/${props.image}`)}
            strength={props.strength}
            renderLayer={
              percentage => (
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: `${percentage * 1}rem`,
                    opacity: `${percentage * 1}`,
                    position: 'absolute',
                    background: `rgba(255, 125, 0, ${percentage * 1}`,
                    left: '80%',
                    top: '85%',
                    width: percentage * 100,
                    height: percentage * 50,
                    borderRadius: '5px',
                    color: 'white',
                  }}
                >
                  문의하기
                </div>
              )
            }
          >
            {this.props.children}
          </Parallax>
        )

      case 'dynamicBlur':
        return (
          <Parallax
            blur={{min: props.min_blur, max: props.max_blur}}
            bgImage={require(`../../../../static/images/Parallax/${props.image}`)}
            strength={props.strength}
          >
            <div style={{minHeight: '350px'}}>
              {this.props.children}
            </div>
          </Parallax>
        )

      default:
        return (
          <Parallax
            bgImage={require(`../../../../static/images/Parallax/${props.image}`)}
            strength={props.strength}
          >
            <div style={{minHeight: '350px'}}>
              {this.props.children}
            </div>
          </Parallax>
        )
    }
  }

  render() {
    console.log(this.state.image)
    return (
      <div style={{minHeight: '350px'}}>
        {
          this.renderContent(this.state.props)
        }
      </div>
    )
  }
}
