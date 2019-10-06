import React from 'react';
import Layout from '../components/Layout';
import HoldingHomePage from '../components/HoldingHomePage';
// import HomePage from '../components/HomePage';
import Head from 'next/head';


export default () => <Layout>
  <Head>
    <meta charset="utf-8" />
    <title>
      Pure Fit Ottawa - Centretown - Next to Pure Yoga
    </title>
    <meta content="Ottawa's newest fitness experience." name="description" />
    <meta property="og:title" content="Pure Fit Ottawa - Centretown" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Whether you come to Pure Yoga Ottawa for a workout or stress relief, ultimately, yoga is about growth and transformation. At Pure Fit we are completely dedicated to the evolution of our students. With our amazing team of highly trained teachers, you are always in the best hands." />
    <meta property="og:url" content="https://www.purefitottawa.com" />
    <meta property="og:image" content="https://pureyogaprod.s3.amazonaws.com/uploads/blog/hero_image/2/pureyogapants1.jpg" /> 
  </Head>
  <HoldingHomePage classes={[]} loaded_classes={false}/>
  </Layout>
