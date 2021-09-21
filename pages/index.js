import React from 'react';
import Layout from '../components/Layout';
// import HoldingHomePage from '../components/HoldingHomePage';
import HomePage from '../components/HomePage';
import Head from 'next/head';


const Index = () => <Layout>
  <Head>
    <meta charSet="utf-8" />
    <title>
      Pure Fit Ottawa | Centretown | 359 Bank Street
    </title>
    <meta content="Ottawa fitness experience from the Pure Yoga Team." name="description" />
    <meta property="og:title" content="Pure Fit Ottawa - Group Fitness Training" />
    <meta property="og:type" content="website" />
    <meta property="og:description" content="Train to be stronger. Physically and mentally." />
    <meta property="og:url" content="https://www.purefitottawa.com" />
    <meta property="og:image" content="https://s3.ca-central-1.amazonaws.com/purefitottawa.com/images/fit_395.jpg" /> 
  </Head>
  <HomePage classes={[]} loaded_classes={false}/>
  </Layout>


export default Index;
