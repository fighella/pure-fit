import React from 'react';
import Layout from '../components/Layout';
import HomePage from '../components/HomePage';
import Head from 'next/head';


export default () => <Layout>
  <Head>
    <meta charset="utf-8" />
    <title>
      Pure Yoga Ottawa - Westboro, Downtown and Centretown
    </title>
    <meta content="Ottawa's favourite hot yoga experience." name="description" />
    <meta property="og:title" content="Pure Yoga Ottawa - Westboro, Downtown and Centretown" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Whether you come to Pure Yoga Ottawa for a workout or stress relief, ultimately, yoga is about growth and transformation. At Pure Yoga we are completely dedicated to the evolution of our students. With our amazing team of highly trained teachers, you are always in the best hands." />
    <meta property="og:url" content="https://www.pureyogaottawa.com" />
    <meta property="og:image" content="https://pureyogaprod.s3.amazonaws.com/uploads/blog/hero_image/2/pureyogapants1.jpg" /> 
  </Head>
  <HomePage classes={[]} loaded_classes={false}/>
  </Layout>
