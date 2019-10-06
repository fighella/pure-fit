import React, { Component } from 'react';
import styled from 'styled-components';
import textile from 'textile-js';

const contentful = require('contentful');
const FIT_SPACE_ID = "qt03r4b2rdnc";
const FIT_ACCESS_TOKEN =
  "wUysDGvbczx4bTZ3zvzq1ELlBvql7W09jMc4_qZeggo";
const fit_client = contentful.createClient({
  space: FIT_SPACE_ID,
  accessToken: FIT_ACCESS_TOKEN
});

export class ScheduleBanner extends Component {
constructor(props) {
  super(props);
  this.state = {
    message: '',
    message_active: false
  };
}
componentDidMount() {
  this.grabBanner();
}
grabBanner = async () => {
    try {
      const response = await fit_client.getEntry('5oddNzFdcZIv3fGU0I2PFj')
      let json = await response;
      this.setState({
        message: json.fields.scheduleMessage,
        message_active: json.fields.scheduleMessageOn
      })
    } catch { 
      console.log('noFetchError()')
    }
}

render() {
    const msg = this.state.message_active ? <Banner  dangerouslySetInnerHTML={{ __html: textile(this.state.message) }} /> : false
    return msg
  }
}

const Banner = styled.div`
  text-align: center;
  padding: 8px 20px;
  display: block;
  max-width: 75%;
  margin: 2em auto 1em;
  border: 1px solid palevioletred;
  font-weight: normal;
  text-transform: none;
  p { margin: 0; padding: 0;}
  strong, strong span { font-weight: 800; }
`

const BannerTitle = styled.h3`
  @media (max-width: 376px) {
    font-size: 60px !important;
    letter-spacing: 2px !important;
  }

`