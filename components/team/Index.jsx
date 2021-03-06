import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Fade';
import Vimeo from '@u-wave/react-vimeo';
import { Container, Col, Row } from 'reactstrap';
import TeamBlock from './Block';
import { fonts } from '../css_variables';
import Hero from '../Hero';
import { AppContent } from '../data/content';
// import Measure from 'react-measure';

const t = AppContent.team;

const Index = () => (
  <div style={{ background: '#fff' }}>
    <Hero
      imgs={['team_39']}
      title={t.title}
      subtitle={t.subtitle}
      compact
      faded
    />
    <Header>{t.contents.title}</Header>
    <SubHeader>{t.contents.subtitle}</SubHeader>
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Zoom bottom>
            <ColP>{t.contents.paragraphs[0]}</ColP>
          </Zoom>
        </Col>
        <Col xs={12} md={6}>
          <Zoom bottom>
            <ColP>{t.contents.paragraphs[1]}</ColP>
          </Zoom>
        </Col>
      </Row>
    </Container>
    <Header>{t.team_heading}</Header>
    <TeamBlock />
    <Header>{t.video_heading}</Header>
    <CenterBlock>
      <VideoBlock />
    </CenterBlock>
    <p style={{ display: 'block', textAlign: 'center' }}>Watch the video</p>
    <br />
  </div>
);

const VideoBlock = () => (
  <Vimeo
    video="312891725"
    showByline={false}
    showTitle={false}
    showPortrait={false}
    width={1000}
    playBar={false}
    muted={false}
    logo={false}
    paused
  />
);

const Header = styled.h1`
  text-align: center;
  font-size: 4em;
  max-width: 60%;
  margin: 0.5em auto;
  ${fonts.highlight}
`;

const SubHeader = styled.h3`
  text-align: center;
  max-width: 60%;
  margin: 0.2em auto;
  ${fonts.primary}
  text-transform: none;

  white-space: pre-wrap;
  font-family: futura-pt;
  font-style: normal;
  font-size: 22px;
  letter-spacing: 0.05em;
  line-height: 2em;
  font-weight: 300;
`;

const ColP = styled.p`
  font-size: 1.1em;
  line-height: 1.4em;
  white-space: pre-wrap;
  font-family: futura-pt;
  font-style: normal;
  font-size: 18px;
  letter-spacing: 0.05em;
  line-height: 2em;
  font-weight: 300;
`;

const CenterBlock = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export default Index;
