import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Zoom from 'react-reveal/Fade';
import styled from 'styled-components';
import Hero from '../components/Hero';
import fetch from 'isomorphic-unfetch';
import { AppContent } from '../data/content';
import MiniBlog from '../components/journal/Mini';
import Socials from '../components/Socials';
import { AppHelpers } from '../utils/tools';
import PureData from '../utils/src';
import Layout from '../components/Layout';
import { fonts } from '../styles/variables';
import { withRouter } from 'next/router';
import Link from 'next/link';
import Head from 'next/head'

const noFetchError = () => console.log('Did not fetch.');
const t = AppContent.journal;
class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blogs: [],
      workshops: [],
      loaded: false
    };
  }

  componentDidMount() {
    this.grabWorkshops();
  }

  grabWorkshops = () => {
    const src = new PureData(this.props, 12).workshops;

    const params = [];
    src.filters.map((filter, index) =>
      params.push(
        Object.values(src.filters[index])[0]
          ? `&by_${Object.keys(src.filters[index])[0]}=${
              Object.values(src.filters[index])[0]
            }`
          : ''
      )
    );
    const url = params.reduce((acc, cv) => acc + cv, src.base);
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ workshops: data.workshops, loaded: true }))
      .catch(err => console.log('Did not fetch your things.', err));
  };

  render() {
    const { workshops } = this.state;
    const { blogs } = this.props;
    const workshopsList = workshops.map(ws => (
      <Workshop>
        <WorkshopTitle href={`/evolve/${ws.id}/${ws.slug}`}>
          {ws.title}
        </WorkshopTitle>
      </Workshop>
    ));
    const blog_posts = blogs.map((blog, index) => (
      <Col xs={index === 0 ? 12 : 6}>
        <MiniBlog
          name={blog.title}
          category={blog.category}
          teaser_image={blog.teaser_image}
          handle={blog.slug}
          header={index === 0 ? 'big' : false}
        />
      </Col>
    ));
    return (
      <Layout>
          <Head>
        <title>
          Pure Fit Community Journal | Yoga, Food, Wine, Life | Pure Fit Ottawa
        </title>
        <meta property="og:title" content={`Pure Fit Journal`}/>
        <meta property="og:type" content="articles" />
        <meta property="og:description" content="Discover the story behind Pure Fit Ottawa" />
        <meta property="og:url" content="https://www.purefitottawa.com/journals/" />
      </Head>
      <div style={style.body}>
        <Hero
          imgs={['team_21']}
          title={t.title}
          subtitle={t.subtitle}
          compact
        />
        <Container fluid>
          <Row
            style={{
              marginTop: '-10px',
              marginRight: 0,
              zIndex: 22,
              position: 'relative'
            }}
          >
            <Col md={7} xs={12}>
              <br />
              <Row style={{ fontSize: 20, lineHeight: '1.2em' }}>
                {blog_posts.slice(0, 1)}
              </Row>
              <Zoom bottom>
                <Row style={{ fontSize: 20, lineHeight: '1.2em' }}>
                  {blog_posts.slice(1, 20)}
                </Row>
              </Zoom>
            </Col>
            <Col xs={1} />
            <Col md={3} xs={12}>
              <div style={{ textAlign: 'center', paddingTop: '4em ' }}>
                <h4>Follow</h4>
                <Socials />
                <br />
                <hr />
                <br />
                <h4>Upcoming Workshops & Retreats</h4>
                {workshopsList}
              </div>
              <div style={{ textAlign: 'center', paddingTop: '4em ' }} />
            </Col>
          </Row>
        </Container>
      </div>
      </Layout>
    );
  }
}

Index.getInitialProps = async function() {
  try { 
    const response = await fetch(AppHelpers.mbParams({}, 'blogs'))
    const json = await response.json()
    return { 
      blogs: json.blogs
    }
  } catch { 
    noFetchError();
  }
}

const rowWidth = '92%';
const futura = 'futura-pt-medium, sans-serif';
const cortado = '"cortado", sans-serif';
const hero_font = cortado;

const whiteness = '245,245,245';
const white = '255,255,255';
const teaserLeftCol = '60%';
const teaserRightCol = '40%';

