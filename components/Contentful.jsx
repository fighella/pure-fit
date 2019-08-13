import React, { Component } from "react";
import styled from "styled-components";
import textile from "textile-js";
import Link from 'next/link'
import ReactPlayer from 'react-player';

const contentful = require("contentful");
const SPACE_ID = "hmbn1d6s90j4";
const ACCESS_TOKEN =
  "ad22c819dfadabb93437878e689131d7e64b841bc6d5ee52f333c02fcfee5d8f";
const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

export class Contentful extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contents: [],
      loaded: false
    };
  }
  componentDidMount() {
    this.props.content_type == "video" ? this.fetchVideos() : false;
  }
  fetchVideos = async () => {
    console.log(this.props.teacher);
    try {
      const response = await client.getEntries({
        content_type: "video",
        'fields.active': true,
        'fields.mainTeacher.sys.contentType.sys.id': 'teacher',
        'fields.mainTeacher.fields.name': this.props.teacher,
        include: 2,
        limit: 1
       
      });
      let json = await response;
      this.setState({
        contents: json.items.reverse(),
        loaded: true
      });
      console.log(this.state.contents)
    } catch {
      console.log("noFetchError()");
    }
  };
  grabEntry = async () => {
    try {
      const response = await client.getEntry(this.props.entry);
      let json = await response;
      this.setState({
        message: json.fields.scheduleMessage,
        message_active: json.fields.scheduleMessageOn
      });
    } catch {
      console.log("noFetchError()");
    }
  };

  render() {
    const vids = this.state.contents.slice(0, 3).map((item, index) => (
      <FlexCol id={item.fields.title}>
        <MiniVideo name={item.fields.title} url={item.fields.vimeo} />
        <VideoDescription>
        <div style={{ padding: '5% 8%' }}>
        <h4 style={{  lineHeight: '1.2em' }}>{this.props.title}</h4>
          <br/>
          <p>Yoga that fits your busy lifestyle.<br/>
            Over 300+ classes available. New classes every week.<br/>
            Practice with some of the best teachers in the world.<br/>
            Evolve your practice on your time.<br/>
            <strong>Challenge. Meditate. Relax. Learn. Strengthen. Evolve.</strong>
          </p>
          <br/>
          <p>
            <h5>Get Your First 15 Days Free</h5>
            <br/>
            <Link href={'/online'}><SmallBtn href={'/online'}>Learn More &raquo;</SmallBtn></Link>
          </p>
        </div>
        </VideoDescription>
      </FlexCol>
    ));
    const content = (
      <div>
        <FlexRow>{vids}</FlexRow>
        <br />
      </div>
    );
    return this.state.loaded ? content : false;
  }
}




export default class MiniVideo extends Component {
  render() {
    return (
      <MiniVideoHolder>
        <ReactPlayer
          url={this.props.url}
          width="100%"
          height="100%"
          controls={false}
          playing
          volume={0}
          style={{ maxWidth: '100%' }}
        />
        <VideoName>{this.props.name}</VideoName>
      </MiniVideoHolder>
    );
  }
}
const VideoName = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  text-align: center;
  color: #fff;
`

const MiniVideoHolder = styled.div`
  position: absolute;
  height: 100%;
  width: 70%;
  @media (max-width: 700px) {
    position: relative;
    width: 100%;
    height: 250px;
  }
`

const VideoDescription = styled.div`
  width: 30%;
  margin-left: 70%;
  @media (max-width: 700px) {
    position: relative;
    width: 100%;
    margin-left: 0;
    text-align: center;
  }
`


const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
`;

const FlexCol = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  width: 90%;
  display: flex;
  flex-wrap: wrap;
  background: #eee;
  position: relative;
`;

const SmallBtn = styled.a`
  margin: 0 auto;
  display: inline-block;
  padding: 0.5em 1.2em;
  font-weight: bold;
  font-size: 1.2em;
  border-radius: 10px;
  border: 1px solid palevioletred;
  background: palevioletred;
  color:#fff !important;
  text-transform: uppercase;
  transition: 0.5s all;
    &:hover { cursor: pointer; background: #fff; color: palevioletred !important; }
`;
