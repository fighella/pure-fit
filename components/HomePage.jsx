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


export default HomePage;
