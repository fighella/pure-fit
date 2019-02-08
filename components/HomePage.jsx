import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Container, Row, Col } from 'reactstrap';
import { Banner } from './Banner';
import { Schedule } from './Schedule';
import { AppLocations } from '../data/locations';
import { AppContent as t } from '../data/content';
import { AppDownload } from './AppDownload';
import { NewToYogaStrap } from './NewToYogaStrap';
import { Instafeed } from './Instafeed';
import BlogCollection from './BlogCollection';
import { AboutPureStrap } from './AboutPureStrap';
import { SingleColWrapper } from './SingleColWrapper';

const instaToken = '20307571.1677ed0.dd4b54d1b0c34463b9dd2c0c2adffcdc';
const NewToYogaWrapped = SingleColWrapper(NewToYogaStrap);
const BlogCollectionWrapped = SingleColWrapper(BlogCollection);
const InstafeedWrapped = SingleColWrapper(Instafeed);
const AboutPureStrapWrapped = SingleColWrapper(AboutPureStrap);

const HomePage = props => {
  const { classes, loaded_classes } = props;
  const schedules = AppLocations.all.map(_loc => (
    <Col key={`${_loc.name}`}>
      {' '}
      <Schedule
        name={_loc.name}
        location={_loc.name}
        day="Today"
        classes={classes}
        loaded_classes={loaded_classes}
      />
    </Col>
  ));
  const schedule = (
    <div id="schedule">
      <div className="page-header">
        <div className="schedule-heading">
          <h2 className="superHeader">{t.hot_yoga_schedule}</h2>
          <p>{t.one_pass}</p>
        </div>
      </div>
      <Container fluid>
        <Row>{schedules}</Row>
      </Container>
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
