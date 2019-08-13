import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { navHeading } from '../../utils/nav';
import ReactPlayer from 'react-player';
import Link from 'next/link'

const contentful = require('contentful');
const SPACE_ID = 'hmbn1d6s90j4'
const ACCESS_TOKEN = 'ad22c819dfadabb93437878e689131d7e64b841bc6d5ee52f333c02fcfee5d8f'
const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
})

export class NavStream extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: []
    }
  }
  componentDidMount() {
    this.fetchVideos();
  }
  fetchVideos = async () => {
    console.log('Grabbin')
    try {
      const response = await client.getEntries(
        { 
          content_type: 'video',
          'fields.active[ne]': 'false'
        }
      )
      let json = await response;
      this.setState({
        videos: json.items.reverse()
      })
    } catch { 
      console.log('noFetchError()')
    } 
  
  }
  render() {
    console.log('Vid Dropdown');
    console.log(this.state.videos);
    console.log('/Vid Dropdown');
    const vids = this.state.videos.slice(0,3).map((item, index) => (
      <Col xs={3} id={item.fields.title}>
       <MiniVideo
                name={item.fields.title}
                url={item.fields.vimeo}
              />
      </Col> 
    ))
    return (
      <Row>
        <Col xs={3}>
          <h3>+ Pure Yoga Online</h3>
          <p>
            <ul>
              <li>
                + Unlimited access to all regular online classes  
              </li>
              <li>
              + New classes added regularly
              </li>
              <li>
                + Join the Pure Yoga FB Community
              </li>
              <li>
                </li>
                <li>
                  + 5 min. tutorials to 90 min. advanced classes to prenatal
                </li>
                <li>
            + Practice Anywhere, Anytime.
                  </li>
            </ul>
          </p>
          {navHeading('View All', '/online')}
        </Col>
        <Col xs={9}>
          <h4>Online Class Samples</h4>
          <Row>
            {vids}
          </Row>
          <br />
        </Col>
      </Row>
    );
  }
}

export default class MiniVideo extends Component {
  render() {
    return (
      <div class="mini-video">
        <ReactPlayer
          url={this.props.url}
          width="100%"
          height="200px"
          light
          controls={false}
          style={{ maxWidth: '100%' }}
        />
        {this.props.name}
      </div>
    );
  }
}
