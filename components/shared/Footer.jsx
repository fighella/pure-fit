import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Socials from '../Socials';
import AppNav from '../data/nav';

const footerLinks = AppNav.footer.map(link => (
  <a href={link.link} key={link.link} alt="Footer Link">
    {link.name}
  </a>
));

const Footer = () => (
  <Container id="footer" fluid>
    <Row>
      <Col md={9} xs={12} className="footer-links">
        <Socials />
        {footerLinks}
        {' | '}
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.pureyogaottawa.com/p/terms-and-conditions"
        >
          Terms
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://docs.pureyogaottawa.com/p/privacy-policy"
        >
          Privacy
        </a>
      </Col>
      <Col md={3} xs={12} className="footer-links">
        &copy; 2019 Pure Yoga Ottawa
      </Col>
    </Row>
  </Container>
);

export default Footer;
