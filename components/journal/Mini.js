import React, { Component } from 'react';
import { navHeading } from '../utils/nav';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';
import Link from './utils';

class Mini extends Component {
  isFull = () => {
    return this.props.size === 'full';
  };
  routeChange = () => {
    let path = Link(this.props.handle);
    this.props.history.push(path);
  };
  render() {
    var teaser = <p>{this.props.desc}</p>;
    var blogClassName = this.isFull() ? 'mini-blog flexCol' : 'mini-blog';
    var read_more = (
      <a
        className="btn btn-primary btn-sm btn-red"
        href={Link(this.props.slug)}
      >
        Read more...
      </a>
    );
    const img = this.props.teaser_image ? (
      <img
        src={this.props.teaser_image.background_image.url}
        alt="Blog Post"
        style={{ maxWidth: '100%' }}
      />
    ) : (
      false
    );

    return (
      <BlogTeaser onClick={this.routeChange}>
        <div className={blogClassName} style={{ position: 'relative' }}>
          <ImageHolder isFull={this.isFull()}>
            {img}
            {this.isFull() || !this.props.header ? (
              <SubCategory>{this.props.category}</SubCategory>
            ) : (
              false
            )}
          </ImageHolder>
          <div
            style={{
              paddingTop: this.props.header ? '1em' : false,
              width: '100%',
              minWidth: this.isFull() ? 250 : false,
              lineHeight: 1.4,
              background: this.props.header ? '#f5f5f5' : false,
              position: this.props.header ? 'absolute' : false,
              bottom: this.props.header ? 0 : false
            }}
          >
            {this.isFull() || this.props.header ? (
              <SubTitle>{this.props.category}</SubTitle>
            ) : (
              false
            )}
            {this.isFull() ? (
              navHeading(this.props.name)
            ) : (
              <BlogTitle
                style={{ fontSize: this.props.header ? '1.8em' : false }}
              >
                {this.props.name}
              </BlogTitle>
            )}
            {this.isFull() || this.props.header ? teaser : false}
            {this.isFull() ? read_more : false}
          </div>
        </div>
      </BlogTeaser>
    );
  }
}

const BlogTitle = styled.strong`
  font-weight: 650;
  font-size: 0.9em;
  line-height: 1.2em;
  display: block;
`;
const BlogTeaser = styled.div`
  margin-bottom: 2.4em;
  cursor: pointer;
`;

const SubTitle = styled.div`
  clear: both;
  font-weight: 100;
  font-size: 13px;
  letter-spacing: 1px;
  color: palevioletred;
`;

const SubCategory = styled.span`
  display: inline-block;
  position: absolute;
  font-size: 11px;
  background: rgba(255, 255, 255, 0.7);
  padding: 1px 5px;
  text-transform: uppercase;
  color: #333;
  bottom: 10px;
  left: 0;
`;

const ImageHolder = styled.div`
  position: relative;
  margin-bottom: 12px;
  padding: ${props => (props.isFull ? '0 10px 0 0' : '0')};
`;

export default withRouter(Mini);
