import React from 'react';
import Layout from '../components/Layout';
import SchedulePage from '../components/schedule/Page';
import Head from 'next/head'

const Schedule = () => <Layout>
    <Head>
        <title>
          Pure Fit Class Schedule | Classes &amp; Training Timetable | Pure Fit Ottawa
        </title>
        <meta property="og:title" content={`Hot Yoga Schedule | Pure Fit Ottawa`}/>
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Discover the class for you." />
        <meta property="og:url" content="https://www.purefitottawa.com/schedule" />
        <meta property="og:image" content="https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/team_147.jpg" />
      </Head>
  <SchedulePage />
  </Layout>;

export default Schedule;