export const style = {
  body: {
    background: `rgba(${whiteness},1)`
  },
  close: {
    color: '#fff',
    fontWeight: 'bold',
    position: 'absolute',
    top: '2.5%',
    right: '2%',
    textShadow: '0 0 12px #999',
    zIndex: 100,
    fontSize: 20
  },
  row: {
    minWidth: '100%',
    display: 'flex',
    position: 'relative',
    overflow: 'hidden',
    container: {
      marginBottom: '2em'
    },
    header: {
      paddingLeft: '2.5%',
      fontSize: '1.1em',
      fontWeight: 600,
      letterSpacing: 0.5,
      fontFamily: futura,
      marginBottom: 0
    },
    spacer: {
      minWidth: '2.5%'
    },
    col: {
      position: 'relative',
      minWidth: '31%',
      border: '3px solid transparent',
      display: 'block',
      cursor: 'pointer',
      img: {
        background: '#fff'
      }
    },
    openArrow: {
      color: '#fff',
      textAlign: 'center',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0
    }
  },

  page: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '120px',
    background: `linear-gradient(rgba(${whiteness}, 0),rgba(${whiteness}, 0.15),rgba(${whiteness}, 0.5),rgba(${whiteness}, 0.5),rgba(${whiteness}, 1))`,
    heading: {
      textAlign: 'center',
      fontFamily: hero_font,
      fontSize: '5em',
      color: '#fff',
      textShadow: '0 0 2px #000',
      marginBottom: 100
    },
    flex: {
      display: 'flex',
      justifyItems: 'space-between'
    }
  },
  teaser: {
    width: '100%',
    fontSize: '1em',
    background: '#fff',
    margin: 0,
    position: 'relative',
    height: '100%',
    transition: 'height 1s',
    type: {
      fontSize: '0.8em',
      fontWeight: 100,
      color: '#333',
      textTransform: 'uppercase'
    },
    type_brand: {
      fontWeight: 'bold',
      color: '#111'
    },
    heading: {
      fontSize: '1.8em',
      lineHeight: '1.1em',
      margin: 0,
      fontWeight: 400,
      fontFamily: futura,
      textTransform: 'uppercase'
    },
    details: {
      fontFamily: futura,
      fontSize: '1em',
      fontWeight: 'bold',
      lineHeight: '1.2em',
      display: 'block',
      color: '#666',
      marginTop: 6,
      detail: {
        wrap: 'no-wrap'
      }
    },
    description: {
      fontSize: '0.9em',
      color: '#333'
    },
    content: {
      position: 'relative',
      width: rowWidth,
      margin: '0 0 0 0.25%',
      zIndex: 10,
      padding: '1em 2.5%',
      paddingRight: teaserLeftCol,
      display: 'block'
    },
    more_info: {
      textTransform: 'uppercase',
      fontFamily: futura,
      border: '2px solid #ccc',
      fontSize: 12,
      display: 'inline-block',
      padding: '4px 8px',
      color: '#333',
      marginBottom: '1em'
    },
    book_now: {
      textTransform: 'uppercase',
      fontFamily: futura,
      border: '2px solid pink',
      fontSize: 12,
      display: 'inline-block',
      padding: '4px 8px',
      color: '#333',
      marginBottom: '1em'
    },
    add_to_favorites: {
      textTransform: 'uppercase',
      fontFamily: futura,
      border: '2px solid #fff',
      fontSize: 12,
      display: 'inline-block',
      padding: '4px 8px',
      color: '#333',
      marginBottom: '1em'
    },
    left_grad: {
      backgroundImage:
        'linear-gradient(to left, rgba(255,255,255,0), rgba(255,255,255,1))',
      position: 'absolute',
      left: 0,
      width: '15%',
      top: 0,
      bottom: 0,
      zIndex: 8
    },
    bottom_fade: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 32,
      background: `linear-gradient(rgba(${white}, 0),rgba(${white}, 0.35),rgba(${white}, 1))`,
      zIndex: 4
    },
    bottom_fade_page: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      height: 52,
      background: `linear-gradient(rgba(${whiteness}, 0),rgba(${whiteness}, 0.35),rgba(${whiteness}, 1))`,
      zIndex: 4
    },
    bottom_tabs: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'space-between',
      zIndex: 20,
      maxWidth: 500,
      margin: '1em auto 0 auto',
      paddingBottom: 0,
      tab: {
        cursor: 'pointer',
        textTransform: 'uppercase',
        fontWeight: 750,
        borderBottom: '4px solid rgba(255,255,255,0.8)',
        active: {
          borderBottom: '4px solid pink'
        }
      }
    },
    bg: {
      position: 'absolute',
      height: '100%',
      top: 0,
      right: 0,
      bottom: 0,
      width: teaserRightCol,
      zIndex: 1,
      backgroundSize: 'cover',
      backgroundPosition: 'center center'
    }
  }
};

const Workshop = styled.div`
  border-bottom: 1px solid #ddd;
  text-align: left;
  padding: 1em 0;
`;

const WorkshopTitle = styled.a`
  display: block;
  ${fonts.primary};
  line-height: 1.4em;
  text-transform: none;
  font-size: 1.1em;
  color: #333;
  cursor: pointer;
  transition: 0.2s all;
  &:hover {
    color: #ccc !important;
    text-decoration: none;
  }
`;



export default withRouter(Index);