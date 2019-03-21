import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { navHeading } from '../../utils/nav';
import AppNav from '../../data/nav';
import EvolveCollection from '../evolve/Collection';
import NavEvolutions from './NavEvolutions';
import { AppHelpers } from '../../utils/tools';
const noFetchError = () => console.log('Did not fetch.');

export class NavEvolve extends Component {
  constructor(props) {
    super(props);
    this.state = {
      evolution: 'Workshops',
      workshops: []
    };
  }
  setLocation = loc => {
    this.setState({ evolution: loc });
  };
  fetchYogaWorkshops = async () => {
    const response = await fetch(
      AppHelpers.mbParams(this.props, 'workshops')
    ).catch(noFetchError);
    const json = await response.json().catch(noFetchError);
    this.setState({
      workshops: json.workshops.slice(0, 6),
      loaded: true
    });
  };
  componentDidMount() {
    this.fetchYogaWorkshops();
  }
  render() {
    const workshops = [
      {
        title: 'Upcoming Workshops',
        workshops: this.state.workshops,
        limit: 2,
        skip: 0
      },
      { title: false, workshops: this.state.workshops, limit: 2, skip: 3 }
    ].map((evolve, index) => {
      return (
        <EvolveCollection
          limit={evolve.limit}
          skip={evolve.skip}
          title={evolve.title}
          workshops={evolve.workshops}
          key={index}
          isLink
        />
      );
    });

    return (
      <Row>
        <Col xs={3}>
          {navHeading('Evolve Your Practice')}
          <ul>
            <SubNav
              locations={AppNav.evolutions}
              setLocation={this.setLocation}
            />
          </ul>
        </Col>
        <NavEvolutions evolution={this.state.evolution} workshops={workshops} />
      </Row>
    );
  }
}

class SubNav extends Component {
  render() {
    const items = this.props.locations.map((item, index) => (
      <li key={index} onMouseOver={() => this.props.setLocation(item.name)}>
        {item.name}
      </li>
    ));
    return <ul className="sub-sub">{items}</ul>;
  }
}
