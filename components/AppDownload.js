import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { AppContent as t } from '../data/content';

export const AppDownload = () => {
  return (
    <Container>
      <Row>
        <Col style={{ textAlign: 'center' }}>
          <h4>{t.apps}</h4>
          <a href="/">
            <img
              src="/static/app_store.png"
              alt="Download on iPhone"
              style={{ maxWidth: 200, margin: 10 }}
            />
          </a>
          <a href="/">
            <img
              src="/static/google_store.png"
              alt="Download on Google Play"
              style={{ maxWidth: 200, margin: 10 }}
            />
          </a>
        </Col>
      </Row>
    </Container>
  );
};
