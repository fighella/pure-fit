import React, { Component } from 'react';
import { LocationMap } from '../LocationMap';
import { Row, Col } from 'reactstrap';
import { AppLocations } from '../../data/locations';
import { Schedule } from '../Schedule';
import { ScheduleCustom } from '../schedule/Custom';
import moment from 'moment-timezone';
export class NavLocations extends Component {
  render() {
    const loc =
      this.props.location !== 'all' ? (
        singleLocation(
          this.props.location,
          this.props.classes,
          this.props.loaded
        )
      ) : (
        <Row>
          {allLocations(
            this.props.location,
            this.props.classes,
            this.props.loaded
          )}
        </Row>
      );
    return loc;
  }
}

function allLocations(current, classes, loaded) {
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
        <Schedule
          name={_location.name}
          location={_location.name}
          mini={true}
          day={'Today'}
          classes={classes}
          loaded={loaded}
        />
      </Col>
    ));
}

function singleLocation(current, classes, loaded) {
  const today = moment(new Date());
  const tomorrow = moment(new Date()).add(1, 'days');
  const the_next_day = moment(new Date()).add(2, 'days');
  return AppLocations.all
    .filter(locationMatch, current)
    .map((_location, index) => (
      <div>
        <Row key={index}>
          <Col>
            <ScheduleCustom
              name={_location.name}
              location={_location.name}
              mini={true}
              day={today.format('YYYY-MM-DD')}
              loaded={loaded}
              days={1}
            />
          </Col>
          <Col>
            <ScheduleCustom
              name={_location.name}
              location={_location.name}
              mini={true}
              day={tomorrow.format('YYYY-MM-DD')}
              loaded={loaded}
              days={1}
              hide_title={true}
            />
          </Col>
          <Col>
            <ScheduleCustom
              name={_location.name}
              location={_location.name}
              mini={true}
              day={the_next_day.format('YYYY-MM-DD')}
              loaded={loaded}
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
