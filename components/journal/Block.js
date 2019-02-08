import React, { Component } from 'react';
import styled from 'styled-components';
import { fonts, colors } from '../../styles/variables';
import Link from 'next/link'

class Block extends Component {
  // routeChange = () => {
  //   let path = Link(this.props.handle);
  //   this.props.history.push(path);
  // };
  render() {
    return (
      <Link href={this.props.handle}>
      <a>
      <BlockWrapper
        onClick={this.routeChange}
        blockWidth={this.props.blockWidth}
      >
        <HeroImg bg={this.props.bg} />
        <BlockPadding>
          <BlockType>Journal</BlockType>
          <span>&nbsp;</span>
          <Title>{this.props.title}</Title>
          <SubTitle>{this.props.subtitle}</SubTitle>
          <p>
            <Badge>{this.props.category}</Badge>{' '}
            <Teaser>{this.props.teaser}</Teaser>
          </p>
          <p>
            <ReadMore title={this.props.title} >
              Read more...
            </ReadMore>
          </p>
        </BlockPadding>
      </BlockWrapper>
      </a>
      </Link>
    );
  }
}

const BlockWrapper = styled.div`
  position: relative;
  text-align: left;
  background: #fff;
  display: block;
  width: 100%;
  height: 100%;
  border-radius: 0.5em;
  overflow: hidden;
  margin-bottom: 1em;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: top;
  align-items: stretch;
  padding: 175px 0 10px 0;
  cursor: pointer;
`;

const BlockPadding = styled.div`
  margin: 0px 6% 10%;
  position: relative;
  z-index: 10;
`;

const SubTitle = styled.h5`
  ${fonts.primary}
  color: #fff;
  font-weight: 450;
  text-transform: none;
`;

const Title = styled.h4`
  ${fonts.primary}
  color: ${colors.red};
  font-size: 24px;
  font-weight: 450;
`;

const HeroImg = styled.div`
  position: absolute;
  top: -10px;
  left: 0;
  right: 0;
  height: 210px;
  width: 100%;
  background: #fff url(${props => props.bg});
  background-size: cover;
  background-position: center center;
  overflow: hidden;
`;

const Badge = styled.span`
  text-transform: uppercase;
  color: ${colors.pink};
`;

const Teaser = styled.span`
  /* font-family: ${fonts.highlight}; */
`;

const ReadMore = styled.a`
  ${fonts.highlight};
  font-style: italic;
  color: ${colors.links};
`;
const BlockType = styled.a`
  background: ${colors.pink};
  display: inline-block;
  max-width: inherit;
  margin: 1em auto;
  text-transform: uppercase;
  padding: 2px 5px;
  font-size: 12px;
  color: #fff !important;
  font-weight: 600;
`;

export default Block;
