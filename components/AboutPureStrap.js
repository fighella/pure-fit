import React, { Component } from 'react';
import styled from 'styled-components';
import { AppContent as t } from '../data/content';
import { fonts, colors } from '../styles/variables';

export class AboutPureStrap extends Component {
  render() {
    return (
      <Strap>
        <Title>Discover Pure Yoga Ottawa</Title>
        <SubTitle>Ottawa's hot yoga experience</SubTitle>
        <Flexbox>
          <Flexcol dangerouslySetInnerHTML={{ __html: t.home.about_pure }} />
          <Flexcol>
            <ImgHolder bg="https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/team_221.jpg" />
          </Flexcol>
        </Flexbox>
        <p>{t.home.tagline}</p>
        <CTA href="/new">{t.new_to_yoga_strap_cta}</CTA>
      </Strap>
      //          <Strap>
      //          <div>
      //            <div>
      //          <Title>Centretown, Downtown &amp; Westboro</Title>
      //          <SubTitle>{t.new_to_yoga_strap_subtitle}</SubTitle>
      //          </div><div>
      //          <p>
      //  We at Pure Yoga Ottawa have created a space for EveryBODY...every shape, size, age, and status, employed, or in between jobs, student, or retiree, single or divorcee, mother, father, grandparent - you get the idea.
      //  Come join the community, where we can all grow together.
      //  </p>
      //          </div>
      //          </div>
      //        </Strap>
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
  background: ${colors.red};
  color: #fff;
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
