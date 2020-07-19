import React, { Component } from 'react';
import Hero from '../components/Hero';
import PureData from '../utils/src';
import ClassStyleData from '../components/ClassStyleData';
import styled from 'styled-components';
import textile from 'textile-js';
import DocumentTitle from 'react-document-title';
import { fonts } from '../styles/variables';
import { Schedule } from '../components/Schedule';
import { withRouter } from 'next/router'
import ScheduleWrapper from '../components/ScheduleWrapper';
import Favorite from '../components/Favorite';
import Layout from '../components/Layout';

class Show extends Component {
  render() {
    const CS = ClassStyleData(ClassStyle, PureData);
    return (
      <Layout>
      <div style={{ background: '#f5f5f5' }}>
        <CS class_style={this.props.router.query.handle} />
      </div>
      </Layout>
    );
  }
}

class ClassStyle extends Component {
  render() {
    const class_style = this.props.class_styles;
    const doc_title = [
      class_style.title,
      'Class Style',
      'Pure Fit Ottawa'
    ].join(' | ');
    const ScheduleWrapped = ScheduleWrapper(Schedule, PureData);
    const loaded = class_style ? (
      <DocumentTitle title={doc_title}>
        <React.Fragment>
          <Hero
            custom_imgs={[class_style.hero.background_image.url]}
            title={''}
            subtitle={''}
            compact
            close={'/class_styles'}
          />
          <HeadRow>
            <Title>
              {class_style.title}
              <Favorite id={[class_style.id].join('-')} favorite_type="cs" />
            </Title>
          </HeadRow>
          <FlexRow>
            <FlexCol>
              <SubTitle>{class_style.teaser}</SubTitle>
              <ClassDescription
                dangerouslySetInnerHTML={{
                  __html: textile(class_style.description)
                }}
              />
            </FlexCol>
            <FlexCol>
              <ScheduleWrapped
                name={'Upcoming ' + class_style.title + ' Classes'}
                class_style={class_style.title}
                days={14}
                full_link={false}
              />
              <br />
            </FlexCol>
          </FlexRow>
          <div
            style={{
              fontWeight: 'normal',
              margin: '0 auto',
              textAlign: 'center',
              padding: '2em',
              background: '#fff'
            }}
          >
            <a
              href="/class-styles"
              style={{ color: '#333', textAlign: 'center' }}
            >
              Class Styles{' '}
            </a>{' '}
            &raquo; {class_style.title}
          </div>
        </React.Fragment>
      </DocumentTitle>
    ) : (
      <span>Loadin</span>
    );
    return <div>{loaded}</div>;
  }
}

const ClassDescription = styled.p`
  font-weight: 100;
  text-transform: none;
  * {
    text-transform: none;
    font-weight: 300;
  }
`;

const Title = styled.h1`
  ${fonts.primary};
  font-size: 2em;
  font-weight: 450;
`;

const SubTitle = styled.h3`
  ${fonts.highlight};
  font-size: 1.4em;
`;

const HeadRow = styled.div`
  padding: 2em;
  text-align: center;
  margin: 0 auto;
`;

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const FlexCol = styled.div`
  width: 50%;
  @media (max-width: 600px) {
    width: 100%;
    padding: 1em;
  }
  padding: 3em;
  text-align: left;
  height: 100%;
  p { 
    font-size: 1.1em; line-height: 1.4em;
    white-space: pre-wrap;
    font-family: futura-pt;
    font-style: normal;
    font-size: 18px;
    letter-spacing: .05em;
    line-height: 2em;
    font-weight: 300;
    }  
  } 
`;

// const BlockQuote = styled.span`
//   font-size: 2em;
//   font-weight: 650;
//   line-height: 1.8em;
//   display: block;
//   margin: 1em 12px 2em;
// `

export default withRouter(Show);