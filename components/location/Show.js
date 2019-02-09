import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from 'styled-components';
import { AppLocations } from '../data/locations';
import PureData from '../utils/src';
import { Schedule } from '../Schedule';
import ScheduleWrapper from '../ScheduleWrapper';
import { LocationMap } from '../components/LocationMap';
import EvolveRow from '../evolve/row';
import Hero from '../Hero';
import { SubHeading, MainHeading } from '../utils/headings';

export default class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loaded: true,
      workshops: []
    };
  }
  grabWorkshops = () => {
    var src = new PureData(this.props, 12).workshops,
      params = [];
    src.filters.map((filter, index) =>
      params.push(
        Object.values(src.filters[index])[0]
          ? `&by_${Object.keys(src.filters[index])[0]}=${
              Object.values(src.filters[index])[0]
            }`
          : ''
      )
    );
    var url = params.reduce((acc, cv) => {
      return acc + cv;
    }, src.base);
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ workshops: data.workshops, loaded: true }))
      .catch(err => console.log('Did not fetch your things.'));
  };
  componentDidMount() {
    this.grabWorkshops();
  }
  byLocationAndWorkshop = e => {
    return (
      e.location.toLowerCase() === this.props.match.params.handle &&
      e.workshop_type === 'Workshop'
    );
  };
  thisLoc = e => {
    return e.handle === this.props.match.params.handle;
  };
  render() {
    const loc = this.props.match.params.handle;
    const loc_data = AppLocations.all.filter(this.thisLoc)[0] || {};
    const loc_pretty = loc.charAt(0).toUpperCase() + loc.slice(1);
    const sections = [
      { loc: '#overview', name: 'Overview', component: '' },
      { loc: '#classes', name: 'Classes' },
      { loc: '#workshops', name: 'Workshops' },
      { loc: '#address', name: 'Address / Map' },
      { loc: '#photos', name: 'Photos' },
      { loc: '/contact', name: 'Contact' }
    ];
    const ScheduleWrapped = ScheduleWrapper(Schedule, PureData);
    const evolutions = [
      {
        title: `Upcoming ${loc_pretty} Workshops`,
        workshops: this.state.workshops.filter(this.byLocationAndWorkshop)
      }
    ].map((evolve, index) => {
      return (
        <EvolveRow
          title={evolve.title}
          workshops={evolve.workshops}
          key={index}
        />
      );
    });
    const buses = loc_data
      ? loc_data.bus_schedules
        ? loc_data.bus_schedules.map(sched => {
            return (
              <li>
                <a href={sched.link}>{sched.name}</a>
              </li>
            );
          })
        : false
      : false;

    var facilities = loc_data.facilities.map((fac, index) => (
      <li key={'fac_' + index}>{fac}</li>
    ));
    var loaded = (
      <div style={{ background: 'rgba(240,240,240,0.9)' }}>
        <Hero
          imgs={[loc]}
          title={'Pure Yoga ' + loc}
          subtitle={loc_data.address}
          compact
        />
        <HeroSubNav sections={sections} />
        <Container fluid>
          <Row
            style={{
              zIndex: 22,
              position: 'relative',
              paddingTop: '2em'
            }}
          >
            <Col xs={6}>
              <span id="classes" />
              <ScheduleWrapped
                name={'Upcoming Classes in ' + loc_pretty}
                location={'Pure Yoga ' + loc_pretty}
                day={new Date()}
                days={2}
                full_link={true}
              />
              <br />
            </Col>
            <Col xs={6}>
              <Block>
                <Section>
                  <span id="overview" />
                  <div style={{ background: '#fff' }}>
                    <LocationMap
                      hideMap={false}
                      city={loc_data.city}
                      name={loc_data.name}
                      address={loc_data.address}
                      phone={loc_data.phone}
                      map={loc_data.map}
                      postcode={loc_data.postcode}
                      place_id={loc_data.google_place_id}
                    />
                  </div>
                  <br />
                  <MainHeading>{loc_data.name}</MainHeading>
                  <p>{loc_data.description}</p>
                  <SubHeading>Facilities</SubHeading>
                  <ul>{facilities}</ul>
                  <span id="address" />
                </Section>
                <br />
                <Section>
                  <SubHeading>Buses &amp; Parking Info</SubHeading>
                  <p>{loc_data.where_to_park}</p>
                  <p>
                    <strong>Helpful links</strong>
                    <ul>{buses}</ul>
                  </p>
                </Section>
              </Block>
              <Block>
                <SubHeading>Photos</SubHeading>
                <div>
                  <p>Photo Gallery coming soon ...</p>
                </div>
              </Block>
            </Col>
          </Row>
        </Container>
        <span id="workshops" />
        {evolutions}

        <br />
      </div>
    );

    var content = loc_data && this.state.loaded ? loaded : 'Loading...';
    return content;
  }
}

class HeroSubNav extends Component {
  render() {
    const sub_nav = this.props.sections.map((item, index) => {
      return (
        <li>
          <a href={item.loc} alt={item.name}>
            {item.name}
          </a>
        </li>
      );
    });
    return (
      <NavRow>
        <ul>{sub_nav}</ul>
      </NavRow>
    );
  }
}

const NavRow = styled.div`
  z-index: 22;
  position: relative;
  border-bottom: 1px solid #bbb;
  ul {
    display: flex;
    list-style: none;
    justify-content: center;
    margin: 0;
    padding: 0;
    li {
      padding: 0.5em 2em;
    }
  }
`;

const Section = styled.section``;

const Block = styled.div`
  padding: 1em;
  margin-bottom: 2em;
`;
