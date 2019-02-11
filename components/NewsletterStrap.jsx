import React, { Component } from 'react';
import { AppContent as t } from '../data/content';
import { colors } from '../styles/variables';
import styled from 'styled-components';

const url =
  'https://Pureyogaottawa.us5.list-manage.com/subscribe/post?u=aecaba1342217654b91790ed1&id=3c7af5a2a1';

class NewsletterStrap extends Component {
  render() {
    return (
      <NewsletterForm>
        <SubscribeText>{t.subscribe.text}</SubscribeText>
        <FlexRow>
          <CustomForm url={url} />
        </FlexRow>
      </NewsletterForm>
    );
  }
}

const CustomForm = () => (
  <div>
    <form
      action="https://Pureyogaottawa.us5.list-manage.com/subscribe/post?u=aecaba1342217654b91790ed1&amp;id=3c7af5a2a1"
      method="post"
      id="mc-embedded-subscribe-form"
      name="mc-embedded-subscribe-form"
      className="validate"
      target="_blank"
      novalidate
    >
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input
          type="text"
          name="b_aecaba1342217654b91790ed1_3c7af5a2a1"
          tabIndex="-1"
          value=""
        />
      </div>
      <div id="mce-responses" class="clear">
        <div
          class="response"
          id="mce-error-response"
          style={{ display: 'none' }}
        />
        <div
          class="response"
          id="mce-success-response"
          style={{ display: 'none' }}
        />
      </div>
      <FlexRow>
        <EmailInput
          type="email"
          name="EMAIL"
          class="required email"
          id="mce-EMAIL"
        />
        <SignUpLink
          type="submit"
          value="Subscribe"
          name="subscribe"
          id="mc-embedded-subscribe"
          className="btn btn-sm pure-button"
        />
      </FlexRow>
    </form>
  </div>
);

const FlexRow = styled.div`
  display: flex;
  margin: 1em auto;
  text-align: center;
  justify-items: center;
  align-items: center;
  justify-content: center;
`;

const NewsletterForm = styled.div`
  text-align: center;
  background: #333;
  color: #fff;
  h3 {
    font-family: futura-pt, sans-serif;
    font-weight: 450;
  }
  padding: 4em 8em;
  @media (max-width: 500px) {
    padding: 4em 1em;
  }
  margin: 0;
`;

const EmailInput = styled.input`
  padding: 0.3em;
  border: none;
  min-width: 250px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

const SignUpLink = styled.input`
  background: ${colors.pink};
  color: #333;
  text-transform: uppercase;
  padding: 0.4em 1.5em;
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
`;

const SubscribeText = styled.h3`
  @media (max-width: 500px) {
    font-size: 16px;
  }
`;


export default NewsletterStrap;