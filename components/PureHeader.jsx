import React from 'react';
import styled from 'styled-components'
import TopStrap from '../components/TopStrap'
import PureNavBar from '../components/PureNavBar'


const PureHeader = () => <div>
    <TopStrap />
    <PureNavBar classes={[]} loaded={false} />
  </div>;


export default PureHeader;

const Mep = styled.div`
  color: red;
`