import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Disqus from 'disqus-react';
import Zoom from 'react-reveal/Fade';
import styled from 'styled-components';
import DocumentTitle from 'react-document-title';
import textile from 'textile-js';
import PureData from '../utils/src';
import Socials from '../components/Socials';
import Layout from '../components/Layout'
import { NewToYogaStrap } from '../components/NewToYogaStrap';
import { withRouter } from 'next/router';

import {
  JournalContent,
  JournalCategory,
  JournalTitle,
  SubTitle,
  Author,
  ImgHolder
} from '../components/journal/styles';
import Favorite from '../components/Favorite';
import BlogCollection from '../components/BlogCollection';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      blog: false,
      loaded: true
    };
  }
  componentDidMount() {
    this.grabJournal();
  }
  grabJournal = () => {
    var src = new PureData(this.props).blog,
      params = [];
    src.filters.map((filter, index) =>
      params.push(
        Object.values(src.filters[index])[0]
          ? `&by_${Object.keys(src.filters[index])[0]}=${
              Object.values(src.filters[index])[0]
            }`
          : ' '
      )
    );
    var url = params.reduce((acc, cv) => {
      return acc + cv;
    }, src.base);
    console.log('lugabugs', url);
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ blog: data.blogs[0], loaded: true }))
      .catch(err => console.log('Did not fetch your things.' + err));
  };
  render() {
    // var location = this.state.location
    const disqusShortname = 'pureyogaottawa';
    const disqusConfig = {
      url:
        'https://pureyogaottawa.com/journal/' + this.props.router.query.handle,
      identifier: 123,
      title: 'Pure Journal.'
    };
    const post = this.state.blog || {};
    const author_link = (
      <AuthorLink href={'/team/' + post.author_handle}>
        {post.author}
      </AuthorLink>
    );
    const post_id = this.state.blog.id;
    console.log('POST', post);
    const img_array = [
      post.blog_img_1,
      post.blog_img_2,
      post.blog_img_3
    ].filter(function(el) {
      return el != null;
    });
    const contents = post.body
      ? post.body.split('---').map((para, index) => {
          return (
      
            <React.Fragment>
              {' '}
              <Zoom bottom>
                <JournalContent
                  dangerouslySetInnerHTML={{ __html: textile(para) }}
                />
                <ImgHolder>
                  {img_array[index] ? (
                    <img alt={post.title} src={img_array[index].url} />
                  ) : (
                    ''
                  )}
                </ImgHolder>
              </Zoom>
            </React.Fragment>
        
          );
        })
      : '';
    var loaded = (
      <DocumentTitle title={post.title}>

        <div
          style={{
            background: '#f5f5f5',
            borderTop: '1px solid #ccc',
            paddingTop: '4em'
          }}
        >
          <Container>
            <Row
              style={{
                position: 'relative'
              }}
            >
              <Col md={8} xs={12}>
                <JournalCategory>{post.category}</JournalCategory>
                <JournalTitle>{post.title}</JournalTitle>
                <SubTitle>{post.teaser}</SubTitle>
                <Author>
                  By{' '}
                  <strong>
                    {post.author_handle ? author_link : post.author}
                  </strong>{' '}
                  &nbsp;
                  <Disqus.CommentCount
                    shortname={disqusShortname}
                    config={disqusConfig}
                  >
                    Comments
                  </Disqus.CommentCount>
                  <Favorite id={[post_id].join('-')} favorite_type="js" />
                </Author>

                <ImgHolder>
                  <img
                    src={post.hero_image ? post.hero_image.url : ''}
                    alt={post.title}
                  />
                </ImgHolder>
                {contents}
                <h3>Comments</h3>
                <Disqus.DiscussionEmbed
                  shortname={disqusShortname}
                  config={disqusConfig}
                />
                <br />
              </Col>
              <Col xs={12} md={4}>
                <BlogCollection blockWidth="100%" workshopsOnly />
                <div style={{ textAlign: 'center', paddingTop: '4em ' }}>
                  -<br />
                  <strong>COMMUNITY</strong>
                  <br />
                  <Socials />
                </div>
              </Col>
            </Row>
          </Container>

          <NewToYogaStrap />
        </div>
 
      </DocumentTitle>
    );
    var content = this.state.loaded ? loaded : 'Loading';
    return <Layout>{content}</Layout>;
  }
}

const AuthorLink = styled.a`
  color: #999;
`;

export default withRouter(Show);
