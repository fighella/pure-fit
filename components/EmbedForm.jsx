import React, { Component } from 'react';
import styled from 'styled-components';
import { Form, Text, TextArea, Checkbox } from 'informed';
import ContactForm from '../components/ContactForm';
import { fonts, colors } from '../styles/variables';
import { AppContent } from '../data/content';

const t = AppContent.contact;

class EmbedForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      submitted: false,
      email: '',
      phone: '',
      comment: `I would like to know more about ${this.props.title}...`,
      name: '',
      honeypot: '',
      secretcode: '123',
      subscribed: true,
      username: 'username',
      from_page: props.from || window.location.pathname,
      enquiry_type: this.props.enquiry_type || 'General'
    };
  }

  render() {
    const form = (
      <Form
        id="state-form"
        onChange={formState => this.setState(formState.values)}
        onSubmit={() => this.setState({ submitted: true })}
      >
        {({ formState }) => (
          <div>
            <h4>{this.props.title}</h4>
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
              <label htmlFor="state-comment">Comment</label>
              <br />
              <TextArea
                field="comment"
                id="state-comment"
                cols={36}
                rows={6}
                placeholder={`I would like to know more about ${this.props.title}...`}
                style={{ border: '1px solid #ccc', width: '95%' }}
              ></TextArea>
            </p>
            <p>
              <Checkbox field="state-subscribed" id="state-subscribed" value='checked' /> Yes, I'd also like to hear more from Pure Yoga Ottawa.
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
    return (
      <FormBlock>
      {this.state.submitted ? 'Thank you for your message. Someone will get back to you shortly.' : form}
      </FormBlock>
    );
  }
}

const FormBlock = styled.div`
  background: #fff;
  border: 1px solid #eee;
  box-shadow: 0 0 3px #efefef;
  padding: 1em;
  border-radius: 8px;
  margin: 1em;

`

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

export default EmbedForm;
