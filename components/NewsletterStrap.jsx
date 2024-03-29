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
      noValidate
    >
      <div style={{ position: 'absolute', left: '-5000px' }} aria-hidden="true">
        <input
          type="text"
          name="b_aecaba1342217654b91790ed1_3c7af5a2a1"
          tabIndex="-1"
          value=""
          readOnly
        />
      </div>
      <div id="mce-responses" className="clear">
        <div
          className="response"
          id="mce-error-response"
          style={{ display: 'none' }}
        />
        <div
          className="response"
          id="mce-success-response"
          style={{ display: 'none' }}
        />
      </div>
      <FlexRow>
        <EmailInput
          type="email"
          name="EMAIL"
          className="required email"
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
    <br/>
    <div style={{ background: '#efefef', margin: '20px auto 0', padding: 30, color: '#111'   }}>
      
      <h3>Land Acknowledgement</h3>
    <p>
At Pure we acknowledge that we move, practice & teach on the unceded and traditional land of the Algonquin Anishinabe, now known as Ottawa. This acknowledgment only becomes meaningful when combined with accountable relationships and informed actions. This acts only as a first step in honouring the unsurrendered land we operate on. We continue to honour the people, elders, and Indigenous ancestors of this land.</p>
</div>
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
  padding: 4em 8em 1em;
  @media (max-width: 500px) {
    padding: 4em 1em 1em;
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