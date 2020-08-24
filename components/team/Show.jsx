import React from 'react';
import styled from 'styled-components';
import textile from 'textile-js';
import DocumentTitle from 'react-document-title';
import PropTypes from 'prop-types';
import Favorite from '../Favorite';
import Hero from '../Hero';
import PureData from '../utils/src';
import TeamData from '../TeamData';
import { fonts } from '../css_variables';
import { Schedule } from '../Schedule';
import EvolveRow from '../evolve/row';
import ScheduleWrapper from '../ScheduleWrapper';
import { Instafeed } from '../Instafeed';
import { SingleColWrapper } from '../SingleColWrapper';

const InstafeedWrapped = SingleColWrapper(Instafeed);
const ScheduleWrapped = ScheduleWrapper(Schedule, PureData);

const Show = ({ match }) => (
  <div style={{ background: '#f5f5f5' }}>
    <Teacher teacher={match.params.handle} />
  </div>
);

Show.propTypes = {
  match: PropTypes.string.isRequired
};

// https://stackoverflow.com/questions/12931828/convert-returned-json-object-properties-to-lower-first-camelcase
function TeacherProfile({ teacher_data, workshops_data }) {
  const teacher = teacher_data;
  const docTitle = [teacher.title, 'Yogi', 'Pure Fit Ottawa'].join(' | ');
  const workshops = workshops_data ? (
    <EvolveRow
      title={`${teacher.first_name}'s Upcoming Workshops, Training & Retreats`}
      workshops={workshops_data}
    />
  ) : (
    false
  );
  const loaded = teacher ? (
    <DocumentTitle title={docTitle}>
      <React.Fragment>
        <Hero
          custom_imgs={[teacher.pose_1.background_image.url]}
          title=""
          subtitle=""
          compact
          close="/team"
        />
        <HeadShot headshot={teacher.headshot.card.url} />
        <HeadRow>
          <Title>
            {teacher.title}
            <Favorite id={[teacher.id].join('-')} favorite_type="tr" />
          </Title>
          <SubTitle>{teacher.position}</SubTitle>
        </HeadRow>
        <FlexRow>
          <FlexCol>
            <TeacherDescription
              dangerouslySetInnerHTML={{
                __html: textile(teacher.description)
              }}
            />
          </FlexCol>
          <FlexCol>
            <ScheduleWrapped
              name={`Upcoming Classes for ${teacher.first_name}`}
              teacher={teacher.title}
              days={14}
              full_link={false}
            />
            <br />
          </FlexCol>
        </FlexRow>
        {workshops}
        {teacher.instagram_token ? (
          <InstafeedWrapped
            title={`${teacher.first_name} on Instagram`}
            fluid
            fullWidth
            const
            accessToken={teacher.instagram_token}
          />
        ) : (
          false
        )}
        <div
          style={{
            fontWeight: 'normal',
            margin: '0 auto',
            textAlign: 'center',
            padding: '2em',
            background: '#fff'
          }}
        >
          <a href="/team" style={{ color: '#ccc', textAlign: 'center' }}>
            MEET THE TEAM{' '}
          </a>{' '}
          &raquo;{' '}
          {teacher.title}
        </div>
      </React.Fragment>
    </DocumentTitle>
  ) : (
    <span>Loadin</span>
  );
  return <div>{loaded}</div>;
}

const Teacher = TeamData(TeacherProfile, PureData);
TeacherProfile.propTypes = {
  teacherData: PropTypes.arrayOf.isRequired,
  workshopsData: PropTypes.arrayOf.isRequired
};

const TeacherDescription = styled.div``;

const HeadShot = styled.div`
  position: relative;
  z-index: 2;
  border: 4px solid #fff;
  padding: 4px;
  background-color: #fff;
  box-shadow: 0 0 5px #ccc;
  margin: 0 auto;
  margin-top: -70px;
  height: 140px;
  width: 140px;
  overflow: hidden;
  background-image: url(${props => props.headshot});
  background-size: contain;
  border-radius: 50%;
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
    @media (max-width: 500px) {
      width: 100%;
    };
`;

// const BlockQuote = styled.span`
//   font-size: 2em;
//   font-weight: 650;
//   line-height: 1.8em;
//   display: block;
//   margin: 1em 12px 2em;
// `

export default Show;
