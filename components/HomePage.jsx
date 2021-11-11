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
import { AboutPureStrap } from './AboutPureStrap';
import { SingleColWrapper } from './SingleColWrapper';
import ScheduleWrapper from '../components/ScheduleWrapper';
import styled from 'styled-components';

const AboutPureStrapWrapped = SingleColWrapper(AboutPureStrap);
const ScheduleWrapped = ScheduleWrapper(Schedule, PureData);

function HomePage(props) {
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
