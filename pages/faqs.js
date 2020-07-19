import React, { Component } from 'react';
import Hero from '../components/Hero';
import { Container } from 'reactstrap';
import Layout from '../components/Layout';
import { Faqs, FaqAnswer, FaqQuestion, FaqElement } from '../components/layout/helpers';
import { getContentfulPage } from '../components/contentful/Content';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

const FaqsPage = (props) => {
  console.log('Prozzas',props);
  const { faqs } = props.content;
  const faqs_section =  faqs.map((faq, index) => {  
    if(faq.fields){
    const { question, answer } = faq.fields
    console.log(faq)
    return(
      <Faq
        key={`faq_${index}`}
        question={question}
        answer={answer}
      />
    )}}
  );
  return (
    <Layout>
      <div>
        <Hero custom_imgs={['https://s3.ca-central-1.amazonaws.com/purefitottawa.com/images/fit_160.jpg']}
          title={'Faqs.'}
          subtitle={'Fitness done differently.'}
          compact />
        <Container>
          <Faqs>{faqs_section}</Faqs>
        </Container>
      </div>
    </Layout>
  )
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
        <FaqQuestion>{this.props.question} {!this.state.open ? <span style={{ color: '#f2675d', fontSize: '16px' }}>▼</span> : false}</FaqQuestion>
        <FaqAnswer open={this.state.open}>{documentToReactComponents(this.props.answer)}</FaqAnswer>
      </FaqElement>
    );
  }
}

FaqsPage.getInitialProps = function() {
  return getContentfulPage('2izqOv2WErFYl1DoqP5Ou1');
}

export default FaqsPage;