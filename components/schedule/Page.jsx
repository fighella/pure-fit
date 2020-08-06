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
import { ScheduleBanner } from '../schedule/Banner';
import { AppContent as t } from '../../data/content';


const [style] = [EvolveConfig.style];
const zone = 'Etc/GMT';

const schedules = [
  { location: 'Pure Fit', days: 7 },
];
const startDate = moment.tz(new Date(), zone);
// const dayOne = startDate.clone();
// const nextWeek = startDate.clone();
const dateFilters = [
  { days: 7, day: startDate, dayText: 'Today ' },
  // { days: 1, day: dayOne.add('1', 'days'), dayText: 'Tomorrow' },
  // { days: 3, day: startDate, dayText: 'Next 3 Days' },
  // { days: 7, day: startDate, dayText: 'Next 7 Days' },
  // { days: 7, day: nextWeek.add('7', 'days'), dayText: 'Next Week' }
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
        ? `Pure Fit`
        : 'All Locations',
      dropdownOpen: false,
      day: moment(new Date(), zone).format('YYYY-MM-DD'),
      days: 7,
      dayText: '7 days',
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
      this.state.location === 'Pure Fit' ||
      (e.location === this.state.location && this.state.day !== 1000)
    );
  };
  thisDay = e => {
    return this.state.dayText === '7 days' || e.day === this.state.day;
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
          location={'Pure Fit'}
          day={'Today'}
          days={7}
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
          custom_imgs={['https://s3.ca-central-1.amazonaws.com/purefitottawa.com/images/fit_109.jpg']}
          title={'Sweat.'}
          subtitle={'Fitness done different.'}
          compact
        />
          <ScheduleBanner />
        <div
          style={{ width: '100%', display: 'flex', justifyContent: 'center' }}
        >          
     
          &nbsp;
          {/* <DaySelector>
            <Dropdown
              size="lg"
              isOpen={this.state.dayDropdownOpen}
              toggle={this.dayToggle}
            >
              <DropdownToggle caret>{this.state.dayText}</DropdownToggle>
              <DropdownMenu>{datePicker}</DropdownMenu>
            </Dropdown>
          </DaySelector> */}
        </div>
        <div id="schedule" style={{ zIndex: 100, position: 'relative' }}>
          <h1 style={{ textAlign: 'center', textTransform: 'uppercase', margin: 12 }}>Schedule</h1>
          <Container fluid>
            <Row>{schedule_columns}</Row>
          </Container>
          <FootNote>{t.footnote}</FootNote>
        </div>
        <AppDownload />
        <Strap>
          <Title>Pure Fit Ottawa - Centretown</Title>
          <SubTitle>{t.new_to_yoga_strap_subtitle}</SubTitle>
          <br />
          <p style={{ lineHeight: '2em' }}>
          Where fitness meets lifestyle. At Pure Fit we train not only to be stronger
physically, but mentally. We work, sweat and play hard, training for healthier
living. With an intelligent approach to small group fitness classes, we help you
get the results that you want.</p> <p style={{ lineHeight: '2em' }}>At Pure we're committed to the evolution of
YOU, helping you reach your goals and to feel better one sweat session at a
time.
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