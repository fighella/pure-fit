import React from 'react';
import styled from 'styled-components';
import Zoom from 'react-reveal/Fade';
import Vimeo from '@u-wave/react-vimeo';
import { Container, Col, Row } from 'reactstrap';
import TeamBlock from '../components/team/Block';
import { fonts } from '../styles/variables';
import Hero from '../components/Hero';
import Layout from '../components/Layout';
import { AppContent } from '../data/content';
import Head from 'next/head';
// import Measure from 'react-measure';
const t = AppContent.team;

const Index = () => (
  <Layout>
   <Head>
        <title>
          Your Yoga Teachers | Pure Yogis and Instructors | Pure Yoga Ottawa
        </title>
        <meta property="og:title" content={`Ottawa's Favorite Yoga Team | Pure Yoga Ottawa`}/>
        <meta property="og:type" content="instructor" />
        <meta property="og:description" content={t.page_title}/>
        <meta property="og:url" content="https://www.pureyogaottawa.com/team/" />
        <meta property="og:image" content="https://pureyogaprod.s3.amazonaws.com/uploads/teacher/avatar/195/small_thumb_pyo-5479.jpg" />
    
      </Head>


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
  </Layout>
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
