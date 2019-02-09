import React, { Component } from 'react';
import Hero from '../components/Hero';
import { Container } from 'reactstrap';
import styled from 'styled-components';
import { fonts } from '../styles/variables';
import { AppContent } from '../data/content';
import Layout from '../components/Layout';

class FaqsPage extends Component {
  render() {
    const t = AppContent.faqs;
    var faqs = t.questions.map((faqs, index) => {
      return (
        <Faq
          key={`faq_${index}`}
          question={faqs.question}
          answer={faqs.answer}
        />
      );
    });
    return (
      <Layout>
      <div style={{ background: '#fff' }}>
        <Hero imgs={['team_101']} title={t.title} subtitle={t.subtitle} faded />
        <br />
        <Container>
          <Header>Faqs</Header>
          <Faqs>{faqs}</Faqs>
          <p>{t.faq_text}</p>
          <br />
          <br />
        </Container>
      </div>
      </Layout>
    );
  }
}

class Faq extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }
  toggleAnswer = () => {
    this.setState({ open: this.state.open ? false : true });
  };
  render() {
    return (
      <FaqElement open={this.state.open} onClick={() => this.toggleAnswer()}>
        <FaqQuestion>{this.props.question} {!this.state.open ? <span style={{ color: '#ccc', fontSize: '12px', fontStyle: 'oblique' }}>Click to expand</span> : false}</FaqQuestion>
        <FaqAnswer open={this.state.open}>{this.props.answer}</FaqAnswer>
      </FaqElement>
    );
  }
}

const FaqElement = styled.li`
  transition: all 0.5s;
  margin: 0;
  padding: 0;
  border-top: 1px solid #fff;
  list-style: none;
  font-size: 18px;
  border-top: 1px solid #efefef;
  padding: 1em;
  ${props =>
    props.open ? 'border-left: 3px solid pink; padding-left: 1em;' : ''}
`;
const Faqs = styled.ul`
  margin: 0;
  padding: 0;
`;

const FaqQuestion = styled.span`
  cursor: pointer;
  display: block;
  font-weight: bold;
`;

const FaqAnswer = styled.span`
  display: ${props => (props.open ? 'block' : 'none')};
`;

const Header = styled.h1`
  text-align: center;
  font-size: 4em;
  max-width: 60%;
  margin: 0.5em auto;
  ${fonts.highlight}
`;

export default FaqsPage;