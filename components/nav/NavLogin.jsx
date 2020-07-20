import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { navHeading } from '../../utils/nav';
import { AppContent as tt } from '../../data/content';
const t = tt.login;
export class NavLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      classes: 'Intro'
    };
  }
  setLocation = loc => {
    this.setState({ classes: loc });
  };

  render() {
    return (
      <Row>
        <Col xs={9}>
          {navHeading('Mindbody')}
          <p>{t.sub_title}</p>
          <p>
            {t.account_difficulties} <a href="/contact">Contact Us</a>
          </p>
          <p>
            MindBody <a href="https://clients.mindbodyonline.com/classic/ws?studioid=920410">Login</a>
          </p>
        </Col>
        <Col xs={3}>
          <div id="loginLinks">
            <div>
              {navHeading('Already a member?')}
              <p>
                <a
                  className="btn btn-primary btn-red pureButton btn-sm"
                  href="/login"
                >
                  Login
                </a>
              </p>
            </div>
            {navHeading('New to Pure?')}
            <p>
              <a className="btn btn-primary btn-red pureButton btn-sm" href="/new">
                Sign Up
              </a>
            </p>
          </div>
        </Col>
      </Row>
    );
  }
}
