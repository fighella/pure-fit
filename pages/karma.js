import React, { Component } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { fonts, colors } from '../styles/variables';
import Head from 'next/head';
import Hero from '../components/Hero';
import marked from 'marked';
import Link from 'next/link'

const contentful = require('contentful');
const SPACE_ID = 'hmbn1d6s90j4'
const ACCESS_TOKEN = 'ad22c819dfadabb93437878e689131d7e64b841bc6d5ee52f333c02fcfee5d8f'
const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})

const KarmaPage = (props) => {
  console.log(props)
  const { title, bodu, subTitle, attachments } = props.content;
    return (
      <Layout>
          <Head>
        <title>
          Karma Yogi | Work for Yoga | Pure Yoga Ottawa
        </title>
        <meta property="og:title" content={`Karma Yogi Program | Be the community | Pure Yoga Ottawa`}/>
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Karma Volunteers" />
        <meta property="og:url" content="https://www.pureyogaottawa.com/karma/" />
      </Head>
      <div style={{ background: '#fff' }}>
        <Hero imgs={['team_187']} title={title}  compact />
        <FlexRow>
          <FlexCol>
            <div>
              <MainHeading>{subTitle}</MainHeading>
              <br/>
              <div dangerouslySetInnerHTML={{
                  __html: marked(bodu)
                }} />
            </div>
            <Link target="_blank" href={attachments.fields.file.url}><a>{download_form}</a></Link>
          </FlexCol>
        </FlexRow>
      </div>
      </Layout>
    );
  }

  KarmaPage.getInitialProps = async function() {
    try {
      const response = await client.getEntry('6VZ0HEYiVwUxsGQdIuSGyL')
      let json = await response;
      return {
        content: json.fields,
      }
    } catch { 
      console.log('noFetchError()')
    } 

  }


// Styles
const FlexRow = styled.div`
  display: flex;
  max-width: 820px;
  flex-wrap: wrap;
  margin: 0 auto;
  margin-top: 3em;
  @media (max-width: 840px) {
    width: 90%;
  }
`;
const FlexCol = styled.div`
    text-align: center;
    padding-bottom: 2em;
    strong { font-weight: 600;}
    p a { color: palevioletred; padding: 0 0.3em; border-bottom: 1px dotted palevioletred; }
    a:hover { background: palevioletred; color: #fff; }
`;

const MainHeading = styled.h1`
  ${fonts.highlight};
  font-size: 3em;
  z-index: 100;
`;


const SmallBtn = styled.div`
  width: 300px;
  margin: 2em auto;
  padding: 1em 2em;
  border: 1px solid palevioletred;
  transition: all 0.5s;
  color: palevioletred;
  &:hover { background: palevioletred; color: #fff; }
`;

const download_form = (
  <SmallBtn>
      Download Application
  </SmallBtn>
);

export default KarmaPage;
