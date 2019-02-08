import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { navHeading } from '../utils/nav';
import ReactPlayer from 'react-player';

export class NavStream extends Component {
  render() {
    return (
      <Row>
        <Col xs={3}>
          Pure Yoga Online
          <p>Lorem Ipsum...Free trial</p>
          {navHeading('View All', 'https://online.pureyogaottawa.com')}
        </Col>
        <Col xs={9}>
          Latest Classes
          <Row>
            <Col>
              <MiniVideo
                name="15 Minute Sculpt"
                url="https://s3.amazonaws.com/pureyogaottawa.com/videos/15+minute+sculpt-Andrea+R.mp4"
              />
            </Col>
            <Col>
              <MiniVideo
                name="Advanced Techniques w/ Mike"
                url="https://s3.amazonaws.com/pureyogaottawa.com/videos/Advanced-M.Dynie.mp4"
              />
            </Col>
            <Col>
              <MiniVideo
                name="Dolphin Post"
                url="https://s3.amazonaws.com/pureyogaottawa.com/videos/Dolphin+Pose.mp4"
              />
            </Col>
            <Col>
              <MiniVideo
                name="Core Flow w/ Amber"
                url="https://s3.amazonaws.com/pureyogaottawa.com/videos/Core+Flow-Amber.mp4"
              />
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <MiniVideo
                name="15 Minute Sculpt"
                url="https://s3.amazonaws.com/pureyogaottawa.com/videos/15+minute+sculpt-Andrea+R.mp4"
              />
            </Col>
            <Col>
              <MiniVideo
                name="Advanced Techniques w/ Mike"
                url="https://s3.amazonaws.com/pureyogaottawa.com/videos/Advanced-M.Dynie.mp4"
              />
            </Col>
            <Col>
              <MiniVideo
                name="Dolphin Post"
                url="https://s3.amazonaws.com/pureyogaottawa.com/videos/Dolphin+Pose.mp4"
              />
            </Col>
            <Col>
              <MiniVideo
                name="Core Flow w/ Amber"
                url="https://s3.amazonaws.com/pureyogaottawa.com/videos/Core+Flow-Amber.mp4"
              />
            </Col>
          </Row>
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
          height="100%"
          style={{ maxWidth: '100%' }}
        />
        {this.props.name}
      </div>
    );
  }
}
