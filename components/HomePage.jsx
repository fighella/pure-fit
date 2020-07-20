import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Row, Col } from 'reactstrap';
import { ScheduleBanner } from './schedule/Banner';
import { Banner } from './Banner';
import { Schedule } from './Schedule';
import { AppContent as t } from '../data/content';
import PureData from '../utils/src';
import { AppDownload } from './AppDownload';
import { NewToYogaStrap } from './NewToYogaStrap';
import { Instafeed } from './Instafeed';
import BlogCollection from './BlogCollection';
import { AboutPureStrap } from './AboutPureStrap';
import { SingleColWrapper } from './SingleColWrapper';
import ScheduleWrapper from '../components/ScheduleWrapper';

const instaToken = '20307571.1677ed0.820c05f9cc724e7a97f743020470b81f'; //20307571.1677ed0.dd4b54d1b0c34463b9dd2c0c2adffcdc';
const NewToYogaWrapped = SingleColWrapper(NewToYogaStrap);
const BlogCollectionWrapped = SingleColWrapper(BlogCollection);
const InstafeedWrapped = SingleColWrapper(Instafeed);
const AboutPureStrapWrapped = SingleColWrapper(AboutPureStrap);
const ScheduleWrapped = ScheduleWrapper(Schedule, PureData);

const HomePage = props => {
  const schedule_locs = [
    { location: 'Pure Yoga Centretown', days: 3 },
  ];
  const schedule_columns = schedule_locs
  .map(schedule => {
    return (
      <Col
        key={`schedule_${schedule.location}`}
        style={{ maxWidth: '95%', margin: '0 auto 1em' }}
      >
        <ScheduleWrapped
          name={schedule.location}
          location={schedule.location}
          day={'Today'}
          days={1}
          full_link={true}
        />
      </Col>
    );
  });
  const schedule = (
    <div id="schedule" style={{ maxWidth: '98%', margin: '0 auto' }}>
      <div className="page-header">
        <div className="schedule-heading">
          <h2 className="superHeader">{t.hot_yoga_schedule}</h2>
          <p>{t.one_pass}</p>
        </div>
        <ScheduleBanner />
        <CovidBanner>
      <div><h4>COVID 19 Information. Please Read: Important Information about our reopening.</h4></div>

      <ul>
      <li>Classes pre-registration only. </li>
      <li>5 day booking window to sign up for classes</li>
      <li>Late cancellations fee. If you no-show or late cancel you will be charged</li>
      <li>Please arrive NO MORE than 15min prior to classes</li>
      <li>Do not enter the building if you or someone you live with has any covid 19 symptoms </li>
      <li>If you have been travelling we ask that you do not return to practice until you have quarantined for 2 weeks</li>
      <li>Maintain physical distancing between staff and students at all times</li>
      <li>Show up ready to practice. There will be no use of studio mats, towels or props at this time.</li>
      <li>Come with a full water bottle</li>
      <li>You will be required to wear a mask until class time begins</li>
      <li>You will be required to sanitize your hands upon entering the building</li>
      <li>Our practice rooms will NOT have the heat on</li>
      <li> Our room will maintain a minimum of 6 feet of physical distancing from a standing position</li>
      <li>Minimal use of changerooms</li>
      <li>No showers for the time being</li>
      <li>No cash will be accepted, all booking will be online</li>
      <li>The heat will be off until further notice</li>
        
      </ul></CovidBanner>,
        
      </div>
      <Row>
      {schedule_columns}
      </Row>
      <FootNote>{t.footnote}</FootNote>
    </div>
  );
  const sections = [
    <Banner key={1} />,
    schedule,
    <AppDownload />,
    <NewToYogaWrapped fluid fullWidth />,
    <BlogCollectionWrapped />,
    <AboutPureStrapWrapped />,
    <InstafeedWrapped fluid fullWidth const accessToken={instaToken} />
  ].map(section => section);
  return <div style={{ background: '#F5F7F3' }}>{sections}</div>;
};

const CovidBanner = <div>Some Banner</div>

HomePage.propTypes = {
  classes: PropTypes.shape.isRequired,
  loaded_classes: PropTypes.shape.isRequired
};

const FootNote = styled.p`
  font-size: 12px;
  margin: 1em auto;
  text-align: center;
  font-style: italic;
`;

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
`

export default HomePage;
