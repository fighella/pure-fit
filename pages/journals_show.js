import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Disqus from 'disqus-react';
import styled from 'styled-components';
import textile from 'textile-js';
import Socials from '../components/Socials';
import Layout from '../components/Layout'
import fetch from 'isomorphic-unfetch';
import Head from 'next/head';
import { NewToYogaStrap } from '../components/NewToYogaStrap';
import { AppHelpers } from '../utils/tools';
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


const Show = ({ blog, router }) => {
    const disqusShortname = 'pureyogaottawa';
    const disqusConfig = {
      url:
        'https://www.purefitottawa.com/journals/' + router.query.handle,
      identifier: router.query.handle,
      title: 'Pure Journal.'
    };
    const post = blog || {};
    const author_link = (
      <AuthorLink href={'/team/' + post.author_handle}>
        {post.author}
      </AuthorLink>
    );
    const post_id = post.id;
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
            </React.Fragment>
        
          );
        })
      : '';
    var content = (
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
                <BlogCollection blockWidth="100%" workshopsOnly sideBar/>
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
    );
    return(<Layout> <Head>
      <title>
        {post.title} | Pure Fit Ottawa Journal
      </title>
      <meta property="og:image" content={post.hero_image ? post.hero_image.url : ''} />
      <meta property="og:type" content="article" />
    </Head> {content}</Layout>);
}


Show.getInitialProps = async function(context) {
  const { handle } = context.query
  console.log('ShowHandle',handle)
  try {
    const response = await fetch(AppHelpers.mbParams({ handle: handle }, 'blog'));
    const json = await response.json();
    console.log('Bloggin',json);
    return {
      blog: json.blogs[0]
    }
  } catch {
    console.log('noFetchError()');
  }
}

const AuthorLink = styled.a`
  color: #999;
`;

export default withRouter(Show);