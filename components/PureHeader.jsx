import React from 'react';
import styled from 'styled-components'
import TopStrap from '../components/TopStrap'
import PureNavBar from '../components/PureNavBar'


export default () => <div>
    <TopStrap />
    <PureNavBar classes={[]} loaded={false} />
  </div>

  const Mep = styled.div`
    color: red;
  `