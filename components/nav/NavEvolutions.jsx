import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { navHeading } from '../../utils/nav';
import { AppContent as t } from '../../data/content';

export default class NavEvolutions extends Component {
  render() {
    const { workshops, evolution } = this.props;
    const workshopsCol = (
      <React.Fragment>
        <Col xs={9}>
          <p>{t.nav.workshops.content}</p>
          <Row>{workshops}</Row>
          {navHeading('See All', '/workshops')}
        </Col>
      </React.Fragment>
    );
    const retreats = 'Retreat Stuff';
    const training = 'Training';
    let display = evolution === 'Workshops' ? workshopsCol : false;
    display = evolution === 'Retreats' ? retreats : display;
    display = evolution === 'Training' ? training : display;
    return display;
  }
}

NavEvolutions.propTypes = {
  workshops: PropTypes.arrayOf.isRequired,
  evolution: PropTypes.string.isRequired
};
