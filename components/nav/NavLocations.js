import React, { Component } from 'react';
import { LocationMap } from '../LocationMap';
import { Row, Col } from 'reactstrap';
import { AppLocations } from '../../data/locations';
// import { Schedule } from '../ScheduleA';
import { ScheduleCustom } from '../schedule/Custom';
import PureData from '../../utils/src';
import moment from 'moment-timezone';
import ScheduleWrapper from '../../components/ScheduleWrapper';

const ScheduleWrapped = ScheduleWrapper(ScheduleCustom, PureData);

export class NavLocations extends Component {
  render() {
    const loc =
      this.props.location !== 'all' ? (
        singleLocation(
          this.props.location
        )
      ) : (
        <Row>
          {allLocations(
            this.props.location
          )}
        </Row>
      );
    return loc;
  }
}

function allLocations(current) {
  return AppLocations.all
    .filter(locationMatch, current)
    .map((_location, index) => (
      <Col key={index}>
        <LocationMap
          hideMap={true}
          city={_location.city}
          name={_location.name}
          address={_location.address}
          phone={_location.phone}
          map={_location.map}
          place_id={_location.google_place_id}
        />
        <ScheduleWrapped
          name={_location.name}
          location={_location.name}
          mini={true}
          day={'Today'}
        
        />
      </Col>
    ));
}

function singleLocation(current) {
  const today = moment(new Date());
  const tomorrow = moment(new Date()).add(1, 'days');
  const the_next_day = moment(new Date()).add(2, 'days');
  return AppLocations.all
    .filter(locationMatch, current)
    .map((_location, index) => (
      <div>
        <Row key={index}>
          <Col>
            <ScheduleWrapped
              name={_location.name}
              location={_location.name}
              mini={true}
              day={today.format('YYYY-MM-DD')}
              days={1}
            />
          </Col>
          <Col>
            <ScheduleWrapped
              name={_location.name}
              location={_location.name}
              mini={true}
              day={tomorrow.format('YYYY-MM-DD')}
              days={1}
              hide_title={true}
            />
          </Col>
          <Col>
            <ScheduleWrapped
              name={_location.name}
              location={_location.name}
              mini={true}
              day={the_next_day.format('YYYY-MM-DD')}
              days={1}
              hide_title={true}
            />
          </Col>
        </Row>
      </div>
    ));
}

function locationMatch(current) {
  if (current.name === this || this === 'all') {
    return true;
  }
}
