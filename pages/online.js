import React, { Component } from 'react';
import Layout from '../components/Layout';
import styled from 'styled-components';
import { fonts, colors } from '../styles/variables';
import Head from 'next/head';
import { Row, Col } from 'reactstrap';
import ReactPlayer from 'react-player';
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

const nama_link ='https://app.namastream.com/#/pureyogaottawa/product/1785'

const OnlinePage = (props) => {
  console.log(props)
  const { title, bodu, subTitle, secondary } = props.content;
    return (
      <Layout>
          <Head>
        <title>
          Pure Fit Online | Yoga Anywhere | Pure Fit Ottawa
        </title>
        <meta property="og:title" content={`Pure Fit Online | Online Yoga Anywhere | Pure Fit Ottawa`}/>
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Pure Fit Online - Monthly Streaming Subscriptions" />
        <meta property="og:url" content="https://www.purefitottawa.com/online/" />
      </Head>
      <div style={{ background: '#fff', textAlign: 'center' }}>
        <Hero imgs={['team_142']} title={title} subtitle={'Stream Anywhere Anytime.'} compact />
          <MainHeading>{subTitle}</MainHeading>
        <FlexRow>
          <FlexCol>
            <div>
              <div className='page-content' dangerouslySetInnerHTML={{
                  __html: marked(bodu)
                }} />
            </div>
          </FlexCol>
          <FlexCol>
              <div className='page-content' dangerouslySetInnerHTML={{
                __html: marked(secondary)
              }} />
          </FlexCol>
        </FlexRow>
              
          <SecondHeading>Get Your First 15 Days Free</SecondHeading>
          <Link target="_blank" href={nama_link}><SmallBtn href={nama_link}>Explore Pure Online &raquo;</SmallBtn></Link>
          <br/><p style={{ fontWeight: 'bold', textTransform: 'uppercase', lineHeight: '2.8em'}}>Or check out some free samples below</p>
      <hr/>
      
      <SecondHeading>Free Samples</SecondHeading>
      <NavStream />
      <Link target="_blank" href={nama_link}><SmallBtn href={nama_link}>Explore Pure Online &raquo;</SmallBtn></Link>
      </div>
      <br/>
      </Layout>
    );
  }

  OnlinePage.getInitialProps = async function() {
    try {
      const response = await client.getEntry('5zLSxVxYcCnAZL0vzgDwdv')
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
  max-width: 1420px;
  flex-wrap: wrap;
  margin: 0 auto;
  @media (max-width: 840px) {
    width: 90%;
  }
`;
const FlexCol = styled.div`
    text-align: center;
    padding: 0.5em;
    padding-bottom: 2em;
    width: 45%;
    strong { font-weight: 600;}
    p a { color: palevioletred; padding: 0 0.3em; border-bottom: 1px dotted palevioletred; }
    a:hover { background: palevioletred; color: #fff; }
`;

const MainHeading = styled.h1`
  ${fonts.highlight};
  font-size: 3em;
  z-index: 100;
  text-align: center;
  padding: 1em;
  margin: 0 auto;
`;

const SecondHeading = styled.h3`
  ${fonts.highlight};
  font-size: 1.8em;
  z-index: 100;
  text-align: center;
  padding: 1em;
  margin: 0 auto;
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

export default OnlinePage;


class MiniVideo extends Component {
  render() {
    return (
      <div class="mini-video">
        <ReactPlayer
          url={this.props.url}
          width="100%"
          height="200px"
          light
          controls={false}
          style={{ maxWidth: '100%' }}
        />
        {this.props.name}
      </div>
    );
  }
}

class NavStream extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: []
    }
  }
  componentDidMount() {
    this.fetchVideos();
  }
  fetchVideos = async () => {
    console.log('Grabbin')
    try {
      const response = await client.getEntries({ content_type: 'video',
      'fields.active[ne]': 'false'    })
      let json = await response;
      this.setState({
        videos: json.items.reverse()
      })
    } catch { 
      console.log('noFetchError()')
    } 
  
  }
  render() {
    console.log('Vid Dropdown');
    console.log(this.state.videos);
    console.log('/Vid Dropdown');
    const vids = this.state.videos.map((item, index) => (
      <FlexCol style={{ width: '30%' }} id={item.fields.title}>
       <MiniVideo
                name={item.fields.title}
                url={item.fields.vimeo}
              />
      </FlexCol> 
    ))
    return (
          <FlexRow>
            {vids}
          </FlexRow>
    );
  }
}
