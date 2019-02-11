import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
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

const instaToken = '20307571.1677ed0.dd4b54d1b0c34463b9dd2c0c2adffcdc';
const NewToYogaWrapped = SingleColWrapper(NewToYogaStrap);
const BlogCollectionWrapped = SingleColWrapper(BlogCollection);
const InstafeedWrapped = SingleColWrapper(Instafeed);
const AboutPureStrapWrapped = SingleColWrapper(AboutPureStrap);
const ScheduleWrapped = ScheduleWrapper(Schedule, PureData);

const HomePage = props => {
  const schedule_locs = [
    { location: 'Pure Yoga Westboro', days: 3 },
    { location: 'Pure Yoga Centretown', days: 3 },
    { location: 'Pure Yoga Downtown', days: 3 }
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
    <div id="schedule">
      <div className="page-header">
        <div className="schedule-heading">
          <h2 className="superHeader">{t.hot_yoga_schedule}</h2>
          <p>{t.one_pass}</p>
        </div>
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

export default HomePage;
