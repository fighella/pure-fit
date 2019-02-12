import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { navHeading } from '../../utils/nav';
import AppNav from '../../data/nav';
import { NavLocations } from './NavLocations';
import Link from 'next/link'


class NavSchedule extends Component {
  constructor(props) {
    super(props);
    this.state = { location: 'all' };
  }

  setLocation = loc => {
    this.setState({ location: loc });
  };

  render() {
    const { location } = this.state;
    return (
      <Row>
        <Col xs={2}>
          {navHeading('Classes by Location')}
          <SubNav locations={AppNav.locations} setLocation={this.setLocation} />
          {navHeading('Workshops', '/evolve')}
          <br />
          {navHeading('Class Styles', '/class_styles')}
          <br />
          {navHeading('Classes by Teacher', '/team')}
          <br />
          {navHeading('New to Yoga?', '/new')}
        </Col>
        <Col xs={10}>
          <p>Nav Under Temporary Maintenance...</p>
          <span><a href="/schedule">See Full Schedule</a></span>
          {/* <NavLocations location={location} /> */}
        </Col>
      </Row>
    );
  }
}

export default NavSchedule;

const SubNav = ({ locations, setLocation }) => (
  <ul className="sub-sub">
    {locations.map(item => (
      <li
        key={item.name}
        onFocus={() => setLocation(item.name)}
        onMouseOver={() => setLocation(item.name)}
      >
        <Link href={`/location/${item.link}`}><a>{item.name}</a></Link>
      </li>
    ))}
  </ul>
);

NavSchedule.defaultProps = {
  loaded: false
};

NavSchedule.propTypes = {
  // classes: PropTypes.arrayOf.isRequired,
  loaded: PropTypes.bool
};

SubNav.propTypes = {
  // locations: PropTypes.arrayOf.isRequired,
  setLocation: PropTypes.func.isRequired
};
