import React, { useState } from 'react';
import styled from 'styled-components';
import textile from 'textile-js';
import Favorite from '../components/Favorite';
import Hero from '../components/Hero';
import PureData from '../utils/src';
import { fonts } from '../styles/variables';
import Head from 'next/head';
import Instaview from '../components/Instaview';
import { Schedule } from '../components/Schedule';
import EvolveRow from '../components/evolve/row';
import ScheduleWrapper from '../components/ScheduleWrapper';
import Layout from '../components/Layout';
import {withRouter} from 'next/router'
import { getContentfulPage } from '../components/contentful/Content';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const ScheduleWrapped = ScheduleWrapper(Schedule, PureData);


const Show = (props) => { 
  console.log(props);
  return(
  <div style={{ background: '#f5f5f5' }}>
    <Teacher teacher={props.content} />
  </div>
)};

// https://stackoverflow.com/questions/12931828/convert-returned-json-object-properties-to-lower-first-camelcase
function Teacher({ teacher }) {
  const workshops_data = []
  const workshops = workshops_data ? (
    <EvolveRow
      title={`${teacher.firstName}'s Upcoming Workshops, Training & Retreats`}
      workshops={workshops_data}
    />
  ) : (
    false
  );
  const iv = <Instaview bg={ '' } name={teacher.name}><ScheduleWrapped
      name={false}
      teacher={teacher}
      days={7}
      full_link={false}
      view={'insta'}
    /></Instaview>
  
  const [insta, setInsta] = useState(false);
    const headshot = teacher && teacher.headshot ? <HeadShot headshot={teacher.headshot.fields.file.url}/> : ''
  const loaded = teacher ? (
    <Layout >
      <Head>
        <title>
          {teacher.firstName} {teacher.lastName} | {teacher.position} | Pure Fit Ottawa
        </title>
        <meta property="og:title" content={`${teacher.firstName} ${teacher.lastName} | ${teacher.position} | Pure Fit Ottawa`}/>
        <meta property="og:type" content="profile" />
        <meta property="profile:first_name" content={teacher.firstName} />
        <meta property="og:description" content={`Hi, I'm ${teacher.firstName} - ${teacher.position} at Pure Fit Ottawa. Come join me to sweat.`}/>
        <meta property="og:url" content={`https://www.purefitottawa.com/team/${teacher.teacherKey}`} />
        {/* <meta property="og:image" content={teacher.headshot.card.url} /> */}
        <style>
          @import url('https://fonts.googleapis.com/css?family=Comfortaa');
        </style>
      </Head>
        {insta ? <span onClick={() => setInsta(false)}>{iv}</span> : false}
         <Hero
          custom_imgs={[teacher.photos[0].fields.file.url]}
          title={teacher.firstName}
          subtitle=""
          compact
          close="/team"
          
        />
        {headshot}
        <HeadRow >
          <Title>
            {teacher.title}
            <Favorite id={[teacher.id].join('-')} favorite_type="tr" />
          </Title>
          <SubTitle>     {teacher.name} &bull; {teacher.position}</SubTitle>
        </HeadRow>
        <FlexRow style={{ backgroundColor: '#111'}}>
          <FlexCol>
            <TeacherDescription>
                          { documentToReactComponents(teacher.description) }
              </TeacherDescription>
          </FlexCol>
          <FlexCol>
            <ScheduleWrapped
              name={`Upcoming Classes for ${teacher.firstName}`}
              teacher={teacher.name}
              days={14}
              full_link={false}
            />
            <br />
            <span onClick={() => setInsta(true)}></span>
          </FlexCol>
        </FlexRow>
        {workshops}
        <div
          style={{
            fontWeight: 'normal',
            margin: '0 auto',
            textAlign: 'center',
            padding: '2em',
            background: '#111',
            color: '#fff',
           
          }}
        >
          <a href="/team" style={{ color: '#ccc', textAlign: 'center' }}>
            MEET THE TEAM{' '}
          </a>
          &raquo;{' '}
          {teacher.name}
        </div>
    </Layout>
  ) : (
    <span>Loadin</span>
  );
  return <div>{loaded}</div>;
}

Show.getInitialProps = function({query}) {
    return getContentfulPage(query.id);
}

const TeacherDescription = styled.div`text-align: center;  b { font-weight: 700; } }`;

const HeadShot = styled.div`
  position: relative;
  z-index: 2;
  border: 4px solid #fff;
  padding: 4px;
  background: #111;
  box-shadow: 0 0 5px #ccc;
  margin: 0 auto;
  margin-top: -70px;
  height: 140px;
  width: 140px;
  overflow: hidden;
  background-image: url(${props => props.headshot});
  background-size: cover;
  border-radius: 50%;
`;

const Title = styled.h1`
  ${fonts.primary};
  font-size: 2em;
  font-weight: 450;
  color: #fff;
`;

const SubTitle = styled.h3`
  ${fonts.highlight};
  font-size: 2em;
`;

const HeadRow = styled.div`
  padding: 2em;
  text-align: center;
  margin: 0 auto;
  background: #111;
  color: #fff;
`;

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  background: #111;
  color: #fff;
`;

const FlexCol = styled.div`
  width: 100%;
  padding: 3em;
  text-align: left;
  height: 100%;
  p {
    font-size: 1.1em; line-height: 1.4em;
    color: #fff;
    white-space: pre-wrap;
    font-family: futura-pt;
    font-style: normal;
    font-size: 18px;
    letter-spacing: .05em;
    line-height: 2em;
    font-weight: 300;
    }
    @media (max-width: 500px) {
      width: 100%;
    }
`

// const BlockQuote = styled.span`
//   font-size: 2em;
//   font-weight: 650;
//   line-height: 1.8em;
//   display: block;
//   margin: 1em 12px 2em;
// `

export default withRouter(Show);
