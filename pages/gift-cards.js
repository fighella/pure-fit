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

const GiftCardsPage = (props) => {
  console.log(props)
  const { title, bodu, subTitle, attachments } = props.content;
    return (
      <Layout>
          <Head>
        <title>
          Give the Gift of Yoga | Gift Cards | Pure Fit Ottawa
        </title>
        <meta property="og:title" content={`Gift Cards | Give the gift of Yoga | Pure Fit Ottawa`}/>
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Yoga Gift Cards" />
        <meta property="og:url" content="https://www.purefitottawa.com/gift-cards/" />
      </Head>
      <div style={{ background: '#fff' }}>
        <Hero imgs={['team_201']} title={title}  compact />
        <FlexRow>
          <FlexCol>
            <div>
              <MainHeading>{subTitle}</MainHeading>
              <br/>
              <div dangerouslySetInnerHTML={{
                  __html: marked(bodu)
                }} />
            </div>
            <Link target="_blank" href={'https://clients.mindbodyonline.com/asp/main_shop.asp?pMode=2&tabID=3'}><SmallBtn href='https://clients.mindbodyonline.com/asp/main_shop.asp?pMode=2&tabID=3'>Buy Pure Fit Gift Card Online</SmallBtn></Link>
          </FlexCol>
        </FlexRow>
      </div>
      </Layout>
    );
  }

  GiftCardsPage.getInitialProps = async function() {
    try {
      const response = await client.getEntry('22qf1YkAbyWjmklIDHsNwj')
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

const SmallBtn = styled.a`
  margin: 0 auto;
  display: inline-block;
  padding: 1em 2em;
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 10px;
  border: 1px solid palevioletred;
  background: palevioletred;
  color:#fff !important;
  text-transform: uppercase;
  transition: 0.5s all;
    &:hover { cursor: pointer; background: #fff; color: palevioletred !important; }
`;



export default GiftCardsPage;
