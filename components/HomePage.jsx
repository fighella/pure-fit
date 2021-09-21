import React from 'react';
import { FootNote, ScheduleBlock } from './layout/helpers';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { ScheduleBanner } from './schedule/Banner';
import { Banner } from './Banner';
import { Schedule } from './Schedule';
import { AppContent as t } from '../data/content';
import PureData from '../utils/src';
import { AppDownload } from './AppDownload';
import { NewToYogaStrap } from './NewToYogaStrap';
import BlogCollection from './BlogCollection';
import { AboutPureStrap } from './AboutPureStrap';
import { SingleColWrapper } from './SingleColWrapper';
import ScheduleWrapper from '../components/ScheduleWrapper';
import styled from 'styled-components';


const instaToken = '1933711431.1677ed0.7f028f409a604f289fe188f0319619e5';
const NewToYogaWrapped = SingleColWrapper(NewToYogaStrap);
const BlogCollectionWrapped = SingleColWrapper(BlogCollection);
const AboutPureStrapWrapped = SingleColWrapper(AboutPureStrap);
const ScheduleWrapped = ScheduleWrapper(Schedule, PureData);

const HomePage = props => {
  const schedule_locs = [
    { location: 'Pure Fit', days: 7 },
  ];
  const schedule_columns = schedule_locs
  .map(schedule => {
    return (
      <Col
        key={`schedule_${schedule.location}`}
        style={{ maxWidth: '100%', margin: '0 auto 1em' }}
      >
        <ScheduleWrapped
          name={schedule.location}
          location={schedule.location}
          day={'Today'}
          days={7}
          full_link={true}
        />
      </Col>
    );
  });
  const schedule = (
    <ScheduleBlock>
      <div id="schedule">
        <div className="page-header">
          <div className="schedule-heading">
            <h2 className="superHeader">{t.hot_yoga_schedule}</h2>
            <p>{t.one_pass}</p>
          </div>
          <ScheduleBanner />
        </div>

 
        <CovidBanner>
      <div><h4>COVID 19 Information. Please Read: Important Information about our reopening.</h4></div>

      <ul>
      <li>Class size is set at 50% capacity, with 2 metres of physical distancing.</li>

<li>Masks must be worn in studio at all times until class begins.</li>

<li>Classes are open to local members only. No visitors or travelers from outside the Ottawa-Gatineau region will be permitted in class at this time.</li>

<li>Pre-registration required - no walk-ins. Online booking opens 5 days in advance at 12:00AM.</li>

<li>Doors will open 15 minutes before class. Please do not arrive any earlier.</li>

<li>Cancellation policy: All bookings must be cancelled at least 8 hours before class. Late cancellations will be subject to a $20 fee. No-shows will be subject to a $25 fee.</li>

<li>Waitlist in effect. Waitlist spots are treated like a regular booking - cancel your waitlist spot if you can no longer attend.</li>

<li>Change rooms and showers are open. Shower towels available for rent.</li>

<li>COVID cleaning procedures remain in place using hospital-grade disinfectant. Thorough cleaning in between every class and hand sanitizer provided throughout the studio.</li>

<li>COVID basics: Do not attend class if you are sick, if you have been in contact with someone who's been sick, or if you have traveled internationally in the last 14 days.</li>
      </ul>

        
     </CovidBanner>,
        

        <Row>
          {schedule_columns}
        </Row>
        <FootNote>{t.footnote}</FootNote>

      </div>
    </ScheduleBlock>
  );
  const sections = [
    <Banner key={1} />,
    schedule,
    <AppDownload />,
    <AboutPureStrapWrapped />
  ].map(section => section);
  return <div style={{ background: '#1D1F24' }}>{sections}</div>;
};


HomePage.propTypes = {
  classes: PropTypes.shape.isRequired,
  loaded_classes: PropTypes.shape.isRequired
};


const CovidBanner = styled.div`

  .contents {display: flex; }
  position: relative;
  background: #fff;
  border: 2px dashed #B19C95;
  max-width: 1200px;
  h4 { background: #B19C95; padding: 1em; color: #fff; text-transform: uppercase; margin-bottom: 22px; text-align: center; }
  img { width: 350px; }
  padding: 0.5em 0.5em 0.5em;
  margin: 12px auto;
  ul { display: flex; width: 100%; flex-wrap: wrap; }
  ul li {  width: 40%; margin-right: 4%; display: block; margin-bottom: 12px; position: relative;  }
  ul li:before { position: absolute; left: -22px; top: 0; content: '⚪ ' }
  margin-top: -40px;
  z-index: 100;
  @media (max-width: 768px) {
    ul { display: flex; width: 100%; flex-wrap: wrap; }
  ul li {  width: 100%; margin-right: 4%; display: block; margin-bottom: 12px; position: relative;  }
  }
  p { color: #333; text-align: center; padding: 20px;}
`

export default HomePage;
