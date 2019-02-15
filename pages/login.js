import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Text } from 'informed';
import { instanceOf } from 'prop-types';
import { withCookies, Cookies } from 'react-cookie';
import { fonts, colors } from '../styles/variables';
import { AppContent } from '../data/content';
import Layout from '../components/Layout';
import mbSessions from '../utils/sessions';

const t = AppContent.login;
const login_links = [
  {
    name: 'Manage My Info',
    link: 'https://clients.mindbodyonline.com/asp/su1.asp?fl=true&tabID=2'
  }
];

class LoginPage extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired
  };

  constructor(props) {
    super(props);
    const { cookies } = props;
    this.state = {
      username: '',
      password: '',
      message: '',
      logged_in: cookies.get('user_id') || '',
      action: cookies.get('user_id') ? '' : 'Please login below.'
    };
  }

  handleChange = event => {
    this.setState({ password: event.target.value, message: '' });
  };

  render() {
    const mbSession = new mbSessions(
      this.props,
      this.state.username,
      this.state.password,
      this
    );
    const form = (
      <Form
        id="state-form"
        onChange={formState => this.setState(formState.values)}
      >
        {({ formState }) => (
          <div>
            <p>
              <label htmlFor="state-username">Email</label>
              <br />
              <Text field="username" id="state-username" />
            </p>
            <p>
              <label htmlFor="state-password">Password</label>
              <br />
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleChange}
              />
            </p>

            <p>{this.state.message}</p>
            <LoginButton onClick={() => mbSession.login()} type="submit">
              {t.login}
            </LoginButton>
            <br />
            <small>{t.powered_by}</small>
          </div>
        )}
      </Form>
    );
    const links = login_links.map((link, index) => (
      <li>
        <a
          key={`link_${index}`}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
        >
          {link.name}
        </a>
      </li>
    ));
    const alreadyLoggedIn = (
      <div>
        <ul>{links}</ul>
        <LoginButton onClick={() => mbSession.logout()}>{t.logout}</LoginButton>
      </div>
    );
    return (
      <Layout>
        <div style={{ padding: '2em' }}>
        <MainHeading>{t.title}</MainHeading>
        <SubHeading>{t.subtitle}</SubHeading>
        <Helper>{this.state.action}</Helper>
        {this.state.logged_in ? alreadyLoggedIn : form}
        <br />
        <small>
          uid:
          {this.state.logged_in}
        </small>
        <p>
          <a href="https://clients.mindbodyonline.com/classic/ws?studioid=21952"></a>Login to Mindbody Direct here.
        </p>
      </div>
      </Layout>
    );
  }
}

const MainHeading = styled.h2`
  ${fonts.primary};
  font-weight: 300;
  font-size: 2em;
`;

const SubHeading = styled.h2`
  ${fonts.primary};
  font-size: 1.2em;
  letter-spacing: 1px;
  font-weight: 300;
  text-transform: uppercase;
`;

const LoginButton = styled.button`
  border-radius: 0px;
  margin: 0 auto;
  border: 1px solid ${colors.red};
  padding: 0.75em;
  text-align: center;
  ${fonts.primary};
  font-weight: 500;
  background: #fff;
  color: ${colors.red};
  transition: all 0.5s;
  &:hover {
    color: #fff;
    background: ${colors.pink};
    text-decoration: none;
  }
`;

const Helper = styled.p`
  ${fonts.highlight};
`;

export default withCookies(LoginPage);
