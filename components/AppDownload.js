import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { ScheduleDownloadBlock } from './layout/helpers';
import { AppContent as t } from '../data/content';

export const AppDownload = () => {
  return (
    <ScheduleDownloadBlock>
    <Container>
      <Row>
        <Col style={{ textAlign: 'center' }}>
          <h4>{t.apps}</h4>
          <a href="https://itunes.apple.com/ca/app/pure-yoga-ottawa/id656301363?mt=8" target="_blank">
            <img
              src="/static/app_store.png"
              alt="Download on iPhone"
              style={{ maxWidth: 200, margin: 10 }}
            />
          </a>
          <a href="https://play.google.com/store/apps/details?id=com.fitnessmobileapps.pureyogaottawa&hl=en_CA" target="_blank">
            <img
              src="/static/google_store.png"
              alt="Download on Google Play"
              style={{ maxWidth: 200, margin: 10 }}
            />
          </a>
        </Col>
      </Row>
    </Container>
    </ScheduleDownloadBlock>
  );
};
