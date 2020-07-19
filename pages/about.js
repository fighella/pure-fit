import React, { Component } from 'react';
import styled from 'styled-components';
import { AppContent } from '../data/content';
import { fonts, colors } from '../styles/variables';
import { AppLocations } from '../data/locations';
import Head from 'next/head'
import Layout from '../components/Layout';

const t = AppContent.about;

class AboutPage extends Component {
  render() {
    return (
      <Layout>
       <Head>
        <title>
          About Pure Fit Ottawa | Our Story | Pure Fit Ottawa
        </title>
        <meta property="og:title" content={`Our Story | Ottawa Fitness | Pure Fit Ottawa`}/>
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Discover the story behind Pure Fit Ottawa" />
        <meta property="og:url" content="https://www.purefitottawa.com/about/" />
      </Head>
      <div style={{ background: '#fff', textAlign: 'center', padding: '10%' }}>
        <h3>Coming  soon...</h3>
       </div>
      </Layout>
    );
  }
}

const WhatIs = () => {
  const c = t.what_is;
  return (
    <Centered>
      <MainHeading>{c.title}</MainHeading>
      <SubHeading>{c.sub_title}</SubHeading>
      <div>
        <FlexP>{c.contents[0]}</FlexP>
      </div>
      <Relative>
        <Flare fontSize={'11em'}>Pure Story</Flare>
        <ImgGrid height={320}>
          <Block width={20} height={100}>
            <MainHeading
              style={{
                position: 'absolute',
                textAlign: 'right',
                bottom: 0,
                right: '-100%',
                transformOrigin: 'bottom left',
                transform: 'rotate(-90deg)'
              }}
            >
              Grow
            </MainHeading>
          </Block>
          <Block width={60} height={100} bg={c.imgs[3]} />
        </ImgGrid>
        <ImgGrid>
          <Block width={100} height={52} bg={c.imgs[0]} />
          <Block width={40} height={40}>
            <Block width={100} height={100} bg={c.imgs[1]} />
            <MainHeading style={{ textAlign: 'right' }}>TheDream</MainHeading>
          </Block>
          <Block width={30} height={48} bg={c.imgs[2]} />
          <Block width={10} height={48}>
            <MainHeading
              style={{
                position: 'absolute',
                top: '6%',
                left: '-30%',
                textAlign: 'right',
                transform: 'rotate(90deg)'
              }}
            >
              Practice
            </MainHeading>
          </Block>
        </ImgGrid>
      </Relative>
      <div>
        <FlexP>{c.contents[1]}</FlexP>
      </div>
    </Centered>
  );
};

const Where = () => {
  const c = t.where;
  const locs = AppLocations.all.map((i, index) => {
    return (
      <FlexCol>
        <Loc>
          <p>
            <h4>{i.name}</h4>
            {i.address}
            <br />
            {i.phone}
          </p>
        </Loc>
      </FlexCol>
    );
  });
  return (
    <div>
      <Centered>
        <MainHeading>{c.title}</MainHeading>
        <SubHeading>{c.sub_title}</SubHeading>
        <FlexRow>{locs}</FlexRow>
      </Centered>
    </div>
  );
};

const Benefits = () => {
  const c = t.benefits;
  const contents = c.contents.map((p, index) => {
    return <FlexP>{p}</FlexP>;
  });
  return (
    <Centered>
      <MainHeading>{c.title}</MainHeading>
      <SubHeading>{c.sub_title}</SubHeading>
      <div>{contents}</div>
    </Centered>
  );
};

const Sweat = () => {
  const c = t.sweat;
  const contents = c.contents.map((p, index) => {
    return <FlexP>{p}</FlexP>;
  });
  return (
    <Centered>
      <Relative>
        <Flare>Yoga</Flare>
        <ImgGrid height={320}>
          <Block width={60} height={100} bg={c.imgs[3]} />
          <Block width={20} height={100} />
        </ImgGrid>
        <ImgGrid>
          <Block width={100} height={52} bg={c.imgs[0]} />
          <Block width={10} height={48} />
          <Block width={30} height={48} bg={c.imgs[2]} />
          <Block width={40} height={40}>
            <Block width={100} height={100} bg={c.imgs[1]} />
          </Block>
        </ImgGrid>
      </Relative>
      <div>{contents}</div>
    </Centered>
  );
};

// Styles
const FlexRow = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 3em;
  width: ${props => (props.width ? props.width : '100%')};
`;
const FlexCol = styled.div`
  width: ${props => (props.width ? props.width : '23%')};
  text-align: center;
`;

const Centered = styled.div`
  text-align: center;
  padding: 2em 0;
`;

const MainHeading = styled.h1`
  ${fonts.highlight};
  font-size: 3em;
  z-index: 100;
`;

const Flare = styled.h1`
  display: block;
  position: absolute;
  z-index: 300;
  ${fonts.primary};
  font-weight: 300;
  bottom: 50%;
  right: 8%;
  text-align: right;
  letter-spacing: 22px;
  color: #fff;
  font-size: 15em;
  font-size: ${props => (props.fontSize ? props.fontSize : '15em')};
`;

const SubHeading = styled.h2`
  ${fonts.primary};
  font-size: 1.2em;
  letter-spacing: 1px;
  font-weight: 300;
  text-transform: uppercase;
`;

const FlexP = styled.p`
  max-width: 75%;
  line-height: 2.2em;
  margin: 2em auto 2.3em;
  a {
    text-decoration: underline;
    color: ${colors.blue};
    padding: 0 6px;
    transition: all 0.5s;
    &:hover {
      background: ${colors.blue};
      color: #333;
      text-decoration: none;
    }
  }
`;

const Loc = styled.div`
  padding: 1em 0 0.5em;
  font-family: ${fonts.secondary};
  width: 100%;
  color: ${colors.blue};
  h4 {
    ${fonts.highlight};
    font-weight: 550;
  }
`;

const ImgGrid = styled.div`
  width: 80%;
  margin: 0 auto;
  height: ${props => props.height || '600'}px;
  justify-content: center;
  align-content: space-around;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.5%;
`;

const Block = styled.div`
  border: 3px solid #fff;
  position: relative;
  clear: both;
  width: ${props => props.width || 0}%;
  height: ${props => props.height || 0}%;
  background-position: center center;
  background-image: url(${props => props.bg});
  background-size: cover;
`;

const Relative = styled.div`
  position: relative;
`;

export default AboutPage;