import React from 'react';
import Layout from '../components/Layout';
import SchedulePage from '../components/schedule/Page';
import Head from 'next/head'

export default () => <Layout>
    <Head>
        <title>
          Yoga Schedule | Classes &amp; Training Timetable | Pure Yoga Ottawa
        </title>
        <meta property="og:title" content={`Hot Yoga Schedule | Pure Yoga Ottawa`}/>
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Discover the class for you." />
        <meta property="og:url" content="https://www.pureyogaottawa.com/schedule/" />
      </Head>
  <SchedulePage />
  </Layout>
