import React, {Component} from 'react'
import {RowContainer} from "../../../common/ui/Theme";
import styled from 'styled-components'

export default class Typographic extends Component {
  constructor(props) {
    super(props)
    this.getFontSize = this.getFontSize.bind(this)
    this.state = {
      backgroundColor: this.props.backgroundColor,
      background: this.props.background,
      fontColor: this.props.fontColor,
      titleColor: this.props.titleColor,
      subtitleColor: this.props.subtitleColor,
      articleColor: this.props.articleColor,
      title: this.props.title,
      subtitle: this.props.subtitle,
      article: this.props.article
    }
  }

  getFontSize() {
    const subtitle = this.state.subtitle
    const article = this.state.article

    if (subtitle && article) {
      return {title: '3rem', subtitle: '2rem', article: '1rem'}
    }

    if (subtitle) {
      return {title: '7rem', subtitle: '3rem', article: '0rem'}
    }

    if (article) {
      return {title: '4rem', subtitle: '0rem', article: '1rem'}
    }

    return {title: '8rem', subtitle: '0rem', article: '0rem'}
  }

  renderComponent = (fontSize) => {
    return (
      <ContentWrapper
        style={{backgroundImage: this.state.background}}
        color={this.state.backgroundColor}
      >
        <Title
          color={this.state.titleColor}
          size={fontSize.title}
        >
          {this.state.title}
        </Title>
        {
          this.state.subtitle &&
          <Subtitle
            color={this.state.subtitleColor}
            fontSize={fontSize.subtitle}
          >
            {this.state.subtitle}
          </Subtitle>
        }
        {
          this.state.article &&
          <Article
            color={this.state.articleColor}
            fontSize={fontSize.article}
          >
            {this.state.article}
          </Article>
        }
      </ContentWrapper>
    )
  }

  render() {
    const fontSize = this.getFontSize()
    const Wrapper = this.props.wrapper
    return (
      <Wrapper>
        <RowContainer>
          {
            this.renderComponent(fontSize)
          }
        </RowContainer>
      </Wrapper>
    )
  }
}

const ContentWrapper = styled.div`
  width: 100%;
  background-color: ${props => props.color ? props.color : 'white'};
  background-size: cover;
`

const Title = styled.p`
  font-size: ${props => props.size};
  font-weight: 700;
  color: ${props => props.color ? props.color : 'black'};
  margin-bottom: -1rem;
`

const Subtitle = styled.p`
  font-size: ${props => props.fontSize};
  font-weight: 500;
  color: ${props => props.color ? props.color : 'black'};
`

const Article = styled.p`
  font-size: ${props => props.fontSize};
  font-weight: 400;
  color: ${props => props.color ? props.color : 'black'};
`