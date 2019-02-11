import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { navHeading } from '../../utils/nav';
import { pureButton } from '../../utils/buttons';
import AppNav from '../../data/nav';
import { AppContent as t } from '../../data/content';

class NavMembers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: 'Intro'
    };
  }

  setLocation = loc => {
    this.setState({ classes: loc });
  };

  render() {
    let pricing;
    const context = this;
    pricing = (
      <Col>
        <div className="flexCol">
          <div style={{ width: '100%', marginRight: 12, position: 'relative' }}>
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(0,0,0,0.3)'
              }}
            >
              <span className="intro">$45 Intro Month</span>
            </div>
            <img
              src="https://s3.amazonaws.com/pureyogaottawa.com/website/team-photos/team_126.jpg"
              style={{ width: 450 }}
              alt="placeholder"
            />
          </div>
          <div className="navContent">
            {navHeading(t.nav.new_to_yoga.title)}
            <p className="highlight">{t.nav.new_to_yoga.sub_title}</p>
            <p>{t.nav.new_to_yoga.content}</p>
            {pureButton('Intro Month', '/new')}
          </div>
        </div>
      </Col>
    );
    function byName(val) {
      console.log('Val', val);
      return val.name === context.state.classes;
    }
    if (AppNav.classes.filter(byName)[0]) {
      pricing = AppNav.classes.filter(byName)[0].mega;
    }
    return (
      <Row>
        <Col xs={3}>
          {navHeading('Class Options')}
          <ul>
            <SubNav locations={AppNav.classes} setLocation={this.setLocation} />
          </ul>
          {navHeading('Student/Senior Discounts', '/pricing')}
          <br />
          {navHeading('Karma Program', '/pricing')}
        </Col>
        <Col xs={8}>{pricing}</Col>
      </Row>
    );
  }
}

const SubNav = ({ locations, setLocation }) => (
  <ul className="sub-sub">
    {locations.map(item => (
      <li
        key={`locc_${item.name}`}
        onFocus={() => setLocation(item.name)}
        onMouseOver={() => setLocation(item.name)}
      >
        <a href="/pricing">{item.name}</a>
      </li>
    ))}
  </ul>
);

SubNav.propTypes = {
  locations: PropTypes.arrayOf.isRequired,
  setLocation: PropTypes.func.isRequired
};

export default NavMembers;
