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

const HoldingHomePage = props => {
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
      </div>
      <Row>
      {schedule_columns}
      </Row>
      <FootNote>{t.footnote}</FootNote>
    </div>
  );
  const sections = [
    <Holder>Coming Soon... Watch this space.</Holder>,
    <InstafeedWrapped fluid fullWidth const accessToken={instaToken} />
  ].map(section => section);
  return <div style={{ background: '#F5F7F3' }}>{sections}</div>;
};

HoldingHomePage.propTypes = {
  classes: PropTypes.shape.isRequired,
  loaded_classes: PropTypes.shape.isRequired
};

const FootNote = styled.p`
  font-size: 12px;
  margin: 1em auto;
  text-align: center;
  font-style: italic;
`;

const Holder = styled.div`
  padding: 20vh 2em 25vh 2em;
  background: #333;
  text-align: center;
  color: #fff;
  font-size: 10vw;
`

export default HoldingHomePage;
