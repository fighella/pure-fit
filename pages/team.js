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
import { getContentfulPage } from '../components/contentful/Content';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

// import Measure from 'react-measure';
const t = AppContent.team;

const TeamPage = (props) => { console.log(props);
  return(
  <Layout>
   <Head>
      <title>
        Your Pure Fit Team | Pure Fit Instructors | Pure Fit Ottawa
      </title>
      <meta property="og:title" content={`Your Pure Fit Team | Pure Fit Instructors | Pure Fit Ottawa`}/>
      <meta property="og:type" content="profile" />
      <meta property="og:description" content={t.page_title}/>
      <meta property="og:url" content="https://www.purefitottawa.com/team" />
      <meta property="og:image" content="https://s3.ca-central-1.amazonaws.com/purefitottawa.com/images/fit_102.jpg" />
    </Head>


  <div style={{ background: '#111' }}>
    <Hero
      custom_imgs={['https://s3.ca-central-1.amazonaws.com/purefitottawa.com/images/fit_103.jpg']}
      title={t.title}
      subtitle={t.subtitle}
      compact
    />
    <Header>{t.contents.title}</Header>
    <SubHeader>{t.contents.subtitle}</SubHeader>
    <Container>
      <Row>
        <Col xs={12} md={6}>
          <Zoom bottom>
            <ColP>
            { documentToReactComponents(props.teaser) }
            {/* {t.contents.paragraphs[0]} */}
            </ColP>
          </Zoom>
        </Col>
        {/* <Col xs={12} md={6}>
          <Zoom bottom>
            <ColP>{t.contents.paragraphs[1]}</ColP>
          </Zoom>
        </Col> */}
      </Row>
    </Container>
    <TeamBlock teachers={props.content.teachers} />
  
    <br />
  </div>
  </Layout>
)};

TeamPage.getInitialProps = function() {
  return getContentfulPage('7JJfWnbmuletB0XiaJbrwC');
}

export default TeamPage;

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
  color: #efefef;
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
  color: #efefef;

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
  color: #efefef;

`;

const CenterBlock = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

