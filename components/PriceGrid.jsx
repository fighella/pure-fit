/* eslint-disable camelcase */
import React, { Component } from 'react';
import { Container, Row, Col, Modal, ModalBody } from 'reactstrap';
import styled from 'styled-components';
import textile from 'textile-js';
import { AppContent } from '../data/content';
import Layout from '../components/Layout';
import { fonts, colors } from '../styles/variables';
import Head from 'next/head'
const t = AppContent.members;

const PriceGrid = props => {
  const { featured_pricing, standard_pricing } = props;
  const featured = featured_pricing.reverse().map((price, index) => (
    <Col key={'featured_' + index} xs={12} md={4}>
      <PriceCard price={price} />
      <Spacer></Spacer>
    </Col>
  ));
  const standard = standard_pricing.map((price, index) => (
    <Col key={'standard_' + index} xs={12} md={3}>
      <PriceCard price={price} />
    </Col>
  ));
  return (
    <Layout>
      <Head>
        <title>
          Yoga Memberships &amp; Class Packs | Pricing, Student and Seniors Info | Pure Fit Ottawa
        </title>
        <meta property="og:title" content={`Join the Pure Fit Community | Pure Fit Ottawa`}/>
        <meta property="og:type" content="article" />
        <meta property="og:description" content="Fitness for Everybody. Memberships and Class Packs to suit you." />
        <meta property="og:url" content="https://www.purefitottawa.com/pricing/" />
      </Head>
    <Container>
    
      <div className="page-header">
        <div className="schedule-heading">
          <h2 className="superHeader">{t.memberships}</h2>
          <p>{t.memberships_subtitle}</p>
        </div>
      </div>
      <Row>{featured}</Row>
      <br />
      {/* <div className="page-header">
        <div className="schedule-heading">
          <h2 className="superHeader">{t.class_packages}</h2>
          <p>{t.class_packages_subtitle}</p>
        </div>
      </div> */}
      <Row>{standard}</Row>
      <PricingTerms>
      <div className="page-header" style={{ maxWidth: 800, margin: '0 auto' }}>
        <div className="schedule-heading">
          <h2 className="superHeader">{t.students_seniors}</h2>
          <br />
          <p>{t.discounts}</p>
          <h2 className="superHeader">Ages 16+ Welcome.</h2>
          <p>{t.age}</p>
          <h2 className="superHeader">Gift Cards</h2>
          <p>{t.gift_cards} <a href="/gift-cards" style={{ color: 'palevioletred' }}>Learn more &raquo;</a></p>
        </div>
      </div>
      </PricingTerms>
    </Container>
    </Layout>
  );
};

class PriceCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    const { price } = this.props;
    const conditions = ['*Terms and Conditions* \n', price.conditions].join('');
    return (
      <Card>
        <Modal
          style={{
            padding: 0,
            minWidth: '60%',
            border: 0,
            borderRadius: '12px',
            overflow: 'hidden'
          }}
          isOpen={this.state.modal}
          toggle={this.toggle}
        >
          <CardTitle>
            <span style={{ fontSize: '1.4em' }}>{price.title}</span>
          </CardTitle>
          <ModalBody>
            <a
              onClick={this.toggle}
              style={{ position: 'absolute', top: 5, right: 5 }}
            >
              x close
            </a>
            <Row>
              <Col xs={12} md={9}>
                <CardDesc>
                  {' '}
                  <h4>{price.short_description}</h4>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: textile(price.description)
                    }}
                  />
                </CardDesc>
                <CardConditions
                  dangerouslySetInnerHTML={{ __html: textile(conditions) }}
                />
              </Col>
              <Col xs={12} md={3}>
                <CardPrice>
                  $ {price.price} <CardPer />
                </CardPrice>
                <BookNow href={price.direct_link} target="_blank">
                  {t.call_to_action}
                </BookNow>
                <a onClick={this.toggle}>x close</a>
              </Col>
            </Row>
          </ModalBody>
        </Modal>
        <CardTitle>
          <span onClick={this.toggle}>{price.title}</span>
        </CardTitle>
        <CardPrice>
          $ {price.price} <CardPer />
        </CardPrice>
        <CardDesc>
          {price.short_description.split('\n').map((item, index) => (
            <p key={'i_' + index}>{item}</p>
          ))}
        </CardDesc>
        <TermsLink onClick={this.toggle}>Terms and Conditions Apply</TermsLink>
        <LearnMoreLink onClick={this.toggle}>
          <span>&nbsp;Learn More&nbsp;</span>
        </LearnMoreLink>
        <BookNow href={price.direct_link} target="_blank">
          {t.call_to_action}
        </BookNow>
        <br />
      </Card>
    );
  }
}

const Card = styled.div`
  text-align: center;
  background: #fff;
  box-shadow: 0 0 32px #333;
  overflow: hidden;
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-bottom: 24px solid #000;
`;

const CardTitle = styled.strong`
  display: block;
  height: 66px;
  vertical-align: center;
  display: flex;
  justify-content: center;
  text-align: center;
  align-items: center;
  span {
    ${fonts.primary};
    font-weight: 600;
    color: #fff;
    font-size: 1.1em;
  }
  background: #333;
  width: 100%;
`;

const CardPrice = styled.strong`
  display: block;
  border-bottom: 1px solid #f5f5f5;
  padding: 0.5em;
  text-align: center;
  ${fonts.primary};
  font-weight: 650;
  font-size: 1.8em;
  color: #666;
`;

const CardPer = styled.span`
  font-size: 0.6em;
`;

const CardDesc = styled.p`
  ${fonts.primary};
  color: #666;
  font-weight: normal;
  text-transform: none;
  line-height: 1.8em;
  margin: 1em;
`;

const TermsLink = styled.span`
  ${fonts.highlight};

  cursor: pointer;
`;
const LearnMoreLink = styled.span`
  ${fonts.primary};
  text-transform: none;
  color: #666;
  letter-spacing: 1px;
  font-weight: 300;
  padding: 1em;
  cursor: pointer;
  span {
    border-bottom: 1px solid #666;
    transition: all 0.5s;
    &:hover {
      background: #999;
      color: #fff;
    }
  }
`;

const BookNow = styled.a`
  display: block;
  ${fonts.primary};
  font-weight: 600;
  letter-spacing: 1px;
  font-size: 1em;
  text-align: center;
  background: #000;
  margin: 1em;
  padding: 1em;

  color: #fff;
  transition: all 0.5s;
  &:hover {
    opacity: 0.8;
    color: #333;
    text-decoration: none;
  }
`;

const CardConditions = styled.div`
  background: #efefef;
  padding: 1.2em;
`;

const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const FlexCol = styled.div`
  width: ${props => props.width}%;
`;

const PricingTerms = styled.div`
  * { color: #fff; }
`

const Spacer = styled.div`
  display: block;
  height: 22px;

`

export default PriceGrid;
