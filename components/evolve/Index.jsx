import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import styled, { css } from 'styled-components';
import PureData from '../utils/src';
import EvolveRow from './row';
import Hero from '../Hero';
import { EvolveConfig } from './config';

const [style] = [EvolveConfig.style];

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workshops: []
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

  byType = ws => ws.workshop_type === 'Retreat';

  byTypeTraining = ws => ws.workshop_type === 'Training';

  render() {
    const { t } = this.props;
    const { workshops } = this.state;
    const allWorkshops = workshops.map(workshop => workshop);

    const slicedWorkshops = workshops
      .filter(this.byLocation)
      .slice(8, 24)
      .map(workshop => workshop);
    const retreats = workshops.filter(this.byType).map(workshop => workshop);
    const training = workshops
      .filter(this.byTypeTraining)
      .map(workshop => workshop);
    const evolutions = [
      { title: 'Upcoming Workshops', workshops: allWorkshops },
      { title: 'Teacher Training', workshops: training },
      { title: 'Upcoming Retreats', workshops: retreats }
    ].map(evolve => (
      <EvolveRow
        title={evolve.title}
        workshops={evolve.workshops}
        key={evolve.id}
      />
    ));
    const evolutions2 = [
      { title: 'More Workshops', workshops: slicedWorkshops }
    ].map(evolve => (
      <EvolveRow
        title={evolve.title}
        workshops={evolve.workshops}
        key={evolve.id}
      />
    ));
    return (
      <div style={style.body}>
        <Hero
          imgs={['team_15']}
          title="Evolve"
          subtitle="Workshops,Training, Retreats"
          faded
        />

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
        <Row
          style={{
            marginRight: 0,
            zIndex: 22,
            position: 'relative'
          }}
        >
          <Col xs={12} style={{ paddingRight: 0 }}>
            {evolutions2}
          </Col>
        </Row>
        <CenteredStrap>
          <h3>{t.bottom_section.title}</h3>
          <p>{t.bottom_section.text}</p>
        </CenteredStrap>
        <br />
      </div>
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
