import React, { Component } from 'react';
import styled from 'styled-components';
import { fonts, colors } from '../../styles/variables';
import Link from 'next/link'

class Block extends Component {
  // routeChange = () => {
  //   let path = Link(this.props.id, this.props.handle);
  //   this.props.history.push(path);
  // };
  render() {
    return (
      <Link as={`/evolve/${this.props.id}/${this.props.handle}`} href={`/evolve?id=${this.props.id}&title=${this.props.handle}`}>
      <a title={this.props.title}>
      <BlockWrapper
        bg={this.props.bg}
        blockWidth={this.props.blockWidth}
      >
        <ImgDarken />
        <BlockPadding>
          <span>&nbsp;</span>
          <BigTitle>{this.props.title}</BigTitle>
          <SubTitle>{this.props.subtitle}</SubTitle>
          <BookNow>More Info</BookNow>
        </BlockPadding>
      </BlockWrapper></a>
      </Link>
    );
  }
}

const BlockWrapper = styled.div`
  text-align: center;
  display: block;
  width: 100%;
  border: 1px solid #fff;
  border-radius: 0.5em;
  margin-bottom: 1em;
  display: flex;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  background-image: url(${props => props.bg || 'https://s3.amazonaws.com/pureyogaottawa.com/website/default/evolve.jpg'});
  background-size: cover;
  background-position: center center;
  position: relative;
  overflow: hidden;
  cursor: pointer;
`;

const BigTitle = styled.h4`
  ${fonts.primary}
  color: #fff;
  font-size: 33px;
  font-weight: 500;
  text-shadow: 0 0 25px #333;
`;

const BlockPadding = styled.div`
  margin: 15% 10% 10%;
  position: relative;
  z-index: 10;
`;

const ImgDarken = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const BookNow = styled.a`
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

const SubTitle = styled.h5`
  ${fonts.primary}
  color: #fff;
  font-weight: 450;
  text-transform: none;
`;

export default Block;

