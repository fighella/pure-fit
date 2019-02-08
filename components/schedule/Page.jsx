import React, { Component } from 'react';
import {
  Row,
  Col,
  Container,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import styled from 'styled-components';
import moment from 'moment-timezone';
import { Schedule } from '../Schedule';
import { AppDownload } from '../AppDownload';
import { fonts } from '../../styles/variables';
import PureData from '../../utils/src';
import { EvolveConfig } from '../evolve/config';
import ScheduleWrapper from '../ScheduleWrapper';
import Hero from '../Hero';
import {withRouter} from 'next/router'
import { AppContent as t } from '../../data/content';

const [style] = [EvolveConfig.style];
const zone = 'Etc/GMT';

const schedules = [
  { location: 'Pure Yoga Westboro', days: 3 },
  { location: 'Pure Yoga Centretown', days: 3 },
  { location: 'Pure Yoga Downtown', days: 3 }
];
const startDate = moment.tz(new Date(), zone);
const dayOne = startDate.clone();
const nextWeek = startDate.clone();
const dateFilters = [
  { days: 1, day: startDate, dayText: 'Today ' },
  { days: 1, day: dayOne.add('1', 'days'), dayText: 'Tomorrow' },
  { days: 3, day: startDate, dayText: 'Next 3 Days' },
  { days: 7, day: startDate, dayText: 'Next 7 Days' },
  { days: 7, day: nextWeek.add('7', 'days'), dayText: 'Next Week' }
];

const ScheduleWrapped = ScheduleWrapper(Schedule, PureData);

class SchedulePage extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.dayToggle = this.dayToggle.bind(this);
    this.state = {
      classes: [],

      location: this.props.router && this.props.router.query && this.props.router.query.location
        ? `Pure Yoga ${this.props.router.query.location
            .charAt(0)
            .toUpperCase() + this.props.router.query.location.slice(1)}`
        : 'All Locations',
      dropdownOpen: false,
      day: moment(new Date(), zone).format('YYYY-MM-DD'),
      days: 1,
      dayText: 'Today',
      dayDropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  dayToggle() {
    this.setState(prevState => ({
      dayDropdownOpen: !prevState.dayDropdownOpen
    }));
  }
  thisLocation = e => {
    return (
      this.state.location === 'All Locations' ||
      (e.location === this.state.location && this.state.day !== 1000)
    );
  };
  thisDay = e => {
    return this.state.dayText === 'Today' || e.day === this.state.day;
  };

  selectDropdown = event => {
    this.setState({
      location: event.target.innerText
    });
  };

  selectDayDropdown = event => {
    this.setState({
      dayText: event.target.innerText,
      days: event.target.getAttribute('data-days'),
      day: event.target.getAttribute('data-day')
    });
  };

  render() {
    const schedule_columns = schedules
      .filter(this.thisLocation)
      .map(schedule => {
        return (
          <Col
            key={`schedule_${schedule.location}${this.state.days}${
              this.state.day
            }`}
            style={{ maxWidth: '95%', margin: '0 auto 1em' }}
          >
            <ScheduleWrapped
              name={schedule.location}
              location={schedule.location}
              day={this.state.day}
              days={this.state.days}
              full_link={true}
            />
          </Col>
        );
      });
    const datePicker = dateFilters.map(df => {
      return (
        <DropdownItem
          key={df.dayText}
          onClick={this.selectDayDropdown}
          data-days={df.days}
          data-day={df.day.format('YYYY-MM-DD')}
        >
          {df.dayText}
        </DropdownItem>
      );
    });

    return (
      <div style={style.body}>
        <Hero
          imgs={['team_126']}
          title={'Practice'}
          subtitle={'3 Studios. 1 Pass.'}
          faded
        />
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >
          <LocationSelector>
            <Dropdown
              size="lg"
              isOpen={this.state.dropdownOpen}
              toggle={this.toggle}
            >
              <DropdownToggle caret>{this.state.location}</DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={this.selectDropdown}>
                  All Locations
                </DropdownItem>
                <DropdownItem onClick={this.selectDropdown}>
                  Pure Yoga Westboro
                </DropdownItem>
                <DropdownItem onClick={this.selectDropdown}>
                  Pure Yoga Centretown
                </DropdownItem>
                <DropdownItem onClick={this.selectDropdown}>
                  Pure Yoga Downtown
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </LocationSelector>
          &nbsp;
          <DaySelector>
            <Dropdown
              size="lg"
              isOpen={this.state.dayDropdownOpen}
              toggle={this.dayToggle}
            >
              <DropdownToggle caret>{this.state.dayText}</DropdownToggle>
              <DropdownMenu>{datePicker}</DropdownMenu>
            </Dropdown>
          </DaySelector>
        </div>
        <div id="schedule" style={{ zIndex: 100, position: 'relative' }}>
          <Container fluid>
            <Row>{schedule_columns}</Row>
          </Container>
          <FootNote>{t.footnote}</FootNote>
        </div>
        <AppDownload />
        <Strap>
          <Title>Centretown, Downtown &amp; Westboro</Title>
          <SubTitle>{t.new_to_yoga_strap_subtitle}</SubTitle>
          <br />
          <p style={{ lineHeight: '2em' }}>
            We at Pure Yoga Ottawa have created a space for EveryBODY...every
            shape, size, age, and status, employed, or in between jobs, student,
            or retiree, single or divorcee, mother, father, grandparent - you
            get the idea. Come join the community, where we can all grow
            together.
          </p>
        </Strap>
      </div>
    );
  }
}

const LocationSelector = styled.div`
  text-align: center;
  position: relative;
  z-index: 101;
  button {
    background: #fff;
    color: #999;
    font-family: futura-pt, sans-serif;
  }
`;

const DaySelector = styled.div`
  text-align: center;
  position: relative;
  z-index: 101;
  button {
    background: #fff;
    color: #999;
    font-family: futura-pt, sans-serif;
  }
`;

const FootNote = styled.p`
  font-size: 12px;
  margin: 1em auto;
  text-align: center;
  font-style: italic;
`;

const Strap = styled.div`
  margin-top: 2.3em;
  text-align: center;
  color: #333;
  max-width: 80%;
  min-height: 140px;
  padding: 4em 0;
  margin: 0 auto;
`;

const Title = styled.h3`
  ${fonts.primary};
  font-size: 2em;
  font-weight: 450;
`;

const SubTitle = styled.h3`
  ${fonts.highlight};
  font-size: 1.4em;
`;

export default (SchedulePage);