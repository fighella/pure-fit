import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Text, TextArea } from 'informed';
import ContactForm from '../components/ContactForm';
import Hero from '../components/Hero';
import { fonts, colors } from '../styles/variables';
import { AppLocations } from '../data/locations';
import { AppContent } from '../data/content';
import Layout from '../components/Layout';

const t = AppContent.contact;

class ContactPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      phone: '',
      comment: '',
      name: '',
      honeypot: '',
      secretcode: '123',
      username: 'username',
      from_page: 'pureyogaottawa',
      enquiry_type: 'Pure Yoga Westboro'
    };
  }

  render() {
    const helpLinks = [
      { name: 'Faqs', link: '/faqs' },
      { name: 'New to Yoga', link: '/new' },
      { name: 'Mindbody Login', link: 'https://clients.mindbodyonline.com/asp/su1.asp?fl=true&tabID=2' }
    ];

    const form = (
      <Form
        id="state-form"
        onChange={formState => this.setState(formState.values)}
      >
        {({ formState }) => (
          <div>
            <p>
              <label htmlFor="state-name">Your Name</label>
              <br />
              <Text field="name" id="state-name" />
            </p>
            <p>
              <label htmlFor="state-email">Email</label>
              <br />
              <Text field="email" id="state-email" />
            </p>
            <p>
              <label htmlFor="state-phone">Phone Number</label>
              <br />
              <Text field="phone" id="state-phone" />
            </p>
            <p>
              <label htmlFor="state-message">Message</label>
              <br />
              <TextArea
                field="message"
                id="state-message"
                cols={36}
                rows={10}
                style={{ border: '1px solid #ccc', width: '95%' }}
              />
            </p>
            <SendButton
              onClick={() => new ContactForm(this.state).sendForm()}
              type="submit"
            >
              {t.send}
            </SendButton>
            <br />
            <br />
            <br />
          </div>
        )}
      </Form>
    );
    const links = helpLinks.map((link, index) => (
      <HelpfulLink
        key={`link_${index}`}
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        {link.name}
      </HelpfulLink>
    ));
    const locs = AppLocations.all.map((i, index) => {
      return (
        <FlexStackCol key={i.phone}>
          <Loc>
              <h4>{i.name}</h4>
              {i.address}
              <br />
              {i.postcode}
              <br />
              {i.phone}
          </Loc>
        </FlexStackCol>
      );
    });

    return (
      <Layout>
      <div style={{ background: '#fff' }}>
        <Hero imgs={['team_137']} title={t.title} compact faded />
        <FlexRow>
          <FlexCol>
            <div>
              <MainHeading>{t.subtitle}</MainHeading>
              <p>{t.content}</p>
              {form}
            </div>
          </FlexCol>
          <FlexCol>
            <FlexCol>
              <div>
                <SecondaryHeading>{t.helptitle}</SecondaryHeading>
                <br />
                {links}
              </div>
            </FlexCol>
            <FlexCol>
              <div>
                <SecondaryHeading>{t.locations}</SecondaryHeading>
                <FlexStack>{locs}</FlexStack>
              </div>
            </FlexCol>
          </FlexCol>
        </FlexRow>
        <br />
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

const SecondaryHeading = styled.h2`
  ${fonts.primary};
  font-weight: 300;
  font-size: 1.2em;
`;

const SendButton = styled.button`
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

const FlexStack = styled.div`
  display: flex;
  flex-direction: column;
`;

const FlexStackCol = styled.div`
  width: 100%;
`;

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 95%;
  margin: 1em auto;
`;

const FlexCol = styled.div`
  width: 50%;
  @media (max-width: 500px) {
    width: 100%;
  }
  display: flex;
`;

const Loc = styled.div`
  padding: 1em 0 0.5em;
  font-family: ${fonts.secondary};
  width: 100%;
  color: ${colors.black};
  h4 {
    ${fonts.highlight};
    font-weight: 550;
  }
`;

const HelpfulLink = styled.a`
  border-collapse: collapse;
  color: #333;
  display: block;
  border-bottom: 0.5px solid #efefef;
  border-top: 0.5px solid #efefef;
  padding: 0.5em 0;
`;

export default ContactPage;
