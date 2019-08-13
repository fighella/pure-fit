import React from 'react';
import { Container } from 'reactstrap';
import PureData from '../utils/src';
import PriceGrid from './PriceGrid';
import PricingData from './PricingData';

const Pricing = PricingData(PriceGrid, PureData);

const MembersPage = () => (
  <div style={{ background: '#fafafa' }}>
    <Container style={{ textAlign: 'center' }} />
    <Pricing />
  </div>
);

export default MembersPage;
