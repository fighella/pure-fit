import React, { Component } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { fonts, colors } from '../styles/variables';
import Head from 'next/head'

const contentful = require('contentful');
const SPACE_ID = 'hmbn1d6s90j4'
const ACCESS_TOKEN = 'ad22c819dfadabb93437878e689131d7e64b841bc6d5ee52f333c02fcfee5d8f'
const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})

const KarmaPage = () => {
    return (
      <Layout>
          <Head>
        <title>
          Karma Yogi | Work for Yoga | Pure Yoga Ottawa
        </title>
        <meta property="og:title" content={`Discover Hot Yoga | Ottawa's Favorite Yoga | Pure Yoga Ottawa`}/>
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Discover the benefits of Hot Yoga." />
        <meta property="og:url" content="https://www.pureyogaottawa.com/new/" />
      </Head>
      <div style={{ background: '#fff' }}>
      KARMA PAGE
     
      </div>
      </Layout>
    );
  }

client.getEntry('6VZ0HEYiVwUxsGQdIuSGyL')
.then((content) => console.log(content.fields.title))
.catch(console.error)

// Styles
const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
  margin-top: 3em;
  width: ${props => (props.width ? props.width : '100%')};
`;
const FlexCol = styled.div`
  width: ${props => (props.width ? props.width : '23%')};
  @media (max-width: 500px) {
    width: 100%;
  }
  text-align: center;
`;

const FlexImg = styled.div`
  display: block;
  background-position: center center;
  box-shadow: ${props => (props.hasShadow ? '0 4px 12px #999' : false)};
  background-image: url(${props => props.bg});
  width: 100%;
  height: 280px;
  background-size: cover;
`;

const Centered = styled.div`
  text-align: center;
  padding: 2em 0;
`;

const MainHeading = styled.h1`
  ${fonts.highlight};
  font-size: 3em;
  z-index: 100;
`;

const Flare = styled.h1`
  display: block;
  position: absolute;
  z-index: 300;
  ${fonts.primary};
  font-weight: 300;
  top: 26%;
  right: 8%;
  text-align: right;
  letter-spacing: 22px;
  font-size: 15em;
  color: #fff;
`;

const SubHeading = styled.h2`
  ${fonts.primary};
  font-size: 1.2em;
  letter-spacing: 1px;
  font-weight: 300;
  text-transform: uppercase;
`;

const FlexP = styled.p`
  max-width: 75%;
  line-height: 2.2em;
  margin: 2em auto 2.3em;
  a {
    text-decoration: underline;
    color: ${colors.blue};
    padding: 0 6px;
    transition: all 0.5s;
    &:hover {
      background: ${colors.blue};
      color: #333;
      text-decoration: none;
    }
  }
`;

const PureForm = styled.form`
  background: #fff;
  border-radius: 8px;
  width: 100%;
  min-height: 200px;
  box-shadow: 0 0 22px #efefef;
  margin-bottom: 2em;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h4 {
    ${fonts.primary};
    color: #333;
    font-weight: 300;
  }
`;

const BookNow = styled.a`
  width: 100%;
  border-radius: 0px;
  margin: 0 auto;
  border: 1px solid ${colors.red};
  padding: 0.75em;
  text-align: center;
  ${fonts.primary};
  font-weight: 500;
  background: #fff;
  color: ${colors.red};
  transition: all 0.5s;
  &:hover {
    color: #fff;
    background: ${colors.pink};
    text-decoration: none;
  }
`;

const SmallBtn = styled.div`
  width: 300px;
  margin: 2em auto;
`;

const try_intro = (
  <SmallBtn>
    <BookNow
      href={'#intro'}
      target="_blank"
      rel="noopener noreferrer"
      style={{ display: 'block' }}
    >
      Try our Intro Month
    </BookNow>
  </SmallBtn>
);

const Loc = styled.div`
  padding: 1em 0 0.5em;
  font-family: ${fonts.secondary};
  width: 100%;
  color: ${colors.blue};
  h4 {
    ${fonts.highlight};
    font-weight: 550;
  }
`;

const Price = styled.span`
  ${fonts.primary};
  font-weight: 450;
  letter-spacing: 2px;
  font-size: 4.2em;
  display: flex;
  justify-items: top;
  margin: 0.6em auto;
  position: relative;
  span {
    ${fonts.highlight};
    line-height: 1em;
    font-size: 0.4em;
  }
`;

const ImgGrid = styled.div`
  width: 80%;
  margin: 0 auto;
  height: ${props => props.height || '600'}px;
  justify-content: center;
  align-content: space-around;
  display: flex;
  flex-wrap: wrap;
  padding: 0 0.5%;
`;

const Block = styled.div`
  border: 3px solid #fff;
  position: relative;
  clear: both;
  width: ${props => props.width || 0}%;
  height: ${props => props.height || 0}%;
  background-position: center center;
  background-image: url(${props => props.bg});
  background-size: cover;
`;

const Relative = styled.div`
  position: relative;
`;

const LearnMoreLink = styled.span`
  ${fonts.primary};
  text-transform: none;
  color: #333;
  letter-spacing: 1px;
  font-weight: 300;
  padding: 1em;
  cursor: pointer;
  span {
    border-bottom: 1px solid ${colors.pink};
    transition: all 0.5s;
    &:hover {
      background: ${colors.pink};
    }
  }
`;

export default KarmaPage;