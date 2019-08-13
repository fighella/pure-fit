import React, { useState } from 'react';
import styled from 'styled-components';
import PureData from '../utils/src';
import { AppHelpers } from '../utils/tools'
import fetch from 'isomorphic-unfetch'
import Head from 'next/head';
import { Schedule } from '../components/Schedule';33
import ScheduleWrapper from '../components/ScheduleWrapper';
import Layout from '../components/Layout';
import {withRouter} from 'next/router'

const ScheduleWrapped = ScheduleWrapper(Schedule, PureData);


const Show = (props) => (
  <div style={{ background: '#f5f5f5' }}>
    <Teacher teacher={props.teacher} />
  </div>
);

// https://stackoverflow.com/questions/12931828/convert-returned-json-object-properties-to-lower-first-camelcase
function Teacher({ teacher }) {
  const loaded = teacher ? (
    <Layout hideLayout>
      <Head>
        <title>
          {teacher.first_name} {teacher.last_name} | {teacher.position} | Pure Yoga Ottawa
        </title>
        <style>
          @import url('https://fonts.googleapis.com/css?family=Comfortaa');
        </style>
      </Head>
        <FlexRow>
          <FlexCol>
            <ScheduleWrapped
              name={`Upcoming Classes for ${teacher.first_name} at Pure Yoga Ottawa`}
              teacher={teacher.title}
              days={14}
              full_link={false}
            />
          </FlexCol>
        </FlexRow>
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

const FlexCol = styled.div`
  width: 100%;
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

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export default withRouter(Show);
