import React, { Component , useState } from 'react';
import Layout from '../components/Layout';
import { Row, Col,   Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';
import styled, { css } from 'styled-components';
import PureData from '../utils/src';
import EvolveCollection from '../components/evolve/Collection';
import Hero from '../components/Hero';
import fetch from 'isomorphic-unfetch';
import { AppContent } from '../data/content';
import Head from 'next/head'

const t = AppContent.evolve;

const typeFilters = [
  { slug: 'Show All', t: 'Show All' },
  { slug: 'Workshop', t: 'Workshop' },
  { slug: 'Training', t: 'Training' },
  // { slug: 'Retreats', t: 'Retreat' },
];

class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workshops: [],
      defaults: 'Show All',
      cols: 2,
      dayDropdownOpen: false
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
      .then(data => this.setState({ workshops: data.workshops }))
      .catch(err => console.log('Did not fetch your things.'));
  };

  byLocation = ws => ws.location === 'Downtown';

  byType = (c) => c.workshop_type === this.state.defaults;

  setCols = (i) => {
    this.setState({ cols: i})
  }

  dayToggle = () => {
    this.setState(prevState => ({
      dayDropdownOpen: !prevState.dayDropdownOpen
    }));
  }
  selectDropdown = event => {
    this.setState({
      defaults: event.target.innerText,
      slug: event.target.getAttribute('data-slug')
    });
  };
  render() {
    const { workshops, defaults } = this.state;
    const ww = defaults === 'Show All' ? workshops : workshops.filter(this.byType);
    const allWorkshops = ww.map(workshop => workshop);
    const evolutions = [
      { title: 'Upcoming Workshops', workshops: allWorkshops },
    ].map(evolve => (
      <EvolveCollection
        title={evolve.title}
        workshops={evolve.workshops}
        key={evolve.id}
        cols={this.state.cols}
        />
        ));
        
     
    const typePicker = typeFilters.map(df => {
      return (
        <DropdownItem
          key={df.t}
          onClick={this.selectDropdown}
          data-slug={df.slug}
        >
          {df.t}
        </DropdownItem>
      );
    });
    return (
      <Layout>
        <Head>
        <title>
         Evolve Your Practice | Yoga Workshops, Teacher Training &amp; Retreats | Pure Yoga Ottawa
        </title>
        <meta property="og:title" content={`Evolve Your Practice With Us | Pure Yoga Ottawa`}/>
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Yoga Workshops, Yoga Training, Teacher Training &amp; Retreats." />
        <meta property="og:url" content="https://www.pureyogaottawa.com/evolve" />
      </Head>
      <div style={{ overflow: 'hidden'}}>
        <Hero
          imgs={['team_15']}
          title="Evolve"
          subtitle="Workshops,Training, Retreats"
          compact
          faded
        />
        <Row style={{ marginTop: '-10px', position: 'relative', zIndex: '100'}}>
          <Col xs={12} style={{ display: 'flex' }}>
            <Toggler style={{ marginLeft: 4 }}>
              <ToggleLeft selected={this.state.cols == 2} onClick={() => this.setCols(2)}>
                ||
              </ToggleLeft>
              <ToggleRight selected={this.state.cols == 3} a onClick={() => this.setCols(3)}>
                |||
              </ToggleRight>
            </Toggler>
          <DaySelector style={{ textAlign: 'left', marginLeft: 4 }}>
            <Dropdown
              size="lg"
              isOpen={this.state.dayDropdownOpen}
              toggle={this.dayToggle}
            >
              <DropdownToggle caret>{this.state.defaults}</DropdownToggle>
              <DropdownMenu>{typePicker}</DropdownMenu>
            </Dropdown>
          </DaySelector>
          </Col>
          <Col xs={6} style={{ textAlign: 'right' }}>
            {/* By Type, By Location, By Date */}
          </Col>
        </Row>
        <Row
          style={{
            marginRight: 0,
            zIndex: 22,
            position: 'relative'
          }}
        >
          <Col xs={12} style={{ paddingRight: 0 }}>
            {evolutions}
          </Col>
        </Row>
       
        <CenteredStrap>
          <h3>{t.bottom_section.title}</h3>
          <p>{t.bottom_section.text}</p>
        </CenteredStrap>
        <br />
      </div>
      </Layout>
    );
  }
}

const centered = css`
  text-align: center;
`;

const CenteredStrap = styled.div`
  padding: 1em;
  margin: 1em auto;
  width: 100%;
  ${centered};
`;

const DaySelector = styled.div`
  text-align: center;
  position: relative;
  z-index: 101;
  button {
    background: #fff;
    border-color: #aaa;
    color: #999;
    font-family: futura-pt, sans-serif;
  }
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const Toggler = styled.div`
  display: flex;
  width: 100px;
  height: 100%;
  background: #fff;
  @media (max-width: 700px) {
    display: none;
  }
`

const Toggle = styled.button`
  background: none;
  border: 1px solid #aaa;
  border-radius: 4px;
  display: block;
  width: 50%;
  color: #666;
  font-weight: 900;
  background: ${(props) => props.selected ? '#dddd' : '#fff'};
  transition: background 0.3s;
  cursor: pointer;
  height: 100%;
  &:hover { background: #efefef; }

`

const ToggleLeft = styled(Toggle)`
  border-top-right-radius: 0;
  border-right: 0;
  border-bottom-right-radius: 0;
`

const ToggleRight = styled(Toggle)`
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`

export default Index;
