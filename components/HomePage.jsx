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
import { Instafeed } from './Instafeed';
import BlogCollection from './BlogCollection';
import { AboutPureStrap } from './AboutPureStrap';
import { SingleColWrapper } from './SingleColWrapper';
import ScheduleWrapper from '../components/ScheduleWrapper';
import styled from 'styled-components';


const instaToken = '1933711431.1677ed0.7f028f409a604f289fe188f0319619e5';
const NewToYogaWrapped = SingleColWrapper(NewToYogaStrap);
const BlogCollectionWrapped = SingleColWrapper(BlogCollection);
const InstafeedWrapped = SingleColWrapper(Instafeed);
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
      <li>Classes pre-registration only. </li>
      <li>5 day booking window to sign up for classes</li>
      <li>Please arrive NO MORE than 15min prior to classes</li>
      <li>Do not enter the building if you or someone you live with has any covid 19 symptoms </li>
      <li>If you have been travelling we ask that you do not return to practice until you have quarantined for 2 weeks</li>
      <li>Maintain physical distancing between staff and students at all times</li>
      <li>Show up ready to practice. There will be no use of studio mats, towels or props at this time.</li>
      <li>Come with a full water bottle</li>
      <li>You will be required to wear a mask until class time begins</li>
      <li>You will be required to sanitize your hands upon entering the building</li>
      <li>Our practice rooms will NOT have the heat on</li>
      <li>Our room will maintain a minimum of 6 feet of physical distancing from a standing position</li>
      <li>Minimal use of changerooms</li>
      <li>No showers for the time being</li>
      <li>No cash will be accepted, all booking will be online</li>
      <li>The heat will be off until further notice</li>
      <li>Late cancellations fee. If you no-show or late cancel you will be charged*. <br/><small>Important: Members will be charged $20 and if you are on a class package or drop in, your class will be used.</small></li>
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
    <AboutPureStrapWrapped />,
    <InstafeedWrapped fluid fullWidth const accessToken={instaToken} />
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
`

export default HomePage;
