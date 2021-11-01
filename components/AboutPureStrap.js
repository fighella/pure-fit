import React, { Component } from 'react';
import styled from 'styled-components';
import { AppContent as t } from '../data/content';
import { fonts, colors } from '../styles/variables';

export class AboutPureStrap extends Component {
  render() {
    return (
      <Strap>
        <Title>Discover Pure Fit Ottawa</Title>
        <SubTitle>Ottawa's Newest Fitness Experience</SubTitle>
        <Flexbox>
          <Flexcol dangerouslySetInnerHTML={{ __html: t.home.about_pure }} />
          <Flexcol>
            <ImgHolder bg="https://s3.ca-central-1.amazonaws.com/purefitottawa.com/images/fit_100.jpg " />
          </Flexcol>
        </Flexbox>
        <p>{t.home.tagline}</p>
        <CTA href="/">{t.new_to_yoga_strap_cta}</CTA>
      </Strap>

    );
  }
}
const Flexbox = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

const Flexcol = styled.div`
  width: 50%;
  padding: 3em;
  @media (max-width: 500px) {
    width: 100%;
    padding: 1em;
  }
  align-content: center;
  text-align: center;
  height: 100%;
`;

const Strap = styled.div`
  margin-top: 2em;
  text-align: center;
  color: #333;

  background-size: cover;
  min-height: 140px;
  padding: 4em 0;
`;

const Title = styled.h3`
  ${fonts.primary};
  font-size: 3rem;
  font-weight: 450;
`;

const SubTitle = styled.h3`
  ${fonts.highlight};
`;

const CTA = styled.a`
  background: #fff;
  color: #000;
  ${fonts.primary};
  padding: 10px 15px;
  margin-top: 1em;
  display: inline-block;
`;

const ImgHolder = styled.div`
  border-radius: 50%;
  overflow: hidden;
  width: 300px;
  height: 300px;
  background-image: url(${props => props.bg});
  background-size: cover;
  background-position: center center;
`;
