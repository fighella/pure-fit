import React, { Component } from 'react';
import Hero from '../Hero';
import PureData from '../utils/src';
import ClassStyleData from '../ClassStyleData';
import styled from 'styled-components';
import textile from 'textile-js';
import DocumentTitle from 'react-document-title';
import { fonts } from '../css_variables';
import { Schedule } from '../Schedule';
import ScheduleWrapper from '../ScheduleWrapper';
import Favorite from '../Favorite';

export default class Show extends Component {
  render() {
    const CS = ClassStyleData(ClassStyle, PureData);
    return (
      <div style={{ background: '#f5f5f5' }}>
        <CS class_style={this.props.match.params.handle} />
      </div>
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
`;

const FlexCol = styled.div`
  width: 50%;
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
