import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Socials from '../components/Socials';
import NewsletterStrap from './NewsletterStrap';
import AppNav from '../data/nav';

const footerLinks = AppNav.footer.map(link => (
  <a href={link.link} key={link.link} alt="Footer Link">
    {link.name}
  </a>
));

const Footer = () => (
  <React.Fragment>
    <NewsletterStrap />
    
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
        &copy; 2020 Pure Fit Ottawa
      </Col>
    </Row>
  </Container>
  </React.Fragment>
);

export default Footer;
