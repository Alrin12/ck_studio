import React, {Component} from 'react'
import {RowContainer, ColumnContainer} from "../../../common/ui/Theme";
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

  parseRegex = (article) => {
    const parseColorWord = /_(?=red|pink|blue|yellow|white|gold|silver|deepskyblue)(.+?)_/igm
    const parseBlockWord = /(red|pink|blue|yellow|white|gold|silver|deepskyblue)\s(.+)/igm
    const newArticle = (
      <p style={{height: '100%'}}>
        {article.split(/br/igm).map((line, lineIndex) => {
          return (
            <span key={lineIndex}>
              {
                line.split(parseColorWord).map((block, blockIndex) => {
                  if(block.match(parseBlockWord)) {
                    const color = block.replace(parseBlockWord, '$1')
                    const word = block.replace(parseBlockWord, '$2')
                    return (<span key={blockIndex} style={{color: color, fontWeight: 650}}>{word}</span>)
                  } else {
                    return block
                  }
                })
              }
              <br/>
            </span>
          )
        })}
      </p>
    )
    return newArticle
  }

  getFontSize() {
    const subtitle = this.state.subtitle
    const article = this.state.article

    if (subtitle && article) {
      return {title: '3rem', subtitle: '2.4rem', article: '2rem'}
    }

    if (subtitle) {
      return {title: '5rem', subtitle: '3rem', article: '0rem'}
    }

    if (article) {
      return {title: '4rem', subtitle: '0rem', article: '1.3rem'}
    }

    return {title: '8rem', subtitle: '0rem', article: '0rem'}
  }

  renderComponent = (fontSize) => {
    return (
      <ContentWrapper
        style={{
          backgroundImage: this.state.background,
        }}
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
            {this.parseRegex(this.state.article)}
          </Article>
        }
      </ContentWrapper>
    )
  }

  render() {
    const fontSize = this.getFontSize()
    // const Wrapper = this.props.wrapper
    return (
      <ColumnContainer
        style={{
          backgroundColor: `rgba(255,255,255,0)`,
        }}
      >
        {
          this.renderComponent(fontSize)
        }
      </ColumnContainer>
    )
  }
}

const ContentWrapper = styled.div`
  width: 100%;
  background-color: ${props => props.color ? props.color : 'rgba(255,255,255,0)'};
  background-size: cover;
`

const Title = styled.p`
  font-size: ${props => props.size};
  font-weight: 700;
  color: ${props => props.color ? props.color : 'black'};
`

const Subtitle = styled.p`
  font-size: ${props => props.fontSize};
  font-weight: 500;
  color: ${props => props.color ? props.color : 'black'};
`

const Article = styled.div`
  font-size: ${props => props.fontSize};
  font-weight: 550;
  color: ${props => props.color ? props.color : 'black'};
  margin-top: -1rem;
`