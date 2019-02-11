import React from 'react';
import styled from 'styled-components';
import textile from 'textile-js';
import Favorite from '../components/Favorite';
import Hero from '../components/Hero';
import PureData from '../utils/src';
import { AppHelpers } from '../utils/tools'
import fetch from 'isomorphic-unfetch'
import { fonts } from '../styles/variables';
import Head from 'next/head';
import { Schedule } from '../components/Schedule';
import EvolveRow from '../components/evolve/row';
import ScheduleWrapper from '../components/ScheduleWrapper';
import { Instafeed } from '../components/Instafeed';
import Layout from '../components/Layout';
import { SingleColWrapper } from '../components/SingleColWrapper';
import {withRouter} from 'next/router'

const InstafeedWrapped = SingleColWrapper(Instafeed);
const ScheduleWrapped = ScheduleWrapper(Schedule, PureData);

const Show = (props) => (
  <div style={{ background: '#f5f5f5' }}>
    <Teacher teacher={props.teacher} />
  </div>
);

// https://stackoverflow.com/questions/12931828/convert-returned-json-object-properties-to-lower-first-camelcase
function Teacher({ teacher }) {
  const workshops_data = []
  const workshops = workshops_data ? (
    <EvolveRow
      title={`${teacher.first_name}'s Upcoming Workshops, Training & Retreats`}
      workshops={workshops_data}
    />
  ) : (
    false
  );
  const loaded = teacher ? (
    <Layout>
      <Head>
        <title>
         HEAD TAG {teacher.first_name} {teacher.last_name} | {teacher.position} | Pure Yoga Ottawa
        </title>
        <meta property="og:title" content={`${teacher.name} ${teacher.position} | Pure Yoga Ottawa`}/>
        <meta property="og:type" content="instructor" />
        <meta property="og:type" content="pureyogaottawa:teacher" />
        <meta property="og:description" content={`{teacher.first_name} is a  at Pure Yoga Ottawa. Come join Amber for some Hot Yoga`}/>
        <meta property="og:url" content="http://cdn.pureyogaottawa.com/pure-team/amber-stratton" />
        <meta property="og:image" content="https://pureyogaprod.s3.amazonaws.com/uploads/teacher/avatar/195/small_thumb_pyo-5479.jpg" />
    
      </Head>
        <Hero
          custom_imgs={[teacher.pose_1.background_image.url]}
          title=""
          subtitle=""
          compact
          close="/team"
        />
        <HeadShot headshot={teacher.headshot.card.url} />
        <HeadRow>
          <Title>
            {teacher.title}
            <Favorite id={[teacher.id].join('-')} favorite_type="tr" />
          </Title>
          <SubTitle>{teacher.position}</SubTitle>
        </HeadRow>
        <FlexRow>
          <FlexCol>
            <TeacherDescription
              dangerouslySetInnerHTML={{
                __html: textile(teacher.description)
              }}
            />
          </FlexCol>
          <FlexCol>
            <ScheduleWrapped
              name={`Upcoming Classes for ${teacher.first_name}`}
              teacher={teacher.title}
              days={14}
              full_link={false}
            />
            <br />
          </FlexCol>
        </FlexRow>
        {workshops}
        {teacher.instagram_token ? (
          <InstafeedWrapped
            title={`${teacher.first_name} on Instagram`}
            fluid
            fullWidth
            const
            accessToken={teacher.instagram_token}
          />
        ) : (
          false
        )}
        <div
          style={{
            fontWeight: 'normal',
            margin: '0 auto',
            textAlign: 'center',
            padding: '2em',
            background: '#fff'
          }}
        >
          <a href="/team" style={{ color: '#333', textAlign: 'center' }}>
            MEET THE TEAM{' '}
          </a>{' '}
          &raquo;
          {teacher.title}
        </div>
    </Layout>
  ) : (
    <span>Loadin</span>
  );
  return <div>{loaded}</div>;
}

Show.getInitialProps = async function(context) {
  const { handle } = context.query;
  try {
    const response = await fetch(AppHelpers.mbParams({ teacher: handle }, 'teachers'));
    let json = await response.json();
    console.log('Teachin',json.teachers)
    return {
      teacher: json.teachers,
      title: 'Init PRPPS | Teachers | Meet your Team | Pure Yoga Ottawa',
      loaded_teachers: true
    }
  } catch {
    console.log(handle)
    console.log('noFetchError();');
  }
}

// TeacherProfile.propTypes = {
//   teacherData: PropTypes.arrayOf.isRequired,
//   workshopsData: PropTypes.arrayOf.isRequired
// };

const TeacherDescription = styled.div``;

const HeadShot = styled.div`
  position: relative;
  z-index: 2;
  border: 4px solid #fff;
  padding: 4px;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  margin: 0 auto;
  margin-top: -70px;
  height: 140px;
  width: 140px;
  overflow: hidden;
  background-image: url(${props => props.headshot});
  background-size: contain;
  border-radius: 50%;
`;

const Title = styled.h1`
  ${fonts.primary};
  font-size: 2em;
  font-weight: 450;
`;

const SubTitle = styled.h3`
  ${fonts.highlight};
  font-size: 1.4em;
`;

const HeadRow = styled.div`
  padding: 2em;
  text-align: center;
  margin: 0 auto;
`;

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FlexCol = styled.div`
  width: 50%;
  padding: 3em;
  text-align: left;
  height: 100%;
  p {
    font-size: 1.1em; line-height: 1.4em;
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
