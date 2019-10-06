import React, { Component } from 'react';
import styled from 'styled-components';
import { AppContent as t } from '../data/content';
import { fonts, colors } from '../styles/variables';

export class NewToYogaStrap extends Component {
  render() {
    return (
      <Strap>
        <Title>{t.new_to_yoga_strap}</Title>
        <SubTitle>{t.new_to_yoga_strap_subtitle}</SubTitle>
        <CTA href="/">{t.new_to_yoga_strap_cta}</CTA>
      </Strap>
    );
  }
}

const Strap = styled.div`
  margin-top: 3em;
  text-align: center;
  color: #fff;
  background: url('https://pureyogaprod.s3.amazonaws.com/uploads/blog/hero_image/2/pureyogapants1.jpg')
    center center;
  background-size: cover;
  min-height: 140px;
  padding: 4em 0;
`;

const Title = styled.h2`
  ${fonts.primary};
  font-size: 4rem;
  font-weight: 450;
`;

const SubTitle = styled.h3`
  ${fonts.highlight};
`;

const CTA = styled.a`
  background: ${colors.red};
  color: #fff;
  ${fonts.primary};
  padding: 10px 15px;
  margin-top: 1em;
  display: inline-block;
`;
