import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Layout from '../components/Layout';
import EvolvePresenter from '../presenters/EvolvePresenter';
import {withRouter} from 'next/router';
import fetch from 'isomorphic-unfetch';
import { AppHelpers } from '../utils/tools';
import Head from 'next/head';
import textile from 'textile-js';
import Hero from '../components/Hero';
import { EvolveConfig } from '../components/evolve/config';
import WorkshopData from '../components/evolve/WorkshopData';
import PureData from '../utils/src';
import { AppContent } from '../data/content';
import EvolveTeachers from '../components/evolve/teachers';
import EvolveRow from '../components/evolve/row';
import Favorite from '../components/Favorite';
import { fonts, colors } from '../styles/variables';
import EmbedForm from '../components/EmbedForm';

const noFetchError = () => console.log('Did not fetch.');
const [style] = [EvolveConfig.style];
const t = AppContent.evolve.show;


function Content({ workshops }) {
  const workshop = workshops ? workshops[0] : {};
  const pWorkshop = new EvolvePresenter(workshop)
  const WorkshopContents = WorkshopData(EvolveRow, PureData);
   const desc = workshop ? workshop.description : false;
  const hero = workshop.hero_image ? <Hero
  custom_imgs={[workshop.hero_image.url]}
  imgs={[]}
  title={pWorkshop.title}
  subtitle=""
  compact
/> : false
  const loaded =
    workshops.length >= 1 ? (
      <React.Fragment>
        {hero}
        
        <HeroSubNav
          dates={pWorkshop.datesText}
          location={pWorkshop.location}
          teachers={pWorkshop.teacherText}
        />
        <br />
        <Container fluid>
          <Row>
            <Col xs={12} md={7}>
              <h3>
                {workshop.title} {workshop.teaser_text}
              </h3>
              <div dangerouslySetInnerHTML={{ __html: textile(desc) }} />
            </Col>
            <Col xs={12} md={5}>
              <EvolveTeachers id={workshop.id} header={false} />
              <p style={{ textAlign: 'center' }}>
                <Favorite
                  id={[workshop.id].join('-')}
                  favorite_type="ws"
                  size="large"
                  showText
                />
              </p>
              <BookNow
                href={workshop.mindbody_link}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'block' }}
              >
                Book Now
              </BookNow>
              <EmbedForm title={`${workshop.title}`} from={`${workshop.title}`} />
            </Col>
          </Row>
        </Container>
        <div
          style={{
            background: '#fff',
            marginTop: '1em',
            paddingTop: '1em',
            paddingBottom: '1em'
          }}
        >
          <h3
            style={{
              textTransform: 'uppercase',
              textAlign: 'center',
              margin: '0.5em auto'
            }}
          >
            {t.you_might_also_like}
          </h3>
          <WorkshopContents not={workshop.id} />
          <br />
        </div>
      </React.Fragment>
    ) : (
      false
    );
  return <div>{loaded}</div>;
}

const HeroSubNav = ({ dates, location, teachers }) => { 
  function hasData(d){
    return d.data 
  }
  const subs = [
    { data: dates, align: 'left', separator: '️+'},
    { data: teachers, align: 'center', separator: 'w/' },
    { data: location, align: 'right', separator: '@'},
  ].filter(hasData)
  return(
  <NavRow>
    {subs.map((d) => { return(<NavItem align={d.align}><span>{d.separator}</span> {d.data}</NavItem>)})}
  </NavRow>
)};

HeroSubNav.propTypes = {
  location: PropTypes.string.isRequired,
  dates: PropTypes.string.isRequired,
  teachers: PropTypes.arrayOf.isRequired
};

Content.propTypes = {
  workshops: PropTypes.arrayOf.isRequired
};

const EvolveShow = ({ workshops, id, router }) => {
    // const WorkshopContents = WorkshopData(Content, PureData);
    const loaded = (
      <Layout>
        <Head>
          <title>
            {workshops[0].title} | Pure Yoga Ottawa Workshops, Events and Training
          </title>
          <meta property="og:image" content={workshops[0].hero_image ? workshops[0].hero_image.url : ''} />
          <meta property="og:type" content="article" />
        </Head>
        <div style={style.body}>
          <Content workshops={workshops} id={id} />
      </div>
    </Layout>
  );
  const content = loaded ;
  return content;
}

EvolveShow.getInitialProps = async function(context) {
  const { id, handle } = context.query
  try {
    const response = await fetch(AppHelpers.mbParams({ id: id, handle: handle }, 'workshop'));
    const json = await response.json();
    return {
      workshops:json.workshops,
      id: id,
      loaded: true
    }
  } catch {
    noFetchError();
  }
}

const NavRow = styled.div`
  z-index: 22;
  position: relative;
  display: flex;
  justify-items: stretch;
  width: 100%;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
  border-top: 1px solid #ccc;
  @media (max-width: 500px) {
    display: block;
    text-align: center;
  }
`;
const NavItem = styled.div`
  color: #999;
  z-index: 22;
  text-align: ${props => props.align};
  padding: 0.5em 0.8em;
  position: relative;
  width: 33%;
  @media (max-width: 500px) {
    text-align: center;
    width: 100%;
    color: #666;
    padding: 0.2em;
  }
 
`;

const BookNow = styled.a`
  width: 93%;
  border-radius: 8px;
  margin: 0 auto;
  border: 1px solid ${colors.red};
  padding: 0.75em;
  text-align: center;
  font-weight: bold;
  ${fonts.primary};
  background: ${colors.red};
  color: #fff;
  transition: all 0.5s;
  &:hover {
    color: ${colors.pink};
    text-decoration: none;
    background: #fff;
  }
`;

export default withRouter(EvolveShow);
