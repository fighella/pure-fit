import React, { Component } from 'react';
import Hero from './Hero';
import { AppContent } from './data/content';
import styled from 'styled-components';
import { fonts, colors } from './css_variables';
import textile from 'textile-js';
import { AppLocations } from './data/locations';
const t = AppContent.new;

export class NewPage extends Component {
  render() {
    return (
      <div style={{ background: '#fff' }}>
        <TopBanner />
        <WhatIs />
        <Offer />
        <Benefits />
        <Sweat />
        <Where />
        <IntroOffer />
        <br />
      </div>
    );
  }
}

const TopBanner = () => {
  return (
    <Hero
      custom_imgs={[
        'https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/pure_101.jpg'
      ]}
      title={t.title}
      compact
      faded={false}
    />
  );
};

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
        <Flare>Pure</Flare>
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
              Flexibility
            </MainHeading>
          </Block>
          <Block width={60} height={100} bg={c.imgs[3]} />
        </ImgGrid>
        <ImgGrid>
          <Block width={100} height={52} bg={c.imgs[0]} />
          <Block width={40} height={40}>
            <Block width={100} height={100} bg={c.imgs[1]} />
            <MainHeading style={{ textAlign: 'right' }}>Strength</MainHeading>
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
              Tone
            </MainHeading>
          </Block>
        </ImgGrid>
      </Relative>
      <div>
        <FlexP>{c.contents[1]}</FlexP>
      </div>
      {try_intro}
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

const Offer = () => {
  const c = t.offer;
  return (
    <div>
      <FlexImg bg={c.imgs[0]} />
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
      {try_intro}
    </Centered>
  );
};

const Sweat = () => {
  const c = t.sweat;
  return (
    <Centered>
      <MainHeading>{c.title}</MainHeading>
      <SubHeading>{c.sub_title}</SubHeading>
      <br />
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
    </Centered>
  );
};

const IntroOffer = () => {
  const c = t.intro;
  const contents = c.contents.map((p, index) => {
    return <FlexP dangerouslySetInnerHTML={{ __html: textile(p) }} />;
  });
  return (
    <FlexRow width={'80%'} id="intro">
      <FlexCol width={'45%'}>
        <SubHeading>{c.title}</SubHeading>
        {contents}
      </FlexCol>
      <FlexCol width={'45%'}>
        <PureForm>
          <h4>Sign up for an Intro Month</h4>
          <br />
          <p>{c.deal}</p>
          <Price>
            <span>$</span>
            {c.price}
          </Price>

          <br />
          <p>
            <LearnMoreLink href="/terms">
              <span>&nbsp;Terms and Conditions&nbsp;</span>
            </LearnMoreLink>
          </p>
          <BookNow
            href={c.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'block' }}
          >
            Book Now
          </BookNow>
        </PureForm>
      </FlexCol>
    </FlexRow>
  );
};

// Styles
const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 3em;
  width: ${props => (props.width ? props.width : '100%')};
`;
const FlexCol = styled.div`
  width: ${props => (props.width ? props.width : '23%')};
  @media (max-width: 500px) {
    width: 100%;
  }
  text-align: center;
`;

const FlexImg = styled.div`
  display: block;
  background-position: center center;
  box-shadow: ${props => (props.hasShadow ? '0 4px 12px #999' : false)};
  background-image: url(${props => props.bg});
  width: 100%;
  height: 280px;
  background-size: cover;
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
  top: 26%;
  right: 8%;
  text-align: right;
  letter-spacing: 22px;
  font-size: 15em;
  color: #fff;
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

const PureForm = styled.form`
  background: #fff;
  border-radius: 8px;
  width: 100%;
  min-height: 200px;
  box-shadow: 0 0 22px #efefef;
  margin-bottom: 2em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    ${fonts.primary};
    color: #333;
    font-weight: 300;
  }
`;

const BookNow = styled.a`
  width: 100%;
  border-radius: 0px;
  margin: 0 auto;
  border: 1px solid ${colors.red};
  padding: 0.75em;
  text-align: center;
  ${fonts.primary};
  font-weight: 500;
  background: #fff;
  color: ${colors.red};
  transition: all 0.5s;
  &:hover {
    color: #fff;
    background: ${colors.pink};
    text-decoration: none;
  }
`;

const SmallBtn = styled.div`
  width: 300px;
  margin: 2em auto;
`;

const try_intro = (
  <SmallBtn>
    <BookNow
      href={'#intro'}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'block' }}
    >
      Try our Intro Month
    </BookNow>
  </SmallBtn>
);

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

const Price = styled.span`
  ${fonts.primary};
  font-weight: 450;
  letter-spacing: 2px;
  font-size: 4.2em;
  display: flex;
  justify-items: top;
  margin: 0.6em auto;
  position: relative;
  span {
    ${fonts.highlight};
    line-height: 1em;
    font-size: 0.4em;
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

const LearnMoreLink = styled.span`
  ${fonts.primary};
  text-transform: none;
  color: #333;
  letter-spacing: 1px;
  font-weight: 300;
  padding: 1em;
  cursor: pointer;
  span {
    border-bottom: 1px solid ${colors.pink};
    transition: all 0.5s;
    &:hover {
      background: ${colors.pink};
    }
  }
`;
